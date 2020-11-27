import React from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import {Icon, IconOptions, LatLngTuple} from "leaflet";
import './LeafletMap.css';

export interface LeafletMapPropsInterface {

}

export interface LeafletMapStateInterface {

}

export default class LeafletMap extends React.Component<LeafletMapPropsInterface, LeafletMapStateInterface> {

    render() {
        const position = [51.505, -0.09] as LatLngTuple;
        const iconOptions = {iconUrl: "images/marker-icon.png"} as IconOptions;
        const icon: Icon = new Icon<IconOptions>(iconOptions);
        return (
            <Map center={position} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={position} icon={icon}>
                    <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                </Marker>
            </Map>
        );
    }

}