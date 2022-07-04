import {FC} from "react";
import "./layout.scss";
import Header from "../header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../footer/Footer";
import LoginPopup from "../login-popup/Login-Popup";
import {useAppSelector} from "../../hooks";


interface ILayoutProps{

}


const Layout: FC<ILayoutProps> = () => {

    const {popup} = useAppSelector(state => state.data);

    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
                <Outlet/>
                {popup ? <LoginPopup/> : ""}
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default Layout;
