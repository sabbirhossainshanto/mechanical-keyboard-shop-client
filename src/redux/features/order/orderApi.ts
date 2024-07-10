import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: `/orders/create-order`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [
        { type: "Products" },
        { type: "Product" },
        { type: "Orders" },
      ],
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: `/orders`,
        method: "GET",
      }),
      providesTags: [{ type: "Orders" }],
    }),
    deleteOrder: builder.mutation({
      query: (id: string) => ({
        url: `/orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Orders" }],
    }),
    updateOrder: builder.mutation({
      query: ({ payload, _id }) => ({
        url: `/orders/${_id}`,
        method: "PUT",
        data: payload,
      }),
      invalidatesTags: [{ type: "Orders" }],
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useCreateOrderMutation,
  useDeleteOrderMutation,
  useUpdateOrderMutation,
} = orderApi;
