let menu =[
    {
        nombre: "Pizza",
        contenido : [
            {
                nombre: "Margherita",
                descripcion: "Tomato sauce, mozzarella, basil (calamata olives optional).",
                precio: 2000
            },
            {
                nombre: "Cabbage Bianca",
                descripcion: "Fermented shallots, carmalized purple onions, fresh green onion.",
                precio: 2400
            },
            {
                nombre: "Pecorino",
                descripcion: "Arugula, pecorino, cold olives.",
                precio: 2400
            },
            {
                nombre: "Hertz",
                descripcion: "Hertz pepperoni, smoked paprika, arugula.",
                precio: 2900
            },
            {
                nombre: "Bianca Bacon",
                descripcion: "Bacon, egg, black pepper, fresh green onion.",
                precio: 3000
            },
            {
                nombre: "Hertz",
                descripcion: "Hertz pepperoni, smoked paprika, arugula.",
                precio: 2900
            },
            {
                nombre: "Bianca Bacon",
                descripcion: "Bacon, egg, black pepper, fresh green onion.",
                precio: 3000
            }
        ]
    },

    {
        nombre: "Sandwich",
        contenido : [
            {
                nombre: "Mozzarella",
                descripcion: "Mozzarella, tomatoes, olive oil, basil.",
                precio: 2000
            },
            {
                nombre: "Hertz",
                descripcion: "Mozzarella, hertz, tomatoes, olive oil.",
                precio: 2000
            },
            {
                nombre: "Feta",
                descripcion: "- Arugula aioli, sheeps feta, tomatoes.",
                precio: 2000
            },
            {
                nombre: "Artichoke",
                descripcion: "Pistachio pesto, Artichoke, tomatoes",
                precio: 2000
            },
            {
                nombre: "Hertz",
                descripcion: "Hertz pepperoni, smoked paprika, arugula.",
                precio: 2900
            },
            {
                nombre: "Bianca Bacon",
                descripcion: "Bacon, egg, black pepper, fresh green onion.",
                precio: 3000
            }
        ]
    },

    {
        nombre: "Sandwich",
        contenido : [
            {
                nombre: "Mozzarella",
                descripcion: "Mozzarella, tomatoes, olive oil, basil.",
                precio: 2000
            },
            {
                nombre: "Hertz",
                descripcion: "Mozzarella, hertz, tomatoes, olive oil.",
                precio: 2000
            },
            {
                nombre: "Feta",
                descripcion: "- Arugula aioli, sheeps feta, tomatoes.",
                precio: 2000
            },
            {
                nombre: "Artichoke",
                descripcion: "Pistachio pesto, Artichoke, tomatoes",
                precio: 2000
            },
            {
                nombre: "Hertz",
                descripcion: "Hertz pepperoni, smoked paprika, arugula.",
                precio: 2900
            },
            {
                nombre: "Bianca Bacon",
                descripcion: "Bacon, egg, black pepper, fresh green onion.",
                precio: 3000
            }
        ]
    },

    {
        nombre: "Tragos",
        contenido : [
            {
                nombre: "Mozzarella",
                descripcion: "Mozzarella, tomatoes, olive oil, basil.",
                precio: 2000
            },
            {
                nombre: "Hertz",
                descripcion: "Mozzarella, hertz, tomatoes, olive oil.",
                precio: 2000
            },
            {
                nombre: "Feta",
                descripcion: "- Arugula aioli, sheeps feta, tomatoes.",
                precio: 2000
            },
            {
                nombre: "Artichoke",
                descripcion: "Pistachio pesto, Artichoke, tomatoes",
                precio: 2000
            },
            {
                nombre: "Hertz",
                descripcion: "Hertz pepperoni, smoked paprika, arugula.",
                precio: 2900
            },
            {
                nombre: "Bianca Bacon",
                descripcion: "Bacon, egg, black pepper, fresh green onion.",
                precio: 3000
            }
        ]
    },
    
    {
        nombre: "Bebidas sin alchol",
        contenido : [
            {
                nombre: "Mozzarella",
                descripcion: "Mozzarella, tomatoes, olive oil, basil.",
                precio: 2000
            },
            {
                nombre: "Hertz",
                descripcion: "Mozzarella, hertz, tomatoes, olive oil.",
                precio: 2000
            },
            {
                nombre: "Feta",
                descripcion: "- Arugula aioli, sheeps feta, tomatoes.",
                precio: 2000
            },
            {
                nombre: "Artichoke",
                descripcion: "Pistachio pesto, Artichoke, tomatoes",
                precio: 2000
            },
            {
                nombre: "Hertz",
                descripcion: "Hertz pepperoni, smoked paprika, arugula.",
                precio: 2900
            },
            {
                nombre: "Bianca Bacon",
                descripcion: "Bacon, egg, black pepper, fresh green onion.",
                precio: 3000
            }
        ]
    }
    
]

const getMenu = () => {
  return new Promise((resolve, reject) => {
      try {
        if(menu){
          resolve(menu)
        }
      } 
      catch{
        console.error('Error fetching menu:', error)
      }
  });
};


export default getMenu;
