import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (payload) => ({
        url: "/orders/create-order",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [{ type: "Products" }, { type: "Carts" }],
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
