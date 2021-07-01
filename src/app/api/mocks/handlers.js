import { rest } from 'msw';

export const handlers = [
    rest.get('/user', (req, res, ctx) => {
        console.log(req, ctx);
        return res(
            ctx.status(200),
            ctx.json({
                data: [{ id: 1, name: 'resting' }],
            })
        );
    }),
];
