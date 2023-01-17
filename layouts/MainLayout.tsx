import Head from 'next/head'
import {ReactNode} from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function MainLayout({children}: {children: ReactNode }){

    return(
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}