import express, { Request, Response, Application } from 'express'
const app: Application = express()

require('dotenv').config()
const port = process.env.PORT;

interface User {
  name: string;
  city: string;
}

const users: User[] = [
  { name: "Matheus Eduardo", city: "Crato" },
  { name: "Ana Vitoria", city: "Juazeiro" },
  { name: "Cicero Breno", city: "Juazeiro" },
  { name: "Claudio Junior", city: "Crato" },
  { name: "Francisca Natalia", city: "Crato" },
  { name: "Francinilton Junior", city: "Crato" },
  { name: "Alex Furtado", city: "Crato" },
  { name: "Jhonatan Sousa", city: "Crato" },
  { name: "Fulaninho da Silva", city: "Juazeiro" },
  { name: "Oswaldo Machado da Silva", city: "Fortaleza" },
]

app.get('/usuario/todos', (_req: Request, res: Response) => {
  res.json(users)
})

app.get('/usuario/sorteado', (_req: Request, res: Response) => {
  const randomIndex = Math.floor(Math.random() * users.length);
  res.json(users[randomIndex]);
})

app.get('/usuario/:cidade', (req: Request, res: Response) => {
  res.json(
    users.filter((user) => user.city === req.params.cidade)
  );
})


console.log(`Server starting on port ${port}`)
app.listen(port)
