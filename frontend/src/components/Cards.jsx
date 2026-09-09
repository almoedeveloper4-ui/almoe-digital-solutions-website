function Cards({ data }) {
  return (
    <section>
      <img
        src={`http://localhost:1337${data.Media.url}`}
        alt={data.Title}
      />

      <h2>{data.Title}</h2>

      <p>{data.Description}</p>

      <a href={data.buttonLink}>{data.buttonText}</a>
    </section>
  );
}

export default Cards;