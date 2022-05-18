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


type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);

export async function createTransaction(transaction: TransactionInput) {

    await api.post('/transactions', transaction)
}

export const TransactionsProvider = ({ children }: TransactionProviderProps) => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))

    }, []);

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );

}

