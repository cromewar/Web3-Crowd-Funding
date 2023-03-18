import { ethers } from "ethers";
import { useState } from "react";

import contractAddresses from "../chain-info/deployments/map.json";
import contractAbi from "../chain-info/contracts/CrowdFundingV2.json";

export function useGetCampaign() {
  const [campaign, setCampaign] = useState([]);

  async function getCampaign(id) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = contractAddresses["5"]["UpgradeableProxy"][0];
      const crowdfunding = contractAbi.abi;

      const crowdfundingInstance = new ethers.Contract(
        contract,
        crowdfunding,
        provider
      );

      const campaignFromContract = await crowdfundingInstance.getCampaign(id);
      setCampaign(campaignFromContract);
    } catch (err) {
      console.log(err);
    }
  }

  return { campaign, getCampaign };
}
