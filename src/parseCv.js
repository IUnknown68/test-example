/**
 * Regular expression used by `extractName()`.
 * @type {RegExp}
 */
const REGEX_NAME = /Name:\s*([a-z-]+)/i;

/**
 * Regular expression used by `extractType()`.
 * @type {RegExp}
 */
const REGEX_TYPE = /Type:\s*([a-z-]+)/i;

/**
 * Helper to extract the name from a string, based on a regular expression.
 * @param  {String} text Raw `string` containing the name.
 * @return {String|null} The name, if found, `null` otherwise.
 */
export function extractName(text) {
  const match = REGEX_NAME.exec(text);
  return match && match[1];
}

/**
 * Helper to extract the type of applicant from a string, based on a regular
 * expression.
 * @param  {String} text Raw `string` containing the type.
 * @return {String|null} The type, if found, `null` otherwise.
 */
export function extractType(text) {
  const match = REGEX_TYPE.exec(text);
  return match && match[1];
}

/**
 * Parses a CV into an `Object` containing information about the
 * CV, like the name of the applicant.
 * @param  {String} text  Raw `string` containing the CV.
 * @return {Object|null}  If successful, returns an `Object` containing the
 *                        name and type of the applicant. Otherwise returns
 *                        `null`.
 */
function parseCv(text) {
  const name = extractName(text);
  const type = extractType(text);
  return name && type && {
    name,
    type,
  };
}

export default parseCv;
