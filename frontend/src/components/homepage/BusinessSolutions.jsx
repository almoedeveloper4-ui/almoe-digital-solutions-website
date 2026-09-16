import "./BusinessSolutions.css";

function BusinessSolutions({ data }) {
  return (
    <section
      className="business-solutions"
      style={{
        backgroundImage: `url(${data?.Background?.url})`,
      }}
    >
      <div className="container business-solutions-container">
        <div className="business-solutions-content">
          <h2>{data?.Title}</h2>

          <div className="business-solutions-description">
            <p>{data?.Description}</p>
          </div>

          {data?.ButtonText && data?.ButtonLink && (
            <a
              href={data.ButtonLink}
              className="business-solutions-button"
            >
              {data.ButtonText}
            </a>
          )}
        </div>

        <div className="business-solutions-visual">
          {data?.Image?.url && (
            <div className="business-solutions-circle">
              <img
                src={data.Image.url}
                alt={data.Title}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BusinessSolutions;