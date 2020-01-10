export const withErrorMessage = (message) => {
  return {
    error: {
      message: message
    }
  }
};

export const withData = (data) => {
  return {
    data: data
  }
};