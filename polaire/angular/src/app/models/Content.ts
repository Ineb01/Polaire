import { Platform } from './Platform';
export class Content{
    content: any[];
    src: String;
    platforms: Platform[];
    pictures: String[];
    sub:Content[];
    type:String;
    
    constructor(content: any[], src: String, platforms: Platform[], pictures: String[], sub:Content[], type:String){
        this.content = content;
        this.src = src;
        this.platforms = platforms;
        this.pictures = pictures;
        this.sub = sub;
        this.type = type;
    }
}