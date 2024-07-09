import { ReactNode } from "react";

export type TChildren = {
  children: ReactNode;
};

export type TProduct = {
  image: string;
  name: string;
  description:string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
  _id:string
};
