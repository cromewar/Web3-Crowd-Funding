import Link from "next/dist/client/link";
import { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";
import { getPagination, pagination } from "../src/utils";

const NewsStandard = () => {
  const [video, setVideo] = useState(false);
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".post-item", sort, active);
    let list = document.querySelectorAll(".post-item");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner pageName="News Standard" />
      <section className="blog-area section-gap-extra-bottom primary-soft-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-post-loop">
                <div className="post-item">
                  <div className="post-thumbnail">
                    <img src="assets/img/blog/01.jpg" alt="Thumbnail" />
                  </div>
                  <div className="post-content">
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" />
                          Funden
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" />
                          25 February 2021
                        </a>
                      </li>
                    </ul>
                    <h3 className="title">
                      <Link href="/news-details">
                        <a>
                          Live Stream From Awwwards Berlin Showcasing Was Trends
                          Design China Money Dating
                        </a>
                      </Link>
                    </h3>
                    <Link href="/news-details">
                      <a className="post-link">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="post-item video-post">
                  <div className="post-thumbnail">
                    <img src="assets/img/blog/02.jpg" alt="Thumbnail" />
                    <a
                      href="#"
                      className="video-popup"
                      onClick={() => setVideo(true)}
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <div className="post-content">
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" />
                          Funden
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" />
                          25 February 2021
                        </a>
                      </li>
                    </ul>
                    <h3 className="title">
                      <Link href="/news-details">
                        <a>
                          User Memory Design How To Design For Experiences That
                          LastLive Stream From Awwwards
                        </a>
                      </Link>
                    </h3>
                    <Link href="/news-details">
                      <a className="post-link">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="post-item">
                  <div className="post-thumbnail">
                    <img src="assets/img/blog/03.jpg" alt="Thumbnail" />
                  </div>
                  <div className="post-content">
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" />
                          Funden
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" />
                          25 February 2021
                        </a>
                      </li>
                    </ul>
                    <h3 className="title">
                      <Link href="/news-details">
                        <a>
                          User Memory Design How To Design For Experiences That
                          LastLive Stream From Awwwards
                        </a>
                      </Link>
                    </h3>
                    <Link href="/news-details">
                      <a className="post-link">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="post-item thumbnail-as-bg">
                  <div className="post-thumbnail">
                    <img src="assets/img/blog/04.jpg" alt="Thumbnail" />
                  </div>
                  <div className="post-content">
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" />
                          Funden
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" />
                          25 February 2021
                        </a>
                      </li>
                    </ul>
                    <h3 className="title">
                      <Link href="/news-details">
                        <a>
                          Roadmap To Building A Delightful Onboarding Experience
                          For Mobile App Users Patterns Canvas
                        </a>
                      </Link>
                    </h3>
                    <Link href="/news-details">
                      <a className="post-link">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="post-item no-thumbnail">
                  <div className="post-content">
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" />
                          Funden
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" />
                          25 February 2021
                        </a>
                      </li>
                    </ul>
                    <h3 className="title">
                      <Link href="/news-details">
                        <a>
                          Getting (Dis)Connected Shallow Interaction Design For
                          Deeper Human Experiences
                        </a>
                      </Link>
                    </h3>
                    <Link href="/news-details">
                      <a className="post-link">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <ul className="pagination">
                <li className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(active === 1 ? 1 : active - 1);
                    }}
                  >
                    <i className="far fa-angle-left" />
                  </a>
                </li>
                {state &&
                  state.map((s, i) => (
                    <li
                      className={`page-item ${active === s ? "active" : ""}`}
                      key={i}
                    >
                      <a
                        className="page-link"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(s);
                        }}
                      >
                        {s > 9 ? s : `0${s}`}
                      </a>
                    </li>
                  ))}

                <li className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(
                        active === state.length ? state.length : active + 1
                      );
                    }}
                  >
                    <i className="far fa-angle-right" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="blog-sidebar">
                <div className="widget search-widget">
                  <h4 className="widget-title">Search Here</h4>
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input type="text" placeholder="Keywoards" />
                    <button>
                      <i className="fas fa-search" />
                    </button>
                  </form>
                </div>
                <div className="widget category-widget">
                  <h4 className="widget-title">Category</h4>
                  <ul>
                    <li>
                      <Link href="/news-standard">
                        <a>
                          Business (5) <i className="far fa-angle-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/news-standard">
                        <a>
                          Construction (7) <i className="far fa-angle-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/news-standard">
                        <a>
                          Creative (9) <i className="far fa-angle-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/news-standard">
                        <a>
                          International (2) <i className="far fa-angle-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/news-standard">
                        <a>
                          Management (5) <i className="far fa-angle-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/news-standard">
                        <a>
                          Technology (2) <i className="far fa-angle-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/news-standard">
                        <a>
                          Uncategorized (3) <i className="far fa-angle-right" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="widget latest-blog-widget">
                  <h4 className="widget-title">Latest News</h4>
                  <ul>
                    <li>
                      <div className="thumb">
                        <img
                          src="assets/img/latest-news/widget-01.jpg"
                          alt="Image"
                        />
                      </div>
                      <div className="desc">
                        <h6>
                          <Link href="/news-details">
                            <a>Build Seamless Spreads Import Experience</a>
                          </Link>
                        </h6>
                        <span className="date">
                          <i className="far fa-calendar-alt" />
                          25 May 2021
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="thumb">
                        <img
                          src="assets/img/latest-news/widget-02.jpg"
                          alt="Image"
                        />
                      </div>
                      <div className="desc">
                        <h6>
                          <Link href="/news-details">
                            <a>Creating Online Environ Work Well Older</a>
                          </Link>
                        </h6>
                        <span className="date">
                          <i className="far fa-calendar-alt" />
                          25 May 2021
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="thumb">
                        <img
                          src="assets/img/latest-news/widget-03.jpg"
                          alt="Image"
                        />
                      </div>
                      <div className="desc">
                        <h6>
                          <Link href="/news-details">
                            <a>Signs Website Feelore Haunted House</a>
                          </Link>
                        </h6>
                        <span className="date">
                          <i className="far fa-calendar-alt" />
                          25 May 2021
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget tags-widget">
                  <h4 className="widget-title">Popular Tags</h4>
                  <ul>
                    <li>
                      <Link href="/news-standard">Lawyer</Link>
                    </li>
                    <li>
                      <Link href="/news-standard">Crowd</Link>
                    </li>
                    <li>
                      <Link href="/news-standard">Funding</Link>
                    </li>
                    <li>
                      <Link href="/news-standard">consultancy</Link>
                    </li>
                    <li>
                      <Link href="/news-standard">Law farms</Link>
                    </li>
                    <li>
                      <Link href="/news-standard">management</Link>
                    </li>
                    <li>
                      <Link href="/news-standard">planning</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget cta-widget">
                  <div className="cta-content">
                    <h4 className="title">
                      Get Free <br /> Consultations
                    </h4>
                    <span className="subtitle">Special advisors</span>
                    <p>Quis autem vel eum iure repreh ende</p>
                    <a href="#" className="cta-button">
                      Get a Quoate
                    </a>
                    <div className="cta-img">
                      <img src="assets/img/cta/cta-widget.jpg" alt="Image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsStandard;
