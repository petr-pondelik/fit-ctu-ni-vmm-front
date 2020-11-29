import React from "react";
import Switch from "../Switch/Switch";


export interface DatepickerPropsInterface {
    id: string
    label?: string
    updateParent: (newValues: object) => void
}

export interface DatepickerStateInterface {

}

export interface DatepickerValuesInterface {
    created?: string
}

export default class Datepicker extends React.Component<DatepickerPropsInterface, DatepickerStateInterface> {

    active: boolean
    values: DatepickerValuesInterface

    /**
     * @param props
     */
    constructor(props: DatepickerPropsInterface) {
        super(props);
        this.active = true;
        this.values = {
            created: undefined
        };
    }

    /**
     * @param on
     */
    switch = (on: boolean) => {
        this.active = on;
        if (this.active) {
            this.props.updateParent(this.values);
        } else {
            this.props.updateParent({
                created: undefined
            });
        }
    }

    /**
     * @param date
     */
    handleSelect = (date: Date) => {
        console.log('Datepicker: handleSelect');
        this.values = {
            created: date.toISOString()
        };
        console.log(this.values.created);
    }

    handleClose = () => {
        console.log('Datepicker: handleClose');
        if (this.active) {
            this.props.updateParent(this.values);
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className={"row d-flex"}>
                    <div className={"col s9"}>
                        <div className={"input-field"}>
                            <input type="text" className="datepicker" id={this.props.id}/>
                            <label htmlFor={this.props.id}>{this.props.label}</label>
                        </div>
                    </div>
                    <div className={"col s3 d-flex flex-end align-center"}>
                        <Switch
                            switchParent={this.switch}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }

    componentDidMount() {
        // Init Materialize DatePicker
        let e: NodeListOf<Element> = document.querySelectorAll('#' + this.props.id);
        M.Datepicker.init(e, {
            'onSelect': this.handleSelect,
            'onClose': this.handleClose
        });
    }

}