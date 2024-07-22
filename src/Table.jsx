import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { Formik, useFormik } from 'formik';

function Table() {
    const [entries, setEntries] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState({
    sports: '',
    type: 'indoor',
    groundType: '',
    groundSize: '',
    serviceTiming: '',
    rate: '',
    description: ''
  });

  const handleChang = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleAdd = () => {
    setEntries([...entries, formValues]);
    setFormValues({
      sports: '',
      type: 'indoor',
      groundType: '',
      groundSize: '',
      serviceTiming: '',
      rate: '',
      description: ''

    });
    setShowForm(false); // Hide form after adding an entry
  };


    const Formik = useFormik({
        initialValues: {
            sportsAvailable: "",
            type: "",
            groundType: "",
            groundSize: '',
            serviceTiming: '',
            rate: '',
            description: ''
        },
        onSubmit: (data) => {
            console.log(data)
        }
    })
    return (
        <>
            <form onSubmit={Formik.handleSubmit}>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Data Table</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%">
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
                                        <td><input type="text" placeholder='Enter your Sports' name='sportsAvailable' value={Formik.values.sportsAvailable} onChange={Formik.handleChange} /></td>
                                        <td><select name="type" value={Formik.values.type} onChange={Formik.handleChange}>
                                            <option value="indoor">Indoor</option>
                                            <option value="outdoor">Outdoor</option>
                                        </select></td>
                                        <td><input type="text" placeholder='Enter your Ground Type' name='groundType' value={Formik.values.groundType} onChange={Formik.handleChange} /></td>
                                        <td><input type="text" placeholder='Enter your Ground Size' name='groundSize' value={Formik.values.groundSize} onChange={Formik.handleChange} /></td>
                                        <td><input type="text" placeholder='Enter your Service Time' name='serviceTiming' value={Formik.values.serviceTiming} onChange={Formik.handleChange} /></td>
                                        <td><input type="text" placeholder='Enter your Rate' name='rate' value={Formik.values.rate} onChange={Formik.handleChange} /></td>
                                        <td><input type="text" placeholder='' name='description' value={Formik.values.description} onChange={Formik.handleChange} /></td>
                                        <td>
                                            <button name='action'
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
            </form >
        </>
    )
}

export default Table
