import React from "react";


export interface DatepickerPropsInterface {
    id: string,
    label?: string
}

export interface DatepickerStateInterface {

}

export default class MaterializeDatepicker extends React.Component<DatepickerPropsInterface, DatepickerStateInterface> {

    /**
     * @param props
     */
    constructor(props: DatepickerPropsInterface) {
        super(props);
    }

    /**
     * @param date
     */
    handleSelect = (date: Date) => {
        // TODO: Update selected date
        console.log(date);
    }

    handleClose = () => {
        // TODO: If the selected date differs from current, set it into current date and update parent
        console.log('Close');
    }

    render() {
        return (
            <div className={"input-field"}>
                <input type="text" className="datepicker" id={this.props.id}/>
                <label htmlFor={this.props.id}>{this.props.label}</label>
            </div>
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