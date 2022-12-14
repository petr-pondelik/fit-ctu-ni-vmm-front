import React from "react";
import PhotosSetInterface from "../../Interface/PhotosSetInterface";
import PhotosList from "./PhotosList";

export interface PhotosListPropsInterface {
    photos: PhotosSetInterface
}

export interface PhotosListStateInterface {

}

export default class PhotosGrid extends React.Component<PhotosListPropsInterface, PhotosListStateInterface> {

    render() {
        return (
            <div className={"row"}>
                <div className={"col s6"}>
                    <PhotosList
                        photos={this.props.photos.original}
                    />
                </div>
                <div className={"col s6"}>
                    <PhotosList
                        photos={this.props.photos.reRanked}
                    />
                </div>
            </div>
        );
    }

}