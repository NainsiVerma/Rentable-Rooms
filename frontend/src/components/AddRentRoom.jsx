import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";

const AddRentRoom = () => {
  const navigate = useNavigate();

  const [selFile, setSelFile] = useState("");

  const uploadFile = (e) => {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  const rentForm = useFormik({
    initialValues: {
      image: "",
      description: "",
      rent: "",
      type: "",
      contact: "",
      name: "",
      address: "",
      createdAt: new Date(),
    },

    onSubmit: async (values, { resetForm }) => {
      values.image = selFile;
      console.log(values);

      const res = await fetch("http://localhost:5000/room/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });
      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Space Added Successfully",
        });
        //   resetForm();
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong",
        });
      }
      // add code here to connect to backend
    },
  });

  return (
    <div>
      <div className="col-md-3 mx-auto">
        <div className="card">
          <div className="card-body">
            <h2 className="my-5 text-center">Signup Form</h2>

            <form onSubmit={rentForm.handleSubmit}>
              <label htmlFor="">Name</label>
              <input
                className="form-control mb-3"
                onChange={rentForm.handleChange}
                value={rentForm.values.name}
                name="name"
              />

              <label htmlFor="">Monthly Rent</label>
              <input
                className="form-control mb-3"
                onChange={rentForm.handleChange}
                value={rentForm.values.rent}
                name="rent"
              />

              <label htmlFor="">Contact</label>
              <input
                className="form-control mb-3"
                onChange={rentForm.handleChange}
                value={rentForm.values.contact}
                name="contact"
              />

              <label htmlFor="">Type</label>
              <select
              className="form-control"
                onChange={rentForm.handleChange}
                value={rentForm.values.type}
                name="type"
              >
                <option value="hostel">Hostel Room</option>
                <option value="house">House</option>
                <option value="room">Room</option>
              </select>

              <label htmlFor="">Description</label>
              <textarea
                className="form-control mb-3"
                onChange={rentForm.handleChange}
                value={rentForm.values.description}
                name="description"
              ></textarea>
              
              <label htmlFor="">Address</label>
              <textarea
                className="form-control mb-3"
                onChange={rentForm.handleChange}
                value={rentForm.values.address}
                name="address"
              ></textarea>

              <label htmlFor="">Upload Image</label>
              <input
                className="form-control mb-3"
                type="file"
                onChange={uploadFile}
              />

              <button type="submit" className="btn btn-primary mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRentRoom;
