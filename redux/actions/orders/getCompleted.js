import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import * as Types from "../../types/orders"; // constants
// action of accounting list
export const getCompleted = (activeHojreh) => async (dispatch) => {
    // try
    try {
        const completed = async () => {
            let params = {};
            let loadData = null;
            let dataUrl = `/api/v1/factor/shop/${activeHojreh}/completed/`;
            let response = await ApiRegister().apiRequest(
                loadData,
                "get",
                dataUrl,
                true,
                params
            );
            return response;
        };

        let response = await completed();
        if (response.status === 200) {
            // dispatch
            dispatch({
                type: Types.COMPLETED,
                payload: response.data,
            });
        }
    } catch (error) {
        return false;
    }
};