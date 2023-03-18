import { useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

import { useCreateProposal } from "../web3/useCreateNewProposal";
import { useSelector } from "react-redux";

function CrowdfundingForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [deadline, setDeadline] = useState("");
  const [image, setImage] = useState(null);
  const [ipfsUrl, setIpfsUrl] = useState("");
  const store = useSelector((state) => state);

  const [fileName, setFileName] = useState("");

  // hooks variables

  const { createNewProposal } = useCreateProposal();

  // Check if all the fields are filled
  const isFormFilled =
    title && description && category && amount && deadline && image;

  // Disable the submit button if any of the fields is empty
  const isSubmitDisabled = !isFormFilled;

  // Transform amoutn to ethers
  const transforToEthers = (amount) => {
    return ethers.utils.parseEther(amount);
  };

  const unixTimeStamp = (deadline) => {
    return Date.parse(deadline) / 1000;
  };

  const sendImageToIpfs = async (image) => {
    await axios({
      method: "POST",
      url: "http://127.0.0.1:8000/upload_img/",
      data: {
        path: `image/${fileName}`,
        content: image,
      },
    })
      .then((res) => {
        setIpfsUrl(res.data[0].path);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    sendImageToIpfs(image);

    const ethAmount = transforToEthers(amount);
    const unixDeadline = unixTimeStamp(deadline);
    createNewProposal(
      store.signer._address,
      title,
      description,
      category,
      ethAmount,
      unixDeadline,
      ipfsUrl,
      store.signer
    );
  };

  return (
    <div>
      <h2>Create a Crowdfunding Campaign</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">Select a category</option>
            <option value="DeFi">DeFi</option>
            <option value="NFT">NFT</option>
          </select>
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="deadline">Deadline:</label>
          <input
            type="date"
            id="deadline"
            value={deadline}
            onChange={(event) => setDeadline(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <div className="image-upload">
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                  const base64String = reader.result
                    .replace("data:", "")
                    .replace(/^.+,/, "");
                  setImage(base64String);
                  setFileName(file.name);
                };
              }}
            />
            <label htmlFor="image" className="custom-file-upload">
              Upload Image
            </label>
            {fileName && <span>{fileName}</span>}
          </div>
        </div>
        <button
          type="submit"
          className="new-campaign-btn"
          disabled={isSubmitDisabled}
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default CrowdfundingForm;
