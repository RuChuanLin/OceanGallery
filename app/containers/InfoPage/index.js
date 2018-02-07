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

const exhibitions = [
  {
    zip: 2023,
    gallery: 'Illustration Home Gallery',
    location: 'San Fransisco'
  },
  {
    zip: 2023,
    gallery: 'Fefe Gallery',
    location: 'Barcelona'
  },
  {
    zip: 2023,
    gallery: 'Delicate Art Gallery',
    location: 'London'
  }
];

class InfoPage extends Component {
  renderClientList() {
    return client_list.map(({ name }) => (
      <p className="clients__content">{name}</p>
    ));
  }
  renderExhibitions() {
    return exhibitions.map(({ zip, gallery, location }) => (
      <div className="exhibitions__block">
        <p className="exhibitions__block zip">{zip}</p>
        <p className="exhibitions__block gallery">{gallery}</p>
        <p className="exhibitions__block location">{location}</p>
      </div>
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
        <article className="infopage__info">
          <section className="clients">
            <h3 className="clients__title">Selected Clients</h3>
            {this.renderClientList()}
          </section>
          <section className="exhibitions">
            <h3 className="exhibitions__title">Latest Exhibitions</h3>
            {this.renderExhibitions()}
          </section>
        </article>
        <article className="infopage__subscribe">
          <h3 className="title">join my mailing list</h3>
          <form className="form">
            <input
              className="form__input"
              type="email"
              placeholder="Email Address"
            />
            <button className="form__submit">subscribe now</button>
          </form>
        </article>
      </main>
    );
  }
}

export default InfoPage;
