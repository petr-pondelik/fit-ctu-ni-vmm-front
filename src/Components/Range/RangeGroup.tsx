import React from "react";
import MaterializeRange from "./MaterializeRange";

export interface RangeGroupPropsInterface {

}

export interface RangeGroupStateInterface {

}

export default class RangeGroup extends React.Component<RangeGroupPropsInterface, RangeGroupStateInterface> {

    render() {
        return (
            <div>
                <MaterializeRange
                    min={0}
                    max={4000}
                    step={1}
                    label={"Width"}
                />
                <MaterializeRange
                    min={0}
                    max={4000}
                    step={1}
                    label={"Height"}
                />
            </div>
        );
    }

}