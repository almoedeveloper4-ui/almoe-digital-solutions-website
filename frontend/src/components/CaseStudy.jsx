function CaseStudy({ data }) {
  return (
    <section>
      <img
       src={data.Media.url}
        alt={data.Title}
      />

      <h2>{data.Title}</h2>

      <p>{data.Description}</p>

      {data.buttonText && data.buttonLink && (
        <a href={data.buttonLink}>{data.buttonText}</a>
      )}
    </section>
  );
}

export default CaseStudy;