// node libraries
import { useEffect } from "react";
import Script from "next/script";
import LogRocket from "logrocket";
import { DefaultSeo } from "next-seo";
import { Store } from "../redux/store";
import { Provider } from "react-redux";
// method
import SEO from "../next-seo.config";
import { refreshToken } from '../api/auth/refreshToken';
// components
import General from "../components/utils/General";
import MyLayout from "../components/layout/Layout";
// styles
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import "../styles/General/font-awesome/css/font-awesome.css";
const REFRESH_TOKEN_TIMEOUT = 300000;
function MyApp({ Component, pageProps }) {

  LogRocket.init("umu0mf/nakhl");
  const Layout = Component.Layout || MyLayout;

  useEffect(() => {
    // localStorage.getItem("accessToken") && refreshToken();
    setInterval(() => {
      localStorage.getItem("accessToken") && refreshToken();
    }, REFRESH_TOKEN_TIMEOUT);
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <General />
      <Script id="testChat" strategy="lazyOnload">
        {`
   !function(){var i="TgjSlF",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();
  
  `}
      </Script>
      <Provider store={Store}>
        {/* <ShopLayout> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </ShopLayout> */}
      </Provider>
    </>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
