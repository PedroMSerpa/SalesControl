# SalesControl

Prototipo funcional de uma plataforma para controlar vendas, clientes, produtos, estoque, pagamentos, metas, relatorios e usuarios.

## Como abrir

Abra `index.html` no navegador. O sistema usa HTML, CSS e JavaScript puro, entao nao precisa instalar dependencias.

## O que ja esta implementado

- Login com e-mail e senha simulado.
- Login com Google simulado.
- Cadastro de usuarios.
- Recuperacao de senha simulada.
- Logout, controle de sessao local e bloqueio de usuario inativo.
- Perfis de acesso: Administrador, Gerente, Vendedor e Estoquista.
- Menu lateral recolhivel.
- Cabecalho com pesquisa global, notificacoes e acao de nova venda.
- Dashboard com vendido no dia, vendido no mes, quantidade de vendas, ticket medio, produtos mais vendidos, vendedores com melhor desempenho, metas, estoque baixo, vendas recentes, clientes cadastrados e comparacao com periodo anterior.
- Graficos de vendas por dia, vendas por mes, formas de pagamento, categorias e evolucao de faturamento.
- Vendas com filtro por status.
- Cadastro de clientes com CPF/CNPJ, telefone, e-mail, endereco, nascimento, observacoes, historico, status, ultimo contato e resumo individual.
- Cadastro de produtos com codigo interno, codigo de barras, descricao, categoria, custo, venda, estoque, estoque minimo, imagem, fornecedor, status e data de cadastro.
- Pesquisa, filtro por categoria, edicao, ativacao/desativacao e entrada/saida de estoque para produtos.
- Clientes, produtos, pagamentos, metas, relatorios e usuarios.
- Formulario modal em etapas para cadastrar venda.
- Modo claro e modo escuro.
- Persistencia local das novas vendas via `localStorage`.

## Seguranca do repositorio publico

Este prototipo nao inclui chaves, service accounts, arquivos `.env` ou configuracoes privadas do Firebase. O `.gitignore` bloqueia credenciais comuns como `.env`, `serviceAccountKey.json`, `firebase-adminsdk*.json`, `google-services.json` e `GoogleService-Info.plist`.

## Proximos passos para Firebase

- Firebase Authentication para login e perfis de acesso.
- Cloud Firestore para colecoes `sales`, `customers`, `products`, `payments`, `goals` e `users`.
- Firebase Storage para imagens de produtos, comprovantes e documentos.
- Cloud Functions para automacoes de estoque, metas e notificacoes.
- Firebase Hosting para publicacao.
- Firebase Cloud Messaging para alertas de venda, cobranca e estoque baixo.
