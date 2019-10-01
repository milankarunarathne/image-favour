// import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import getImages from '../data/data';
import fetch from 'isomorphic-unfetch';
import Image from '../components/Image';


const Index = (props) => (
    // <p>This is home page</p>
    <Layout>
    {
        props.images.map((image, key) => <Image id={key} data={image} />)
    }
    </Layout>
)
  
Index.getInitialProps = async ({ }) => {
    // fetching data from the database
    return { images: getImages() }
}

  export default Index;