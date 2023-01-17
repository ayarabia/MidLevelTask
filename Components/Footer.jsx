import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  const links1 = ["Navigate", "Home", "Properties", "Company"];
  const links2 = ["Support", "Terms and conditions", "FAQs", "Contact us"];
  return (
    <footer className="bg-primary  text-center text-lg-start  py-5">
      <div className="container p-4">
        <div className="row">
          <div className="col-6 col-md-3 mb-4 mb-md-0 text-start">
            <ul className="list-unstyled mb-0">
              {links1.map((item) => {
                return (
                  <li key={item}>
                    <a href="#!" className="text-light">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-4 mb-md-0 text-start">
            <ul className="list-unstyled">
              {links2.map((item) => {
                return (
                  <li key={item}>
                    <a href="#!" className="text-light">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className=" col-md-6  mb-4 mb-md-0">
          <h6 className="me-4 text-light text-start">
             Social
              </h6>
            <ul className="list-unstyled mb-0 list-group-horizontal list-group fs-5 texy-center  d-flex justify-content-md-start  mt-3 ">
            
              <li className="me-3">
                <a href="#!" className="text-light">
                  <FaFacebookF />
                </a>
              </li>
              <li className="me-3">
                <a href="#!" className="text-light">
                  <AiFillInstagram />
                </a>
              </li>
              <li>
                <a href="#!" className="text-light">
                  <AiOutlineTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
