import { FaHeart, FaRegHeart } from 'react-icons/fa';

const IndexButtonBar = ({ favourite }) => {
    return favourite ?
        (
            <FaHeart
                color="#ff2394"
                size="25px"
                style={{ margin: '0 1em' }}
            />
        ) : (
            <FaRegHeart
                color="#ff2394"
                size="25px"
                style={{ margin: '0 1em' }}
            />
        )
}

export default IndexButtonBar;