import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { IRootState } from "../redux";

const useReduxSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useReduxSelector;
