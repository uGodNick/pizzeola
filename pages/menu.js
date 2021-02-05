import React, {Component} from 'react';

import Head from 'next/head';

// components
import Header from '../components/header/header';
import Spinner from '../components/spinner';
import Breadcrumb from '../components/breadcrumb';
import Menu from '../components/menu/menu';
import Footer from '../components/footer/footer';

export default class MenuPage extends Component {

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
                    <title> Pizzeola | Menu </title>
                    <link rel="shortcut icon" href="/favicon.svg"/>
                </Head>

                {spinner}

                <Header/>

                <Breadcrumb title='Menu' background='/bread-bg-2.jpg'/>

                <Menu/>

                <Footer/>

            </div>
        );
    }
}