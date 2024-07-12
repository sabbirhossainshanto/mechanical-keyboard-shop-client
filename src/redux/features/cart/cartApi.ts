import { baseApi } from "../../api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBookmark: builder.mutation({
      query: (data) => ({
        url: `/carts/create-bookmark`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [
        { type: "Products" },
        { type: "Product" },
        { type: "Carts" },
      ],
    }),
    getAllBookmark: builder.query({
      query: () => ({
        url: `/carts`,
        method: "GET",
      }),
      providesTags: [{ type: "Carts" }],
    }),
    deleteBookmark: builder.mutation({
      query: (id: string) => ({
        url: `/carts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Carts" }],
    }),
    updateBookmark: builder.mutation({
      query: ({ payload, _id }) => {
        return {
          url: `/carts/${_id}`,
          method: "PUT",
          body: payload,
        };
      },
      invalidatesTags: [{ type: "Carts" }, { type: "Cart" }],
    }),
  }),
});

export const {
  useCreateBookmarkMutation,
  useGetAllBookmarkQuery,
  useUpdateBookmarkMutation,
  useDeleteBookmarkMutation,
} = cartApi;
