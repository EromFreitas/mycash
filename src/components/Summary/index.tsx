import {Container} from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
    return (
      <Container>
          <div>
            <header>
              <p>Entrada</p>
              <img src={incomeImg} alt="Entrada" />
            </header>
            <strong>R$ 1000,00</strong>
          </div>

          <div>
            <header>
              <p>Saída</p>
              <img src={outcomeImg} alt="Saída" />
            </header>
            <strong>- R$ 500,00</strong>
          </div>
          
          <div className="highlight-total">
            <header>
              <p>Total</p>
              <img src={totalImg} alt="Total" />
            </header>
            <strong>R$ 500,00</strong>
          </div>
      </Container> 
    );
}