import { Link } from "react-router-dom";
const Nuv = () => {
    return(
        <div>
            <ul>
                <Link to='/PageCompany'>
                    <li><a href=''>О компании</a></li>
                </Link>
                <Link to='/News'>
                    <li><a href=''>Новости</a></li>
                </Link>
                <Link to='/Client'>
                    <li><a href=''>Клиентам</a></li>
                </Link>
            </ul>
        </div>
    )
}
export default Nuv;