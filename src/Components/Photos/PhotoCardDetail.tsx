import PhotoInterface from "../../Client/Interface/Data/PhotoInterface";
import React from "react";

export interface PhotoCardDetailPropsInterface {
    photo: PhotoInterface
}

export interface PhotoCardDetailStateInterface {

}

export default class PhotoCardDetail extends React.Component<PhotoCardDetailPropsInterface, PhotoCardDetailStateInterface> {

    renderPosition(): any {
        if (this.props.photo.location === undefined) {
            return '';
        }
        return (
            <React.Fragment>
                Latitude: {this.props.photo.location.position.latitude},
                Longitude: {this.props.photo.location.position.longitude}
            </React.Fragment>
        )
    }

    render() {
        return (
            <table className="striped highlight">
                <tbody>
                    <tr>
                        <td>Author:</td>
                        <td>{this.props.photo.user.name}</td>
                    </tr>
                    <tr>
                        <td>Position: </td>
                        <td>{this.renderPosition()}</td>
                    </tr>
                    <tr>
                        <td>Created: </td>
                        <td>{this.props.photo.created_at}</td>
                    </tr>
                    <tr>
                        <td>Dimensions: </td>
                        <td>
                            W: {this.props.photo.width}<br/>
                            H: {this.props.photo.height}
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }

}