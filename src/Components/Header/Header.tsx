import React from "react";
import QueryInput from "../QueryInput/QueryInput";
import {Navbar} from "react-materialize";

export interface HeaderStateInterface {}

export interface HeaderPropsInterface {
    updateParent: (newValues: object) => void
}

export default class Header extends React.Component<HeaderPropsInterface, HeaderStateInterface> {

    /**
     * @param newValues
     */
    updateParent = (newValues: object): void => {
        this.props.updateParent(newValues);
    }

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
                <QueryInput
                    updateParent={this.updateParent}
                />
            </header>
        );
    }

}