import "../styles/style.js"
import "../styles/defaults.css"
import { storeWrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }

  export default storeWrapper.withRedux(MyApp);