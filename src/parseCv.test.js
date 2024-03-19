import parseCv, {
  extractName,
  extractType,
} from './parseCv';

const NAME = 'Arne';
const TYPE = 'Developer';

const STRING_WITH_INFO = `With both. Name: ${NAME}, Type: ${TYPE}.`;

const STRING_WITHOUT = 'Without a name or a type.';
const STRING_WITHOUT_NAME = `Without a name but Type: ${TYPE}.`;
const STRING_WITHOUT_TYPE = `Without a type but Name: ${NAME}.`;

describe('The file parseCv', () => {
  test('exports a function named parseCv.', () => {
    expect(parseCv).toBeFunction();
  });

  test('exports a function named extractName.', () => {
    expect(extractName).toBeFunction();
  });

  test('exports a function named extractType.', () => {
    expect(extractType).toBeFunction();
  });
});

describe('The function extractName', () => {
  test('returns a string with a name, if a name can be found.', () => {
    const result = extractName(STRING_WITH_INFO);
    expect(result).toBe(NAME);
  });

  test('returns falsy, if no name can be found.', () => {
    const result = extractName(STRING_WITHOUT);
    expect(result).toBeFalsy();
  });
});

describe('The function extractType', () => {
  test('returns a string with a name, if a name can be found.', () => {
    const result = extractType(STRING_WITH_INFO);
    expect(result).toBe(TYPE);
  });

  test('returns falsy, if no name can be found.', () => {
    const result = extractType(STRING_WITHOUT);
    expect(result).toBeFalsy();
  });
});

describe('The function parseCv()', () => {
  test('is a function.', () => {
    expect(parseCv).toBeFunction();
  });

  test('returns an object with a name and a type if both are present.', () => {
    const result = parseCv(STRING_WITH_INFO);
    expect(result).toBeObject();
    expect(result.name).toBe(NAME);
    expect(result.type).toBe(TYPE);
  });

  test('returns falsy if name is missing.', () => {
    const result = parseCv(STRING_WITHOUT_NAME);
    expect(result).toBeFalsy();
  });

  test('returns falsy if type is missing.', () => {
    const result = parseCv(STRING_WITHOUT_TYPE);
    expect(result).toBeFalsy();
  });
});
