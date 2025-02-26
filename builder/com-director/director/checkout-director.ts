/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../builders/credit-card-builder.ts" />
/// <reference path="../builders/pix-builder.ts" />

namespace WithDirector {
  /**
   * Classe Director que coordena a construção de objetos OrderCheckout
   * Seguindo estritamente o padrão Builder do GoF
   * O Director controla o processo de construção, mas não retorna o produto
   */
  export class CheckoutDirector {
    /**
     * Cria um checkout básico com pagamento por cartão de crédito
     * Usa um tipo específico para garantir que o builder correto seja usado
     */
    createBasicCreditCardCheckout(
      builder: CreditCardCheckoutBuilder,
      orderId: string,
      customerEmail: string,
      productName: string,
      productPrice: number
    ): void {
      // Configurar os dados básicos do pedido sem resetar
      builder
        .setOrderId(orderId)
        .setCustomerEmail(customerEmail)
        .addItem(productName, productPrice, 1);

      // Construir o produto (sem retorná-lo)
      builder.construct();
    }

    /**
     * Cria um checkout básico com pagamento por PIX
     * Usa um tipo específico para garantir que o builder correto seja usado
     */
    createBasicPixCheckout(
      builder: PixCheckoutBuilder,
      orderId: string,
      customerEmail: string,
      productName: string,
      productPrice: number
    ): void {
      // Configurar os dados básicos do pedido sem resetar
      builder
        .setOrderId(orderId)
        .setCustomerEmail(customerEmail)
        .addItem(productName, productPrice, 1);

      // Construir o produto (sem retorná-lo)
      builder.construct();
    }

    /**
     * Cria um pacote de smartphone usando o builder de cartão de crédito
     * Usa um tipo específico para garantir que o builder correto seja usado
     */
    createSmartphoneBundle(
      orderId: string,
      customerEmail: string,
      shippingAddress: Address,
      builder: CreditCardCheckoutBuilder
    ): void {
      // Configurar os dados básicos do pedido sem resetar
      builder
        .setOrderId(orderId)
        .setCustomerEmail(customerEmail)
        .setShippingAddress(shippingAddress);

      // Adicionar os itens que compõem o pacote de smartphone
      builder
        .addItem("Smartphone XYZ", 999.99, 1)
        .addItem("Phone Case", 29.99, 1)
        .addItem("Screen Protector", 19.99, 1)
        .addItem("Wireless Earbuds", 89.99, 1);

      // Aplicar desconto padrão para o pacote
      builder.applyDiscount(10, "percentage"); // 10% de desconto no pacote

      // Construir o produto (sem retorná-lo)
      builder.construct();
    }

    /**
     * Cria um pacote gamer usando o builder de PIX
     * Usa um tipo específico para garantir que o builder correto seja usado
     */
    createGamerPackage(
      orderId: string,
      customerEmail: string,
      shippingAddress: Address,
      builder: PixCheckoutBuilder
    ): void {
      // Configurar os dados básicos do pedido sem resetar
      builder
        .setOrderId(orderId)
        .setCustomerEmail(customerEmail)
        .setShippingAddress(shippingAddress)
        .addItem("Gaming Console", 499.99, 1)
        .addItem("Extra Controller", 59.99, 1)
        .addItem("Popular Game", 69.99, 1)
        .addItem("Gaming Headset", 89.99, 1)
        .applyDiscount(15, "percentage"); // 15% de desconto no pacote

      builder.construct();
    }
  }
}
