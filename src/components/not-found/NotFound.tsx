import {FC} from "react";
import "./not-found.scss";

interface INotFoundProps{

}

const NotFound: FC<INotFoundProps> = () => {
    return (
        <div className={"container not-found"}>
            <h1 className={"not-found__title"}>Not Found</h1>
        </div>
    );
};

export default NotFound;
