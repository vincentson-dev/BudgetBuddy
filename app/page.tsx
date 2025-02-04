"use client";

import { useState } from "react";
import Layout from "../components/Layout";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import BalanceSummary from "../components/BalanceSummary";

interface Transaction {
  description: string;
  amount: number;
  type: "income" | "expense";
}

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAddTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (index: number) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((_, i) => i !== index)
    );
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto text-black">
        <h2 className="text-xl font-semibold mb-4">Your Finances</h2>
        <BalanceSummary transactions={transactions} />
        <TransactionForm onAddTransaction={handleAddTransaction} />
        <TransactionList
          transactions={transactions}
          onDeleteTransaction={deleteTransaction}
        />
      </div>
    </Layout>
  );
}
