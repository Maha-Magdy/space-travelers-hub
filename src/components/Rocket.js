/* eslint-disable react/prop-types */
export default function Rocket(props) {
  const { rocket } = props;
  return (
    <div className="d-flex">
      <div>
        <img src={rocket.flickr_images[0]} alt={rocket.name} className="figure-img" />
      </div>
      <div className="ps-3">
        <h3>{rocket.name}</h3>
        <p>{rocket.description}</p>
        <button type="button" className="btn btn-primary">Reserve Rocket</button>
      </div>
    </div>
  );
}
