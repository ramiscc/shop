import {FC} from "react";
import "./vacancy-card.scss";
import {icons} from "../../assets/icons";

interface IVacancyCardProps{

}

const VacancyCard: FC<IVacancyCardProps> = () => {
    return (
        <div className={"vacancy-card"}>
            <h2 className={"vacancy-card__title"}>Должность</h2>
            <p className={"vacancy-card__subtitle"}>Требования</p>
            <p className={"vacancy-card__subtitle-description"}>
                Текст про требования текст про требования
                текст про требования текст про требования
                текст про требования
            </p>
            <p className={"vacancy-card__subtitle"}>Обязанности</p>
            <p className={"vacancy-card__subtitle-description"}>
                Текст про обязаности текст про обязаности текст
                про обязаности текст про обязаности текст про обязаности
            </p>
            <p className={"vacancy-card__subtitle"}>Условия</p>
            <p className={"vacancy-card__subtitle-description"}>
                Текст про условия текст про условия текст про условия
                текст про условия текст про условия текст про условия
            </p>
            <p className={"vacancy-card__subtitle"}>Звоните</p>
            <div className={"vacancy-card__phone"}>
                <img src={icons.phone} alt="phone"/>
                <p className={"vacancy-card__phone-number"}>+7 904 271 35 90</p>
            </div>
        </div>
    );
};

export default VacancyCard;
