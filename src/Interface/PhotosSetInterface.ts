import PhotoInterface from "../Client/Interface/Data/PhotoInterface";

export default interface PhotosSetInterface {
    original: Array<PhotoInterface>,
    reRanked: Array<PhotoInterface>
}