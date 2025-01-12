import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Country } from "@/interfaces/country.interface";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/all/" }),
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], string>({
      query: () => `/`,
    }),
  }),
});

export const { useGetCountriesQuery } = countriesApi;
