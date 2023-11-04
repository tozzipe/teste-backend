module.exports = (app) => {
  const authApp = require('../middleware/userValidation');
  const WalletController = require('../controllers/walletController');
  const OfferController = require('../controllers/offerController');

  const router = require('express').Router();

  router.get('/wallet', authApp, WalletController.WalletByUserId);
  router.get('/offers', authApp, OfferController.listOffers);
  router.post('/offer', authApp, OfferController.createOffer);
  router.delete('/offer/:id', authApp, OfferController.deleteOffer);
  router.get('/favorites', authApp, OfferController.getMyFavorites);
  router.post('/favorite/:id', authApp, OfferController.setOfferFavorite);
  router.delete('/favorite/:id', authApp, OfferController.setOfferUnfavorite);

  app.use('/api', router);
};

