const mongoose = require('mongoose');
const message = require('../../utils/messages');
const { get } = require('lodash');
const createEventQuery = require('../queries/create');

async function eventCreate(req, res) {
  const _id = new mongoose.Types.ObjectId();

  const name = get(req, 'body.name');
  const description = get(req, 'body.description');

  const createEventQueryResult = await createEventQuery({
    _id,
    name,
    description,
  });

  if (createEventQueryResult.success) {
    res.status(200).json(createEventQueryResult);
  } else {
    res.status(400).json(message.fail('Event create error'));
  }
}

module.exports = eventCreate;
