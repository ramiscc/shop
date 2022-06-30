import "./about.scss";
import {FC} from "react";
import {images} from "../../assets/images";
import {icons} from "../../assets/icons";

interface IAboutProps{

}

const About: FC<IAboutProps> = () => {
    return (
        <div className={"container about"}>
            <div className={"about__block"}>
                <div>
                    <h1 className={"about__title"}>О компании</h1>
                    <p className={"about__subtitle"}>
                        Мы непрерывно развиваемся и <br/>
                        работаем над совершенствованием сервиса, <br/>
                        заботимся о наших клиентах, <br/>
                        стремимся к лучшему будущему.
                    </p>
                </div>
                <img src={images.aboutImage} alt="about"/>
            </div>
            <div className={"about__row row"}>
                <div className="about__col col-4">
                    <img className={"about__col-icon"} src={icons.checkAbout} alt="about"/>
                    <p className={"about__col-title"}>
                        Мы занимаемся розничной торговлей <br/> <br/>
                        <b>Более 20 лет.</b>
                    </p>
                </div>
                <div className="about__col col-4">
                    <img className={"about__col-icon"} src={icons.checkAbout} alt="about"/>
                    <p className={"about__col-title"}>
                        Основная миссия компании <br/> <br/>
                        <b>
                            Максимальное качество товаров и
                            услуг по доступной цене.
                        </b>
                    </p>
                </div>
                <div className="about__col col-4">
                    <img className={"about__col-icon"} src={icons.checkAbout} alt="about"/>
                    <p className={"about__col-title"}>
                        Отличительная черта нашей сети <br/> <br/>
                        <b>
                            Здоровая и полезная продукция
                            местного производства внаших магазинах.
                        </b>
                    </p>
                </div>
            </div>
            <div>
                <img src={images.aboutImage2} alt="about"/>
            </div>

        </div>
    );
};

// @ts-ignore
export default About;
