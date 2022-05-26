import React from 'react';
import offroad from '../../../img/offroad.jpg';
import trs from '../../../img/trs.jpg';
import volcano from '../../../img/volcano.jpg';
import storm from '../../../img/storm.jpg';
import iceland from '../../../img/iceland.jpg';
// import '../../../css/postProduction.css';

export const PostProduction = () => {
  return (
    <>
      <section id="post-production" className="post-production">
        <div className="container">
          <div className="post-production-title">
            <span>Video Edits</span>
            <h2>Video Edits</h2>
            <p>Audio video edits, adding video effects and logo animations</p>
          </div>

          <div className="row justify-content-md-center">
            <div className="col-md-6 col-lg-5 d-flex align-items-stretch mb-5 mb-lg-0">
              <a target="_blank" href="https://youtu.be/VSeTrK3fA8c" rel="noreferrer">
                <div className="icon-box">
                  <div className="post-production-picture">
                    <img src={trs} alt="Trs ziplines in Vik" />
                  </div>
                  <h4 className="title">Zipline super adventure in Vik mountains, Iceland</h4>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-5 d-flex align-items-stretch mb-5 mb-lg-0">
              <a target="_blank" href="https://youtu.be/qih7KL2QBlU" rel="noreferrer">
                <div className="icon-box">
                  <div className="post-production-picture">
                    <img src={offroad} alt="Winter off-road" />
                  </div>
                  <h4 className="title">Skjaldbreiður 1060m Winter off-road in Iceland.</h4>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-5 d-flex align-items-stretch mb-5 mb-lg-0">
              <a target="_blank" href="https://youtu.be/jpCN8evqU8E" rel="noreferrer">
                <div className="icon-box">
                  <div className="post-production-picture">
                    <img src={volcano} alt="Volcano eruption" />
                  </div>
                  <h4 className="title">Volcano eruption - Geldingadalur Iceland 2021</h4>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-5 d-flex align-items-stretch mb-5 mb-lg-0">
              <a target="_blank" href="https://youtu.be/fIsyUaOwhxc" rel="noreferrer">
                <div className="icon-box">
                  <div className="post-production-picture">
                    <img src={iceland} alt="Trs ziplines in Vik" />
                  </div>
                  <h4 className="title">Kerlingarfjöll during a storm. September 2021</h4>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-5 d-flex align-items-stretch mb-5 mb-lg-0">
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCtnIjUpe2EVZbH26p20obnA"
                rel="noreferrer"
              >
                <div className="icon-box">
                  <div className="post-production-picture">
                    <img src={storm} alt="Storm edit logo" />
                  </div>
                  <h4 className="title">See more on my Youtube channel</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
