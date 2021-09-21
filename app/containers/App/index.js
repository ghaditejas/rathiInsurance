/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import { Switch, useLocation, Route } from "react-router-dom";
import HomePage from "containers/HomePage";
import Header from "components/Header/Header";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductShowCase from "../ProductShowCase";

import SignupForm from "components/Signup-Login/Signup";
import LoginForm from "components/Signup-Login/Login";
import "../../assets/style/_global.scss";
import "../../assets/style/_utils.scss";
import Page404 from "../ErrorPages/Page404";
import Page503 from "../ErrorPages/Page503";
import AddToCart from "containers/AddToCart/AddToCart";
// import { News, Detail } from "../../containers/NewsPage";
import ChangePassword from "../../containers/ChangePassword/changePassword";
import EmailVerification from "../../containers/email-verification/verification";
import EmailConfirmation from "../../containers/email-confirmation/confirmation";
import TermAndConditions from "../../components/term-and-conditions/termAndConditions";
import PrivacyPolicy from "../../components/privacy-policy/privacyPolicy";
import OrderHistory from "../../components/order-history/orderHistory";
import OrderDetails from "../../containers/OrderDetails/OrderDetails";
import ThankYou from "../ThankYouPage/ThankYou";
import ForgotPassword from "../../components/forgot-password/ForgotPassword";
import warrantyActivation from '../../containers/warrantyActivation/warrantyActivation'
import PublicRoute from "../../routes/publicRoute";

import ScrollToTop from "../../helper/ScrollToTop";
import "../../assets/style/_colors.scss";
// import "../../assets/style/utils.scss";
// import GlobalStyle from '../../global-styles';
// import AddToCart from 'containers/AddToCart/AddToCart';
import i18n from "../../config/i18n_config";
import { useTranslation } from "react-i18next";
import { GA_ID, STRIPE_KEY } from "../../lib/constants/assets";
import { connect } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { geoLocation } from "../../redux/actions/geoLocation";
import { getCartItem } from "../../redux/actions/getCartItem";
import Loader from "../../components/Loader/loader";
import Cookies from 'universal-cookie';
const stripePromise = loadStripe(STRIPE_KEY);


function App({ geoLocation, loader, ...props }) {

  let location = useLocation();
  console.log('location===>', location)
  const cookies = new Cookies();
  const { t, i18n } = useTranslation();
  const isLocal = window.location.hostname === "localhost" ? true : false;

  const [cartCount, setCartCount] = useState(
    localStorage.getItem("cart")
      ? Object.keys(JSON.parse(localStorage.getItem("cart"))).length
      : 0
  );
  useEffect(() => {
    if (!isLocal) {
      ReactGA.initialize(GA_ID);
    }
    props.getCartItem({ onlySync: true })

    if (location.search !== "") {
      var str = location.search
      var index = str.search("referral=")

      if (index !== -1) {
        var code = str.substring(index + 9, 100)
        if (cookies.get('AffiliateCode') === undefined) {
          cookies.set('AffiliateCode', code, { expires: new Date(Date.now() + (86400000 * 30000000)) });
        }

      }
    }

  }, []);

  // useEffect(() => {
  // window.scrollTo({
  //   top: 0,
  //   left: 0,
  //   behavior: "auto",
  // });
  // });

  useEffect(() => {
    if (!isLocal) {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    }

    geoLocation();     //calling geolocate api through action

  }, [location.pathname]);

  useEffect(() => {
    if (props.syncmMssage === "Successfully Synced")
      setCartCount(
        localStorage.getItem("cart")
          ? Object.keys(JSON.parse(localStorage.getItem("cart"))).length
          : 0
      );
  }, [props.syncmMssage])
  const clicking = (e, langCode) => {
    e.preventDefault();
    i18n.changeLanguage(langCode);
  };

  const changeCartCount = () => {
    setCartCount(
      localStorage.getItem("cart")
        ? Object.keys(JSON.parse(localStorage.getItem("cart"))).length
        : 0
    );
  };

  let makeRestricted = localStorage.getItem("Token") && localStorage.getItem("pmtStat") === "success" ? false : true;

  return (
    <Elements stripe={stripePromise}>
      <ScrollToTop>
        <Header onClick={clicking} cartChange={changeCartCount} cartCount={cartCount} trans={t} />
        {loader ? <Loader /> : null}
        <Switch>
          <PublicRoute exact path="/" component={HomePage} trans={t} />
          <PublicRoute
            restricted={true}
            exact
            path="/signup"
            component={SignupForm}
            trans={t}
          />
          <PublicRoute
            restricted={true}
            exact
            path="/login"
            cartChange={changeCartCount}
            component={LoginForm}
            trans={t}
          />
          <Route
            exact
            path="/products/:id"
            scrollStrategy="none"
            render={(props) => (
              <ProductDetail
                cartChange={changeCartCount}
                {...props}
                trans={t}
                key={props.match.params.id}
              />
            )}
          />
          {/* <PublicRoute exact path="/product-detail/:id" scrollStrategy="none" component={ProductDetail} trans={t} /> */}

          <Route
            exact
            path="/cart"
            scrollStrategy="none"
            render={(props) => (
              <AddToCart cartChange={changeCartCount} {...props} trans={t} />
            )}
          />

          {/* <Route
            exact
            path="/warranty-activation"
            render={(props) => (
              <warrantyActivation  {...props} trans={t} />
            )}
          /> */}



          <Route
            exact
            path="/products"
            scrollStrategy="none"
            render={(props) => (
              <ProductShowCase
                key={
                  props.location.search
                    ? props.location.search
                    : props.match.params.id
                }
                cartChange={changeCartCount}
                {...props}
                trans={t}
              />
            )}
          />

          {!makeRestricted && <Route path="/order-summary" render={(props) => <ThankYou {...props} trans={t} />} />}

          <PublicRoute
            path="/reset-password/:id?"
            component={ChangePassword}
            trans={t}
          />
          <PublicRoute path="/verify" component={EmailVerification} trans={t} />
          <PublicRoute
            path="/confirmation/email"
            component={EmailConfirmation}
            trans={t}
          />
          <PublicRoute
            path="/term-and-conditions"
            component={TermAndConditions}
            trans={t}
          />
          <PublicRoute
            path="/privacy-policy"
            component={PrivacyPolicy}
            trans={t}
          />
          <PublicRoute
            path="/warranty"
            component={warrantyActivation}
            trans={t}
          />
          <PublicRoute
            path="/forgot-password"
            component={ForgotPassword}
            trans={t}
          />
          <PublicRoute
            path="/order-history"
            component={OrderHistory}
            trans={t}
          />

          <PublicRoute
            path="/orders/:id"
            component={OrderDetails}
            trans={t}
          />
          <PublicRoute exact path="/error" component={Page503} trans={t} />
          <PublicRoute path="" component={Page404} trans={t} />
          {/* <Route path="/news" component={News} /> */}
          {/* <Route exact path="/news-detail" component={Detail} /> */}
        </Switch>
      </ScrollToTop>
    </Elements>
  );
}

const mapStateToProps = (state) => {
  return {
    syncmMssage: state.GetCartItem.message,
    geoLocationData: state.geoLocationReducer,
    loader: state.setLoader.loader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    geoLocation: () => {
      dispatch(geoLocation());
    },
    getCartItem: (options) => {
      dispatch(getCartItem(null, options, null));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
