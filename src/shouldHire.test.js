import shouldHire from './shouldHire';

const CV_HIRE = {
  name: 'Arne',
};

const CV_NO_HIRE = {
  name: 'Homer',
};

describe('The file shouldHire', () => {
  test('exports a function named shouldHire.', () => {
    expect(shouldHire).toBeFunction();
  });
});

describe('The function shouldHire', () => {
  test('returns true for a CV of an applicant worth hiring.', () => {
    const result = shouldHire(CV_HIRE);
    expect(result).toBeTrue();
  });

  test('returns falsy for a CV of an applicant not worth hiring.', () => {
    const result = shouldHire(CV_NO_HIRE);
    expect(result).toBeFalsy();
  });

  test('never throws.', () => {
    expect(() => shouldHire()).not.toThrow();
    expect(() => shouldHire(null)).not.toThrow();
    expect(() => shouldHire({})).not.toThrow();
    expect(() => shouldHire(1)).not.toThrow();
    expect(() => shouldHire(true)).not.toThrow();
  });
});
