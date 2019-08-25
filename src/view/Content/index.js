import React from 'react';
import InfoHeader from './Content-Header/index';
import SliderInfo from './SliderInfo/index';
import News from './News/index';
import Server from './Server';
import Hot from './Hot';

import './index.scss';

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <InfoHeader />
        <SliderInfo />
        <News />
        <Server />
        <Hot />
      </div>
    );
  }
}

export default Content;
