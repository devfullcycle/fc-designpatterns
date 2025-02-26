namespace WithDirector {
  /**
   * Interface para informações de endereço
   */
  export interface Address {
    address: string;
    city: string;
  }

  /**
   * Tipo para métodos de pagamento
   */
  export type PaymentMethod = "credit_card" | "pix";

  /**
   * Tipo para tipos de desconto
   */
  export type DiscountType = "percentage" | "fixed";

  /**
   * Interface para builders de checkout de pedidos
   * Seguindo estritamente o padrão Builder do GoF
   */
  export interface OrderCheckoutBuilder {
    /**
     * Reseta o builder para seu estado inicial
     */
    reset(): void;

    /**
     * Define o ID do pedido
     */
    setOrderId(orderId: string): this;

    /**
     * Adiciona um item ao pedido
     */
    addItem(name: string, price: number, quantity: number): this;

    /**
     * Define o email do cliente
     */
    setCustomerEmail(email: string): this;

    /**
     * Define o endereço de entrega
     */
    setShippingAddress(address: Address): this;

    /**
     * Aplica um desconto ao pedido
     */
    applyDiscount(value: number, type: DiscountType): this;

    /**
     * Constrói o objeto OrderCheckout com a configuração atual
     * Este método não retorna o produto, apenas constrói internamente
     */
    construct(): void;

    /**
     * Retorna o objeto OrderCheckout construído
     * Este método é usado para obter o produto após a construção
     */
    getResult(): OrderCheckout;
  }
}
