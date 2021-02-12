import Head from 'next/head';
import Navbar from "./navbar";

const Layout = (props) => (
    <div>
        <Head>
            <title>Tukren Learning Center</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/solar/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        {props.children}
    </div>
);

export default Layout; 