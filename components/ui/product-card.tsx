"use client";

import { ProductWithImages } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";

interface ProductCard {
  product: ProductWithImages;
}

const ProductCard: React.FC<ProductCard> = ({ product }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${product?.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl space-y-4 cursor-pointer group border p-3">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="image"
          fill
          src={product.images?.[0]?.url}
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={<Expand size={20} />}
              onClick={() => {}}
              className="text-gray-600"
            />
            <IconButton
              icon={<ShoppingCart size={20} />}
              onClick={() => {}}
              className="text-gray-600"
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{product.name}</p>
        <p className="text-sm text-gray-500">{product.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={product?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
