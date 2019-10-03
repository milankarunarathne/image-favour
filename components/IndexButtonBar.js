import { FaHeart, FaRegHeart } from 'react-icons/fa';

const IndexButtonBar = ({ favourite }) => {
    return favourite ?
        (
            <FaHeart
                color="#e61177"
                size="30px"
               //style={{ margin: '1 1em'}}
            />
        ) : (
            <FaRegHeart
                color="#ffffff"
                size="30px"
              //  style={{ margin: '0 1em' }}
            />
        )
}

export default IndexButtonBar;