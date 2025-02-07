'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
    const supabase = await createClient()
  
    const formValues = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }
  
    const { error, data} = await supabase.auth.signUp(formValues)
    console.log("error",error)
    console.log("data",data)
  
    if (error) {
      redirect('/error')
    }
  
    revalidatePath('/', 'layout')
    redirect('/')
  }