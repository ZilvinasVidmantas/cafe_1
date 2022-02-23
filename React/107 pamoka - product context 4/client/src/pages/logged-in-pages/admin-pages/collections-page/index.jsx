import React, { useState, useEffect } from 'react';

const CollectionsPage = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:5000/api/collections');
      const fetchedCollections = await response.json();
      setCollections(fetchedCollections);

      console.log(fetchedCollections);
    })();
  }, []);

  return (
    <pre>{JSON.stringify(collections, null, 4)}</pre>
  );
};

export default CollectionsPage;
