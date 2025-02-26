/// <reference path="../interfaces.ts" />
/// <reference path="./processor.ts" />

namespace WithFactoryMethod {
  // Fábrica concreta para MercadoPago com configurações embutidas
  export class MercadoPagoFactory implements PaymentProcessorFactory {
    // Configurações embutidas na própria fábrica
    private readonly accessToken = "TEST-7890123456789012-123456";
    private readonly installments = 2;

    createProcessor(): PaymentProcessor {
      //muita complexidade aqui...........
      return new MercadoPagoProcessor(this.accessToken, this.installments);
    }
  }
}
