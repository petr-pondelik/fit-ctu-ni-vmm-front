import React from "react";
import QueryInput from "../QueryInput/QueryInput";

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
                <nav className={"header-title"}>
                    <div className="nav-wrapper indigo darken-1">
                        <div className={"col s12"}>
                            <a href="#" className="brand-logo">Unsplash metadata-based reranking</a>
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