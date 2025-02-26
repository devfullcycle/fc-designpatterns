/// <reference path="../interfaces.ts" />
/// <reference path="./processor.ts" />

namespace WithFactoryMethod {
  // Fábrica concreta para PagarMe com configurações embutidas
  export class PagarMeFactory implements PaymentProcessorFactory {
    // Configurações embutidas na própria fábrica
    private readonly apiKey = "ak_test_dH7KHfJJJJrytytr6HgJHG";
    private readonly installments = 3;
    private readonly captureAutomatically = true;

    createProcessor(): PaymentProcessor {
      return new PagarMeProcessor(
        this.apiKey,
        this.installments,
        this.captureAutomatically
      );
    }
  }
}
