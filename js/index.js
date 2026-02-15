const CRP_CONFIG = [
  { code: '01', fn: 'CRPLasCondes', liId: 'lascondes', buttonId: 'blascondes', checkboxId: 'clascondes', title: '1. CRP LAS CONDES', storage: 'las condes' },
  { code: '06', fn: 'CRPSanBernardo', liId: 'sanbernardo', buttonId: 'bsanbernardo', checkboxId: 'csanbernardo', title: '6. CRP SAN BERNARDO', storage: 'san bernardo' },
  { code: '09', fn: 'CRPvalparaiso', liId: 'valparaiso', buttonId: 'bvalparaiso', checkboxId: 'cvalparaiso', title: '9. CRP VALPARAISO', storage: 'valparaiso' },
  { code: '11', fn: 'CRParica', liId: 'arica', buttonId: 'barica', checkboxId: 'carica', title: '11. CRP ARICA', storage: 'arica' },
  { code: '12', fn: 'CRPiquique', liId: 'iquique', buttonId: 'biquique', checkboxId: 'ciquique', title: '12. CRP IQUIQUE', storage: 'iquique' },
  { code: '13', fn: 'CRPlaserena', liId: 'laserena', buttonId: 'blaserena', checkboxId: 'claserena', title: '13. CRP LA SERENA', storage: 'la serena' },
  { code: '14', fn: 'CRPtemuco', liId: 'temuco', buttonId: 'btemuco', checkboxId: 'ctemuco', title: '14. CRP TEMUCO', storage: 'temuco' },
  { code: '15', fn: 'CRPconcepcion', liId: 'concepcion', buttonId: 'bconcepcion', checkboxId: 'cconcepcion', title: '15. CRP CONCEPCIÓN', storage: 'concepcion' },
  { code: '16', fn: 'CRPtalca', liId: 'talca', buttonId: 'btalca', checkboxId: 'ctalca', title: '16. CRP TALCA', storage: 'talca' },
  { code: '17', fn: 'CRPrancagua', liId: 'rancagua', buttonId: 'brancagua', checkboxId: 'crancagua', title: '17. CRP RANCAGUA', storage: 'rancagua' },
  { code: '18', fn: 'CRPcopiapo', liId: 'copiapo', buttonId: 'bcopiapo', checkboxId: 'ccopiapo', title: '18. CRP COPIAPÓ', storage: 'copiapo' },
  { code: '19', fn: 'CRPantofagasta', liId: 'antofagasta', buttonId: 'bantofagasta', checkboxId: 'cantofagasta', title: '19. CRP ANTOFAGASTA', storage: 'antofagasta' },
  { code: '22', fn: 'CRPosorno', liId: 'osorno', buttonId: 'bosorno', checkboxId: 'cosorno', title: '22. CRP OSORNO', storage: 'osorno' },
  { code: '24', fn: 'CRPcardenalcaro', liId: 'cardenalcaro', buttonId: 'bcardenalcaro', checkboxId: 'ccardenalcaro', title: '24. CRP CARDENAL CARO', storage: 'cardenal caro' },
  { code: '31', fn: 'CRPmaipu', liId: 'maipu', buttonId: 'bmaipu', checkboxId: 'cmaipu', title: '31. CRP MAIPU', storage: 'maipu' },
  { code: '32', fn: 'CRPcurico', liId: 'curico', buttonId: 'bcurico', checkboxId: 'ccurico', title: '32. CRP CURICÓ', storage: 'curico' },
  { code: '40', fn: 'CRPvaldivia', liId: 'valdivia', buttonId: 'bvaldivia', checkboxId: 'cvaldivia', title: '40. CRP VALDIVIA', storage: 'valdivia' },
  { code: '43', fn: 'CRPlosandes', liId: 'losandes', buttonId: 'blosandes', checkboxId: 'closandes', title: '43. CRP LOS ANDES', storage: 'los andes' },
  { code: '45', fn: 'CRPpuertomontt', liId: 'puertomontt', buttonId: 'bpuertomontt', checkboxId: 'cpuertomontt', title: '45. CRP PUERTO MONTT', storage: 'puerto montt' },
  { code: '51', fn: 'CRPsanfernando', liId: 'sanfernando', buttonId: 'bsanfernando', checkboxId: 'csanfernando', title: '51. CRP SAN FERNANDO', storage: 'san fernando' },
  { code: '52', fn: 'CRPquilpoe', liId: 'quilpoe', buttonId: 'bquilpoe', checkboxId: 'cquilpoe', title: '52. CRP QUILPOÉ', storage: 'quilpoe' },
  { code: '53', fn: 'CRPlinares', liId: 'linares', buttonId: 'blinares', checkboxId: 'clinares', title: '53. CRP LINARES', storage: 'linares' },
  { code: '55', fn: 'CRPpuntaarenas', liId: 'puntaarenas', buttonId: 'bpuntaarenas', checkboxId: 'cpuntaarenas', title: '55. CRP PUNTA ARENAS', storage: 'punta arenas' },
  { code: '56', fn: 'CRPsanantonio', liId: 'sanantonio', buttonId: 'bsanantonio', checkboxId: 'csanantonio', title: '56. CRP SAN ANTONIO', storage: 'san antonio' },
  { code: '57', fn: 'CRPlosangeles', liId: 'losangeles', buttonId: 'blosangeles', checkboxId: 'closangeles', title: '57. CRP LOS ANGELES', storage: 'los angeles' },
  { code: '58', fn: 'CRPcalama', liId: 'calama', buttonId: 'bcalama', checkboxId: 'ccalama', title: '58. CRP CALAMA', storage: 'calama' },
  { code: '62', fn: 'CRPchillan', liId: 'chillan', buttonId: 'bchillan', checkboxId: 'cchillan', title: '62. CRP CHILLAN', storage: 'chillan' },
  { code: '64', fn: 'CRPhuerfanos', liId: 'huerfanos', buttonId: 'bhuerfanos', checkboxId: 'chuerfanos', title: '64. CRP HUERFANOS', storage: 'huerfanos' },
  { code: '68', fn: 'CRPovalle', liId: 'ovalle', buttonId: 'bovalle', checkboxId: 'covalle', title: '68. CRP OVALLE', storage: 'ovalle' },
  { code: '72', fn: 'CRPquillota', liId: 'quillota', buttonId: 'bquillota', checkboxId: 'cquillota', title: '72. CRP QUILLOTA', storage: 'quillota' },
  { code: '76', fn: 'CRPmiraflores', liId: 'miraflores', buttonId: 'bmiraflores', checkboxId: 'cmiraflores', title: '76. CRP MIRAFLORES', storage: 'miraflores' },
  { code: '79', fn: 'CRPcastro', liId: 'castro', buttonId: 'bcastro', checkboxId: 'ccastro', title: '79. CRP CASTRO', storage: 'castro' },
  { code: '80', fn: 'CRPvallenar', liId: 'vallenar', buttonId: 'bvallenar', checkboxId: 'cvallenar', title: '80. CRP VALLENAR', storage: 'vallenar' }
];

