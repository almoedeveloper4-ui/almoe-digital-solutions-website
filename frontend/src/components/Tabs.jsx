function Tabs({ data }) {
  return (
    <section>
      <h2>{data.Title}</h2>

      <p>{data.Content}</p>
    </section>
  );
}

export default Tabs;