/* eslint-disable react/prop-types */
import axios from 'axios';
import { useSelector, useDispatch, connect } from 'react-redux';
import { useEffect } from 'react';
import { rocketsList } from '../redux/rockets/rockets';
import Rocket from './Rocket';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);

  useEffect(() => {
    if (rockets.length === 0) {
      axios.get('https://api.spacexdata.com/v3/rockets').then((response) => {
        const { data } = response;
        const result = data.map((rocket) => ({
          id: rocket.rocket_id,
          name: rocket.rocket_name,
          description: rocket.description,
          flickr_images: rocket.flickr_images,
        }));
        dispatch(rocketsList(result));
      });
    }
  }, [dispatch, rockets.length]);

  if (rockets !== []) {
    return (
      <ul className="container-fluid rockets">
        {rockets.map((rocket) => (
          <li key={rocket.id} className="mb-3">
            <Rocket rocket={rocket} />
          </li>
        ))}
      </ul>
    );
  }

  return <h1>Here is Rockets page</h1>;
}

const mapStateToProps = (state) => ({
  rockets: state.rocketsReducer,
});

export default connect(mapStateToProps)(Rockets);
