import { useState } from "react";
import { ethers } from "ethers";
import { useDispatch } from "react-redux";

export function useMetamaskState() {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState();
  const [signer, setSigner] = useState();
  const dispatch = useDispatch();

  async function connectToMetamask(event) {
    event.preventDefault();
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const acc = await provider.send("eth_requestAccounts", []);
      const sign = provider.getSigner(acc[0]);
      setIsConnected(true);
      setAccount(acc[0]);
      setSigner(sign);
      dispatch({ type: "SET_ACCOUNT", payload: sign });
    } catch (err) {
      console.log(err);
    }
  }

  return { isConnected, account, signer, connectToMetamask };
}
