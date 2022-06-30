import {FC} from "react";
import "./layout.scss";
import Header from "../header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../footer/Footer";


interface ILayoutProps{

}


const Layout: FC<ILayoutProps> = () => {
    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default Layout;
