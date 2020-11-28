import React, {ChangeEvent, useCallback} from "react";
import debounce from "lodash.debounce";

export interface MaterializeTextInputPropsInterface {
    id: string
    label?: string
}

export default function MaterializeTextInput(props: MaterializeTextInputPropsInterface) {

    /**
     * @param author
     */
    const updateParent = (author: string) => {
        console.log('updateParent: ' + author);
    }

    const updateParentDebounced = useCallback(
        debounce((author: string) => updateParent(author), 1500),
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
        <React.Fragment>
            <div className={"input-field"}>
                <input id={props.id} type="text" onChange={handleChange}/>
                <label htmlFor={props.id}>{props.label}</label>
            </div>
        </React.Fragment>
    )

}