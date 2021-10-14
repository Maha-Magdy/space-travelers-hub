/* eslint-disable react/prop-types, no-unused-vars */
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/rockets/rockets';

export default function Rocket(props) {
  const dispatch = useDispatch();
  const { rocket } = props;
  const reserveThisRocket = () => {
    dispatch(reserveRocket(rocket.id));
  };

  const cancelThisReservation = () => {
    dispatch(cancelReservation(rocket.id));
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
        <p>
          {rocket.reserved && (
            <span className="badge reserved-badge me-2">Reserved</span>
          )}
          {rocket.description}
        </p>
        {!rocket.reserved && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={reserveThisRocket}
          >
            Reserve Rocket
          </button>
        )}
        {rocket.reserved && (
          <button
            type="button"
            className="btn btn-light cancel-button"
            onClick={cancelThisReservation}
          >
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
}
