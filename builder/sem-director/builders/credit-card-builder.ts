/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../checkout/order-checkout.ts" />

namespace WithoutDirector {
  /**
   * Builder concreto para checkout com cartão de crédito
   */
  export class CreditCardCheckoutBuilder implements OrderCheckoutBuilder {
    private orderId: string = "";
    private items: Array<{ name: string; price: number; quantity: number }> =
      [];
    private customerEmail: string = "";
    private shippingAddress?: Address;
    private cardNumber: string = "";
    private cardHolderName: string = "";
    private cardExpiration: string = "";
    private cardCvv: string = "";

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
      this.cardNumber = "";
      this.cardHolderName = "";
      this.cardExpiration = "";
      this.cardCvv = "";
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
     * Define o número do cartão de crédito
     */
    setCardNumber(cardNumber: string): this {
      this.cardNumber = cardNumber;
      return this;
    }

    /**
     * Define o nome do titular do cartão
     */
    setCardHolderName(name: string): this {
      this.cardHolderName = name;
      return this;
    }

    /**
     * Define a data de expiração do cartão
     */
    setCardExpiration(expiration: string): this {
      this.cardExpiration = expiration;
      return this;
    }

    /**
     * Define o CVV do cartão
     */
    setCardCvv(cvv: string): this {
      this.cardCvv = cvv;
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
      if (
        !this.cardNumber ||
        !this.cardHolderName ||
        !this.cardExpiration ||
        !this.cardCvv
      ) {
        throw new Error("Credit card details are incomplete");
      }

      this.result = new OrderCheckout(
        this.orderId,
        this.items,
        this.customerEmail,
        "credit_card",
        {
          cardNumber: this.cardNumber,
          cardHolderName: this.cardHolderName,
          cardExpiration: this.cardExpiration,
          cardCvv: this.cardCvv,
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
