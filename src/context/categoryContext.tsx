'use client';
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

type CategoryState = {
  index: number;
  value: string;
};

const SET_CATEGORY = 'SET_CATEGORY';

type Action = {
  type: typeof SET_CATEGORY;
  payload: Partial<CategoryState>;
};

const initialCategoryState: CategoryState = {
  index: 0,
  value: '',
};

const CategorySelectContext = createContext<
  | {
      categoryState: CategoryState;
      categoryDispatch: (payload: Partial<CategoryState>) => void;
    }
  | undefined
>(undefined);

const reducer = (state: CategoryState, action: Action) => {
  switch (action.type) {
    case SET_CATEGORY:
      const newCategoryState = {
        ...state,
        ...action.payload,
      };
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(
          'categoryState',
          JSON.stringify(newCategoryState)
        );
      }
      return newCategoryState;
    default:
      return state;
  }
};

export const CategorySelectProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const storedCategorySelected =
    typeof localStorage !== 'undefined'
      ? localStorage.getItem('categoryState')
      : null;
  const initialCategorySelected = storedCategorySelected
    ? JSON.parse(storedCategorySelected)
    : initialCategoryState;

  const [categoryState, dispatch] = useReducer(
    reducer,
    initialCategorySelected
  );
  const categoryDispatch = (payload: Partial<CategoryState>) => {
    dispatch({ type: SET_CATEGORY, payload });
  };

  return (
    <CategorySelectContext.Provider value={{ categoryState, categoryDispatch }}>
      {children}
    </CategorySelectContext.Provider>
  );
};

export const useCategoryState = () => {
  const categorySelectContext = useContext(CategorySelectContext);
  if (!categorySelectContext) {
    throw new Error(
      'useCategoryState must be used within an CategorySelectProvider'
    );
  }
  return categorySelectContext;
};
