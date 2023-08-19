import axios from "axios";
import EventBus from "../components/common/event-bus";

const handleApiCall = async (apiCall, successCallback, errorCallback) => {
  try {
    const response = await apiCall();
    successCallback(response.data);
  } catch (error) {
    if (error.response && error.response.status === 401) {
      EventBus.dispatch("logout");
    }
    errorCallback(error.message || "An error occurred");
  }
};

export default handleApiCall;
