import React from 'react';
import { NewsBlogDetail } from '../../../dummyJson';
import './detail.scss';

const ImgBox = (props) => (
  <img src={props.url} className="img-box" />
);

const BgImgContainer = (props) => {
  const styleObj = {
    background: `url(${props.url}) no-repeat center`,
    backgroundSize: 'cover'
  };

  return (
    <div className="news-detail-container" style={styleObj}>
      {props.children}
    </div >
  )
};

function NewsDetail() {
  const { defaultBg, flagImg } = NewsBlogDetail;
  const defaultBgImg = defaultBg;
  const bgCover = flagImg ? flagImg : defaultBgImg;

  return (
    <BgImgContainer url={bgCover}>
      <div className="overlay">
        <div className="container">
          <div className="main">
            <div className="left-side">
              <div
                dangerouslySetInnerHTML={{ __html: NewsBlogDetail.newsDetailDescription1 }}
              />
              <div
                dangerouslySetInnerHTML={{ __html: NewsBlogDetail.newsDetailDescription2 }}
              />
            </div>
            <div className="right-side">
              <ImgBox url={NewsBlogDetail.rightImg1} />
              <ImgBox url={NewsBlogDetail.rightImg2} />
            </div>
          </div>
        </div>
      </div>
    </BgImgContainer>
  )
}

export default NewsDetail;
