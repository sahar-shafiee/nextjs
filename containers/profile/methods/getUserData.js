import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// get user data
export const getUserData = async (setDataProfile) => {
    let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/profile/me/`,
        true, {}
    );
    if (response.status === 200) {
        setDataProfile(response.data);
    }
};