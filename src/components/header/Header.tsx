import {FC} from "react";
import {icons} from "../../assets/icons";
import "./header.scss";
import {NavLink, Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changePopup} from "../../store/reducers/dataSlice";

interface IHeaderProps{}

const Header: FC<IHeaderProps> = () => {
    const dispatch = useDispatch()

    return (
        <div className={"header container"}>
            <Link to={"/"} className={"header__logo header__item"}>
                <img className={"header__logo-image"} src={icons.logo} alt="logo"/>
            </Link>
            <div className={"header__search header__item"}>
                <Link to={"/catalog"} className={"header__btn btn"}>
                    <i className="bi bi-list"></i>
                    <p>Каталог</p>
                </Link>
                <div className={"header__search-input"}>
                    <input type="text" placeholder={"Найти товар"}/>
                    <i className="bi bi-search"></i>
                </div>
            </div>
            <div className={"header__blocks header__item"}>
                <NavLink to={"/favorites"} className={"header__blocks-item"}>
                    <i className="bi bi-heart"></i>
                    <p>Избранное</p>
                </NavLink>
                <NavLink to={"/orders"} className={"header__blocks-item"}>
                    <i className="bi bi-box-seam"></i>
                    <p>Заказы</p>
                </NavLink>
                <NavLink to={"cart"} className={"header__blocks-item"}>
                    <i className="bi bi-cart2"></i>
                    <p>Корзина</p>
                </NavLink>
            </div>
            <div className={"header__user header__item"}>
                <i onClick={() => dispatch(changePopup())} className="bi bi-person"></i>
            </div>
        </div>
    );
};

export default Header;
