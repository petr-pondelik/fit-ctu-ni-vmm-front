import React, {ChangeEvent} from "react";
import debounce from "lodash.debounce";
import Switch from "../Switch/Switch";

export interface AuthorInputPropsInterface {
    id: string
    label?: string
    updateParent: (newValues: object) => void
}

export interface AuthorInputStateInterface {

}

export interface AuthorInputValuesInterface {
    author?: string
}

export default class AuthorInput extends React.Component<AuthorInputPropsInterface, AuthorInputStateInterface> {

    active: boolean;
    values: AuthorInputValuesInterface

    /**
     * @param props
     */
    constructor(props: AuthorInputPropsInterface) {
        super(props);
        this.active = true;
        this.values = {
            author: undefined
        }
    }

    /**
     * @param on
     */
    switch = (on: boolean): void => {
        console.log(on);
        this.active = on;
        if (this.active) {
            this.update(this.values.author);
        } else {
            this.props.updateParent({
                author: undefined
            });
        }
    }

    /**
     * @param author
     */
    update = (author?: string) => {
        let values: AuthorInputValuesInterface = { author: author };
        this.values = values;
        if (this.active) {
            console.log('TextInput update: ' + author);
            this.props.updateParent(values);
        }
    }

    updateDebounced = debounce((author: string) => {
        this.update(author)
    }, 1500);

    /**
     * @param event
     */
    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.updateDebounced(event.currentTarget.value);
    }

    render() {
        return (
            <React.Fragment>
                <div className={"row d-flex"}>
                    <div className={"col s9"}>
                        <div className={"input-field"}>
                            <input id={this.props.id} type="text" onChange={this.handleChange}/>
                            <label htmlFor={this.props.id}>{this.props.label}</label>
                        </div>
                    </div>
                    <div className={"col s3 flex-center-all"}>
                        <Switch
                            switchParent={this.switch}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }

}