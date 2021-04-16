import { OPEN_MODAL, CLOSE_MODAL } from "../constants";

const initialState = {
  isModalOpen: false
};

export const ModalWindowReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };
      case CLOSE_MODAL:
        return {
          ...state,
          isModalOpen: false,
        };
    default:
      return state;
  }
};