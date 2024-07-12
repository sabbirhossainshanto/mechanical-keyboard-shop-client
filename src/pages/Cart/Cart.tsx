import assets from "@/assets";
import Container from "@/components/shared/Container";
import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeleteBookmarkMutation,
  useGetAllBookmarkQuery,
  useUpdateBookmarkMutation,
} from "@/redux/features/cart/cartApi";
import { TBookmark } from "@/types";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllBookmarkQuery(undefined);
  const [deleteOrder] = useDeleteBookmarkMutation();
  const [updateOrder] = useUpdateBookmarkMutation();

  let totalAmount = 0;
  data?.data?.forEach((item: TBookmark) => {
    totalAmount += item.price * item.quantity;
  });

  const handleDeleteOrder = (bookmark: TBookmark) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to see this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteOrder(bookmark._id);
          Swal.fire({
            title: "Deleted!",
            text: "Your order has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const handleUpdateBookmark = async (type: string, bookmark: TBookmark) => {
    try {
      const payload = { product: bookmark._id, quantity: 1, type };
      const result = await updateOrder({ payload, _id: bookmark._id }).unwrap();
      if (result?.success) {
        toast.success(result?.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="h-full py-14">
      <Container>
        {data?.data?.length > 0 ? (
          <div className="pb-10">
            <h1 className="text-3xl text-secondaryBlack font-bold py-5">
              Products
            </h1>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Name</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="text-right">Action</TableHead>
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
                      <button
                        onClick={() => handleUpdateBookmark("minus", bookmark)}
                      >
                        <FaMinus />
                      </button>
                      <button>{bookmark.quantity}</button>
                      <button
                        onClick={() => handleUpdateBookmark("plus", bookmark)}
                      >
                        <FaPlus />
                      </button>
                    </TableCell>
                    <TableCell className="text-right">
                      {(bookmark.price * bookmark.quantity)?.toFixed(2)}
                    </TableCell>
                    <TableCell className="flex justify-end">
                      <img
                        onClick={() => handleDeleteOrder(bookmark)}
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
                  <TableCell className="text-right">
                    ${totalAmount?.toFixed(2)}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
            <div className="flex justify-end p-5">
              <Button
                onClick={() => navigate("/checkout")}
                className="px-10 py-6 border-[1px] border-gray-400 w-[200px] rounded-full mt-2  text-base font-medium bg-buttonPrimary text-white"
              >
                Proceed To Checkout
              </Button>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center py-10">
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
      </Container>
    </div>
  );
};

export default Cart;
