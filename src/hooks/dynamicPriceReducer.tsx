import { useReducer } from "react";

// Define the state type as a generic object
type State<T extends object> = T;

// Define the action type with a constraint that the state must be an object
type Action<T extends object> = {
  type: "SET_VARIABLE";
  payload: {
    name: keyof State<T>;
    value: number;
  };
};

// Reducer function to handle the actions
function reducer<T extends object>(state: T, action: Action<T>): T {
  switch (action.type) {
    case "SET_VARIABLE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
}

// Custom hook using the reducer
export const useDynamicPriceReducer = <T extends object>(
  initialState: State<T>
) => {
  return useReducer(reducer, initialState);
};
