
import React from 'react';
import Pro from '../../components/Production/Pro';
import Banner from '../../components/Banner/Banner';
import Headlines from '../../components/Headlines/Headlines';
import OtherCommand from '../../components/OtherCommand/OtherCommand';

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

