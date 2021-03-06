import { successMessage } from "../../utils/toastifyMessage";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
// get address of user
export async function updateAddress(id, data) {
    try {
        let response = await ApiRegister().apiRequest(
            data,
            "PUT",
            `/api/v1/logistic/addresses/${id}/`,
            true,
            ""
        );
        if (response.status === 200) {
            successMessage("آدرس مورد نظر با موفقیت ویرایش شد");
        }
    } catch (error) {
        return false;
    }
}