/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../checkout/order-checkout.ts" />

namespace WithoutDirector {
  /**
   * Builder concreto para checkout com PIX
   */
  export class PixCheckoutBuilder implements OrderCheckoutBuilder {
    private orderId: string = "";
    private items: Array<{ name: string; price: number; quantity: number }> =
      [];
    private customerEmail: string = "";
    private shippingAddress?: Address;
    private pixKey: string = "";
    private payerName: string = "";

    // O builder mantém uma referência ao produto
    private result: OrderCheckout | null = null;

    /**
     * Reseta o builder para seu estado inicial
     */
    reset(): void {
      this.orderId = "";
      this.items = [];
      this.customerEmail = "";
      this.shippingAddress = undefined;
      this.pixKey = "";
      this.payerName = "";
      this.result = null;
    }

    /**
     * Define o ID do pedido
     */
    setOrderId(orderId: string): this {
      this.orderId = orderId;
      return this;
    }

    /**
     * Adiciona um item ao pedido
     */
    addItem(name: string, price: number, quantity: number): this {
      this.items.push({ name, price, quantity });
      return this;
    }

    /**
     * Define o email do cliente
     */
    setCustomerEmail(email: string): this {
      this.customerEmail = email;
      return this;
    }

    /**
     * Define o endereço de entrega
     */
    setShippingAddress(address: Address): this {
      this.shippingAddress = address;
      return this;
    }

    /**
     * Define a chave PIX
     */
    setPixKey(pixKey: string): this {
      this.pixKey = pixKey;
      return this;
    }

    /**
     * Define o nome do pagador
     */
    setPayerName(name: string): this {
      this.payerName = name;
      return this;
    }

    /**
     * Constrói o objeto OrderCheckout com a configuração atual
     * Este método não retorna o produto, apenas constrói internamente
     */
    construct(): void {
      if (!this.orderId) {
        throw new Error("Order ID is required");
      }
      if (this.items.length === 0) {
        throw new Error("At least one item is required");
      }
      if (!this.customerEmail) {
        throw new Error("Customer email is required");
      }
      if (!this.pixKey || !this.payerName) {
        throw new Error("PIX details are incomplete");
      }

      this.result = new OrderCheckout(
        this.orderId,
        this.items,
        this.customerEmail,
        "pix",
        {
          pixKey: this.pixKey,
          payerName: this.payerName,
        },
        this.shippingAddress
      );
    }

    /**
     * Retorna o objeto OrderCheckout construído
     * Este método é usado para obter o produto após a construção
     */
    getResult(): OrderCheckout {
      if (!this.result) {
        throw new Error("You must call construct() before getResult()");
      }
      return this.result;
    }
  }
}
