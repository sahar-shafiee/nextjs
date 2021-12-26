import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import CheckboxTreeCities from "../../../../components/CheckboxTree/CheckboxTree";
import { ApiRegister } from "../../../../services/apiRegister/ApiRegister";
import InputUseForm from "../../../creat/component/inputUseForm";
import ActiveSendBox from "./components/ActiveSendBox";
import BtnSetting from "./components/btnSetting";
import CheckBoxSend from "./components/checkBoxSend";
import Explain from "./components/explain";
import HeaderTitle from "./components/headerTitle";
import Panel from "./components/panel";
import Products from "./components/products";
import Search from "./components/search";
import SendBox from "./components/sendBox";
import SendBoxCu from "./components/sendBoxCu";
import Tabel from "./components/tabel";

import st from "./logisticPage.module.scss";

function LogisticPage() {
  const activeHojreh = useSelector((state) => state.User.activeHojreh);

  // state for handel page
  const [wichPage, setWichPage] = useState(1);

  // for save type post
  const [whichMethod, setWhichMethod] = useState("");

  // for save id scope
  const [wichIdScope, setWichIdScope] = useState("");

  // State for get card
  const [cardSend, setCardSend] = useState([]);
  // for Save cities
  const [checkedCities, setCheckedCities] = useState([]);

  // for Save Products
  const [ProductsShop, setProductsShop] = useState([]);

  // for Save constraintItems
  const [constraintId, setConstraintId] = useState("");

  // for save metricId

  const [metricId, setMetricId] = useState("");

  // state for Saved Sending Unit
  // const [SavedSendingUnit, setSavedSendingUnit] = useState([]);
  // useform
  const {
    setValue,
    getValues,
    clearErrors,
    register,
    setError,

    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
  });

  useEffect(() => {
    async function fetchData() {
      let response = await ApiRegister().apiRequest(
        null,
        "GET",
        `/api/v1/logistic/shop-logistic-unit/?shop=${activeHojreh}`,
        true,
        ""
      );
      if (response.status == 200) {
        setCardSend(response.data);
      }
    }

    fetchData();
  }, []);

  // function for Create Shop Logistic Unit Constraint

  const _handle_add_new_scope = async () => {
    let response = await ApiRegister().apiRequest(
      {
        shop: activeHojreh,
        name: "بدون نام",
      },
      "post",
      `/api/v1/logistic/shop-logistic-unit/`,
      true,
      ""
    );

    if (response.status == 201) {
      console.log(`response.data.`, response.data);
      setWichIdScope(response.data.id);
      upPage(2);
    }
  };

  const _handel_get_all_data_scope = async () => {
    let response = await ApiRegister().apiRequest(
      null,
      "get",
      `/api/v1/logistic/shop-logistic-unit-constraint-parameter/${wichIdScope}/`,
      true,
      ""
    );

    if (response.status == 200) {
      setProductsShop(response.data.products);
      setCheckedCities(response.data.cities);
    }
  };

  const _handle_update_data_scope = async () => {
    let response = await ApiRegister().apiRequest(
      {
        cities: checkedCities,
      },
      "PATCH",
      `/api/v1/logistic/shop-logistic-unit-constraint-parameter/${wichIdScope}/`,
      true,
      ""
    );

    if (response.status == 200) {
      upPage();
    }
  };

  // functoin for send data for price per kg

  const _handle_send_price_kg = async (data) => {
    let response = await ApiRegister().apiRequest(
      data,
      "PATCH",
      `/api/v1/logistic/shop-logistic-unit-constraint-parameter/${wichIdScope}/`,
      true,
      ""
    );

    if (response.status == 200) {
      upPage();
    }
  };

  const upPage = (num = 1) => {
    setWichPage(wichPage + num);
  };
  const downPage = () => {
    setWichPage(wichPage - 1);
  };
  const setIdWithWay = (id) => {
    setWhichMethod(id);
  };

  // for get all data for scope
  useEffect(() => {
    if (wichIdScope !== "") {
      _handel_get_all_data_scope();
    }
  }, [wichIdScope]);

  return (
    <>
      <div className={st.main}>
        {wichPage == 1 && (
          <>
            <HeaderTitle
              enabel={false}
              onClick={() => downPage()}
              title="تنظیمات لجستیک"
            />

            <Explain text="با استفاده از ثبت واحد ارسال جدید شهرها، محصولات، روش و هزینه ارسال دلخواه را انتخاب کنید." />

            <BtnSetting
              onClick={_handle_add_new_scope}
              title="ثبت واحد ارسال جدید"
            />

            <Panel
              setConstraintId={setConstraintId}
              setMetricId={setConstraintId}
            />
          </>
        )}
        {wichPage == 2 && (
          <>
            <HeaderTitle onClick={() => downPage()} title="واحد ارسال" />

            <Explain text="با استفاده از ثبت واحد ارسال جدید شهرها، محصولات، روش و هزینه ارسال دلخواه را انتخاب کنید." />

            <CheckBoxSend title="استفاده از تنظیمات پیشفرض" />

            <Tabel
              changePage={upPage}
              setWichIdScope={setWichIdScope}
              whichMethod={whichMethod}
            />
            <BtnSetting
              onClick={_handle_add_new_scope}
              title="ثبت محدوده جدید"
            />
          </>
        )}

        {wichPage == 3 && (
          <>
            <HeaderTitle
              onClick={() => downPage()}
              title="به کدام شهرها ارسال می کنید؟"
            />

            <Explain text="توضیحات به حجره دار" />
            <CheckboxTreeCities
              checkedCity={checkedCities}
              setCheckedCity={setCheckedCities}
            />

            <BtnSetting
              onClick={() => _handle_update_data_scope()}
              title="مرحله بعد"
            />
          </>
        )}
        {wichPage == 4 && (
          <>
            <HeaderTitle
              onClick={() => downPage()}
              title="چه محصولاتی را ارسال می کنید؟"
            />

            <Explain text="توضیحات به حجره دار" />

            <CheckBoxSend title="تمام محصولات" />

            <Products
              ProductsShop={ProductsShop}
              setProductsShop={setProductsShop}
              changePage={upPage}
              wichIdScope={wichIdScope}
            />
          </>
        )}

        {wichPage == 5 && (
          <>
            <HeaderTitle onClick={() => downPage()} title="تنظیمات روش ارسال" />

            <Explain text="توضیحات به حجره دار" />

            <form onSubmit={handleSubmit(_handle_send_price_kg)}>
              <InputUseForm title="نام روش" error={errors.NamePost}>
                <input
                  {...register("NamePost", {
                    required: "هشدار سقف و پیش فرض هزینه ها",
                  })}
                />
              </InputUseForm>
              <InputUseForm
                title="هزینه پست به ازای هر کیلوگرم"
                error={errors.price_per_kg}
              >
                <input
                  {...register("price_per_kg", {
                    required: "هشدار سقف و پیش فرض هزینه ها",
                  })}
                />
              </InputUseForm>
              <InputUseForm
                title="هزینه پست به ازای هر کیلوگرم اضافه تر"
                error={errors.price_per_extra_kg}
              >
                <input
                  {...register("price_per_extra_kg", {
                    required: "هشدار سقف و پیش فرض هزینه ها",
                  })}
                />
              </InputUseForm>

              <InputUseForm title="حداقل هزینه سفارش" error={errors.minPrice}>
                <input
                  {...register("minPrice", {
                    required: "هشدار",
                  })}
                />
              </InputUseForm>

              <BtnSetting type="submit" title="ثبت" />
            </form>
          </>
        )}

        {wichPage == 6 && (
          <>
            <div className="d-flex justify-content-center w-100">
              <div className="pt-3 pb-3">
                <h1 style={{ color: "green" }}>
                  محدوده جدید با موفقیت ایجاد گردید.
                </h1>
                <BtnSetting
                  onClick={() => setWichPage(1)}
                  type="submit"
                  title="بازگشت"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default LogisticPage;
