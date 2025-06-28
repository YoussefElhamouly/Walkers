const throwError = (message, status, details) => {
  const error = new Error(message);
  error.status = status;
  error.details = details;
  throw error;
};

export { throwError };
