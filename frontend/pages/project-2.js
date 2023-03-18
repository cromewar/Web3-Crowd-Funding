import Link from "next/dist/client/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import CrowdfundingDropdown from "../src/components/CrowdfundingDropdown";
import { useGetCampaigns } from "../src/web3/useGetCampaigns";
import { useEffect } from "react";
import { ethers } from "ethers";

const Project2 = () => {
  const { campaigns, getCampaigns } = useGetCampaigns();

  useEffect(async () => {
    await getCampaigns();
  }, []);

  const renderedCampaigns = campaigns.map((campaign) => {
    const data = { id: campaign.campaignId.toString() };
    console.log(campaign);
    return (
      <div className="col-xl-10">
        <div className="project-item mb-30">
          <div
            className="thumb"
            style={{
              backgroundImage: `url(${campaign.image})`,
            }}
          />
          <div className="content">
            <div className="cats">
              <Link href="#">{campaign[3]}</Link>
            </div>
            <div className="author">
              <Link href={{ pathname: "/project-details", query: data }}>
                {campaign[1]}
              </Link>
            </div>
            <h5 className="title">
              <Link href={{ pathname: "/project-details", query: data }}>
                {campaign[2]}
              </Link>
            </h5>
            <div className="project-stats">
              <div className="stats-value">
                <span className="value-title">
                  Raised of{" "}
                  <span className="value">
                    {ethers.utils.formatEther(
                      campaign["amountCollected"].toString()
                    )}{" "}
                    ETH
                  </span>
                </span>
                <span className="stats-percentage">
                  {Math.floor(
                    parseInt(
                      ethers.utils.formatEther(
                        campaign["amountCollected"].toString()
                      ) * 100
                    ) / ethers.utils.formatEther(campaign[4].toString())
                  )}
                  %
                </span>
              </div>
              <div className="stats-bar" data-value={93}>
                <div className="bar-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Layout>
      <PageBanner pageName="Explore the Projects" />
      <section className="project-section section-gap-extra-bottom primary-soft-bg">
        <div className="container">
          <div className="row justify-content-center project-items project-style-two">
            <div className="col-xl-10">
              <CrowdfundingDropdown />
            </div>
            {campaigns && renderedCampaigns}

            <div className="col-12">
              <div className="view-more-btn text-center mt-40">
                <Link href="/project-details">
                  <a className="main-btn bordered-btn">
                    View More Project <i className="far fa-arrow-right" />
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

export default Project2;
