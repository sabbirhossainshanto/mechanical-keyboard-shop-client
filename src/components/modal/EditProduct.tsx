import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";

import { FieldValues, useForm } from "react-hook-form";
import {
  useGetSingleProductQuery,
  useUpdateSingleProductMutation,
} from "@/redux/features/product/productApi";
import toast from "react-hot-toast";

type TEditProduct = {
  openEditModal: boolean;
  setOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  productId: string;
};

const UpdateProduct = ({
  openEditModal,
  setOpenEditModal,
  productId,
}: TEditProduct) => {
  const { data: product } = useGetSingleProductQuery(productId);

  const [updateProduct] = useUpdateSingleProductMutation();
  const { register, handleSubmit } = useForm();
  const handleUpdateProduct = async (data: FieldValues) => {
    try {
      const payload: Record<string, unknown> = {};
      Object.keys(data).forEach((key) => {
        if (data[key] !== undefined && data[key] !== null && data[key] !== "") {
          if (
            key === "availableQuantity" ||
            key === "price" ||
            key === "rating"
          ) {
            payload[key] = parseFloat(data[key]);
          } else {
            payload[key] = data[key];
          }
        }
      });

      const newProduct = await updateProduct({
        payload,
        id: product?._id,
      }).unwrap();
      console.log(newProduct);
      if (newProduct?.success) {
        toast.success(newProduct?.message);
        setOpenEditModal(false);
      } else {
        toast.error(newProduct?.message);
      }
    } catch (error: any) {
      toast.error(error.data?.message);
    }
  };
  return (
    <Dialog open={openEditModal} onOpenChange={setOpenEditModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
          <DialogDescription>
            Make changes to your product here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(handleUpdateProduct)}
          className="grid gap-4 py-4"
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              defaultValue={product?.name}
              {...register("name")}
              id="name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              Image
            </Label>
            <Input
              defaultValue={product?.image}
              {...register("image")}
              id="image"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="brand" className="text-right">
              Brand
            </Label>
            <Input
              defaultValue={product?.brand}
              {...register("brand")}
              id="brand"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              type="number"
              defaultValue={product?.price}
              {...register("price")}
              id="price"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="availableQuantity" className="text-right">
              Quantity
            </Label>
            <Input
              type="number"
              defaultValue={product?.availableQuantity}
              {...register("availableQuantity")}
              id="availableQuantity"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rating" className="text-right">
              Rating
            </Label>
            <Input
              type="number"
              defaultValue={product?.rating}
              {...register("rating")}
              id="rating"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              defaultValue={product?.description}
              {...register("description")}
              id="description"
              className="col-span-3"
            />
          </div>
          <Button type="submit">Save changes</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProduct;
