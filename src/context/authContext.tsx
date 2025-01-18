'use client';
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

type AuthState = {
  name: string;
  email: string;
  role: string;
  token: string;
};

type AuthAction =
  | { type: typeof SET_AUTH_DETAILS; payload: Partial<AuthState> }
  | { type: typeof LOGOUT };

const initialAuthState: AuthState = {
  name: '',
  email: '',
  role: '',
  token: '',
};

const SET_AUTH_DETAILS = 'SET_AUTH_DETAILS';
const LOGOUT = 'LOGOUT';

const AuthContext = createContext<
  | {
      authDetails: AuthState;
      setAuthDetails: (payload: Partial<AuthState>) => void;
      logout: () => void;
    }
  | undefined
>(undefined);

const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case SET_AUTH_DETAILS:
      const newAuthState = {
        ...state,
        ...action.payload,
      };

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('authDetails', JSON.stringify(newAuthState));
      }

      return newAuthState;
    case LOGOUT:
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('authDetails');
      }
      return initialAuthState;

    default:
      return state;
  }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const storedAuthDetails =
    typeof localStorage !== 'undefined'
      ? localStorage.getItem('authDetails')
      : null;
  const initialAuthDetails = storedAuthDetails
    ? JSON.parse(storedAuthDetails)
    : initialAuthState;

  const [authDetails, dispatchAuth] = useReducer(
    authReducer,
    initialAuthDetails
  );

  // useEffect(() => {
  //   // Check if localStorage is defined before using it
  //   if (typeof localStorage !== 'undefined') {
  //     // Update localStorage when authDetails changes
  //     localStorage.setItem('authDetails', JSON.stringify(authDetails));
  //   }
  // }, [authDetails]);

  const setAuthDetails = (payload: Partial<AuthState>) => {
    dispatchAuth({ type: SET_AUTH_DETAILS, payload });
  };

  const logout = () => {
    dispatchAuth({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider value={{ authDetails, setAuthDetails, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return authContext;
};
