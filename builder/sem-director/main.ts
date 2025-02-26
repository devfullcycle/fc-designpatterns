/// <reference path="./interfaces/interfaces.ts" />
/// <reference path="./checkout/order-checkout.ts" />
/// <reference path="./builders/credit-card-builder.ts" />
/// <reference path="./builders/pix-builder.ts" />

namespace WithoutDirector {
  // Código cliente demonstrando o uso do Builder Pattern sem Director
  console.log("=== Builder Pattern Example (Without Director) ===");

  // Exemplo 1: Criando um pedido com pagamento por cartão de crédito
  console.log("\n--- Credit Card Checkout ---");
  let creditCardBuilder = new CreditCardCheckoutBuilder();

  try {
    // Configuração do builder
    creditCardBuilder
      .setOrderId("CC-123")
      .setCustomerEmail("customer@example.com")
      .addItem("Smartphone", 1200, 1)
      .addItem("Phone Case", 25, 1)
      .setCardNumber("1234-5678-9012-3456")
      .setCardHolderName("John Doe")
      .setCardExpiration("12/2025")
      .setCardCvv("123");

    // Construção do produto (sem retorno)
    creditCardBuilder.construct();

    // Obtenção do produto construído
    const creditCardOrder = creditCardBuilder.getResult();

    console.log("Order created successfully!");
    console.log(`Order ID: ${creditCardOrder.orderId}`);
    console.log(`Customer: ${creditCardOrder.customerEmail}`);
    console.log(`Total amount: $${creditCardOrder.getTotalAmount()}`);
    console.log(`Payment method: ${creditCardOrder.paymentMethod}`);
    console.log(`Items: ${creditCardOrder.items.length}`);
  } catch (error: any) {
    console.error(`Error creating order: ${error.message}`);
  }

  // Exemplo 2: Criando um pedido com pagamento por PIX
  console.log("\n--- PIX Checkout ---");
  let pixBuilder = new PixCheckoutBuilder();

  try {
    // Configuração do builder
    pixBuilder
      .setOrderId("PIX-456")
      .setCustomerEmail("customer@example.com")
      .addItem("Headphones", 150, 1)
      .setPixKey("customer@pixkey.com")
      .setPayerName("Jane Doe");

    // Construção do produto (sem retorno)
    pixBuilder.construct();

    // Obtenção do produto construído
    const pixOrder = pixBuilder.getResult();

    console.log("Order created successfully!");
    console.log(`Order ID: ${pixOrder.orderId}`);
    console.log(`Customer: ${pixOrder.customerEmail}`);
    console.log(`Total amount: $${pixOrder.getTotalAmount()}`);
    console.log(`Payment method: ${pixOrder.paymentMethod}`);
    console.log(`Items: ${pixOrder.items.length}`);
  } catch (error: any) {
    console.error(`Error creating order: ${error.message}`);
  }

  // Exemplo 3: Tratamento de erro de validação
  console.log("\n--- Validation Error Example ---");
  let invalidBuilder = new CreditCardCheckoutBuilder();

  try {
    // Campos obrigatórios ausentes (orderId, items, customerEmail)
    invalidBuilder
      .setCardNumber("1234-5678-9012-3456")
      .setCardHolderName("John Doe")
      .setCardExpiration("12/2025")
      .setCardCvv("123");

    // Tentativa de construção que deve falhar
    invalidBuilder.construct();

    // Esta linha não deve ser executada
    const invalidOrder = invalidBuilder.getResult();
    console.log("This should not be printed");
  } catch (error: any) {
    console.error(`Expected error: ${error.message}`);
  }

  // Exemplo 4: Demonstrando o método reset
  console.log("\n--- Reset Builder Example ---");
  let resetBuilder = new CreditCardCheckoutBuilder();

  try {
    // Primeira configuração
    resetBuilder
      .setOrderId("RESET-123")
      .setCustomerEmail("reset@example.com")
      .addItem("Test Item", 100, 1)
      .setCardNumber("1111-2222-3333-4444")
      .setCardHolderName("Reset User")
      .setCardExpiration("01/2030")
      .setCardCvv("999");

    // Resetando o builder
    console.log("Resetting the builder...");
    resetBuilder.reset();

    // Nova configuração após reset
    resetBuilder
      .setOrderId("AFTER-RESET-456")
      .setCustomerEmail("after-reset@example.com")
      .addItem("New Item", 200, 2)
      .setCardNumber("5555-6666-7777-8888")
      .setCardHolderName("After Reset User")
      .setCardExpiration("05/2035")
      .setCardCvv("777");

    // Construção e obtenção do produto
    resetBuilder.construct();
    const resetOrder = resetBuilder.getResult();

    console.log("Order after reset created successfully!");
    console.log(`Order ID: ${resetOrder.orderId}`);
    console.log(`Customer: ${resetOrder.customerEmail}`);
    console.log(`Total amount: $${resetOrder.getTotalAmount()}`);
  } catch (error: any) {
    console.error(`Error in reset example: ${error.message}`);
  }

  // Exemplo 5: Erro ao tentar obter resultado antes da construção
  console.log("\n--- Get Result Before Construction Error ---");
  let errorBuilder = new CreditCardCheckoutBuilder();

  try {
    // Configuração do builder
    errorBuilder.setOrderId("ERROR-789").setCustomerEmail("error@example.com");

    // Tentativa de obter o resultado sem chamar construct()
    const errorOrder = errorBuilder.getResult();
    console.log("This should not be printed");
  } catch (error: any) {
    console.error(`Expected error: ${error.message}`);
  }
}
