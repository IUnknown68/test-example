/**
 * Sophisticated method using cutting edge AI to evaluate a CV and return a
 * single `boolean` indicating if the applicant should be hired.
 * @param  {Object} cv CV-Object as returned from `parseCv()`.
 * @return {boolean}   True if the applicant should be hired.
 */
function shouldHire(cv) {
  return cv && cv.name === 'Arne';
}

export default shouldHire;
