import Link from "next/dist/client/link";
import { useState } from "react";
import Counter from "../src/components/Counter";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";

const Index2 = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout transparentHeader topSecondaryBg>
      {video && <VideoPopup close={setVideo} />}
      <section className="hero-area-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-8 col-sm-11">
              <div className="hero-text">
                <h1 className="title wow fadeInLeft" data-wow-delay="0.2s">
                  Get Funding for your Web3 Projects
                </h1>
                <p className="wow fadeInLeft" data-wow-delay="0.3s">
                  Create a proposal and make your Dapp Idea into a Reality.
                </p>
                <ul className="hero-btn">
                  <li className="wow fadeInUp" data-wow-delay="0.4s">
                    <Link href="/project-2">
                      <a className="main-btn">
                        Explore Projects <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-8 col-sm-10 mx-auto wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <div className="hero-img text-lg-right">
                <img src="assets/img/hero/crowd.png" alt="Img" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="dot-one" />
          <div className="dot-two" />
        </div>
      </section>
      {/*====== Hero Area End ======*/}
      {/*====== About Section Start ======*/}
      <section className="about-section-two">
        <div className="about-form-area">
          <div className="container">
            <div className="about-donation-form">
              <div className="donation-heading">
                <h3 className="title">Raise Your Hand</h3>
                <span className="shadow-text">Support</span>
              </div>
              <form onSubmit={(e) => e.preventDefault()} action="#">
                <div className="form-wrap">
                  <ul className="donation-amount">
                    <li>0.1 ETH</li>
                    <li>0.25 ETH</li>
                    <li>0.5 ETH</li>
                    <li>0.75 ETH</li>
                    <li>1 ETH</li>
                  </ul>
                  <Link href="/project-2">
                    <a type="submit" className="main-btn btn-white">
                      Donate Now <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </form>
            </div>
            <div
              className="about-video wow fadeInDown"
              data-wow-delay="0.2s"
            ></div>
          </div>
        </div>
        <div className="about-text-area">
          <div className="container">
            <div className="row align-items-end justify-content-xl-start">
              <div className="col-xl-5 col-lg-7 col-md-8 order-xl-2">
                <div className="about-text">
                  <div className="common-heading mb-30">
                    <span className="tagline">
                      <i className="fas fa-plus" /> About us
                      <span className="heading-shadow-text">About Us</span>
                    </span>
                    <h2 className="title">
                      We help to fundrise Crypto Projects
                    </h2>
                  </div>
                  <p>
                    Take you Decentralized Application idea to the next level,
                    engage with the community and build the future of the web!
                  </p>
                  <ul className="check-list mt-30">
                    <li>
                      <h5 className="title">
                        Trusted Platform amongst Developoers
                      </h5>
                      <p>
                        Most of web3 dev select Moralis Funding as their
                        prefered choice
                      </p>
                    </li>
                    <li>
                      <h5 className="title">Raise Funds With Crowdfunding</h5>
                      <p>
                        Create a new proposal and transform your ideas into
                        reality
                      </p>
                    </li>
                    <li>
                      <h5 className="title">Millions in Funding</h5>
                      <p>
                        Moralis funding has raised mora than $4.7 million
                        dollars on funding for projects.
                      </p>
                    </li>
                  </ul>
                  <a href="https://moralis.io" target="_blank">
                    <a className="main-btn btn-dark mt-40">
                      Learn More <i className="far fa-arrow-right" />
                    </a>
                  </a>
                </div>
              </div>
              <div className="col-xl-5 order-xl-1 wow fadeInUp">
                <div className="about-curved-img">
                  <img src="assets/img/about/wizard.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape">
          <img src="assets/img/about/about-shape.png" alt="Shape" />
        </div>
      </section>
      {/*====== About Section End ======*/}

      {/*====== Counter With Image Text Block Start ======*/}
      <section className="counter-with-image-text-block">
        <div className="image-text-block-area"></div>
        <div className="counter-boxes-area primary-soft-bg">
          <div className="container">
            <div className="row counter-boxes justify-content-lg-between justify-content-center">
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <i className="flaticon-crowdfunding" />
                  </div>
                  <div className="content">
                    <div className="count-wrap">
                      <Counter end={3256} />
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">Projects Funded</h6>
                    <p>
                      We helped to fundrise
                      <br /> thousands of projects worldwide
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <i className="flaticon-ecological" />
                  </div>
                  <div className="content">
                    <div className="count-wrap">
                      <Counter end={328} />
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">Trusted Global Partners</h6>
                    <p>
                      We work with leading edge
                      <br /> web3 startups
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <i className="flaticon-badges" />
                  </div>
                  <div className="content">
                    <div className="count-wrap">
                      <Counter end={187} />
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">Global Awards Winning</h6>
                    <p>
                      Our projects won a lot <br /> prizes and recognition
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <i className="flaticon-support" />
                  </div>
                  <div className="content">
                    <div className="count-wrap">
                      <Counter end={890} />
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">Active Volunteers</h6>
                    <p>
                      Engage with one of the largest <br /> community of
                      developers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Counter With Image Text Block End ======*/}

      {/*====== Footer Start ======*/}
    </Layout>
  );
};

export default Index2;
