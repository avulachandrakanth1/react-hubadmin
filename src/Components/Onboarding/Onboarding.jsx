import React from "react";
import logo from "../../assets/images/logo.png";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { useState } from "react";


const Onboarding = () => {
    const [loading, setLoading] = useState(false);
    const initialValues = {userName:'', password:''};
    const validateSchema = Yup.object().shape({
        username: Yup.string().required("Username is required."),
        password: Yup.string().required("Password is required.").min(6,"Password must be 6 or more characters.")
    })
    const formik = useFormik({
        initialValues : {
            username: '',
            password: ''
        },
        validationSchema: validateSchema,
        onSubmit: (values)=>{
            console.log(values);
        }

    })
    console.log(formik.values);

  return (
    <div className="min-h-screen flex">
      <div className="hidden md:block md:w-2/3 bg-gradient-to-t from-black to-blue-900 p-8 items-center md:flex justify-center">
        <div className="w-full text-center">
          <img src={logo} alt="Logo" className="mx-auto my-auto" />
        </div>
      </div>
      <div className="w-full md:w-1/3 3xl:flex xl:my-auto items-center p-8 justify-center">
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-bold">Login</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input  onChange={formik.handleChange} value={formik.values.username}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username" 
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input onChange={formik.handleChange} value={formik.values.password}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-400 hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
              type={"submit"}
            >
              Sign In
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Onboarding;
