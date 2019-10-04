import { Card, Navbar } from '../components';
import fetch from 'isomorphic-unfetch';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    static async getInitialProps({ req }) {
        const res = await fetch('http://localhost:3000/api/cards')
        const json = await res.json()
        return { items: json }
    }

    async updateItems() {
        const res = await fetch('http://localhost:3000/api/cards');
        const json = await res.json()
        this.setState({ items: json });
    }

    async componentDidMount() {
        await this.updateItems();
    }

    async handleFavorite(id, isFavourite) {
        console.log(`handle favorite: ${id}, ${isFavourite}`);
        const res = await fetch('http://localhost:3000/api/card/' + id, {
            headers: {
                'Content-Type': 'application/json'
              },
            method: 'PUT',
            body: JSON.stringify({ 'isFavourite': isFavourite }),
        });
        const json = await res.json();
        console.log('updated: ', json);
        await this.updateItems();
    }

    render() {
        return (
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                <div className="desktop">
                    <Navbar isMobile={false} style={{ position: 'fixed', top: 0, left: 0, width: '100%' }} />
                </div>
                <div className="card">
                {
                    this.state.items.map((item) => <Card key={item.id} data={item} handleFavorite={(id, isFavourite) => this.handleFavorite(id, isFavourite)} />)
                }
                </div>
                <div className="mobile">
                    <Navbar isMobile={true} style={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }} />
                </div>
                <style jsx>{`
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
                    
                    .card{
                        
                        //flex-direction: column;
                        width: 94%;
                        float: left;
                        margin: 2% 2% 10px 2%;
                        //font-size: 1.1em;
                        //height: 400px;
                        background: var(--white);
                        //color: #AD0044;
                        box-shadow: -12px 16px 75px -12px rgba(0,0,0,1);
                        margin-left: 3%;
                        margin-right: 3%;
                        margin-top: 110px;
                        overflow: hidden;
                        font-family: sans-serif;
                    }

                    .desktop{
                        font-family: sans-serif;
                    }
                `}</style>
            </div>
        );
    }
}

export default Index;
