import "./Expertise.css";

function Expertise({ data, backgroundImage }) {
  return (
 <section
  className="brand-expertise"
style={{
  backgroundImage: backgroundImage?.length
    ? `url(${data.ExpertiseBackground?.[0]?.url})`
    : "none",
}}
>
      <div className="container brand-expertise-inner">

        <div className="brand-expertise-heading">
          <h2>Expertise</h2>
        </div>

        <div className="brand-expertise-items">
          {data.map((item) => (
            <div className="brand-expertise-item" key={item.id}>
              <div className="brand-expertise-icon">
                <img
                 src={item.Icon.url}
                  alt={item.Text}
                />
              </div>

              <div className="brand-expertise-content">
                <h3>{item.Text}</h3>
                <p>{item.Description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Expertise;