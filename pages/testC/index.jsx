import EmptyLayout from "../../components/layout/EmptyLayout";
import st from "./aboutMe.module.scss";
import Image from "next/image";
function Test() {
  return (
    <>
      <div className={st.wrapper}>
        <div className={st.box}>
          <span style={{ "--i": "1" }}>
            <Image
              className={st.image}
              layout="fixed"
              width={200}
              height={200}
              alt="product"
              src="/image/pic1.jpg"
            />
          </span>
          <span style={{ "--i": "2" }}>
            <Image
              className={st.image}
              layout="fixed"
              width={200}
              height={200}
              alt="product"
              src="/image/pic1.jpg"
            />
          </span>
          <span style={{ "--i": "3" }}>
            <Image
              className={st.image}
              layout="fixed"
              width={200}
              height={200}
              alt="product"
              src="/image/pic1.jpg"
            />
          </span>
          <span style={{ "--i": "4" }}>
            <Image
              className={st.image}
              layout="fixed"
              width={200}
              height={200}
              alt="product"
              src="/image/pic1.jpg"
            />
          </span>
          <span style={{ "--i": "5" }}>
            <Image
              className={st.image}
              layout="fixed"
              width={200}
              height={200}
              alt="product"
              src="/image/pic1.jpg"
            />
          </span>
          <span style={{ "--i": "6" }}>
            <Image
              className={st.image}
              layout="fixed"
              width={200}
              height={200}
              alt="product"
              src="/image/pic1.jpg"
            />
          </span>
          <span style={{ "--i": "7" }}>
            <Image
              className={st.image}
              layout="fixed"
              width={200}
              height={200}
              alt="product"
              src="/image/pic1.jpg"
            />
          </span>
          <span style={{ "--i": "8" }}>
            <Image
              className={st.image}
              layout="fixed"
              width={200}
              height={200}
              alt="product"
              src="/image/pic1.jpg"
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default Test;

Test.Layout = EmptyLayout;
