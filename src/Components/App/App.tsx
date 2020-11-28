import React from 'react';
import Header from "../Header/Header";
import ApiClient from "../../Client/ApiClient";
import PhotosSetInterface from "../../Interface/PhotosSetInterface";
import PhotosGrid from "../Photos/PhotosGrid";
import PositionInterface from "../../Client/Interface/Data/PositionInterface";
import LeafletMap from "../LeafletMap/LeafletMap";
import MaterializeDatepicker from "../Datepicker/MaterializeDatepicker";

export interface AppPropsInterface {

}

export interface AppStateInterface {
    photos: PhotosSetInterface
}

export interface AppValuesInterface {
    query?: string,
    position?: PositionInterface
}

type AppValuesKey = keyof AppValuesInterface;

class App extends React.Component<AppPropsInterface, AppStateInterface> {

    apiClient: ApiClient;
    values: AppValuesInterface;

    /**
     * @param state
     */
    constructor(state: AppStateInterface) {
        super(state);
        this.apiClient = new ApiClient();
        this.values = {
            query: undefined,
            // position: {
            //     latitude: 42.367975,
            //     longitude: -71.07251667
            // }
        }
        this.state = {
            photos: {
                original: [],
                reRanked: []
            }
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
        this.apiClient.photosSearch(this.values).then((response) => {
            console.log(response);
            this.setState({
                photos: response.res
            })
        });
    }

    render() {
        console.log(this.state);
        return (
            <div className="App row">
                <Header
                    updateParent={this.updateParent}
                />
                <LeafletMap/>
                <MaterializeDatepicker/>
                <main className={"col s12"}>
                    <PhotosGrid
                        photos={this.state.photos}
                    />
                </main>
            </div>
        );
    }

}

export default App;
