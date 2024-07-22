import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Formik, useFormik } from "formik";

function Table() {
  const [entries, setEntries] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState({
    // sports: "",
    // type: "indoor",
    // groundType: "",
    // groundSize: "",
    // serviceTiming: "",
    // rate: "",
    // description: "",
  });

  const handleChang = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleAdd = () => {
    setEntries([...entries, formValues]);
    setFormValues({
      sports: (
        <select
          className="form-control"
          type="text"
          placeholder="Enter your Sports"
          name="sportsAvailable"
          value={Formik.values.sportsAvailable}
          onChange={Formik.handleChange}
        >
          <option value="indoor">Cricket</option>
          <option value="batmiton">Batmiton</option>
          <option value="footBall">FootBall</option>
          <option value="soapyFootBall">Soapy FootBall</option>
          <option value="volleyBall<">Volley Ball</option>
          <option value="basketBall<">Basket Ball</option>
        </select>

      ),
      type: (<select
        className="form-control"
        name="type"
        value={Formik.values.type}
        onChange={Formik.handleChange}
      >
        <option value="indoor">Indoor</option>
        <option value="outdoor">Outdoor</option>
      </select>
      ),
      groundType: (
        <select
          className="form-control"
          type="text"
          name="groundType"
          value={Formik.values.groundType}
          onChange={Formik.handleChange}
        >
          <option value="nets">Nets</option>
          <option value="box">Box</option>
          <option value="ground">Ground</option>
          <option value="syntheticSurface">Synthetic Surface</option>
          <option value="woodenSurface/">Wooden Surface/</option>
          <option value="acrylicSurface">Acrylic Surface</option>
          <option value="cementSurface">Cement Surface</option>
          <option value="mud">Mud </option>
          <option value="mudGround">Mud Ground</option>
          <option value="grassGrass">Grass Grass</option>
          <option value="synthticCourt">Synthtic Court</option>
          <option value="woodenCourt">Wooden Court</option>
          <option value="cementCourt">Cement Court</option>
          <option value="tharCourt">Thar Court</option>
          <option value="mudCourt">Mud Court</option>
        </select>
      ),
      groundSize: (
        <input
          className="form-control"
          type="text"
          placeholder="Enter your Ground Size"
          name="groundSize"
          value={Formik.values.groundSize}
          onChange={Formik.handleChange}
        />
      ),
      serviceTiming: (
        <input
          className="form-control"
          type="text"
          placeholder="Enter your Service Time"
          name="serviceTiming"
          value={Formik.values.serviceTiming}
          onChange={Formik.handleChange}
        />
      ),
      rate: (

        <input
          className="form-control"
          type="text"
          placeholder="Enter your Rate"
          name="rate"
          value={Formik.values.rate}
          onChange={Formik.handleChange}
        />
      ),
      description: (
        <input
          className="form-control"
          type="text"
          placeholder=""
          name="description"
          value={Formik.values.description}
          onChange={Formik.handleChange}
        />
      ),
    });
    setShowForm(false); // Hide form after adding an entry
  };

  const Formik = useFormik({
    initialValues: {
      sportsAvailable: "",
      type: "",
      groundType: "",
      groundSize: "",
      serviceTiming: "",
      rate: "",
      description: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    <>
      <div className="container-fluid">
        <form onSubmit={Formik.handleSubmit}>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Data Table</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                >
                  <thead>
                    <tr>
                      <th>Sports Available</th>
                      <th>Indoor/Outdoor</th>
                      <th>Ground Type</th>
                      <th>Ground Size</th>
                      <th>Service Timing</th>
                      <th>Rate/Hr</th>
                      <th>Ground Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <select
                          type="text"
                          className="form-control"
                          name="sportsAvailable"
                          value={Formik.values.sportsAvailable}
                          onChange={Formik.handleChange}
                        >
                          <option value="cricket">Cricket</option>
                          <option value="batmiton">Batmiton</option>
                          <option value="footBall">FootBall</option>
                          <option value="soapyFootBall">Soapy FootBall</option>
                          <option value="volleyBall<">Volley Ball</option>
                          <option value="basketBall<">Basket Ball</option>
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-control"
                          name="type"
                          value={Formik.values.type}
                          onChange={Formik.handleChange}
                        >
                          <option value="indoor">Indoor</option>
                          <option value="outdoor">Outdoor</option>
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-control"
                          type="text"
                          name="groundType"
                          value={Formik.values.groundType}
                          onChange={Formik.handleChange}
                        >
                          <option value="nets">Nets</option>
                          <option value="box">Box</option>
                          <option value="ground">Ground</option>
                          <option value="syntheticSurface">Synthetic Surface</option>
                          <option value="woodenSurface/">Wooden Surface/</option>
                          <option value="acrylicSurface">Acrylic Surface</option>
                          <option value="cementSurface">Cement Surface</option>
                          <option value="mud">Mud </option>
                          <option value="mudGround">Mud Ground</option>
                          <option value="grassGrass">Grass Grass</option>
                          <option value="synthticCourt">Synthtic Court</option>
                          <option value="woodenCourt">Wooden Court</option>
                          <option value="cementCourt">Cement Court</option>
                          <option value="tharCourt">Thar Court</option>
                          <option value="mudCourt">Mud Court</option>
                        </select>
                      </td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter your Ground Size"
                          name="groundSize"
                          value={Formik.values.groundSize}
                          onChange={Formik.handleChange}
                        />
                      </td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter your Service Time"
                          name="serviceTiming"
                          value={Formik.values.serviceTiming}
                          onChange={Formik.handleChange}
                        />
                      </td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter your Rate"
                          name="rate"
                          value={Formik.values.rate}
                          onChange={Formik.handleChange}
                        />
                      </td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
                          name="description"
                          value={Formik.values.description}
                          onChange={Formik.handleChange}
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary"
                          onClick={handleAdd}
                        >
                          +
                        </button>
                      </td>
                    </tr>
                    {entries.map((entry, index) => (
                      <tr key={index}>
                        <td>{entry.sports}</td>
                        <td>{entry.type}</td>
                        <td>{entry.groundType}</td>
                        <td>{entry.groundSize}</td>
                        <td>{entry.serviceTiming}</td>
                        <td>{entry.rate}</td>
                        <td>{entry.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Table;
