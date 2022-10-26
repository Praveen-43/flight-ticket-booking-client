import React from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  let navigate = useNavigate();
  let handleLogout = () => {
    navigate("/");
    // localStorage.removeItem("react_app_token");
    localStorage.clear();
  };
  let navUser = localStorage.getItem("username");
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="row ">
          <div className="col  m-3 text-white fs-5 ">Flight Booking</div>
          <div className="col d-flex justify-content-end align-items-center">
            <div className="text-white me-2">{navUser}</div>
            <CgProfile
              className="text-white fs-2 me-3 pointer "
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-custom-class="custom-tooltip"
              data-bs-title="This top tooltip is themed via CSS variables."
            />

            <button
              onClick={() => handleLogout()}
              className="btn btn-light text-dark"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
