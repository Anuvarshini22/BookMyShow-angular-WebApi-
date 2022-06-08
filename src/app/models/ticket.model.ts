
export class Ticket{
    id:number=0;
    userName:string;
    numberOfSeats:number;
    showId:number;
    theatreId:number;
    movieId:number;
    createdDate:string;
    updatedDate:string;
    deletedDate:string;
    isDeleted:boolean;
    
    constructor(
        userName:string,
        numberOfSeats:number,
        showId:number,
        theatreId:number,
        movieId:number,
        createdDate:string,
        updatedDate:string,
        deletedDate:string,
        isDeleted:boolean   
    ) {
    this.userName=userName;
   this. numberOfSeats=numberOfSeats;
    this.showId=showId;
   this. theatreId=theatreId;
   this. movieId=movieId;
   this.createdDate=createdDate;
   this. updatedDate=updatedDate;
   this. deletedDate=deletedDate;
   this. isDeleted=isDeleted;
        
    }
}