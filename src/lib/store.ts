import { configureStore } from "@reduxjs/toolkit";
import { countriesApi } from "@/services/countries";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [countriesApi.reducerPath]: countriesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(countriesApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
