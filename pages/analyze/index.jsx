import { useEffect, useState } from "react";
import Head from "next/head";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import _ from "lodash";
import st from "./analyze.module.scss";

function Analyze() {
  const [Shops, setShops] = useState([]);
  const [countProduct, setCountProduct] = useState("");
  const [superShop, setSuperShop] = useState("");
  const [diedShop, setDiedShop] = useState("");
  const [isDes, setIsDes] = useState(false);

  const _handel_count_products = (Shops) => {
    let num = 0;
    Shops.map((el) => {
      num += el.num;
    });
    setCountProduct(num);
  };
  const _handel_status_shop = (shops) => {
    let diedShop = 0;
    let superShop = 0;
    shops.map((el) => {
      if (el.num >= 20) {
        superShop += 1;
      }
      if (el.num <= 5) {
        diedShop += 1;
      }
    });
    setSuperShop(superShop);
    setDiedShop(diedShop);
  };
  const _handel_sort = () => {
    let array = [...Shops];
    let arraySort = [];
    if (!isDes) {
      arraySort = _.orderBy(array, "num", "desc");
      setIsDes(true);
    }
    if (isDes) {
      arraySort = _.orderBy(array, "num", "asc");
      setIsDes(false);
    }

    setShops(arraySort);
  };
  useEffect(() => {
    async function fetchData() {
      let response = await ApiRegister().apiRequest(
        null,
        "Get",
        "https://nakhll.com/api/v1/util/shops/",
        false,
        ""
      );
      console.log(`response`, response);
      if (response.status == 200) {
        let shopArray = [];
        response.data.map((el) => {
          let oneShop = {
            shop: el.Slug,
            num: el.products.length,
          };
          shopArray.push(oneShop);
        });

        setShops(shopArray);
        _handel_count_products(shopArray);
        _handel_status_shop(shopArray);
      }
    }
    // fetchData();
  }, []);
  //
  return (
    <>
      <Head>
        <title>آنالیز</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      {false && (
        <div className="container pt-5">
          <div className={st.wrap_summery}>
            <span>تعداد حجره ها</span>
            <span>{Shops.length}</span>
            <span>تعداد کالاها</span>
            <span>{countProduct}</span>
          </div>
          <div
            style={{ background: "rgb(248, 222, 182)" }}
            className={st.wrap_summery}
          >
            <span style={{ color: "red" }}>
              {" "}
              حجره دار مرده
              <span style={{ fontSize: "12px", paddingRight: "5px" }}>
                زیر ۵ کالا
              </span>
            </span>
            <span style={{ color: "red" }}>{diedShop}</span>
            <span style={{ color: "green" }}>
              سوپر حجره
              <span style={{ fontSize: "12px", paddingRight: "5px" }}>
                بالای ۳۰ کالا
              </span>
            </span>
            <span style={{ color: "green" }}>{superShop}</span>
          </div>
          {/* نمودار */}
          <h1>نمودار</h1>

          <div className={st.wrap_table}>
            <table
              style={{ overflow: "hidden", borderRadius: "10px" }}
              className="table table-striped"
            >
              <thead>
                <tr>
                  <th
                    style={{
                      overflow: "hidden",
                      borderTopRightRadius: "10px",
                      borderBottomRightRadius: "10px",
                    }}
                    scope="col"
                  >
                    عنوان
                  </th>
                  <th scope="col">حجره</th>
                  <th scope="col">
                    <div className="flex">
                      محصولات
                      <button
                        onClick={_handel_sort}
                        style={{ marginRight: "10px", cursor: "pointer" }}
                      >
                        <i className="fas fa-sort"></i>
                      </button>
                    </div>
                  </th>
                  <th
                    style={{
                      overflow: "hidden",
                      borderTopLeftRadius: "10px",
                      borderBottomLeftRadius: "10px",
                    }}
                    scope="col"
                  >
                    وضعیت
                  </th>
                </tr>
              </thead>
              <tbody style={{ borderTop: "none" }}>
                {Shops.map((el, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td style={{ cursor: "pointer" }}>
                      <a
                        href={` /shop/${el.shop}/`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {el.shop}
                      </a>
                    </td>
                    <td>{el.num}</td>
                    <td
                      style={{
                        background:
                          el.num <= 5 ? "red" : el.num > 30 ? "green" : null,
                      }}
                    ></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default Analyze;
