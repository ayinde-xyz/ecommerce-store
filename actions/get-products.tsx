import prismadb from "@/lib/prismadb";

export const getProducts = async () => {
  const products = await prismadb.product.findMany({
    where: {
      storeId: "0f38adb8-90ae-4f18-92cc-f06e3166d56c",
      isFeatured: true,
    },
    include: { category: true, size: true, color: true, images: true },
    orderBy: { createdAt: "desc" },
  });

  // console.log(products);

  return products;
};

interface Query {
  id?: string;
  colorId?: string;
  sizeId?: string;
  categoryId?: string;
}

const getIdProducts = async (query: Query) => {
  const products = await prismadb.product.findMany({
    where: {
      id: query.id,
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
    },
    include: { category: true, size: true, color: true, images: true },
    orderBy: { createdAt: "desc" },
  });

  // console.log(products);

  return products;
};

export default getIdProducts;
