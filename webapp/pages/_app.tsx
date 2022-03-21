import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import apolloClient from '../apollo-client';
import { store } from '../store';
import '../styles/globals.css';
import SagaRouterProvider from '../store/SagaRouterProvider';

function App({ Component, pageProps }: AppProps) {
  return (
    <SagaRouterProvider>
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
    </SagaRouterProvider>
  );
}

export default App;
