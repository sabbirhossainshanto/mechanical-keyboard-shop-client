import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => ({
        url: "products",
        method: "GET",
      }),
      providesTags: [{ type: "Products" }],
    }),
    getSingleProduct: builder.query({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: [{ type: "Product" }],
    }),
  }),
});

export const { useGetAllProductQuery, useGetSingleProductQuery } = productApi;
