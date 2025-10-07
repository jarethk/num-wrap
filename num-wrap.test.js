import { wrap } from './num-wrap.js'
import { test, expect } from '@jest/globals'

test('Testing wrap', () => {
    expect(wrap(8, 1, 7)).toBe(1);
    expect(wrap(8, 0, 7)).toBe(0);
    expect(wrap(300, 0, 10)).toBe(3);
    expect(wrap(-1, 0, 6)).toBe(6);
    expect(wrap(-2, 0, 6)).toBe(5);
    expect(wrap(-3, 0, 6)).toBe(4);
    expect(wrap(-5, 0, 6)).toBe(2);
    expect(wrap(-6, 0, 6)).toBe(1);
    expect(wrap(-7, 0, 6)).toBe(0);
    expect(wrap(-8, 0, 6)).toBe(6);
    expect(wrap(-296, 0, 6)).toBe(5);
});
