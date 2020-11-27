import {AppValuesInterface} from "../Components/App/App";

export default class ApiClient {

    apiUrl = 'http://localhost:3333';

    /**
     * @param body
     */
    initPostRequest = (body: AppValuesInterface): RequestInit => {
        return {
            method: "POST",
            body: JSON.stringify(body)
        };
    }

    /**
     * @param body
     */
    photosSearch = (body: AppValuesInterface): Promise<any> => {
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