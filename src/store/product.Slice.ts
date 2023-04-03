import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../TS/dataService'
import { getProductsTunk } from './product.thunk'

type ProductTypes = {
    products: Product[]
    isLoading: boolean
    error: string
    count: number
    totalPrice: number
}

const initialState: ProductTypes = {
    products: [],
    isLoading: false,
    error: '',
    count: 0,
    totalPrice: 0,
}
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.products.map((item: any) => {
                if (item.id === action.payload) {
                    item.quantity++
                    item.total = item.total + item.price
                }
            })
        },
        decrement: (state, action) => {
            state.products.map((item: any) => {
                if (item.id === action.payload) {
                    item.quantity--
                    item.total = item.total - item.price
                }
            })
        },
        incrementByPrice: (state, action) => {
            state.totalPrice += action.payload
        },
        decrementByPrice: (state, action) => {
            state.totalPrice -= action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProductsTunk.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ''
            state.products = action.payload.map((item) => {
                return {
                    ...item,
                    quantity: 0,
                    total: 0,
                }
            })
        })
        builder.addCase(getProductsTunk.pending, (state) => {
            state.isLoading = true
            state.error = ''
        })
        builder.addCase(getProductsTunk.rejected, (state) => {
            state.isLoading = false
            state.error = 'Something went wrong!'
        })
    },
})
export const productActions = productSlice.actions
