/// <reference path="../interfaces.ts" />

namespace WithoutFactoryMethod {
  // Classe para processamento de pagamento com cartão de crédito MercadoPago
  export class MercadoPagoProcessor implements PaymentProcessor {
    private accessToken: string;
    private installments: number;

    constructor(accessToken: string, installments: number = 1) {
      // Validações básicas
      if (!accessToken) {
        throw new Error("MercadoPago: Access Token é obrigatório");
      }

      if (installments < 1 || installments > 12) {
        throw new Error(
          "MercadoPago: Número de parcelas deve estar entre 1 e 12"
        );
      }

      // Atribuições
      this.accessToken = accessToken;
      this.installments = installments;

      // Inicialização simplificada
      console.log("MercadoPago inicializado com sucesso!");
    }

    processPayment(amount: number): void {
      console.log(
        `\nProcessando pagamento de R$ ${amount} via Cartão de Crédito (MercadoPago)`
      );
      console.log(`Access Token: ${this.accessToken.substring(0, 4)}...`);
      console.log(`Parcelas: ${this.installments}`);
      console.log("Status: Pagamento aprovado");
    }

    getPaymentInfo(): string {
      return "Cartão de Crédito (MercadoPago) - Taxa: 2.3%";
    }
  }
}
