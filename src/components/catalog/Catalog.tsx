import {FC} from "react";
import "./catalog.scss";
import {images} from "../../assets/images";

interface ICatalogProps{

}

const Catalog: FC<ICatalogProps> = () => {
    return (
        <div className={"container catalog"}>
            <h1 className={"catalog__title"}>Каталог</h1>
            <div className="row">
                <div className={"col-6 catalog__col"}>
                    <img src={images.catalog1} alt=""/>
                </div>
                <div className="col-3 catalog__col">
                    <img src={images.catalog8} alt={""}/>
                </div>
                <div className="col-3 catalog__col">
                    <img src={images.catalog3} alt={""}/>
                </div>
                <div className="col-3 catalog__col">
                    <img src={images.catalog4} alt=""/>
                </div>
                <div className="col-3 catalog__col">
                    <img src={images.catalog5} alt=""/>
                </div>
                <div className="col-3 catalog__col">
                    <img src={images.catalog6} alt=""/>
                </div>
                <div className="col-3 catalog__col">
                    <img src={images.catalog7} alt=""/>
                </div>
                <div className="col-3 catalog__col">
                    <img src={images.catalog8} alt=""/>
                </div>
                <div className="col-3 catalog__col">
                    <img src={images.catalog9} alt=""/>
                </div>
                <div className="col-6 catalog__col">
                    <img src={images.catalog10} alt=""/>
                </div>
                <div className="col-3 catalog__col">
                    <img src={images.catalog11} alt=""/>
                </div>
                <div className="col-6 catalog__col">
                    <img src={images.catalog12} alt=""/>
                </div>
                <div className="col-3 catalog__col">
                    <img src={images.catalog13} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
