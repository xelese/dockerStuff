/**
 * basic index.js that counts the visits to this site.
 */
const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    // specify the name of the container, the express client will figure it out internally
    // also the docker knows this name, so they will connect.
    host: 'redis-server',
    // default redis port
    port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('listening on port 8081');
})