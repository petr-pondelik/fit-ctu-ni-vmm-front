import React from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import {Icon, IconOptions, LatLng, LatLngTuple, LeafletEvent, LeafletMouseEvent} from "leaflet";
import './LeafletMap.css';
import Switch from "../Switch/Switch";
import PositionInterface from "../../Client/Interface/Data/PositionInterface";

export interface LeafletMapPropsInterface {
    updateParent: (newValues: object) => void
}

export interface LeafletMapStateInterface {
    position: LatLngTuple
}

export interface LeafletMapValues {
    position?: PositionInterface
}

export default class LeafletMap extends React.Component<LeafletMapPropsInterface, LeafletMapStateInterface> {

    iconOptions: IconOptions;
    icon: Icon;
    active: boolean;
    zoom: number;
    values: LeafletMapValues;

    /**
     * @param props
     */
    constructor(props: LeafletMapPropsInterface) {
        super(props);
        this.iconOptions = {
            iconUrl: "images/marker-icon.png"
        };
        this.icon = new Icon<IconOptions>(this.iconOptions);
        this.state = {
            position: [51.505, -0.09]
        };
        this.active = true;
        this.zoom = 10;
        this.values = {
            position: undefined
        }
    }

    /**
     * @param on
     */
    switch = (on: boolean) => {
        this.active = on;
        if (this.active) {
            this.props.updateParent(this.values);
        } else {
            this.props.updateParent({
                'position': undefined
            });
        }
    }

    /**
     * @param event
     */
    handleZoom = (event: LeafletEvent): void => {
        console.log(event.target._zoom);
        this.zoom = event.target._zoom;
    }

    /**
     * @param event
     */
    handleMapClick = (event: LeafletMouseEvent) => {
        let latlng: LatLng = event.latlng;
        this.values = {
            position: {
                latitude: latlng.lat,
                longitude: latlng.lng
            }
        };
        if (this.active) {
            this.props.updateParent(this.values);
        }
        this.setState({
            position: [latlng.lat, latlng.lng]
        });
    }

    render() {
        return (
            <React.Fragment>
                <Map center={this.state.position} zoom={this.zoom} onclick={this.handleMapClick} onzoomend={this.handleZoom}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    <Marker position={this.state.position} icon={this.icon}>
                        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                    </Marker>
                </Map>
                <div className={"d-flex flex-end"}>
                    <Switch
                        switchParent={this.switch}
                    />
                </div>
            </React.Fragment>
        );
    }

}