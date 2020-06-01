import express, { request } from 'express';

const app = express();

app.use(express.json());

    app.get('/', (request, response) => {
        const { name } = request.query;

        console.log(name);

        response.json({
            alumni: name,
            email: 'gabriel.cancio02@gmail.com',
            event: 'Next Level Week',
            version: 1
        });
    });

app.listen(3333);