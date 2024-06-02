// Use throughout your app instead of plain `useDispatch` and `useSelector`
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";

const getUseAppDispatch = () => useDispatch<AppDispatch>;
const getUseSelector = () => useSelector<RootState>;
export const useAppDispatch = getUseAppDispatch();
export const useAppSelector = getUseSelector();