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
};

const state = {
  view: 'dashboard',
  search: '',
  saleStep: 0,
  salesStatus: 'Todos',
  stockFilter: 'all',
};

const products = [
  { name: 'CRM Pro Anual', category: 'Software', stock: 42, price: 1890 },
  { name: 'Scanner Fiscal X2', category: 'Equipamento', stock: 8, price: 1380 },
  { name: 'Pacote Implantacao', category: 'Servico', stock: 18, price: 2400 },
  { name: 'Terminal POS Smart', category: 'Equipamento', stock: 5, price: 990 },
  { name: 'Treinamento Comercial', category: 'Servico', stock: 30, price: 760 },
  { name: 'Modulo Estoque Plus', category: 'Software', stock: 21, price: 650 },
];

const users = [
  { name: 'Ana Martins', role: 'Admin', status: 'Ativo', target: 90000, achieved: 78200 },
  { name: 'Bruno Costa', role: 'Vendedor', status: 'Ativo', target: 70000, achieved: 48600 },
  { name: 'Camila Rocha', role: 'Vendedor', status: 'Ativo', target: 65000, achieved: 60250 },
  { name: 'Diego Alves', role: 'Financeiro', status: 'Ativo', target: 0, achieved: 0 },
];

let sales = JSON.parse(localStorage.getItem('sales-control-sales') || 'null') || [
  { date: '2026-07-11', customer: 'Mercado Aurora', product: 'CRM Pro Anual', seller: 'Ana Martins', status: 'Pago', payment: 'Pix', amount: 1890 },
  { date: '2026-07-10', customer: 'Clima Sul', product: 'Scanner Fiscal X2', seller: 'Bruno Costa', status: 'Pendente', payment: 'Boleto', amount: 1380 },
  { date: '2026-07-10', customer: 'Papelaria Nova', product: 'Pacote Implantacao', seller: 'Camila Rocha', status: 'Pago', payment: 'Cartao de credito', amount: 2400 },
  { date: '2026-07-09', customer: 'Atacado Prime', product: 'Terminal POS Smart', seller: 'Ana Martins', status: 'Pago', payment: 'Transferencia', amount: 990 },
  { date: '2026-07-08', customer: 'Studio Norte', product: 'Treinamento Comercial', seller: 'Bruno Costa', status: 'Cancelado', payment: 'Cartao de credito', amount: 760 },
  { date: '2026-07-07', customer: 'Loja Bela Casa', product: 'Modulo Estoque Plus', seller: 'Camila Rocha', status: 'Pago', payment: 'Pix', amount: 650 },
  { date: '2026-07-06', customer: 'Auto Pecas Delta', product: 'Pacote Implantacao', seller: 'Ana Martins', status: 'Pendente', payment: 'Boleto', amount: 2400 },
];

