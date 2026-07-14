const icons = {
  layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  receipt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 3v18l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V3z"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m21 8-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>',
  card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.5 6.5 0 0 0 21 12.8z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14M5 12h14"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  logIn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="m10 17 5-5-5-5M15 12H3"/></svg>',
  logOut: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/></svg>',
  userPlus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>',
  google: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="M12 12h8"/></svg>',
  history: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 3v6h6"/><path d="M12 7v5l3 2"/></svg>',
  packageCheck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m21 8-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="m9 16 2 2 4-5"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 7H5a2 2 0 0 1 0-4h13"/><path d="M5 7h16v14H5a2 2 0 0 1-2-2V5"/><path d="M16 14h.01"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5z"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 1 1 7.1 4l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6h.1a1.7 1.7 0 0 0 1.9-.3l.1-.1A2 2 0 1 1 20 7.1l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.6 1h.1a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.8 1z"/></svg>',
  store: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 10h16l-1-6H5l-1 6z"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></svg>',
  map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3z"/><path d="M9 3v15M15 6v15"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>',
};

const orderStatuses = ['Novos pedidos', 'Aguardando pagamento', 'Pagamento aprovado', 'Em separacao', 'Prontos para envio', 'Enviados', 'Entregues', 'Cancelados'];

const defaultProducts = [
  { id: 'p1', name: 'CRM Pro Anual', internalCode: 'SOF-001', barcode: '7891000000011', description: 'Licenca anual do CRM Pro', category: 'Software', costPrice: 740, salePrice: 1890, stock: 42, minStock: 10, image: '', supplier: 'SalesCloud Labs', active: true, createdAt: '2026-01-15' },
  { id: 'p2', name: 'Scanner Fiscal X2', internalCode: 'EQP-014', barcode: '7891000000141', description: 'Scanner para operacao fiscal', category: 'Equipamento', costPrice: 820, salePrice: 1380, stock: 8, minStock: 10, image: '', supplier: 'Norte Tech', active: true, createdAt: '2026-02-04' },
  { id: 'p3', name: 'Pacote Implantacao', internalCode: 'SRV-200', barcode: '7891000002008', description: 'Onboarding e configuracao inicial', category: 'Servico', costPrice: 900, salePrice: 2400, stock: 18, minStock: 6, image: '', supplier: 'Equipe interna', active: true, createdAt: '2026-03-11' },
  { id: 'p4', name: 'Terminal POS Smart', internalCode: 'EQP-027', barcode: '7891000000271', description: 'Terminal POS com NFC', category: 'Equipamento', costPrice: 590, salePrice: 990, stock: 5, minStock: 8, image: '', supplier: 'Pay Hardware', active: true, createdAt: '2026-04-18' },
  { id: 'p5', name: 'Treinamento Comercial', internalCode: 'SRV-330', barcode: '7891000003302', description: 'Treinamento de vendas e processo', category: 'Servico', costPrice: 260, salePrice: 760, stock: 30, minStock: 5, image: '', supplier: 'Equipe interna', active: true, createdAt: '2026-05-05' },
  { id: 'p6', name: 'Modulo Estoque Plus', internalCode: 'SOF-044', barcode: '7891000000448', description: 'Modulo avancado de estoque', category: 'Software', costPrice: 190, salePrice: 650, stock: 21, minStock: 10, image: '', supplier: 'SalesCloud Labs', active: true, createdAt: '2026-05-21' },
];

const defaultUsers = [
  { name: 'Ana Martins', email: 'admin@salescontrol.local', password: 'admin1234', role: 'Administrador', status: 'Ativo', target: 90000, achieved: 78200 },
  { name: 'Bruno Costa', email: 'bruno@salescontrol.local', password: 'vendedor123', role: 'Vendedor', status: 'Ativo', target: 70000, achieved: 48600 },
  { name: 'Camila Rocha', email: 'camila@salescontrol.local', password: 'vendedor123', role: 'Vendedor', status: 'Ativo', target: 65000, achieved: 60250 },
  { name: 'Cliente Demo', email: 'cliente@salescontrol.local', password: 'cliente123', role: 'Cliente', status: 'Ativo', target: 0, achieved: 0 },
  { name: 'Usuario Inativo', email: 'inativo@salescontrol.local', password: 'vendedor123', role: 'Vendedor', status: 'Inativo', target: 0, achieved: 0 },
];

const defaultCustomers = [
  { id: 'c1', name: 'Mercado Aurora', document: '12.345.678/0001-90', phone: '(11) 90000-1000', email: 'compras@aurora.com', address: 'Rua Central, 120', birthDate: '', notes: 'Cliente recorrente', status: 'Ativo', lastContact: '2026-07-11' },
  { id: 'c2', name: 'Clima Sul', document: '22.222.222/0001-10', phone: '(51) 90000-2200', email: 'financeiro@climasul.com', address: 'Av. Frio, 88', birthDate: '', notes: 'Pendente de boleto', status: 'Ativo', lastContact: '2026-07-10' },
  { id: 'c3', name: 'Papelaria Nova', document: '333.333.333-44', phone: '(31) 98888-3300', email: 'contato@papelarianova.com', address: 'Rua Papel, 42', birthDate: '1992-03-18', notes: 'Prefere contato por email', status: 'Ativo', lastContact: '2026-07-10' },
  { id: 'c4', name: 'Atacado Prime', document: '44.444.444/0001-44', phone: '(21) 97777-4400', email: 'ti@atacadoprime.com', address: 'Av. Comercial, 700', birthDate: '', notes: 'Conta estrategica', status: 'Ativo', lastContact: '2026-07-09' },
  { id: 'c5', name: 'Studio Norte', document: '555.555.555-55', phone: '(92) 96666-5500', email: 'studio@norte.com', address: 'Rua Design, 12', birthDate: '1988-09-02', notes: 'Reativar no proximo mes', status: 'Prospect', lastContact: '2026-07-08' },
  { id: 'c6', name: 'Loja Bela Casa', document: '66.666.666/0001-66', phone: '(85) 95555-6600', email: 'loja@belacasa.com', address: 'Rua Lar, 500', birthDate: '', notes: 'Boa aderencia em estoque', status: 'Ativo', lastContact: '2026-07-07' },
  { id: 'c7', name: 'Auto Pecas Delta', document: '77.777.777/0001-77', phone: '(41) 94444-7700', email: 'delta@autopecas.com', address: 'Av. Motores, 90', birthDate: '', notes: 'Aguardando pagamento', status: 'Ativo', lastContact: '2026-07-06' },
];

const defaultSales = [
  { date: '2026-07-11', customerId: 'c1', productId: 'p1', seller: 'Ana Martins', status: 'Pago', payment: 'Pix', amount: 1890 },
  { date: '2026-07-10', customerId: 'c2', productId: 'p2', seller: 'Bruno Costa', status: 'Pendente', payment: 'Boleto', amount: 1380 },
  { date: '2026-07-10', customerId: 'c3', productId: 'p3', seller: 'Camila Rocha', status: 'Pago', payment: 'Cartao de credito', amount: 2400 },
  { date: '2026-07-09', customerId: 'c4', productId: 'p4', seller: 'Ana Martins', status: 'Pago', payment: 'Transferencia', amount: 990 },
  { date: '2026-07-08', customerId: 'c5', productId: 'p5', seller: 'Bruno Costa', status: 'Cancelado', payment: 'Cartao de credito', amount: 760 },
  { date: '2026-07-07', customerId: 'c6', productId: 'p6', seller: 'Camila Rocha', status: 'Pago', payment: 'Pix', amount: 650 },
  { date: '2026-07-06', customerId: 'c7', productId: 'p3', seller: 'Ana Martins', status: 'Pendente', payment: 'Boleto', amount: 2400 },
  { date: '2026-06-29', customerId: 'c1', productId: 'p2', seller: 'Bruno Costa', status: 'Pago', payment: 'Pix', amount: 1380 },
  { date: '2026-06-22', customerId: 'c4', productId: 'p1', seller: 'Ana Martins', status: 'Pago', payment: 'Cartao de credito', amount: 1890 },
];

const defaultInventoryMovements = [
  { date: '2026-07-11', productId: 'p2', type: 'Entrada', quantity: 12, responsible: 'Diego Alves', description: 'Reposicao do fornecedor' },
  { date: '2026-07-10', productId: 'p4', type: 'Saida', quantity: 2, responsible: 'Ana Martins', description: 'Venda finalizada' },
  { date: '2026-07-09', productId: 'p5', type: 'Ajuste', quantity: 3, responsible: 'Diego Alves', description: 'Conferencia manual' },
];

const defaultFinanceMovements = [
  { id: 'f1', type: 'Entrada', amount: 1890, category: 'Venda', date: '2026-07-11', description: 'Venda Mercado Aurora', responsible: 'Ana Martins', payment: 'Pix', receipt: 'REC-0001', status: 'Pago' },
  { id: 'f2', type: 'Conta a receber', amount: 1380, category: 'Venda', date: '2026-07-10', description: 'Venda Clima Sul', responsible: 'Bruno Costa', payment: 'Boleto', receipt: '', status: 'Pendente' },
  { id: 'f3', type: 'Despesa', amount: 420, category: 'Operacional', date: '2026-07-08', description: 'Material de escritorio', responsible: 'Marina Lopes', payment: 'Cartao de debito', receipt: '', status: 'Pago' },
];

const defaultCompanySettings = {
  companyName: 'SalesControl Demo',
  cnpj: '00.000.000/0001-00',
  address: 'Av. Comercial, 100',
  phone: '(11) 4000-0000',
  email: 'contato@salescontrol.local',
  logo: '',
  currency: 'BRL',
  paymentMethods: 'Pix, Dinheiro, Cartao de credito, Cartao de debito, Boleto, Transferencia',
  categories: 'Software, Equipamento, Servico',
  discountRules: 'Desconto maximo sugerido: 10%',
  receiptInfo: 'Obrigado pela preferencia. Este comprovante e gerado pelo SalesControl.',
};

const defaultCustomGoals = [
  { id: 'g1', period: 'Mensal', type: 'Por equipe', targetName: 'Equipe comercial', targetAmount: 50000, achievedAmount: 37500 },
];

const defaultCategories = [
  { id: 'cat1', name: 'Software', subcategory: 'Gestao', brand: 'SalesCloud Labs', collection: 'Suite Pro', department: 'Sistemas', image: '', order: 1, active: true, keywords: 'crm, gestao, vendas, estoque' },
  { id: 'cat2', name: 'Equipamento', subcategory: 'Operacao', brand: 'Norte Tech', collection: 'Hardware Comercial', department: 'Eletronicos', image: '', order: 2, active: true, keywords: 'scanner, pos, terminal, fiscal' },
  { id: 'cat3', name: 'Servico', subcategory: 'Consultoria', brand: 'Equipe interna', collection: 'Implantacao', department: 'Servicos', image: '', order: 3, active: true, keywords: 'treinamento, onboarding, implantacao' },
];

const defaultCoupons = [
  { code: 'PRIMEIRACOMPRA', type: 'percent', value: 10, startsAt: '2026-01-01', expiresAt: '2026-12-31', minPurchase: 100, usageLimit: 200, products: 'Todos', categories: 'Todas', customers: 'Novos clientes', active: true },
  { code: 'BEMVINDO10', type: 'percent', value: 10, startsAt: '2026-01-01', expiresAt: '2026-12-31', minPurchase: 0, usageLimit: 500, products: 'Todos', categories: 'Todas', customers: 'Todos', active: true },
  { code: 'FRETEGRATIS', type: 'fixed', value: 18, startsAt: '2026-07-01', expiresAt: '2026-08-31', minPurchase: 250, usageLimit: 100, products: 'Selecionados', categories: 'Equipamento', customers: 'Todos', active: true },
];

const defaultReviews = [
  { id: 'r1', productId: 'p1', customerEmail: 'cliente@salescontrol.local', orderId: 'S-0001', productScore: 5, serviceScore: 5, deliveryScore: 4, qualityScore: 5, valueScore: 4, comment: 'Produto ajudou bastante na operacao.', media: '', recommended: true, visible: true, answer: 'Obrigado pela avaliacao!' },
];

const defaultQuestions = [
  { id: 'q1', productId: 'p1', customerEmail: 'cliente@salescontrol.local', question: 'Esse produto possui garantia?', answer: 'Sim, o produto possui garantia de 12 meses.', status: 'Respondida' },
];

const defaultMessages = [
  { id: 'm1', orderId: 'S-0001', customerEmail: 'cliente@salescontrol.local', subject: 'Entrega', message: 'Gostaria de confirmar o prazo de entrega.', responsible: 'Ana Martins', status: 'Aberto', date: '2026-07-11' },
];

const defaultReturns = [
  { id: 'd1', orderId: 'S-0001', productId: 'p1', customerEmail: 'cliente@salescontrol.local', type: 'Troca', reason: 'Produto com defeito', description: 'Solicitacao de exemplo.', images: '', status: 'Solicitacao aberta', date: '2026-07-11' },
];

const permissions = {
  Administrador: ['admin', 'shop', 'catalog', 'orders'],
  Vendedor: ['shop', 'catalog'],
  Cliente: ['shop', 'account'],
};

const state = {
  view: 'dashboard',
  search: '',
  saleStep: 0,
  salesStatus: 'Todos',
  stockFilter: 'all',
  productSearch: '',
  categoryFilter: 'Todas',
  historySearch: '',
  historySeller: 'Todos',
  historyPayment: 'Todas',
  historyStatus: 'Todos',
  historyStartDate: '',
  historyEndDate: '',
  saleDraftItems: [],
  shopSearch: '',
  shopCategory: 'Todas',
  shopBrand: 'Todas',
  shopRating: 0,
  shopShipping: 'all',
  shopPromo: 'all',
  shopSort: 'relevant',
  checkoutStep: 0,
  shippingMethod: 'Padrao',
  shippingCost: 18,
  coupon: '',
  cart: JSON.parse(localStorage.getItem('sales-control-cart') || '[]'),
  savedForLater: JSON.parse(localStorage.getItem('sales-control-saved-cart') || '[]'),
  recentViews: JSON.parse(localStorage.getItem('sales-control-recent-views') || '[]'),
  clientSession: JSON.parse(localStorage.getItem('sales-control-client-session') || 'null'),
  accountTab: 'profile',
  accountOrderFilter: 'Todos',
  session: JSON.parse(localStorage.getItem('sales-control-session') || 'null'),
};

