import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './assets/spectre.min.css';
import './assets/icons.min.css';
import './assets/web.css';
import App from './App';

const client = new ApolloClient({
	uri: 'https://countries.trevorblades.com',
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);
