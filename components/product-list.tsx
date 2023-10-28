import NoResults from "./ui/no-results";
import ProductCard from "./ui/product-card";

import { ProductWithImages } from "@/types";

interface ProductListProps {
  title: string;
  products: ProductWithImages[];
}

const ProductList: React.FC<ProductListProps> = ({ title, products }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl ">{title}</h3>
      {products?.length === 0 && <NoResults />}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;