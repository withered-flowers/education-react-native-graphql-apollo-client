const { Todo } = require("../models/index.js");

const todoGetAll = async (_req, res, next) => {
  try {
    // Assumption: This is a very heavy query which need a super long time duration
    await new Promise((r) => setTimeout(r, 2000));

    const todos = await Todo.findAll();

    res.status(200).json({
      statusCode: 200,
      data: todos,
    });
  } catch (err) {
    next(err);
  }
};

const todoGetById = async (req, res, next) => {
  try {
    // Assumption: This is a very heavy query which need a super long time duration
    await new Promise((r) => setTimeout(r, 2000));

    const { id } = req.params;

    const todos = await Todo.findByPk(id);

    res.status(200).json({
      statusCode: 200,
      data: todos,
    });
  } catch (err) {
    next(err);
  }
};

const todoPost = async (req, res, next) => {
  try {
    console.log(req.body, "req.body");
    console.log(req.headers, "req.headers");
    const { name } = req.body;

    const { id: newTodoId } = await Todo.create({
      name,
    });

    res.status(201).json({
      statusCode: 201,
      message: `${newTodoId} has been created successfully !`,
    });
  } catch (err) {
    next(err);
  }
};

const todoDelete = async (req, res, next) => {
  const { id } = req.params;

  await Todo.destroy({
    where: {
      id: Number(id),
    },
  });

  res.status(200).json({
    statusCode: 200,
    message: `Todo with id ${id} has been deleted successfully`,
  });
};

module.exports = {
  todoGetAll,
  todoGetById,
  todoPost,
  todoDelete,
};
