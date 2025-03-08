"use server"

import { QueryClient } from '@tanstack/react-query';  
import { getProducts } from '../apiLayer';  

export const createPrefetchedQueryClient = async (params:string | string[][] | Record<string, string> | undefined) => {  
  const queryClient = new QueryClient();  
  const urlParams = new URLSearchParams(params);  

  await queryClient.prefetchInfiniteQuery({  
    queryKey: ['products'],  
    queryFn: () => getProducts(1, urlParams.toString()),  
    initialPageParam: 1,  
  });  

  return queryClient;  
};  