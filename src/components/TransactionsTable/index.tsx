import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de aplicativo</td>
                        <td className="deposit">R$ 8.000,00</td>
                        <td>Job Development</td>
                        <td>28/12/2021</td>
                    </tr>
                    <tr>
                        <td>Supermercado</td>
                        <td className="withdraw">- R$ 1.000,00</td>
                        <td>Alimentação</td>
                        <td>28/12/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}