import { FaHeart, FaRegHeart } from 'react-icons/fa';

const IndexButtonBar = ({favourite}) => {
    if (favourite){
        return (
            <FaHeart
                        color="#ff2394"
                        size="25px"
                        style={{ margin: '0 1em' }}    
                    />
        )
    }else{
        return (
            <FaRegHeart
                        color="#ff2394"
                        size="25px"
                        style={{ margin: '0 1em' }}    
                    />
        )
    }
}

export default IndexButtonBar;