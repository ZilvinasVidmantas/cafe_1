import React, { useState, useEffect } from 'react';
import CollectionService from './services/collections-service';

const CollectionsPage = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedCollections = await CollectionService.getUsers();
      setCollections(fetchedCollections);
    })();
  }, []);

  return (
    <pre>{JSON.stringify(collections, null, 4)}</pre>
  );
};

export default CollectionsPage;
