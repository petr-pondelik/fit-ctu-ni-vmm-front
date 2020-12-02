import React from 'react';
import Header from "../Header/Header";
import ApiClient from "../../Client/ApiClient";
import PhotosSetInterface from "../../Interface/PhotosSetInterface";
import PhotosGrid from "../Photos/PhotosGrid";
import PositionInterface from "../../Client/Interface/Data/PositionInterface";
import LeafletMap from "../LeafletMap/LeafletMap";
import Datepicker from "../Datepicker/Datepicker";
import AuthorInput from "../TextInput/AuthorInput";
import RangeGroup from "../Range/RangeGroup";
import DimensionsInterface from "../../Client/Interface/Data/DimensionsInterface";
import ResultsAmountSelect from "../Select/ResultsAmountSelect";

export interface AppPropsInterface {

}

export interface AppStateInterface {
    photos: PhotosSetInterface
}

export interface AppValuesInterface {
    query?: string
    position?: PositionInterface
    author?: string,
    created?: string,
    dimensions?: DimensionsInterface,
    amount?: number
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
            position: undefined,
            author: undefined,
            created: undefined,
            dimensions: undefined,
            amount: 5
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
        for (const [key, value] of Object.entries(newValues)) {
            if (this.values.hasOwnProperty(key)) {
                let propertyKey: AppValuesKey = key as AppValuesKey;
                this.values[propertyKey] = value;
            }
        }
        if (this.values.query !== undefined && this.values.query !== '' && this.values.query.length > 1) {
            this.apiClient.photosSearch(this.values).then((response) => {
                this.setState({
                    photos: response.res
                })
            });
        }
    }

    render() {
        return (
            <div className="App row">
                <div className={"row"}>
                    <Header
                        updateParent={this.update}
                    />
                </div>
                <div className={"row"}>
                    <div className={"col s12 m6"}>
                        <div className={"card p-1"}>
                            <div className={"row"}>
                                <div className={"col s12"}>
                                    <LeafletMap
                                        updateParent={this.update}
                                    />
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col s12"}>
                                    <Datepicker
                                        id={"created-date-picker"}
                                        label={"Created at"}
                                        updateParent={this.update}
                                    />
                                    <AuthorInput
                                        id={"author-name"}
                                        label={"Author name"}
                                        updateParent={this.update}
                                    />
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col s12"}>
                                    <RangeGroup
                                        updateParent={this.update}
                                    />
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col s12"}>
                                    <ResultsAmountSelect
                                        updateParent={this.update}
                                    />
                                </div>
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
