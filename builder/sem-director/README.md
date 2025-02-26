# Padrão Builder sem Director (Implementação Estrita GoF)

Este projeto demonstra a implementação do padrão Builder seguindo estritamente as diretrizes do Gang of Four (GoF), mas deliberadamente sem o componente Director por questões didáticas.

## Estrutura do Padrão Builder (GoF)

O padrão Builder conforme definido pelo Gang of Four separa a construção de um objeto complexo da sua representação, permitindo que o mesmo processo de construção possa criar diferentes representações.

### Componentes do Padrão

1. **Builder (Interface)**: Define os métodos para construir as partes do produto.
2. **ConcreteBuilder**: Implementa a interface Builder e constrói as partes do produto.
3. **Product**: O objeto complexo que está sendo construído.

## Implementação Estrita do GoF (sem Director)

Nesta implementação, seguimos estritamente o padrão Builder do GoF, com as seguintes características:

1. **Separação da construção e obtenção do produto**:
   - O método `construct()` constrói o produto internamente, sem retorná-lo
   - O método `getResult()` retorna o produto construído
   - O builder mantém uma referência interna ao produto

2. **Método de reset**:
   - O método `reset()` permite reinicializar o builder para reutilização

3. **Validação durante a construção**:
   - Validações são realizadas durante a fase de construção, não na obtenção do resultado

### Exemplo de Uso

```typescript
// Criar e configurar o builder
const creditCardBuilder = new CreditCardCheckoutBuilder();
creditCardBuilder
  .setOrderId("CC-123")
  .setCustomerEmail("customer@example.com")
  .addItem("Smartphone", 1200, 1)
  .setCardNumber("1234-5678-9012-3456")
  .setCardHolderName("John Doe")
  .setCardExpiration("12/2025")
  .setCardCvv("123");

// Construir o produto (sem retorno)
creditCardBuilder.construct();

// Obter o produto construído
const creditCardOrder = creditCardBuilder.getResult();
```

## Diferenças para Implementações Modernas

As implementações modernas do padrão Builder frequentemente diferem do padrão original do GoF:

1. **Método build() que retorna o produto**:
   - Muitas implementações modernas combinam a construção e obtenção em um único método `build()`
   - No padrão GoF original, estes são separados em `construct()` e `getResult()`

2. **Fluent Interface**:
   - O uso de "method chaining" (retornando `this` de cada método) é comum em implementações modernas
   - Embora não seja parte do padrão original, mantivemos esta característica por conveniência

## Vantagens da Implementação Estrita

1. **Reutilização do builder**:
   - O método `reset()` permite reutilizar o mesmo builder para construir múltiplos produtos
   - A separação entre construção e obtenção permite mais flexibilidade no processo

2. **Controle preciso do ciclo de vida**:
   - O cliente tem controle explícito sobre quando o produto é construído
   - Validações ocorrem no momento da construção, não na obtenção

3. **Fidelidade ao padrão original**:
   - Esta implementação segue fielmente o padrão conforme definido pelo Gang of Four
   - Útil para fins educacionais e para entender a intenção original do padrão

## Conclusão

Esta implementação demonstra o padrão Builder conforme originalmente concebido pelo Gang of Four, mas sem o componente Director. Embora implementações modernas frequentemente simplifiquem o padrão, entender a versão original é valioso para compreender a intenção e os princípios por trás do padrão. 