const { User, Wallet, Coin, Offer, Favorite } = require('../models');
const { Sequelize, Op } = require('sequelize');

async function findUserWallet(userId) {
  return await Wallet.findOne({ where: { userId } });
}

async function checkWalletHasTokens(walletId) {
  return await Coin.count({ where: { walletId } }) > 0;
}

async function findCoinBalance(coin) {
  return await Coin.findOne({ where: { coin } });
}


exports.createOffer = async (req, res, next) => {
  const userId = req.header("userId");
  const { coin, amount } = req.body;

  const walletData = await findUserWallet(userId);

  if (!walletData) {
    return res.status(403).json({ mensagem: "Usuário não possui carteira" });
  }

  const walletId = walletData.walletId;

  if (!(await checkWalletHasTokens(walletId))) {
    return res.status(403).json({ mensagem: "Carteira não contém tokens para ofertar" });
  }

  const balanceValidOffer = await findCoinBalance(coin);

  if (!balanceValidOffer || balanceValidOffer.balance < amount) {
    return res.status(403).json({ mensagem: `Saldo em ${coin} é insuficiente para formalizar a oferta` });
  }
  
  const offersDayLimit = await Offer.count({ where: { walletId } })

  if (offersDayLimit === 5){
    return res.status(403).json({ mensagem: "Você atingiu o limite diário de ofertas" });
  }

  const offerData = {
    walletId,
    coin,
    amount,
  };

  const addNewOffer = await Offer.create(offerData);
  return res.status(200).json(addNewOffer);
};

exports.deleteOffer = async (req, res, next) => {
  const userId = req.header("userId");
  const walletOfUser = await findUserWallet(userId);

  if (!walletOfUser) {
    return res.status(403).json({ mensagem: "Usuário não possui carteira" });
  }

  const walletId = walletOfUser.walletId;
  const offerId = req.params.id;

  const validateOfferOwner = await Offer.count({ where: { id: offerId, walletId } });

  if (validateOfferOwner <= 0) {
    return res.status(403).json({ mensagem: "Esta oferta só pode ser excluída pelo dono" });
  }

  await Offer.update({ isDeleted: true }, { where: { id: offerId } });
  return res.status(200).json('Oferta excluída com sucesso');
};

exports.listOffers = async (req, res, next) => {
  const userId = req.header("userId");
  const walletData = await findUserWallet(userId);

  if (!walletData) {
    return res.status(403).json({ mensagem: "Usuário não possui carteira" });
  }

  const walletId = walletData.walletId;
  const myFavoritesOffers = await Favorite.findAll({ where: { walletId } });
  const offersList = await Offer.findAll({
    where: {
      createdAt: {
        [Op.lte]: new Date(),
      },
      isDeleted: false,
    },
  });

  const arrayFavorites = {};

  myFavoritesOffers.forEach(item => {
    arrayFavorites[item.offerId] = item;
  });

  const resultadoMapeado = offersList.map(item => {
    const newArray = {
      offerId: item.id,
      walletId: item.walletId,
      coin: item.coin,
      amount: item.amount,
      isFavorite: !!arrayFavorites[item.id],
    };

    return newArray;
  });

  res.json({ offersList: resultadoMapeado });
};

exports.setOfferFavorite = async (req, res, next) => {
  const userId = req.header("userId");
  const getWalletId = await findUserWallet(userId);

  if (!getWalletId) {
    return res.status(403).json({ mensagem: "Usuário não possui carteira" });
  }

  const walletId = getWalletId.walletId;
  const offerId = req.params.id;

  if (!offerId) {
    return res.status(403).json({ mensagem: "Selecione uma oferta para torná-la favorita" });
  }

  const dataFavorite = {
    walletId,
    offerId,
  };

  const setFavorite = await Favorite.create(dataFavorite);
  return res.status(200).json(setFavorite);
};

exports.setOfferUnfavorite = async (req, res, next) => {
  const userId = req.header("userId");
  const getWalletId = await findUserWallet(userId);

  if (!getWalletId) {
    return res.status(403).json({ mensagem: "Usuário não possui carteira" });
  }

  const walletId = getWalletId.walletId;
  const offerId = req.params.id;

  if (!offerId) {
    return res.status(403).json({ mensagem: "Selecione uma oferta para remover dos favoritos" });
  }

  const setUnfavorite = await Favorite.destroy({ where: { walletId, offerId } });
  return res.status(200).json(setUnfavorite);
};

exports.getMyFavorites = async (req, res, next) => {
  const userId = req.header("userId");
  const getWalletId = await findUserWallet(userId);

  if (!getWalletId) {
    return res.status(403).json({ mensagem: "Usuário não possui carteira" });
  }

  const walletId = getWalletId.walletId;
  const myFavorites = await Favorite.findAll({ where: { walletId } });
  return res.status(200).json(myFavorites);
};