/// <reference path="./interfaces.ts" />
/// <reference path="./pagarme/processor.ts" />
/// <reference path="./mercadopago/processor.ts" />
/// <reference path="./pix/processor.ts" />
/// <reference path="./checkout/checkout.ts" />

// Código cliente que demonstra o uso sem Factory Method
console.log("=== Pagamento com Cartão de Crédito PagarMe ===");
// Observe que precisamos criar manualmente o processador com parâmetros específicos
const checkout = new WithoutFactoryMethod.Checkout();
const pagarmeProcessor = new WithoutFactoryMethod.PagarMeProcessor(
  "ak_test_dH7KHfJJJJrytytr6HgJHG",
  3,
  true
);
checkout.processPayment(1000, pagarmeProcessor);

// Exemplo com Cartão de Crédito MercadoPago
console.log("\n=== Pagamento com Cartão de Crédito MercadoPago ===");
// Observe que precisamos criar manualmente o processador com parâmetros específicos
const mercadoPagoProcessor = new WithoutFactoryMethod.MercadoPagoProcessor(
  "TEST-7890123456789012-123456",
  2
);
checkout.processPayment(1500, mercadoPagoProcessor);

// Exemplo com PIX
console.log("\n=== Pagamento com PIX ===");
// Observe que precisamos criar manualmente o processador com parâmetros específicos
const pixProcessor = new WithoutFactoryMethod.PixProcessor(
  "email@exemplo.com",
  "Loja Virtual LTDA"
);
checkout.processPayment(2000, pixProcessor);

// Exemplo de como seria difícil adicionar um novo método de pagamento
// Se quiséssemos adicionar Boleto, por exemplo:
/*
console.log("\n=== Pagamento com Boleto ===");
const boletoProcessor = new WithoutFactoryMethod.BoletoProcessor(
  "123456789",
  "Loja Virtual LTDA",
  3
);
checkout.processPayment(2500, boletoProcessor);
*/
