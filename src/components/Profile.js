/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

const Profile = (props) => {
  const { rockets } = props;
  const { missions } = props;
  console.log('Hello', props);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const reservedMissions = missions.filter((mission) => mission.reserved === true);
  return (
    <div className="container-fluid profile">
      <div className="row align-items-start">
        <div className="col">
          <h5>My Missions</h5>
          {reservedMissions.length === 0 && (
            <p>There&apos;s no reserved missions</p>
          )}
          <ul className="p-0 list-unstyled">
            {reservedMissions.map((reservedMission) => (
              <li key={reservedMission.mission_id} className="p-2">{reservedMission.mission_name}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h5>My Rockets</h5>
          {reservedRockets.length === 0 && (
            <p>There&apos;s no reserved rockets</p>
          )}
          <ul className="p-0 list-unstyled">
            {reservedRockets.map((reservedRocket) => (
              <li key={reservedRocket.id} className="p-2">{reservedRocket.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  rockets: state.rocketsReducer,
  missions: state.missionsReducer,
});

export default connect(mapStateToProps)(Profile);
