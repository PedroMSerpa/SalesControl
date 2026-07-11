# SalesControl

Prototipo funcional de uma plataforma para controlar vendas, clientes, produtos, estoque, pagamentos, metas, relatorios e usuarios.

## Como abrir

Abra `index.html` no navegador. O sistema usa HTML, CSS e JavaScript puro, entao nao precisa instalar dependencias.

Login administrador de teste:

- E-mail: `admin@salescontrol.local`
- Senha: `admin1234`
- Perfil: `Administrador`

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
- Registro de vendas com cliente, multiplos produtos, quantidade, desconto, acrescimos, subtotal, valor final, parcelas, observacoes, finalizacao e cancelamento.
- Atualizacao automatica de estoque ao finalizar uma venda.
- Historico de vendas com pesquisa, filtros, detalhes, cancelamento, comprovante e exportacao CSV.
- Controle de estoque com entrada, saida, ajuste, perda, produto danificado, devolucao, historico e responsavel.
- Controle financeiro com contas a receber, pendencias, parcelas, fluxo de caixa, despesas, lucro estimado e fechamento parcial.
- Metas diarias, semanais e mensais por vendedor, equipe, produto ou categoria.
- Relatorios de vendas, vendedores, produtos, clientes, pagamentos, estoque, lucro, faturamento, descontos e cancelamentos, com exportacao simulada em PDF, Excel e CSV.
- Notificacoes de estoque baixo, nova venda, meta atingida, pagamento atrasado, parcela proxima, produto sem estoque, venda cancelada e novo cliente.
- Configuracoes da empresa com CNPJ, contato, logotipo, moeda, formas de pagamento, categorias, regras de desconto e informacoes do comprovante.
- Area de loja para cliente com busca, categorias, banner, produtos em destaque, mais vendidos, ofertas, lancamentos, recomendados, recentes, frete gratis, cupons e beneficios.
- Busca de produtos por nome, categoria, marca, codigo, palavra-chave e descricao, com sugestoes automaticas.
- Painel de categorias para administrador e gerente com categoria, subcategoria, marca, colecao, departamento, imagem, ordem, status e termos relacionados.
- Listagem de loja com imagem, preco original/promocional, desconto, parcelas, avaliacao, frete, prazo, destaque e disponibilidade.
- Detalhe de produto com galeria, codigo, avaliacao, quantidade vendida, preco, pagamento, estoque, variacoes, garantia, devolucao, perguntas, avaliacoes e semelhantes.
- Carrinho com quantidade, remocao, salvar para depois, cupom, frete, subtotal, desconto e total.
- Checkout em etapas: identificacao, endereco, entrega, pagamento e confirmacao.
- Cadastro/login do cliente simulado, preparado para futura integracao com Firebase Authentication.
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
