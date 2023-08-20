const handleApiCall = async (apiCall, successCallback, errorCallback) => {
  try {
    const response = await apiCall();
    successCallback(response.data);
  } catch (error) {
    errorCallback(error.message || "An error occurred");
  }
};

export default handleApiCall;
