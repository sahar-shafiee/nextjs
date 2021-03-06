import { sendUserAddress } from "../../../api/cartAddress/sendUserAddress";

export async function selectAddress(router, setLoading) {
    if (document.querySelector("input[type=radio]:checked") !== null) {
        let selectedAddressId = document.querySelector(
            "input[type=radio]:checked"
        ).value;
        let data = { address: selectedAddressId };
        await setLoading(true);
        let response = await sendUserAddress(data);
        await (response === true &&
            router.push(`/cart/send`));
        await setLoading(false);
    }
}