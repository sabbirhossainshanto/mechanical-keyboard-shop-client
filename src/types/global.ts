import { ReactNode } from "react";

export type TChildren = {
  children: ReactNode;
};

export type TProduct = {
  _id: string;
  name: string;
  image: string;
  brand: string;
  price: number;
  availableQuantity: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
  description: string;
  isDeleted: boolean;
};

export type TBookmark = {
  _id: string;
  product: TProduct;
  price: number;
  quantity: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};
