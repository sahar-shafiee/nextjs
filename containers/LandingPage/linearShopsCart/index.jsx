// node libraries
import React, { useEffect, useState } from "react";
// components
import ShopCart from "../../../components/ui/shopCart";
// methods
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// style
import styles from "./HeroSlides.module.scss";

function LinearShopsCart({ part }) {

  const [shopes, setShopes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await ApiRegister().apiRequest(
          null,
          "GET",
          "https://nakhll.com/api/v1/landing/campaign/",
          false,
          {}
        );
        if (response.status === 200) {
          if (part == 1) {
            setShopes(response.data.slice(0, 16));
          } else {
            setShopes(response.data.slice(15));
          }
        }
      } catch (error) {
        return false;
      }
    }
    fetchData();
  }, [part]);

  return (
    <div className="container-full ">
      <div className={styles.wrapcarts}>
        {shopes.map((data, index) => (
          <ShopCart key={index} dataCart={data} />
        ))}
      </div>
    </div>
  );
}

export default LinearShopsCart;
