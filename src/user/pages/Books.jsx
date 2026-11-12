import React, { useContext, useEffect, useMemo, useState } from 'react'
import { GrFormSearch } from "react-icons/gr";
import Header from '../components/Header';
import Footer from '../../components/Footer';
import { getAllBooksAPI } from '../../services/apiService';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { SearchContext } from '../../context/SearchContextShare';



function Books() {

  const [books,setBooks]=useState([])

  const {searchKey,setSearchKey}=useContext(SearchContext)
  console.log(searchKey);
  

  const navigate = useNavigate()

  const [token,setToken]=useState('')

  // const [category,setCategory]=useState('')

  const categories = [...new Set(books.map(book => book.category))]
  console.log(categories,'got it');
  

    const userToken = sessionStorage.getItem("userToken")
      const reqHeader = {
    Authorization: `Bearer ${userToken}`,
  };


  const getAllBook=async(searchKey)=>{ 
    try{
          const res = await getAllBooksAPI(searchKey,reqHeader)
    console.log(res.data.getBooks);

    setBooks(res.data.getBooks)
    

    }catch(err){
      console.log('showing',err);
      
    }
    
  }

    useEffect(() => {
    const userToken = sessionStorage.getItem('userToken')

    if (userToken) {
      setToken(userToken)
      getAllBook(searchKey)
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Please login first',
      }).then(() => {
        navigate('/login')
      })
    }
  }, [searchKey])



  return (
    <>
    
     <Header/>

     {
      token?
      (
         <div>
    <div className='text-center mt-10'>
      <h2 className='text-4xl font-extrabold font-mono'>
        All Books
      </h2>
    </div>

<div className='flex items-center justify-center p-5'>
  <div className='flex w-full max-w-xl items-center gap-2 rounded-full border border-gray-200 bg-white/60 backdrop-blur pl-4 pr-1.5 py-1.5 transition focus-within:border-gray-400 focus-within:ring-4 focus-within:ring-gray-100'>

    <GrFormSearch className='shrink-0 text-2xl text-gray-400' />

    <input
      type="text"
      required
      onChange={(e) => setSearchKey(e.target.value)}
      className='w-full min-w-0 bg-transparent text-sm text-gray-800 placeholder:text-gray-400 outline-none'
      placeholder='Search by title...'
    />

    <button
      type="button"
      className='shrink-0 rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700'
    >
      Search
    </button>

  </div>
</div>


     <main className='flex flex-col items-center justify-center gap-6 mx-4 lg:flex-row lg:items-start lg:gap-10 lg:mx-10'>
 <aside className='pb-10 lg:w-60 lg:shrink-0'>
  <div className='lg:sticky lg:top-24 rounded-2xl border border-gray-200 bg-white/60 backdrop-blur p-5'>

    {/* Header */}
    <div className='flex items-center justify-between pb-4 mb-3 border-b border-gray-200'>
      <h2 className='font-semibold text-xl tracking-tight text-gray-900'>
        Filter
      </h2>
      <span className='text-xs uppercase tracking-widest text-gray-400'>
        Category
      </span>
    </div>

    {/* Options */}
    <section className='flex flex-col gap-1'>

      <label className='group flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-100'>
        <input
          type="checkbox"
          className='h-4 w-4 rounded border-gray-300 accent-black cursor-pointer'
        />
        <span className='text-sm font-medium text-gray-700 group-hover:text-black'>
          All
        </span>
      </label>

      {
        categories.map((category, index) => (
          <label
            key={index}
            className='group flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-100'
          >
            <input
              type="checkbox"
              className='h-4 w-10 rounded border-gray-300 accent-black cursor-pointer'
            />
            <span className='text-sm text-gray-600 group-hover:text-black'>
              {category}
            </span>
          </label>
        ))
      }
    </section>

  </div>
</aside>

      <aside className='flex flex-1 px-5 flex-wrap justify-center gap-5 lg:justify-start'>

        {
  books.length > 0 ? (
    books.map((item) => (
      <Link
            to={`/books/${item._id}`}>
      <div
        key={item._id}
        className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-50"
      >
        <div className="relative h-60 m-2.5 overflow-hidden text-white rounded-md">
          <img
            src={item.imageUrl}
            width={500}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-4">
          <h6 className="mb-2 text-slate-800 text-xl font-semibold">
            {item.title}
          </h6>
          <p className="text-slate-600 leading-normal font-light">
            {item.author}
          </p>

          <button
            className="flex justify-center items-center rounded-xl mx-auto px-6 my-auto mt-3 bg-sky-100 hover:bg-sky-200"
          >
            View
            </button>
          
        </div>
      </div>
      </Link>
    ))
  ) : (
    <p>No Books</p>
  )
}
      </aside>
     </main>
  </div>
      ) : (
        null
      )
     }

     

     <Footer/>
    
    

    </>
  )
}

export default Books