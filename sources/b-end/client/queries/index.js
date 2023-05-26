import { gql } from "@apollo/client";

// TODO: Define the query needed here (don't forget to export)
export const GET_TODOS = gql`
  query GetTodosQuery {
    todos {
      completed
      id
      name
    }
  }
`;

export const ADD_TODOS = gql`
  mutation PostTodo($name: String!) {
    postTodo(name: $name) {
      statusCode
      message
    }
  }
`;

export const GET_TODO_BY_ID = gql`
  query GetTodoById($todoId: Int!) {
    todo(todoId: $todoId) {
      id
      name
      completed
    }
  }
`;

export const GET_COLORS = gql`
  query GetColorsQuery {
    colors {
      id
      name
      year
      color
    }
  }
`;

export const DELETE_COLOR_BY_ID = gql`
  mutation deleteColorById($deleteColorId: Int!) {
    deleteColor(id: $deleteColorId) {
      statusCode
      message
    }
  }
`;
