/// <reference path="./interfaces.ts" />
/// <reference path="./pagarme/processor.ts" />
/// <reference path="./pagarme/factory.ts" />
/// <reference path="./mercadopago/processor.ts" />
/// <reference path="./mercadopago/factory.ts" />
/// <reference path="./pix/processor.ts" />
/// <reference path="./pix/factory.ts" />
/// <reference path="./checkout/checkout.ts" />

// Código cliente que demonstra o uso do Factory Method
console.log("=== Pagamento com Cartão de Crédito PagarMe ===");
// Observe que o cliente não precisa conhecer os parâmetros específicos
const checkoutPagarme = new WithFactoryMethod.CheckoutFactory(
  new WithFactoryMethod.PagarMeFactory()
);
checkoutPagarme.processPayment(1000);

// Exemplo com Cartão de Crédito MercadoPago
console.log("\n=== Pagamento com Cartão de Crédito MercadoPago ===");
// Observe que o cliente não precisa conhecer os parâmetros específicos
const checkoutMercadoPago = new WithFactoryMethod.CheckoutFactory(
  new WithFactoryMethod.MercadoPagoFactory()
);
checkoutMercadoPago.processPayment(1500);

// Exemplo com PIX
console.log("\n=== Pagamento com PIX ===");
// Observe que o cliente não precisa conhecer os parâmetros específicos
const checkoutPix = new WithFactoryMethod.CheckoutFactory(
  new WithFactoryMethod.PixFactory()
);
checkoutPix.processPayment(2000);
