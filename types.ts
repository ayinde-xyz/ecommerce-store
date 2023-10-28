import { Prisma, Product } from "@prisma/client";
import getProduct from "./actions/get-product";

export interface Billboard {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export type ProductColumn = {
  id: string;
  name: string;
  price: string;
  category: string;
  size: string;
  color: string;
  isFeatured: boolean;
  isArchived: boolean;
  createdAt: string;
};

const productsWithImages = Prisma.validator<Prisma.ProductDefaultArgs>()({
  include: { category: true, size: true, color: true, images: true },
});

export type ProductWithImages = Prisma.ProductGetPayload<
  typeof productsWithImages
>;

const categoryWithBillboard = Prisma.validator<Prisma.CategoryDefaultArgs>()({
  include: { billboard: true },
});

export type CategoryWithBillboard = Prisma.CategoryGetPayload<
  typeof categoryWithBillboard
>;
