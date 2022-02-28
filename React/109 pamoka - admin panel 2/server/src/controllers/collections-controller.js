import database from '../database/index.js';
import { v4 as createId } from 'uuid';

export const getCollections = (req, res) => {
  const collections = database.data.collections.map(collection => ({
    ...collection,
    data: database.data[collection.title],
  }));
  res.status(200).json(collections);
}

export const getCollection = (req, res) => {
  const { collectionId } = req.params
  const collectionRef = database.data.collections.find(x => x.id === collectionId);
  const collectionTitle = collectionRef.title;
  const collection = {
    id: collectionId,
    title: collectionTitle,
    data: database.data[collectionTitle],
  };

  res.status(200).json(collection);
}

export const createCollectionItem = (req, res) => {
  const { collectionId } = req.params;
  const { title } = req.body;

  const collectionRef = database.data.collections.find(x => x.id === collectionId);
  const collection = database.data[collectionRef.title];

  const newItem = {
    id: createId(),
    title,
  };
  collection.push(newItem);
  database.write();

  res.status(201).json(newItem);
}