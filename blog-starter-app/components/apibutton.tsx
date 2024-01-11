import React from 'react';

const MyButton = () => {
    const handleSendEmail = async () => {
        console.log('Attempting to send email...');
        try {
          const response = await fetch('/api', {
            method: 'POST',
          });
      
          if (response.ok) {
            console.log('Email sent successfully');
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
      

  return (
    <button
            
            onClick={handleSendEmail}
            className= "block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
  );
};

export default MyButton;



