import React from 'react'
import "./login.css";
import {Link} from 'react-router-dom';

function login() {
  return (
    <div className='container-fluid'>
        <div className="container phorm_box">
      <div className="row">
        <div className="col-md-6 phorm-box-beeg">
          <form className="row g-3">
            <div className="col-md-12">
              <input type="email" className="form-control" placeholder="Email" required></input>
            </div>

            <div className="col-md-12">
              <input type="password" className="form-control" id="inputPassword4" placeholder="password" required></input>
            </div>

            

            <div className="form-check IAgree">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
              <label className="form-check-label" for="flexCheckDefault">
                Remember me
                </label>
            </div>

            <button type="submit" className="btn btn-primary">SIgnup</button>
            <br></br>

            <div className="log">
              <p>Don't Have an Account?  
                   <Link to="/">Signup</Link>
              </p>
            </div>



          </form>
        </div>
        <div className="col-md-6 left">
          <h3>Welcome User!</h3>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default login