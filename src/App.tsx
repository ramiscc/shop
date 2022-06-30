import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./components/about/About";
import NotFound from "./components/not-found/NotFound";
import Home from "./components/home/Home";
import Contacts from "./components/contacts/Contacts";
import Vacancies from "./components/vacancies/Vacancies";
import Catalog from "./components/catalog/Catalog";
import Favorites from "./components/favorites/Favorites";

interface IAppProps {

}

const App: FC<IAppProps> = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path={"about"} element={<About/>}/>
                <Route path={"contacts"} element={<Contacts/>}/>
                <Route path={"vacancies"} element={<Vacancies/>}/>
                <Route path={"catalog"} element={<Catalog/>}/>
                <Route path={"favorites"} element={<Favorites/>}/>
                <Route path={"*"} element={<NotFound/>}/>
            </Route>
        </Routes>
    );
};

export default App;
