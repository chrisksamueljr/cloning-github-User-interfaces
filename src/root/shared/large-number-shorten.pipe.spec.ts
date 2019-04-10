import { LargeNumberShortenPipe } from './large-number-shorten.pipe';

describe('LargeNumberShortenPipe', () => {
  it('create an instance', () => {
    const pipe = new LargeNumberShortenPipe();
    expect(pipe).toBeTruthy();
  });
});
