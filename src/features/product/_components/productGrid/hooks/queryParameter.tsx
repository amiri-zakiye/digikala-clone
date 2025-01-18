"use client"

import { useRouter, useSearchParams } from 'next/navigation';  

const useQueryParameter = () => {
    const router = useRouter();  
    const searchParams = useSearchParams();  

    const queryParameterHandler = (paramKey: string,paramValue: string | boolean ) => {
        const params = new URLSearchParams(searchParams.toString());  
        
        const shouldSet = typeof paramValue === 'boolean' ? paramValue : !!paramValue;  

        if (shouldSet) {  
            params.set(paramKey, typeof paramValue === 'boolean' ? '1' : paramValue);  
        } else {  
            params.delete(paramKey);  
        }  

        router.push(`?${params.toString()}`);  
    }

    return queryParameterHandler
}

export default useQueryParameter