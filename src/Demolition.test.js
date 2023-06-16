// inlined
export function forEach(items, callback) {
    const result = []
    for (let index = 0; index < items.length; index++) {
        result.push(callback(items[index]));
    }
    return result
}

const mockCallback = jest.fn(x => 42 + x);

test('forEach mock function', () => {
    const result = forEach([0, 1], mockCallback);

    // this expectation is for *incorrect behavior*,  the answer should really be [42,43]
    expect(result).toStrictEqual([undefined, undefined]);

    // The mock function was called twice
    expect(mockCallback.mock.calls).toHaveLength(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);
});