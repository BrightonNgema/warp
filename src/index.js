import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo';
import ReactDOM from "react-dom";
import './index.css'
import routes from './routes'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.css';
import { CartProvider } from './utils/cartContext';


const client = new ApolloClient({
    uri:'https://warpfrontendtestserver.herokuapp.com/graphql',
    fetchOptions: {
        credentials: 'include'
    },
    onError: ({ networkError }) => {
        if (networkError) {
            console.log('Network Error', networkError);
        }
    }
})

ReactDOM.render(
    <ApolloProvider client={client}>
      <CartProvider>
        {routes}
      </CartProvider>
    </ApolloProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()


