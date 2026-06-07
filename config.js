/**
 * ─────────────────────────────────────────────
 *   DILO BONITO — ARCHIVO DE CONFIGURACIÓN
 *   Edita solo este archivo para cambiar
 *   colores, textos y tipografía del dossier.
 * ─────────────────────────────────────────────
 */

const DILO_CONFIG = {

  // ── COLORES ──────────────────────────────────
  colores: {
    cream:      '#F5F0E0',  // Fondo general
    deep:       '#1E3A5F',  // Azul marino (secciones oscuras, nav)
    captain:    '#3B6BA5',  // Azul medio (botones, labels)
    baby:       '#A8C8E8',  // Azul cielo (fondos secundarios)
    sunshine:   '#F2C94C',  // Amarillo (destacados, precios, CTAs)
    rose:       '#F0A8A8',  // Rosa (hero, secciones alternadas)
    poppy:      '#E8704A',  // Coral (hover de botones)
    white:      '#FDFCF8',  // Blanco base (tarjetas, nav)
    sand:       '#DDD5C4',  // Arena (bordes, separadores)
    textDark:   '#1E3A5F',  // Texto oscuro
    textMid:    '#3B5A7A',  // Texto medio
    textLight:  '#7A96B0',  // Texto suave (notas, pies)
  },

  // ── TIPOGRAFÍA ───────────────────────────────
  tipografia: {
    titulos:    'League Spartan',  // Títulos principales (h1, h2, packs...)
    subtitulos: 'Lato',           // Subtítulos y labels en negrita
    cuerpo:     'Lato',           // Texto de párrafo y cuerpo
    pesoTitulo: 900,              // 700 | 800 | 900
    pesoSubtit: 700,              // 600 | 700
    pesoCuerpo: 400,              // 300 | 400
  },

  // ── TEXTOS ───────────────────────────────────
  textos: {
    // Hero — versión clientes
    heroTagCliente:       'Personalización en vivo para tu evento',
    heroTituloCliente:    ['HAZ QUE TU', 'EVENTO SEA', 'INOLVIDABLE'],
    heroSubtituloCliente: 'Personalizamos artículos en directo para que cada invitado se lleve un recuerdo único. Bodas, cumpleaños, comuniones, eventos de empresa.',
    heroCTACliente:       'Calcular mi presupuesto →',

    // Hero — versión colaboradores
    heroTagColab:         'El servicio que enamora a tus clientes',
    heroTituloColab:      ['UN SERVICIO', 'QUE MARCA', 'LA DIFERENCIA'],
    heroSubtituloColab:   'Ofrecemos personalización en vivo para tus eventos. Un complemento diferencial que añade valor a tu finca, tu agencia o tu servicio.',
    heroCTAColab:         'Calcular mi presupuesto →',

    // Contacto
    telefono:             '647 444 308',
    emailGeneral:         'contacto@benditolab.com',
    emailColaboradores:   'colaboradores@benditolab.com',
    instagram:            '@dilobonito',
    web:                  'www.benditolab.com',
    zona:                 'Ciudad Real y provincia',
    zonaSub:              'Desplazamiento a toda España · 0,40€/km',
  },

  // ── PRECIOS ──────────────────────────────────
  precios: {
    packs: {
      mini:    299,
      intima:  499,
      clasica: 650,
      premium: 799,
    },
    extras: {
      horaExtra:    150,  // €/hora adicional
      diseno:        80,  // € diseño gráfico personalizado
      regaloInfantil: 8, // €/niño
      moneda:         2,  // €/moneda personalizada
      vinilado:     100,  // € vinilado máquina
      km:          0.40,  // €/km ida y vuelta
    },
    seating: {
      gafas:  { inv30: 399, inv50: 520, inv100: 820, inv150: 1120 },
      basico: { inv30: 350, inv50: 450, inv100: 699, inv150: 930  },
      soloPanel: 200,
    },
    maquinas: {
      expendedoraGratis: 499,
      expendedoraMoneda: 399,
      ganchoGratis:      499,
      ganchoMoneda:      399,
    },
    merch: {
      basico:   350,
      completo: 580,
      premium:  799,
    },
  },

  // ── COMISIONES COLABORADORES ─────────────────
  comisiones: {
    hasta50inv:   0.10,  // 10%
    hasta100inv:  0.12,  // 12%
    hasta150inv:  0.15,  // 15%
    plazoPago:    '1-3 días tras el evento',
  },

};

// ── APLICAR CONFIGURACIÓN ────────────────────
// Este bloque aplica los colores y fuentes automáticamente al cargar
(function aplicarConfig() {
  const root = document.documentElement;
  const c = DILO_CONFIG.colores;
  const t = DILO_CONFIG.tipografia;

  // Aplicar colores
  root.style.setProperty('--cream',      c.cream);
  root.style.setProperty('--deep',       c.deep);
  root.style.setProperty('--captain',    c.captain);
  root.style.setProperty('--baby',       c.baby);
  root.style.setProperty('--sunshine',   c.sunshine);
  root.style.setProperty('--rose',       c.rose);
  root.style.setProperty('--poppy',      c.poppy);
  root.style.setProperty('--white',      c.white);
  root.style.setProperty('--sand',       c.sand);
  root.style.setProperty('--text-dark',  c.textDark);
  root.style.setProperty('--text-mid',   c.textMid);
  root.style.setProperty('--text-light', c.textLight);
  // Aliases
  root.style.setProperty('--black',      c.deep);
  root.style.setProperty('--green',      c.deep);
  root.style.setProperty('--accent',     c.captain);
  root.style.setProperty('--accent-mid', c.captain);
  root.style.setProperty('--red',        c.captain);

  // Cargar fuentes de Google
  const fonts = [...new Set([t.titulos, t.cuerpo])];
  fonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${font.replace(' ', '+')}:wght@300;400;600;700;800;900&display=swap`;
    document.head.appendChild(link);
  });

  console.log('✅ Dilo Bonito config aplicada correctamente');
})();
