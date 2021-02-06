import React, { Component } from 'react';
import { Layout } from '../components/Layout';

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl mt-10 md:mt-24 leading-none font-extrabold tracking-tight text-gray-900">
          Construa sites modernos com agilidade sem precisar sair do HTML.
        </h1>
      </Layout>
    );
  }
}
