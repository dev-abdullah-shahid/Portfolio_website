import React, { createContext, useState } from 'react';

export const TitleContext = createContext();

const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState('My Portfolio');
  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export default TitleProvider;
