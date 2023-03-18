import Link from "next/dist/client/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { useRouter } from "next/router";
import { useGetCampaign } from "../src/web3/useGetCampaign";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useDonateToProposal } from "../src/web3/useDonateToProposal";
import { useSelector } from "react-redux";

const ProjectDetails = () => {
  const router = useRouter();
  const [donationValue, setDonationValue] = useState(0);

  const { campaign, getCampaign } = useGetCampaign();
  const { donate } = useDonateToProposal();
  const store = useSelector((state) => state);

  useEffect(async () => {
    await getCampaign(router.query.id);
  }, []);

  const calculateTimeLeft = (date) => {
    const currentDate = new Date();
    const diff = currentDate.getTime() - date * 1000;
    const diffInDays = Math.floor(diff / 86400000) * -1;
    return diffInDays;
  };

  // handle input change to set donation value
  const handleInputChange = (e) => {
    setDonationValue(e.target.value);
  };

  return (
    <Layout>
      <PageBanner pageName="Project Details" />
      <section className="project-details-area section-gap-extra-bottom">
        {campaign.length > 0 ? (
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="project-thumb mb-md-50">
                  <img src={campaign[7]} alt="Image" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="project-summery">
                  <Link href="/project-1">
                    <a className="category">{campaign[3]}</a>
                  </Link>
                  <h3 className="project-title">{campaign[2]}</h3>
                  <div className="meta">
                    <div className="author">
                      <a href="#">{campaign[1]}</a>
                    </div>
                  </div>
                  <div className="project-funding-info">
                    <div className="info-box">
                      <span>{campaign[4].toString().slice(0, -18)}</span>
                      <span className="info-title">Pledged</span>
                    </div>
                    <div className="info-box">
                      <span>{campaign[8].length}</span>
                      <span className="info-title">Backers</span>
                    </div>
                    <div className="info-box">
                      <span>
                        {calculateTimeLeft(campaign[5].toString()) > 0
                          ? calculateTimeLeft(campaign[5].toString())
                          : "0"}
                      </span>
                      <span className="info-title">Days Left</span>
                    </div>
                  </div>
                  <div className="project-raised clearfix">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="raised-label">
                        {campaign[9].length > 0
                          ? ethers.utils.formatEther(campaign[6].toString())
                          : 0}{" "}
                        ETH
                      </div>
                      <div className="percent-raised">
                        {campaign[9].length > 0
                          ? Math.floor(
                              parseInt(
                                ethers.utils.formatEther(
                                  campaign[6].toString()
                                ) * 100
                              ) /
                                ethers.utils.formatEther(campaign[4].toString())
                            )
                          : 0}
                        %
                      </div>
                    </div>
                    <div
                      className="stats-bar"
                      data-value={
                        campaign[9] > 0
                          ? Math.floor(
                              parseInt(
                                ethers.utils.formatEther(
                                  campaign[9].toString()
                                ) * 100
                              ) /
                                ethers.utils.formatEther(campaign[4].toString())
                            )
                          : 0
                      }
                    >
                      <div className="bar-line" />
                    </div>
                  </div>
                  <div className="project-form">
                    <form onSubmit={(e) => e.preventDefault()} action="#">
                      <input
                        className="donation-amount"
                        name="donation-amount"
                        id="donation-amount"
                        defaultValue={0}
                        onChange={handleInputChange}
                      />
                      <button
                        type="submit"
                        className="main-btn"
                        onClick={() => {
                          // console.log(store.signer);
                          // console.log(router.query.id);

                          const value = ethers.utils.parseEther(donationValue);

                          donate(router.query.id, store.signer, value);
                        }}
                      >
                        Donate Now <i className="far fa-arrow-right" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </section>
    </Layout>
  );
};

export default ProjectDetails;
