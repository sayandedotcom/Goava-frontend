import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import Google from "../../assests/svg-google.svg";
import FormInput from "../../components/input/input";

const Signin = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-4xl font-black uppercase">Sign in</p>
      <div className="flex flex-row items-center gap-4 mt-3">
        <p className="text-xl  font-bold">Don't have an Account ?</p>
        <Link to={"/signup"}>
          <Button buttonType="inverted">Sign Up</Button>
        </Link>
      </div>
      <div className="flex flex-col gap-3 mt-5 text-center font-semibold h-72	w-80">
        <p>Sign in with your Email and Password</p>
        <hr className="border-1 border-black" />
        <form className="flex flex-col gap-6">
          <FormInput
            placeholder="Email address"
            type="email"
            name="email"
            required
          />
          <FormInput
            placeholder="Password"
            type="password"
            name="password"
            required
          />
          <div className="flex justify-between">
            <Button buttonType="inverted" type="submit">
              Sign n
            </Button>
            <Button buttonType="google" type="submit">
              <img src={Google} alt="" />
              Google
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
