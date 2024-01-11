import { NextPage} from "next";
import Header from "../../components/header";
import Container from "../../components/container";
import Head from "next/head";
import Intro from "../../components/intro";
import Layout from "../../components/layout"
import Inquiry from "../../components/inquiry";
import TestHeader from "../../components/testheader";
import Contact from "../../components/contact";


const Test: NextPage = () => {
    return  (

<Layout>


<Container>
    
<div
            style={{
              position: 'relative',
              right: '550px',
              width: '2800px',
              height: '425px',
            }}
          >

    <TestHeader />

    </div>
    
<Contact />




</Container>


</Layout>


    )

}
export default Test;