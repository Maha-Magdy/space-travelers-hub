/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

const Profile = (props) => {
  const { rockets } = props;
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div className="container-fluid profile">
      <div className="row align-items-start">
        <div className="col">
          <h5>My Missions</h5>
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
});

export default connect(mapStateToProps)(Profile);
