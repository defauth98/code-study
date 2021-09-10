import React, { createContext, useState } from 'react';

const loginContext = createContext();

function loginContextWrapper({ children }) {
  const [number, setNumber] = useState(0)

  function setNewNumber() {
    setNumber(10)
  }

  return (
    <loginContext.Provider value={number}>
      {children}
    </loginContext.Provider>
  )
}