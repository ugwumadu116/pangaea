import React, {useState} from 'react';
import Products from './components/Products';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "@apollo/react-hooks"
import {PangaeaContainer} from './contaners/pangaeaContainer'
import './App.css';

function App() {
  const client = new ApolloClient({
    uri: "https://pangaea-interviews.now.sh/api/graphql"
  })
  const [currency, setCurrency] = useState('USD')
  
  return (
    <ApolloProvider client={client}>
      <PangaeaContainer setCurrency={setCurrency} Currency={currency}/>
    </ApolloProvider>
  );
}

export default App;
