/// <reference path="../interfaces.ts" />

namespace WithoutFactoryMethod {
  // Classe para processamento de pagamento com PIX
  export class PixProcessor implements PaymentProcessor {
    private pixKey: string;
    private merchantName: string;

    constructor(pixKey: string, merchantName: string) {
      // Validações básicas
      if (!pixKey) {
        throw new Error("PIX: Chave PIX é obrigatória");
      }

      if (!merchantName) {
        throw new Error("PIX: Nome do comerciante é obrigatório");
      }

      // Atribuições
      this.pixKey = pixKey;
      this.merchantName = merchantName;

      // Inicialização simplificada
      console.log("PIX inicializado com sucesso!");
    }

    processPayment(amount: number): void {
      console.log(`\nProcessando pagamento de R$ ${amount} via PIX`);
      console.log(`Chave PIX: ${this.pixKey}`);
      console.log(`Recebedor: ${this.merchantName}`);
      console.log("Gerando QR Code...");
      console.log("Status: QR Code gerado com sucesso");
    }

    getPaymentInfo(): string {
      return "PIX - Taxa: 0% - Processamento instantâneo";
    }
  }
}
