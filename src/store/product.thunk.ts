import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProducts } from '../TS/dataService'

export const getProductsTunk = createAsyncThunk(
    'product/getProduct',
    async (_, { rejectWithValue }) => {
        try {
            const { products } = await getProducts()
            return products
        } catch (e) {
            return rejectWithValue('Something went wrong')
        }
    }
)
