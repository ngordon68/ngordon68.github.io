import React from 'react';

const Inquiry = () => {
  return (
    <div>
      
     
      <p>What <strong>platforms</strong> do you want your app on?:</p>
      <form action="/action_page.php">
        <input type="checkbox" id="platform1" name="platform1" value="iOS" />
        <label htmlFor="platform1"> iOS</label><br />
        <input type="checkbox" id="platform2" name="platform2" value="Android" />
        <label htmlFor="platform2"> Android</label><br />
        <input type="checkbox" id="platform3" name="platform3" value="Website" />
        <label htmlFor="platform3"> Website</label><br /><br />
      </form>

      <p>What <strong>features</strong> do you want your app to have?:</p>
      <form action="/action_page.php">
        <input type="checkbox" id="feature1" name="feature1" value="Profiles" />
        <label htmlFor="feature1"> Profiles</label><br />
        <input type="checkbox" id="feature2" name="feature2" value="Charts" />
        <label htmlFor="feature2"> Charts</label><br />
        <input type="checkbox" id="feature3" name="feature3" value="Login" />
        <label htmlFor="feature3"> Login</label><br />
        <input type="checkbox" id="feature4" name="feature4" value="PaymentProcessing" />
        <label htmlFor="feature4"> Payment Processing</label><br /><br />    
      </form>

      <label htmlFor="freeform">List anything that was not mentioned. Please state the app concept here as well:</label><br />
      <textarea id="freeform" name="freeform" >
        Enter text here...
      </textarea>

      <input type="submit" value="Submit" />
    </div>
  );
};

export default Inquiry;
