import {FC} from "react";
import {icons} from "../../assets/icons";
import "./header.scss";
import {NavLink, Link} from "react-router-dom";

interface IHeaderProps{

}


const Header: FC<IHeaderProps> = () => {
    return (
        <div className={"header container"}>
            <Link to={"/"} className={"header__logo"}>
                <img className={"header__logo-img"} src={icons.logo} alt="logo"/>
            </Link>
            <div className={"header__search"}>
                <Link to={"/catalog"} className={"header__btn btn"}>
                    <img src={icons.burgerMenu} alt=""/>
                    Каталог
                </Link>
                <div className={"header__search-input"}>
                    <input type="text" placeholder={"Найти товар"}/>
                    <img src={icons.search} alt="search"/>
                </div>
            </div>
            <div className={"header__blocks"}>
                <NavLink to={"/favorites"} className={"header__blocks-item"}>
                    <img src={icons.like} alt="like"/>
                    <p>Избранное</p>
                </NavLink>
                <div className={"header__blocks-item"}>
                    <img src={icons.packageIcon} alt="package"/>
                    <p>Заказы</p>
                </div>
                <div className={"header__blocks-item"}>
                    <img src={icons.shoppingCart} alt="cart"/>
                    <p>Корзина</p>
                </div>
            </div>
            <div className={"header__user"}>
                <img src={icons.user} alt="user"/>
                <button className={"btn"}>Войти</button>
                {/*<img className={"header__user-image"} src={icons.avatar} alt="user"/>*/}
                {/*<p>Алексей</p>*/}
                {/*<img src={icons.down} alt="open"/>*/}
            </div>
        </div>
    );
};

export default Header;