let products = JSON.parse(localStorage.getItem('sales-control-products') || 'null') || defaultProducts;
let customers = JSON.parse(localStorage.getItem('sales-control-customers') || 'null') || defaultCustomers;
let users = (JSON.parse(localStorage.getItem('sales-control-users') || 'null') || defaultUsers)
  .filter((user) => ['Administrador', 'Vendedor', 'Cliente'].includes(user.role));
defaultUsers.forEach((defaultUser) => {
  const existingUser = users.find((user) => user.email === defaultUser.email);
  if (existingUser) {
    existingUser.password = existingUser.password || defaultUser.password;
    existingUser.role = defaultUser.role;
    existingUser.status = defaultUser.status;
  } else {
    users.push(defaultUser);
  }
});
let sales = normalizeSales(JSON.parse(localStorage.getItem('sales-control-sales') || 'null') || defaultSales);
let inventoryMovements = JSON.parse(localStorage.getItem('sales-control-inventory') || 'null') || defaultInventoryMovements;
let financeMovements = JSON.parse(localStorage.getItem('sales-control-finance') || 'null') || defaultFinanceMovements;
let companySettings = JSON.parse(localStorage.getItem('sales-control-settings') || 'null') || defaultCompanySettings;
let customGoals = JSON.parse(localStorage.getItem('sales-control-goals') || 'null') || defaultCustomGoals;
let categories = JSON.parse(localStorage.getItem('sales-control-categories') || 'null') || defaultCategories;
let coupons = JSON.parse(localStorage.getItem('sales-control-coupons') || 'null') || defaultCoupons;
let reviews = JSON.parse(localStorage.getItem('sales-control-reviews') || 'null') || defaultReviews;
let questions = JSON.parse(localStorage.getItem('sales-control-questions') || 'null') || defaultQuestions;
let messages = JSON.parse(localStorage.getItem('sales-control-messages') || 'null') || defaultMessages;
let returnRequests = JSON.parse(localStorage.getItem('sales-control-returns') || 'null') || defaultReturns;
let revealObserver = null;
let chartRevealObserver = null;
const chartAnimations = new Map();

function normalizeSales(rows) {
  return rows.map((sale, index) => {
    const customer = customers.find((item) => item.name === sale.customer);
    const product = products.find((item) => item.name === sale.product);
    const productId = sale.productId || product?.id || 'p1';
    const amount = Number(sale.amount || sale.total || 0);
    const items = sale.items || [{ productId, quantity: 1, unitPrice: amount, total: amount }];
    return {
      ...sale,
      id: sale.id || `S-${String(index + 1).padStart(4, '0')}`,
      customerId: sale.customerId || customer?.id || 'c1',
      productId,
      items,
      discount: Number(sale.discount || 0),
      surcharge: Number(sale.surcharge || 0),
      subtotal: Number(sale.subtotal || items.reduce((sum, item) => sum + Number(item.total || 0), 0)),
      total: Number(sale.total || amount),
      amount,
      installments: Number(sale.installments || 1),
      notes: sale.notes || '',
    };
  });
}

