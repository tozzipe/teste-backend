const { User, Wallet, Coin, Offer } = require('../models');

exports.WalletByUserId = async (req, res, next) => {
  const userId = req.header("userId");

  const userDataReturn = await User.findOne({ where: { userId } });
  const walletDataReturn = await Wallet.findOne({ where: { userId } });

  if (!userDataReturn || !walletDataReturn) {
    return res.status(404).json({ mensagem: "Usuário ou carteira não encontrados" });
  }

  const walletId = walletDataReturn.walletId;
  const walletCoinsList = await Coin.findAll({ where: { walletId } });
  const myOffers = await Offer.findAll({ where: { walletId } });

  const userWithWalletAndCoins = {
    user: {
      firstName: userDataReturn.firstName,
      email: userDataReturn.email,
      createdAt: userDataReturn.createdAt,
    },
    wallet: {
      walletId: walletDataReturn.walletId,
      createdAt: walletDataReturn.createdAt,
    },
    walletCoinsList,
    myOffers,
  };

  return res.status(200).json({ userWithWalletAndCoins });
};
