import Link from "next/dist/client/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const Events = () => {
  return (
    <Layout>
      <PageBanner pageName="Events" />
      <section className="event-area section-gap-extra-bottom">
        <div className="container">
          <div className="event-items">
            <div
              className="single-event-item mb-30 wow fadeInUp"
              data-wow-delay="0s"
            >
              <div className="event-content">
                <ul className="meta">
                  <li>
                    <Link href="/project-1">
                      <a className="category">New Version</a>
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="date">
                      New Features Added to the Smart Contract
                    </a>
                  </li>
                </ul>
                <h4 className="event-title">
                  <Link href="/project-details">
                    New Features &amp; Changes
                  </Link>
                </h4>
                <p>
                  New Functionalities and changes has been made on the smart
                  contract for the crowdfunding platform.
                </p>
              </div>
              <div className="event-button">
                <Link href="/project-details">
                  <a className="main-btn bordered-btn">
                    Details <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
