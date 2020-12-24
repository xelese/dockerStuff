/**
 * basic index.js that counts the 2_visits to this site.
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
client.set('2_visits', 0);

app.get('/', (req, res) => {
    client.get('2_visits', (err, visits) => {
        res.send('Number of 2_visits is ' + visits);
        client.set('2_visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('listening on port 8081');
})