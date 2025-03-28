import { createContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const CollectionContext = createContext();

export const CollectionProvider = ({ collectionId, children }) => {
  const [collection, setCollection] = useState(null);
  const [products, setProducts] = useState([]);
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (collectionId) {
          // Fetch specific collection
          const response = await axios.get(
            `http://localhost:3001/collections/${collectionId}`
          );
          const collectionData = response.data;

          if (collectionData) {
            setCollection(collectionData);
            setProducts(collectionData.products);
          } else {
            throw new Error("Collection not found");
          }
        } else {
          // Fetch all collections
          const response = await axios.get(`http://localhost:3001/collections`);
          const collectionsData = response.data;

          // The data is already formatted by the server, so we can use it directly
          setCollections(collectionsData);
        }
      } catch (error) {
        console.error("Error fetching collections:", error);
        setError("Unable to load collections. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionId]);

  return (
    <CollectionContext.Provider
      value={{
        collection,
        products,
        collections,
        loading,
        error,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

CollectionProvider.propTypes = {
  collectionId: PropTypes.string,
  children: PropTypes.node.isRequired,
};
