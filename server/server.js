import fs from 'graceful-fs'
import BigCommerce from 'node-bigcommerce'
import log from './util/log.js'
import apiAuth from "./util/auth.js";
import express from 'express'

const app = express()

const apiKeysJson = fs.readFileSync("./apiKeys.json") || '{}';
const apiKeys = JSON.parse(apiKeysJson);

const bigCommerce = new BigCommerce(apiKeys);

app.use(express.json());

app.get("/api", (req, res) => {
    res.json({"connection": "success"})
})

// Get a specific customer by ID
app.get('/api/customers/:id', apiAuth, (req, res) => {
    log('Call to /api/customers/:id. Request: ' + JSON.stringify(req.params))
    
    const customerId = req.params.id

    bigCommerce.get('/customers?id:in=' + customerId)
        .then(response => {
            res.json(response.data[0])
        })
        .catch(err => {
            log('Response error: ' + err)
            res.sendStatus(500)
        });
});

app.listen(4000, () => { console.log("Server started on Port 4000") })