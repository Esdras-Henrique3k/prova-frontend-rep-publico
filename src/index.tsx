import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Grommet } from 'grommet';


const theme = {
  global: {
    colors: {
      'Fundo de cadastro': '#29abe2',
      'TitulodobotaoCadastrar': '#29abe2',
      'TítuloLista de Cadastro': '#29abe2',
      'Numerosdatabela': '#012d51',
      'BotaoCadastrar': '#012d51',
      'Titulos das colunas da tabela': '#012d51',
      'Linhas da tabela': '#29abe2',
      'Informações da tabela': '#808080',
    },
    font: {
      family: 'Roboto',
      // family: "HelveticaUL",
      size: '14px',
      height: '20px',
    },
    breakpoints: {
      xsmall: { value: 768 },
      small: { value: 1280 },
      medium: { value: 1536 },
      large: {}
    },
  },
  formField: {
    label: {
      margin: { vertical: '-8px', horizontal: '0', top: 'small' },
    },
    border: {
      color: 'white'
    },
    margin: '0',
    focus: {
      border: { color: "white" }
    }
  },
  // tabs: {
  //   header: {
  //     border: {
  //       color: 'Linhas da tabela'
  //     }
  //   }
  // },
  tab: {
    border: {
      side: "cover",
      size: 'small',
      color: 'gray',
      active: {
        side: "cover",
        size: 'small',
        color: 'Linhas da tabela',
      }

    }
  }
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Grommet theme={theme}>
    <App />
  </Grommet>
);
