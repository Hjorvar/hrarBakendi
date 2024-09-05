exports.basicIndex = async (req, res) => {
  try {
    const text = 'Hello World!';
    res.render('pages/index', { text });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

