import { TProduct } from "@/types";
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
      query: (query) => {
        const params = new URLSearchParams();
        if (query?.searchTerm) {
          params.append("searchTerm", query.searchTerm);
        } 
        if (query?.sort) {
          params.append("sort", query.sort);
        }
        return {
          url: "/products",
          method: "GET",
          params,
        };
      },
      providesTags: [{ type: "Products" }],
    }),
    getSingleProduct: builder.query<TProduct, string>({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      transformResponse: (res: { data: TProduct }) => {
        return res?.data;
      },
      providesTags: [{ type: "Product" }],
    }),
    deleteSingleProduct: builder.mutation({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Products" }],
    }),
    updateSingleProduct: builder.mutation({
      query: ({ payload, id }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: payload,
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
  useUpdateSingleProductMutation,
} = productApi;
