import { ethers } from "ethers";

import contractAddresses from "../chain-info/deployments/map.json";
import crowdfundingAbi from "../chain-info/contracts/CrowdFundingV2.json";

export function useCreateProposal() {
  async function createNewProposal(
    owner,
    title,
    description,
    category,
    target,
    deadline,
    image,
    signer
  ) {
    try {
      const proxyContract = contractAddresses["5"]["UpgradeableProxy"][0];
      const crowdfunding = crowdfundingAbi.abi;

      const crowdfundingInstance = new ethers.Contract(
        proxyContract,
        crowdfunding,
        signer
      );

      const tx = await crowdfundingInstance.createCampaign(
        owner,
        title,
        description,
        category,
        target,
        deadline,
        image,
        { gasLimit: 1000000 }
      );

      const transactionReceipt = await tx.wait(1);
    } catch (err) {
      console.log(err);
    }
  }
  return { createNewProposal };
}
