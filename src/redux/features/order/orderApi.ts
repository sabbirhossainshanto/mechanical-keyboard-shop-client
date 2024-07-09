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
  }),
});

export const { useGetAllOrdersQuery, useCreateOrderMutation } = orderApi;
