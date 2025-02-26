namespace WithoutFactoryMethod {
  // Interface comum para processadores de pagamento
  export interface PaymentProcessor {
    processPayment(amount: number): void;
    getPaymentInfo(): string;
  }

  // Tipos de provedores de pagamento
  export type PaymentProvider = "pagarme" | "mercadopago" | "pix";
}
