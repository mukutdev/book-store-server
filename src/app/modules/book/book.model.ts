import { Schema, model } from "mongoose";
import { BookModel, IBook } from "./book.interface";

export const bookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      required: true,
      type: {
        name: { type: String },
        email: { type: String, required: true },
      },
    },
    genre: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: String,
      required: true,
    },
    imageUrl : {type : String},
    reviews: {
      type: {
        name: { type: String, required: true },
        revies: { type: String, required: true },
      },
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Book = model<IBook, BookModel>('Book', bookSchema);