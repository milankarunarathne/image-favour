import PropTypes from 'prop-types';
import { FaHome, FaFileExcel } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import Link from 'next/link';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const isMobile = this.props.isMobile;
        return (
            <div style={{display: "flex", flexDirection: "row", backgroundColor: 'rgba(255, 33, 149, 1.0)', padding: 10, ...this.props.style}}>
                <Link href="/">
                    <div style={{display: "flex", flex: 1, flexDirection: "row"}}>
                        <FaHome
                            color="#ffffff"
                            size="50px"
                            style={{ margin: '0 5px' }}
                        />
                        {!isMobile && <div><h2>Home</h2></div>}
                    </div>
                </Link>
                <Link href="/favourite">
                    <div style={{display: "flex", flex: 1, flexDirection: "row"}}>
                        <FaHeart
                            color="#ffffff"
                            size="50px"
                            style={{ margin: '0 5px' }}
                        />
                        {!isMobile && <div><h2>Favorite</h2></div>}
                    </div>
                </Link>
                <style jsx>{`
                    h2 { color: #ffffff;}
                `}</style>
            </div>
        );
    }
}

Navbar.proTypes = {
    isMobile: PropTypes.bool,
    style: PropTypes.object,
};


export default Navbar;