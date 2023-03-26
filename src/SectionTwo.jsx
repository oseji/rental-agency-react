const SectionTwo = () => {
  return (
    <section className="section2">
      <h1 className="sectionHeading">
        <span
          style={{
            textDecoration: "underline 4px solid #fe8b17",
            marginRight: "0.7rem",
          }}
        >
          Minimum Living Cost
        </span>
        Makes Everything Better
      </h1>

      <div className="section2-Content">
        <img src="unsplash_oGmf8o53LeE.png" alt="" className="section2-Img" />
        <div className="section2-Points">
          <div className="icon-flex-group">
            <div className="icon-container">
              <img src="dollar sign.png" className="icon" />
              <p className="icon-text">Pay as little as possible!</p>
            </div>
            <div className="icon-container">
              <img src="plant.png" className="icon" />
              <p className="icon-text">enjoy peaceful enviroment</p>
            </div>
          </div>
          <div className="icon-flex-group">
            <div className="icon-container">
              <img src="building.png" className="icon" />
              <p className="icon-text">Enjoy wisdom of community!</p>
            </div>
            <div className="icon-container">
              <img src="stack.png" className="icon" />
              <p className="icon-text">stay safe! save money!</p>
            </div>
          </div>
          <div className="icon-flex-group">
            <div className="icon-container">
              <img src="stack.png" className="icon" />
              <p className="icon-text">
                Let somebody else take care of the landlord!
              </p>
            </div>
            <div className="icon-container">
              <img src="eye.png" className="icon" />
              <p className="icon-text">pay for what you use!!!!!!!!!!!!!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
