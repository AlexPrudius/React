import { useState } from "react"
import { IProduct } from "../models"
import axios from "axios"
import { ErrorMessage } from "./ErrorMessage"

const productData: IProduct = {
    
        title: '',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
            rate: 42,
            count: 10
        }
}


interface CreateProductProps {
    onCreate: (product: IProduct) => void
}


export function CreateProduct({onCreate}:CreateProductProps){ 
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const sumbitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')



        if (value.trim().length === 0) {
            setError('Please enter valid title.')
            return
        }

        productData.title = value
        const respone = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
        

        onCreate(respone.data)

    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
         
    }

    return (
        <form onSubmit={sumbitHandler}>
            <input 
                type="text" 
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product title..."
                value={value}
                onChange={changeHandler}
            />

            {error && <ErrorMessage error={error} />}

            <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white" >Create </button>
        </form>
    )
}