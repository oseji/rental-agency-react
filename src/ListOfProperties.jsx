const ListOfProperties = () => {
  return (
    <section className="section3">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "2.5rem",
        }}
      >
        <h1 className="sectionHeading">
          <span
            style={{
              textDecoration: "underline 4px solid #fe8b17",
            }}
          >
            List
          </span>{" "}
          Of Properties
        </h1>
        <button className="section3-Btn">View all Properties</button>
      </div>

      <div className="cardContainer">
        <div className="card">
          <img
            src="firstcard.png"
            alt="San Francisco apartment"
            className="cardImg"
          />

          <div className="cardDetails">
            <h2 className="cardHeading">
              2578 Folsom Street San Francisco, CA, 94110
            </h2>
            <p className="cardText">Private room</p>
            <p className="cardPrice">$1200/Month</p>
          </div>

          <div className="cardBottom">
            <div className="cardBottom-Group">
              <img src="Bed.png" className="cardBottom-Icon" />
              <p className="cardBottom-Number">2</p>
            </div>
            <div className="cardBottom-Group">
              <img src="Shower.png" className="cardBottom-Icon" />
              <p className="cardBottom-Number">2</p>
            </div>
            <div className="cardBottom-Group">
              <img src="Size.png" className="cardBottom-Icon" />
              <p className="cardBottom-Number">2</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src="firstcard.png"
            alt="San Francisco apartment"
            className="cardImg"
          />

          <div className="cardDetails">
            <h2 className="cardHeading">
              2578 Folsom Street San Francisco, CA, 94110
            </h2>
            <p className="cardText">Private room</p>
            <p className="cardPrice">$1200/Month</p>
          </div>

          <div className="cardBottom">
            <div className="cardBottom-Group">
              <img src="Bed.png" className="cardBottom-Icon" />
              <p className="cardBottom-Number">2</p>
            </div>
            <div className="cardBottom-Group">
              <img src="Shower.png" className="cardBottom-Icon" />
              <p className="cardBottom-Number">2</p>
            </div>
            <div className="cardBottom-Group">
              <img src="Size.png" className="cardBottom-Icon" />
              <p className="cardBottom-Number">2</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src="firstcard.png"
            alt="San Francisco apartment"
            className="cardImg"
          />

          <div className="cardDetails">
            <h2 className="cardHeading">
              2578 Folsom Street San Francisco, CA, 94110
            </h2>
            <p className="cardText">Private room</p>
            <p className="cardPrice">$1200/Month</p>
          </div>

          <div className="cardBottom">
            <div className="cardBottom-Group">
              <img src="Bed.png" className="cardBottom-Icon" />
              <p className="cardBottom-Number">2</p>
            </div>
            <div className="cardBottom-Group">
              <img src="Shower.png" className="cardBottom-Icon" />
              <p className="cardBottom-Number">2</p>
            </div>
            <div className="cardBottom-Group">
              <img src="Size.png" className="cardBottom-Icon" />
              <p className="cardBottom-Number">2</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src="firstcard.png"
            alt="San Francisco apartment"
            className="cardImg"
          />

          <div className="cardDetails">
            <h2 className="cardHeading">
              2578 Folsom Street San Francisco, CA, 94110
            </h2>
            <p className="cardText">Private room</p>
            <p className="cardPrice">$1200/Month</p>
          </div>

          <div className="cardBottom">
            <div className="cardBottom-Group">
              <img src="Bed.png" className="cardBottom-Icon" />
              <p className="cardBottom-Number">2</p>
            </div>
            <div className="cardBottom-Group">
              <img src="Shower.png" className="cardBottom-Icon" />
              <p className="cardBottom-Number">2</p>
            </div>
            <div className="cardBottom-Group">
              <img src="Size.png" className="cardBottom-Icon" />
              <p className="cardBottom-Number">2</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src="firstcard.png"
            alt="San Francisco apartment"
            className="cardImg"
          />

          <div className="cardDetails">
            <h2 className="cardHeading">
              2578 Folsom Street San Francisco, CA, 94110
            </h2>
            <p className="cardText">Private room</p>
            <p className="cardPrice">$1200/Month</p>
          </div>

          <div className="cardBottom">
            <div className="cardBottom-Group">
              <img src="Bed.png" className="cardBottom-Icon" />
              <p className="cardBottom-Number">2</p>
            </div>
            <div className="cardBottom-Group">
              <img src="Shower.png" className="cardBottom-Icon" />
              <p className="cardBottom-Number">2</p>
            </div>
            <div className="cardBottom-Group">
              <img src="Size.png" className="cardBottom-Icon" />
              <p className="cardBottom-Number">2</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src="firstcard.png"
            alt="San Francisco apartment"
            className="cardImg"
          />

          <div className="cardDetails">
            <h2 className="cardHeading">
              2578 Folsom Street San Francisco, CA, 94110
            </h2>
            <p className="cardText">Private room</p>
            <p className="cardPrice">$1200/Month</p>
          </div>

          <div className="cardBottom">
            <div className="cardBottom-Group">
              <img src="Bed.png" className="cardBottom-Icon" />
              <p className="cardBottom-Number">2</p>
            </div>
            <div className="cardBottom-Group">
              <img src="Shower.png" className="cardBottom-Icon" />
              <p className="cardBottom-Number">2</p>
            </div>
            <div className="cardBottom-Group">
              <img src="Size.png" className="cardBottom-Icon" />
              <p className="cardBottom-Number">2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="prev-nxt">
        <p className="first prevNxtBtn">First</p>
        <p className="numSelect prevNxtBtn">1</p>
        <p className="numSelect prevNxtBtn">2</p>
        <p className="numSelect prevNxtBtn">3</p>
        <p className="next prevNxtBtn">Next</p>
      </div>
    </section>
  );
};

export default ListOfProperties;
