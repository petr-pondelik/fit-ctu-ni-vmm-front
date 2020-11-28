import React, {ChangeEvent, useCallback} from "react";
import debounce from "lodash.debounce";

export interface QueryInputPropsInterface {
    updateParent: (newValues: object) => void
}

export default function QueryInput(props: QueryInputPropsInterface) {

    const updateParent = (query: string) => {
        console.log('updateParent: ' + query);
        props.updateParent({
            "query": query
        });
    }

    const updateParentDebounced = useCallback(
        debounce((query: string) => updateParent(query), 1500),
        []
    );

    const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
        let query: string = event.currentTarget.value;
        console.log('handleQueryChange: ' + query);
        updateParentDebounced(query);
    }

    return (
        <nav>
            <div className={"nav-wrapper indigo darken-1"}>
                <form>
                    <div className="input-field">
                        <input id="search" type="search" onChange={handleQueryChange} required/>
                        <label className="label-icon" htmlFor="search">
                            <i className="material-icons">search</i>
                        </label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    );

}