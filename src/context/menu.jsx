import React, { createContext, useEffect, useState } from "react";
import getMenu from '../getMenu.js';

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    getMenu()
      .then(res => {
        setMenu(res);
      })
      .catch(error => console.error('Error fetching menu:', error));
  }, []);

  return (
    <MenuContext.Provider value={menu}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider, MenuContext };