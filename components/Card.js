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
        const { id, image, name, price, likes, description, hashtags, user, userImage } = this.props.data;
        const isFavourite = this.state.isFavourite;
        return (
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 1)', marginBottom: "-48px" }}>
                <div className = "userImage">
                    <p><img src={`static/art/${userImage}`} alt="" /><span><strong>{user}</strong></span></p>    
                    
                </div>    
                <div className = "itemImage">
                    <img src={`static/art/${image}`} alt="" />
                    <div className = "textOnImage">
                        <p>{name}</p>
                        <p><strong>{price}</strong></p>
                    </div> 
                    <div className = "actionButton" onClick={() => this.handleClick(id, isFavourite)}>
                            <IndexButtonBar favourite={isFavourite} />
                    </div>
                </div>
                <div className = "contentTexts">
                    <div className = "likesCount">
                        <p><FaHeart
                            size="20px"
                            style={{ margin: '0 5px' }}
                        /><strong>{likes} Likes</strong></p>
                    </div>
                    <p style={ {color: "#7c7c7c"}}>{description}</p>
                    <div className = "hashTags">
                        <p>{hashtags}</p>
                    </div>
                </div>
                <hr/>
                <style jsx>{`
                    .itemImage img{
                        width: 96%;
                        height: auto;
                        margin: 2%;
                        margin-top: -15px;
                    }

                    .userImage img{
                        border-radius: 50%;
                        float: left;
                        width: 55px;
                        //height: auto;
                        margin: 1%;
                        //margin-top: 1%;
                        margin-left: 4%;
                    }

                    .userImage strong{
                        position: relative;
                        float: left;
                        padding-top: 48px;
                        vertical-align: middle;
                        //margin-left: 1%;
                        height: 60px;
                        top: -14px;
                        color: #5534b4;
                    }

                    .likesCount p{
                        color: #2316bd;
                    }

                    .likesCount strong{
                        color: #2316bd;
                        //vertical-align: middle;
                    }

                    .hashTags p{
                        color: #1711bc;
                    }

                    .textOnImage{
                        position: relative;
                        bottom: 106px;
                        left: 45px;
                        color: #ffffff;
                        font-size: 1.4em;
                        font-family: sans-serif;
                        line-height: 4px;
                        //overflow: hidden;
                    }

                     .actionButton{
                         position: absolute;
                         margin-top: -157px;
                         right: 113px;
                     }

                    .contentTexts{
                        position: relative;
                        width: 90%;
                        padding-left: 4%;
                        top: -77px;
                        font-size: 1.2em;
                    
                    }

                    hr{
                        width: 95%;
                        color: "#7c7c7c";
                        position: relative;
                        top: -40px;
                    }

                `}</style>
            
            </div>
        );
    }
}
