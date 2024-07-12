import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldValues, useForm } from "react-hook-form";
import { useCreateProductMutation } from "@/redux/features/product/productApi";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
type TEditProduct = {
  openAddModal: boolean;
  setOpenAddModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const AddProduct = ({ openAddModal, setOpenAddModal }: TEditProduct) => {
  const [createProduct] = useCreateProductMutation();
  const { register, handleSubmit } = useForm();
  const handleAddProduct = async (data: FieldValues) => {
    try {
      const product = {
        image: data?.image,
        name: data?.name,
        description: data?.description,
        brand: data?.brand,
        availableQuantity: parseFloat(data?.availableQuantity),
        price: parseFloat(data?.price),
        rating: parseFloat(data?.rating),
      };

      const newProduct = await createProduct(product).unwrap();
      if (newProduct?.success) {
        setOpenAddModal(false);
        toast.success(newProduct?.message);
      }
    } catch (error: any) {
      toast.error(error.data?.message);
    }
  };
  return (
    <Dialog open={openAddModal} onOpenChange={setOpenAddModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>
            Make changes to your product here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(handleAddProduct)}
          className="grid gap-4 py-4"
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              {...register("name", { required: true })}
              id="name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              Image
            </Label>
            <Input
              {...register("image", { required: true })}
              id="image"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="brand" className="text-right">
              Brand
            </Label>
            <Input
              {...register("brand", { required: true })}
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
              {...register("price", { required: true })}
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
              {...register("availableQuantity", { required: true })}
              id="availableQuantity"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rating" className="text-right">
              Rating
            </Label>
            <Input
              {...register("rating", { required: true })}
              id="rating"
              type="number"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              {...register("description", { required: true })}
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

export default AddProduct;
