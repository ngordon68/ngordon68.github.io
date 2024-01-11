import { NextPage} from "next";
import Header from "../../components/header";
import Container from "../../components/container";
import Head from "next/head";
import Intro from "../../components/intro";
import Layout from "../../components/layout"
import Inquiry from "../../components/inquiry";
import Alert from "../../components/alert";
import AboutMe from "../../components/aboutme";
import VideoComponent from "../../components/video";



const Test: NextPage = () => {

    const videoLink = 'https://www.youtube.com/watch?v=ncqmMbcKADM&list=PLgwFmHv6aeBtpjcA3vz2B8BtXfSWnWfvN&index=2'; // Replace with your video link
  const videoText = '9 Month Coding Journey'; // Replace with your video title or description
  const thumbnailSrc = '/assets/blog/dynamic-routing/coding3.jpg'
  const videoDescription = 'Get started with the Swift programming language. Write your first line of code and learn the fundamentals.'
    return  (

<Layout>


<Container>


<div
            style={{
              position: 'relative',
              right: '550px',
              width: '2800px',
              height: '225px',
            }}
          >

<img
          src="/assets/blog/dynamic-routing/laptop.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
       
        />

        </div>



        <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects </h2>
       
      </div>



     
<VideoComponent videoLink={'https://www.instagram.com/p/CytTqf2x0Kp/'} videoText={'Rock, Paper, Scissor video'} thumbnailSrc={'ncqmMbcKADM'} videoDescription={'This video goes over a brief demo of the Rock,Paper,Scissors game that I developed over the summer. '} />
<VideoComponent videoLink={videoLink} videoText={"Timers"} thumbnailSrc={'cxuPwu38zcU'} videoDescription={'This video goes over the power of conditionals and timers. '}/>
<VideoComponent videoLink={videoLink} videoText={"Third video"} thumbnailSrc={'cxuPwu38zcU'} videoDescription={'description '}/>



</Container>


</Layout>


    )

}
export default Test;