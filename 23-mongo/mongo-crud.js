// Listar e filtrar 
db.inventory.find({ qty: { $lt: 20 } })

// Quantidade de elementos
db.restaurants.count()

// ordenar elementos
db.colecao.find().sort({ nomeDoAtributo: 1 })

// deletar elementos
db.inventory.deleteOne({ status: "D" })
db.inventory.deleteMany({ status: "A" })

// updates - simples
db.products.update(
  { _id: 1 },
  { $mul: { price: NumberDecimal("1.25"), qty: 2 } }
);

// updates - complexos
// adiciona uma parte a mais no valor que ja esta registrado no banco
// metodos: push, pop, pull, addToSet
// e tem tbm os arrays filters
db.supplies.updateOne(
  { _id: 1 },
  {
    $push: {
      items: {
        "name": "notepad",
        "price": 35.29,
        "quantity": 2,
      },
    },
  },
  { upsert: true },
);