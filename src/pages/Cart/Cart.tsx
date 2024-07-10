import assets from "@/assets";
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
  useDeleteOrderMutation,
  useGetAllOrdersQuery,
  useUpdateOrderMutation,
} from "@/redux/features/order/orderApi";
import { TOrder } from "@/types";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";

const Cart = () => {
  const { data } = useGetAllOrdersQuery(undefined);
  const [deleteOrder] = useDeleteOrderMutation();
  const [updateOrder] = useUpdateOrderMutation();
  let totalAmount = 0;
  data?.data?.forEach((item: TOrder) => {
    totalAmount += item.price * item.quantity;
  });

  const handleDeleteOrder = (order: TOrder) => {
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
          deleteOrder(order._id);
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

  const handleUpdateOrder = (type: string, order: TOrder) => {
    try {
      const payload = {
        productId: order.productId,
        quantity: 1,
        type,
      };
      updateOrder({ payload, _id: order._id });
      toast.success("Order quantity updated successful!");
    } catch (error) {
      toast.error("Something went wrong!");
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
                  <TableHead className="w-[100px]">Name</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.data?.map((order: TOrder) => (
                  <TableRow key={order._id}>
                    <TableCell className="font-medium">
                      {order.productId.name}
                    </TableCell>
                    <TableCell>
                      <img
                        className="size-8 rounded-md"
                        src={order.productId.image}
                        alt=""
                      />
                    </TableCell>
                    <TableCell className="flex items-center gap-3">
                      <button onClick={() => handleUpdateOrder("minus", order)}>
                        <FaMinus />
                      </button>
                      <button> {order.quantity}</button>
                      <button onClick={() => handleUpdateOrder("plus", order)}>
                        <FaPlus />
                      </button>
                    </TableCell>
                    <TableCell className="text-right">
                      {order.price * order.quantity}
                    </TableCell>
                    <TableCell className="flex justify-end">
                      <img
                        onClick={() => handleDeleteOrder(order)}
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

export default Cart;
