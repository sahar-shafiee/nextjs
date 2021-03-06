import * as Types from "../../types/orders"; // constants
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// action of accounting list
export const getUncompleted = (activeHojreh) => async (dispatch) => {
    // try
    try {
        const uncompleted = async () => {
            let params = {};
            let loadData = null;
            let dataUrl = `/api/v1/shop/${activeHojreh}/invoices/?is_completed=false`;
            let response = await ApiRegister().apiRequest(
                loadData,
                "get",
                dataUrl,
                true,
                params
            );
            return response;
        };

        let response = await uncompleted();
        if (response.status === 200) {
            // dispatch
            dispatch({
                type: Types.UNCOMPLETED,
                payload: response.data.results,
            });
        }
    } catch (error) {
        return false;
    }
};