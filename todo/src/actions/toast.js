import { SHOW_TOAST } from "../constants";

export const showToast = (toShowToast, toastType, toastText) => ({
  type: SHOW_TOAST,
  showToast: toShowToast,
  toastType,
  text: toastText,
});
