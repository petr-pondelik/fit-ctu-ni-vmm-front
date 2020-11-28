import React, {ChangeEvent} from "react";
import DatePicker from "react-materialize/lib/DatePicker";


export interface DatepickerPropsInterface {

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
        // TODO: Store selected date
        console.log(date);
    }

    /**
     * @param event
     */
    handleClose = (event: any) => {
        // TODO: If the selected date differs from current, set it into current date and update parent
        console.log(event);
    }

    render() {
        return (
            <DatePicker
                options={{
                    onClose: this.handleClose,
                    onSelect: this.handleSelect
                }}
            />
        );
    }

}