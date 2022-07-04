import "./login-popup.scss";
import {FC} from "react";
import {useDispatch} from "react-redux";
import {changePopup} from "../../store/reducers/dataSlice";

interface ILoginPopupProps{}

const LoginPopup: FC<ILoginPopupProps> = () => {

    const dispatch = useDispatch()

    return (
        <div className={"popup"} onClick={() => dispatch(changePopup())}>
            <div
                className="popup__content"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className={"popup__title"}>Вход</h2>
                <div className={"popup__input"}>
                    <p>Телефон</p>
                    <input autoFocus type="text" placeholder={"Введите номер..."}/>
                </div>
                <button className={"popup__btn"}>Вход</button>
                <div className="popup__row row">
                    <button className={"popup__register-btn col-6"}>Регистрация</button>
                    <a href={"/"} className="col-6 popup__forget-pass">Забыли пароль?</a>
                </div>
            </div>
        </div>
    );
};

export default LoginPopup;
