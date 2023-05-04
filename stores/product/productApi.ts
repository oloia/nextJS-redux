import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IProduct } from './type';


export const productApi = createApi({
  reducerPath: 'api/products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: build => ({
    getProducts: build.query<IProduct[], number>({ query: (limit = 5) => `products?limit=${limit}` }),
  }),
});

export const { useGetProductsQuery } = productApi;
