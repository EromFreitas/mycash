import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from "react-modal"
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionmodal";
import { TransactionsContext } from "./TransactionsContext";

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModal(false);
  }

  return (
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}

export default App;
