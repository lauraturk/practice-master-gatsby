import React from 'react';
import Layout from './src/components/Layout';

/* this is a named function from Gatsby browser APIs
will wrap a page */
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
