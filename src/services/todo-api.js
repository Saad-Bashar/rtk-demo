import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "./api";

export const todoApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllTodos: builder.query({
      query: () => {
        return "/todos";
      },
      providesTags: ["Todos"],
    }),
    addTodo: builder.mutation({
      query: ({ title }) => ({
        url: "/todos",
        method: "POST",
        body: { title, completed: false },
      }),
      invalidatesTags: ["Todos"],
    }),
    getTodoById: builder.query({
      query: id => `todos/${id}`,
      providesTags: (_result, _err, id) => [{ type: "Todos", id }],
    }),
    updateTodo: builder.mutation({
      query: ({ id, title, completed }) => ({
        url: `todos/${id}`,
        method: "PUT",
        body: { title, completed },
      }),
      // async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
      //   try {
      //     const { data: updatedTodo } = await queryFulfilled;
      //     dispatch(
      //       api.util.updateQueryData("getTodoById", id, draft => {
      //         Object.assign(draft, updatedTodo);
      //       })
      //     );
      //   } catch {}
      // },
      invalidatesTags: (_result, _error, { id }) => {
        return [{ type: "Todos", id: id }, "Todos"];
      },
    }),
    deleteTodo: builder.mutation({
      query: id => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useGetTodoByIdQuery,
  useUpdateTodoMutation,
  useAddTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
