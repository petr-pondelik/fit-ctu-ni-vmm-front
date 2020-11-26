import React from "react";
import QueryInput from "../QueryInput/QueryInput";

export default class Header extends React.Component<any, any> {

    render() {
        return (
            <header>
                <nav>
                    <div className="nav-wrapper indigo darken-2">
                        <div className={"col s12"}>
                            <a href="#" className="brand-logo">NI-VMM: Similarity search re-ranking</a>
                        </div>
                    </div>
                </nav>
                <QueryInput/>
            </header>
        );
    }

}