import { Card, Navbar } from '../components';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    static async getInitialProps({ req }) {
        // const res = await fetch('https://api.github.com/repos/zeit/next.js')
        // const json = await res.json()
        return { name: 'home' }
    }

    async updateItems() {
        const res = await fetch('http://localhost:3000/api/cards');
        const json = await res.json()
        this.setState({ items: json });
    }

    async componentDidMount() {
        await this.updateItems()
    }

    async handleFavorite(id, isFavorite) {
        console.log(`handle favorite: ${id}, ${isFavorite}`);
        const res = await fetch('http://localhost:3000/api/card/' + id, {
            method: 'PUT',
            body: { isFavorite },
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
                    this.state.items.map((item) => <Card key={item.id} data={item} handleFavorite={(id, isFavorite) => this.handleFavorite(id, isFavorite)} />)
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
                        width: 90%;
                        float: left;
                        margin: 2% 2% 10px 2%;
                        //font-size: 1.6rem;
                        //height: 400px;
                        background: var(--white);
                        //color: #AD0044;
                        box-shadow: -12px 16px 75px -27px rgba(0,0,0,1);
                        margin-left: 40px;
                        margin-right: 40px;
                        margin-top: 110px;
                        overflow: auto;
                    }

                `}</style>
            </div>
        );
    }
}

export default Index;
