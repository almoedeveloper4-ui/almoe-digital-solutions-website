import "./WhyAlmoe.css";

function WhyAlmoe({ data }) {
  return (
   <section
  className="why-almoe"
  style={{
    backgroundImage: `url(${data?.Background?.url})`,
  }}
>
      <div className="container">
        <h2>{data?.Title}</h2>

        <div className="why-almoe-stats">
          {data?.Stats?.map((stat) => (
            <div className="why-almoe-stat" key={stat.id}>
              <h3>{stat.Number}</h3>
              <h4>{stat.Label}</h4>
              <p>{stat.Description}</p>
            </div>
          ))}
        </div>

        {data?.ButtonText && data?.ButtonLink && (
          <a
            href={data.ButtonLink}
            className="why-almoe-button"
          >
            {data.ButtonText}
          </a>
        )}
      </div>
    </section>
  );
}

export default WhyAlmoe;