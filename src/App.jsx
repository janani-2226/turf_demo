import 'bootstrap/dist/css/bootstrap.css';
import { Formik, useFormik } from 'formik';
import './App.css';
import { toHaveFormValues } from '@testing-library/jest-dom/matchers';
import { useState } from 'react';

function App() {
  const formik = useFormik({
    initialValues: {
      SpotName: "",
      City: "",
      SpotAddress: "",
      Email: "",
      MobileNumber: "",
      Aminities: ""
    },
    onSubmit: (data) => {
      console.log(data)
    }
  })

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-3">
            <h5 className="tab unselectable">Information</h5>
          </div>
          <div className="col-3">
            <h5 className="tab unselectable">Bank Details</h5>
          </div>
          <div className="col-3">
            <h5 className="tab unselectable">Upload Documents</h5>
          </div>
          <div className="col-3">
            <h5 className="tab unselectable">Terms and Conditions</h5>
          </div>
        </div>
        {/*  */}
        <div className="row mt-4 justify-content-center spotdetails">
          <h5 className="text-center">SPOT DETAILS</h5>
        </div>
        {/*  */}
        <form onSubmit={formik.handleSubmit}>
          <div className="row mt-2">
            <div className="col-6 mt-2">
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Enter Your Spot Name"
                name='SpotName'
                value={formik.values.SpotName}
                onChange={formik.handleChange}
              />
              <select type="text"
                className='form-control mt-3'
                placeholder="Enter your city"
                name='City'
                value={formik.values.City}
                onChange={formik.handleChange}>
                <option value="javascript">Enter Your Spot City</option>
                <option value="Aathupollachi">Aathupollachi</option>
                <option value="Alandurai">Alandurai</option>
                <option value="Ambedkar Nagar">Ambedkar Nagar</option>
                <option value="Amman Nagar">Amman Nagar</option>
                <option value="Anaikatti">Anaikatti</option>
                <option value="Anamalai">Anamalai</option>
                <option value="Anupparpalayam">Anupparpalayam</option>
                <option value="Appanaickenpatti">Appanaickenpatti</option>
                <option value="Arasampalayam">Arasampalayam</option>
                <option value="Athipalayam">Athipalayam</option>
                <option value="Avinashi Road">Avinashi Road</option>
                <option value="Bharathi Nagar">Bharathi Nagar</option>
                <option value="Bharathi Park Road">Bharathi Park Road</option>
                <option value="Bharathiyar Road">Bharathiyar Road</option>
                <option value="Chettipalayam">Chettipalayam</option>
              </select>
              <input
                type="text"
                className="form-control mt-3"
                placeholder="Enter Your Spot Address"
                name='SpotAddress'
                value={formik.values.SpotAddress}
                onChange={formik.handleChange}
              />
              <div className='mt-3'>
                <button type='submit'>Submit</button>
              </div>
            </div>
            <div className="col-6 mt-2">
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Enter Your Email Address"
                name='Email'
                value={formik.values.Email}
                onChange={formik.handleChange}
              />
              <input
                type="tel"
                className="form-control mt-3"
                placeholder="Enter Your Booking Mobile Number"
                name='MobileNumber'
                value={formik.values.MobileNumber}
                onChange={formik.handleChange}
              />
              <select
                type="text"
                className="form-control mt-3"
                placeholder="Aminities Available"
                name='Aminities'
                value={formik.values.Aminities}
                onChange={formik.handleChange}>
                <option value="Aminities">Aminities</option>
                <option value="Water">Water</option>
                <option value="FirstAid">FirstAid</option>
                <option value="CCTV">CCTV</option>
                <option value="Restroom">Restroom</option>
                <option value="Parking">Parking</option>
                <option value="Shower">Shower</option>
              </select>
            </div>
          </div>
        </form>
      </div>

    </>
  );
}

export default App;
