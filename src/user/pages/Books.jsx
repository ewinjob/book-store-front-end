import React, { useEffect, useMemo, useState } from 'react'
import { GrFormSearch } from "react-icons/gr";
import Header from '../components/Header';
import Footer from '../../components/Footer';
import { getAllBooksAPI } from '../../services/apiService';
import { Link } from 'react-router-dom';



function Books() {

  const [books,setBooks]=useState([])
  const[search,setSearch]=useState('')





  const getAllBook=async()=>{
    
    try{

          const res = await getAllBooksAPI()
    console.log(res.data.getBooks);

    setBooks(res.data.getBooks)

    }catch(err){
      console.log('showing',err);
      
    }
    
  }

  useEffect(()=>{getAllBook()},[])

  return (
    <>
    
     <Header/>

    <div className='text-center mt-10'>
      <h2 className='text-4xl font-extrabold font-mono'>
        All Books
      </h2>
    </div>

    
<div className="flex items-center justify-center p-5">
  <div className="rounded-lg p-5">
    <div className="flex items-stretch">
      <div className="flex w-12 shrink-0 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-blue-500">
        <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none flex w-5 items-center justify-center fill-gray-500 transition">
          <GrFormSearch className='text-2xl'/>
        </svg>
      </div>
      <input type="text"  className="w-full min-w-0 bg-gray-400 pl-2 text-base font-semibold outline-0 sm:w-72" placeholder="" />
      <input type="button" value="Search" className="bg-blue-500 px-4 py-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"/>
    </div>
  </div>
</div>


     <main className='flex flex-col items-center justify-center gap-6 mx-4 lg:flex-row lg:items-start lg:gap-10 lg:mx-10'>
       <aside className='pb-10 lg:w-56 lg:shrink-0'>

        <div className='my-5'>
             <h2 className='font-bold text-3xl'>
          Filter
        </h2>
            </div>
       
               <section className='flex flex-col justify-center gap-2 ms-5  items-start'>

          <label className='flex items-center cursor-pointer'>
            <input type="checkbox" />
            <span className='mx-2'>All</span>
          </label>

          <label className='flex items-center cursor-pointer'>
            <input type="checkbox" />
            <span className='mx-2'>History</span>
          </label>

          <label className='flex items-center cursor-pointer'>
            <input type="checkbox" />
            <span className='mx-2'>Fantasy</span>
          </label>

          <label className='flex items-center cursor-pointer'>
            <input type="checkbox" />
            <span className='mx-2'>Programming</span>
          </label>

          <label className='flex items-center cursor-pointer'>
            <input type="checkbox" />
            <span className='mx-2'>Self-help</span>
          </label>

          <label className='flex items-center cursor-pointer'>
            <input type="checkbox" />
            <span className='mx-2'>Finance</span>
          </label>
        </section>

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
    
    

    </>
  )
}

export default Books