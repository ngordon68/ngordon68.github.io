import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Course = () => {
  return (


    <div className="header flex justify-center items-center mt-10">



   
<div className="max-w-xl lg:max-w-lg">
<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Stay updated on Course Information.</h2>
<p className="mt-4 text-lg leading-8 text-gray-300">
Add your email to get updates on new content.
</p>
<div className="mt-6 flex max-w-md gap-x-4">
  <label htmlFor="email-address" className="sr-only">
    Email address 
  </label>
  <input
    id="email-address"
    name="email"
    type="email"
    autoComplete="email"
    required
    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
    placeholder="Enter your email"
  />
  <button
    type="submit"
    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
  >
   Stay updated
  </button>
</div>
</div>
</div>


  )
}

export default Course
