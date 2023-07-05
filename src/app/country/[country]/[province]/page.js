export default function Province({ params }) {
  return (
    <div>
      <div>I can read the country name: {params.country}</div>
      <div>I can also read the province: {params.province}</div>
    </div>
  );
}
