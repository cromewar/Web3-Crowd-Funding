import { Fragment, useEffect, useState } from "react";
import Preloader from "../src/layouts/Preloader";
import { Provider } from "react-redux";
import store from "../src/store";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 1000);
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        {preloader && <Preloader />}
        <Component {...pageProps} />
      </Fragment>
    </Provider>
  );
}

export default MyApp;
