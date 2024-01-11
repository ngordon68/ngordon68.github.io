import { NextPage} from "next";
import Course from "../../components/course"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Layout from "../../components/layout"
import Container from "../../components/container";

const Test: NextPage = () => {

return (
    <Layout>
 <Container>
   
    <Course />
    
 </Container>
 </Layout>


)

}
export default Test;