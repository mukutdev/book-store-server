import { Model } from "mongoose";

type IAuthor ={
    name?: string;
    email:string
}

type IReviews = {
    name : string;
    review : string;
}

export type IBook = {
    title : string;
    author : IAuthor;
    genre:string;
    publicationDate : string;
    imageUrl? : string;
    reviews? : IReviews[]
}

export type BookModel = Model<IBook , Record<string , unknown>>