function HeroSlide({ data }) {
  return (
    <section>
      <img
        src={`http://localhost:1337${data.Image.url}`}
        alt={data.Title}
      />

      <h2>{data.Title}</h2>

      <a href={data.Link}>Learn More</a>
    </section>
  );
}

export default HeroSlide;