export default function Card({ id, name, email }) {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      {}
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" /> {}
      {}
      <div>
        <h2>{name}</h2>
        <h2>{email}</h2>
        {}
      </div>
    </div>
  );
}
