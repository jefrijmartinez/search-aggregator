import { STOP_LOADING, START_LOADING } from "../constants/loading.contants";

export const startLoading = () => ({
  type: START_LOADING,
  payload: { loading: true },
});

export const stopLoading = () => ({
  type: STOP_LOADING,
  payload: { loading: false },
});
