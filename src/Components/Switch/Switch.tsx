import React, {ChangeEvent} from "react";

export interface SwitchPropsInterface {
    switchParent: (on: boolean) => void
}

export interface SwitchStateInterface {

}

export default class Switch extends React.Component<SwitchPropsInterface, SwitchStateInterface> {

    /**
     * @param event
     */
    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.props.switchParent(event.target.checked);
    }

    render() {
        return (
            <div className="switch">
                <label>
                    <input type="checkbox" onChange={this.handleChange} defaultChecked={true}/>
                    <span className="lever"/>
                </label>
            </div>
        );
    }

}