function money(value) {
  return Number(value || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function byId(collection, id) {
  return collection.find((item) => item.id === id);
}

function saleCustomer(sale) {
  return byId(customers, sale.customerId) || { name: 'Cliente removido' };
}

function saleProduct(sale) {
  return byId(products, sale.productId) || { name: 'Produto removido', category: 'Sem categoria', salePrice: 0 };
}

function statusClass(status) {
  return {
    Pago: 'paid',
    Finalizada: 'paid',
    Pendente: 'pending',
    'Em andamento': 'medium',
    'Parcialmente paga': 'medium',
    Cancelado: 'cancelled',
    Cancelada: 'cancelled',
    Reembolsada: 'cancelled',
    Atrasado: 'cancelled',
    Ativo: 'active',
    Inativo: 'cancelled',
    Prospect: 'medium',
    OK: 'ok',
    Baixo: 'low',
    Medio: 'medium',
  }[status] || 'medium';
}

function can(permission) {
  if (!state.session) return false;
  return permissions[state.session.role]?.includes(permission) || false;
}

function saveAll() {
  localStorage.setItem('sales-control-sales', JSON.stringify(sales));
  localStorage.setItem('sales-control-products', JSON.stringify(products));
  localStorage.setItem('sales-control-customers', JSON.stringify(customers));
  localStorage.setItem('sales-control-users', JSON.stringify(users));
  localStorage.setItem('sales-control-inventory', JSON.stringify(inventoryMovements));
  localStorage.setItem('sales-control-finance', JSON.stringify(financeMovements));
  localStorage.setItem('sales-control-settings', JSON.stringify(companySettings));
  localStorage.setItem('sales-control-goals', JSON.stringify(customGoals));
  localStorage.setItem('sales-control-categories', JSON.stringify(categories));
  localStorage.setItem('sales-control-cart', JSON.stringify(state.cart));
  localStorage.setItem('sales-control-saved-cart', JSON.stringify(state.savedForLater));
  localStorage.setItem('sales-control-recent-views', JSON.stringify(state.recentViews));
  localStorage.setItem('sales-control-client-session', JSON.stringify(state.clientSession));
  localStorage.setItem('sales-control-coupons', JSON.stringify(coupons));
  localStorage.setItem('sales-control-reviews', JSON.stringify(reviews));
  localStorage.setItem('sales-control-questions', JSON.stringify(questions));
  localStorage.setItem('sales-control-messages', JSON.stringify(messages));
  localStorage.setItem('sales-control-returns', JSON.stringify(returnRequests));
}

function renderIcons() {
  document.querySelectorAll('[data-icon]').forEach((node) => {
    node.innerHTML = icons[node.dataset.icon] || '';
  });
}

function showAuthTab(tab) {
  document.querySelectorAll('[data-auth-tab]').forEach((button) => button.classList.toggle('active', button.dataset.authTab === tab));
  document.querySelectorAll('[data-auth-panel]').forEach((panel) => panel.classList.toggle('active', panel.dataset.authPanel === tab));
}

function applySession() {
  const hasSession = Boolean(state.session);
  document.getElementById('authScreen').classList.toggle('hidden', hasSession);
  document.getElementById('appShell').classList.toggle('locked', !hasSession);
  if (!hasSession) return;
  if (!permissions[state.session.role]) {
    localStorage.removeItem('sales-control-session');
    state.session = null;
    document.getElementById('authScreen').classList.remove('hidden');
    document.getElementById('appShell').classList.add('locked');
    document.getElementById('loginFeedback').textContent = 'Perfil antigo removido. Entre como Administrador, Vendedor ou Cliente.';
    return;
  }

  document.getElementById('sessionChip').innerHTML = `<strong>${state.session.name}</strong><span>${state.session.role}</span>`;
  document.querySelectorAll('[data-permission]').forEach((button) => {
    const allowed = can(button.dataset.permission);
    button.classList.toggle('hidden', !allowed);
  });
  document.getElementById('newSaleButton').classList.toggle('hidden', !can('admin'));
  document.getElementById('globalSearch').placeholder = state.session.role === 'Cliente' ? 'Pesquisar produtos na loja' : 'Pesquisar vendas, clientes ou produtos';
  if (document.querySelector(`.nav-item[data-view="${state.view}"]`)?.classList.contains('hidden')) {
    switchView(can('admin') ? 'dashboard' : 'shop');
  }
}

function loginUser({ email, password = '', role, inactive = false, provider = 'email' }) {
  const existing = users.find((user) => user.email.toLowerCase() === email.toLowerCase());
  const user = existing || (provider === 'google' ? { name: email.split('@')[0], email, role: 'Cliente', status: 'Ativo', target: 0, achieved: 0 } : null);
  if (!user) {
    document.getElementById('loginFeedback').textContent = 'Usuario nao encontrado. Use o cadastro ou uma conta demo.';
    return;
  }
  if (provider === 'email' && role && user.role !== role) {
    document.getElementById('loginFeedback').textContent = `Este e-mail pertence ao perfil ${user.role}. Selecione o perfil correto.`;
    return;
  }
  if (provider === 'email' && password !== user.password) {
    document.getElementById('loginFeedback').textContent = 'Senha incorreta para este perfil.';
    return;
  }
  if (inactive || user.status === 'Inativo') {
    document.getElementById('loginFeedback').textContent = 'Usuario inativo. Procure um administrador para reativar o acesso.';
    return;
  }
  state.session = { name: user.name, email: user.email, role: user.role, provider, startedAt: new Date().toISOString() };
  if (state.session.role === 'Cliente') {
    state.clientSession = {
      name: user.name,
      cpf: '000.000.000-00',
      email: user.email,
      phone: '',
      provider,
    };
  }
  localStorage.setItem('sales-control-session', JSON.stringify(state.session));
  document.getElementById('loginFeedback').textContent = '';
  applySession();
  if (state.session.role !== 'Administrador') switchView('shop');
  render();
}

function saleTotal(sale) {
  return Number(sale.total || sale.amount || 0);
}

function isPaidSale(sale) {
  return ['Pago', 'Finalizada'].includes(sale.status);
}

function orderStage(sale) {
  if (['Cancelada', 'Cancelado'].includes(sale.status)) return 'Cancelados';
  if (sale.status === 'Pendente') return 'Aguardando pagamento';
  if (sale.deliveryStatus) return sale.deliveryStatus;
  if (isPaidSale(sale)) return 'Pagamento aprovado';
  return 'Novos pedidos';
}

function orderTimeline(sale) {
  const stage = orderStage(sale);
  const steps = ['Pedido realizado', 'Pagamento aprovado', 'Produto em separacao', 'Produto enviado', 'Saiu para entrega', 'Pedido entregue'];
  const activeMap = {
    'Novos pedidos': 0,
    'Aguardando pagamento': 0,
    'Pagamento aprovado': 1,
    'Em separacao': 2,
    'Prontos para envio': 2,
    Enviados: 3,
    Entregues: 5,
    Cancelados: 0,
  };
  const active = activeMap[stage] ?? 0;
  return steps.map((step, index) => ({ step, active: index <= active }));
}

function shopMeta(product) {
  const category = categories.find((item) => item.name === product.category) || categories[0];
  const sold = productSales(product.id).reduce((sum, sale) => sum + sale.items.filter((item) => item.productId === product.id).reduce((qty, item) => qty + item.quantity, 0), 0);
  const discountPercent = product.id.charCodeAt(product.id.length - 1) % 3 === 0 ? 15 : product.id.charCodeAt(product.id.length - 1) % 2 === 0 ? 10 : 0;
  const originalPrice = Math.round(product.salePrice * (discountPercent ? 1 + discountPercent / 100 : 1));
  const promoPrice = discountPercent ? product.salePrice : originalPrice;
  return {
    brand: product.brand || category.brand || product.supplier,
    subcategory: product.subcategory || category.subcategory,
    collection: product.collection || category.collection,
    department: product.department || category.department,
    keywords: [product.name, product.category, product.internalCode, product.barcode, product.description, product.supplier, category.keywords].join(' ').toLowerCase(),
    originalPrice,
    promoPrice,
    discountPercent,
    installments: Math.max(1, Math.min(12, Math.ceil(promoPrice / 250))),
    rating: Number(product.rating || (4 + (product.id.charCodeAt(product.id.length - 1) % 9) / 10).toFixed(1)),
    sold,
    freeShipping: product.freeShipping ?? product.stock > product.minStock + 8,
    deliveryDays: product.freeShipping ? 3 : 5,
    featured: product.featured ?? product.stock > product.minStock,
    condition: product.condition || 'Novo',
    variations: product.variations || [
      { name: 'Padrao', stock: product.stock },
      { name: 'Premium', stock: Math.max(0, Math.floor(product.stock / 3)) },
    ],
  };
}

function cartTotals() {
  const subtotal = state.cart.reduce((sum, item) => {
    const product = byId(products, item.productId);
    return product ? sum + shopMeta(product).promoPrice * item.quantity : sum;
  }, 0);
  const discount = state.coupon.toUpperCase() === 'BEMVINDO10' ? subtotal * 0.1 : 0;
  const shipping = state.cart.some((item) => shopMeta(byId(products, item.productId)).freeShipping) ? 0 : state.shippingCost;
  return { subtotal, discount, shipping, total: Math.max(0, subtotal - discount + shipping) };
}

function filteredShopProducts() {
  const query = state.shopSearch.trim().toLowerCase();
  const rows = products.filter((product) => {
    const meta = shopMeta(product);
    const matchesQuery = !query || meta.keywords.includes(query);
    const matchesCategory = state.shopCategory === 'Todas' || product.category === state.shopCategory;
    const matchesBrand = state.shopBrand === 'Todas' || meta.brand === state.shopBrand;
    const matchesRating = meta.rating >= Number(state.shopRating || 0);
    const matchesShipping = state.shopShipping === 'all' || meta.freeShipping;
    const matchesPromo = state.shopPromo === 'all' || (state.shopPromo === 'promo' ? meta.discountPercent > 0 : product.stock > 0);
    return product.active && matchesQuery && matchesCategory && matchesBrand && matchesRating && matchesShipping && matchesPromo;
  });
  const sorters = {
    lower: (a, b) => shopMeta(a).promoPrice - shopMeta(b).promoPrice,
    higher: (a, b) => shopMeta(b).promoPrice - shopMeta(a).promoPrice,
    sold: (a, b) => shopMeta(b).sold - shopMeta(a).sold,
    rated: (a, b) => shopMeta(b).rating - shopMeta(a).rating,
    recent: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    discount: (a, b) => shopMeta(b).discountPercent - shopMeta(a).discountPercent,
    relevant: (a, b) => Number(shopMeta(b).featured) - Number(shopMeta(a).featured),
  };
  return rows.sort(sorters[state.shopSort] || sorters.relevant);
}

function logoutUser() {
  state.session = null;
  localStorage.removeItem('sales-control-session');
  applySession();
}

function filteredSales() {
  const query = state.search.trim().toLowerCase();
  return sales.filter((sale) => {
    const customer = saleCustomer(sale);
    const product = saleProduct(sale);
    const matchesSearch = [customer.name, product.name, sale.seller, sale.status, sale.payment]
      .join(' ')
      .toLowerCase()
      .includes(query);
    const matchesStatus = state.salesStatus === 'Todos' || sale.status === state.salesStatus;
    const sellerScope = state.session?.role === 'Vendedor' ? sale.seller === state.session.name : true;
    return matchesSearch && matchesStatus && sellerScope;
  });
}

function periodSales(period) {
  const reference = new Date('2026-07-11T12:00:00');
  return sales.filter((sale) => {
    const date = new Date(`${sale.date}T12:00:00`);
    if (period === 'today') return sale.date === '2026-07-11';
    if (period === 'month') return date.getMonth() === reference.getMonth() && date.getFullYear() === reference.getFullYear();
    if (period === 'previousMonth') return date.getMonth() === 5 && date.getFullYear() === 2026;
    return true;
  });
}

function paidTotal(rows) {
  return rows.filter(isPaidSale).reduce((sum, sale) => sum + saleTotal(sale), 0);
}

function renderKpis() {
  const today = periodSales('today');
  const month = periodSales('month');
  const previousMonth = periodSales('previousMonth');
  const paid = sales.filter(isPaidSale);
  const ticket = paid.length ? paidTotal(paid) / paid.length : 0;
  const lowStock = products.filter((product) => product.active && product.stock <= product.minStock).length;
  const comparison = paidTotal(previousMonth) ? Math.round(((paidTotal(month) - paidTotal(previousMonth)) / paidTotal(previousMonth)) * 100) : 100;

  const kpis = [
    { label: 'Vendido hoje', value: money(paidTotal(today)), trend: `${today.length} venda(s)`, icon: 'card' },
    { label: 'Vendido no mes', value: money(paidTotal(month)), trend: `${comparison >= 0 ? '+' : ''}${comparison}% vs. mes anterior`, icon: 'chart', tone: comparison < 0 ? 'danger' : '' },
    { label: 'Quantidade de vendas', value: String(month.length), trend: 'periodo atual', icon: 'receipt' },
    { label: 'Ticket medio', value: money(ticket), trend: '+4,2%', icon: 'card' },
    { label: 'Estoque baixo', value: String(lowStock), trend: 'alerta ativo', icon: 'box', tone: lowStock ? 'danger' : '' },
    { label: 'Clientes cadastrados', value: String(customers.length), trend: `${customers.filter((item) => item.status === 'Ativo').length} ativos`, icon: 'users' },
    { label: 'Meta mensal', value: '78%', trend: 'time comercial', icon: 'target' },
    { label: 'Pendencias', value: money(sales.filter((sale) => sale.status === 'Pendente').reduce((sum, sale) => sum + saleTotal(sale), 0)), trend: 'a receber', icon: 'bell', tone: 'warning' },
  ];

  document.getElementById('kpiGrid').innerHTML = kpis
    .map((kpi) => `
      <article class="kpi-card">
        <div class="kpi-top">
          <span class="muted">${kpi.label}</span>
          <span class="kpi-icon">${icons[kpi.icon]}</span>
        </div>
        <strong>${kpi.value}</strong>
        <span class="trend ${kpi.tone || ''}">${kpi.trend}</span>
      </article>
    `)
    .join('');
}

function renderTables() {
  const rows = filteredSales()
    .map((sale) => {
      const customer = saleCustomer(sale);
      const product = saleProduct(sale);
      return `
        <tr>
          <td>${sale.date.split('-').reverse().join('/')}</td>
          <td>${customer.name}</td>
          <td>${product.name}</td>
          <td>${sale.seller}</td>
          <td><span class="status ${statusClass(sale.status)}">${sale.status}</span></td>
          <td>${sale.payment}</td>
          <td>${money(saleTotal(sale))}</td>
        </tr>
      `;
    })
    .join('');

  document.getElementById('salesTable').innerHTML = rows || '<tr><td colspan="7">Nenhuma venda encontrada.</td></tr>';
  document.getElementById('recentSalesTable').innerHTML = filteredSales()
    .slice(0, 6)
    .map((sale) => `
      <tr>
        <td>${saleCustomer(sale).name}</td>
        <td>${saleProduct(sale).name}</td>
        <td>${sale.seller}</td>
        <td><span class="status ${statusClass(sale.status)}">${sale.status}</span></td>
        <td>${money(saleTotal(sale))}</td>
      </tr>
    `)
    .join('');
}

function renderGoals() {
  const sellerGoals = users.filter((user) => user.target > 0);
  const goalRows = sellerGoals
    .map((user) => {
      const percent = Math.min(Math.round((user.achieved / user.target) * 100), 100);
      return `
        <div class="goal-row">
          <header><strong>${user.name}</strong><span>${percent}%</span></header>
          <div class="progress"><span style="width:${percent}%"></span></div>
          <small class="muted">${money(user.achieved)} de ${money(user.target)}</small>
        </div>
      `;
    })
    .join('');

  document.getElementById('goalList').innerHTML = goalRows;
  document.getElementById('goalBoard').innerHTML = sellerGoals
    .map((user) => {
      const percent = Math.min(Math.round((user.achieved / user.target) * 100), 100);
      return `
        <article class="goal-card">
          <div class="card-head"><strong>${user.name}</strong><span class="status ${percent > 80 ? 'ok' : 'medium'}">${percent}%</span></div>
          <div class="progress"><span style="width:${percent}%"></span></div>
          <div class="metric-line"><span class="muted">Realizado</span><strong>${money(user.achieved)}</strong></div>
          <div class="metric-line"><span class="muted">Meta</span><strong>${money(user.target)}</strong></div>
        </article>
      `;
    })
    .join('') + customGoals
    .map((goal) => {
      const percent = Math.min(Math.round((goal.achievedAmount / goal.targetAmount) * 100), 100);
      return `
        <article class="goal-card">
          <div class="card-head"><strong>${goal.targetName}</strong><span class="status ${percent >= 75 ? 'ok' : 'medium'}">${percent}%</span></div>
          <span class="muted">${goal.period} | ${goal.type}</span>
          <div class="progress"><span style="width:${percent}%"></span></div>
          <div class="metric-line"><span>Meta</span><strong>${money(goal.targetAmount)}</strong></div>
          <div class="metric-line"><span>Alcancado</span><strong>${money(goal.achievedAmount)}</strong></div>
        </article>
      `;
    })
    .join('');
}

function productSales(productId) {
  return sales.filter((sale) => !['Cancelado', 'Cancelada'].includes(sale.status) && sale.items.some((item) => item.productId === productId));
}

function renderRankings() {
  const productRows = products
    .map((product) => ({ name: product.name, value: productSales(product.id).reduce((sum, sale) => sum + saleTotal(sale), 0), count: productSales(product.id).length }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
  const sellerRows = users
    .filter((user) => user.role === 'Vendedor' || user.role === 'Administrador')
    .map((user) => ({ name: user.name, value: paidTotal(sales.filter((sale) => sale.seller === user.name)), count: sales.filter((sale) => sale.seller === user.name).length }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  document.getElementById('topProducts').innerHTML = productRows.map((row) => rankRow(row)).join('');
  document.getElementById('topSellers').innerHTML = sellerRows.map((row) => rankRow(row)).join('');
}

function rankRow(row) {
  return `
    <div class="rank-row">
      <div><strong>${row.name}</strong><span class="muted">${row.count} venda(s)</span></div>
      <strong>${money(row.value)}</strong>
    </div>
  `;
}

function renderCustomers() {
  const html = customers
    .map((customer) => {
      const history = sales.filter((sale) => sale.customerId === customer.id);
      const paidHistory = history.filter(isPaidSale);
      const total = paidHistory.reduce((sum, sale) => sum + saleTotal(sale), 0);
      const lastSale = history[0];
      const favorite = mostFrequent(history.map((sale) => saleProduct(sale).name));
      const pending = history.filter((sale) => sale.status === 'Pendente').reduce((sum, sale) => sum + saleTotal(sale), 0);
      return `
        <article class="customer-card detail-card">
          <div class="card-head"><strong>${customer.name}</strong><span class="status ${statusClass(customer.status)}">${customer.status}</span></div>
          <span class="muted">${customer.document}</span>
          <div class="metric-line"><span>Telefone</span><strong>${customer.phone}</strong></div>
          <div class="metric-line"><span>E-mail</span><strong>${customer.email}</strong></div>
          <div class="metric-line"><span>Endereco</span><strong>${customer.address}</strong></div>
          <div class="metric-line"><span>Ultimo contato</span><strong>${formatDate(customer.lastContact)}</strong></div>
          <div class="mini-divider"></div>
          <div class="metric-line"><span>Total gasto</span><strong>${money(total)}</strong></div>
          <div class="metric-line"><span>Ultima compra</span><strong>${lastSale ? formatDate(lastSale.date) : '-'}</strong></div>
          <div class="metric-line"><span>Mais comprado</span><strong>${favorite || '-'}</strong></div>
          <div class="metric-line"><span>Pendencias</span><strong>${money(pending)}</strong></div>
          <small class="muted">${customer.notes}</small>
        </article>
      `;
    })
    .join('');
  document.getElementById('customerGrid').innerHTML = html;
}

function filteredProducts() {
  return products.filter((product) => {
    const ownerScope = state.session?.role === 'Vendedor' ? !product.ownerEmail || product.ownerEmail === state.session.email : true;
    const matchesStock = state.stockFilter === 'all' || (state.stockFilter === 'low' ? product.stock <= product.minStock : product.stock > product.minStock);
    const matchesSearch = [product.name, product.internalCode, product.barcode, product.supplier]
      .join(' ')
      .toLowerCase()
      .includes(state.productSearch.trim().toLowerCase());
    const matchesCategory = state.categoryFilter === 'Todas' || product.category === state.categoryFilter;
    return ownerScope && matchesStock && matchesSearch && matchesCategory;
  });
}

function renderProducts() {
  document.getElementById('productGrid').innerHTML = filteredProducts()
    .map((product) => {
      const stockStatus = product.stock <= product.minStock ? 'Baixo' : 'OK';
      return `
        <article class="product-card detail-card">
          <div class="card-head">
            <strong>${product.name}</strong>
            <span class="status ${product.active ? statusClass(stockStatus) : 'cancelled'}">${product.active ? stockStatus : 'Inativo'}</span>
          </div>
          <span class="muted">${product.category} | ${product.internalCode} | ${product.barcode}</span>
          <p>${product.description}</p>
          <div class="metric-line"><span>Custo</span><strong>${money(product.costPrice)}</strong></div>
          <div class="metric-line"><span>Venda</span><strong>${money(product.salePrice)}</strong></div>
          <div class="metric-line"><span>Estoque</span><strong>${product.stock} un.</strong></div>
          <div class="metric-line"><span>Estoque minimo</span><strong>${product.minStock} un.</strong></div>
          <div class="metric-line"><span>Fornecedor</span><strong>${product.supplier}</strong></div>
          <div class="metric-line"><span>Cadastro</span><strong>${formatDate(product.createdAt)}</strong></div>
          <div class="card-actions">
            <button class="secondary-button" data-edit-product="${product.id}" type="button">Editar</button>
            <button class="secondary-button" data-stock-in="${product.id}" type="button">Entrada</button>
            <button class="secondary-button" data-stock-out="${product.id}" type="button">Saida</button>
            <button class="secondary-button" data-toggle-product="${product.id}" type="button">${product.active ? 'Desativar' : 'Ativar'}</button>
          </div>
        </article>
      `;
    })
    .join('');
}

function renderPayments() {
  document.getElementById('paymentGrid').innerHTML = sales
    .map((sale) => `
      <article class="payment-card">
        <div class="card-head"><strong>${saleCustomer(sale).name}</strong><span class="status ${statusClass(sale.status)}">${sale.status}</span></div>
        <span class="muted">${sale.payment} | ${formatDate(sale.date)}</span>
        <div class="metric-line"><span>Produto</span><strong>${saleProduct(sale).name}</strong></div>
        <div class="metric-line"><span>Valor</span><strong>${money(saleTotal(sale))}</strong></div>
      </article>
    `)
    .join('');
}

function renderUsers() {
  document.getElementById('userGrid').innerHTML = users
    .map((user) => `
      <article class="user-card">
        <div class="card-head"><strong>${user.name}</strong><span class="status ${statusClass(user.status)}">${user.status}</span></div>
        <span class="muted">${user.email}</span>
        <div class="metric-line"><span>Perfil</span><strong>${user.role}</strong></div>
        <div class="metric-line"><span>Acesso</span><strong>${user.role === 'Administrador' ? 'Completo' : 'Setorial'}</strong></div>
      </article>
    `)
    .join('');
}

function filteredHistorySales() {
  return sales.filter((sale) => {
    const customer = saleCustomer(sale);
    const query = state.historySearch.trim().toLowerCase();
    const matchesQuery = [sale.id, customer.name].join(' ').toLowerCase().includes(query);
    const matchesSeller = state.historySeller === 'Todos' || sale.seller === state.historySeller;
    const matchesPayment = state.historyPayment === 'Todas' || sale.payment === state.historyPayment;
    const matchesStatus = state.historyStatus === 'Todos' || sale.status === state.historyStatus;
    const matchesStart = !state.historyStartDate || sale.date >= state.historyStartDate;
    const matchesEnd = !state.historyEndDate || sale.date <= state.historyEndDate;
    return matchesQuery && matchesSeller && matchesPayment && matchesStatus && matchesStart && matchesEnd;
  });
}

function renderHistory() {
  document.getElementById('historyTable').innerHTML = filteredHistorySales()
    .map((sale) => `
      <tr>
        <td>${sale.id}</td>
        <td>${formatDate(sale.date)}</td>
        <td>${saleCustomer(sale).name}</td>
        <td>${sale.seller}</td>
        <td>${sale.payment}</td>
        <td><span class="status ${statusClass(sale.status)}">${sale.status}</span></td>
        <td>${money(saleTotal(sale))}</td>
        <td class="table-actions">
          <button class="secondary-button" data-sale-details="${sale.id}" type="button">Detalhes</button>
          <button class="secondary-button" data-sale-receipt="${sale.id}" type="button">Comprovante</button>
          <button class="secondary-button" data-sale-cancel="${sale.id}" type="button">Cancelar</button>
        </td>
      </tr>
    `)
    .join('');
  bindHistoryActions();
}

function renderInventory() {
  document.getElementById('inventoryTable').innerHTML = inventoryMovements
    .map((movement) => `
      <tr>
        <td>${formatDate(movement.date)}</td>
        <td>${byId(products, movement.productId)?.name || '-'}</td>
        <td>${movement.type}</td>
        <td>${movement.quantity}</td>
        <td>${movement.responsible}</td>
        <td>${movement.description || '-'}</td>
      </tr>
    `)
    .join('');

  document.getElementById('stockAlerts').innerHTML = stockNotifications()
    .map((item) => notificationCard(item))
    .join('');
}

function stockNotifications() {
  const low = products.filter((product) => product.active && product.stock <= product.minStock);
  const stopped = products.filter((product) => product.active && !sales.some((sale) => sale.items.some((item) => item.productId === product.id)));
  const manual = inventoryMovements.filter((movement) => ['Ajuste', 'Perda', 'Danificado'].includes(movement.type)).slice(0, 3);
  return [
    ...low.map((product) => ({ title: product.stock === 0 ? 'Produto sem estoque' : 'Estoque baixo', text: `${product.name}: ${product.stock} un.`, tone: product.stock === 0 ? 'danger' : 'warning' })),
    ...manual.map((movement) => ({ title: 'Alteracao manual', text: `${byId(products, movement.productId)?.name || '-'} | ${movement.type}`, tone: 'warning' })),
    ...stopped.slice(0, 3).map((product) => ({ title: 'Produto parado', text: `${product.name} sem venda recente`, tone: 'info' })),
  ];
}

function renderFinance() {
  const paidIn = financeMovements.filter((item) => item.status === 'Pago' && item.type === 'Entrada').reduce((sum, item) => sum + item.amount, 0);
  const expenses = financeMovements.filter((item) => ['Saida', 'Despesa'].includes(item.type)).reduce((sum, item) => sum + item.amount, 0);
  const pending = financeMovements.filter((item) => item.status !== 'Pago').reduce((sum, item) => sum + item.amount, 0);
  const profit = paidIn - expenses;
  document.getElementById('financeKpis').innerHTML = [
    ['Fluxo de caixa', money(paidIn - expenses), 'Entradas menos saidas'],
    ['Contas a receber', money(pending), 'Pendencias e parcelas'],
    ['Despesas', money(expenses), 'Saidas registradas'],
    ['Lucro estimado', money(profit), 'Fechamento parcial'],
  ].map(([label, value, trend]) => `
    <article class="kpi-card">
      <div class="kpi-top"><span class="muted">${label}</span><span class="kpi-icon">${icons.wallet}</span></div>
      <strong>${value}</strong>
      <span class="trend">${trend}</span>
    </article>
  `).join('');

  document.getElementById('financeGrid').innerHTML = financeMovements
    .map((item) => `
      <article class="payment-card">
        <div class="card-head"><strong>${item.description}</strong><span class="status ${statusClass(item.status)}">${item.status}</span></div>
        <span class="muted">${item.type} | ${item.category} | ${formatDate(item.date)}</span>
        <div class="metric-line"><span>Valor</span><strong>${money(item.amount)}</strong></div>
        <div class="metric-line"><span>Responsavel</span><strong>${item.responsible}</strong></div>
        <div class="metric-line"><span>Pagamento</span><strong>${item.payment}</strong></div>
        <div class="metric-line"><span>Comprovante</span><strong>${item.receipt || '-'}</strong></div>
      </article>
    `).join('');
}

function renderNotifications() {
  const generated = [
    ...stockNotifications(),
    ...sales.slice(0, 3).map((sale) => ({ title: sale.status === 'Cancelada' ? 'Venda cancelada' : 'Nova venda', text: `${sale.id} | ${saleCustomer(sale).name}`, tone: sale.status === 'Cancelada' ? 'danger' : 'info' })),
    ...financeMovements.filter((item) => item.status === 'Atrasado' || item.status === 'Pendente').slice(0, 4).map((item) => ({ title: item.status === 'Atrasado' ? 'Pagamento atrasado' : 'Parcela proxima do vencimento', text: `${item.description} | ${money(item.amount)}`, tone: item.status === 'Atrasado' ? 'danger' : 'warning' })),
    ...customGoals.filter((goal) => goal.achievedAmount >= goal.targetAmount).map((goal) => ({ title: 'Meta atingida', text: goal.targetName, tone: 'success' })),
    ...customers.slice(0, 2).map((customer) => ({ title: 'Novo cliente cadastrado', text: customer.name, tone: 'info' })),
  ];
  document.getElementById('notificationList').innerHTML = generated.map(notificationCard).join('');
}

function notificationCard(item) {
  return `
    <article class="notification-card ${item.tone || 'info'}">
      <strong>${item.title}</strong>
      <span>${item.text}</span>
    </article>
  `;
}

function renderSettings() {
  const form = document.getElementById('settingsForm');
  Object.entries(companySettings).forEach(([key, value]) => {
    if (form.elements[key]) form.elements[key].value = value;
  });
}

function renderShop() {
  document.getElementById('shopCompanyName').textContent = companySettings.companyName;
  document.getElementById('cartCount').textContent = `Carrinho (${state.cart.reduce((sum, item) => sum + item.quantity, 0)})`;
  renderShopSuggestions();
  renderShopFilters();
  renderShopCategories();
  renderShopProductGrid();
  renderShopSections();
  renderClientOrders();
  renderCart();
}

function renderShopSuggestions() {
  const suggestions = new Set();
  products.forEach((product) => {
    const meta = shopMeta(product);
    [product.name, product.category, meta.brand, product.internalCode, product.barcode, ...meta.keywords.split(',')].forEach((term) => {
      if (term && term.trim()) suggestions.add(term.trim());
    });
  });
  ['Notebook', 'Notebook gamer', 'Notebook Lenovo', 'Notebook com 16 GB de RAM'].forEach((term) => suggestions.add(term));
  document.getElementById('shopSuggestions').innerHTML = [...suggestions].slice(0, 40).map((term) => `<option value="${term}"></option>`).join('');
}

function renderShopFilters() {
  const brands = ['Todas', ...new Set(products.map((product) => shopMeta(product).brand))];
  document.getElementById('shopCategoryFilter').innerHTML = ['Todas', ...new Set(products.map((product) => product.category))].map((category) => `<option ${category === state.shopCategory ? 'selected' : ''}>${category}</option>`).join('');
  document.getElementById('shopBrandFilter').innerHTML = brands.map((brand) => `<option ${brand === state.shopBrand ? 'selected' : ''}>${brand}</option>`).join('');
}

function renderShopCategories() {
  document.getElementById('shopCategoryStrip').innerHTML = categories
    .filter((category) => category.active)
    .sort((a, b) => Number(a.order) - Number(b.order))
    .map((category) => `
      <button class="category-pill ${state.shopCategory === category.name ? 'active' : ''}" data-shop-category="${category.name}">
        <strong>${category.name}</strong>
        <span>${category.department} / ${category.subcategory}</span>
      </button>
    `).join('');
}

function renderShopProductGrid() {
  document.getElementById('shopProductGrid').innerHTML = filteredShopProducts().map(shopProductCard).join('');
}

function shopProductCard(product) {
  const meta = shopMeta(product);
  return `
    <article class="shop-product-card">
      <div class="product-image">${product.image ? `<img src="${product.image}" alt="${product.name}" />` : `<span>${product.category.slice(0, 2).toUpperCase()}</span>`}</div>
      <div class="card-head">
        <strong>${product.name}</strong>
        ${meta.featured ? '<span class="status ok">Destaque</span>' : ''}
      </div>
      <span class="muted">${meta.brand} | ${product.internalCode}</span>
      <div class="rating-line">★ ${meta.rating} | ${meta.sold} vendidos</div>
      <div class="price-line">
        ${meta.discountPercent ? `<span>${money(meta.originalPrice)}</span>` : ''}
        <strong>${money(meta.promoPrice)}</strong>
      </div>
      <span class="muted">${meta.installments}x de ${money(meta.promoPrice / meta.installments)} | ${meta.freeShipping ? 'Frete gratis' : `Entrega em ${meta.deliveryDays} dias`}</span>
      <div class="metric-line"><span>Disponibilidade</span><strong>${product.stock > 0 ? `${product.stock} un.` : 'Esgotado'}</strong></div>
      <div class="card-actions">
        <button class="secondary-button" data-product-detail="${product.id}" type="button">Detalhes</button>
        <button class="secondary-button" data-save-later="${product.id}" type="button">Favorito</button>
        <button class="primary-button" data-add-cart="${product.id}" type="button">Comprar</button>
      </div>
    </article>
  `;
}

function miniProductRow(product) {
  const meta = shopMeta(product);
  return `
    <button class="mini-product-row" data-product-detail="${product.id}" type="button">
      <span>${product.name}</span>
      <strong>${money(meta.promoPrice)}</strong>
    </button>
  `;
}

function renderShopSections() {
  const active = products.filter((product) => product.active);
  document.getElementById('featuredProducts').innerHTML = active.filter((product) => shopMeta(product).featured).slice(0, 5).map(miniProductRow).join('');
  document.getElementById('shopBestSellers').innerHTML = [...active].sort((a, b) => shopMeta(b).sold - shopMeta(a).sold).slice(0, 5).map(miniProductRow).join('');
  document.getElementById('dailyOfferProducts').innerHTML = active.filter((product) => shopMeta(product).discountPercent || shopMeta(product).freeShipping).slice(0, 5).map(miniProductRow).join('');
  document.getElementById('recommendedProducts').innerHTML = [...active].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5).map(miniProductRow).join('');
  document.getElementById('recentlyViewedProducts').innerHTML = state.recentViews.map((id) => byId(products, id)).filter(Boolean).slice(0, 5).map(miniProductRow).join('') || '<span class="muted">Nenhum produto visualizado ainda.</span>';
  bindShopProductActions();
}

function renderClientOrders() {
  const email = state.clientSession?.email;
  const rows = sales.filter((sale) => !email || saleCustomer(sale).email === email).slice(0, 8);
  document.getElementById('clientOrdersTable').innerHTML = rows.map((sale) => `
    <tr>
      <td>${sale.id}</td>
      <td>${formatDate(sale.date)}</td>
      <td>${saleCustomer(sale).name}</td>
      <td><span class="status ${statusClass(sale.status)}">${sale.status}</span></td>
      <td>${money(saleTotal(sale))}</td>
    </tr>
  `).join('');
}

function renderCategoryAdmin() {
  document.getElementById('categoryAdminList').innerHTML = categories
    .sort((a, b) => Number(a.order) - Number(b.order))
    .map((category) => `
      <article class="category-admin-card">
        <div class="card-head"><strong>${category.name}</strong><span class="status ${category.active ? 'ok' : 'cancelled'}">${category.active ? 'Ativa' : 'Inativa'}</span></div>
        <span class="muted">${category.department} > ${category.subcategory} | ${category.brand}</span>
        <div class="metric-line"><span>Colecao</span><strong>${category.collection || '-'}</strong></div>
        <div class="metric-line"><span>Ordem</span><strong>${category.order}</strong></div>
        <small class="muted">${category.keywords}</small>
        <div class="card-actions">
          <button class="secondary-button" data-edit-category="${category.id}" type="button">Editar</button>
          <button class="secondary-button" data-toggle-category="${category.id}" type="button">${category.active ? 'Desativar' : 'Ativar'}</button>
        </div>
      </article>
    `).join('');
  bindCategoryActions();
}

function renderAccount() {
  const client = state.clientSession || { name: 'Cliente visitante', cpf: '-', email: '-', phone: '-', birthDate: '-' };
  const clientOrders = sales
    .filter((sale) => saleCustomer(sale).email === client.email || sale.customerId === customers.find((customer) => customer.email === client.email)?.id)
    .filter((sale) => {
      if (state.accountOrderFilter === 'Todos') return true;
      return orderStage(sale) === state.accountOrderFilter || sale.status === state.accountOrderFilter;
    });
  document.querySelectorAll('[data-account-tab]').forEach((button) => button.classList.toggle('active', button.dataset.accountTab === state.accountTab));
  document.querySelectorAll('[data-account-panel]').forEach((panel) => panel.classList.toggle('active', panel.dataset.accountPanel === state.accountTab));
  document.getElementById('accountProfile').innerHTML = `
    <div class="account-grid">
      <article><strong>${client.name}</strong><span>${client.email}</span></article>
      <article><strong>CPF</strong><span>${client.cpf || '-'}</span></article>
      <article><strong>Telefone</strong><span>${client.phone || '-'}</span></article>
      <article><strong>Nascimento</strong><span>${client.birthDate ? formatDate(client.birthDate) : '-'}</span></article>
    </div>
  `;
  document.getElementById('accountAddresses').innerHTML = `
    <div class="account-grid">
      <article><strong>Endereco principal</strong><span>${customers.find((customer) => customer.email === client.email)?.address || 'Endereco nao cadastrado'}</span></article>
      <article><strong>Entrega padrao</strong><span>${state.shippingMethod}</span></article>
    </div>
  `;
  document.getElementById('accountOrders').innerHTML = `
    <div class="order-filter-row">${['Todos', 'Novos pedidos', 'Aguardando pagamento', 'Pagamento aprovado', 'Em separacao', 'Enviados', 'Entregues', 'Cancelados', 'Devolvido'].map((status) => `<button class="secondary-button ${state.accountOrderFilter === status ? 'is-active' : ''}" data-client-order-filter="${status}" type="button">${status}</button>`).join('')}</div>
    <div class="account-card-list">${clientOrders.map(accountOrderCard).join('') || '<span class="muted">Nenhum pedido encontrado.</span>'}</div>
  `;
  document.getElementById('accountFavorites').innerHTML = `<div class="account-card-list">${state.savedForLater.map((id) => byId(products, id)).filter(Boolean).map((product) => `
    <article class="account-card">
      <strong>${product.name}</strong>
      <span>${money(shopMeta(product).promoPrice)} | ${product.stock > 0 ? 'Em estoque' : 'Sem estoque'}</span>
      <div class="card-actions">
        <button class="secondary-button" data-remove-favorite="${product.id}" type="button">Remover</button>
        <button class="primary-button" data-add-cart="${product.id}" type="button">Adicionar ao carrinho</button>
      </div>
    </article>
  `).join('') || '<span class="muted">Nenhum favorito salvo.</span>'}</div>`;
  document.getElementById('accountCoupons').innerHTML = `<div class="account-card-list">${coupons.filter((coupon) => coupon.active).map((coupon) => `
    <article class="account-card"><strong>${coupon.code}</strong><span>${coupon.type === 'percent' ? `${coupon.value}%` : money(coupon.value)} | minimo ${money(coupon.minPurchase)} | validade ${formatDate(coupon.expiresAt)}</span></article>
  `).join('')}</div>`;
  document.getElementById('accountReviews').innerHTML = `<div class="account-card-list">${reviews.filter((review) => review.customerEmail === client.email).map((review) => `
    <article class="account-card"><strong>${byId(products, review.productId)?.name || 'Produto'}</strong><span>Produto ${review.productScore}/5 | Entrega ${review.deliveryScore}/5 | ${review.recommended ? 'Recomenda' : 'Nao recomenda'}</span><p>${review.comment}</p></article>
  `).join('') || '<span class="muted">Avalie um pedido entregue para aparecer aqui.</span>'}</div>`;
  document.getElementById('accountQuestions').innerHTML = `<div class="account-card-list">${questions.filter((question) => question.customerEmail === client.email).map((question) => `
    <article class="account-card"><strong>${byId(products, question.productId)?.name || 'Produto'}</strong><span>${question.question}</span><p>${question.answer || 'Aguardando resposta da loja.'}</p></article>
  `).join('') || '<span class="muted">Nenhuma pergunta enviada.</span>'}</div>`;
  document.getElementById('accountPayments').innerHTML = `<div class="account-card-list"><article class="account-card"><strong>Cartao final 1234</strong><span>Credito salvo para compras futuras.</span></article><article class="account-card"><strong>Pix</strong><span>Forma favorita para desconto rapido.</span></article></div>`;
  document.getElementById('accountReturns').innerHTML = `<div class="account-card-list">${returnRequests.filter((request) => request.customerEmail === client.email).map((request) => `
    <article class="account-card"><strong>${request.type} | ${request.orderId}</strong><span>${request.reason} | ${request.status}</span><p>${request.description}</p></article>
  `).join('') || '<span class="muted">Nenhuma solicitacao de troca, devolucao ou reembolso.</span>'}</div>`;
  document.getElementById('accountMessages').innerHTML = `<div class="account-card-list">${messages.filter((message) => message.customerEmail === client.email).map((message) => `
    <article class="account-card"><strong>${message.subject} | ${message.orderId}</strong><span>${message.status} | Responsavel: ${message.responsible}</span><p>${message.message}</p></article>
  `).join('') || '<span class="muted">Nenhuma mensagem de atendimento.</span>'}</div>`;
  document.getElementById('accountSecurity').innerHTML = `<div class="account-grid"><article><strong>Senha</strong><span>Protegida no prototipo local.</span></article><article><strong>Firebase Auth</strong><span>Preparado para e-mail, Google, codigo por e-mail e telefone.</span></article></div>`;
  bindAccountActions();
}

function accountOrderCard(sale) {
  const productsText = sale.items.map((item) => `${byId(products, item.productId)?.name || 'Produto'} x${item.quantity}`).join(', ');
  const timeline = orderTimeline(sale).map((item) => `<span class="${item.active ? 'active' : ''}">${item.step}</span>`).join('');
  return `
    <article class="account-card order-account-card">
      <div class="card-head"><strong>${sale.id}</strong><span class="status ${statusClass(sale.status)}">${orderStage(sale)}</span></div>
      <span>${formatDate(sale.date)} | ${productsText}</span>
      <div class="metric-line"><span>Valor</span><strong>${money(saleTotal(sale))}</strong></div>
      <div class="metric-line"><span>Pagamento</span><strong>${sale.payment}</strong></div>
      <div class="metric-line"><span>Endereco</span><strong>${sale.deliveryAddress || 'Endereco do checkout'}</strong></div>
      <div class="metric-line"><span>Rastreio</span><strong>${sale.trackingCode || 'Aguardando envio'}</strong></div>
      <div class="timeline">${timeline}</div>
      <div class="card-actions">
        <button class="secondary-button" data-support-order="${sale.id}" type="button">Suporte</button>
        <button class="secondary-button" data-return-order="${sale.id}" type="button">Troca/devolucao</button>
        <button class="primary-button" data-review-order="${sale.id}" type="button">Avaliar</button>
      </div>
    </article>
  `;
}

function renderAdminOrders() {
  const orderSales = sales.filter((sale) => sale.id.startsWith('WEB-') || sale.notes?.includes('Checkout loja'));
  document.getElementById('adminOrderBoard').innerHTML = orderStatuses.map((status) => `
    <section class="order-column">
      <h3>${status}</h3>
      ${orderSales.filter((sale) => orderStage(sale) === status).map((sale) => `
        <article class="order-card">
          <strong>${sale.id}</strong>
          <span>Cliente: ${saleCustomer(sale).name}</span>
          <span>Valor: ${money(saleTotal(sale))}</span>
          <span>Pagamento: ${sale.payment}</span>
          <span>Entrega: ${sale.shippingMethod || sale.deliveryStatus || 'Transportadora'}</span>
          <select data-order-stage="${sale.id}">
            ${orderStatuses.map((option) => `<option ${option === status ? 'selected' : ''}>${option}</option>`).join('')}
          </select>
        </article>
      `).join('') || '<span class="muted">Sem pedidos.</span>'}
    </section>
  `).join('');
  document.getElementById('adminMessages').innerHTML = messages.map((message) => notificationCard({ title: `${message.subject} | ${message.orderId}`, text: `${message.customerEmail} - ${message.message}`, tone: message.status === 'Aberto' ? 'warning' : 'info' })).join('');
  document.getElementById('adminQaReviews').innerHTML = [
    ...questions.map((question) => ({ title: `Pergunta: ${byId(products, question.productId)?.name || 'Produto'}`, text: `${question.question} | ${question.answer || 'Sem resposta'}`, tone: question.answer ? 'success' : 'warning' })),
    ...reviews.map((review) => ({ title: `Avaliacao: ${byId(products, review.productId)?.name || 'Produto'}`, text: `Media ${(review.productScore + review.serviceScore + review.deliveryScore + review.qualityScore + review.valueScore) / 5}/5 - ${review.comment}`, tone: review.visible ? 'info' : 'danger' })),
  ].map(notificationCard).join('');
  bindAdminOrderActions();
}

function renderCart() {
  const rows = state.cart.map((item) => {
    const product = byId(products, item.productId);
    if (!product) return '';
    const meta = shopMeta(product);
    return `
      <tr>
        <td>${product.name}</td>
        <td><input class="cart-qty" data-cart-qty="${product.id}" type="number" min="1" value="${item.quantity}" /></td>
        <td>${money(meta.promoPrice)}</td>
        <td>${money(meta.promoPrice * item.quantity)}</td>
        <td class="table-actions">
          <button class="secondary-button" data-save-cart="${product.id}" type="button">Salvar</button>
          <button class="secondary-button" data-remove-cart="${product.id}" type="button">Remover</button>
        </td>
      </tr>
    `;
  }).join('');
  document.getElementById('cartItemsTable').innerHTML = rows || '<tr><td colspan="5">Carrinho vazio.</td></tr>';
  const totals = cartTotals();
  document.getElementById('cartSummary').innerHTML = `
    <div class="metric-line"><span>Subtotal</span><strong>${money(totals.subtotal)}</strong></div>
    <div class="metric-line"><span>Desconto</span><strong>${money(totals.discount)}</strong></div>
    <div class="metric-line"><span>Frete</span><strong>${money(totals.shipping)}</strong></div>
    <div class="metric-line total-line"><span>Total</span><strong>${money(totals.total)}</strong></div>
  `;
  renderCheckoutConfirmation();
  bindCartActions();
}

function renderCheckoutConfirmation() {
  const totals = cartTotals();
  const clientName = state.clientSession?.name || document.getElementById('clientCheckoutForm')?.elements.name?.value || 'Cliente visitante';
  const payment = document.getElementById('checkoutPaymentForm')?.elements.payment?.value || 'Pix';
  document.getElementById('checkoutConfirmation').innerHTML = `
    <div class="metric-line"><span>Cliente</span><strong>${clientName}</strong></div>
    <div class="metric-line"><span>Produtos</span><strong>${state.cart.reduce((sum, item) => sum + item.quantity, 0)} item(ns)</strong></div>
    <div class="metric-line"><span>Entrega</span><strong>${state.shippingMethod}</strong></div>
    <div class="metric-line"><span>Pagamento</span><strong>${payment}</strong></div>
    <div class="metric-line"><span>Descontos</span><strong>${money(totals.discount)}</strong></div>
    <div class="metric-line total-line"><span>Total</span><strong>${money(totals.total)}</strong></div>
  `;
}

function renderReports() {
  const total = sales.reduce((sum, sale) => sum + saleTotal(sale), 0);
  const paid = paidTotal(sales);
  const pending = sales.filter((sale) => sale.status === 'Pendente').reduce((sum, sale) => sum + saleTotal(sale), 0);
  const conversion = Math.round((sales.filter(isPaidSale).length / sales.length) * 100);
  const lowStock = products.filter((product) => product.stock <= product.minStock).length;

  document.getElementById('reportList').innerHTML = [
    ['Receita bruta', money(total)],
    ['Receita confirmada', money(paid)],
    ['A receber', money(pending)],
    ['Conversao', `${conversion}%`],
    ['Categorias ativas', String(new Set(products.map((item) => item.category)).size)],
    ['Alertas de estoque', String(lowStock)],
  ]
    .map(([label, value]) => `<div class="metric-line report-item"><span>${label}</span><strong>${value}</strong></div>`)
    .join('');
}

function renderSelects() {
  const statusOptions = ['Todos', 'Pago', 'Finalizada', 'Em andamento', 'Pendente', 'Parcialmente paga', 'Cancelada', 'Reembolsada'];
  document.getElementById('salesStatusFilter').innerHTML = statusOptions.map((status) => `<option ${status === state.salesStatus ? 'selected' : ''}>${status}</option>`).join('');
  document.getElementById('productSelect').innerHTML = products.filter((product) => product.active).map((product) => `<option value="${product.id}">${product.name}</option>`).join('');
  document.getElementById('customerSelect').innerHTML = customers.filter((customer) => customer.status !== 'Inativo').map((customer) => `<option value="${customer.id}">${customer.name}</option>`).join('');
  document.getElementById('sellerSelect').innerHTML = users.filter((user) => ['Administrador', 'Vendedor'].includes(user.role) && user.status === 'Ativo').map((user) => `<option>${user.name}</option>`).join('');
  document.getElementById('categoryFilter').innerHTML = ['Todas', ...new Set(products.map((product) => product.category))].map((category) => `<option ${category === state.categoryFilter ? 'selected' : ''}>${category}</option>`).join('');
  document.getElementById('stockProductSelect').innerHTML = products.map((product) => `<option value="${product.id}">${product.name}</option>`).join('');
  document.getElementById('historySellerFilter').innerHTML = ['Todos', ...new Set(sales.map((sale) => sale.seller))].map((seller) => `<option ${seller === state.historySeller ? 'selected' : ''}>${seller}</option>`).join('');
  document.getElementById('historyPaymentFilter').innerHTML = ['Todas', 'Pix', 'Dinheiro', 'Cartao de credito', 'Cartao de debito', 'Boleto', 'Transferencia', 'Pagamento parcelado', 'Pagamento misto'].map((payment) => `<option ${payment === state.historyPayment ? 'selected' : ''}>${payment}</option>`).join('');
  document.getElementById('historyStatusFilter').innerHTML = statusOptions.map((status) => `<option ${status === state.historyStatus ? 'selected' : ''}>${status}</option>`).join('');
}

function render() {
  renderKpis();
  renderTables();
  renderGoals();
  renderRankings();
  renderCustomers();
  renderProducts();
  renderPayments();
  renderHistory();
  renderInventory();
  renderFinance();
  renderUsers();
  renderReports();
  renderNotifications();
  renderShop();
  renderCategoryAdmin();
  renderAccount();
  renderAdminOrders();
  renderSelects();
  renderSettings();
  renderSaleDraft();
  drawLineChart();
  drawCategoryChart();
  drawPaymentChart();
  setupScrollReveal();
  bindDynamicProductButtons();
}

function clearCanvas(canvas) {
  const context = canvas.getContext('2d');
  const ratio = window.devicePixelRatio || 1;
  const { width, height } = canvas.getBoundingClientRect();
  canvas.width = width * ratio;
  canvas.height = Math.max(height, 280) * ratio;
  context.scale(ratio, ratio);
  context.clearRect(0, 0, width, height);
  return { context, width, height: Math.max(height, 280) };
}

function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

function easeOutCubic(value) {
  return 1 - ((1 - value) ** 3);
}

function drawLineChart(options = {}) {
  const canvas = document.getElementById('salesChart');
  if (!canvas || !state.session) return;
  const mode = document.getElementById('chartMetric').value;
  const rows = mode === 'monthly' ? monthlySeries() : dailySeries(mode);
  renderChart(canvas, rows, mode === 'orders' ? 'line' : 'bar', options.animate);
}

function dailySeries(mode) {
  const dates = [...new Set(sales.map((sale) => sale.date))].sort();
  return dates.map((date) => {
    const daySales = sales.filter((sale) => sale.date === date && sale.status !== 'Cancelado');
    return {
      label: date.slice(5).split('-').reverse().join('/'),
      value: mode === 'orders' ? daySales.length : daySales.reduce((sum, sale) => sum + saleTotal(sale), 0),
    };
  });
}

function monthlySeries() {
  const months = {};
  sales.filter((sale) => sale.status !== 'Cancelado').forEach((sale) => {
    const key = sale.date.slice(0, 7);
    months[key] = (months[key] || 0) + saleTotal(sale);
  });
  return Object.entries(months).sort().map(([month, value]) => ({ label: month.split('-').reverse().join('/'), value }));
}

function renderChart(canvas, rows, type = 'bar', animate = false) {
  if (!animate || prefersReducedMotion()) {
    drawBarsOrLine(canvas, rows, type, 1);
    return;
  }

  cancelAnimationFrame(chartAnimations.get(canvas.id));
  const start = performance.now();
  const duration = type === 'line' ? 980 : 860;
  canvas.classList.add('chart-animating');

  const frame = (now) => {
    const progress = easeOutCubic(Math.min((now - start) / duration, 1));
    drawBarsOrLine(canvas, rows, type, progress);
    if (progress < 1) {
      chartAnimations.set(canvas.id, requestAnimationFrame(frame));
    } else {
      canvas.classList.remove('chart-animating');
      chartAnimations.delete(canvas.id);
    }
  };

  chartAnimations.set(canvas.id, requestAnimationFrame(frame));
}

function drawBarsOrLine(canvas, rows, type = 'bar', progress = 1) {
  const { context, width, height } = clearCanvas(canvas);
  const styles = getComputedStyle(document.body);
  const max = Math.max(...rows.map((row) => row.value), 1);
  const padding = 38;
  const step = (width - padding * 2) / Math.max(rows.length, 1);
  context.strokeStyle = styles.getPropertyValue('--border');
  context.lineWidth = 1;
  for (let i = 0; i < 4; i += 1) {
    const y = padding + (i * (height - padding * 2)) / 3;
    context.beginPath();
    context.moveTo(padding, y);
    context.lineTo(width - padding, y);
    context.stroke();
  }

  if (type === 'line') {
    context.strokeStyle = styles.getPropertyValue('--primary');
    context.lineWidth = 3;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.beginPath();
    rows.forEach((row, index) => {
      const x = padding + index * step + step / 2;
      const y = height - padding - ((row.value / max) * (height - padding * 2) * progress);
      if (index === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    });
    context.stroke();
  }

  rows.forEach((row, index) => {
    const x = padding + index * step + 10;
    const barWidth = Math.max(18, step - 20);
    const barHeight = (row.value / max) * (height - padding * 2) * progress;
    const y = height - padding - barHeight;
    const gradient = context.createLinearGradient(0, y, 0, height - padding);
    gradient.addColorStop(0, styles.getPropertyValue('--primary').trim());
    gradient.addColorStop(1, styles.getPropertyValue('--cyan').trim() || styles.getPropertyValue('--primary').trim());
    context.fillStyle = gradient;
    if (type === 'bar') {
      context.beginPath();
      context.roundRect?.(x, y, barWidth, barHeight, 6);
      if (context.roundRect) context.fill();
      else context.fillRect(x, y, barWidth, barHeight);
    }
    else {
      context.beginPath();
      context.arc(x + barWidth / 2, y, 4, 0, Math.PI * 2);
      context.fill();
    }
    context.fillStyle = styles.getPropertyValue('--muted');
    context.font = '12px Inter, sans-serif';
    context.fillText(row.label, x, height - 12);
  });
}

function drawCategoryChart(options = {}) {
  const canvas = document.getElementById('categoryChart');
  if (!canvas || !state.session) return;
  const totals = products.reduce((acc, product) => {
    acc[product.category] = sales.filter((sale) => sale.productId === product.id && !['Cancelado', 'Cancelada'].includes(sale.status)).reduce((sum, sale) => sum + saleTotal(sale), acc[product.category] || 0);
    return acc;
  }, {});
  renderChart(canvas, Object.entries(totals).map(([label, value]) => ({ label, value })), 'bar', options.animate);
}

function drawPaymentChart(options = {}) {
  const canvas = document.getElementById('paymentChart');
  if (!canvas || !state.session) return;
  const totals = sales.reduce((acc, sale) => {
    acc[sale.payment] = (acc[sale.payment] || 0) + saleTotal(sale);
    return acc;
  }, {});
  renderChart(canvas, Object.entries(totals).map(([label, value]) => ({ label, value })), 'bar', options.animate);
}

function animateVisibleChart(canvas) {
  if (canvas.id === 'salesChart') drawLineChart({ animate: true });
  if (canvas.id === 'categoryChart') drawCategoryChart({ animate: true });
  if (canvas.id === 'paymentChart') drawPaymentChart({ animate: true });
}

function setupScrollReveal() {
  const activeView = document.querySelector('.content-view.active');
  if (!activeView) return;
  const revealItems = activeView.querySelectorAll('.panel, .kpi-card, .goal-row, .goal-card, .customer-card, .product-card, .payment-card, .user-card, .shop-product-card, .category-pill, .promo-banner, .account-card, .order-card');
  const charts = activeView.querySelectorAll('canvas');

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('reveal-visible'));
    charts.forEach((canvas) => animateVisibleChart(canvas));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('reveal-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  }

  if (!chartRevealObserver) {
    chartRevealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateVisibleChart(entry.target);
        chartRevealObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.2 });
  }

  revealItems.forEach((item, index) => {
    item.classList.add('reveal-item');
    item.classList.remove('reveal-visible');
    item.style.setProperty('--reveal-delay', `${Math.min((index % 7) * 55, 260)}ms`);
    revealObserver.observe(item);
  });

  charts.forEach((canvas) => {
    canvas.classList.add('chart-reveal');
    chartRevealObserver.observe(canvas);
  });
}

function switchView(view) {
  const button = document.querySelector(`[data-view="${view}"]`);
  if (!button || button.classList.contains('hidden')) return;
  state.view = view;
  const targetView = document.getElementById(`${view}View`);
  document.querySelectorAll('.content-view').forEach((node) => node.classList.remove('active', 'is-entering'));
  targetView.classList.add('active', 'is-entering');
  window.setTimeout(() => targetView.classList.remove('is-entering'), 700);
  document.querySelectorAll('.nav-item').forEach((node) => node.classList.toggle('active', node.dataset.view === view));
  document.getElementById('pageTitle').textContent = button.querySelector('span:last-child').textContent;
  setTimeout(() => {
    drawLineChart({ animate: true });
    drawCategoryChart({ animate: true });
    drawPaymentChart({ animate: true });
    setupScrollReveal();
  }, 0);
}

function setSaleStep(step) {
  state.saleStep = Math.max(0, Math.min(2, step));
  document.querySelectorAll('[data-step-panel]').forEach((node) => node.classList.toggle('active', Number(node.dataset.stepPanel) === state.saleStep));
  document.querySelectorAll('#stepper button').forEach((node) => node.classList.toggle('active', Number(node.dataset.step) === state.saleStep));
  document.getElementById('prevStep').disabled = state.saleStep === 0;
  document.getElementById('nextStep').classList.toggle('hidden', state.saleStep === 2);
  document.getElementById('saveSale').classList.toggle('hidden', state.saleStep !== 2);
}

function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.getElementById(id).setAttribute('aria-hidden', 'false');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.getElementById(id).setAttribute('aria-hidden', 'true');
}

function openSaleModal() {
  state.saleDraftItems = [];
  openModal('saleModal');
  setSaleStep(0);
  renderSaleDraft();
}

function openProductModal(productId) {
  const form = document.getElementById('productForm');
  form.reset();
  const product = products.find((item) => item.id === productId);
  document.getElementById('productModalTitle').textContent = product ? 'Editar produto' : 'Novo produto';
  if (product) {
    Object.entries(product).forEach(([key, value]) => {
      if (form.elements[key]) form.elements[key].value = String(value);
    });
  } else {
    form.elements.id.value = '';
  }
  openModal('productModal');
}

function bindDynamicProductButtons() {
  document.querySelectorAll('[data-edit-product]').forEach((button) => button.onclick = () => openProductModal(button.dataset.editProduct));
  document.querySelectorAll('[data-toggle-product]').forEach((button) => {
    button.onclick = () => {
      const product = products.find((item) => item.id === button.dataset.toggleProduct);
      product.active = !product.active;
      saveAll();
      render();
    };
  });
  document.querySelectorAll('[data-stock-in], [data-stock-out]').forEach((button) => {
    button.onclick = () => {
      const id = button.dataset.stockIn || button.dataset.stockOut;
      const amount = Number(prompt('Quantidade:', '1'));
      if (!Number.isFinite(amount) || amount <= 0) return;
      const product = products.find((item) => item.id === id);
      product.stock = button.dataset.stockIn ? product.stock + amount : Math.max(0, product.stock - amount);
      saveAll();
      render();
    };
  });
}

function saleDraftTotals() {
  const subtotal = state.saleDraftItems.reduce((sum, item) => sum + item.total, 0);
  const discount = Number(document.getElementById('saleDiscount')?.value || 0);
  const surcharge = Number(document.getElementById('saleSurcharge')?.value || 0);
  const total = Math.max(0, subtotal - discount + surcharge);
  return { subtotal, discount, surcharge, total };
}

function renderSaleDraft() {
  const table = document.getElementById('saleItemsTable');
  const summary = document.getElementById('saleSummary');
  if (!table || !summary) return;
  table.innerHTML = state.saleDraftItems.length
    ? state.saleDraftItems.map((item, index) => `
      <tr>
        <td>${byId(products, item.productId)?.name || '-'}</td>
        <td>${item.quantity}</td>
        <td>${money(item.unitPrice)}</td>
        <td>${money(item.total)}</td>
        <td><button class="secondary-button" data-remove-sale-item="${index}" type="button">Remover</button></td>
      </tr>
    `).join('')
    : '<tr><td colspan="5">Nenhum produto adicionado.</td></tr>';
  const totals = saleDraftTotals();
  summary.innerHTML = `
    <div class="metric-line"><span>Subtotal</span><strong>${money(totals.subtotal)}</strong></div>
    <div class="metric-line"><span>Desconto</span><strong>${money(totals.discount)}</strong></div>
    <div class="metric-line"><span>Acrescimos</span><strong>${money(totals.surcharge)}</strong></div>
    <div class="metric-line total-line"><span>Valor final</span><strong>${money(totals.total)}</strong></div>
  `;
  document.querySelectorAll('[data-remove-sale-item]').forEach((button) => {
    button.onclick = () => {
      state.saleDraftItems.splice(Number(button.dataset.removeSaleItem), 1);
      renderSaleDraft();
    };
  });
}

function addSaleItem() {
  const productId = document.getElementById('productSelect').value;
  const quantity = Number(document.getElementById('saleQuantity').value || 1);
  const product = byId(products, productId);
  if (!product || quantity <= 0) return;
  const existing = state.saleDraftItems.find((item) => item.productId === productId);
  if (existing) {
    existing.quantity += quantity;
    existing.total = existing.quantity * existing.unitPrice;
  } else {
    state.saleDraftItems.push({ productId, quantity, unitPrice: product.salePrice, total: quantity * product.salePrice });
  }
  renderSaleDraft();
}

function applyStockForSale(sale) {
  if (!['Finalizada', 'Pago'].includes(sale.status)) return;
  sale.items.forEach((item) => {
    const product = byId(products, item.productId);
    if (!product) return;
    product.stock = Math.max(0, product.stock - item.quantity);
    inventoryMovements = [{
      date: sale.date,
      productId: item.productId,
      type: 'Saida',
      quantity: item.quantity,
      responsible: sale.seller,
      description: `Venda ${sale.id}`,
    }, ...inventoryMovements];
  });
}

function addFinanceFromSale(sale) {
  financeMovements = [{
    id: `f${Date.now()}`,
    type: isPaidSale(sale) ? 'Entrada' : 'Conta a receber',
    amount: saleTotal(sale),
    category: 'Venda',
    date: sale.date,
    description: `Venda ${sale.id} - ${saleCustomer(sale).name}`,
    responsible: sale.seller,
    payment: sale.payment,
    receipt: sale.status === 'Finalizada' ? `REC-${sale.id}` : '',
    status: isPaidSale(sale) ? 'Pago' : 'Pendente',
  }, ...financeMovements];
}

function bindHistoryActions() {
  document.querySelectorAll('[data-sale-details]').forEach((button) => {
    button.onclick = () => {
      const sale = sales.find((item) => item.id === button.dataset.saleDetails);
      if (!sale) return;
      const items = sale.items.map((item) => `${byId(products, item.productId)?.name || '-'} x${item.quantity}`).join('\n');
      alert(`Venda ${sale.id}\nCliente: ${saleCustomer(sale).name}\nItens:\n${items}\nTotal: ${money(saleTotal(sale))}\nObs: ${sale.notes || '-'}`);
    };
  });
  document.querySelectorAll('[data-sale-receipt]').forEach((button) => {
    button.onclick = () => {
      const sale = sales.find((item) => item.id === button.dataset.saleReceipt);
      if (!sale) return;
      const receipt = `${companySettings.companyName}\nComprovante ${sale.id}\nCliente: ${saleCustomer(sale).name}\nTotal: ${money(saleTotal(sale))}\nPagamento: ${sale.payment}\n${companySettings.receiptInfo}`;
      navigator.clipboard?.writeText(receipt);
      alert(receipt);
    };
  });
  document.querySelectorAll('[data-sale-cancel]').forEach((button) => {
    button.onclick = () => {
      const sale = sales.find((item) => item.id === button.dataset.saleCancel);
      if (!sale || ['Cancelada', 'Cancelado'].includes(sale.status)) return;
      sale.status = 'Cancelada';
      sale.items.forEach((item) => {
        const product = byId(products, item.productId);
        if (product) product.stock += item.quantity;
      });
      inventoryMovements = [
        ...sale.items.map((item) => ({ date: new Date().toISOString().slice(0, 10), productId: item.productId, type: 'Devolucao', quantity: item.quantity, responsible: state.session?.name || 'Sistema', description: `Cancelamento ${sale.id}` })),
        ...inventoryMovements,
      ];
      financeMovements = [{ id: `f${Date.now()}`, type: 'Saida', amount: saleTotal(sale), category: 'Cancelamento', date: new Date().toISOString().slice(0, 10), description: `Venda cancelada ${sale.id}`, responsible: state.session?.name || 'Sistema', payment: sale.payment, receipt: '', status: 'Pendente' }, ...financeMovements];
      saveAll();
      render();
    };
  });
}

function exportHistoryCsv() {
  const header = 'numero,data,cliente,vendedor,pagamento,status,total';
  const rows = filteredHistorySales().map((sale) => [sale.id, sale.date, saleCustomer(sale).name, sale.seller, sale.payment, sale.status, saleTotal(sale)].join(','));
  const csv = [header, ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'historico-vendas.csv';
  link.click();
  URL.revokeObjectURL(link.href);
}

function bindShopProductActions() {
  document.querySelectorAll('[data-product-detail]').forEach((button) => {
    button.onclick = () => openProductDetail(button.dataset.productDetail);
  });
  document.querySelectorAll('[data-add-cart]').forEach((button) => {
    button.onclick = () => addToCart(button.dataset.addCart);
  });
  document.querySelectorAll('[data-save-later]').forEach((button) => {
    button.onclick = () => {
      if (!state.savedForLater.includes(button.dataset.saveLater)) state.savedForLater.push(button.dataset.saveLater);
      saveAll();
      alert('Produto salvo em favoritos.');
    };
  });
  document.querySelectorAll('[data-shop-category]').forEach((button) => {
    button.onclick = () => {
      state.shopCategory = button.dataset.shopCategory;
      renderShop();
    };
  });
}

function openProductDetail(productId) {
  const product = byId(products, productId);
  if (!product) return;
  const meta = shopMeta(product);
  state.recentViews = [productId, ...state.recentViews.filter((id) => id !== productId)].slice(0, 8);
  document.getElementById('productDetailTitle').textContent = product.name;
  document.getElementById('productDetailContent').innerHTML = `
    <div class="product-detail-layout">
      <div class="product-gallery">
        <div class="product-image large">${product.image ? `<img src="${product.image}" alt="${product.name}" />` : `<span>${product.category.slice(0, 2).toUpperCase()}</span>`}</div>
        <div class="gallery-thumbs"><span>Imagem 1</span><span>Imagem 2</span><span>Video opcional</span></div>
      </div>
      <div class="product-detail-info">
        <span class="muted">${meta.brand} | Codigo ${product.internalCode} | ${product.barcode}</span>
        <div class="rating-line">★ ${meta.rating} | ${meta.sold} vendidos | ${product.stock} disponiveis</div>
        <div class="price-line detail-price">${meta.discountPercent ? `<span>${money(meta.originalPrice)}</span>` : ''}<strong>${money(meta.promoPrice)}</strong></div>
        <span class="status ${product.stock > 0 ? 'ok' : 'low'}">${product.stock > 0 ? 'Disponivel' : 'Sem estoque'}</span>
        <div class="metric-line"><span>Parcelamento</span><strong>${meta.installments}x de ${money(meta.promoPrice / meta.installments)}</strong></div>
        <div class="metric-line"><span>Entrega</span><strong>${meta.freeShipping ? 'Frete gratis' : `${meta.deliveryDays} dias uteis`}</strong></div>
        <div class="metric-line"><span>Garantia</span><strong>12 meses</strong></div>
        <div class="metric-line"><span>Devolucao</span><strong>7 dias</strong></div>
        <div class="variation-grid">${meta.variations.map((variation) => `<span>${variation.name}: ${variation.stock} un.</span>`).join('')}</div>
        <p>${product.description}</p>
        <div class="benefit-grid">
          <article><strong>Caracteristicas</strong><span>${meta.department}, ${meta.subcategory}, ${meta.collection}</span></article>
          <article><strong>Perguntas e respostas</strong><span>3 perguntas respondidas pela equipe comercial.</span></article>
          <article><strong>Avaliacoes</strong><span>Compradores destacam custo-beneficio e suporte.</span></article>
          <article><strong>Semelhantes</strong><span>${products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 2).map((item) => item.name).join(', ') || '-'}</span></article>
        </div>
        <button class="primary-button" data-add-cart="${product.id}" type="button">Adicionar ao carrinho</button>
      </div>
    </div>
  `;
  openModal('productDetailModal');
  saveAll();
  renderShopSections();
  bindShopProductActions();
}

function addToCart(productId, quantity = 1) {
  const product = byId(products, productId);
  if (!product || product.stock <= 0) {
    alert('Produto sem estoque.');
    return;
  }
  const existing = state.cart.find((item) => item.productId === productId);
  if (existing) existing.quantity = Math.min(product.stock, existing.quantity + quantity);
  else state.cart.push({ productId, quantity });
  saveAll();
  renderShop();
  alert('Produto adicionado ao carrinho.');
}

function bindCartActions() {
  document.querySelectorAll('[data-cart-qty]').forEach((input) => {
    input.onchange = () => {
      const product = byId(products, input.dataset.cartQty);
      const item = state.cart.find((row) => row.productId === input.dataset.cartQty);
      if (item && product) item.quantity = Math.max(1, Math.min(product.stock, Number(input.value || 1)));
      saveAll();
      renderCart();
      renderShop();
    };
  });
  document.querySelectorAll('[data-remove-cart]').forEach((button) => {
    button.onclick = () => {
      state.cart = state.cart.filter((item) => item.productId !== button.dataset.removeCart);
      saveAll();
      renderCart();
      renderShop();
    };
  });
  document.querySelectorAll('[data-save-cart]').forEach((button) => {
    button.onclick = () => {
      if (!state.savedForLater.includes(button.dataset.saveCart)) state.savedForLater.push(button.dataset.saveCart);
      state.cart = state.cart.filter((item) => item.productId !== button.dataset.saveCart);
      saveAll();
      renderCart();
      renderShop();
    };
  });
}

function setCheckoutStep(step) {
  state.checkoutStep = Math.max(0, Math.min(5, step));
  document.querySelectorAll('[data-checkout-panel]').forEach((panel) => panel.classList.toggle('active', Number(panel.dataset.checkoutPanel) === state.checkoutStep));
  document.querySelectorAll('[data-checkout-step]').forEach((button) => button.classList.toggle('active', Number(button.dataset.checkoutStep) === state.checkoutStep));
  document.getElementById('prevCheckoutStep').disabled = state.checkoutStep === 0;
  document.getElementById('nextCheckoutStep').classList.toggle('hidden', state.checkoutStep === 5);
  document.getElementById('finishCheckout').classList.toggle('hidden', state.checkoutStep !== 5);
  renderCheckoutConfirmation();
}

function finishCheckout() {
  if (!state.cart.length) {
    alert('Carrinho vazio.');
    return;
  }
  const unavailable = state.cart.find((item) => {
    const product = byId(products, item.productId);
    return !product || product.stock < item.quantity;
  });
  if (unavailable) {
    alert('Estoque insuficiente em um dos produtos. Revise o carrinho.');
    return;
  }
  const clientForm = new FormData(document.getElementById('clientCheckoutForm'));
  const paymentForm = new FormData(document.getElementById('checkoutPaymentForm'));
  const addressForm = new FormData(document.getElementById('checkoutAddressForm'));
  const client = state.clientSession || {
    name: clientForm.get('name') || 'Cliente Loja',
    cpf: clientForm.get('cpf') || '000.000.000-00',
    email: clientForm.get('email') || `cliente${Date.now()}@salescontrol.local`,
    phone: clientForm.get('phone') || '',
    birthDate: clientForm.get('birthDate') || '',
  };
  state.clientSession = client;
  let customer = customers.find((item) => item.email === client.email);
  if (!customer) {
    customer = { id: `c${Date.now()}`, name: client.name, document: client.cpf, phone: client.phone, email: client.email, address: `${addressForm.get('address') || 'Endereco nao informado'}, ${addressForm.get('number') || ''}`, birthDate: client.birthDate, notes: 'Cliente cadastrado pela loja', status: 'Ativo', lastContact: new Date().toISOString().slice(0, 10) };
    customers = [customer, ...customers];
  }
  const totals = cartTotals();
  const items = state.cart.map((item) => {
    const product = byId(products, item.productId);
    return { productId: item.productId, quantity: item.quantity, unitPrice: shopMeta(product).promoPrice, total: shopMeta(product).promoPrice * item.quantity };
  });
  const sale = {
    id: `WEB-${String(Date.now()).slice(-6)}`,
    date: new Date().toISOString().slice(0, 10),
    customerId: customer.id,
    productId: items[0].productId,
    items,
    seller: state.session?.role === 'Vendedor' ? state.session.name : 'Loja Online',
    status: 'Finalizada',
    payment: paymentForm.get('payment'),
    installments: Number(paymentForm.get('installments') || 1),
    notes: `Checkout loja | Entrega: ${state.shippingMethod}`,
    discount: totals.discount,
    surcharge: totals.shipping,
    subtotal: totals.subtotal,
    total: totals.total,
    amount: totals.total,
  };
  sales = [sale, ...sales];
  applyStockForSale(sale);
  addFinanceFromSale(sale);
  state.cart = [];
  saveAll();
  closeModal('cartModal');
  render();
  alert(`Compra ${sale.id} concluida.`);
}

function bindCategoryActions() {
  document.querySelectorAll('[data-edit-category]').forEach((button) => {
    button.onclick = () => {
      const category = categories.find((item) => item.id === button.dataset.editCategory);
      const form = document.getElementById('categoryForm');
      Object.entries(category).forEach(([key, value]) => {
        if (form.elements[key]) form.elements[key].value = String(value);
      });
    };
  });
  document.querySelectorAll('[data-toggle-category]').forEach((button) => {
    button.onclick = () => {
      const category = categories.find((item) => item.id === button.dataset.toggleCategory);
      category.active = !category.active;
      saveAll();
      render();
    };
  });
}

function bindAccountActions() {
  const openClientAccountButton = document.getElementById('openClientAuthFromAccount');
  if (openClientAccountButton) {
    openClientAccountButton.onclick = () => openModal('clientAuthModal');
  }
  document.querySelectorAll('[data-account-tab]').forEach((button) => {
    button.onclick = () => {
      state.accountTab = button.dataset.accountTab;
      renderAccount();
    };
  });
  document.querySelectorAll('[data-client-order-filter]').forEach((button) => {
    button.onclick = () => {
      state.accountOrderFilter = button.dataset.clientOrderFilter;
      renderAccount();
    };
  });
  document.querySelectorAll('[data-remove-favorite]').forEach((button) => {
    button.onclick = () => {
      state.savedForLater = state.savedForLater.filter((id) => id !== button.dataset.removeFavorite);
      saveAll();
      renderAccount();
      renderShop();
    };
  });
  document.querySelectorAll('[data-support-order]').forEach((button) => {
    button.onclick = () => {
      const sale = sales.find((item) => item.id === button.dataset.supportOrder);
      if (!sale) return;
      messages = [{ id: `m${Date.now()}`, orderId: sale.id, customerEmail: state.clientSession?.email || saleCustomer(sale).email, subject: 'Suporte do pedido', message: 'Cliente solicitou atendimento pelo painel Minha conta.', responsible: 'Administrador', status: 'Aberto', date: new Date().toISOString().slice(0, 10) }, ...messages];
      saveAll();
      render();
      alert('Solicitacao de suporte enviada ao painel administrativo.');
    };
  });
  document.querySelectorAll('[data-return-order]').forEach((button) => {
    button.onclick = () => {
      const sale = sales.find((item) => item.id === button.dataset.returnOrder);
      if (!sale) return;
      returnRequests = [{ id: `d${Date.now()}`, orderId: sale.id, productId: sale.productId, customerEmail: state.clientSession?.email || saleCustomer(sale).email, type: 'Devolucao', reason: 'Solicitacao pelo cliente', description: 'Cliente abriu uma solicitacao de troca/devolucao/reembolso.', images: '', status: 'Solicitacao aberta', date: new Date().toISOString().slice(0, 10) }, ...returnRequests];
      saveAll();
      render();
      alert('Solicitacao registrada.');
    };
  });
  document.querySelectorAll('[data-review-order]').forEach((button) => {
    button.onclick = () => {
      const sale = sales.find((item) => item.id === button.dataset.reviewOrder);
      if (!sale) return;
      reviews = [{ id: `r${Date.now()}`, productId: sale.productId, customerEmail: state.clientSession?.email || saleCustomer(sale).email, orderId: sale.id, productScore: 5, serviceScore: 5, deliveryScore: 5, qualityScore: 5, valueScore: 5, comment: 'Avaliacao registrada pelo cliente.', media: '', recommended: true, visible: true, answer: '' }, ...reviews];
      saveAll();
      render();
      alert('Avaliacao enviada.');
    };
  });
}

function bindAdminOrderActions() {
  document.querySelectorAll('[data-order-stage]').forEach((select) => {
    select.onchange = () => {
      const sale = sales.find((item) => item.id === select.dataset.orderStage);
      if (!sale) return;
      sale.deliveryStatus = select.value;
      if (select.value === 'Cancelados') sale.status = 'Cancelada';
      if (select.value === 'Entregues') sale.status = 'Finalizada';
      saveAll();
      render();
    };
  });
}

function mostFrequent(items) {
  const counts = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0];
}

function formatDate(date) {
  if (!date) return '-';
  return date.split('-').reverse().join('/');
}

function bindEvents() {
  document.querySelectorAll('[data-auth-tab]').forEach((button) => button.addEventListener('click', () => showAuthTab(button.dataset.authTab)));
  document.getElementById('loginForm').elements.role.addEventListener('change', (event) => {
    const demos = {
      Administrador: ['admin@salescontrol.local', 'admin1234'],
      Vendedor: ['bruno@salescontrol.local', 'vendedor123'],
      Cliente: ['cliente@salescontrol.local', 'cliente123'],
    };
    const [email, password] = demos[event.target.value];
    document.getElementById('loginForm').elements.email.value = email;
    document.getElementById('loginForm').elements.password.value = password;
  });
  document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    loginUser({ email: form.get('email'), password: form.get('password'), role: form.get('role'), inactive: form.get('inactive') === 'on' });
  });
  document.getElementById('googleLogin').addEventListener('click', () => loginUser({ email: 'cliente.google@salescontrol.local', role: 'Cliente', provider: 'google' }));
  document.getElementById('signupForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const requestedRole = ['Vendedor', 'Cliente'].includes(form.get('role')) ? form.get('role') : 'Cliente';
    const user = { name: form.get('name'), email: form.get('email'), password: requestedRole === 'Vendedor' ? 'vendedor123' : 'cliente123', role: requestedRole, status: 'Ativo', target: 0, achieved: 0 };
    users = [user, ...users.filter((item) => item.email !== user.email)];
    saveAll();
    document.getElementById('signupFeedback').textContent = 'Usuario cadastrado. Use a aba Login para entrar.';
  });
  document.getElementById('resetForm').addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('resetFeedback').textContent = 'Link de recuperacao simulado. No Firebase, seria enviado por e-mail.';
  });
  document.getElementById('logoutButton').addEventListener('click', logoutUser);
  document.getElementById('sidebarToggle').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('collapsed'));
  document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    drawLineChart({ animate: true });
    drawCategoryChart({ animate: true });
    drawPaymentChart({ animate: true });
  });
  document.querySelectorAll('.nav-item, [data-view-target]').forEach((node) => node.addEventListener('click', () => switchView(node.dataset.view || node.dataset.viewTarget)));
  document.getElementById('globalSearch').addEventListener('input', (event) => {
    state.search = event.target.value;
    if (state.view === 'shop' || state.session?.role === 'Cliente') {
      state.shopSearch = event.target.value;
      document.getElementById('shopSearch').value = event.target.value;
      renderShop();
    } else {
      renderTables();
    }
  });
  document.getElementById('chartMetric').addEventListener('change', () => drawLineChart({ animate: true }));
  document.getElementById('salesStatusFilter').addEventListener('change', (event) => {
    state.salesStatus = event.target.value;
    renderTables();
  });
  document.getElementById('historySearch').addEventListener('input', (event) => {
    state.historySearch = event.target.value;
    renderHistory();
  });
  document.getElementById('historySellerFilter').addEventListener('change', (event) => {
    state.historySeller = event.target.value;
    renderHistory();
  });
  document.getElementById('historyPaymentFilter').addEventListener('change', (event) => {
    state.historyPayment = event.target.value;
    renderHistory();
  });
  document.getElementById('historyStatusFilter').addEventListener('change', (event) => {
    state.historyStatus = event.target.value;
    renderHistory();
  });
  document.getElementById('historyStartDate').addEventListener('change', (event) => {
    state.historyStartDate = event.target.value;
    renderHistory();
  });
  document.getElementById('historyEndDate').addEventListener('change', (event) => {
    state.historyEndDate = event.target.value;
    renderHistory();
  });
  document.getElementById('exportHistoryCsv').addEventListener('click', exportHistoryCsv);
  document.getElementById('shopSearch').addEventListener('input', (event) => {
    state.shopSearch = event.target.value;
    renderShop();
  });
  document.getElementById('shopCategoryFilter').addEventListener('change', (event) => {
    state.shopCategory = event.target.value;
    renderShop();
  });
  document.getElementById('shopBrandFilter').addEventListener('change', (event) => {
    state.shopBrand = event.target.value;
    renderShop();
  });
  document.getElementById('shopRatingFilter').addEventListener('change', (event) => {
    state.shopRating = Number(event.target.value);
    renderShop();
  });
  document.getElementById('shopShippingFilter').addEventListener('change', (event) => {
    state.shopShipping = event.target.value;
    renderShop();
  });
  document.getElementById('shopPromoFilter').addEventListener('change', (event) => {
    state.shopPromo = event.target.value;
    renderShop();
  });
  document.getElementById('shopSort').addEventListener('change', (event) => {
    state.shopSort = event.target.value;
    renderShop();
  });
  document.querySelectorAll('[data-shop-jump]').forEach((button) => {
    button.addEventListener('click', () => document.getElementById(button.dataset.shopJump)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  });
  document.getElementById('deliveryAddressButton').addEventListener('click', () => alert('Entrega calculada no checkout. Informe o CEP no carrinho.'));
  document.getElementById('favoritesButton').addEventListener('click', () => alert(`Favoritos: ${state.savedForLater.length} produto(s).`));
  document.getElementById('clientLoginButton').addEventListener('click', () => openModal('clientAuthModal'));
  document.getElementById('closeClientAuthModal').addEventListener('click', () => closeModal('clientAuthModal'));
  document.getElementById('clientGoogleLogin').addEventListener('click', () => {
    state.clientSession = { name: 'Cliente Google', cpf: '000.000.000-00', email: 'cliente.google@salescontrol.local', phone: '(11) 90000-0000', provider: 'google' };
    saveAll();
    closeModal('clientAuthModal');
    renderShop();
  });
  document.getElementById('clientAuthForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    state.clientSession = { name: form.get('name'), cpf: form.get('cpf'), email: form.get('email'), phone: form.get('phone'), birthDate: form.get('birthDate'), provider: 'email' };
    saveAll();
    closeModal('clientAuthModal');
    renderShop();
  });
  document.getElementById('cartButton').addEventListener('click', () => {
    openModal('cartModal');
    setCheckoutStep(0);
    renderCart();
  });
  document.getElementById('closeCartModal').addEventListener('click', () => closeModal('cartModal'));
  document.getElementById('applyCoupon').addEventListener('click', () => {
    state.coupon = document.getElementById('couponCode').value.trim();
    saveAll();
    renderCart();
  });
  document.getElementById('calculateShipping').addEventListener('click', () => {
    state.shippingCost = document.getElementById('shippingZip').value.trim() ? 18 : state.shippingCost;
    renderCart();
  });
  document.querySelectorAll('[data-checkout-step]').forEach((button) => button.addEventListener('click', () => setCheckoutStep(Number(button.dataset.checkoutStep))));
  document.getElementById('prevCheckoutStep').addEventListener('click', () => setCheckoutStep(state.checkoutStep - 1));
  document.getElementById('nextCheckoutStep').addEventListener('click', () => setCheckoutStep(state.checkoutStep + 1));
  document.getElementById('finishCheckout').addEventListener('click', finishCheckout);
  document.querySelectorAll('[data-shipping]').forEach((button) => {
    button.addEventListener('click', () => {
      state.shippingMethod = button.dataset.shipping;
      state.shippingCost = Number(button.dataset.cost);
      document.querySelectorAll('[data-shipping]').forEach((node) => node.classList.toggle('active', node === button));
      renderCart();
    });
  });
  document.getElementById('checkoutPaymentForm').addEventListener('input', renderCheckoutConfirmation);
  document.getElementById('clientCheckoutForm').addEventListener('input', renderCheckoutConfirmation);
  document.getElementById('closeProductDetailModal').addEventListener('click', () => closeModal('productDetailModal'));
  document.getElementById('categoryForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const category = {
      id: form.get('id') || `cat${Date.now()}`,
      name: form.get('name'),
      subcategory: form.get('subcategory'),
      brand: form.get('brand'),
      collection: form.get('collection'),
      department: form.get('department'),
      image: form.get('image'),
      order: Number(form.get('order') || 1),
      active: form.get('active') === 'true',
      keywords: form.get('keywords'),
    };
    categories = [category, ...categories.filter((item) => item.id !== category.id)];
    saveAll();
    event.target.reset();
    render();
  });
  document.querySelectorAll('[data-report-export]').forEach((button) => {
    button.addEventListener('click', () => {
      if (button.dataset.reportExport === 'CSV') exportHistoryCsv();
      else alert(`Exportacao ${button.dataset.reportExport} simulada. Na versao Firebase/backend, o arquivo sera gerado no servidor.`);
    });
  });
  document.getElementById('productSearch').addEventListener('input', (event) => {
    state.productSearch = event.target.value;
    renderProducts();
    bindDynamicProductButtons();
  });
  document.getElementById('categoryFilter').addEventListener('change', (event) => {
    state.categoryFilter = event.target.value;
    renderProducts();
    bindDynamicProductButtons();
  });
  document.querySelectorAll('#stockFilter button').forEach((button) => {
    button.addEventListener('click', () => {
      state.stockFilter = button.dataset.stock;
      document.querySelectorAll('#stockFilter button').forEach((node) => node.classList.toggle('active', node === button));
      renderProducts();
      bindDynamicProductButtons();
    });
  });
  document.getElementById('newSaleButton').addEventListener('click', openSaleModal);
  document.getElementById('newSaleButtonAlt').addEventListener('click', openSaleModal);
  document.getElementById('closeModal').addEventListener('click', () => closeModal('saleModal'));
  document.getElementById('saleModal').addEventListener('click', (event) => event.target.id === 'saleModal' && closeModal('saleModal'));
  document.getElementById('cancelSale').addEventListener('click', () => {
    state.saleDraftItems = [];
    document.getElementById('saleForm').reset();
    closeModal('saleModal');
  });
  document.getElementById('prevStep').addEventListener('click', () => setSaleStep(state.saleStep - 1));
  document.getElementById('nextStep').addEventListener('click', () => setSaleStep(state.saleStep + 1));
  document.getElementById('addSaleItem').addEventListener('click', addSaleItem);
  document.getElementById('saleDiscount').addEventListener('input', renderSaleDraft);
  document.getElementById('saleSurcharge').addEventListener('input', renderSaleDraft);
  document.querySelectorAll('#stepper button').forEach((button) => button.addEventListener('click', () => setSaleStep(Number(button.dataset.step))));
  document.getElementById('saleForm').addEventListener('submit', (event) => {
    event.preventDefault();
    if (!state.saleDraftItems.length) {
      alert('Adicione pelo menos um produto antes de finalizar.');
      return;
    }
    const form = new FormData(event.target);
    const totals = saleDraftTotals();
    const sale = {
      id: `S-${String(Date.now()).slice(-6)}`,
      date: new Date().toISOString().slice(0, 10),
      customerId: form.get('customer'),
      productId: state.saleDraftItems[0].productId,
      items: state.saleDraftItems.map((item) => ({ ...item })),
      seller: form.get('seller'),
      status: form.get('status'),
      payment: form.get('payment'),
      installments: Number(form.get('installments') || 1),
      notes: form.get('notes') || '',
      discount: totals.discount,
      surcharge: totals.surcharge,
      subtotal: totals.subtotal,
      total: totals.total,
      amount: totals.total,
    };
    sales = [sale, ...sales];
    applyStockForSale(sale);
    addFinanceFromSale(sale);
    saveAll();
    state.saleDraftItems = [];
    event.target.reset();
    closeModal('saleModal');
    render();
    switchView('sales');
  });
  document.getElementById('stockMovementForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const product = byId(products, form.get('productId'));
    const quantity = Number(form.get('quantity'));
    const type = form.get('type');
    if (product) {
      if (['Entrada', 'Devolucao'].includes(type)) product.stock += quantity;
      if (['Saida', 'Perda', 'Danificado'].includes(type)) product.stock = Math.max(0, product.stock - quantity);
      if (type === 'Ajuste') product.stock = quantity;
    }
    inventoryMovements = [{ date: new Date().toISOString().slice(0, 10), productId: form.get('productId'), type, quantity, responsible: form.get('responsible'), description: form.get('description') }, ...inventoryMovements];
    saveAll();
    event.target.reset();
    render();
  });
  document.getElementById('newCustomerButton').addEventListener('click', () => openModal('customerModal'));
  document.getElementById('closeCustomerModal').addEventListener('click', () => closeModal('customerModal'));
  document.getElementById('cancelCustomer').addEventListener('click', () => closeModal('customerModal'));
  document.getElementById('customerForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    customers = [{ id: `c${Date.now()}`, name: form.get('name'), document: form.get('document'), phone: form.get('phone'), email: form.get('email'), address: form.get('address'), birthDate: form.get('birthDate'), notes: form.get('notes'), status: form.get('status'), lastContact: new Date().toISOString().slice(0, 10) }, ...customers];
    saveAll();
    event.target.reset();
    closeModal('customerModal');
    render();
  });
  document.getElementById('newProductButton').addEventListener('click', () => openProductModal());
  document.getElementById('closeProductModal').addEventListener('click', () => closeModal('productModal'));
  document.getElementById('cancelProduct').addEventListener('click', () => closeModal('productModal'));
  document.getElementById('productForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const product = {
      id: form.get('id') || `p${Date.now()}`,
      name: form.get('name'),
      internalCode: form.get('internalCode'),
      barcode: form.get('barcode'),
      description: form.get('description'),
      category: form.get('category'),
      costPrice: Number(form.get('costPrice')),
      salePrice: Number(form.get('salePrice')),
      stock: Number(form.get('stock')),
      minStock: Number(form.get('minStock')),
      image: form.get('image'),
      supplier: form.get('supplier'),
      active: form.get('active') === 'true',
      ownerEmail: products.find((item) => item.id === form.get('id'))?.ownerEmail || (state.session?.role === 'Vendedor' ? state.session.email : ''),
      createdAt: products.find((item) => item.id === form.get('id'))?.createdAt || new Date().toISOString().slice(0, 10),
    };
    products = [product, ...products.filter((item) => item.id !== product.id)];
    saveAll();
    closeModal('productModal');
    render();
  });
  document.getElementById('newFinanceButton').addEventListener('click', () => {
    document.getElementById('financeForm').elements.date.value = new Date().toISOString().slice(0, 10);
    document.getElementById('financeForm').elements.responsible.value = state.session?.name || 'Administrador';
    openModal('financeModal');
  });
  document.getElementById('closeFinanceModal').addEventListener('click', () => closeModal('financeModal'));
  document.getElementById('cancelFinance').addEventListener('click', () => closeModal('financeModal'));
  document.getElementById('financeForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    financeMovements = [{ id: `f${Date.now()}`, type: form.get('type'), amount: Number(form.get('amount')), category: form.get('category'), date: form.get('date'), description: form.get('description'), responsible: form.get('responsible'), payment: form.get('payment'), receipt: form.get('receipt'), status: form.get('status') }, ...financeMovements];
    saveAll();
    event.target.reset();
    closeModal('financeModal');
    render();
  });
  document.getElementById('newGoalButton').addEventListener('click', () => openModal('goalModal'));
  document.getElementById('closeGoalModal').addEventListener('click', () => closeModal('goalModal'));
  document.getElementById('cancelGoal').addEventListener('click', () => closeModal('goalModal'));
  document.getElementById('goalForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    customGoals = [{ id: `g${Date.now()}`, period: form.get('period'), type: form.get('type'), targetName: form.get('targetName'), targetAmount: Number(form.get('targetAmount')), achievedAmount: 0 }, ...customGoals];
    saveAll();
    event.target.reset();
    closeModal('goalModal');
    render();
  });
  document.getElementById('settingsForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    companySettings = Object.fromEntries(form.entries());
    saveAll();
    renderSettings();
    alert('Configuracoes salvas.');
  });
  window.addEventListener('resize', () => {
    drawLineChart();
    drawCategoryChart();
    drawPaymentChart();
  });
}

renderIcons();
bindEvents();
applySession();
render();
