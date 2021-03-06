import { getServerSideSitemap } from "next-sitemap";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";

export const getServerSideProps = async (ctx) => {
  let response = await ApiRegister().apiRequest(
    null,
    "Get",
    "https://nakhll.com/api/v1/util/shops/",
    false,
    ""
  );
  let fields = [];
  if (response.status == "200") {
    let ans = [...response.data];
    fields = ans.map((el) => ({
      loc: `https://nakhll.com/shop/${el.Slug}/`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: "0.9",
    }));
    ans.map((el) => {
      if (el.products.length > 0) {
        el.products.map((product) => {
          let newObj = {
            loc: `https://nakhll.com/shop/${el.Slug}/product/${product}/`,
            lastmod: new Date().toISOString(),
            changefreq: "daily",
            priority: "0.9",
          };
          fields.push(newObj);
        });
      }
    });
  }

  return getServerSideSitemap(ctx, fields);
};

export default function Site() { }
