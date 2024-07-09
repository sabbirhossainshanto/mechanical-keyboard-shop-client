import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TProduct } from "@/types";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }: { product: TProduct }) => {
  const navigate = useNavigate();
  return (
    <Card className="w-full bg-white">
      <CardContent className="p-0">
        <div className="grid w-full items-center gap-4">
          <img className="w-full" src={product.image} alt="" />
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>Brand: {product.brand}</CardDescription>
            <CardDescription>
              Available Quantity: {product.availableQuantity}
            </CardDescription>
            <CardDescription>Price: {product.price}</CardDescription>
            <div className="flex items-center text-gray-500 text-sm">
              Rating:{" "}
              <Rating
                style={{ maxWidth: 100 }}
                readOnly
                orientation="horizontal"
                value={product.rating}
              />
            </div>
          </CardHeader>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          onClick={() => navigate(`/product/${product._id}`)}
          className="bg-buttonPrimary border-none text-white text-lg font-semibold px-3  py-2 "
        >
          See Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
