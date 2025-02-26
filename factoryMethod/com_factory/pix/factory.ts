/// <reference path="../interfaces.ts" />
/// <reference path="./processor.ts" />

namespace WithFactoryMethod {
  // Fábrica concreta para PIX com configurações embutidas
  export class PixFactory implements PaymentProcessorFactory {
    // Configurações embutidas na própria fábrica
    private readonly pixKey = "email@exemplo.com";
    private readonly merchantName = "Loja Virtual LTDA";

    createProcessor(): PaymentProcessor {
      return new PixProcessor(this.pixKey, this.merchantName);
    }
  }
}
