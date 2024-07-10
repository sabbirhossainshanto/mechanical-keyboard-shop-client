import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (payload) => ({
        url: "/products/create-product",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [{ type: "Products" }],
    }),
    getAllProduct: builder.query({
      query: () => ({
        url: "/products",
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
    deleteSingleProduct: builder.mutation({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Products" }],
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useDeleteSingleProductMutation,
  useCreateProductMutation,
} = productApi;
