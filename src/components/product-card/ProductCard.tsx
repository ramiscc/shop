import "./product-card.scss";
import {FC, useState} from "react";
import {images} from "../../assets/images";
import {icons} from "../../assets/icons";

interface IProductCard{

}

const ProductCard: FC<IProductCard> = () => {

    const [like, setLike] = useState<boolean>(true)

    function changeLike(){
        setLike(!like)
    }

    return (
        <div className={"product-card"}>
            <img onClick={changeLike} className={"product-card__like"} src={like ? icons.like : icons.liked} alt="like"/>
            <div className="product-card__image">
                <img src={images.image} alt="img"/>
            </div>
            <div className={"product-card__price row"}>
                <div className="col-6 product-card__price-col">
                    <b className={"product-card__price-col-number-1"}>44,50 ₽</b>
                    <p className={"product-card__price-col-description"}>С картой</p>
                </div>
                <div className="col-6 product-card__price-col">
                    <p className={"product-card__price-col-number-2"}>50,50 ₽</p>
                    <p className={"product-card__price-col-description"}>Обычная</p>
                </div>
            </div>
                <p className={"product-card__title"}>
                    Г/Ц Блинчики с мясом вес, Россия
                </p>
            <button className={"product-card__btn"}>В корзину</button>
        </div>
    );
};

export default ProductCard;
