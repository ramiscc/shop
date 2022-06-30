import {FC} from "react";
import "./footer.scss";
import {icons} from "../../assets/icons";
import {NavLink} from "react-router-dom";

interface IFooter{

}

const Footer: FC<IFooter> = () => {
    return (
        <div className={"footer container"}>
            <div className={"footer__menu"}>
                <img className={"footer__logo"} src={icons.logoFooter} alt="logo"/>
                <NavLink to={"/about"}>О компании</NavLink>
                <NavLink to={"/contacts"}>Контакты</NavLink>
                <NavLink to={"/vacancies"}>Вакансии</NavLink>
                <a href={"/articles"}>Статьи</a>
                <a href={"/policy"}>Политика обработки персональных данных</a>
            </div>
            <div className={"footer__icons"}>
                <div className={"footer__icons-social"}>
                    <img src={icons.instagram} alt="instagram"/>
                    <img src={icons.vkontakte} alt="vkontakte"/>
                    <img src={icons.facebook} alt="facebook"/>
                    <img src={icons.ok} alt="ok"/>
                    <i className="bi bi-telephone"></i>
                    <p>+8 800 777 33 33</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
