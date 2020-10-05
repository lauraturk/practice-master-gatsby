import React from 'react';
import Layout from './src/components/Layout';

/* For Server Side Rendering */
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
