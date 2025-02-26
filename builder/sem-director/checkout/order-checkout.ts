/// <reference path="../interfaces/interfaces.ts" />

namespace WithoutDirector {
  /**
   * Representa um pedido de checkout
   */
  export class OrderCheckout {
    constructor(
      public readonly orderId: string,
      public readonly items: Array<{
        name: string;
        price: number;
        quantity: number;
      }>,
      public readonly customerEmail: string,
      public readonly paymentMethod: PaymentMethod,
      public readonly paymentDetails: Record<string, any>,
      public readonly shippingAddress?: Address
    ) {}

    /**
     * Calcula o valor total do pedido
     */
    getTotalAmount(): number {
      return this.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    }

    /**
     * Retorna um resumo do checkout
     */
    getSummary(): string {
      return `Order #${this.orderId} - ${
        this.paymentMethod
      } - $${this.getTotalAmount().toFixed(2)}`;
    }
  }
}
