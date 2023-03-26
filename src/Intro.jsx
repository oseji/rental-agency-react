const Intro = () => {
  return (
    <section className="intro">
      <h1 className="introHeading">
        The Most Affordable Place To Stay In The San Fransisco Bay Area
      </h1>

      <div className="introMap">
        <img src="map.png" alt="map" className="map" />

        <div className="mapSelection">
          <div className="mapDropdown">
            <select name="dropdown" className="dropdownText  ">
              <option value="" disabled="" selected="">
                Type
              </option>
              <option value="option 1">Oakland</option>
              <option value="option 1">Berkeley</option>
            </select>
          </div>

          <div
            className="mapDropdown"
            style={{
              borderRadius: "0.5rem 0 0 0.5rem",
            }}
          >
            <select name="dropdown" className="dropdownText">
              <option value="" disabled="" selected="">
                Neighborhood
              </option>
              <option value="option 1">Oakland</option>
              <option value="option 1">Berkeley</option>
            </select>
          </div>
          <button className="map-dropdownBtn">
            <img src="\public\search.png" className="mapSearch" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
