/// <reference path="../interfaces.ts" />

namespace WithFactoryMethod {
  // Classe de checkout que utiliza o Factory Method
  export class CheckoutFactory {
    constructor(private processorFactory: PaymentProcessorFactory) {}

    processPayment(amount: number): void {
      try {
        // Criação do processador de pagamento usando a fábrica
        const processor = this.processorFactory.createProcessor();

        // Mostra informações do método de pagamento
        console.log("\nInformações do pagamento:");
        console.log(processor.getPaymentInfo());

        // Processa o pagamento
        processor.processPayment(amount);
      } catch (error: any) {
        console.error(`Erro ao processar pagamento: ${error.message}`);
      }
    }
  }
}
