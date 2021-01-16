import { Main } from '../src/main';

describe('index.ts example test', () => {
  it('should return short sentence with my name', () => {
    expect(Main.hello('Przemyslaw')).toBe('Hi, Przemyslaw');
  });
});
