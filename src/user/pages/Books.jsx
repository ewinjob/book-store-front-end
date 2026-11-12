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

  const categories = [...new Set(books.map(book => book.category))]
  console.log(categories,'got it');

    useEffect(() => {
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


  const filterRow =
  'group flex items-center gap-3 rounded-full border border-gray-200 px-3 py-1.5 cursor-pointer transition-colors hover:bg-gray-100 has-[:checked]:border-gray-400 has-[:checked]:bg-gray-100 lg:rounded-lg lg:border-transparent lg:py-2 lg:has-[:checked]:border-transparent'

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

     <main className='flex flex-col gap-6 mx-4 lg:flex-row lg:items-start lg:gap-10 lg:mx-10'>

  
  <aside className='w-full pb-6 lg:w-60 lg:shrink-0 lg:self-stretch'>
    <div className='lg:sticky lg:top-24 rounded-2xl border border-gray-200 bg-white/60 backdrop-blur p-5'>

      <div className='flex items-center justify-between pb-4 mb-3 border-b border-gray-200'>
        <h2 className='font-semibold text-xl tracking-tight text-gray-900'>
          Filter
        </h2>
        <span className='text-xs uppercase tracking-widest text-gray-400'>
          Category
        </span>
      </div>

      <section className='flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-1'>

        <label className={filterRow}>
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
            <label key={index} className={filterRow}>
              <input
                type="checkbox"
                className='h-4 w-4 rounded border-gray-300 accent-black cursor-pointer'
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

  
  <aside className='flex flex-1 flex-wrap justify-center gap-5 px-5 lg:justify-start'>
    {
      books.length > 0 ? (
        books.map((item) => (
          <Link key={item._id} to={`/books/${item._id}`} className='group'>
            <div className='flex w-52 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white/60 transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md'>

              <div className='h-60 overflow-hidden'>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className='h-full w-full object-cover transition duration-300 group-hover:scale-105'
                />
              </div>

              <div className='p-4'>
                <h6 className='truncate text-base font-semibold text-gray-900'>
                  {item.title}
                </h6>
                <p className='mt-0.5 truncate text-sm text-gray-500'>
                  {item.author}
                </p>

                <button className='mt-4 w-full rounded-full border border-gray-200 py-1.5 text-sm font-medium text-gray-700 transition-colors group-hover:border-gray-900 group-hover:bg-gray-900 group-hover:text-white'>
                  View
                </button>
              </div>

            </div>
          </Link>
        ))
      ) : (
        <p className='text-gray-400'>No Books</p>
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