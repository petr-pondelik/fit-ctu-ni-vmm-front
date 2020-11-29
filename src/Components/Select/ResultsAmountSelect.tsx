import React, {ChangeEvent} from "react";

export interface ResultsAmountSelectPropsInterface {
    updateParent: (newValues: object) => void
}

export interface ResultsAmountSelectStateInterface {

}

export interface ResultsAmountSelectValuesInterface {
    amount?: number
}

export default class ResultsAmountSelect extends React.Component<ResultsAmountSelectPropsInterface, ResultsAmountSelectStateInterface> {

    values: ResultsAmountSelectValuesInterface;

    /**
     * @param props
     */
    constructor(props: ResultsAmountSelectPropsInterface) {
        super(props);
        this.values = {
            amount: undefined
        }
    }

    /**
     * @param event
     */
    handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value);
        this.values.amount = parseInt(event.target.value);
        this.props.updateParent(this.values);
    }

    render() {
        return (
            <div className="input-field col s12">
                <select defaultValue={this.values.amount} onChange={this.handleChange}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
                <label>Results amount</label>
            </div>
        );
    }

}