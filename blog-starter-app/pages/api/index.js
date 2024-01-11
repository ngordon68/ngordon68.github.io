

const sgMail = require('@sendgrid/mail');
const apiKey = "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"
sgMail.setApiKey(apiKey);


const CONTACT_MESSAGE_FIELDS = {
  name: "First Name",
  lastName: "Last Name",
  email: "Email",
  company: "Company",
  message: "Additional Info",
  iOS: "iOS",
  Website: "Website",
  Android: "Android",
  Profiles: "User Profiles",
  Charts: "Charts",
  Login: "Login",
  PaymentProcessing: "Payment Processing",
  Ordering: "Ordering",
  HaveHiFi: "Do They have Hi-Fi design?"



  
}
const generateEmailContent = (data) => {

    const stringData = Object.entries(data).reduce((str, [key, val]) => {
       return str += `${CONTACT_MESSAGE_FIELDS[key]}: \n ${val} \n \n `


    }, "");

    const htmlData = Object.entries(data).reduce((str, [key, val]) => {
      return str += ` <h1> ${CONTACT_MESSAGE_FIELDS[key]}: \n ${val} </h1> `


   }, "")


  return {
    text: stringData, 
    html:  `    <div className="isolate bg-blue px-6 py-24 sm:py-32 lg:px-8 ">
    
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">You Have a Request </h2>
      <h2 className="text-3xl font-bold tracking-tight text-green sm:text-4xl"> ${htmlData}  </h2>
     <p>
     ${stringData} 
     </p>
     
    </div>

  </div> `
  };
};



export default async function handler(req, res) {
  if (req.method === 'POST') {

    const data = req.body
    const msg = {

      to: 'ngordon688@gmail.com',
      from: 'ngordon688@gmail.com', // Use the email address or domain you verified above
      subject: 'Software Skills',
      ...generateEmailContent(data)
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: 'Email sent successfully' });
      console.log(req.body)
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}