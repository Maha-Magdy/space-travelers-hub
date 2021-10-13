/* eslint-disable react/prop-types, no-unused-vars */
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rockets';

export default function Rocket(props) {
  const dispatch = useDispatch();
  const { rocket } = props;
  const reserveThisRocket = () => {
    dispatch(reserveRocket(rocket.id));
  };

  return (
    <div className="d-flex">
      <div>
        <img
          src={rocket.flickr_images[0]}
          alt={rocket.name}
          className="figure-img"
        />
      </div>
      <div className="ps-3">
        <h3>{rocket.name}</h3>
        <p>{rocket.description}</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={reserveThisRocket}
        >
          Reserve Rocket
        </button>
      </div>
    </div>
  );
}
