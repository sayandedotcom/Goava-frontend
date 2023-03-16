import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import FormInput from "../../components/input/input";

const Signup = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <p className="text-4xl font-black uppercase">Sign up</p>
      <div className="flex flex-row items-center gap-4 mt-3">
        <p className="text-xl  font-bold">Already have an Account ?</p>
        <Link to={"/signin"}>
          <Button buttonType="inverted">Sign In</Button>
        </Link>
      </div>
      <div className="flex flex-col gap-3 mt-5 text-center font-semibold h-96	w-80">
        <p>Sign up with your Email and Password</p>
        <hr className="border-1 border-black" />
        <form className="flex flex-col gap-6">
          <FormInput
            // value={firstName}
            // onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            type="text"
            name="firstName"
            required
          />
          <FormInput
            // value={lastName}
            // onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
            type="text"
            name="lastName"
            required
          />
          <FormInput
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            type="email"
            name="email"
            required
          />
          <FormInput
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            name="password"
            required
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
