import React, { Component } from 'react';
import i1 from './img/i1.jpg';
import i2 from './img/i2.jpg';
import i3 from './img/i3.jpg';
import i4 from './img/i4.jpg';
import i5 from './img/i5.jpg';
require('./_bricklayer.scss');

class BrickLayer extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.onColumnWidthChange = this.onColumnWidthChange.bind(this);
  }
  componentWillMount() {
    this.onColumnWidthChange();
    window.addEventListener('resize', this.onColumnWidthChange);
  }

  onColumnWidthChange() {
    // window.innerWidth: 當前視窗寬
    // window.innerHeight: 當前視窗高
    this.setState({ width: window.innerWidth });
  }

  renderColumns() {
    const { width } = this.state;
    const imgs = [
      { title: 'Deep Blue', img: i1 },
      { title: 'Droplet', img: i2 },
      { title: 'Twilight', img: i3 },
      { title: 'Dusk', img: i4 },
      { title: 'Purple Fog', img: i5 },
      { title: 'Deep Blue', img: i1 },
      { title: 'Droplet', img: i2 },
      { title: 'Twilight', img: i3 },
      { title: 'Dusk', img: i4 },
      { title: 'Purple Fog', img: i5 },
      { title: 'Deep Blue', img: i1 },
      { title: 'Droplet', img: i2 },
      { title: 'Twilight', img: i3 },
      { title: 'Dusk', img: i4 },
      { title: 'Purple Fog', img: i5 },
      { title: 'Deep Blue', img: i1 },
      { title: 'Droplet', img: i2 },
      { title: 'Twilight', img: i3 },
      { title: 'Dusk', img: i4 },
      { title: 'Purple Fog', img: i5 }
    ];
    let columnCount;
    if (width >= 1200) {
      columnCount = 3;
    } else if (width < 1200 && width >= 980) {
      columnCount = 3;
    } else if (width < 980 && width >= 640) {
      columnCount = 2;
    } else {
      columnCount = 1;
    }
    const indents = [];
    for (let i = 0; i < columnCount; i++) {
      indents.push(
        <div key={i} className="bricklayer__column">
          {imgs.map(
            ({ title, img }, index) =>
              index % columnCount === i || 0 ? (
                <div
                  className="brickitem"
                  key={Math.random()
                    .toString(36)
                    .slice(-6)}
                  style={{ background: `url(${img})` }}
                >
                  <div className="brickitem__title">{title}</div>
                  <img className="brickitem__img" src={img} alt={index} />
                </div>
              ) : (
                ''
              )
          )}
        </div>
      );
    }
    return <div className="bricklayer">{indents}</div>;
  }

  render() {
    return <div>{this.renderColumns()}</div>;
  }
}

export default BrickLayer;
