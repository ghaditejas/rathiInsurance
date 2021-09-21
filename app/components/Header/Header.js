import React, { useState, useEffect, useRef } from "react";
import "./header.scss";
import { Container, Form } from "react-bootstrap";
import Assets from "../../lib/constants/assets";
import { Link, withRouter } from "react-router-dom";
import validate from "../HookValidation/FormValidationRules";
import useForm from "../HookValidation/UseForm";
// import { RedirectUrl } from "../../lib/constants/assets";
// import { withRouter } from 'react-router-dom';
import LanguageDropdown from "../LanguageDropdown/languageDropdown";

function Header(props) {
  const [menu, setMenu] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState();
  const [headerItemVisibility, setHeaderItemVisibility] = useState(false);
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ref = useRef();
  const searchRef = useRef(null);

  const submit = (event) => {
    values.search = searchRef.current.defaultValue;
    if (event.key === "Enter") {
      event.target.blur();
      values.search = searchRef.current.defaultValue;
      let search = values.search ? values.search : "";
      // document.getElementById("searchbox").focus();
      props.history.push({
        pathname: "/products",
        search: '?q=' + values.search,
      });
      // values.search = "";
      // window.location.href =
      //   `${RedirectUrl}?s=` + search + "&post_type=product";
    } else if (event.key === "esc") {
      +setHeaderItemVisibility(false);
    }
  };

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setHeaderItemVisibility(false);
    }
  };
  const searchIconClick = () => {
    setHeaderItemVisibility(true);
    setTimeout(() => { searchRef.current.focus() }, 500);
  }
  const productIconClick = () => {
    if (props.location.pathname === "/") {
      const elmnt = document.getElementById("products");
      window.scroll({
        top:
          elmnt.offsetTop - document.getElementById("header").offsetHeight + 60,
        behavior: "smooth",
      });
    } else {
      props.history.push({
        pathname: "/",
        state: { activeMenu: "PRODUCTS", id: "products" },
      });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  useEffect(() => {
    const { location } = props;
    if (location.state !== undefined) {
      if (location.state.clearSearch == true) {
        values.search = "";
      }
      setActiveMenuItem(location.state.activeMenu);
      const elmnt = document.getElementById(location.state.id);
      if (elmnt) {
        window.scroll({
          top:
            elmnt.offsetTop -
            document.getElementById("header").offsetHeight +
            60,
          behavior: "smooth",
        });
        // location.state.activeMenu = undefined;
      }
      // location.state = undefined;
    }
  });

  useEffect(()=>{
    const { location } = props;
     if(location.state)
      location.state  = undefined;
   },[activeMenuItem]);
   
  const click = () => {
    setMenu(!menu);
  };
  const gotoSignup = () => {
    // console.log("you Clicked....");
    window.location = "/login";
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      setHeaderItemVisibility(false);
      values.search = "";
    }
  };
  const menuClicked = (activeMenu, id) => {
    setActiveMenuItem(activeMenu);
    // if (id === 'newsandblogs') {
    //   props.history.push("/news");
    // }
    console.log(id);
    if (id === "login_signup") {
      props.history.push("/login");
    } else if (id === "logout") {
      localStorage.removeItem('Token');
      localStorage.removeItem('cart');
      localStorage.removeItem('User');
      localStorage.removeItem('pmtStat');
      props.cartChange(0);
      props.history.push('/login');
    } else if (id === "orders") {
      props.history.push('/order-history');
    } else {
      if (props.location.pathname === "/") {
        const elmnt = document.getElementById(id);
        if (elmnt) {
          window.scroll({
            top:
              elmnt.offsetTop -
              document.getElementById("header").offsetHeight +
              60,
            behavior: "smooth",
          });
        }
      } else {
        props.history.push({ pathname: "/", state: { activeMenu, id } });
      }
    }
    setMenu(!menu);
  };
  let menuItem = [
    { name: props.trans("products"), id: "products" },
    { name: props.trans("mobile_application"), id: "mobile_app" },
    { name: props.trans("about_us"), id: "aboutUs" },
    { name: props.trans("faq"), id: "faq" },
    { name: props.trans("contact_us"), id: "contactUs" },
    { name: props.trans("login_signup"), id: "login_signup" }
    //  { name: "NEWS & BLOGS", INDEX: "06", id: "newsandblogs" }
  ];
  if (localStorage.getItem('Token')) {
    menuItem[menuItem.length-1] = { name: props.trans("logout"), id: "logout" }
    menuItem.splice(menuItem.length-1, 0, { name: props.trans("orders"), id: "orders" })
  }
  const userData = JSON.parse(localStorage.getItem('User'));
  const { onClick } = props;

  return (
    <Container
      className="fixed-header"
      id="header"
    //  style={props.location.pathname==='/productshowcase' ?
    //  {backgroundImage:'linear-gradient(to top, #131319, #121218)'}:null}
    >
      <div className="header">
        <div className="di-logo">
          <Link to="/" className="d-flex">
            {/* <img src={Assets.AddressIcon} className="header-logo" /> */}
            <img src={Assets.LOGO} className="dipulse-logo" />
          </Link>
        </div>

        <div
          className={
            headerItemVisibility ? "text-white search-visible" : "text-white"
          }
        >
          <span ref={ref}>
            <Form.Control
              type="text"
              id="searchbox"
              bsPrefix="search-box"
              placeholder={props.trans("search")}
              name="search"
              onChange={handleChange}
              onKeyPress={(e) => submit(e)}
              onKeyDown={(e) => handleKeyDown(e)}
              onBlur={() => setHeaderItemVisibility(false)}
              value={values.search || ""}
              ref={searchRef}
            />
            <a
              href="javascript:void(0);"
              className="logo-spacing"
              onClick={searchIconClick}
            >
              <img
                src={Assets.InactiveSearch}
                onMouseOver={(e) => (e.currentTarget.src = Assets.ActiveSearch)}
                onMouseOut={(e) =>
                  (e.currentTarget.src = Assets.InactiveSearch)
                }
              />
            </a>
          </span>
          <Link
            to="/cart"
            className={
              headerItemVisibility ? "logo-spacing d-none" : "logo-spacing"
            }
          >
            <img
              src={Assets.CartIcon}
              onMouseOver={(e) => {
                e.currentTarget.src =
                  props.cartCount != 0 ? Assets.CartIcon : Assets.ActiveCart;
              }}
              onMouseOut={(e) => (e.currentTarget.src = Assets.CartIcon)}
            />
            {props.cartCount != 0 ?
              <span className="badge badge-warning" id="lblCartCount">
                {props.cartCount}
              </span> : null}
          </Link>
          <a
            href="javascript:void(0);"
            onClick={productIconClick}
            className={
              headerItemVisibility
                ? "logo-spacing d-none"
                : "logo-spacing home-logo"
            }
          >
            <img
              src={Assets.RetailIcon}
              onMouseOver={(e) => (e.currentTarget.src = Assets.ActiveRetail)}
              onMouseOut={(e) => (e.currentTarget.src = Assets.RetailIcon)}
            />
          </a>
        </div>
        <div className="menu-bar">
          <img src={Assets.MenuBar} onClick={click} />
        </div>
        <div className="language-list">
          <LanguageDropdown
            dropdownVisibility={headerItemVisibility}
            onLanguageChange={onClick}
          />
        </div>
        {/* desktop */}
        <div id="myNav" className={menu ? "overlay in" : "overlay out"}>
          <a className="closebtn" onClick={click}>
            &times;
          </a>
          <div className="overlay-content">
            <div className="menu-container">
              {userData ?
                <ul>
                  <li className='userdetailslist namesize'>{userData.name}</li>
                  <li className='userdetailslist emailsize'>{userData.email}</li>
                </ul> : ''
              }
              {menuItem.map((item, index) => (
                <div
                  key={index}
                  className={
                    item.name === activeMenuItem
                      ? "item-conatiner active"
                      : "item-conatiner"
                  }
                  onClick={() => menuClicked(item.name, item.id)}
                >
                  <span className="index-number mb-0">{`${index < 9 ? '0' : ''}${index + 1}`}</span>
                  <a className="menu-name">{item.name}</a>
                  <div
                    className={
                      item.name === activeMenuItem ? "vertical-seprator" : null
                    }
                  />
                  <div className="circle" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default withRouter(Header);
// export withNamespaces()(Header);
// export default withRouter(withNamespaces()(Header))
