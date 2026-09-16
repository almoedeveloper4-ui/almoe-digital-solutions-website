import "./ContentBlock.css";

function ContentBlock({ data }) {
  const imageOnRight = data.imagePosition === "right";

  return (
    <section
      className={`brand-content-block ${
        imageOnRight ? "image-right" : "image-left"
      }`}
    >
      <div className="brand-content-block-image">
        <img
          src={data.Media.url}
          alt={data.Title}
        />
      </div>

      <div className="brand-content-block-content">
        <h2>{data.Title}</h2>

        <p>{data.Description}</p>

        {data.buttonText && data.buttonLink && (
          <a
            href={data.buttonLink}
            className="brand-content-block-button"
          >
            {data.buttonText}
          </a>
        )}
      </div>
    </section>
  );
}

export default ContentBlock;