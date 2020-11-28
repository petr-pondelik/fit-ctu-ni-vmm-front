import UserInterface from "./UserInterface";
import LocationInterface from "./LocationInterface";
import LinksInterface from "./LinksInterface";
import UrlsInterface from "./UrlsInterface";

export default interface PhotoInterface {
    id: string,
    created_at: string,
    width: number,
    height: number,
    user: UserInterface,
    location: LocationInterface,
    alt_description: string,
    links: LinksInterface,
    urls: UrlsInterface,
}