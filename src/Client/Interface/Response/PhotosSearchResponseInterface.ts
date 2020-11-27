import PhotoInterface from "../Data/PhotoInterface";

export default interface PhotosSearchResponseInterface {
    res: {
        original: Array<PhotoInterface>,
        reRanked: Array<PhotoInterface>
    }
}