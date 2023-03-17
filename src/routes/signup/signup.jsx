import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import FormInput from "../../components/input/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup.string().required("Full Name is required"),
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  console.log(errors);

  return (
    <div className="flex flex-col justify-center items-center ">
      <p className="text-4xl font-black uppercase">Sign up</p>
      <div className="flex flex-row items-center gap-4 mt-3">
        <p className="text-xl  font-bold">Already have an Account ?</p>
        <Link to={"/signin"}>
          <Button buttonType="inverted">Sign In</Button>
        </Link>
      </div>
      <div className="flex flex-col gap-3 mt-5 text-center font-semibold h-[30rem]	w-80">
        <p>Sign up with your Email and Password</p>
        <hr className="border-1 border-black" />

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <FormInput
            placeholder="Full Name"
            type="text"
            name="fullName"
            register={{ ...register("fullName") }}
            errorMessage={errors.fullName?.message}
          />
          <FormInput
            placeholder="Email Address"
            type="email"
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
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
