module.exports = {
  createSuccessResponse(data) {
    return {
      status: 200,
      result: data,
      success: true,
      errors: null,
    };
  },
  createFailureResponse(data, errorCode = 500) {
    return {
      status: errorCode,
      result: null,
      success: false,
      errors: data,
    };
  },
};
