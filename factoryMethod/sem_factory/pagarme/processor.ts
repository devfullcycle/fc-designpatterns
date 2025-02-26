/// <reference path="../interfaces.ts" />

namespace WithoutFactoryMethod {
  // Classe para processamento de pagamento com cartão de crédito PagarMe
  export class PagarMeProcessor implements PaymentProcessor {
    private apiKey: string;
    private installments: number;
    private captureAutomatically: boolean;

    constructor(
      apiKey: string,
      installments: number = 1,
      captureAutomatically: boolean = false
    ) {
      // Validações básicas
      if (!apiKey) {
        throw new Error("PagarMe: API Key é obrigatória");
      }

      if (installments < 1 || installments > 12) {
        throw new Error("PagarMe: Número de parcelas deve estar entre 1 e 12");
      }

      // Atribuições
      this.apiKey = apiKey;
      this.installments = installments;
      this.captureAutomatically = captureAutomatically;

      // Inicialização simplificada
      console.log("PagarMe inicializado com sucesso!");
    }

    processPayment(amount: number): void {
      console.log(
        `\nProcessando pagamento de R$ ${amount} via Cartão de Crédito (PagarMe)`
      );
      console.log(`API Key: ${this.apiKey.substring(0, 4)}...`);
      console.log(`Parcelas: ${this.installments}`);
      console.log(`Captura automática: ${this.captureAutomatically}`);
      console.log("Status: Pagamento aprovado");
    }

    getPaymentInfo(): string {
      return "Cartão de Crédito (PagarMe) - Taxa: 2.8%";
    }
  }
}
