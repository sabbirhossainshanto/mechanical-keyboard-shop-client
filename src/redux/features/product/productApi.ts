import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => ({
        url: "products",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductQuery } = productApi;
