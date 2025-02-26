namespace WithFactoryMethod {
  // Interface comum para processadores de pagamento
  export interface PaymentProcessor {
    processPayment(amount: number): void;
    getPaymentInfo(): string;
  }

  // Interface para a fábrica de processadores de pagamento (Factory Method)
  export interface PaymentProcessorFactory {
    createProcessor(): PaymentProcessor;
  }

  // Tipos de métodos de pagamento suportados
  export type PaymentMethod = "pagarme" | "mercadopago" | "pix";
}
