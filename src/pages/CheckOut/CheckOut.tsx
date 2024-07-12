import assets from "@/assets";
import Container from "@/components/shared/Container";
import Loader from "@/components/shared/Loader";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllBookmarkQuery } from "@/redux/features/cart/cartApi";
import { useCreateOrderMutation } from "@/redux/features/order/orderApi";

import { TBookmark } from "@/types";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOut = () => {
  const navigate = useNavigate();
  const [createOrder] = useCreateOrderMutation();
  const { data, isLoading } = useGetAllBookmarkQuery(undefined);
  const { register, handleSubmit } = useForm();

  if (isLoading) {
    return <Loader />;
  }

  let totalAmount = 0;
  data?.data?.forEach((item: TBookmark) => {
    totalAmount += item.price * item.quantity;
  });

  const product = data?.data?.map((bookmarkedProduct: TBookmark) => {
    return {
      cartProductId: bookmarkedProduct._id,
      productId: bookmarkedProduct.product._id,
      price: bookmarkedProduct.price,
      quantity: bookmarkedProduct.quantity,
    };
  });

  const handleCreateOrder = (data: FieldValues) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to order!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const payload = {
            ...data,
            product,
          };
          const orderedProduct = await createOrder(payload).unwrap();
          console.log(orderedProduct);
          if (orderedProduct?.success) {
            toast.success(orderedProduct.message);
            navigate('/success')
          }
        } catch (error: any) {
          toast.error(error.data?.message);
        }
      }
    });
  };

  return (
    <div className="py-14 bg-[#f0f0f0]" >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <form
            onSubmit={handleSubmit(handleCreateOrder)}
            className="space-y-3 "
          >
            <div className="grid grid-cols-4 items-center gap-4 w-full">
              <Label className="text-right">Name</Label>
              <input
                {...register("name", { required: true })}
                id="name"
                className="col-span-3 py-1 border-gray-300 border-[1px] rounded-md"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 w-full">
              <Label className="text-right">Email</Label>
              <input
                {...register("email", { required: true })}
                id="email"
                className="col-span-3 py-1 border-gray-300 border-[1px] rounded-md"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 w-full">
              <Label className="text-right">Phone</Label>
              <input
                {...register("phone", { required: true })}
                id="phone"
                className="col-span-3 py-1 border-gray-300 border-[1px] rounded-md"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 w-full">
              <Label className="text-right">Address</Label>
              <input
                {...register("address", { required: true })}
                id="address"
                className="col-span-3 py-1 border-gray-300 border-[1px] rounded-md"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button
                disabled={data?.data?.length === 0}
                htmlType="submit"
                className="px-10 py-6 border-[1px] border-gray-400 w-[200px] rounded-full mt-2  text-base font-medium bg-buttonPrimary text-white flex items-center gap-3"
              >
                <span>Place Order</span>
                <img className="size-5" src={assets.cashOn} alt="" />
              </Button>
              {/* <Button className="px-10 py-6 border-[1px] border-gray-400 w-[200px] rounded-full mt-2  text-base font-medium bg-white  flex items-center gap-3">
                <span> Stripe</span>
                <img className="size-10" src={assets.stripe} alt="" />
              </Button> */}
            </div>
          </form>
          <div className="">
            {data?.data?.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="">Name</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.data?.map((bookmark: TBookmark) => (
                    <TableRow key={bookmark._id}>
                      <TableCell
                        onClick={() =>
                          navigate(`/product/${bookmark.product._id}`)
                        }
                        className="font-medium cursor-pointer"
                      >
                        {bookmark.product.name}
                      </TableCell>
                      <TableCell>
                        <img
                          className="size-8 rounded-md"
                          src={bookmark.product.image}
                          alt=""
                        />
                      </TableCell>
                      <TableCell className="flex items-center gap-3">
                        {bookmark.quantity}
                      </TableCell>
                      <TableCell className="text-right">
                        {bookmark.price * bookmark.quantity}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">
                      ${totalAmount?.toFixed(2)}
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            ) : (
              <div className="h-full flex flex-col items-center justify-center">
                <p className="text-base font-semibold">
                  Your cart is empty, Please add product to your cart!
                </p>
                <Button
                  className="px-10 py-6 border-[1px] border-gray-400 w-[200px] rounded-full mt-2  text-base font-medium bg-buttonPrimary text-white flex items-center gap-3"
                  onClick={() => navigate("/products")}
                >
                  Browse Product
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckOut;
