function Gallery({ data }) {
  return (
    <section>
      <h2>{data.Title}</h2>

      {data.Media.map((media) => (
        <img
          key={media.id}
         src={media.url}
          alt={data.Title}
        />
      ))}
    </section>
  );
}

export default Gallery;