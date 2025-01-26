// src/pages/Invoices.tsx

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvoices } from '../features/invoices/invoiceSlice';
import { RootState, AppDispatch } from '../store';
import InvoiceList from '../components/InvoiceList';
import InvoiceModal from '../components/InvoiceModal';
import { useNavigate } from 'react-router-dom';

const Invoices = () => {
  const userId = '1'; // Hardcoded userId, replace it with real authentication flow
  const dispatch = useDispatch<AppDispatch>();
  const invoices = useSelector((state: RootState) => state.invoices.invoices);
  const status = useSelector((state: RootState) => state.invoices.status);
  const error = useSelector((state: RootState) => state.invoices.error) ?? '';
  const navigate = useNavigate();

  const [selectedInvoice, setSelectedInvoice] = useState<any | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login'); // If no token, redirect to login page
    } else {
      dispatch(fetchInvoices(userId)); // Fetch invoices if logged in
    }
  }, [dispatch, userId, navigate]);

  const openModal = (invoice: any) => {
    setSelectedInvoice(invoice); // Set the selected invoice
  };

  const closeModal = () => {
    setSelectedInvoice(null); // Close the modal
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-semibold mb-6 text-gray-800">Invoices</h1>

      {status === 'loading' ? (
        <p>Loading invoices...</p>
      ) : status === 'failed' ? (
        <p>Error fetching invoices: {error}</p>
      ) : (
        <InvoiceList invoices={invoices} openModal={openModal} />
      )}

      {/* Modal for displaying invoice details */}
      {selectedInvoice && (
        <InvoiceModal
          invoice={selectedInvoice}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Invoices;
