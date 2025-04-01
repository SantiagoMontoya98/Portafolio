import React, { useState, createContext } from "react";

const StylesContext = createContext();

const StylesProvider = ({children}) => {

  const [colorLink, setColorLink] = useState({
  
      hola: "var(--color-verde)",
      textHola: "underline",
      proyectos: "",
      textProyectos: "",
      contacto: "",
      textContacto: ""
  
    });

  const [openBurger, setOpenBurger] = useState(false);

  const changeStyles = (target) => {   

     if(target.matches("#hola")){

      setColorLink({

        hola: "var(--color-verde)",
        textHola: "underline",
        proyectos: "",
        textProyectos: "",
        contacto: "",
        textContacto: ""

      })

    }

    if(target.matches("#proyectos")){      

      setColorLink({

        hola: "",
        textHola: "",
        proyectos: "var(--color-verde)",
        textProyectos: "underline",
        contacto: "",
        textContacto: ""

      })

    }

    if(target.matches("#contacto")){      

      setColorLink({

        hola: "",
        textHola: "",
        proyectos: "",
        textProyectos: "",
        contacto: "var(--color-verde)",
        textContacto: "underline"

      })

    }    

   }

  const handleChangeStyles = ({target}) => changeStyles(target);  

   const handleChangeStylesBurger = ({target}) => {

    changeStyles(target)
    setOpenBurger(false)

  }

  const handleOpenBurger = (atr) => setOpenBurger(atr);  

  const data = {colorLink, handleChangeStyles, openBurger, handleOpenBurger, handleChangeStylesBurger}
  
  return <StylesContext.Provider value={data}>{children}</StylesContext.Provider>

}

export {StylesProvider};
export default StylesContext;