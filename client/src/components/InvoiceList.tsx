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

interface InvoiceListProps {
  invoices: Invoice[];
  openModal: (invoice: Invoice) => void;
}

const InvoiceList: React.FC<InvoiceListProps> = ({ invoices, openModal }) => {

  const renderStatus = (paid: boolean) => {
    if (paid) return <span className="text-green-500 font-bold">Paid</span>;
    return <span className="text-red-500 font-bold">Unpaid</span>;
  };

  const userEmail = localStorage.getItem('userEmail') || 'test@test.com'; // Replace with actual logged-in user's email if needed

  return (
    <div className="p-6">
      {/* Header and User Info */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-semibold text-gray-800">Invoices</h1>

        {/* User Info on the right */}
        <div className="flex items-center">
          <img 
            src="https://avatar.iran.liara.run/public" 
            alt="User Avatar" 
            className="rounded-full mr-3 w-12 h-12 object-cover"
          />
          <p className="text-sm font-semibold text-gray-800">{userEmail}</p>
        </div>
      </div>

      {/* Invoice Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-blue-100">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 border-b">Vendor</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 border-b">Amount</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 border-b">Due Date</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr
                key={invoice.id}
                className="hover:bg-blue-50 cursor-pointer transition-colors duration-200"
                onClick={() => openModal(invoice)}
              >
                <td className="py-3 px-6 text-sm text-gray-800 border-b">{invoice.vendor_name}</td>
                <td className="py-3 px-6 text-sm text-gray-800 border-b">${invoice.amount}</td>
                <td className="py-3 px-6 text-sm text-gray-800 border-b">{invoice.due_date}</td>
                <td className="py-3 px-6 text-sm text-gray-800 border-b">{renderStatus(invoice.paid)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceList;
