import UserInterface from "./UserInterface";
import LocationInterface from "./LocationInterface";
import LinksInterface from "./LinksInterface";

export default interface PhotoInterface {
    id: string,
    created_at: string,
    width: number,
    height: number,
    user: UserInterface,
    location: LocationInterface,
    links: LinksInterface,
    alt_description: string
}