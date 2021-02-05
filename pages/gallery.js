import React, {Component} from 'react';

import Head from 'next/head';

// components
import Header from '../components/header/header';
import Spinner from '../components/spinner';
import Breadcrumb from '../components/breadcrumb';
import Gallery from '../components/gallery/gallery';
import Footer from '../components/footer/footer';

export default class GalleyPage extends Component {

    state = {
        isLoading: true
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        });
    }

    render() {
        let spinner;
        this.state.isLoading ? spinner = <Spinner/> : null;

        return (
            <div>
                <Head>
                    <title> Pizzeola | Gallery </title>
                    <link rel="shortcut icon" href="/favicon.svg"/>
                </Head>

                {spinner}

                <Header/>

                <Breadcrumb title='Gallery' background='/bread-bg-3.jpg'/>

                <Gallery/>

                <Footer/>

            </div>
        );
    }
}