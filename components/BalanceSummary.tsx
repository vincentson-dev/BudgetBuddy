interface Transaction {
  description: string;
  amount: number;
  type: "income" | "expense";
}

interface BalanceSummaryProps {
  transactions: Transaction[];
}

export default function BalanceSummary({ transactions }: BalanceSummaryProps) {
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-black mb-2">Balance Summary</h3>
      <div className="grid grid-cols-3 gap-4">
      <div className="bg-main p-4 rounded">
          <p className="text-white">Balance</p>
          <p className="font-bold text-white">${balance.toFixed(2)}</p>
        </div>
        <div className="bg-income p-4 rounded">
          <p className="text-white">Income</p>
          <p className="font-bold text-white">${totalIncome.toFixed(2)}</p>
        </div>
        <div className="bg-red-500 p-4 rounded">
          <p className=" text-whitesupremacist">Expense</p>
          <p className="font-bold text-whitesupremacist">${totalExpense.toFixed(2)}</p>
        </div>
        
      </div>
    </div>
  );
}
