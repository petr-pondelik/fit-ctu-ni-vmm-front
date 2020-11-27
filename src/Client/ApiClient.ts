import {AppValuesInterface} from "../Components/App/App";
import PhotosSearchResponseInterface from "./Interface/Response/PhotosSearchResponseInterface";

export default class ApiClient {

    apiUrl = 'http://localhost:3333';

    /**
     * @param body
     */
    initPostRequest = (body: AppValuesInterface): RequestInit => {
        return {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };
    }

    /**
     * @param body
     */
    photosSearch = (body: AppValuesInterface): Promise<PhotosSearchResponseInterface> => {
        return new Promise<any>(((resolve, reject) => {
            fetch(this.apiUrl + '/photos/search', this.initPostRequest(body))
                .then((response) => {
                    return response.json()
                })
                .then((json) => {
                    resolve(json);
                })
                .catch((error) => {
                    reject(error);
                });
        }));
    }

}