import React from "react";
import PhotoInterface from "../../Client/Interface/Data/PhotoInterface";
import PhotoCardDetail from "./PhotoCardDetail";

export interface PhotoCardPropsInterface {
    key: number,
    photo: PhotoInterface
}

export interface PhotoCardStateInterface {

}

export default class PhotoCard extends React.Component<PhotoCardPropsInterface, PhotoCardStateInterface> {

    render() {
        return (
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={this.props.photo.urls.regular}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                        {this.props.photo.alt_description}<i className="material-icons right">more_vert</i>
                    </span>
                    <p><a href={this.props.photo.links.html} target={"_blank"}>Unsplash link</a></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{this.props.photo.alt_description}<i
                        className="material-icons right">close</i></span>
                    <PhotoCardDetail photo={this.props.photo}/>
                </div>
            </div>
        )
    }

}