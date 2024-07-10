import assets from "@/assets";
import AddProduct from "@/components/modal/AddProduct";
import EditProduct from "@/components/modal/EditProduct";
import Container from "@/components/shared/Container";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeleteSingleProductMutation,
  useGetAllProductQuery,
} from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import toast from "react-hot-toast";

const ProductManagement = () => {
  const { data } = useGetAllProductQuery(undefined);
  const [deleteProduct] = useDeleteSingleProductMutation();

  const handleDeleteProduct = async (product: TProduct) => {
    try {
      const deletedProduct = await deleteProduct(product._id).unwrap();
      console.log(deletedProduct);
      if (deletedProduct?.success) {
        toast.success(deletedProduct?.message);
      } else {
        toast.error(deletedProduct?.message);
      }
    } catch (error: any) {
      toast.error(error.data?.message);
    }
  };
  return (
    <div className="h-full bg-bg-[#f0f0f0]">
      <Container>
        {data?.data?.length > 0 ? (
          <div className="bg-gray-300 pb-10">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Name</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>Brand</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="text-right w-[40%]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.data?.map((product: TProduct) => (
                  <TableRow key={product._id}>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell>
                      <img
                        className="size-8 rounded-md"
                        src={product.image}
                        alt=""
                      />
                    </TableCell>
                    <TableCell className="flex items-center gap-3">
                      {product.brand}
                    </TableCell>
                    <TableCell className="text-right">
                      {product.price}
                    </TableCell>
                    <TableCell className="flex justify-end gap-4">
                      <AddProduct />
                      <EditProduct />
                      <img
                        onClick={() => handleDeleteProduct(product)}
                        className="size-8 cursor-pointer"
                        src={assets.deleteImg}
                        alt=""
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right"></TableCell>
                  <TableCell className="text-right"></TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        ) : (
          <div className="flex items-center justify-center pb-8">
            <TableCaption className="w-full">
              No order available right now.
            </TableCaption>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductManagement;
