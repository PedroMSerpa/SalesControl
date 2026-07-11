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
};

const defaultProducts = [
  { id: 'p1', name: 'CRM Pro Anual', internalCode: 'SOF-001', barcode: '7891000000011', description: 'Licenca anual do CRM Pro', category: 'Software', costPrice: 740, salePrice: 1890, stock: 42, minStock: 10, image: '', supplier: 'SalesCloud Labs', active: true, createdAt: '2026-01-15' },
  { id: 'p2', name: 'Scanner Fiscal X2', internalCode: 'EQP-014', barcode: '7891000000141', description: 'Scanner para operacao fiscal', category: 'Equipamento', costPrice: 820, salePrice: 1380, stock: 8, minStock: 10, image: '', supplier: 'Norte Tech', active: true, createdAt: '2026-02-04' },
  { id: 'p3', name: 'Pacote Implantacao', internalCode: 'SRV-200', barcode: '7891000002008', description: 'Onboarding e configuracao inicial', category: 'Servico', costPrice: 900, salePrice: 2400, stock: 18, minStock: 6, image: '', supplier: 'Equipe interna', active: true, createdAt: '2026-03-11' },
  { id: 'p4', name: 'Terminal POS Smart', internalCode: 'EQP-027', barcode: '7891000000271', description: 'Terminal POS com NFC', category: 'Equipamento', costPrice: 590, salePrice: 990, stock: 5, minStock: 8, image: '', supplier: 'Pay Hardware', active: true, createdAt: '2026-04-18' },
  { id: 'p5', name: 'Treinamento Comercial', internalCode: 'SRV-330', barcode: '7891000003302', description: 'Treinamento de vendas e processo', category: 'Servico', costPrice: 260, salePrice: 760, stock: 30, minStock: 5, image: '', supplier: 'Equipe interna', active: true, createdAt: '2026-05-05' },
  { id: 'p6', name: 'Modulo Estoque Plus', internalCode: 'SOF-044', barcode: '7891000000448', description: 'Modulo avancado de estoque', category: 'Software', costPrice: 190, salePrice: 650, stock: 21, minStock: 10, image: '', supplier: 'SalesCloud Labs', active: true, createdAt: '2026-05-21' },
];

