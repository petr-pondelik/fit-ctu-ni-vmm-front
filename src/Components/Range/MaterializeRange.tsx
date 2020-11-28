import React, {ChangeEvent, useCallback} from "react";
import debounce from "lodash.debounce";

export interface RangePropsInterface {
    min: number
    max: number
    step: number
    name: string
    label?: string
    updateParent: (newValues: object) => void
}

export default function MaterializeRange(props: RangePropsInterface) {

    /**
     * @param size
     */
    const updateParent = (size: number) => {
        console.log('updateParent: ' + size);
        if (props.name === 'width') {
            props.updateParent({
                'width': size
            });
        } else {
            props.updateParent({
                'height': size
            });
        }
    }

    const updateParentDebounced = useCallback(
        debounce((size: number) => updateParent(size), 1500),
        []
    );

    /**
     * @param event
     */
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
        updateParentDebounced(parseInt(event.currentTarget.value));
    }

    return (
        <p className="range-field">
            <label>{props.label}</label>
            <input type="range" min={props.min} max={props.max} step={props.step} onChange={handleChange} defaultValue={0}/>
        </p>
    )

}