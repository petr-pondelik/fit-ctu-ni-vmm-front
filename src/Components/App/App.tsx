import React from 'react';
import Header from "../Header/Header";

export interface AppStateInterface {}
export interface AppPropsInterface {}
export interface AppValuesInterface {
    query?: string
}

type AppValuesKey = keyof AppValuesInterface;

class App extends React.Component<AppPropsInterface, AppStateInterface> {

    values: AppValuesInterface;

    /**
     * @param state
     */
    constructor(state: AppStateInterface) {
        super(state);
        this.values = {
            query: undefined
        }
    }

    /**
     * @param newValues
     */
    updateParent = (newValues: object): void => {
        console.log('updateParent');
        console.log(newValues);
        for (const [key, value] of Object.entries(newValues)) {
            if (this.values.hasOwnProperty(key)) {
                let propertyKey: AppValuesKey = key as AppValuesKey;
                this.values[propertyKey] = value;
            }
        }
        console.log(this.values);
        // TODO: Send request with this.values object to API
    }

    render() {
        console.log(this.state);
        return (
            <div className="App row cyan lighten-5">
                <Header
                    updateParent={this.updateParent}
                />
                <main className={"col s12"}>
                    <p>TEST CONTENT</p>
                </main>
            </div>
        );
    }

}

export default App;
