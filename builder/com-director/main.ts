/// <reference path="./interfaces/interfaces.ts" />
/// <reference path="./checkout/order-checkout.ts" />
/// <reference path="./builders/credit-card-builder.ts" />
/// <reference path="./builders/pix-builder.ts" />
/// <reference path="./director/checkout-director.ts" />

namespace WithDirector {
  // Código cliente demonstrando o uso do Builder Pattern com Director
  console.log("=== Builder Pattern Example (With Director) ===");

  // Cria o director
  const director = new CheckoutDirector();

  // Exemplo 1: Checkout básico com cartão de crédito
  console.log("\n--- Basic Credit Card Checkout ---");

  // Cria e configura o builder com detalhes específicos
  const creditCardBuilder = new CreditCardCheckoutBuilder();
  creditCardBuilder
    .setCardNumber("4111111111111111")
    .setCardHolderName("John Doe")
    .setCardExpiration("12/25")
    .setCardCvv("123");

  // O director controla a construção do objeto
  // Observe que não precisamos configurar os dados do cartão novamente
  director.createBasicCreditCardCheckout(
    creditCardBuilder,
    "CC-12345",
    "customer@example.com",
    "Laptop",
    1299.99
  );

  // Obtém o resultado diretamente do builder
  const basicCreditCardOrder = creditCardBuilder.getResult();

  console.log(`Order Summary: ${basicCreditCardOrder.getSummary()}`);
  console.log(
    `Total Amount: $${basicCreditCardOrder.getTotalAmount().toFixed(2)}`
  );

  // Exemplo 2: Checkout básico com PIX
  console.log("\n--- Basic PIX Checkout ---");

  // Cria e configura o builder com detalhes específicos
  const pixBuilder = new PixCheckoutBuilder();
  pixBuilder.setPixKey("example@pix.com").setPayerName("Jane Smith");

  // O director controla a construção do objeto
  // Observe que não precisamos configurar os dados do PIX novamente
  director.createBasicPixCheckout(
    pixBuilder,
    "PIX-67890",
    "another@example.com",
    "Headphones",
    99.99
  );

  // Obtém o resultado diretamente do builder
  const basicPixOrder = pixBuilder.getResult();

  console.log(`Order Summary: ${basicPixOrder.getSummary()}`);
  console.log(`Total Amount: $${basicPixOrder.getTotalAmount().toFixed(2)}`);

  // Exemplo 3: Pacote de smartphone com cartão de crédito
  console.log("\n--- Smartphone Bundle with Credit Card ---");

  // Cria um endereço para o pacote
  const shippingAddress = { address: "123 Bundle St", city: "San Francisco" };

  // O director controla a construção do objeto usando o builder de cartão de crédito
  // Observe que estamos reutilizando o mesmo builder configurado anteriormente
  // Os dados do cartão são preservados porque o Director não chama reset()
  director.createSmartphoneBundle(
    "BUNDLE-001",
    "bundle@example.com",
    shippingAddress,
    creditCardBuilder
  );

  // Obtém o resultado diretamente do builder
  const smartphoneBundle = creditCardBuilder.getResult();

  console.log(`Order Summary: ${smartphoneBundle.getSummary()}`);
  console.log(`Subtotal: $${smartphoneBundle.getSubtotal().toFixed(2)}`);
  console.log(`Discount: $${smartphoneBundle.getDiscountAmount().toFixed(2)}`);
  console.log(`Total Amount: $${smartphoneBundle.getTotalAmount().toFixed(2)}`);
  console.log(`Items in bundle: ${smartphoneBundle.items.length}`);

  // Exemplo 4: Pacote Gamer com PIX
  console.log("\n--- Gamer Package with PIX ---");

  // O director controla a construção do objeto usando o builder de PIX
  // Observe que estamos reutilizando o mesmo builder configurado anteriormente
  // Os dados do PIX são preservados porque o Director não chama reset()
  director.createGamerPackage(
    "GAMER-001",
    "gamer@example.com",
    { address: "456 Gamer Ave", city: "Seattle" },
    pixBuilder
  );

  // Obtém o resultado diretamente do builder
  const gamerPackage = pixBuilder.getResult();

  console.log(`Order Summary: ${gamerPackage.getSummary()}`);
  console.log(`Subtotal: $${gamerPackage.getSubtotal().toFixed(2)}`);
  console.log(`Discount: $${gamerPackage.getDiscountAmount().toFixed(2)}`);
  console.log(`Total Amount: $${gamerPackage.getTotalAmount().toFixed(2)}`);
  console.log(`Items in package: ${gamerPackage.items.length}`);
}
