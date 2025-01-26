// src/features/invoices/invoiceSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create an async thunk to fetch invoices from the server
export const fetchInvoices = createAsyncThunk(
  'invoices/fetchInvoices',
  async (userId: string, { rejectWithValue }) => {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      return rejectWithValue('No token found');
    }

    try {
      const response = await axios.get(`http://localhost:3000/invoices?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,  // Ensure token is sent in Authorization header
        },
      });

      return response.data; // Return the invoices data from the response
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to fetch invoices';
      return rejectWithValue(errorMessage);
    }
  }
);

interface Invoice {
  id: number;
  vendor_name: string;
  amount: number;
  due_date: string;
  description: string;
  user_id: number;
  paid: boolean;
}

interface InvoiceState {
  invoices: Invoice[];
  status: 'idle' | 'loading' | 'failed';
  error: string | undefined;
}

const initialState: InvoiceState = {
  invoices: [],
  status: 'idle',
  error: '',  
};

// Create the slice with reducers to handle the invoice fetch actions
const invoiceSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.status = 'loading'; // Set status to loading while the fetch is in progress
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.status = 'idle'; // Reset status to idle when the data is fetched successfully
        state.invoices = action.payload;
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.status = 'failed'; // Set status to failed if there's an error
        state.error = action.payload as string;
      });
  },
});

export default invoiceSlice.reducer;
