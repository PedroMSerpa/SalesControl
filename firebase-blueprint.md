# Blueprint Firebase

## Authentication

Perfis sugeridos:

- `admin`: acesso total ao sistema.
- `seller`: loja, produtos, categorias e estoque da propria loja.
- `customer`: loja, carrinho, checkout, perfil e pedidos do cliente.

Claims recomendadas:

```json
{
  "role": "seller",
  "sellerId": "user_123",
  "active": true
}
```

## Firestore

Colecoes principais:

- `users`: nome, email, role, status, sellerId, customerId, createdAt.
- `customers`: nome, contato, documento, endereco, responsavelId, status, createdAt.
- `products`: nome, categoria, preco, estoqueAtual, estoqueMinimo, imagePath, active.
- `sales`: customerId, sellerId, items, subtotal, desconto, total, status, paymentStatus, createdAt.
- `payments`: saleId, method, amount, dueDate, paidAt, status, receiptPath.
- `goals`: sellerId, period, targetAmount, achievedAmount, targetOrders.
- `notifications`: userId, title, message, read, createdAt.

## Storage

Pastas sugeridas:

- `products/{productId}/images`
- `payments/{paymentId}/receipts`
- `customers/{customerId}/documents`

## Cloud Functions

Automacoes uteis:

- Ao confirmar uma venda, baixar estoque dos itens vendidos.
- Ao receber pagamento, atualizar `paymentStatus` da venda.
- Ao criar venda, atualizar progresso da meta do vendedor.
- Ao estoque ficar abaixo do minimo, criar notificacao.
- Ao pagamento vencer, notificar responsaveis.

## Security Rules

Diretrizes:

- Exigir usuario autenticado em todas as colecoes.
- Bloquear usuarios com `active = false`.
- Permitir que vendedores gerenciem apenas produtos, categorias e estoque vinculados a eles.
- Permitir que clientes leiam apenas seus pedidos, perfil, carrinho e checkout.
- Permitir escrita financeira administrativa apenas para `admin`.
- Validar campos sensiveis no servidor com Cloud Functions quando houver impacto financeiro ou estoque.
