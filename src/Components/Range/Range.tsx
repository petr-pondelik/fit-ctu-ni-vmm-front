import React, {ChangeEvent} from "react";
import debounce from "lodash.debounce";
import Switch from "../Switch/Switch";

export interface RangePropsInterface {
    min: number
    max: number
    step: number
    name: string
    label?: string
    updateParent: (newValues: object) => void
}

export interface RangeStateInterface {

}

export interface RangeValuesInterface {
    size?: number
}

export default class Range extends React.Component<RangePropsInterface, RangeStateInterface> {

    active: boolean
    values: RangeValuesInterface;

    /**
     * @param props
     */
    constructor(props: RangePropsInterface) {
        super(props);
        this.active = true;
        this.values = {
            size: undefined
        }
    }

    /**
     * @param size
     */
    prepareValue = (size?: number): object => {
        if (this.props.name === 'width') {
            return {
                'width': size
            }
        }
        return {
            'height': size
        }
    }

    /**
     * @param on
     */
    switch = (on: boolean): void => {
        this.active = on;
        if (this.active) {
            this.update(this.values.size)
        } else {
            this.props.updateParent(this.prepareValue(undefined));
        }
    }

    /**
     * @param size
     */
    update = (size?: number) => {
        console.log('Range update: ' + size);
        this.values = { size: size };
        if (this.active) {
            this.props.updateParent(this.prepareValue(this.values.size));
        }
    }

    updateDebounced = debounce((size: number) => {
        this.update(size)
    }, 1500);

    /**
     * @param event
     */
    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
        this.updateDebounced(parseInt(event.currentTarget.value));
    }

    render() {
        return (
            <React.Fragment>
                <div className={"row d-flex"}>
                    <div className={"col s9"}>
                        <p className="range-field">
                            <label>{this.props.label}</label>
                            <input type="range" min={this.props.min} max={this.props.max} step={this.props.step} onChange={this.handleChange} defaultValue={0}/>
                        </p>
                    </div>
                    <div className={"col s3 flex-center-all"}>
                        <Switch switchParent={this.switch}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}