import React from "react";
import { useContext } from "react";
import Assistent from "zaravand-assistent-number";
import ContextProduct from "../../pages/cart/Context/context";

const _asist = new Assistent();

export default function ListCardBuy() {
  // GET "All_product_list_buy" FROM PARENT COMPONENT
  const {
    All_product_list_buy,
    handel_AddProductTOList,
    handel_DeleteProductFromList,
    handel_ReduceProductFromList,
  } = useContext(ContextProduct);

  return (
    <div className="col-12 col-lg-8 mb-3 my-md-3 my-lg-0 order-1 order-md-1 order-lg-0">
      <div className="cart-items mt-2">
        {All_product_list_buy.ordered_items &&
          All_product_list_buy.ordered_items.map((El) => (
            <div className="cart-product-group bg-white">
              <div className="pt-3 pb-1 px-3">
                <span className="font-size1">از غرفه: </span>{" "}
                <a
                  href={El.product.shop.url}
                  className="vendor-link font-size1 font-weight-bold link-body font-weight-normal txtcut"
                >
                  {El.product.shop.title}
                </a>
              </div>

              {/*</mnbvcxz> IF CHANGE IN PRODUCT IN LIST */}

              {/* <div className="align-items-center nakhl-label d-flex justify-content-between mx-3 mt-3 p-2 rounded  border border-danger text-danger">
                <div className="mb-0 pr-2 font-size-sm">
                  <div style={{ fontSize: "15px", fontWeight: "400" }}>
                    از محصول روان نویس (خودکار) یونیکورن (اسب تک شاخ)به اندازه
                    کافی موجود نمی‌باشد
                  </div>
                  <div>قیمت محصول تغییر کرده است</div>
                </div>{" "}
                <span className="dd-flex align-items-center mr-2 pointer font-size-sm text-nowrap">
                  حذف
                  <i
                    className="fas fa-times-circle"
                    style={{ fontSize: "20px", marginRight: "5px" }}
                  ></i>
                </span>
              </div> */}

              {/*^^^^^^^^^^^ IF CHANGE IN PRODUCT IN LIST ^^^^^^^^^^^*/}

              <div className="p-3 mt-2 cart-product-item">
                <div className="spinner spinner--medium"></div>
                <div className="d-flex flex-wrap justify-content-between">
                  <div className="d-flex w-100">
                    <a
                      href="/ali_goharrizi/product/746256?from=cart&amp;component=cart"
                      className="product-link"
                    >
                      <img
                        src="https://statics.basalam.com/public/users/13no0/2011/lW23nVJv4TiBsDxfJEKruxOpDVze1bTQSAHtqjHg.jpeg_256X256X70.jpeg"
                        className="cart-product-item-img rounded"
                      />
                    </a>
                    <div className="d-flex flex-column justify-content-between mr-3 w-100 overflow-hidden">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <a
                          href={El.product.url}
                          className="product-link d-block font-size1 link-body font-weight-bold text-truncate"
                        >
                          {_asist.number(El.product.title)}
                        </a>
                        <i
                          className="fas fa-times-circle"
                          style={{
                            fontSize: "20px",
                            marginRight: "5px",
                            fontSize: "25px",
                            color: "#1b3e68",
                            cursor: "pointer",
                          }}
                          onClick={() => handel_DeleteProductFromList(El.id)}
                        ></i>
                      </div>
                      <div className="cart-product-item-remain-stock"></div>
                      <div
                        className={`nakhl-label mr-auto small teaberry-light ${
                          El.product.discount == 0 && "opacity_none"
                        }`}
                      >
                        {_asist.number(El.product.discount)}
                        <span> %</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div
                          className="mt-2 d-flex align-items-center"
                          style={{ witheSpace: "nowrap" }}
                        >
                          <div
                            className="quantity-box input-group input-group-sm"
                            style={{ width: "7rem", alignItems: "center" }}
                          >
                            <div className="input-group-prepend">
                              <button className="btn  plus-minus-icon">
                                <i
                                  style={{
                                    fontSize: "25px",
                                    color: "#1b3e68 ",
                                  }}
                                  className="fas fa-plus-square"
                                  onClick={() =>
                                    handel_AddProductTOList(El.product.id)
                                  }
                                ></i>
                              </button>
                            </div>
                            <input
                              min="0"
                              type="text"
                              disabled="disabled"
                              value={_asist.number(El.count)}
                              className="bg-white border-0 font-size1-2 font-weight-bold form-control mt-1 px-1 text-center"
                            />
                            <div className="input-group-append">
                              <button className="btn  plus-minus-icon">
                                <i
                                  style={{
                                    fontSize: "25px",
                                    color: "#91a6c1 ",
                                  }}
                                  className="fas fa-minus-square"
                                  onClick={() =>
                                    handel_ReduceProductFromList(El.id)
                                  }
                                ></i>
                              </button>
                            </div>
                          </div>
                          <span className="d-inline-block font-size-9 mr-3 pointer">
                            {" "}
                            {/* حذف؟{" "} */}
                          </span>
                        </div>
                        <div className="mr-auto">
                          <span
                            className={`cart-product-item-primary-price ${
                              El.product.discount == 0 && "opacity_none"
                            }`}
                          >
                            {_asist.PSeparator(El.total_old_price / 10)}
                          </span>{" "}
                          <span className="font-weight-bold">
                            {_asist.PSeparator(El.total_price / 10)}
                          </span>{" "}
                          <span>تومان</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="v-portal" style={{ display: "none" }}></div>
              </div>
            </div>
          ))}

        {/* <div className="cart-product-group bg-white">
          <div className="pt-3 pb-1 px-3">
            <span className="font-size1">از غرفه: </span>{" "}
            <a
              href="/pestehkerman"
              className="vendor-link font-size1 font-weight-bold link-body font-weight-normal txtcut"
            >
              پسته خندان
            </a>
          </div>

          <div className="p-3 mt-2 cart-product-item">
            <div className="spinner spinner--medium"></div>
            <div className="d-flex flex-wrap justify-content-between">
              <div className="d-flex w-100">
                <a
                  href="/pestehkerman/product/175903?from=cart&amp;component=cart"
                  className="product-link"
                >
                  <img
                    src="https://statics.basalam.com/public/users/j2ggy/1911/n41s9awDlcLoiKAF6oWQwo3MopX4cnDJzZHgE3Do.jpeg_256X256X70.jpeg"
                    className="cart-product-item-img rounded"
                  />
                </a>
                <div className="d-flex flex-column justify-content-between mr-3 w-100 overflow-hidden">
                  <div>
                    <a
                      href="/pestehkerman/product/175903?from=cart&amp;component=cart"
                      className="product-link d-block font-size1 link-body font-weight-bold text-truncate"
                    >
                      پسته فندقی خام تازه و امسالی کرمان (250گرمی)
                    </a>
                  </div>
                  <div className="cart-product-item-remain-stock"></div>
                  <div className="nakhl-label mr-auto small teaberry-light">
                    21%
                  </div>
                  <div className="d-flex align-items-center">
                    <div
                      className="mt-2 d-flex align-items-center"
                      style={{ witheSpace: "nowrap" }}
                    >
                      <div
                        className="quantity-box input-group input-group-sm"
                        style={{ width: "7rem" }}
                      >
                        <div className="input-group-prepend">
                          <button className="btn btn-outline-transparent plus-minus-icon">
                            <i className="bi bi-plus"></i>
                          </button>
                        </div>
                        <input
                          min="0"
                          type="text"
                          disabled="disabled"
                          value="1"
                          className="bg-white border-0 font-size1-2 font-weight-bold form-control mt-1 px-1 text-center"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-outline-transparent plus-minus-icon">
                            <i className="bi bi-minus"></i>
                          </button>
                        </div>
                      </div>
                      <span className="d-inline-block font-size-9 mr-3 pointer">
                        {" "}
                        حذف؟{" "}
                      </span>
                    </div>
                    <div className="mr-auto">
                      <span className="cart-product-item-primary-price">
                        95,000
                      </span>{" "}
                      <span className="font-weight-bold">75,000</span>{" "}
                      <i className="bi bi-toman font-size1-5 font-weight-500"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="v-portal" style={{ display: "none" }}></div>
          </div>
          <div className="p-3 mt-2 cart-product-item">
            <div className="spinner spinner--medium"></div>
            <div className="d-flex flex-wrap justify-content-between">
              <div className="d-flex w-100">
                <a
                  href="/pestehkerman/product/175905?from=cart&amp;component=cart"
                  className="product-link"
                >
                  <img
                    src="https://statics.basalam.com/public/users/j2ggy/1911/9eAmvLJvRqGiTkECMFyKyCDMWf5MYdaMNfglHT0f.jpeg_256X256X70.jpeg"
                    className="cart-product-item-img rounded"
                  />
                </a>
                <div className="d-flex flex-column justify-content-between mr-3 w-100 overflow-hidden">
                  <div>
                    <a
                      href="/pestehkerman/product/175905?from=cart&amp;component=cart"
                      className="product-link d-block font-size1 link-body font-weight-bold text-truncate"
                    >
                      پسته فندقی خام تازه و امسالی کرمان ارسال رایگان(500 گرم)
                    </a>
                  </div>
                  <div className="cart-product-item-remain-stock"></div>
                  <div className="nakhl-label mr-auto small teaberry-light">
                    26%
                  </div>
                  <div className="d-flex align-items-center">
                    <div
                      className="mt-2 d-flex align-items-center"
                      style={{ witeSpace: "nowrap" }}
                    >
                      <div
                        className="quantity-box input-group input-group-sm"
                        style={{ width: "7rem" }}
                      >
                        <div className="input-group-prepend">
                          <button className="btn btn-outline-transparent plus-minus-icon">
                            <i className="bi bi-plus"></i>
                          </button>
                        </div>
                        <input
                          min="0"
                          type="text"
                          disabled="disabled"
                          value="2"
                          className="bg-white border-0 font-size1-2 font-weight-bold form-control mt-1 px-1 text-center"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-outline-transparent plus-minus-icon">
                            <i className="bi bi-minus"></i>
                          </button>
                        </div>
                      </div>
                      <span className="d-inline-block font-size-9 mr-3 pointer">
                        {" "}
                        حذف؟{" "}
                      </span>
                    </div>
                    <div className="mr-auto">
                      <span className="cart-product-item-primary-price">
                        312,000
                      </span>{" "}
                      <span className="font-weight-bold">230,000</span>{" "}
                      <i className="bi bi-toman font-size1-5 font-weight-500"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="v-portal" style={{ display: "none" }}></div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
