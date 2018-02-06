import React, { Component } from 'react';
import styled from 'styled-components';

import avatar from './img/avatar.webp';
require('./_intro.scss');

const client_list = [
  { name: `D Magazine` },
  { name: `The Beach` },
  { name: `Fruit App` },
  { name: `"Tiger from Timbuktu"by John Warren` },
  { name: `"Tulip Bay" by Emily Brown` },
  { name: `Hansen Fashion` },
  { name: `Paper News` }
];

class InfoPage extends Component {
  renderClientList() {
    return client_list.map(({ name }) => (
      <p className="intro__content">{name}</p>
    ));
  }
  render() {
    return (
      <main className="infopage">
        <article className="infopage__intro">
          <section className="intro">
            <h3 className="intro__title">Ocean Lin</h3>
            <p className="intro__subtitle">
              Is an Illustrator based in San Francisco
            </p>
            <p className="intro__content">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.​
            </p>
          </section>
          <section className="img">
            <img src={avatar} alt="123" />
          </section>
        </article>
        <article className="infopage__intro">
          <section className="clients">
            <h3 className="intro__title">Selected Clients</h3>
            {this.renderClientList()}
          </section>
          <section className="exhibitions">
            <h3 className="intro__title">Latest Exhibitions</h3>
          </section>
        </article>
      </main>
    );
  }
}

export default InfoPage;
