/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { use, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { sendContactForm } from '../lib/apiContact'
import MyButton from './apibutton'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const initValues = {

name: "",
lastName: "",
email: "",
company: "",
iOS: "N/A",
Android: "N/A",
Website: "N/A",
Profiles: "N/A",
Charts: "N/A",
Login: "N/A",
PaymentProcessing: "N/A",
Ordering: "N/A",
HaveHiFi: "N/A",
message: ""

}
const initState = { values: initValues }


export default function Contact() {

  const [loading, setLoading] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [agreed, setAgreed] = useState(false);

  const [state, setState] = useState(initState);

  const [isChecked, setIsChecked] = useState(false);

  
  
  const buttonName = "Let\'s talk"

  const { values} = state;

 const handleChange = ({ target }) =>
        setState((prev) => ({
            ...prev,
            values: {
              ...prev.values,
              [target.name]: target.value,
              
            },
        }));



        const handleCheckboxChange = ({ target }) => {
          const { name, checked } = target;
      
          setState((prev) => ({
            ...prev,
            values: {
              ...prev.values,
              [name]: checked ? target.value : 'N/A', // Update the value based on checkbox status
            },
          }));
        };

        const handleSendEmail = async (data) => {
          event.preventDefault();

          setLoading(true);

          console.log('Attempting to send email...');
          const cleanValues = JSON.parse(JSON.stringify(values));
          setState((prev) => ({
            ...prev

        }));
          try {
            const response = await fetch('/api', {
              method: 'POST',
              body: JSON.stringify(cleanValues),
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              }
            });
        
            if (response.ok) {
              console.log('Email sent successfully');
              console.log(cleanValues)
              setLoading(false);
              setSubmitted(true);
        

              // Handle success message or action here
            } else {
              console.error('Failed to send email');
              // Handle error message or action here
            }
          } catch (error) {
            console.error('Error sending email:', error);
            // Handle error message or action here
          }
        };

  const onSubmit = async () => {
          setState((prev) => ({
              ...prev

          }));
          await sendContactForm(values)
          
        };

  return (
    <div className="isolate bg-blue px-6 py-24 sm:py-32 lg:px-8 ">
    
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Provide your information below.
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="first-name"
                value={values.name}
                onChange={handleChange}

                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="last-name"
                value={values.lastName}
                onChange={handleChange}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                value={values.company}
                onChange={handleChange}
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
      
          <div>
      <p>What <strong>platforms</strong> do you want your app on?:</p>
        <input type="checkbox"
        id="platform1"
        name="iOS"
        value="iOS"
        checked={values.iOS === 'iOS'} // Check if value matches the checkbox value
        onChange={handleCheckboxChange}/>
        <label htmlFor="platform1"> iOS</label><br />

        
        <input type="checkbox"
        id="platform2"
        name="Android"
        value="Android"
        checked={values.Android === 'Android'} // Check if value matches the checkbox value
        onChange={handleCheckboxChange}/>
        <label htmlFor="platform2"> Android</label><br />

        <input type="checkbox"
        id="platform3"
        name="Website"
        value="Website"
        checked={values.Website === 'Website'} // Check if value matches the checkbox value
        onChange={handleCheckboxChange}/>
        <label htmlFor="platform3"> Website</label><br /><br />

        <p>What <strong>features</strong> do you want your app to have?:</p>
    

        <input type="checkbox"
        id="Profiles"
        name="Profiles"
        value="Profiles"
        checked={values.Profiles === 'Profiles'} // Check if value matches the checkbox value
        onChange={handleCheckboxChange}/>
        <label htmlFor="feature1"> Profiles</label><br />

      
        <input type="checkbox"
        id="Charts"
        name="Charts"
        value="Charts"
        checked={values.Charts === 'Charts'} // Check if value matches the checkbox value
        onChange={handleCheckboxChange}/>
        <label htmlFor="feature2"> Charts</label><br />


      
        <input type="checkbox"
        id="Login"
        name="Login"
        value="Login"
        checked={values.Login === 'Login'} // Check if value matches the checkbox value
        onChange={handleCheckboxChange}/>
        <label htmlFor="feature3"> Login</label><br />


       
        <input type="checkbox"
        id="PaymentProcessing"
        name="PaymentProcessing"
        value="PaymentProcessing"
        checked={values.PaymentProcessing === 'PaymentProcessing'} // Check if value matches the checkbox value
        onChange={handleCheckboxChange}/>
        <label htmlFor="feature4"> Payment Processing</label><br /> 


        
        <input type="checkbox"
        id="Ordering"
        name="Ordering"
        value="Ordering"
        checked={values.Ordering === 'Ordering'} // Check if value matches the checkbox value
        onChange={handleCheckboxChange}/>
        <label htmlFor="feature4"> Ordering</label><br /><br />     

        <p>Do you have a <strong> Hi-Fi </strong> or <strong>Design </strong> already?:</p>


        <input
                type="checkbox"
                name="HaveHiFi"
                id="HaveHiFi"
                value="Yes"
                checked={values.HaveHiFi === 'Yes'}
                onChange={handleCheckboxChange}
              />
        <label htmlFor="feature1"> Yes</label><br />
        <input type="checkbox" id="feature2" name="feature2" value="Charts" />
        <label htmlFor="feature2"> No</label><br />
      
      
      </div>


     
    </div>
     
    


          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
             Anything else that you would like to include that was no mentioned?
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                value={values.message}
                onChange={handleChange}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
       
        </div>
        <div className="mt-10">
        
        <button
            
            onClick={handleSendEmail}
            disabled={loading || submitted}
            className= "block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
           {loading ? 'Loading...' : (submitted ? 'Successfully submitted ✅' : 'Let\'s talk')} 
          </button>
        </div>
      </form>
    </div>
  )
}
