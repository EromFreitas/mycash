import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "./services/api";

interface Transaction {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string
    createdAt: string;
}

interface TransactionProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);


export const TransactionsProvider = ({ children }: TransactionProviderProps) => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))

    }, []);

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    );

}

