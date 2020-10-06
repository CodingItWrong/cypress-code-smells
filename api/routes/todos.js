const express = require('express');
const {Serializer, Deserializer} = require('jsonapi-serializer');
const db = require('../models');
const {Todo} = db;

const contentType = 'application/vnd.api+json';

const todoSerializer = new Serializer('todos', {
  attributes: ['name', 'uuid'],
});
const todoDeserializer = new Deserializer();

const todoRouter = express.Router();
todoRouter
  .route('/')
  .get(getTodos)
  .post(express.json({type: contentType}), createTodo);

async function getTodos(req, res) {
  const todos = await Todo.findAll();

  res.type(contentType);
  res.send(todoSerializer.serialize(todos));
}

async function createTodo(req, res) {
  console.log('HIHIHI', req.body);
  try {
    const attributes = await todoDeserializer.deserialize(req.body);
    console.log({attributes});
    const todo = await Todo.create(attributes);
    const serializedTodo = todoSerializer.serialize(todo);

    // send http response
    res.type(contentType);
    res.status(201);
    res.send(serializedTodo);
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
}

module.exports = todoRouter;
