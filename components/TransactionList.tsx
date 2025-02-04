"use client";

interface Transaction {
  description: string;
  amount: number;
  type: "income" | "expense"; // Improved type safety
  id: string; // Assuming each transaction has a unique id
}

interface TransactionListProps {
  transactions: Transaction[];
  onDeleteTransaction: (index: number) => void;
}

export default function TransactionList({
  transactions,
  onDeleteTransaction,
}: TransactionListProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-black mb-4">Transactions</h3>
      {transactions.length === 0 ? (
        <p className="text-gray-500">No transactions yet</p> // Display message if no transactions
      ) : (
        <ul>
          {transactions.map((transaction, index) => (
            <li
              key={transaction.id} // Use unique id instead of index
              className="mb-2 p-2 bg-white rounded shadow flex justify-between items-center"
            >
              <div>
                <span className="font-medium text-black p-1">
                  {transaction.description}
                </span>
                <span
                  className={transaction.type === "income" ? "text-income" : "text-red-600"}
                >
                  ${transaction.amount.toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => onDeleteTransaction(index)}
                className="bg-red-500 text-white p-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