const state = {
  cantE: 0,
  cantEP: 0,
  cantNE: CRP_CONFIG.length,
  clickedButtons: new Set()
};

const $ = (selector) => document.querySelector(selector);

const els = {
  cantidadEJ: $('#cantidadEJ'),
  cantidadEP: $('#cantidadEP'),
  cantidadNE: $('#cantidadNE'),
  crpGuardados: $('#crpguardados'),
  btnRecuperar: $('#crpalmacenados'),
  btnReset: $('#clearStorage')
};

function noEjecutadoText(cfg) {
  return `${cfg.title} - NO EJECUTADO`;
}

function ejecutadoText(cfg) {
  return `${cfg.title} - EJECUTADO`;
}

function renderCounters() {
  els.cantidadEJ.textContent = state.cantE;
  els.cantidadEP.textContent = state.cantEP;
  els.cantidadNE.textContent = state.cantNE;
}

function updatePendingCountFromDOM() {
  state.cantEP = CRP_CONFIG.reduce((acc, cfg) => {
    const checkbox = document.getElementById(cfg.checkboxId);
    return acc + (checkbox && checkbox.checked ? 1 : 0);
  }, 0);
  renderCounters();
}

function marcarEjecutado(cfg, buttonToken) {
  const clickKey = buttonToken || `boton${parseInt(cfg.code, 10)}`;
  if (state.clickedButtons.has(clickKey)) return;

  const li = document.getElementById(cfg.liId);
  const button = document.getElementById(cfg.buttonId);

  if (li) li.textContent = ejecutadoText(cfg);
  if (li) li.classList.add('liOn');
  if (button) button.classList.add('botonOn');

  state.clickedButtons.add(clickKey);
  state.cantE += 1;
  state.cantNE -= 1;
  renderCounters();

  localStorage.setItem(cfg.code, `crp ${cfg.storage}`);
}

