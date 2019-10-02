import React from 'react';
import Layout from '../components/Layout';
import getImages from '../data/data';
import fetch from 'isomorphic-unfetch';
import Image from '../components/Image';

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
                {
                    this.state.items.map((image) => <Image key={image.id} id={image.id} data={image} /> )
                }
            </div>
        );
    }

}

export default Index;