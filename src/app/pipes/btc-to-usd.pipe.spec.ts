import { BtcToUsdPipe } from './btc-to-usd.pipe';

describe('BtcToUsdPipe', () => {
  it('create an instance', () => {
    const pipe = new BtcToUsdPipe();
    expect(pipe).toBeTruthy();
  });
});
