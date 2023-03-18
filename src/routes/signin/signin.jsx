import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import Google from "../../assests/svg-google.svg";
import Facebook from "../../assests/svg-facebook.svg";
import FormInput from "../../components/input/input";
import NewTooltip from "../../components/tooltip/tooltip";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Email is required")
      .matches(/\S+@\S+\.\S+/, "Email is not valid"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be less than 6 character"),
  })
  .required();

const Signin = () => {
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
    <div className="flex flex-col justify-center items-center h-auto mb-24 gap-4">
      <p className="text-4xl font-black uppercase">Sign in</p>
      <div className="flex flex-row items-center gap-4 mt-3">
        <p className="text-xl  font-bold">Don't have an Account ?</p>
        <Link to={"/signup"}>
          <Button buttonType="inverted">Sign Up</Button>
        </Link>
      </div>
      <div className="flex flex-col gap-3 mt-5 text-center font-semibold 	w-80">
        <p>Sign in with your Email and Password</p>
        <hr className="border-1 border-black" />

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
          <Button buttonType="inverted" type="submit">
            Sign In
          </Button>
        </form>
      </div>
      <h1 className="text-2xl font-bold">OR</h1>
      <div className="flex items-center justify-center gap-4">
        <NewTooltip title="Sign In with Google">
          <Button buttonType="google">
            <img src={Google} alt="" />
            Google
          </Button>
        </NewTooltip>
        <NewTooltip title="Sign In with Facebook">
          <Button buttonType="google">
            <img src={Facebook} alt="" />
            Facebook
          </Button>
        </NewTooltip>
      </div>
    </div>
  );
};

export default Signin;
