import React, { Component } from 'react';

import Head from 'next/head';

// components
import Spinner from '../components/spinner';
import Header from '../components/header/header';
import Breadcrumb from '../components/breadcrumb';
import Contact from '../components/contact/contact';
import Location from '../components/location/location';
import Footer from '../components/footer/footer';


export default class ContactPage extends Component {

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
                    <title> Pizzeola | Contact </title>
                    <link rel="shortcut icon" href="/favicon.svg" />
                </Head>

                {spinner}

                <Header/>

                <Breadcrumb title="Contact" background="./bread-bg-5.jpg"/>

                <Contact/>

                <Location color={'white'}/>

                <Footer/>

            </div>
        );
    }
}