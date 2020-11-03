const express = require('express');
const stripe = require('stripe')('sk_test_51Hh7GSDCUMC8SpWDMjJOEKTcIfwfLVlKQxGaPqvuMiMxF1vwFhrTu6tJBtyOERwUfq5Ks9uckfKDgNSw4ZATEp1A00bJ7K2VaH');

const app = express();



app.listen(3000, () => {
    console.log("server is connected on port 3000..!!!")
});


//Create new Customer

var createCustomer = function () {
    var param = {}
    param.email = "basil@gmail.com";
    param.name = "basil";
    param.description = "form node";

    stripe.customers.create(param, (err, customer) => {
        if (err) {
            console.log(err)
        }
        if (customer) {
            console.log("success" + customer)
        }
        else {
            console.log("something wrong")
        }
    })
}

createCustomer();

//Retrive Customer

var retriveCustomer = function () {

    stripe.customers.retrieve(id = "cus_IHhr9WSDOCyqXZ", (err, customer) => {
        if (err) {
            console.log(err)
        }
        if (customer) {
            console.log("success" + JSON.stringify(customer, replacer = null, space = 2))
        }
        else {
            console.log("something wrong")
        }
    })
}

retriveCustomer();

// Create Token

var createToken = function () {

    var param = {};
    param.card = {
        number: '4242424242424242',
        exp_month: 2,
        exp_year: 2025,
        cvc: '212'
    }

    stripe.tokens.create(param, (err, token) => {
        if (err) {
            console.log(err)
        }
        if (token) {

            console.log("success" + JSON.stringify(token, replacer = null, space = 2))
        }
        else {
            console.log("something wrong")
        }
    })
}

createToken();

// Add Card to customer

var addCardtoCustomer = function () {
    stripe.customers.createSource(id = 'cus_IHjfDO80H6rUZM', params = { source: 'tok_1HhBBIDCUMC8SpWDnNmrfXJi' }, (err, card) => {
        if (err) {
            console.log(err)
        }
        if (card) {

            console.log("success" + JSON.stringify(card, replacer = null, space = 2))
        }
        else {
            console.log("something wrong")
        }
    })
}

addCardtoCustomer();

// Charge a customer through CustonerID

var chargeaCustomerThroughCustomerID = function () {

    var param = {
        amount: '2000',
        currency: 'INR',
        description: 'first payment',
        customer: 'cus_IHjfDO80H6rUZM'
    }

    stripe.charges.create(param, (err, charge) => {
        if (err) {
            console.log(err)
        }
        if (charge) {

            console.log("success" + JSON.stringify(charge, replacer = null, space = 2))
        }
        else {
            console.log("something wrong")
        }
    })
}

chargeaCustomerThroughCustomerID()


//Charhe with Token


var chargeaCustomerThroughTokenID = function () {

    var param = {
        amount: '2000',
        currency: 'INR',
        description: 'first payment',
        source: 'tok_1HhBBIDCUMC8SpWDnNmrfXJi'
    }

    stripe.charges.create(param, (err, charge) => {
        if (err) {
            console.log(err)
        }
        if (charge) {

            console.log("success" + JSON.stringify(charge, replacer = null, space = 2))
        }
        else {
            console.log("something wrong")
        }
    })
}

chargeaCustomerThroughTokenID()

//Get All Customers

var getAllCustomers= function(){

    stripe.customers.list((err, customers) => {
        if (err) {
            console.log(err)
        }
        if (customers) {

            console.log("success" + JSON.stringify(customers, replacer = null, space = 2))
        }
        else {
            console.log("something wrong")
        }
    })
}

getAllCustomers();