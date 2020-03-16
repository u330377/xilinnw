export const CSL_ERROR_TYPE = 'CSL Error';

export const processCslErrors = (response, url) => {
  const { CslErrorResponse } = response;
  if (CslErrorResponse) {
    const status = 503;
  }
  return response;
};
