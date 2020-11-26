import React, {ChangeEvent} from "react";

export default class QueryInput extends React.Component<any, any> {

    handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
    }

    render() {
        return (
            <nav>
                <div className={"nav-wrapper indigo darken-2"}>
                    <form>
                        <div className="input-field">
                            <input id="search" type="search" onChange={this.handleQueryChange} required/>
                            <label className="label-icon" htmlFor="search">
                                <i className="material-icons">search</i>
                            </label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
        );
    }

}