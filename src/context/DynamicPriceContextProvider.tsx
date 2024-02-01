import { ReactNode, createContext } from "react";
import { Variable } from "../Models/Variable";
import { useDynamicPriceReducer } from "../hooks/dynamicPriceReducer";

export const DynamicPriceContext = createContext(null);

type Props = {
  children: ReactNode;
  variables: Variable[];
};

function variablesToInitialState(variables: Variable[]) {
  const initialState = {};
  variables.forEach(
    (variable) => (initialState[variable.name] = variable.initialValue)
  );
  return initialState;
}

export const ExampleContextProvider = ({ children, variables }: Props) => {
  const [state, dispatch] = useDynamicPriceReducer(
    variablesToInitialState(variables)
  );

  return (
    <DynamicPriceContext.Provider value={{ state, dispatch }}>
      {children}
    </DynamicPriceContext.Provider>
  );
};
