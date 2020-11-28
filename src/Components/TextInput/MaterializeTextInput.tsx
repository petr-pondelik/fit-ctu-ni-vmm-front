import React, {ChangeEvent, useCallback} from "react";
import {TextInput} from "react-materialize";
import debounce from "lodash.debounce";

export interface MaterializeTextInputPropsInterface {
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
        <TextInput
            label={props.label}
            onChange={handleChange}
        />
    )

}