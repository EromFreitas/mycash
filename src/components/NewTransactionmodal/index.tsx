import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/outcome.svg'
import outcomeImage from '../../assets/outcome.svg'
import incomeImage from '../../assets/income.svg'
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')

    const [type, setType] = useState('deposit');

    function handleCreatenewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {
            title,
            value,
            category,
            type
        }

        api.post('/transactions', data)
    }

    return (

        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button" 
                onClick={onRequestClose}
                className="react-modal-close"
                >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleCreatenewTransaction}>
                <h2>Cadastrar transação</h2>
                <input
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        isActive={type == 'deposit'}
                        activeColor="green"
                        onClick={() => {setType('deposit')}}
                    >
                        <img src={incomeImage} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        isActive={type == 'withdraw'}
                        activeColor="red"
                        onClick={() => {setType('withdraw')}}

                    >
                        <img src={incomeImage} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>            
        </Modal>
    )
}