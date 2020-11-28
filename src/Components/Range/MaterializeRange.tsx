import React, {ChangeEvent, useCallback} from "react";
import debounce from "lodash.debounce";

export interface RangePropsInterface {
    min: number,
    max: number,
    step: number,
    label: string
}

export default function MaterializeRange(props: RangePropsInterface) {

    /**
     * @param author
     */
    const updateParent = (author: string) => {
        console.log('updateParent: ' + author);
    }

    const updateParentDebounced = useCallback(
        debounce((author: string) => updateParent(author), 1000),
        []
    );

    /**
     * @param event
     */
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
        updateParentDebounced(event.currentTarget.value);
    }

    return (
        <p className="range-field">
            <label>{props.label}</label>
            <input type="range" min={props.min} max={props.max} step={props.step} onChange={handleChange}/>
        </p>
    )

}