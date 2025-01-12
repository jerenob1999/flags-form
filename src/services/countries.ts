import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Country } from "@/interfaces/country.interface";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com/v3.1/",
  }),
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], string | undefined>({
      query: () => "all",
    }),
  }),
});

export const { useGetCountriesQuery } = countriesApi;
