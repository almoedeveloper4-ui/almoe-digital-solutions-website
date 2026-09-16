import "./HomeHero.css";

function HomeHero({ data }) {
  return (
    <section className="home-hero">
      <video
        className="home-hero-video"
        src={data?.Background?.url}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="home-hero-overlay">
        <div className="container home-hero-container">
          <div className="home-hero-content">
            <h1>{data?.Title}</h1>

            <p>{data?.Description}</p>

            {data?.ButtonText && data?.ButtonLink && (
              <a
                href={data.ButtonLink}
                className="home-hero-button"
              >
                {data.ButtonText}
              </a>
            )}
          </div>

          {data?.Logo?.url && (
            <div className="home-hero-logo">
              <img
                src={data.Logo.url}
                alt="Almoe 30 Years"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default HomeHero;