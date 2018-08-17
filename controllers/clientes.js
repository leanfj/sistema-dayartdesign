exports.listaClientes = function(req, res, next) {
  res.json({ teste: "clientes" });
};

exports.cadastraClientes = function(req, res, next) {
  res.status(201).json(req.body);
};

exports.atualizaClientes = function(req, res, next) {
  let clienteId = req.params.id;
  res.json({
    id: clienteId,
    dados: req.body
  });
};

exports.removeClientes = function(req, res, next) {
  res.json(req.body);
};
