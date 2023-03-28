const sectionThree = () => {
  return (
    <section className="section4">
      <div className="section3-ImgSection">
        <div className="imgGrp">
          <img
            src="flexible leases.png"
            alt="Flexible leases"
            className="section3Img"
          />
          <img
            src="7-day.png"
            alt="Guaranteed happiness"
            className="section3Img"
            style={{ marginTop: "60px" }}
          />
        </div>
        <div className="imgGrp">
          <img
            src="monthly house cleaning.png"
            alt="Monthly house cleaning"
            className="section3Img"
          />
          <img
            src="choose roommate.png"
            alt="Your choice"
            className="section3Img"
          />
        </div>
      </div>

      <div className="section3Text">
        <h1 className="section3Heading">
          Flexibility and options to suit your lifestyle.
        </h1>

        <p className="flexibilityText">
          You need it? We got it. We make finding your next home easy,
          comfortable and simple.From our happiness guarantee to our selective
          roommate finder option. We provide you the flexibility that you most
          desire.
        </p>

        <button className="section4-Btn">Search Rooms</button>
      </div>
    </section>
  );
};

export default sectionThree;
