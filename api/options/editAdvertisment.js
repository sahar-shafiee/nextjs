import { successMessage } from "../../utils/toastifyMessage";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
// get advertisment
export const editAdvertisment = async (shop_slug, data) => {
    try {
        let response = await ApiRegister().apiRequest(
            data,
            "PATCH",
            `/api/v1/shop/advertisements/${shop_slug}/`,
            true, {}
        );
        if (response.status === 200) {
            successMessage("با موفقیت ثبت شد");
            return response.data;
        }
    } catch (error) {
        return false;
    }
};