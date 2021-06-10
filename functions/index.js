const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")('STRIPE_API_KEY');

//App config
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//Api routes
app.get('/', (request, response) => response.status(200).send('hello World'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment request received >>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })

    //ok created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//listen command
exports.api = functions.https.onRequest(app)

// endpoint
// http://localhost:5001/clone-9f287/us-central1/api