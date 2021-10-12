import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>MISSION</th>
            <th>DESCRIPTION</th>
            <th>STATUS</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission key={mission.mission_id} mission={mission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
