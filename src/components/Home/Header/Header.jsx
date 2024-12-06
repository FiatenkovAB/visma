import '../Header/index.css'
import Nuv from './Nuv/Nuv';
import Translition from './Translition/Translition';
import { Link } from 'react-router-dom';
const Header = () =>{
    return(
        <div className="conteiner">
        <div className="imgLogo">
        <Link to='/'>
            <img src="/images/logo.png"/>
            </Link>
        </div>
        <div className='header_nuv'>
                <Nuv/>
        </div>
        <div className='header_strech'>
            <input placeholder='поиск' alt='strech'/>
        </div>
            <Translition />
        </div>
    )
}
export default Header;