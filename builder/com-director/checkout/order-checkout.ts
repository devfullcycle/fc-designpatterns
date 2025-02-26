/// <reference path="../interfaces/interfaces.ts" />

namespace WithDirector {
  /**
   * Representa um pedido de checkout com suporte a desconto
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
      public readonly discount?: {
        value: number;
        type: DiscountType;
      },
      public readonly shippingAddress?: Address
    ) {}

    /**
     * Calcula o subtotal antes do desconto
     */
    getSubtotal(): number {
      return this.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    }

    /**
     * Calcula o valor do desconto
     */
    getDiscountAmount(): number {
      if (!this.discount) {
        return 0;
      }

      const subtotal = this.getSubtotal();

      if (this.discount.type === "percentage") {
        return subtotal * (this.discount.value / 100);
      } else {
        // Desconto fixo
        return Math.min(this.discount.value, subtotal); // Desconto não pode ser maior que o subtotal
      }
    }

    /**
     * Calcula o valor total do pedido após o desconto
     */
    getTotalAmount(): number {
      return this.getSubtotal() - this.getDiscountAmount();
    }

    /**
     * Retorna um resumo do checkout
     */
    getSummary(): string {
      const discountInfo = this.discount
        ? ` (${
            this.discount.type === "percentage"
              ? this.discount.value + "%"
              : "$" + this.discount.value.toFixed(2)
          } off)`
        : "";

      return `Order #${this.orderId} - ${
        this.paymentMethod
      }${discountInfo} - $${this.getTotalAmount().toFixed(2)}`;
    }
  }
}
