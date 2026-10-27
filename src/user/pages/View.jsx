import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useParams } from 'react-router-dom'
import { viewBooksAPI } from '../../services/apiService'

function View() {
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const getBook = async () => {
      try {
        setLoading(true)
        const result = await viewBooksAPI(id)
        if (result.status === 200) {
          setBook(result.data.viewBooks)
        }
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    getBook()
  }, [id])

  const discount =
    book && book.price > book.dprice
      ? Math.round(((book.price - book.dprice) / book.price) * 100)
      : 0

  return (
    <>
      <Header />

      <section className="min-h-screen bg-gray-50 px-4 py-10 flex  justify-center items-center">
        {loading ? (
          <p className="text-gray-500 mt-20">Loading...</p>
        ) : !book ? (
          <div className="text-center mt-20">
            <p className="text-gray-600 mb-4">Book not found.</p>
            <Link to="/books" className="text-blue-700 font-semibold">
              ← Back to all books
            </Link>
          </div>
        ) : (
          <div className="w-full max-w-5xl my-auto bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 md:p-6 flex flex-col md:flex-row gap-6 self-start">

            
            <div className="md:w-56 shrink-0">
              <img
                src={book.imageUrl}
                alt={book.title}
                onError={(e) => {
                  e.target.src = 'https://placehold.co/300x400?text=No+Image'
                }}
                className="w-full h-80 md:h-72 object-cover rounded-lg shadow"
              />
            </div>

            
            <div className="flex-1 flex flex-col">
              <h1 className="text-2xl font-bold text-gray-900">{book.title}</h1>
              <h2 className="mt-1 text-blue-600 font-semibold">{book.author}</h2>

             
              <div className="mt-4 flex items-center gap-3">
                <span className="text-2xl font-bold text-green-700">
                  ₹{book.dprice}
                </span>
                {discount > 0 && (
                  <>
                    <span className="text-gray-400 line-through">₹{book.price}</span>
                    <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">
                      {discount}% OFF
                    </span>
                  </>
                )}
              </div>

              
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4 text-sm">
                <p><span className="font-semibold text-gray-700">Publisher: </span>{book.publisher}</p>
                <p><span className="font-semibold text-gray-700">Language: </span>{book.language}</p>
                <p><span className="font-semibold text-gray-700">Pages: </span>{book.noofpages}</p>
                <p><span className="font-semibold text-gray-700">Category: </span>{book.category}</p>
                <p><span className="font-semibold text-gray-700">ISBN: </span>{book.isbn}</p>
                <p><span className="font-semibold text-gray-700">Seller: </span>{book.userMail}</p>
              </div>

              
              <p className="mt-5 text-sm leading-relaxed text-gray-800">
                <span className="font-semibold text-gray-700">Abstract: </span>
                {book.abstract}
              </p>

              
              <div className="mt-auto pt-6 flex justify-end gap-3">
                <Link
                  to="/books"
                  className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
                >
                  <i className="fa-solid fa-backward"></i> Back
                </Link>
                <button className="bg-green-800 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors">
                  Buy ₹{book.dprice}
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default View