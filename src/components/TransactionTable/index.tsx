import { Container } from "./styles";

export function TransactionTable() {
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>13/06/22</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.200</td>
            <td>Desenvolvimento</td>
            <td>13/06/22</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}