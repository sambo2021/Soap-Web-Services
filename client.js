const express = require('express');
const soap = require('soap');
const url = 'http://localhost:3030/calculator?wsdl';
const args = { intA: 10, intB: 5 };
soap.createClient(url, function(err, client) {
  if (err) console.error(err);
  else {
    client.Add(args, function(err, response) {
      if (err) console.error(err);
      else {
        console.log(response);
        //res.send(response);
      }
    });
    client.Subtract(args, function(err, response) {
        if (err) console.error(err);
        else {
          console.log(response);
          //res.send(response);
        }
      });
      client.Multiply(args, function(err, response) {
        if (err) console.error(err);
        else {
          console.log(response);
          //res.send(response);
        }
      });
      client.Divide(args, function(err, response) {
        if (err) console.error(err);
        else {
          console.log(response);
          //res.send(response);
        }
      });
  }
});