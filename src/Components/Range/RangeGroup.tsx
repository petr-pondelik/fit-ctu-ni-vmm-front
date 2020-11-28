import React from "react";
import Range from "./Range";
import DimensionsInterface from "../../Client/Interface/Data/DimensionsInterface";

export interface RangeGroupPropsInterface {
    updateParent: (newValues: object) => void
}

export interface RangeGroupStateInterface {

}

type RangeGroupValuesKey = keyof DimensionsInterface;

export default class RangeGroup extends React.Component<RangeGroupPropsInterface, RangeGroupStateInterface> {

    values: DimensionsInterface

    /**
     * @param props
     */
    constructor(props: RangeGroupPropsInterface) {
        super(props);
        this.values = {
            width: undefined,
            height: undefined
        }
    }

    /**
     * @param newValues
     */
    update = (newValues: object): void => {
        for (const [key, value] of Object.entries(newValues)) {
            if (this.values.hasOwnProperty(key)) {
                let propertyKey: RangeGroupValuesKey = key as RangeGroupValuesKey;
                this.values[propertyKey] = value;
            }
        }
        this.props.updateParent({
            'dimensions': this.values
        });
    }

    render() {
        return (
            <div>
                <Range
                    min={0}
                    max={6000}
                    step={1}
                    name={"width"}
                    label={"Width"}
                    updateParent={this.update}
                />
                <Range
                    min={0}
                    max={6000}
                    step={1}
                    name={"height"}
                    label={"Height"}
                    updateParent={this.update}
                />
            </div>
        );
    }

}