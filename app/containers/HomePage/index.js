import React from "react";
import Homecarousel from "../../components/CarouselPage/Homecarousel";
import Aboutus from "../../containers/AboutUs/Aboutus";
import Products from "../../containers/Products";
import Faq from "../../containers/Faq/Faq";
import GetInTouch from "../../components/GetInTouch/Getintouch";
// import SignupForm from "../../components/Signup-Login/Signup";
// import LoginForm from "../../components/Signup-Login/Login";
import MobileSection from "../../components/MobileApp/MobileSection";
import { Container } from "react-bootstrap";
import { HomePageData } from "../../../dummyJson";
import Disclaimer from "../Disclaimer/Disclaimer";
import Cookies from "universal-cookie";
import { connect } from "react-redux";

import "./Home.scss";
import { Helmet } from "react-helmet";

function HomePage(props) {
  const disclaimerAgreement = true;
  const cookies = new Cookies();
  const transFunction = props.trans;
  let selectedlangcode = localStorage.getItem("selectedLangCode");
  return (
    <Container className="main-container" fluid>
      <Helmet>
        <title>Home - diPulse</title>
        <meta property="og:title" content= 'Home - diPulse' />
        <meta property="og:url" content='http://dipulse.com' />
        <meta name="twitter:card" content='http://dipulse.com/logo.png' />
        <meta name="twitter:title" content="Home - diPulse " />
        {/* <meta name="twitter:image" content={productsData.images.galleryImage[0].original.imagePath} /> */}
      </Helmet>
      {props.homepage.length != 0 ?
      <>
      <div className="wrapper">
        <Homecarousel data={props.homepage.HomePageData} trans={transFunction} />
        <Products products={props.homepage.products} trans={transFunction} />
        <MobileSection MobileAppDescription={props.homepage.MobileAppDescription} trans={transFunction} />
        <Aboutus AboutUs={props.homepage.AboutUs} trans={transFunction} />
        <Faq FAQ={props.homepage.FAQ} trans={transFunction} />
        <GetInTouch AddressData={props.homepage.AddressData} trans={transFunction} selectedlangcode={selectedlangcode} />
      </div>
      {cookies.get("DisclaimerAgreement") != "Accepted" && <Disclaimer trans={transFunction} />}
      </>:null}
    </Container>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
      homepage : state.HomePageReducer.homePageData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchAllProduct: (url, params, method) => {
    //   dispatch(fetchAllProduct(url, params, method));
    // },
    // searchProduct: (searchProductValues, history) => {
    //   dispatch(searchProduct(searchProductValues, history));
    // },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);