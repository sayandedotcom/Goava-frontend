import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "components/button/button";
import Google from "assests/svg-google.svg";
import Facebook from "assests/svg-facebook.svg";
import FormInput from "components/input/input";
import NewTooltip from "components/tooltip/tooltip";

const schema = yup
  .object({
    name: yup.string().required("Full Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .matches(/\S+@\S+\.\S+/, "Email is not valid"),
    // .email("Email is not valid"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be less than 6 character"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Pasword does not match"),
  })
  .required();

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ name, email, password }) => {
    let result = await fetch("http://localhost:4000/api/v1/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("1", result);
    result = await result.json();
    // localStorage.setItem("token", JSON.stringify(result.token));
    console.log("2", result);
    reset();
    navigate("/");
  };
  console.log(errors);

  return (
    <div className="flex flex-col justify-center items-center h-auto mb-24 gap-4">
      <p className="text-4xl font-black uppercase">Sign up</p>
      <div className="flex flex-row items-center gap-4 mt-3">
        <p className="text-xl  font-bold">Already have an Account ?</p>
        <Link to={"/login"}>
          <Button buttonType="inverted">Log In</Button>
        </Link>
      </div>
      <div className="flex flex-col gap-3 mt-5 text-center font-semibold w-80">
        <p>Sign up with your Email and Password</p>
        <hr className="border-1 border-black" />

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <FormInput
            placeholder="Full Name"
            type="text"
            name="name"
            register={{ ...register("name") }}
            errorMessage={errors.name?.message}
          />
          <FormInput
            placeholder="Email Address"
            type="text"
            name="email"
            register={{ ...register("email") }}
            errorMessage={errors.email?.message}
          />
          <FormInput
            placeholder="Password"
            type="password"
            name="password"
            register={{ ...register("password") }}
            errorMessage={errors.password?.message}
          />
          <FormInput
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            register={{ ...register("confirmPassword") }}
            errorMessage={errors.confirmPassword?.message}
          />
          <Button buttonType="inverted" type="submit">
            Sign Up
          </Button>
        </form>
      </div>
      <h1 className="text-2xl font-bold">OR</h1>
      <div className="flex items-center justify-center gap-4">
        <NewTooltip title="Sign Up with Google">
          <Button buttonType="google">
            <img src={Google} alt="" />
            Google
          </Button>
        </NewTooltip>
      </div>
    </div>
  );
};

export default Signup;
