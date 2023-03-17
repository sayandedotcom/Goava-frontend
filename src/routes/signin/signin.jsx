import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import Google from "../../assests/svg-google.svg";
import Facebook from "../../assests/svg-facebook.svg";
import FormInput from "../../components/input/input";

const Signin = () => {
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
        <form className="flex flex-col gap-6">
          <FormInput
            placeholder="Email Address"
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
          <Button buttonType="inverted" type="submit">
            Sign In
          </Button>
        </form>
      </div>
      <h1 className="text-2xl font-bold">OR</h1>
      <div className="flex items-center justify-center gap-4">
        <Button buttonType="google">
          <img src={Google} alt="" />
          Google
        </Button>
        <Button buttonType="google">
          <img src={Facebook} alt="" />
          Facebook
        </Button>
      </div>
    </div>
  );
};

export default Signin;
