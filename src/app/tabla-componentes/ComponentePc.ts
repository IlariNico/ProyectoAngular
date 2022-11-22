export class ComponentePc{
    nombre:string;
    marca:string;
    precio:number;
    img:string;
    cuotasSinInteres:boolean;

    constructor (nombre:string,marca:string,precio:number,img:string,coutassininteres:boolean){
        this.nombre=nombre;
        this.marca=marca;
        this.precio=precio;
        this.img=img;
        this.cuotasSinInteres=coutassininteres;
    }
}