const defaultUsers = [
  { name: 'Ana Martins', email: 'admin@salescontrol.local', role: 'Administrador', status: 'Ativo', target: 90000, achieved: 78200 },
  { name: 'Bruno Costa', email: 'bruno@salescontrol.local', role: 'Vendedor', status: 'Ativo', target: 70000, achieved: 48600 },
  { name: 'Camila Rocha', email: 'camila@salescontrol.local', role: 'Vendedor', status: 'Ativo', target: 65000, achieved: 60250 },
  { name: 'Diego Alves', email: 'diego@salescontrol.local', role: 'Estoquista', status: 'Ativo', target: 0, achieved: 0 },
  { name: 'Marina Lopes', email: 'marina@salescontrol.local', role: 'Gerente', status: 'Ativo', target: 0, achieved: 0 },
  { name: 'Usuario Inativo', email: 'inativo@salescontrol.local', role: 'Vendedor', status: 'Inativo', target: 0, achieved: 0 },
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

const permissions = {
  Administrador: ['all', 'sales', 'customers', 'stock', 'reports', 'admin'],
  Gerente: ['all', 'sales', 'customers', 'reports'],
  Vendedor: ['all', 'sales', 'customers'],
  Estoquista: ['all', 'stock'],
};

const state = {
  view: 'dashboard',
  search: '',
  saleStep: 0,
  salesStatus: 'Todos',
  stockFilter: 'all',
  productSearch: '',
  categoryFilter: 'Todas',
  session: JSON.parse(localStorage.getItem('sales-control-session') || 'null'),
};

let products = JSON.parse(localStorage.getItem('sales-control-products') || 'null') || defaultProducts;
let customers = JSON.parse(localStorage.getItem('sales-control-customers') || 'null') || defaultCustomers;
let users = JSON.parse(localStorage.getItem('sales-control-users') || 'null') || defaultUsers;
let sales = normalizeSales(JSON.parse(localStorage.getItem('sales-control-sales') || 'null') || defaultSales);

function normalizeSales(rows) {
  return rows.map((sale) => {
    const customer = customers.find((item) => item.name === sale.customer);
    const product = products.find((item) => item.name === sale.product);
    return {
      ...sale,
      customerId: sale.customerId || customer?.id || 'c1',
      productId: sale.productId || product?.id || 'p1',
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
    Pendente: 'pending',
    Cancelado: 'cancelled',
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

  document.getElementById('sessionChip').innerHTML = `<strong>${state.session.name}</strong><span>${state.session.role}</span>`;
  document.querySelectorAll('[data-permission]').forEach((button) => {
    const allowed = button.dataset.permission === 'all' || can(button.dataset.permission);
    button.classList.toggle('hidden', !allowed);
  });
  if (document.querySelector(`.nav-item[data-view="${state.view}"]`)?.classList.contains('hidden')) {
    switchView('dashboard');
  }
}

function loginUser({ email, role, inactive = false, provider = 'email' }) {
  const existing = users.find((user) => user.email.toLowerCase() === email.toLowerCase());
  const user = existing || { name: email.split('@')[0], email, role, status: 'Ativo', target: 0, achieved: 0 };
  if (inactive || user.status === 'Inativo') {
    document.getElementById('loginFeedback').textContent = 'Usuario inativo. Procure um administrador para reativar o acesso.';
    return;
  }
  state.session = { name: user.name, email: user.email, role: role || user.role, provider, startedAt: new Date().toISOString() };
  localStorage.setItem('sales-control-session', JSON.stringify(state.session));
  document.getElementById('loginFeedback').textContent = '';
  applySession();
  render();
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
  return rows.filter((sale) => sale.status === 'Pago').reduce((sum, sale) => sum + sale.amount, 0);
}

function renderKpis() {
  const today = periodSales('today');
  const month = periodSales('month');
  const previousMonth = periodSales('previousMonth');
  const paid = sales.filter((sale) => sale.status === 'Pago');
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
    { label: 'Pendencias', value: money(sales.filter((sale) => sale.status === 'Pendente').reduce((sum, sale) => sum + sale.amount, 0)), trend: 'a receber', icon: 'bell', tone: 'warning' },
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
          <td>${money(sale.amount)}</td>
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
        <td>${money(sale.amount)}</td>
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
    .join('');
}

function productSales(productId) {
  return sales.filter((sale) => sale.productId === productId && sale.status !== 'Cancelado');
}

function renderRankings() {
  const productRows = products
    .map((product) => ({ name: product.name, value: productSales(product.id).reduce((sum, sale) => sum + sale.amount, 0), count: productSales(product.id).length }))
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
      const paidHistory = history.filter((sale) => sale.status === 'Pago');
      const total = paidHistory.reduce((sum, sale) => sum + sale.amount, 0);
      const lastSale = history[0];
      const favorite = mostFrequent(history.map((sale) => saleProduct(sale).name));
      const pending = history.filter((sale) => sale.status === 'Pendente').reduce((sum, sale) => sum + sale.amount, 0);
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
    const matchesStock = state.stockFilter === 'all' || (state.stockFilter === 'low' ? product.stock <= product.minStock : product.stock > product.minStock);
    const matchesSearch = [product.name, product.internalCode, product.barcode, product.supplier]
      .join(' ')
      .toLowerCase()
      .includes(state.productSearch.trim().toLowerCase());
    const matchesCategory = state.categoryFilter === 'Todas' || product.category === state.categoryFilter;
    return matchesStock && matchesSearch && matchesCategory;
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
        <div class="metric-line"><span>Valor</span><strong>${money(sale.amount)}</strong></div>
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

function renderReports() {
  const total = sales.reduce((sum, sale) => sum + sale.amount, 0);
  const paid = paidTotal(sales);
  const pending = sales.filter((sale) => sale.status === 'Pendente').reduce((sum, sale) => sum + sale.amount, 0);
  const conversion = Math.round((sales.filter((sale) => sale.status === 'Pago').length / sales.length) * 100);
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
  const statusOptions = ['Todos', 'Pago', 'Pendente', 'Cancelado'];
  document.getElementById('salesStatusFilter').innerHTML = statusOptions.map((status) => `<option ${status === state.salesStatus ? 'selected' : ''}>${status}</option>`).join('');
  document.getElementById('productSelect').innerHTML = products.filter((product) => product.active).map((product) => `<option value="${product.id}">${product.name}</option>`).join('');
  document.getElementById('customerSelect').innerHTML = customers.filter((customer) => customer.status !== 'Inativo').map((customer) => `<option value="${customer.id}">${customer.name}</option>`).join('');
  document.getElementById('sellerSelect').innerHTML = users.filter((user) => ['Administrador', 'Vendedor'].includes(user.role) && user.status === 'Ativo').map((user) => `<option>${user.name}</option>`).join('');
  document.getElementById('categoryFilter').innerHTML = ['Todas', ...new Set(products.map((product) => product.category))].map((category) => `<option ${category === state.categoryFilter ? 'selected' : ''}>${category}</option>`).join('');
}

function render() {
  renderKpis();
  renderTables();
  renderGoals();
  renderRankings();
  renderCustomers();
  renderProducts();
  renderPayments();
  renderUsers();
  renderReports();
  renderSelects();
  drawLineChart();
  drawCategoryChart();
  drawPaymentChart();
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

function drawLineChart() {
  const canvas = document.getElementById('salesChart');
  if (!canvas || !state.session) return;
  const mode = document.getElementById('chartMetric').value;
  const rows = mode === 'monthly' ? monthlySeries() : dailySeries(mode);
  drawBarsOrLine(canvas, rows, mode === 'orders' ? 'line' : 'bar');
}

function dailySeries(mode) {
  const dates = [...new Set(sales.map((sale) => sale.date))].sort();
  return dates.map((date) => {
    const daySales = sales.filter((sale) => sale.date === date && sale.status !== 'Cancelado');
    return {
      label: date.slice(5).split('-').reverse().join('/'),
      value: mode === 'orders' ? daySales.length : daySales.reduce((sum, sale) => sum + sale.amount, 0),
    };
  });
}

function monthlySeries() {
  const months = {};
  sales.filter((sale) => sale.status !== 'Cancelado').forEach((sale) => {
    const key = sale.date.slice(0, 7);
    months[key] = (months[key] || 0) + sale.amount;
  });
  return Object.entries(months).sort().map(([month, value]) => ({ label: month.split('-').reverse().join('/'), value }));
}

function drawBarsOrLine(canvas, rows, type = 'bar') {
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
    context.beginPath();
    rows.forEach((row, index) => {
      const x = padding + index * step + step / 2;
      const y = height - padding - (row.value / max) * (height - padding * 2);
      if (index === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    });
    context.stroke();
  }

  rows.forEach((row, index) => {
    const x = padding + index * step + 10;
    const barWidth = Math.max(18, step - 20);
    const barHeight = (row.value / max) * (height - padding * 2);
    const y = height - padding - barHeight;
    context.fillStyle = styles.getPropertyValue('--primary');
    if (type === 'bar') context.fillRect(x, y, barWidth, barHeight);
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

function drawCategoryChart() {
  const canvas = document.getElementById('categoryChart');
  if (!canvas || !state.session) return;
  const totals = products.reduce((acc, product) => {
    acc[product.category] = sales.filter((sale) => sale.productId === product.id && sale.status !== 'Cancelado').reduce((sum, sale) => sum + sale.amount, acc[product.category] || 0);
    return acc;
  }, {});
  drawBarsOrLine(canvas, Object.entries(totals).map(([label, value]) => ({ label, value })), 'bar');
}

function drawPaymentChart() {
  const canvas = document.getElementById('paymentChart');
  if (!canvas || !state.session) return;
  const totals = sales.reduce((acc, sale) => {
    acc[sale.payment] = (acc[sale.payment] || 0) + sale.amount;
    return acc;
  }, {});
  drawBarsOrLine(canvas, Object.entries(totals).map(([label, value]) => ({ label, value })), 'bar');
}

function switchView(view) {
  const button = document.querySelector(`[data-view="${view}"]`);
  if (!button || button.classList.contains('hidden')) return;
  state.view = view;
  document.querySelectorAll('.content-view').forEach((node) => node.classList.remove('active'));
  document.getElementById(`${view}View`).classList.add('active');
  document.querySelectorAll('.nav-item').forEach((node) => node.classList.toggle('active', node.dataset.view === view));
  document.getElementById('pageTitle').textContent = button.querySelector('span:last-child').textContent;
  setTimeout(() => {
    drawLineChart();
    drawCategoryChart();
    drawPaymentChart();
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
  openModal('saleModal');
  setSaleStep(0);
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
  document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    loginUser({ email: form.get('email'), role: form.get('role'), inactive: form.get('inactive') === 'on' });
  });
  document.getElementById('googleLogin').addEventListener('click', () => loginUser({ email: 'google.user@salescontrol.local', role: 'Gerente', provider: 'google' }));
  document.getElementById('signupForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const user = { name: form.get('name'), email: form.get('email'), role: form.get('role'), status: 'Ativo', target: 0, achieved: 0 };
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
    drawLineChart();
    drawCategoryChart();
    drawPaymentChart();
  });
  document.querySelectorAll('.nav-item, [data-view-target]').forEach((node) => node.addEventListener('click', () => switchView(node.dataset.view || node.dataset.viewTarget)));
  document.getElementById('globalSearch').addEventListener('input', (event) => {
    state.search = event.target.value;
    renderTables();
  });
  document.getElementById('chartMetric').addEventListener('change', drawLineChart);
  document.getElementById('salesStatusFilter').addEventListener('change', (event) => {
    state.salesStatus = event.target.value;
    renderTables();
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
  document.getElementById('prevStep').addEventListener('click', () => setSaleStep(state.saleStep - 1));
  document.getElementById('nextStep').addEventListener('click', () => setSaleStep(state.saleStep + 1));
  document.querySelectorAll('#stepper button').forEach((button) => button.addEventListener('click', () => setSaleStep(Number(button.dataset.step))));
  document.getElementById('saleForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const product = products.find((item) => item.id === form.get('product'));
    sales = [{ date: new Date().toISOString().slice(0, 10), customerId: form.get('customer'), productId: form.get('product'), seller: form.get('seller'), status: 'Pendente', payment: form.get('payment'), amount: Number(form.get('amount')) }, ...sales];
    if (product) product.stock = Math.max(0, product.stock - 1);
    saveAll();
    event.target.reset();
    closeModal('saleModal');
    render();
    switchView('sales');
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
      createdAt: products.find((item) => item.id === form.get('id'))?.createdAt || new Date().toISOString().slice(0, 10),
    };
    products = [product, ...products.filter((item) => item.id !== product.id)];
    saveAll();
    closeModal('productModal');
    render();
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
