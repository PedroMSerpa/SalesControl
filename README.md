# SalesControl

Prototipo funcional de uma plataforma para controlar vendas, clientes, produtos, estoque, pagamentos, metas, relatorios e usuarios.

## Como abrir

Abra `index.html` no navegador. O sistema usa HTML, CSS e JavaScript puro, entao nao precisa instalar dependencias.

## O que ja esta implementado

- Menu lateral recolhivel.
- Cabecalho com pesquisa global, notificacoes e acao de nova venda.
- Dashboard com indicadores, grafico e vendas recentes.
- Vendas com filtro por status.
- Clientes, produtos, pagamentos, metas, relatorios e usuarios.
- Formulario modal em etapas para cadastrar venda.
- Modo claro e modo escuro.
- Persistencia local das novas vendas via `localStorage`.

## Proximos passos para Firebase

- Firebase Authentication para login e perfis de acesso.
- Cloud Firestore para colecoes `sales`, `customers`, `products`, `payments`, `goals` e `users`.
- Firebase Storage para imagens de produtos, comprovantes e documentos.
- Cloud Functions para automacoes de estoque, metas e notificacoes.
- Firebase Hosting para publicacao.
- Firebase Cloud Messaging para alertas de venda, cobranca e estoque baixo.
