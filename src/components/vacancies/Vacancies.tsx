import {FC} from "react";
import "./vacancies.scss";
import VacancyCard from "../vacancy-card/VacancyCard";

interface IVacanciesProps{

}

const Vacancies: FC<IVacanciesProps> = () => {
    return (
        <div className={"container vacancies"}>
            <h1 className={"vacancies__title"}>Вакансии</h1>
            <div className={"row"}>
                <div className="col-4">
                    <VacancyCard/>
                </div>

                <div className="col-4">
                    <VacancyCard/>
                </div>

                <div className="col-4">
                    <VacancyCard/>
                </div>

                <div className="col-4">
                    <VacancyCard/>
                </div>

                <div className="col-4">
                    <VacancyCard/>
                </div>

            </div>
        </div>
    );
};

export default Vacancies;
