import IndexButtonBar from './IndexButtonBar'
import { FaHeart, FaReact } from 'react-icons/fa';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isFavourite: props.data.isFavourite };
    }

    async handleClick(id, isFavourite) {
        this.setState({ isFavourite: !isFavourite });
        this.props.handleFavorite(id, !isFavourite);
    }

    render() {
        const { id, image, name, price, likes, discription, hashtags } = this.props.data;
        const isFavourite = this.state.isFavourite;
        return (
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 1)', marginBottom: -15 }}>
                <img src={`static/art/${image}`} alt="" />
                <div onClick={() => this.handleClick(id, isFavourite)}>
                    <IndexButtonBar favourite={isFavourite} />
                </div>
                <p>{name}</p>

                <p><strong>{price}</strong></p>

                <p><FaHeart color="#5b34ce"
                    size="20px"
                    style={{ margin: '0 5px' }}
                /><strong>{likes} Likes</strong></p>
                <p>{discription}</p>
                <p>{hashtags}</p>
                <style jsx>{`
                    img{
                        width: 95%;
                        height: auto;
                        margin: 2%;
                    }
                `}</style>
            </div>
        );
    }
}
