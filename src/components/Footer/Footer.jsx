import "./index.css"
const Footer = () =>{
    return(
        <div className="Footer">

                <h3>123456, г. Тавима, ул. Морская, д. 21</h3>
                <img src="./images/logo.png"/>
                <div className="tel">
                <img src="./images/Footer/tel.png"/>
                <a href="tel:+7 (123) 456-67-89">+7 (123) 456-67-89</a>
                </div>
                <div className="email">
                <img src="./images/Footer/email.png"/>
                <a href="mailto:order@visma.ru">order@visma.ru</a>
                </div>
        </div>
    )
}
export default Footer;