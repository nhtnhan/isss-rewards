import React from 'react';
import CustomNavbar from '../common/CustomNavbar';
import PointsView from '../components/PointsView';
import RewardsView from '../components/RewardsView';

const HomePage = (props) => {
  return (
    <div>
      <CustomNavbar/>
      <PointsView/>
      <RewardsView/>
    </div>
  )
}

export default HomePage;