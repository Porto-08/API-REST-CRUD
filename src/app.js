const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const User = require("./models/User");

app.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.json({ message: "Erro ao resgatar os dados." });
    console.log(err);
  }
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    res.json(user);
  } catch (err) {
    console.log(err);
    res.json({ message: "Erro ao Resgatar o Usuario" });
  }
});

app.post("/", async (req, res) => {
  if (req.body.name === '' || req.body.email === '' || req.body.cpf === '') {
    res.json({ message: "Os campos não podem estar vazios." });
  }

  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      cpf: req.body.cpf,
    });

    res.json(user);
  } catch (err) {
    res.json({
      message:
        "Houve um erro ao cadastrar o usuario, tente novamente mais tarde.",
    });
    console.log(err);
  }
});

app.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);

    user.name = req.body.name;
    user.email = req.body.email;
    user.cpf = req.body.cpf;

    await user.save();

    res.json(user);
  } catch (err) {
    res.json({
      message: "Erro ao editar o Usuario, tente novamente mais tarde.",
    });
  }
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);

    user.destroy();

    res.json("Usuario deletado com sucesso.");
  } catch (err) {
    res.json({
      message: "Erro ao deletar o Usuario. Tente novamente mais tarde.",
    });
    console.log(err);
  }
});

app.listen(3333, () => {
  console.log("Rodando na porta 3333");
});
