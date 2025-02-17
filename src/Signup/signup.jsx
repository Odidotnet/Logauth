import React from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import "./signup.css";
import {Link} from "react-router-dom";


export const Signup = () => {
  const options = countryList().getData();
  return (
   <div className="container_fluid">
    <div className="container phorm_box">
      <div className="row">
        <div className="col-md-4 left">
        <h3>Create Account <FontAwesomeIcon icon={faUserShield} /></h3>
        </div>
        <div className="col-md-8 phorm-box-beeg">
          <form className="row g-3">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Firstname" required></input>
            </div>

            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Lastname" required></input>
            </div>

            <div className="col-md-12">
              <input type="email" className="form-control" placeholder="Email" required></input>
            </div>

            <div className="col-md-6">
              <input type="password" className="form-control" id="inputPassword4" placeholder="password" required></input>
            </div>

            <div className="col-md-6">
              <input type="password" className="form-control" id="inputPassword4" placeholder="Confirm password" required></input>
            </div>

            <div className="col-md-6">
              <select className="form-select" required>
                <option selected disabled value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="col-md-6">
              <select className="form-select" required>
                <option selected disabled value="">Select ID Type</option>
                <option>Passport</option>
                <option>National Id</option>
                <option>License</option>
              </select>
            </div>

            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="ID Number" required></input>
            </div>

            <div className="col-md-4">
              <input type="file" className="form-control" id="formFile" placeholder="Profile Photo" value="" required></input>
            </div>

            <div className="col-md-4"> 
              <Select options={options} placeholder="Select Country" required />
            </div>


            <div className="checks">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="inputChoice1"></input>
              <label className="form-check-label" for="inputChoice1">Bank Transfer</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="inputChoice2"></input>
              <label className="form-check-label" for="inputChoice1">USDT</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="inputChoice3"></input>
              <label className="form-check-label" for="inputChoice1">PayPal</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="inputChoice3"></input>
              <label className="form-check-label" for="inputChoice1">Cash</label>
            </div>
            </div>

            <div className="form-check IAgree">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
              <label className="form-check-label" for="flexCheckDefault">
                I Agree to the Terms & Conditions
                </label>
            </div>

            <button type="submit" className="btn btn-primary">SIgnup</button>
            <br></br>

            <div className="log">
              <p>Already Have an Account?  
                   <Link to="/login">Login</Link>
              </p>
            </div>



          </form>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Signup;