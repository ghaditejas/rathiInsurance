import React, { useEffect } from "react";
import { Col } from "react-bootstrap";

import { Assets, RedirectUrl } from "../../lib/constants/assets";
import { AddressData } from "../../../dummyJson";
import "./Address.scss";
import { Link, withRouter } from "react-router-dom";

function Address(props) {

  const bottomLinks = (activeMenu, id) => {

    if (props.location.pathname === "/") {
      const elmnt = document.getElementById(id);
      if (elmnt) {
        window.scroll({
          top:
            elmnt.offsetTop - document.getElementById("header").offsetHeight + 60,
          behavior: "smooth",
        });
      }
    } else {
      props.history.push({ pathname: "/", state: { activeMenu, id } });
    }
  };
  let selectedLangcode = localStorage.getItem("selectedLangCode");
  // const { callLabel, callValue, address, headLabel } = props.AddressData;
  const { trans } = props;
  return (
    <>
      <Col
        xl={11}
        lg={11}
        md={11}
        sm={12}
        className="d-flex align-items-end justify-content-center address-main-content"
      >
        <div className="main-wrapper-address">
          <div className="address-wrapper">
            <div className="row">
              <Col xl={5}
                lg={5}
                md={5}
                sm={12}>
                <address>
                  <div className="org-address">
                    <img className="" src={Assets.LogoWhite} />
                    <h1 className="address-text">{trans('address')}</h1>
                    <p className="address-detail">
                      {trans("dipulse-address")}
                    </p>
                    {/* <p className="phone-no">{callLabel}: {callValue}</p> */}
                  </div>
                </address>
              </Col>
              <Col xl={7}
                lg={7}
                md={7}
                sm={12} className="address-menu">
                <ul className="list-unstyled ">
                  <li className="item-odd"><a href="javascript:void(0)" onClick={() => bottomLinks(trans("home"), "homeCarousel")}>{trans("home")}</a></li>
                  <li className="item-even"><a href="javascript:void(0)" onClick={() => bottomLinks(trans("faq"), "faq")}>{trans("faq")}</a></li>
                  <li className="item-odd"><a href="javascript:void(0)" onClick={() => bottomLinks(trans("products"), "products")}>{trans("products")}</a></li>
                  <li className="item-even"><Link to={"/warranty"}>{trans("warranty_activation_form")}</Link></li>
                  <li className="item-odd"><a href="javascript:void(0)" onClick={() => bottomLinks(trans("about_us"), "aboutUs")}>{trans("about_us")}</a></li>
                  <li className="item-even"><Link to={"/term-and-conditions"}>{trans("terms_condition_link")}</Link></li>
                  {/* <li><a>App</a></li> */}
                  <li className="item-odd"><a href="javascript:void(0)" onClick={() => bottomLinks(trans("contact_us"), "contactUs")}>{trans("contact_us")}</a></li>
                  <li className="item-even"><Link to={"/privacy-policy"}  >{trans("privacy_policy")}</Link></li>
                </ul>
                <div className="clearfix"></div>
              </Col>
            </div>
          </div>
          <div className="copyright text-center">
            {trans("copyright")}
          </div>
        </div>
      </Col>
    </>
  );
}

export default withRouter(Address);
