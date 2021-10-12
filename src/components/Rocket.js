/* eslint-disable react/prop-types */
export default function Rocket(props) {
  const { rocket } = props;
  return (
    <div>
      <div />
      <div>
        <h3>{rocket.name}</h3>
        <p>{rocket.description}</p>
      </div>
    </div>
  );
}
