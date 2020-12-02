import React from "react";
import PhotoInterface from "../../Client/Interface/Data/PhotoInterface";
import PhotoCard from "./PhotoCard";

export interface PhotosListPropsInterface {
    photos: Array<PhotoInterface>
}

export interface PhotosListStateInterface {

}

export default class PhotosList extends React.Component<PhotosListPropsInterface, PhotosListStateInterface> {

    render() {
        if (this.props.photos === undefined) {
            return '';
        }
        return (
            this.props.photos.map((photo, key) => {
                return <PhotoCard photo={photo} key={key} />
            })
        );
    }

}