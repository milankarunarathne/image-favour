import ComponentIndexButtonBar from './IndexButtonBar'
import { FaHeart } from 'react-icons/fa';

export default (props) => {
    return(
        <div>
            <img src={`static/art/${props.data.image}`} alt="" />
            <ComponentIndexButtonBar favourite={props.data.favourite} />
            <p>{props.data.name}</p>
            
            <p><strong>{props.data.price}</strong></p>
            
            <p><FaHeart color="#5b34ce"
                        size="20px"
                        style={{ margin: '0 5px' }}
                        /><strong>{props.data.likes} Likes</strong></p>
            <p>{props.data.discription}</p>
            <p>{props.data.hashtags}</p>
        </div>
    )
}