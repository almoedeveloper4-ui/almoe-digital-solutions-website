import "./TechnologyPartner.css";

function TechnologyPartner({ data }) {
  return (
    <section
      className="technology-partner"
      style={{
        backgroundImage: `url(${data?.Background?.url})`,
      }}
    >
      <div className="container technology-partner-container">
        <div className="technology-partner-content">
          <h2>{data?.Title}</h2>

          {data?.ButtonText && data?.ButtonLink && (
            <a
              href={data.ButtonLink}
              className="technology-partner-button"
            >
              {data.ButtonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default TechnologyPartner;