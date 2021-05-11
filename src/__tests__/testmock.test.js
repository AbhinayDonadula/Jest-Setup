import { add } from '../app/utils';

jest.mock('../app/utils', () => ({
    add: jest.fn((a, b) => 1000),
    default: jest.fn(() => {}),
}));

beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
});

describe('mock functions', () => {
    test('mock sync func', () => {
        const mockAdd = jest.fn().mockReturnValue(300);
        // const mockAdd = jest.fn().mockImplementation((a, b) => a + b);

        const mockHandler = jest
            .fn()
            .mockName('Abhinay')
            .mockImplementation(() => {});

        expect(mockAdd(100, 200)).toEqual(300);
        mockHandler();
        expect(mockHandler).toBeCalledTimes(1);
    });

    test('mock async func', async () => {
        const mockAsyncFunc = jest
            .fn()
            .mockResolvedValueOnce({ users: [{ name: 'Abhinay' }] })
            .mockRejectedValueOnce('ABhinayyyyyyyyyyy');
        const data = await mockAsyncFunc();
        expect(data).toContainKey('users');

        expect(mockAsyncFunc()).toReject();
    });

    test('mock modules', async () => {
        console.log(add(1, 2));
    });
});
