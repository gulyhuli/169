const kb = require ('./keyboard-buttons')

module.exports = {
  home: [
    [kb.home.bouqets],
    [kb.home.packaging, kb.home.gifts],
    [kb.home.cart]
  ],
  cart: [
    [kb.cart.clear],
    [kb.cart.order]
  ]
}