
import React from 'react';
import Pro from './Production/Pro';
import Banner from './Banner/Banner';
import Headlines from './Headlines/Headlines';
import OtherCommand from './OtherCommand/OtherCommand';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Banner/>
        <Pro/>
        <Headlines/>
        <OtherCommand/>
      </div>
    );
  }
}

Home.defaultProps = {
};

export default Home;

