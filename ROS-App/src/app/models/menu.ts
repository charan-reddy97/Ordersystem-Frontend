import { baseUrl } from '../common/constant';

export class Menu
{
    id:number =0;
    dish_Name:string="";
    price:number=0;
    description: string="";
    coverImage:string="";

    getCoverImagePath() : string
    {
        return baseUrl + "/images/" + this.coverImage;
    }

}