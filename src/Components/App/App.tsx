import React from 'react';
import Header from "../Header/Header";
import ApiClient from "../../Client/ApiClient";
import PhotosSetInterface from "../../Interface/PhotosSetInterface";
import PhotosGrid from "../Photos/PhotosGrid";
import PositionInterface from "../../Client/Interface/Data/PositionInterface";
import LeafletMap from "../LeafletMap/LeafletMap";
import MaterializeDatepicker from "../Datepicker/MaterializeDatepicker";
import MaterializeTextInput from "../TextInput/MaterializeTextInput";
import RangeGroup from "../Range/RangeGroup";

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
            position: undefined
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
    update = (newValues: object): void => {
        console.log('updateParent');
        console.log(newValues);
        for (const [key, value] of Object.entries(newValues)) {
            if (this.values.hasOwnProperty(key)) {
                let propertyKey: AppValuesKey = key as AppValuesKey;
                this.values[propertyKey] = value;
            }
        }
        console.log(this.values);
        if (this.values.query !== undefined && this.values.query !== '' && this.values.query.length > 1) {
            this.apiClient.photosSearch(this.values).then((response) => {
                console.log(response);
                this.setState({
                    photos: response.res
                })
            });
        }
    }

    render() {
        console.log(this.state);
        return (
            <div className="App row">
                <div className={"row"}>
                    <Header
                        updateParent={this.update}
                    />
                </div>
                <div className={"row"}>
                    <div className={"col s12 m6"}>
                        <div className={"row"}>
                            <div className={"col s12"}>
                                <LeafletMap
                                    updateParent={this.update}
                                />
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col s12"}>
                                <MaterializeDatepicker
                                    id={"created-date-picker"}
                                    label={"Created at"}
                                />
                                <MaterializeTextInput
                                    id={"author-name"}
                                    label={"Author name"}
                                />
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col s12"}>
                                <RangeGroup/>
                            </div>
                        </div>
                    </div>
                    <div className={"col s12 m6"}>
                        <PhotosGrid
                            photos={this.state.photos}
                        />
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