function money(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function statusClass(status) {
  return {
    Pago: 'paid',
    Pendente: 'pending',
    Cancelado: 'cancelled',
    Ativo: 'active',
    OK: 'ok',
    Baixo: 'low',
    Medio: 'medium',
  }[status] || 'medium';
}

function saveSales() {
  localStorage.setItem('sales-control-sales', JSON.stringify(sales));
}

function filteredSales() {
  const query = state.search.trim().toLowerCase();
  return sales.filter((sale) => {
    const matchesSearch = [sale.customer, sale.product, sale.seller, sale.status, sale.payment]
      .join(' ')
      .toLowerCase()
      .includes(query);
    const matchesStatus = state.salesStatus === 'Todos' || sale.status === state.salesStatus;
    return matchesSearch && matchesStatus;
  });
}

function renderIcons() {
  document.querySelectorAll('[data-icon]').forEach((node) => {
    node.innerHTML = icons[node.dataset.icon] || '';
  });
}

function renderKpis() {
  const paid = sales.filter((sale) => sale.status === 'Pago');
  const pending = sales.filter((sale) => sale.status === 'Pendente');
  const revenue = paid.reduce((sum, sale) => sum + sale.amount, 0);
  const ticket = paid.length ? revenue / paid.length : 0;
  const lowStock = products.filter((product) => product.stock <= 8).length;
  const kpis = [
    { label: 'Receita recebida', value: money(revenue), trend: '+18% no mes', icon: 'chart' },
    { label: 'Vendas registradas', value: String(sales.length), trend: '+7 novas', icon: 'receipt' },
    { label: 'Ticket medio', value: money(ticket), trend: '+4,2%', icon: 'card' },
    { label: 'Estoque critico', value: String(lowStock), trend: 'repor hoje', icon: 'box', tone: 'danger' },
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
    .map((sale) => `
      <tr>
        <td>${sale.date.split('-').reverse().join('/')}</td>
        <td>${sale.customer}</td>
        <td>${sale.product}</td>
        <td>${sale.seller}</td>
        <td><span class="status ${statusClass(sale.status)}">${sale.status}</span></td>
        <td>${sale.payment}</td>
        <td>${money(sale.amount)}</td>
      </tr>
    `)
    .join('');

  document.getElementById('salesTable').innerHTML = rows || '<tr><td colspan="7">Nenhuma venda encontrada.</td></tr>';
  document.getElementById('recentSalesTable').innerHTML = filteredSales()
    .slice(0, 5)
    .map((sale) => `
      <tr>
        <td>${sale.customer}</td>
        <td>${sale.product}</td>
        <td>${sale.seller}</td>
        <td><span class="status ${statusClass(sale.status)}">${sale.status}</span></td>
        <td>${money(sale.amount)}</td>
      </tr>
    `)
    .join('');
}

function renderGoals() {
  const sellerGoals = users.filter((user) => user.target > 0);
  const html = sellerGoals
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

  document.getElementById('goalList').innerHTML = html;
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

function renderCards() {
  const customers = Array.from(new Map(sales.map((sale) => [sale.customer, sale])).values());
  document.getElementById('customerGrid').innerHTML = customers
    .map((customer) => {
      const total = sales.filter((sale) => sale.customer === customer.customer).reduce((sum, sale) => sum + sale.amount, 0);
      return `
        <article class="customer-card">
          <div class="card-head"><strong>${customer.customer}</strong><span class="status active">Ativo</span></div>
          <span class="muted">${customer.product}</span>
          <div class="metric-line"><span>Total comprado</span><strong>${money(total)}</strong></div>
          <div class="metric-line"><span>Responsavel</span><strong>${customer.seller}</strong></div>
        </article>
      `;
    })
    .join('');

  const productRows = products.filter((product) => {
    if (state.stockFilter === 'low') return product.stock <= 8;
    if (state.stockFilter === 'ok') return product.stock > 8;
    return true;
  });

  document.getElementById('productGrid').innerHTML = productRows
    .map((product) => {
      const stockStatus = product.stock <= 8 ? 'Baixo' : 'OK';
      return `
        <article class="product-card">
          <div class="card-head"><strong>${product.name}</strong><span class="status ${statusClass(stockStatus)}">${stockStatus}</span></div>
          <span class="muted">${product.category}</span>
          <div class="metric-line"><span>Estoque</span><strong>${product.stock} un.</strong></div>
          <div class="metric-line"><span>Preco</span><strong>${money(product.price)}</strong></div>
        </article>
      `;
    })
    .join('');

  document.getElementById('paymentGrid').innerHTML = sales
    .map((sale) => `
      <article class="payment-card">
        <div class="card-head"><strong>${sale.customer}</strong><span class="status ${statusClass(sale.status)}">${sale.status}</span></div>
        <span class="muted">${sale.payment}</span>
        <div class="metric-line"><span>Valor</span><strong>${money(sale.amount)}</strong></div>
      </article>
    `)
    .join('');

  document.getElementById('userGrid').innerHTML = users
    .map((user) => `
      <article class="user-card">
        <div class="card-head"><strong>${user.name}</strong><span class="status ${statusClass(user.status)}">${user.status}</span></div>
        <span class="muted">${user.role}</span>
        <div class="metric-line"><span>Permissao</span><strong>${user.role === 'Admin' ? 'Total' : 'Setorial'}</strong></div>
      </article>
    `)
    .join('');
}

function renderReports() {
  const total = sales.reduce((sum, sale) => sum + sale.amount, 0);
  const paid = sales.filter((sale) => sale.status === 'Pago').reduce((sum, sale) => sum + sale.amount, 0);
  const pending = sales.filter((sale) => sale.status === 'Pendente').reduce((sum, sale) => sum + sale.amount, 0);
  const conversion = Math.round((sales.filter((sale) => sale.status === 'Pago').length / sales.length) * 100);

  document.getElementById('reportList').innerHTML = [
    ['Receita bruta', money(total)],
    ['Receita confirmada', money(paid)],
    ['A receber', money(pending)],
    ['Conversao', `${conversion}%`],
  ]
    .map(([label, value]) => `<div class="metric-line"><span>${label}</span><strong>${value}</strong></div>`)
    .join('');
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
  if (!canvas) return;
  const { context, width, height } = clearCanvas(canvas);
  const dates = [...new Set(sales.map((sale) => sale.date))].sort();
  const values = dates.map((date) => {
    const daySales = sales.filter((sale) => sale.date === date && sale.status !== 'Cancelado');
    if (document.getElementById('chartMetric').value === 'orders') return daySales.length;
    return daySales.reduce((sum, sale) => sum + sale.amount, 0);
  });
  const max = Math.max(...values, 1);
  const padding = 36;
  const step = (width - padding * 2) / Math.max(values.length - 1, 1);

  context.strokeStyle = getComputedStyle(document.body).getPropertyValue('--border');
  context.lineWidth = 1;
  for (let i = 0; i < 4; i += 1) {
    const y = padding + (i * (height - padding * 2)) / 3;
    context.beginPath();
    context.moveTo(padding, y);
    context.lineTo(width - padding, y);
    context.stroke();
  }

  context.strokeStyle = getComputedStyle(document.body).getPropertyValue('--primary');
  context.lineWidth = 3;
  context.beginPath();
  values.forEach((value, index) => {
    const x = padding + index * step;
    const y = height - padding - (value / max) * (height - padding * 2);
    if (index === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  });
  context.stroke();

  context.fillStyle = getComputedStyle(document.body).getPropertyValue('--primary');
  values.forEach((value, index) => {
    const x = padding + index * step;
    const y = height - padding - (value / max) * (height - padding * 2);
    context.beginPath();
    context.arc(x, y, 4, 0, Math.PI * 2);
    context.fill();
  });

  context.fillStyle = getComputedStyle(document.body).getPropertyValue('--muted');
  context.font = '12px Inter, sans-serif';
  dates.forEach((date, index) => {
    const label = date.slice(5).split('-').reverse().join('/');
    context.fillText(label, padding + index * step - 14, height - 10);
  });
}

function drawCategoryChart() {
  const canvas = document.getElementById('categoryChart');
  if (!canvas) return;
  const { context, width, height } = clearCanvas(canvas);
  const totals = products.reduce((acc, product) => {
    acc[product.category] = sales
      .filter((sale) => sale.product === product.name && sale.status !== 'Cancelado')
      .reduce((sum, sale) => sum + sale.amount, acc[product.category] || 0);
    return acc;
  }, {});
  const entries = Object.entries(totals);
  const max = Math.max(...entries.map(([, value]) => value), 1);
  const colors = ['#2563eb', '#16a34a', '#d97706'];
  const barWidth = Math.min(120, (width - 100) / entries.length - 28);

  entries.forEach(([category, value], index) => {
    const x = 56 + index * ((width - 112) / entries.length) + 16;
    const barHeight = (value / max) * (height - 92);
    const y = height - 48 - barHeight;
    context.fillStyle = colors[index % colors.length];
    context.fillRect(x, y, barWidth, barHeight);
    context.fillStyle = getComputedStyle(document.body).getPropertyValue('--muted');
    context.font = '12px Inter, sans-serif';
    context.fillText(category, x, height - 20);
    context.fillText(money(value), x, y - 8);
  });
}

function renderSelects() {
  const statusOptions = ['Todos', 'Pago', 'Pendente', 'Cancelado'];
  document.getElementById('salesStatusFilter').innerHTML = statusOptions
    .map((status) => `<option ${status === state.salesStatus ? 'selected' : ''}>${status}</option>`)
    .join('');
  document.getElementById('productSelect').innerHTML = products.map((product) => `<option>${product.name}</option>`).join('');
  document.getElementById('sellerSelect').innerHTML = users
    .filter((user) => user.role !== 'Financeiro')
    .map((user) => `<option>${user.name}</option>`)
    .join('');
}

function render() {
  renderKpis();
  renderTables();
  renderGoals();
  renderCards();
  renderReports();
  renderSelects();
  drawLineChart();
  drawCategoryChart();
}

function switchView(view) {
  state.view = view;
  document.querySelectorAll('.content-view').forEach((node) => node.classList.remove('active'));
  document.getElementById(`${view}View`).classList.add('active');
  document.querySelectorAll('.nav-item').forEach((node) => node.classList.toggle('active', node.dataset.view === view));
  document.getElementById('pageTitle').textContent = document.querySelector(`[data-view="${view}"] span:last-child`).textContent;
  setTimeout(() => {
    drawLineChart();
    drawCategoryChart();
  }, 0);
}

function setSaleStep(step) {
  state.saleStep = Math.max(0, Math.min(2, step));
  document.querySelectorAll('[data-step-panel]').forEach((node) => {
    node.classList.toggle('active', Number(node.dataset.stepPanel) === state.saleStep);
  });
  document.querySelectorAll('#stepper button').forEach((node) => {
    node.classList.toggle('active', Number(node.dataset.step) === state.saleStep);
  });
  document.getElementById('prevStep').disabled = state.saleStep === 0;
  document.getElementById('nextStep').classList.toggle('hidden', state.saleStep === 2);
  document.getElementById('saveSale').classList.toggle('hidden', state.saleStep !== 2);
}

function openModal() {
  document.getElementById('saleModal').classList.add('open');
  document.getElementById('saleModal').setAttribute('aria-hidden', 'false');
  setSaleStep(0);
}

function closeModal() {
  document.getElementById('saleModal').classList.remove('open');
  document.getElementById('saleModal').setAttribute('aria-hidden', 'true');
  document.getElementById('saleForm').reset();
}

function bindEvents() {
  document.getElementById('sidebarToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('collapsed');
  });
  document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    drawLineChart();
    drawCategoryChart();
  });
  document.querySelectorAll('.nav-item, [data-view-target]').forEach((node) => {
    node.addEventListener('click', () => switchView(node.dataset.view || node.dataset.viewTarget));
  });
  document.getElementById('globalSearch').addEventListener('input', (event) => {
    state.search = event.target.value;
    renderTables();
  });
  document.getElementById('chartMetric').addEventListener('change', drawLineChart);
  document.getElementById('salesStatusFilter').addEventListener('change', (event) => {
    state.salesStatus = event.target.value;
    renderTables();
  });
  document.querySelectorAll('#stockFilter button').forEach((button) => {
    button.addEventListener('click', () => {
      state.stockFilter = button.dataset.stock;
      document.querySelectorAll('#stockFilter button').forEach((node) => node.classList.toggle('active', node === button));
      renderCards();
    });
  });
  document.getElementById('newSaleButton').addEventListener('click', openModal);
  document.getElementById('newSaleButtonAlt').addEventListener('click', openModal);
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('saleModal').addEventListener('click', (event) => {
    if (event.target.id === 'saleModal') closeModal();
  });
  document.getElementById('prevStep').addEventListener('click', () => setSaleStep(state.saleStep - 1));
  document.getElementById('nextStep').addEventListener('click', () => setSaleStep(state.saleStep + 1));
  document.querySelectorAll('#stepper button').forEach((button) => {
    button.addEventListener('click', () => setSaleStep(Number(button.dataset.step)));
  });
  document.getElementById('saleForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    sales = [
      {
        date: new Date().toISOString().slice(0, 10),
        customer: form.get('customer').trim(),
        product: form.get('product'),
        seller: form.get('seller'),
        status: 'Pendente',
        payment: form.get('payment'),
        amount: Number(form.get('amount')),
      },
      ...sales,
    ];
    saveSales();
    closeModal();
    render();
    switchView('sales');
  });
  window.addEventListener('resize', () => {
    drawLineChart();
    drawCategoryChart();
  });
}

renderIcons();
render();
bindEvents();
