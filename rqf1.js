// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.1';
const port = process.env.$PORT || process.env.PORT || 4000;

const start = async () => {
    try {
        await fastify.listen({ port: port, host: host })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
};
// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'jjjj' }
})

const res1 = ['kudu', 'mac', 'kfc'];
fastify.get('/res1', (req, res) => {
    return res1

});

fastify.post('/res1', (req, res) => {
    const newrest = req.body;
    console.log(newrest);
    return res1

});

/////////////

const makeup = ['Mac', 'TheBalm', 'Nars'];
fastify.get('/makeup', (req, res) => {
    return makeup

});

fastify.post('/makeup', (req, res) => {
    const newm = req.body;
    console.log(newm);
    return makeup

});

////////////

const cars = ['BMW', 'Ford', 'Bins'];
fastify.get('/cars', (req, res) => {
    return cars

});

fastify.post('/cars', (req, res) => {
    const newc = req.body;
    console.log(newc);
    return cars
});

//////////////////////

start() 