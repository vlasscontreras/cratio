import React, { HTMLAttributes } from 'react';
import '../styles/globals.css';

interface IProps extends HTMLAttributes<HTMLElement> {
  Component: any,
  pageProps: Object
}

/* eslint-disable react/jsx-props-no-spreading */
const App = ({ Component, pageProps }: IProps) => <Component {...pageProps} />;

export default App;
