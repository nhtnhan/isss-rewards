import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserInfo } from '../store/userInfo/action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';
import '../styling/pointsView.css';

const PointsView = () =>{
  let userId = useParams();
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.userInfo.userInfo);
  const low = 1000;
  const medium = 5000;
  useEffect(()=>{
    document.body.style.margin = "0"
    dispatch(fetchUserInfo(userId));
  },[dispatch, userId])

  if(userInfo === null) {
    return (<p>'loading'</p>)
  }
  let points = userInfo.points;
  const renderStars = () => {
    let count;
    let stars = [];
    if (points < low){
      count = 1;
    }else if (points < medium){
      count = 2;
    }else {
      count = 3;
    }
    for (let i = 0; i < count; i++){
      stars.push(<FontAwesomeIcon icon={faStar} size="3x" color="#19456b"/>)
    }
    return stars;
  }


  return (
    <div className="pointsSection">
      <div className="starSection">
        {renderStars()}
      </div>
      <p className="pointsFont">CURRENT POINTS</p>
      <div className="pointsContainer">
        <h1 className="pointsTitle">{points}</h1>
      </div>
    </div>
  )
}

export default PointsView;