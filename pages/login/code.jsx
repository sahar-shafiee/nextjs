// node libraries
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

// methods
import { resendCode } from "../../api/auth/resendCode";
import { completeAuth } from "../../api/auth/completeAuth";
import { forgetPassword } from "../../api/auth/forgetPassword";
import { getAccessToken } from "../../api/auth/getAccessToken";
import EmptyLayout from "../../components/layout/EmptyLayout";
import LoginButton from "../../containers/login/loginButton";
import AppTimer from "../../containers/login/timer";

const Code = () => {
  let timingCode = "";
  const [loadButton, setLoadButton] = useState(false);
  const [timer, setTimer] = useState();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    setLoadButton(true);
    data.auth_key = JSON.parse(sessionStorage.getItem("login")).auth_key;
    let result = await completeAuth(data);

    if (result !== false) {
      if (
        JSON.parse(sessionStorage.getItem("login")).mobile_status ===
        "login_pass"
      ) {
        sessionStorage.setItem("secret_key", result.auth_secret);
        router.push("/login/forgetPassword");
      } else {
        let response = await getAccessToken(result);
        response === true && location.replace("/");
      }
    }
    setLoadButton(false);
  };

  useEffect(() => {
    router.query.forgetPass === "true" && forgetPassword();
  }, [router.query.forgetPass]);
  useEffect(() => {
    timingCode = localStorage.getItem("timing");
    setTimer(timingCode ? timingCode : 59);
    return () => {
      localStorage.removeItem("timing");
    };
  }, []);

  return (
    <>
      <Head>
        <title>ورود بازار آنلاین نخل</title>
      </Head>

      <div className="d-flex flex-column justify-content-center col-12 col-md-8 col-lg-5 m-auto bg-white shadow-lg p-5 mt-5 rounded position-relative">
        <div className="m-auto">
          <Link href="/">
            <a>
              <Image
                src="/image/base_logo.png"
                alt="logo"
                width="250"
                height="100"
              />
            </a>
          </Link>
        </div>
        <h1
          className="d-flex justify-content-center font-weight-bold mb-5"
          style={{ fontSize: "20px" }}
        >
          ورود / ثبت نام
        </h1>
        <form onSubmit={handleSubmit(submit)}>
          <label
            htmlFor="user_key"
            className="mb-2"
            style={{ fontSize: "15px" }}
          >
            کد تایید برای شماره موبایل وارد شده ارسال گردید
          </label>
          <input
            type="number"
            id="user_key"
            className="form-control mb-3"
            {...register("user_key", {
              required: "لطفا این گزینه را پرنمایید",
              maxLength: {
                value: 6,
                message: "لطفا کد را صحیح وارد نمایید",
              },
              minLength: {
                value: 6,
                message: "لطفا کد را صحیح وارد نمایید",
              },
            })}
          />
          {errors.user_key && (
            <span style={{ display: "block", color: "red", fontSize: "14px" }}>
              {errors.user_key.message}
            </span>
          )}

          {timer == 0 && (
            <span
              className="text-info"
              style={{ cursor: "pointer" }}
              onClick={() => {
                resendCode({ mobile: sessionStorage.getItem("mobile") });
                setTimer(59);
              }}
            >
              دریافت مجدد کد تایید
            </span>
          )}

          <span
            className="inline-block"
            style={{ position: "absolute", left: "50px" }}
          >
            <AppTimer timer={timer} setTimer={setTimer} />
          </span>
          {timer !== 0 && <div style={{ height: "24px" }}></div>}

          <LoginButton loader={loadButton} title="ادامه" />
        </form>
      </div>
    </>
  );
};
// export
export default Code;

Code.Layout = EmptyLayout;
