import styles from './_bricklayer.scss';
import i1 from './img/i1.jpg';
import i2 from './img/i2.jpg';
import i3 from './img/i3.jpg';
import i4 from './img/i4.jpg';
import i5 from './img/i5.jpg';

import React, { Component } from 'react';

class BrickLayer extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.renderColumns = this.renderColumns.bind(this);
  }
  componentDidMount() {
    this.renderColumns();
    window.addEventListener('resize', this.renderColumns);
  }

  renderColumns() {
    // window.innerWidth: 當前視窗寬
    // window.innerHeight: 當前視窗高
    console.log(window.innerWidth);
    const windowWidth = window.innerWidth;
    let columnCount = 4;
    if (windowWidth < 1200) {
      columnCount = 3;
    }
    const indents = [];
    for (let i = 0; i < columnCount; i++) {
      indents.push(
        <div key={i} className="bricklayer__column">
          123
        </div>
      );
    }
    return <div className="bricklayer">{indents}</div>;
  }
  renderImg() {
    const imgs = [i1, i2, i3, i4, i5];
    return imgs.map((img, i) => <img key={i} src={img} alt={i} />);
  }
  render() {
    return <div>{this.renderColumns()}</div>;
  }
}

export default BrickLayer;
