import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// get Order Detail
export const getOrderDetail = async (invoiceId, setDetailData, setLoading) => {
    let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/invoices/${invoiceId}/`,
        true, {}
    );
    if (response.status === 200) {
        setDetailData(response.data);
        setLoading(false);
    } else {
        setLoading(false);
    }
};