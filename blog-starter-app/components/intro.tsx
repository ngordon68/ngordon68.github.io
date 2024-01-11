import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'

const Intro = () => {
  return (
<div className="container mt-5">
<div className="header flex justify-center items-center">
  <h2 className="text-3xl font-bubble tracking-tight text-gray-900 sm:text-5xl">Software Skills</h2>

</div>

<div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-start mt-4">


  <div className="main-text">
    

          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 'bottom-5opx' }}>
      {/* Card 1 */}
      <div style={{ border: '3px solid #ccc', padding: '20px', width: '30%', background: '#1F2937' }}>
        <img src="/assets/blog/dynamic-routing/lofi.jpg" alt="Image 1" style={{ width: '100%' }} />
       
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl py-10">Want your app  <pre>created?</pre></h2>
            
              <Link href="/inquiry"
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-20 py-5 text-base font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Get started
              </Link>

              
          

      </div>

      {/* Card 2 */}
      <div style={{ border: '3px solid #ccc', padding: '20px', width: '30%', background: '#1F2937' }}>
        <img src="/assets/blog/dynamic-routing/laptop.jpg" alt="Image 2" style={{ width: '100%' }} />

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl py-10">Want to learn <pre>code?</pre></h2>


        <Link href="/course"
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-20 py-5 text-base font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Let's Learn
              </Link>
        
      </div>

      {/* Card 3 */}
      <div style={{ border: '3px solid #ccc', padding: '20px', width: '30%', background: '#1F2937' }}>
        <img src="/assets/blog/authors/nick.jpeg" alt="Image 3" style={{ width: 'fit-content' }} />


        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl py-10">Want to know more about me?</h2>

        <Link href="/aboutme"
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-20 py-5 text-base font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Find out
              </Link>

      </div>
    </div>
  </div>
</div>




</div>
  )
}

export default Intro








