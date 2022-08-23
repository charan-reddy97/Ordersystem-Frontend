import { baseUrl } from "../common/constant";

export class Dish
{
    id:number = 0;
    dish_Name:string = "";
    coverImage:string="";
    price:number=0;
    discription:string="";

    getCoverImagePath() : string
    {
        return baseUrl + "/images/" + this.coverImage;
    }
}