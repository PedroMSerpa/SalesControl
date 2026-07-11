# SalesControl

Protótipo funcional de uma plataforma para controlar vendas, clientes, produtos, estoque, pagamentos, metas, relatórios e usuários.

## Como abrir

Abra `index.html` no navegador. O sistema usa HTML, CSS e JavaScript puro, então não precisa instalar dependências.

## O que já está implementado

- Menu lateral recolhível.
- Cabeçalho com pesquisa global, notificações e ação de nova venda.
- Dashboard com indicadores, gráfico e vendas recentes.
- Vendas com filtro por status.
- Clientes, produtos, pagamentos, metas, relatórios e usuários.
- Formulário modal em etapas para cadastrar venda.
- Modo claro e modo escuro.
- Persistência local das novas vendas via `localStorage`.

## Próximos passos para Firebase

- Firebase Authentication para login e perfis de acesso.
- Cloud Firestore para coleções `sales`, `customers`, `products`, `payments`, `goals` e `users`.
- Firebase Storage para imagens de produtos, comprovantes e documentos.
- Cloud Functions para automações de estoque, metas e notificações.
- Firebase Hosting para publicação.
- Firebase Cloud Messaging para alertas de venda, cobrança e estoque baixo.
