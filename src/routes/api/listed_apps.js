module.exports = (express) => {
  const router = express.Router();
  const app = require('../../models/app');
  const util = require('apex-util');

  // Create
  router.put('/listed_app/:list_id/:app_id', (req, res) => {
    const payload = util.scrubData(req.body);
    payload.listId = req.params.list_id;
    payload.appId = req.params.app_id;

    app.addToList(payload, (err) => {
      // Error Encountered
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Delete One
  router.delete('/listed_app/:list_id/:app_id', (req, res) => {
    const payload = util.scrubData(req.body);
    payload.listId = req.params.list_id;
    payload.appId = req.params.app_id;

    app.removeFromList(payload, (err) => {
      // Error Encountered
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json({
        success: data,
      });
    });
  });

  return router;
};
