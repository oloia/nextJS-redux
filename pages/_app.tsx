import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../stores/store';
import { FC } from 'react';

const MyApp: FC<AppProps> = (props) => {
  const { Component, pageProps } = props;
  const AnyComponent = Component as any;
  return (
    <Provider store={store}>
      <div className="py-7 px-5">
        <AnyComponent {...pageProps} />
      </div>
    </Provider>
  );
};

export default MyApp;
