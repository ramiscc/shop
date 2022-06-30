import {FC} from "react";
import "./home.scss";
import ProductCard from "../product-card/ProductCard";
import {images} from "../../assets/images";

interface IHomeProps{

}

const Home: FC<IHomeProps> = () => {
    return (
        <div className={"home"}>
            <img className={"home__image"} src={images.sliders} alt="slider"/>
            <div className="container">
                <div className={"home__stock"}>
                    <h2 className="home__titles">Акции</h2>
                    <div className={"row"}>
                        <div className="col-3"><ProductCard/></div>
                        <div className="col-3"><ProductCard/></div>
                        <div className="col-3"><ProductCard/></div>
                        <div className="col-3"><ProductCard/></div>
                    </div>
                </div>
                <div className="home__new-products">
                    <h2 className="home__titles">Новинки</h2>
                    <div className={"row"}>
                        <div className="col-3"><ProductCard/></div>
                        <div className="col-3"><ProductCard/></div>
                        <div className="col-3"><ProductCard/></div>
                        <div className="col-3"><ProductCard/></div>
                    </div>
                </div>
                <div className="home__buy-before">
                    <h2 className="home__titles">Покупали раньше</h2>
                    <div className={"row"}>
                        <div className="col-3"><ProductCard/></div>
                        <div className="col-3"><ProductCard/></div>
                        <div className="col-3"><ProductCard/></div>
                        <div className="col-3"><ProductCard/></div>
                    </div>
                </div>
                <div className="home__special">
                    <h2 className={"home__titles"}>Специальные предложения</h2>
                    <div className="row">
                        <div className="col-6">
                            <img src={images.banner1} alt="banner"/>
                        </div>
                        <div className="col-6">
                            <img src={images.banner2} alt="banner"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

