import {FC} from "react";
import {icons} from "../../assets/icons";
import "./contacts.scss";

interface IContactsProps{

}

const Contacts: FC<IContactsProps> = () => {
    return (
        <div className={"container contacts"}>
            <h1 className={"contacts__title"}>Контакты</h1>
            <div className={"contacts__row row"}>
                <div className={"contacts__col col-4"}>
                    <img src={icons.home} alt="home"/>
                    <p>
                        Бухгалтерия, склад <br/> <br/>
                        <b>+7 82140 92619</b>
                    </p>
                </div>
                <div className={"contacts__col col-8"}>
                    <img src={icons.percent} alt="percent"/>
                    <p>
                        Вопросы по системе лояльности <br/> <br/>
                        <b>+7 908 716 33 97</b>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
