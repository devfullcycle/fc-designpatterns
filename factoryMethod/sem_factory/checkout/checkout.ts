/// <reference path="../interfaces.ts" />

namespace WithoutFactoryMethod {
  // Classe de checkout unificada que utiliza a interface PaymentProcessor
  export class Checkout {
    // Método genérico para processar pagamento
    processPayment(amount: number, processor: PaymentProcessor): void {
      try {
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
