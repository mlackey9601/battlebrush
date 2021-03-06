const express = require('express');
const router = express.Router();
const paintsCtrl = require('../../controllers/paints');

router.use(require('../../config/auth'));
router.get('/', checkAuth, paintsCtrl.index);

router.post('/', checkAuth, paintsCtrl.create);
router.put('/:idx', checkAuth, paintsCtrl.update);
router.delete('/:id', checkAuth,  paintsCtrl.delete);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
