import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model, Server } from 'miragejs';
import App from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer app', 
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2022-05-17 22:00')
        },
        {
          id: 2,
          title: 'Aluguel', 
          type: 'withdraw',
          category: 'Dev',
          amount: 2000,
          createdAt: new Date('2022-05-17 23:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = "api";

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
