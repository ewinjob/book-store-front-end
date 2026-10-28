import React from 'react'
import { ImLocation } from "react-icons/im";
import { TiPhone } from "react-icons/ti";
import { TbMailFilled } from "react-icons/tb";
import Header from '../components/Header';
import Footer from '../../components/Footer';


function Contact() {
  return (
    <>

     <Header/>
    
    <div className='text-center pt-10'>
      <h3 className='text-3xl font-serif'>
        <strong>Contact</strong>
      </h3>
    </div>

    <div className='mx-10 mt-5'>
      <p className='text-justify font-serif tracking-wide'>
        Have questions, feedback, or need help finding the perfect book? We'd love to hear from yout Why Contact Us? Order-related support Book availability inquiries Return/replacement queries Bulk/natitutional purchase requesta Author or partnership inquiries. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic veniam id eveniet recusandae pariatur, facilis fugs? lusto, asperiores modi cum praesentium et, her squ harum sed deleniti odio eveniet. Maiores delectus iusto voluptatibus officia eveniet sunt quibusdam mollitia, error fugit laborum dolorum deserunti Queerat magni ad, veritatis dolor iusto, qu officiia perferendis unde, maiores quos praesentium voluptatibus. Magni dolores impedit, officia doloribus repellat fuga quos ad natus recusandae sed numquam fugiat, sepiente minima, nam vero incidunt there s Minima praesentium laborum tenetur corporis quod dolorum maxime pariatur.
      </p>
    </div>

      <section className='flex justify-evenly items-center mt-10'>
        <div className='flex justify-center items-center'>
            <div className='border-2 py-1 px-1 rounded-4xl bg-gray-400'>
              <ImLocation className='text-2xl'/>
            </div>
              <p className='ps-3'>123,main street , anytwon nearby</p>
        </div>
        <div className='flex justify-center items-center'>
            <div className='border-2 py-1 px-1 rounded-4xl bg-gray-400'>
              <TiPhone className='text-2xl'/>
            </div>
              <p className='ps-3'>91+0987654321</p>
        </div>
        <div className='flex justify-center items-center'>
          <div className='border-2 py-1 px-1 rounded-4xl bg-gray-400'>
              <TbMailFilled className='text-2xl'/>
          </div>
            <p className='ps-3'>bookthebook21@gmail.com</p>
        </div>
      </section>



      <section className="mx-10 my-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch max-w-6xl mx-auto">

    
    <div className="bg-gray-300 rounded-3xl p-8 md:p-12 shadow-md">
      <h2 className="text-4xl font-serif text-black mb-8">Send Us a Message</h2>

      <form  className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            required
            placeholder="Your name"
            className="block w-full px-5 py-3 text-black bg-white border border-gray-200 rounded-xl placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            required
            placeholder="example@gmail.com"
            className="block w-full px-5 py-3 text-black bg-white border border-gray-200 rounded-xl placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
          <textarea
            required
            rows={5}
            placeholder="How can we help you?"
            className="block w-full px-5 py-3 text-black bg-white border border-gray-200 rounded-xl resize-none placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 text-sm text-white duration-200 bg-black border-2 border-black rounded-xl hover:bg-transparent hover:text-black focus:outline-none"
        >
          Submit your request
        </button>
      </form>
    </div>

    
    <div className="rounded-3xl overflow-hidden shadow-md min-h-400px">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.722680345981!2d76.21078157517013!3d10.522494863825974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef5cee5d845b%3A0xa1e3583f9391e59b!2sLuminar%20Technolab%20-%20Software%20training%20institute%20in%20Thrissur!5e0!3m2!1sen!2sin!4v1792380265132!5m2!1sen!2sin"
        className="w-full h-full min-h-400px border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Location map"
      />
    </div>

  </div>
</section>

  <Footer/>

    </>
  )
}

export default Contact