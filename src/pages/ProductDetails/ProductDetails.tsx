import Container from "@/components/shared/Container";
import Loader from "@/components/shared/Loader";
import { useCreateBookmarkMutation } from "@/redux/features/cart/cartApi";

import { useGetSingleProductQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { Rating } from "@smastrom/react-rating";
import { Button } from "antd";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data: product, isLoading } = useGetSingleProductQuery(id as string);
  const [createOrder] = useCreateBookmarkMutation();

  if (isLoading) {
    return <Loader />;
  }

  const handleCreateOrder = async (product: TProduct) => {
    if (quantity <= 0) {
      return toast.error("Please select at least one quantity!");
    }
    try {
      const productData = {
        product: product._id,
        price: product.price,
        quantity,
      };
      const result = await createOrder(productData).unwrap();
      if (result?.success) {
        toast.success(result.message);
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14">
        <div className="overflow-hidden rounded-md">
          <img
            className="rounded-md hover:scale-105 transition"
            src={product?.image}
            alt=""
          />
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl text-secondaryBlack font-bold">
            {product?.name}
          </h1>
          <p>{product?.description}</p>
          <h4 className="text-2xl text-secondaryBlack font-extrabold">
            ${product?.price}
          </h4>
          <p className="text-gray-700 text-sm">Brand: {product?.brand}</p>
          <p className="text-gray-700 text-sm">
            Available Quantity: {product?.availableQuantity}
          </p>
          <div className="flex items-center text-gray-700 text-sm">
            Rating:{" "}
            <Rating
              style={{ maxWidth: 100 }}
              readOnly
              orientation="horizontal"
              value={product!.rating}
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-between px-10 py-3 border-[1px] border-gray-400 w-[200px] rounded-full mt-2">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev > 0 ? prev - 1 : prev))
                }
              >
                <FaMinus />
              </button>
              <button>{quantity}</button>
              <button onClick={() => setQuantity((prev) => prev + 1)}>
                <FaPlus />
              </button>
            </div>

            <Button
              onClick={() => handleCreateOrder(product as TProduct)}
              className="px-10 py-6 border-[1px] border-gray-400 w-[200px] rounded-full mt-2 bg-buttonPrimary text-white"
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
