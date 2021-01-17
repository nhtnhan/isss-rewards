import React from 'react';
import CustomNavbar from '../common/CustomNavbar';
import PointsView from '../components/PointsView';

const HomePage = (props) => {
  return (
    <div>
      <CustomNavbar/>
      <PointsView/>
    </div>
  )
}

export default HomePage;