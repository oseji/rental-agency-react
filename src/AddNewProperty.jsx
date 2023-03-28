const AddNewProperty = () => {
  return (
    <section className="addProperty">
      <h1 className="smallHeading">
        Search For Your Property With Us And Be Confident That Your Room Will Be
        Filled Out.
      </h1>

      <div className="formSection">
        <h1 className="formHeading">Add A New Property</h1>

        <form className="propertyForm">
          <div className="formGrp">
            <div className="inputGrp">
              <label htmlFor="names" className="inputLabel">
                Name<span className="s">*</span>
              </label>
              <input type="text" className="inputField" id="names" />
            </div>
            <div className="inputGrp">
              <label htmlFor="address" className="inputLabel">
                Address<span className="s">*</span>
              </label>
              <input type="text" className="inputField" id="address" />
            </div>
            <div className="inputGrp">
              <label htmlFor="unitNumber" className="inputLabel">
                Unit Number<span className="s">*</span>
              </label>
              <input type="number" className="inputField" id="unitNumber" />
            </div>
          </div>

          <div className="formGrp">
            <div className="inputGrp">
              <label htmlFor="city" className="inputLabel">
                City<span className="s">*</span>
              </label>
              <select name="city" id="city" class="inputField">
                <option value="Oakland">Oakland</option>
                <option value="Berkeley">Berkeley</option>
              </select>
            </div>
            <div className="inputGrp">
              <label htmlFor="state" className="inputLabel">
                State<span className="s">*</span>
              </label>
              <select name="state" id="state" class="inputField">
                <option value="San Fransisco">San Fransisco</option>
                <option value="Los Angeles">Los Angeles</option>
              </select>
            </div>
            <div className="inputGrp">
              <label htmlFor="roomType" className="inputLabel">
                Room Type<span className="s">*</span>
              </label>
              <select name="city" id="city" class="inputField">
                <option value="Standard">Standard</option>
                <option value="Deluxe">Deluxe</option>
              </select>
            </div>
          </div>

          <div className="formGrp">
            <div className="inputGrp">
              <label htmlFor="price" className="inputLabel">
                Price<span className="s">*</span>
              </label>
              <input type="number" className="inputField" id="price" />
            </div>
            <div className="inputGrp">
              <label htmlFor="roomType" className="inputLabel">
                Room Type<span className="s">*</span>
              </label>
              <select name="roomType" id="roomType" class="inputField">
                <option value="Standard">Standard</option>
                <option value="Deluxe">Deluxe</option>
              </select>
            </div>
          </div>

          <div
            className="inputGrp"
            style={{
              marginBottom: "1.875rem",
            }}
          >
            <label htmlFor="description" className="inputLabel">
              Description<span className="s">*</span>
            </label>
            <textarea
              className="description"
              id="description"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div
            className="inputGrp"
            style={{
              marginBottom: "1.875rem",
            }}
          >
            <label htmlFor="uploadPhotos" className="inputLabel">
              Upload Photos<span className="s">*</span>
            </label>
            <input type="image" className="uploadPhotos" id="uploadPhotos" />
          </div>

          <button className="btnProperty">Add New Property</button>
        </form>
      </div>
    </section>
  );
};

export default AddNewProperty;
