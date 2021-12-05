// node libraries
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Assistent from "zaravand-assistent-number";
// style
import styles from "../../styles/components/shopLayout/footer.module.scss";

const _asist = new Assistent();

const Footer = () => {
  const userData = useSelector((state) => state.User.userInfo);

  const _handel_according = (accord, icon) => {
    let element = document.getElementById(accord);
    if (element.style.height == "0px") {
      element.style.height = "unset";
      document.getElementById(icon).className = "fas fa-angle-down";
    } else {
      element.style.height = "0";
      element.style.overflow = "hidden";
      document.getElementById(icon).className = "fas fa-angle-up";
    }
  };

  const router = useRouter();
  return (
    <>
      {!router.pathname.startsWith("/cart") && (
        <>
          <div className="container">
            <div className="row d-none d-lg-flex pt-4">
              <div className="col-6">
                <div className="row">
                  <div className="col-4 col-4 d-flex flex-column">
                    <div className="font-lg-size1-1 font-weight-500 pb-4">
                      نخل
                    </div>{" "}
                    <div>
                      <Link href="https://nakhll.com/blog/">
                        <a className={styles.footer_items}>وبلاگ</a>
                      </Link>
                    </div>
                    <div>
                      <Link href="https://nakhll.com/blog/%d9%86%d8%ae%d9%84%d8%8c-%d8%a8%d8%a7%d8%b2%d8%a7%d8%b1%db%8c-%d8%a7%d8%ac%d8%aa%d9%85%d8%a7%d8%b9%db%8c-%d9%88-%d8%a2%d9%86%d9%84%d8%a7%db%8c%d9%86/">
                        <a className={styles.footer_items}>داستان نخل</a>
                      </Link>
                    </div>
                    <div>
                      <Link href="https://nakhll.com/blog/%d8%aa%d9%85%d8%a7%d8%b3-%d8%a8%d8%a7-%d9%85%d8%a7/">
                        <a className={styles.footer_items}>تماس با ما</a>
                      </Link>
                    </div>
                    <div>
                      <Link href="https://nakhll.com/blog/%d8%b4%d8%b1%d8%a7%db%8c%d8%b7-%d9%88-%d8%b6%d9%88%d8%a7%d8%a8%d8%b7/">
                        <a className={styles.footer_items}>
                          قوانین و شرایط استفاده
                        </a>
                      </Link>
                    </div>{" "}
                    <div className={styles.footer_social_icon}>
                      <a
                        href="https://www.linkedin.com/company/nakhll/"
                        target="_blank"
                        aria-label="لینکدین"
                      >
                        <i
                          style={{ fontSize: "30px" }}
                          className="fab fa-linkedin"
                        ></i>
                      </a>

                      <a
                        style={{ width: "30px" }}
                        href="https://www.aparat.com/nakhll"
                        target="_blank"
                        aria-label="آپارات بازار اجتماعی نخل"
                      >
                        <Image
                          src="/icons/footer/aparat.png"
                          layout="responsive"
                          width={200}
                          height={200}
                        />
                      </a>

                      <a
                        href="https://www.instagram.com/nakhll_com/"
                        target="_blank"
                        aria-label="اینستاگرام"
                        style={{ fontSize: "30px", display: "flex" }}
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-4 col-4 d-flex flex-column">
                    <div className="font-lg-size1-1 font-weight-500 pb-4">
                      پشتیبانی
                    </div>{" "}
                    <div>
                      <a
                        href="tel://034-32476561"
                        className={styles.footer_items}
                      >
                        تلفن تماس:
                        <span className="d-inline-block">
                          {_asist.number(`034-32476561  034-91001230`)}
                        </span>
                      </a>
                    </div>
                    {/* <div>
                      <a to="" href="" className={styles.footer_items}>
                        پشتیبانی آنلاین
                      </a>
                    </div> */}
                    <div>
                      <Link href="/profile">
                        <a className={styles.footer_items}>پیگیری سفارشات</a>
                      </Link>
                    </div>
                    <div>
                      <Link href="https://nakhll.com/blog/%d8%b3%d9%88%d8%a7%d9%84%d8%a7%d8%aa-%d9%be%d8%b1-%d8%aa%da%a9%d8%b1%d8%a7%d8%b1/">
                        <a className={styles.footer_items}>
                          پاسخ به سوالات پرتکرار
                        </a>
                      </Link>
                    </div>{" "}
                  </div>
                  <div className="col-4 col-4 d-flex flex-column">
                    <div className="font-lg-size1-1 font-weight-500 pb-4">
                      خرید و فروش
                    </div>{" "}
                    <div>
                      <Link href="/">
                        <a className={styles.footer_items}>فروش در نخل</a>
                      </Link>
                    </div>
                    <div>
                      <Link href={
                        userData && userData.shops && userData.shops.length > 0
                          ? "/fp"
                          : "/fp/store/create"
                      }>
                        <a className={styles.footer_items}>مدیریت حجره</a>
                      </Link>
                    </div>{" "}
                  </div>
                </div>
              </div>{" "}
              <div className="col-6">
                <div className="row">
                  <div className="col-xx-3"></div>{" "}
                  <div className="col-12 col-xx-9 footer-top-part1">
                    {/* <div className="pb-3">
                      <a
                        href="/dl-app"
                        className={`${styles.footer_items} font-lg-size1-1 font-weight-500 m-0`}
                      >
                        دانلود اپلیکیشن
                      </a>
                    </div>{" "} */}
                    {/* <div className={styles.footer_form_wrapper}>
                      <form action="" method="POST" target="_blank">
                        <input
                          type="email"
                          name="fields[email]"
                          placeholder="برای اطلاع از تخفیف‌ها ایمیل خود را وارد کنید"
                        />{" "}
                        <button type="submit">اشتراک</button>
                      </form>
                    </div>{" "} */}
                    {/* <div className={styles.footer_downloadApp}>
                      <a href="">
                        <img
                          src=""
                          alt="دانلود اپ نخل از کافه بازار"
                          width="140"
                          height="45"
                        />
                      </a>{" "}
                      <a href=">
                        <img
                          src=""
                          alt="دانلود اپ نخل از گوگل پلی"
                          width="140"
                        />
                      </a>{" "}
                      <a href="">
                        <img
                          src=""
                          alt="دانلود اپ نخل از مایکت"
                          width="140"
                        />
                      </a>
                    </div>{" "} */}
                    <div className="row mt-5">
                      <div className="col-6 col-md-3 mb-2 mt-3">
                        <div
                          style={{ height: "125px", width: "125px" }}
                          className="d-flex justify-content-center mt-1"
                        >
                          <Link href="https://kerman.irannsr.org/services/trade_unit/319012-%D8%A7%D8%B9%D8%B6%D8%A7%DB%8C-%D8%AD%D9%82%D9%88%D9%82%DB%8C-%D9%86%D9%88%DB%8C%D8%AF-%D8%AA%DB%8C%D9%85%DA%86%D9%87-%D8%AA%D8%AC%D8%A7%D8%B1%D8%AA-%D9%86%DB%8C%D9%84.html?t=%D8%AC%D8%B3%D8%AA%D8%AC%D9%88%DB%8C-%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA%D9%87">
                            <a className="w-100">
                              <Image
                                layout="responsive"
                                height={100}
                                width={100}
                                alt=""
                                title=""
                                src="/icons/footer/fn.png"
                                className="footer-namad"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>{" "}
                      <div className="col-6 col-md-3 mb-2 mt-3">
                        <div
                          style={{ height: "125px", width: "125px" }}
                          className="d-flex justify-content-center"
                        >
                          <Link href="https://trustseal.enamad.ir/?id=135577&amp;Code=4LVJlUntZdqZWSmXWkA1">
                            <a className="w-100">
                              <Image
                                layout="responsive"
                                height={100}
                                width={100}
                                referrerPolicy="origin"
                                alt="نماد اعتماد الکترونیکی"
                                title="نماد اعتماد الکترونیکی"
                                src="/icons/footer/namad.png"
                                className="footer-namad"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>{" "}
                      <div className="col-6 col-md-3 mb-2 mt-3">
                        <div
                          style={{ height: "125px", width: "125px" }}
                          className="d-flex justify-content-center"
                        >
                          <Link href="https://logo.samandehi.ir/Verify.aspx?id=163029&p=rfthgvkaxlaoobpduiwkpfvl">
                            <a className="w-100">
                              <Image
                                layout="responsive"
                                height={100}
                                width={100}
                                alt="انجمن کسب و کار های اینترنتی"
                                title="انجمن کسب و کار های اینترنتی"
                                src="/icons/footer/namadTwo.png"
                                className="footer-namad"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-block d-lg-none">
              <div className="border-bottom border-gray py-3">
                <div
                  onClick={() => {
                    _handel_according("part_one", "icon");
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <div className="font-weight-500">نخل</div>{" "}
                    <i id="icon" className="fas fa-angle-up"></i>
                  </div>
                </div>{" "}
                <div
                  id="part_one"
                  style={{
                    transition: "all 1s ease-out",
                    height: "0",
                    overflow: "hidden",
                  }}
                  className="is-active"
                >
                  <div>
                    <Link href="https://nakhll.com/blog/">
                      <a className={styles.footer_items}>وبلاگ</a>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://nakhll.com/blog/%d9%86%d8%ae%d9%84%d8%8c-%d8%a8%d8%a7%d8%b2%d8%a7%d8%b1%db%8c-%d8%a7%d8%ac%d8%aa%d9%85%d8%a7%d8%b9%db%8c-%d9%88-%d8%a2%d9%86%d9%84%d8%a7%db%8c%d9%86/">
                      <a className={styles.footer_items}>داستان نخل</a>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://nakhll.com/blog/%d8%aa%d9%85%d8%a7%d8%b3-%d8%a8%d8%a7-%d9%85%d8%a7/">
                      <a className={styles.footer_items}>تماس با ما</a>
                    </Link>
                  </div>
                  {/* <div>
                    <a
                      to=""
                      href=""
                      className={styles.footer_items}
                    >
                      فرصت‌های شغلی
                    </a>
                  </div> */}
                  {/* <div>
                    <a
                      to="/guides/how-it-works"
                      href="/guides/how-it-works"
                      className={styles.footer_items}
                    >
                      نخل چطور کار می‌کند؟
                    </a>
                  </div> */}
                  <div>
                    <Link href="https://nakhll.com/blog/%d8%b4%d8%b1%d8%a7%db%8c%d8%b7-%d9%88-%d8%b6%d9%88%d8%a7%d8%a8%d8%b7/">
                      <a className={styles.footer_items}>
                        قوانین و شرایط استفاده
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="border-bottom border-gray py-3">
                <div
                  onClick={() => {
                    _handel_according("part_two", "part_two_icon");
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <div className="font-weight-500">پشتیبانی</div>{" "}
                    <i id="part_two_icon" className="fas fa-angle-up"></i>
                  </div>
                </div>{" "}
                <div
                  style={{
                    transition: "all 1s ease-out",
                    height: "0",
                    overflow: "hidden",
                  }}
                  id="part_two"
                  className="is-active"
                >
                  <div>
                    <div className={styles.footer_items}>
                      تلفن تماس:
                      <a href="tel://034-32476561" className="d-inline-block">
                        {_asist.number(`034-32476561`)}
                      </a>{" "}
                      <span>و</span>{" "}
                      <a href="tel://034-91001230" className="d-inline-block">
                        {_asist.number(`034-91001230`)}
                      </a>
                    </div>
                  </div>
                  {/* <div>
                    <a to="" href="" className={styles.footer_items}>
                      پشتیبانی آنلاین
                    </a>
                  </div> */}
                  <div>
                    <Link href="/profile">
                      <a className={styles.footer_items}>پیگیری سفارشات</a>
                    </Link>
                  </div>
                  {/* <div>
                    <a
                      href="/guides/return-policy"
                      className={styles.footer_items}
                    >
                      بازگشت کالا
                    </a>
                  </div> */}
                  {/* <div>
                    <a to="" href="" className={styles.footer_items}>
                      گزارش تخلف
                    </a>
                  </div> */}
                  {/* <div>
                    <a
                      to="/guides/customer-satisfaction"
                      href="/guides/customer-satisfaction"
                      className={styles.footer_items}
                    >
                      تضمین رضایت مشتری
                    </a>
                  </div> */}
                  <div>
                    <Link href="https://nakhll.com/blog/%d8%b3%d9%88%d8%a7%d9%84%d8%a7%d8%aa-%d9%be%d8%b1-%d8%aa%da%a9%d8%b1%d8%a7%d8%b1/">
                      <a className={styles.footer_items}>
                        پاسخ به سوالات پرتکرار
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="border-bottom border-gray py-3">
                <div
                  onClick={() => {
                    _handel_according("part_three", "part_three_icon");
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <div className="font-weight-500">خرید و فروش</div>{" "}
                    <i id="part_three_icon" className="fas fa-angle-up"></i>
                  </div>
                </div>{" "}
                <div
                  id="part_three"
                  style={{
                    transition: "all 1s ease-out",
                    height: "0",
                    overflow: "hidden",
                  }}
                >
                  <div>
                    <Link href="/">
                      <a className={styles.footer_items}>فروش در نخل</a>
                    </Link>
                  </div>
                  {/* <div>
                    <a
                      href="/account/invite"
                      className="footer-items font-weight-bold"
                    >
                      100 هزار تومان هدیه
                    </a>
                  </div> */}
                  {/* <div>
                    <a href="/account/credit" className={styles.footer_items}>
                      کیف پول من
                    </a>
                  </div> */}
                  <div>
                    <Link href={
                      userData && userData.shops && userData.shops.length > 0
                        ? "/fp"
                        : "/fp/store/create"
                    }>
                      <a className={styles.footer_items}>مدیریت حجره</a>
                    </Link>
                  </div>
                </div>
              </div>{" "}
              <div className="align-items-center d-flex justify-content-between mt-3">
                {/* <div>
                  <a href="">
                    <button className="btn rounded-pill border-black">
                      دانلود اپلیکیشن
                    </button>
                  </a>
                </div>{" "} */}
                <div
                  style={{
                    justifyContent: "space-around",
                    marginBottom: "15px",
                  }}
                  className={styles.footer_social_icon}
                >
                  <a
                    href="https://www.linkedin.com/company/nakhll/"
                    target="_blank"
                    aria-label="لینکدین"
                  >
                    <i
                      style={{ fontSize: "30px" }}
                      className="fab fa-linkedin"
                    ></i>
                  </a>

                  <a
                    style={{ width: "30px" }}
                    href="https://www.aparat.com/nakhll"
                    target="_blank"
                    aria-label="آپارات بازار اجتماعی نخل"
                  >
                    <Image
                      src="/icons/footer/aparat.png"
                      layout="responsive"
                      width={200}
                      height={200}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/nakhll_com/"
                    target="_blank"
                    aria-label="اینستاگرام"
                    style={{ fontSize: "30px", display: "flex" }}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>{" "}
              <div className="row align-items-center d-flex justify-content-between mt-1 row">
                <div className="col-4 col-md-2">
                  <div className="d-flex justify-content-center">
                    <Link href="https://kerman.irannsr.org/services/trade_unit/319012-%D8%A7%D8%B9%D8%B6%D8%A7%DB%8C-%D8%AD%D9%82%D9%88%D9%82%DB%8C-%D9%86%D9%88%DB%8C%D8%AF-%D8%AA%DB%8C%D9%85%DA%86%D9%87-%D8%AA%D8%AC%D8%A7%D8%B1%D8%AA-%D9%86%DB%8C%D9%84.html?t=%D8%AC%D8%B3%D8%AA%D8%AC%D9%88%DB%8C-%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA%D9%87">
                      <a
                        className="w-100"
                        style={{ overflow: "hidden", display: "inline-block" }}
                      >
                        <Image
                          layout="responsive"
                          height={100}
                          width={100}
                          style={{ objectFit: "fill", width: "100px " }}
                          alt=""
                          src="/icons/footer/fn.png"
                          className="footer-namad"
                        />
                      </a>
                    </Link>
                  </div>
                </div>{" "}
                <div className="col-4 col-md-2">
                  <div className="d-flex justify-content-center mt-1">
                    <Link href="https://trustseal.enamad.ir/?id=135577&Code=4LVJlUntZdqZWSmXWkA1">
                      <a className="w-100">
                        <Image
                          layout="responsive"
                          height={100}
                          width={100}
                          referrerPolicy="origin"
                          alt="نماد اعتماد الکترونیکی"
                          src="/icons/footer/namad.png"
                          className="footer-namad"
                          style={{ width: "100px" }}
                        />
                      </a>
                    </Link>
                  </div>
                </div>{" "}
                <div className="col-4 col-md-2">
                  <div className="d-flex justify-content-center">
                    <Link href="https://logo.samandehi.ir/Verify.aspx?id=163029&p=rfthgvkaxlaoobpduiwkpfvl">
                      <a className="w-100">
                        <Image
                          layout="responsive"
                          height={100}
                          width={100}
                          alt="انجمن کسب و کار های اینترنتی"
                          src="/icons/footer/namadTwo.png"
                          className="footer-namad"
                          style={{ width: "100px" }}
                        />
                      </a>
                    </Link>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className=" pt-3">
              <div className="container pb-5">
                <hr className="mt-0" />{" "}
                <div className="footer-seo">
                  <div className="font-weight-bold pt-3">
                    نخل، بازار اجتماعی آنلاین
                  </div>{" "}
                  <div>
                    <div
                      className={`${styles.footer_seo_container} show-all-seo-text`}
                    >
                      <div
                        className={styles.footer_seo_text}
                        style={{ textAlign: "justify" }}
                      >
                        <span>
                          نخل سرزمینی است برای یادآوری سنت­‌های اصیل
                          ایرانی­‌مان. برای شکوفایی استعدادها و
                          بهتردیده­‌شدن‌تان، کالاها و خدمات خود را در سرزمین نخل
                          به اشتراک بگذارید. اینجا راهی برای پیشبرد هدف­‌های‌تان
                          وجود دارد. در سرزمین نخل دریچه‌­ای باز شده است تا شما
                          را برای رسیدن به خواسته‌ها و آرزوهای‌­تان همراهی کنیم.
                          پس با خانوادۀ بزرگ نخل همراه شوید.
                        </span>
                        ‍‍
                        <br />
                        <br />
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="bg-black text-white py-3">
              <div className="container font-size-sm">
                کلیه حقوق مادی و معنوی برای «توسعه و تدبیر جوامع سلام»، بازار
                اجتماعی آنلاین، محفوظ است.
              </div>{" "}
              <div className="mt-5 mt-lg-0 pt-4 pt-lg-0"></div>
            </div> */}
          </div>
        </>
      )}
    </>
  );
};
// export
export default Footer;
