import Image from "next/image";
import styles from "./styles.module.scss";
function PageNotFound() {
  return (
    <div className="container" style={{ maxWidth: "700px" }}>
      <Image src="/404.png" layout="responsive" width={750} height={519} />
      <div className={styles.wrapBtn}>
        <button onClick={() => location.replace("/")}>رفتن به صفحه اصلی</button>
      </div>
    </div>
  );
}

export default PageNotFound;
