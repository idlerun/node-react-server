module.exports = (app) => {
  app.get('/hello/:name', (req, res) => {
  	console.log("Got a request with name=" + req.params.name);
    res.status(200).send("Hello " + req.params.name);
  })
}
