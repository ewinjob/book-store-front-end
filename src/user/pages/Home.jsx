import React, { useEffect, useState } from 'react'
import { MdOutlineSearch } from 'react-icons/md'
import { TextInput } from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaXTwitter, FaEnvelope, FaArrowRight } from 'react-icons/fa6'
import Header from '../components/Header'
import { latestBooksAPI } from '../../services/apiService'

function Home() {
  const [latestBooks, setLatestBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchKey, setSearchKey] = useState('')
  const navigate = useNavigate()

  const getLatestBooks = async () => {
    try {
      const res = await latestBooksAPI()
      // handles both spellings, so it works whichever your backend sends
      setLatestBooks(res?.data?.latestBooks ?? res?.data?.latesetBooks ?? [])
    } catch (err) {
      console.log('Failed to load latest books', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getLatestBooks()
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchKey.trim()) {
      navigate(`/books?search=${encodeURIComponent(searchKey.trim())}`)
    }
  }

  const handleNewsletter = (e) => {
    e.preventDefault()
    // TODO: call newsletter API here
  }

  return (
    <>
      <Header />

      {/* Hero */}
      <main className="relative h-screen w-full overflow-hidden">
        <img
          src="https://wallpaperaccess.com/full/5765638.jpg"
          alt="Books hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-40 md:px-40">
          <h2 className="my-2 text-5xl font-bold text-white">Wonderful Gifts</h2>
          <p className="mb-5 text-3xl font-bold text-white">
            Gift your family &amp; friends a book
          </p>

          <form onSubmit={handleSearch} className="mt-10 flex w-full max-w-sm items-center gap-2">
            <div className="flex-1">
              <TextInput
                type="text"
                placeholder="Search books"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                required
              />
            </div>
            <button type="submit" aria-label="Search">
              <MdOutlineSearch className="text-2xl text-white" />
            </button>
          </form>
        </div>
      </main>

      {/* Latest books */}
      <main>
        <h1 className="mb-5 mt-20 text-center text-3xl font-bold">
          Explore Our Latest Collection
        </h1>

        <section className="mt-10 flex flex-wrap items-center justify-center gap-10">
          {loading ? (
            <p>Loading...</p>
          ) : latestBooks.length > 0 ? (
            latestBooks.map((item) => (
              <Link key={item._id} to={`/books/${item._id}`}>
                <div className="my-6 flex w-70 flex-col rounded-lg border border-slate-200 bg-white shadow-sm">
                  <div className="m-2.5 h-60 overflow-hidden rounded-md">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h6 className="mb-2 text-xl font-semibold text-slate-800">{item.title}</h6>
                    <p className="font-light leading-normal text-slate-600">{item.author}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No books available yet.</p>
          )}
        </section>

        <div className="mt-5 flex items-center justify-center">
          <Link to="/books">
            <button
              type="button"
              className="rounded-md border border-transparent bg-slate-800 px-4 py-2 text-center text-sm text-white shadow-md transition-all hover:bg-slate-700 hover:shadow-lg"
            >
              Explore More
            </button>
          </Link>
        </div>
      </main>

      {/* Featured authors + testimonials */}
      <div className="mt-20 bg-white text-neutral-900">
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-center text-lg font-bold uppercase tracking-wide">
                Featured Authors
              </h2>
              <p className="mb-6 text-center text-base">Captivates with every word</p>
              <p className="text-justify text-sm leading-relaxed">
                Welcome to the Author Spotlight section of our bookstore website! This feature is
                designed to celebrate writers, showcase their creative journeys, and help readers
                discover the minds behind their favorite books.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src="https://th.bing.com/th/id/OIP.jMBvY815E6bsXFRjdSzxFQHaEp?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Featured author"
                className="h-64 w-full max-w-md object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-20 pt-10 text-center">
          <h2 className="text-lg font-bold uppercase tracking-wide">Testimonials</h2>
          <p className="mb-6 text-base">See What Others Are Saying</p>

          <img
            src="https://photos.zillowstatic.com/fp/289341692411be211027cd0330dfd5cb-h_l.jpg"
            alt="Luthur King"
            className="mx-auto h-32 w-32 rounded-full bg-neutral-200 object-cover"
          />
          <p className="mt-3 text-xs">Luthur King</p>

          <p className="mt-4 text-justify text-sm leading-relaxed">
            This bookstore has completely changed the way I discover new books. The
            recommendations are always spot-on, and the delivery is super fast. I love the clean
            interface and the huge collection! The user experience is amazing! Easy navigation,
            great deals, and beautifully organized categories. I appreciate how quickly customer
            support responds too.
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">About Us</h3>
            <p className="text-justify text-sm leading-relaxed">
              We believe books are more than just pages — they are windows into new worlds,
              teachers of wisdom, and companions for life. Our journey began with a passion for
              storytelling and a mission to make reading accessible, enjoyable, and inspiring for
              everyone.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">News Letter</h3>
            <p className="mb-4 text-sm">Stay updated with our latest trends</p>
            <form onSubmit={handleNewsletter} className="flex w-full max-w-220px">
              <input
                type="email"
                required
                placeholder="E Mail"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-white px-2 py-1.5 text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex w-8 items-center justify-center bg-yellow-400 text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <FaArrowRight className="text-xs" />
              </button>
            </form>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">Follow Us</h3>
            <p className="mb-4 text-sm">Let us be social</p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-sm hover:text-yellow-400">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="text-sm hover:text-yellow-400">
                <FaInstagram />
              </a>
              <a href="#" aria-label="X" className="text-sm hover:text-yellow-400">
                <FaXTwitter />
              </a>
              <a href="#" aria-label="Email" className="text-sm hover:text-yellow-400">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <p className="flex flex-wrap items-center justify-center gap-1 px-6 pb-4 text-center text-xs">
          | Copyright © 2026 All rights reserved |
        </p>
      </footer>
    </>
  )
}

export default Home