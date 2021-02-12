import Head from 'next/head';
import Navbar from "./navbar";

const Layout = (props) => (
    <div>
        <Head>
            <title>Tukrøn Learning Center</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/solar/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        <div class="container">
            {props.children}
        </div>
    </div>
);

export default Layout; 