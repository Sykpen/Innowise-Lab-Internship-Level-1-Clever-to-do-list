import { SHOW_TOAST } from "../constants";

const initialState = {
  showToast: false,
  toastType: "success",
  toastText: "",
};

export const ToastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        showToast: action.showToast,
        toastType: action.toastType ? action.toastType : "success",
        toastText: action.text,
      };
    default:
      return state;
  }
};
