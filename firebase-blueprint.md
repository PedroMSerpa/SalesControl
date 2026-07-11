# Blueprint Firebase

## Authentication

Perfis sugeridos:

- `admin`: acesso total ao sistema.
- `manager`: vendas, clientes, produtos, metas e relatorios.
- `seller`: vendas, clientes vinculados e metas individuais.
- `finance`: pagamentos, comprovantes e relatorios financeiros.

Claims recomendadas:

```json
{
  "role": "manager",
  "sellerId": "user_123",
  "active": true
}
```

## Firestore

Colecoes principais:

- `users`: nome, email, role, status, sellerId, createdAt.
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
- Permitir que vendedores leiam apenas clientes, vendas e metas vinculadas a eles.
- Permitir escrita financeira apenas para `admin`, `manager` ou `finance`.
- Validar campos sensiveis no servidor com Cloud Functions quando houver impacto financeiro ou estoque.
