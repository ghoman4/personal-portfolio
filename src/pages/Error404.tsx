import React from "react";
import "../styles/pages/Error404.scss";
import scaredCat from "../assets/scared-cat-404.gif";

const Error404: React.FC = () => {

    return (
        <div className={"error-404-container"}>
            <img src={scaredCat} alt="Scared cat"/>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <h4>I uh.. I don't think you want to be here. Try the button below?
                Click it? Or the nav bar above? That could help? Help? Are you still here?</h4>
            <button>
                Back to Safety (Home)
            </button>
        </div>
    );
}

export default Error404;
