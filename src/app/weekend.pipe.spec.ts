import { WeekendPipe } from './weekend.pipe';

describe('WeekendPipe', () => {
  it('create an instance', () => {
    const pipe = new WeekendPipe();
    expect(pipe).toBeTruthy();
  });
});
