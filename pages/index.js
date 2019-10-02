import React from 'react';
import Layout from '../components/Layout';
import getImages from '../data/data';
import fetch from 'isomorphic-unfetch';
import { Card, Navbar } from '../components';

class Index extends React.Component {
    constructor(props){  // construct the initial states.
        super(props);
        this.state = { items: []};
    }

    static async getInitialProps({ req }){
        // const res = await fetch('https://api.github.com/repos/zeit/next.js')
        // const json = await res.json()
        return { name: 'home' }
    }

    componentDidMount(){
        this.setState({ items: getImages()});
    }

    render() {
        return (
            <div>
                <div className="desktop">
                    <Navbar isMobile = {false} style={{ position: 'fixed', top: 0, left: 0, width: '100%'}}/>
                </div>
                {
                    this.state.items.map((image) => <Card key={image.id} id={image.id} data={image} /> )
                }
                <div className="mobile">
                    <Navbar isMobile = {true} style={{ position: 'fixed', bottom: 0, left: 0, width: '100%'}}/>
                </div>

                <style jsx>
                    {`
                        @media (max-width: 720px) {
                            .desktop {
                                display: none;
                            }
                        }

                        @media (min-width: 720px) {
                            .mobile {
                                display: none;
                            }
                        }
                    `}
                </style>
            </div>
        );
    }

}

export default Index;