function bindCrpActions() {
  CRP_CONFIG.forEach((cfg) => {
    window[cfg.fn] = (_mensaje, buttonId) => marcarEjecutado(cfg, buttonId);

    const checkbox = document.getElementById(cfg.checkboxId);
    const li = document.getElementById(cfg.liId);

    if (!checkbox || !li) return;

    checkbox.addEventListener('change', () => {
      li.textContent = checkbox.checked ? 'EN ESPERA' : ejecutadoText(cfg);
      updatePendingCountFromDOM();
    });
  });
}

function recuperarCrpOrdenado() {
  const crps = [];

  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    const numericKey = parseInt(key, 10);
    if (Number.isNaN(numericKey)) continue;
    crps.push({ key: numericKey, value: localStorage.getItem(key) });
  }

  crps.sort((a, b) => a.key - b.key);

  els.crpGuardados.innerHTML =
    crps.length > 0
      ? crps.map((item) => `${item.key}: ${item.value}`).join('<br>')
      : 'RECUPERACIÓN DE CRPS NO EJECUTADA';
}

function limpiarStorageCRP() {
  if (!confirm('¿Estás seguro de que deseas eliminar toda la información de los CRP en esta sesión?')) return;

  localStorage.clear();
  alert('Toda la información de los CRP en esta aplicación ha sido restaurada');

  state.cantE = 0;
  state.cantEP = 0;
  state.cantNE = CRP_CONFIG.length;
  state.clickedButtons.clear();

  CRP_CONFIG.forEach((cfg) => {
    const li = document.getElementById(cfg.liId);
    const button = document.getElementById(cfg.buttonId);
    const checkbox = document.getElementById(cfg.checkboxId);

    if (li) {
      li.textContent = noEjecutadoText(cfg);
      li.classList.remove('liOn');
    }

    if (button) button.classList.remove('botonOn');
    if (checkbox) checkbox.checked = false;
  });

  els.crpGuardados.textContent = 'RECUPERACIÓN DE CRPS NO EJECUTADA';
  renderCounters();
}

function initCronometro() {
  let horas = 0;
  let minutos = 0;
  let segundos = 0;
  let intervalo = null;
  let pausado = false;

  const tiempo = $('#tiempo');
  const btnIniciar = $('#iniciar');
  const btnPausar = $('#pausar');
  const btnDetener = $('#detener');

  const formatearTiempo = (h, m, s) =>
    `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

  const actualizarTiempo = () => {
    segundos += 1;
    if (segundos === 60) {
      segundos = 0;
      minutos += 1;
    }
    if (minutos === 60) {
      minutos = 0;
      horas += 1;
    }
    tiempo.textContent = formatearTiempo(horas, minutos, segundos);
  };

  btnIniciar.addEventListener('click', () => {
    if (intervalo) return;
    intervalo = setInterval(actualizarTiempo, 1000);
    pausado = false;
    btnPausar.disabled = false;
    btnDetener.disabled = false;
  });

  btnPausar.addEventListener('click', () => {
    if (!pausado) {
      clearInterval(intervalo);
      intervalo = null;
      pausado = true;
      btnIniciar.textContent = 'Reanudar';
    } else {
      intervalo = setInterval(actualizarTiempo, 1000);
      pausado = false;
      btnIniciar.textContent = 'Iniciar';
    }
  });

  btnDetener.addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = null;
    horas = 0;
    minutos = 0;
    segundos = 0;
    tiempo.textContent = formatearTiempo(horas, minutos, segundos);
    btnIniciar.textContent = 'Iniciar';
    btnPausar.disabled = true;
    btnDetener.disabled = true;
  });
}

function initMensajeAnimado() {
  const texto = '¡ HAZLO SIMPLE HAZLO SERVIPAG !';
  const salida = $('#mensajesvp');
  let pos = 1;
  let timer = null;

  const tick = () => {
    salida.textContent = texto.slice(0, pos);
    if (pos > texto.length) {
      clearInterval(timer);
      setTimeout(() => {
        salida.textContent = '';
        pos = 1;
        timer = setInterval(tick, 100);
      }, 3000);
      return;
    }
    pos += 1;
  };

  timer = setInterval(tick, 100);
}

function init() {
  renderCounters();
  bindCrpActions();
  els.btnRecuperar.addEventListener('click', recuperarCrpOrdenado);
  els.btnReset.addEventListener('click', limpiarStorageCRP);
  initCronometro();
  initMensajeAnimado();
}

init();
