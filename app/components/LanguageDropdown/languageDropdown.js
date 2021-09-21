import React, { useState, useEffect } from "react";
import "./languageDropdown.scss";
import { Dropdown } from "react-bootstrap";
import { languageDetails } from "../../../dummyJson";

import { fetchAllHomePageData } from "../../redux/actions/fetchAllhomePage";
import { connect } from "react-redux";

function LanguageDropdown(props) {

  let selectedLang = localStorage.getItem("selectedLang");
  let selectedFlag = localStorage.getItem("selectedFlag");

  let [language, setLanguage] = useState(selectedLang ? selectedLang : languageDetails[0]["lang"]);

  let [languageFlag, setLanguageFlag] = useState(selectedFlag ? selectedFlag : languageDetails[0]["flag"]);

  const chooseLanguage = (e, { lang, flag, langCode }) => {
    localStorage.setItem('selectedLang', lang);
    localStorage.setItem('selectedFlag', flag);
    localStorage.setItem('selectedLangCode', langCode);
    setLanguage(lang);
    setLanguageFlag(flag);
    window.location.reload();
    props.onLanguageChange(e, langCode);
  };

  useEffect(() => {
    console.log('asdasd');
    props.fetchAllHomePageData('/home', localStorage.getItem('selectedLangCode'), 'GET')
  }, [selectedLang]);


  return (
    <div className={props.dropdownVisibility ? 'dropdown-list d-none' : "dropdown-list"}>
      <Dropdown>
        <Dropdown.Toggle variant="danger" id="dropdown-basic">
          <span className="language">{language}</span>
          {/* <span className="flag">
            <img src={languageFlag} />
          </span> */}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {languageDetails.map((item, index) => (
            <Dropdown.Item key={index} onClick={(e) => chooseLanguage(e, item)}>
              <span
                className={
                  item.lang === language ? "language lang_selected" : "language"
                }
              >
                {item.lang}
              </span>
              {/* <span className={
                item.lang === language ? "flag flag_selected" : "flag"
              }>
                <img src={item.flag} />
              </span>{" "} */}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllHomePageData: (url, params, method) => {
      dispatch(fetchAllHomePageData(url, params, method));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageDropdown);
