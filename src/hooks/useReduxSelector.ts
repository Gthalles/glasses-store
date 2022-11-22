import { useDispatch } from "react-redux";
import type { ReduxDispatch } from "../redux";

function useReduxDispatch() {
    return useDispatch<ReduxDispatch>();
}

export default useReduxDispatch;
