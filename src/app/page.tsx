import {apiClient} from '@/lib/apiClient';
import { headers } from 'next/headers';

export default async function Home() {
  
  const response = await fetch("https://api.digikala.com/v2/", {})
  const data = await response.json()
  console.log(data)
  return <></>

}