
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Register from './components/Register';
import Home from './components/Home';
import Blog from './components/Blog';
import { useSelector, useDispatch } from 'react-redux';
import logo from './assests/logo.avif'
import Test from './components/Test'

import About from './components/About'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { useState } from 'react'
import BlogForm from './components/BlogForm'
import MyBlogs from './components/MyBlogs';
import {logout} from './redux/authSlice';
import BlogEdit from './components/BlogEdit';
import BlogDelete from './components/BlogDelete';
import Footer from './components/Footer';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';








const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'Profile', href: '/profile' },
  { name: 'Register', href: '/signup' },
  { name: 'Blogs', href: '/blog' },
  
]


function App() {


  const user = useSelector((state) => state.user.user.email)
  const token = useSelector((state) => state.user.token.token)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const[navigate, setNavigate] = useState(false)
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    setNavigate(true);
  }

  if (navigate){
    <Navigate to='/login'/>
  }

  


  return <BrowserRouter>


  <div className="bg-white">

    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to={'/'}>
            <img
              className=" h-10 w-auto"
              src={logo}
              alt="Your Company"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </Link>
          ))}
          {user ? (
            <Link  to={'/myblogs'} className="text-sm font-semibold leading-6 text-gray-900">
            My Blogs
           </Link>
          ):(
            <></>
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {user ? (
            <button onClick = {handleLogout} className="text-sm font-semibold leading-6 text-gray-900">
            Log out <span aria-hidden="true">&rarr;</span>
          </button>
          ):(<Link to={'/login'} className="text-sm font-semibold leading-6 text-gray-900">
          Log in <span aria-hidden="true">&rarr;</span>
        </Link>)}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to={'/'}>
              <img
                className=" h-10 w-auto"
                src={logo}
                alt="Your Company"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
                {user ? (
                  <Link
                  to={'/myblogs'}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                 My Blogs
                </Link>
                ):(
                  <></>
                )}
              </div>
              <div className="py-6">
                {user ? (
                  <button
                  onClick = {handleLogout}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log out
                </button>
                ):(
                  <Link
                  to={'/login'}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
  </div>


    <Routes>
      <Route path='/profile' element={<Home  />} />
      <Route path='/login' element={<Login  />} />
      <Route path='/home' element={<Test />} />
      <Route path='/' element={<Test />} />

      <Route path='/signup' element={<Register />} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/blog_form'  element={<BlogForm token={token}/>} />
      <Route path='/myblogs'  element={<MyBlogs token={token}  />} />
      <Route path='/about' element={<About />} />
      <Route path="/edit/:id" element={<BlogEdit />} />
      <Route path="/delete/:id" element={<BlogDelete />} />
      <Route path='/forgot_password' element={<ForgotPassword />} />
      <Route path='/reset_password/:resetToken' element={<ResetPassword />} />



    </Routes>

    <Footer/>


  </BrowserRouter>

}

export default App;