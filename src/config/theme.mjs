/* ============================================================
   TEMA DEL SITIO — única fuente de marca (MK MEDIA DIGITAL)
   ------------------------------------------------------------
   Valores tomados del "Manual de identidad-MK MEDIA DIGITAL.pdf":
     · 5.1 Principales sólidos → #623D91 · #123274 · #009CDD · #000000
     · 4.1 Tipografía corporativa → Montserrat Bold (titulares)
     · 4.2 Tipografía secundaria  → Poppins Regular (cuerpo)
     · 6.1 Imagotipo / 6.2 Ícono  → /public/logos/
   Esto es LO ÚNICO que cambias al crear un sitio nuevo:
   colores, tipografías y logo. No toques el markup ni global.css.
   ============================================================ */

// --- Colores (hex). Las claves son los nombres de clase Tailwind:
//     bg-primary, text-on-surface, bg-surface-container-high, etc.
export const colors = {
  surface:                    '#ffffff',
  'surface-dim':              '#f7f6fb',
  'surface-container-lowest': '#ffffff',
  'surface-container-low':    '#f7f6fb',
  'surface-container':        '#f3f0f9',
  'surface-container-high':   '#ede7f5',
  'surface-container-highest':'#ddd1ec',
  'on-surface':               '#101b33',
  'on-surface-variant':       '#4a5570',
  outline:                    '#e3e0ec',
  'outline-variant':          '#e3e0ec',
  // Morado corporativo — color principal de la marca
  primary:                    '#623D91',
  'on-primary':               '#ffffff',
  'primary-container':        '#623D91',
  'on-primary-container':     '#ffffff',
  'primary-fixed':            '#ede7f5',
  // Azul marino corporativo — fondos oscuros, footer y textos de alto contraste
  'on-primary-fixed':         '#123274',
  'primary-fixed-dim':        '#ddd1ec',
  // Cian corporativo — acento sobre fondos oscuros
  'inverse-primary':          '#009CDD',
  secondary:                  '#4e3075',
  'on-secondary':             '#ffffff',
  // Acento cian (5.1 del manual) disponible como bg-accent / text-accent
  accent:                     '#009CDD',
  'on-accent':                '#ffffff',
  navy:                       '#123274',
  background:                 '#ffffff',
  'on-background':            '#101b33',
  'body-text':                '#3b4560',
};

// --- Tipografías. Cambia las familias y el enlace de Google Fonts juntos.
//     Montserrat y Poppins son las fuentes del manual; se cargan desde Google
//     Fonts para disponer de todos los pesos. Los archivos originales que
//     entregó la marca están en /public/fonts.
export const fonts = {
  display:    'Montserrat, sans-serif',  // titulares (corporativa, Bold)
  body:       'Poppins, sans-serif',     // cuerpo (secundaria, Regular)
  googleHref: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap',
};

// --- Logo. El imagotipo ya incluye el texto "MEDIA DIGITAL", por lo que
//     cuando `image` tiene ruta el Layout oculta el nombre de marca en texto.
//     Versiones disponibles en /public/logos:
//       logo-color · logo-negro · logo-blanco  (imagotipo, 6.1)
//       icono-color · icono-negro · icono-blanco (ícono, 6.2)
export const logo = {
  image:      '/logos/logo-color.png',   // imagotipo principal (cabecera)
  imageLight: '/logos/logo-blanco.png',  // versión negativo (footer / fondos oscuros)
  icon:       '/logos/icono-color.png',
  alt:        'MK Media Digital',
};
