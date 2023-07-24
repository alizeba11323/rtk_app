import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const todoAPI = createApi({
  reducerPath: "PostApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => ({
        url: "/todos",
        method: "GET",
      }),
      providesTags: ["Todos"],
    }),
    getSingleTodo: builder.query({
      query: (id) => ({
        url: "/todos/" + id,
        method: "GET",
      }),
      providesTags: ["Todos"],
    }),
    createTodo: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
        headers: {
          "Content-Types": "application/json",
        },
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodo: builder.mutation({
      query: ({ id, ...data }) => ({
        url: "/todos/" + id,
        method: "PUT",
        body: data,
        headers: {
          "Content-Types": "application/json",
        },
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: "/todos/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});
export const {
  useGetAllTodosQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
  useSingleTodoQuery,
} = todoAPI;
export default todoAPI;
