import Head from 'next/head';
// import Navbar from '../components/Navbar'

export default ({title = 'Image Favour'}) => {
    return(
        <Head>
            <title>{title}</title>
            <meta charSet= 'utf-8'/>
            <meta name='image' content='initial-scale=1.0, width=device-width'/>
        </Head>
    //     <div className="image-view-app">
    //         <header>

    //         </header>
    //         <body>
    //             <Navbar/>
    //             { children}
    //         </body>
    //     </div>
    // </div>
    );
}