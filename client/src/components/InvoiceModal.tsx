import React from 'react';

interface Invoice {
  id: number;
  vendor_name: string;
  amount: number;
  due_date: string;
  description: string;
  user_id: number;
  paid: boolean;
}

interface InvoiceModalProps {
  invoice: Invoice;
  closeModal: () => void;
}

const InvoiceModal: React.FC<InvoiceModalProps> = ({ invoice, closeModal }) => {
  const renderStatus = (paid: boolean) => {
    if (paid) return <span className="text-green-500 font-bold">Paid</span>;
    return <span className="text-red-500 font-bold">Unpaid</span>;
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-700">Invoice Details</h2>
          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-4 text-gray-700">
          <p><strong>Vendor:</strong> {invoice.vendor_name}</p>
          <p><strong>Amount:</strong> ${invoice.amount}</p>
          <p><strong>Due Date:</strong> {invoice.due_date}</p>
          <p><strong>Status:</strong> {renderStatus(invoice.paid)}</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
