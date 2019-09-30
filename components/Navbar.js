import { FaHome } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';


class Navbar extends React.Component {
  render() {
    return (<div>
                <Link href="/">
                    <FaHome 
                        color="#ff2394"
                        size="50px"
                        style={{ margin: '0 5px' }}    
                    />
                </Link>
                <Link href="/favourite">
                    <FaRegHeart
                        color="#ff2394"
                        size="50px"
                        style={{ margin: '0 5px' }}    
                    />
                </Link>
            </div>);
  }
}

export default Navbar;