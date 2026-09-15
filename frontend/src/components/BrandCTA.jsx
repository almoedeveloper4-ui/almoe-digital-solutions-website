import "./BrandCTA.css";

function BrandCTA({ data }) {
  if (!data) return null;

  return (
    <section className="brand-cta">
      <div className="container brand-cta-inner">

        <div className="brand-cta-content">
          <h2>{data.Title}</h2>
          <p>{data.Description}</p>
        </div>

        <div className="brand-cta-buttons">
          {data.PrimaryButtonText && data.PrimaryButtonLink && (
            <a
              href={`/${data.PrimaryButtonLink.replace(/^\/+/, "")}`}
              className="brand-cta-primary"
            >
              {data.PrimaryButtonText}
            </a>
          )}

          {data.SecondaryButtonText && data.SecondaryButtonLink && (
            <a
              href={`/${data.SecondaryButtonLink.replace(/^\/+/, "")}`}
              className="brand-cta-secondary"
            >
              {data.SecondaryButtonText}
            </a>
          )}
        </div>

      </div>
    </section>
  );
}

export default BrandCTA;