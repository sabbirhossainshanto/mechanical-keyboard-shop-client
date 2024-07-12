import assets from "@/assets";
import AddProduct from "@/components/modal/AddProduct";
import EditProduct from "@/components/modal/EditProduct";
import Container from "@/components/shared/Container";
import Loader from "@/components/shared/Loader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeleteSingleProductMutation,
  useGetAllProductQuery,
} from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { Button } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProductManagement = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [productId, setProductId] = useState("");
  const { data, isLoading } = useGetAllProductQuery(undefined);
  const [deleteProduct] = useDeleteSingleProductMutation();
  const navigate = useNavigate();
  if (isLoading) {
    return <Loader />;
  }

  const handleDeleteProduct = async (product: TProduct) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to see this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const deletedProduct = await deleteProduct(product._id).unwrap();
          if (deletedProduct?.success) {
            Swal.fire({
              title: "Deleted!",
              text: deletedProduct?.message,
              icon: "success",
            });
          }
        }
      });
    } catch (error: any) {
      toast.error(error.data?.message);
    }
  };
  return (
    <div className="h-full bg-bg-[#f0f0f0] pt-14">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl text-secondaryBlack font-bold py-5">
            Products
          </h1>
          <Button
            onClick={() => {
              setOpenAddModal(true);
            }}
            className="flex items-center gap-3 font-semibold bg-[#1e88e5]"
          >
            <span>Add Product</span>
            <img className="size-8 cursor-pointer" src={assets.add} alt="" />
          </Button>
          {openAddModal && (
            <AddProduct
              openAddModal={openAddModal}
              setOpenAddModal={setOpenAddModal}
            />
          )}
        </div>
        {data?.data?.length > 0 ? (
          <div className=" pb-10">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Name</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>Brand</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.data?.map((product: TProduct) => (
                  <TableRow key={product._id}>
                    <TableCell
                      onClick={() => navigate(`/product/${product._id}`)}
                      className="font-medium cursor-pointer"
                    >
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
                      <img
                        onClick={() => {
                          setOpenEditModal(true);
                          setProductId(product._id);
                        }}
                        className="size-8 cursor-pointer"
                        src={assets.update}
                        alt=""
                      />
                      {openEditModal && (
                        <EditProduct
                          productId={productId}
                          openEditModal={openEditModal}
                          setOpenEditModal={setOpenEditModal}
                        />
                      )}
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
            </Table>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center py-10">
            <p className="text-base font-semibold">
              Your product is not available, Please add product to your shop!
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductManagement;
