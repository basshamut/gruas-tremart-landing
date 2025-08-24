# Grúas Tre-Mart C.A. - Landing Page

Una página de aterrizaje moderna y responsiva para Grúas Tre-Mart C.A., empresa especializada en servicios de asistencia en carretera 24/7 en Venezuela.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Disponibilidad 24/7**: Servicios de grúas y asistencia vial las 24 horas
- **Cobertura Nacional**: Servicio en todo el territorio venezolano
- **Formulario de Contacto**: Sistema de contacto integrado con validación
- **SEO Optimizado**: Estructura semántica y optimización para motores de búsqueda
- **Rendimiento**: Carga rápida y optimización de imágenes

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build/)** - Framework de desarrollo web moderno
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utilitario
- **[Astro Icon](https://github.com/natemoo-re/astro-icon)** - Sistema de iconos con Lucide
- **[Resend](https://resend.com/)** - Servicio de envío de emails
- **TypeScript** - Tipado estático para JavaScript

## 📋 Servicios Ofrecidos

### Servicios Principales
- **Servicio de Grúa**: Transporte de vehículos averiados o accidentados
- **Asistencia en Carretera**: Reparaciones in situ, cambio de neumáticos, batería descargada
- **Rescates y Maniobras**: Rescate en zonas de difícil acceso
- **Hospedaje de Vehículos**: Resguardo en instalaciones seguras
- **Acompañamiento Vial**: Asistencia en caso de accidente o avería

### Capacidad de Atención
- **Peso 1**: Particulares y pickup hasta 2500kg
- **Peso 2**: Carga de 2501 hasta 5000kg
- **Peso 3**: Carga de 5001 hasta 7500kg
- **Peso 4**: Más de 7501kg

### Ubicaciones de Servicio
- **Caracas**: Tazón, La Bandera, Cátia, El Cafetal
- **La Guaira**: Domo José María Vargas
- **Charallave**: FARMATODO de Charallave
- **Otras**: Pardillal, Yaritagua, Guárico, Valencia, Maracay, Barinas, Mérida, Maracaibo, Barcelona, Puerto La Cruz

## 🏢 Aliados Comerciales

- Seguros Caracas
- Servicios Gato Motor, C.A.
- Servicios VENEASISTENCIA C.A.
- Mapfre Asistencia

## 🚀 Instalación y Configuración

### Requisitos Previos
- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

1. **Clonar el repositorio**
```bash
git clone [URL_DEL_REPOSITORIO]
cd gruas-tremart-landing
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
Crear un archivo `.env` en la raíz del proyecto:
```env
RESEND_API_KEY=tu_api_key_de_resend
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

5. **Construir para producción**
```bash
npm run build
```

6. **Previsualizar build**
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
/
├── public/                 # Archivos estáticos
│   ├── favicon.svg
│   ├── grua_servicio_via.png
│   ├── grua_servicio.png
│   └── logos/              # Logos de aliados comerciales
├── src/
│   ├── api/
│   │   └── sendEmail.js    # API endpoint para envío de emails
│   ├── components/         # Componentes reutilizables
│   │   ├── ContactForm.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ServiceCard.astro
│   │   └── TestimonialCard.astro
│   ├── layouts/
│   │   └── Layout.astro    # Layout principal
│   ├── pages/
│   │   └── index.astro     # Página principal
│   └── styles/
│       └── global.css      # Estilos globales
├── astro.config.mjs        # Configuración de Astro
├── tailwind.config.cjs     # Configuración de Tailwind
└── package.json
```

## 🎨 Componentes Principales

### `ContactForm.astro`
Formulario de contacto con validación y envío por email.

### `ServiceCard.astro`
Tarjeta reutilizable para mostrar servicios ofrecidos.

### `TestimonialCard.astro`
Componente para mostrar testimonios de clientes.

### `Header.astro` y `Footer.astro`
Navegación y pie de página con información de contacto.

## 📱 Secciones de la Página

1. **Hero Section**: Presentación principal con llamada a la acción
2. **Servicios**: Detalle de todos los servicios ofrecidos
3. **Sobre Nosotros**: Información de la empresa y experiencia
4. **¿Por qué elegirnos?**: Ventajas competitivas
5. **Aliados Comerciales**: Logos y información de partners
6. **Testimonios**: Reseñas de clientes satisfechos
7. **Contacto**: Formulario y información de contacto

## 📞 Información de Contacto

- **Teléfonos**: +58 4241361672 / +58 4120163228
- **Disponibilidad**: 24/7, 365 días al año
- **Cobertura**: Nacional (Venezuela)

## 🚀 Despliegue

El proyecto está configurado para despliegue estático y es compatible con:
- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **Servidor web tradicional**

### Despliegue en Vercel

1. Conectar repositorio con Vercel
2. Configurar variables de entorno en el dashboard
3. El despliegue se realizará automáticamente

## 🔧 Personalización

### Colores
Los colores principales se definen en `tailwind.config.cjs` y pueden modificarse según las necesidades de la marca.

### Contenido
Todo el contenido está en español y puede editarse directamente en los archivos `.astro`.

### Imágenes
Las imágenes se encuentran en la carpeta `public/` y están optimizadas para web.

## 📈 SEO y Rendimiento

- **Lighthouse Score**: Optimizado para obtener puntuaciones altas
- **Meta Tags**: Configurados para SEO
- **Images**: Optimización automática de imágenes con Astro
- **Lazy Loading**: Carga diferida de imágenes
- **Mobile First**: Diseño móvil prioritario

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para la feature (`git checkout -b feature/AmazingFeature`)
3. Commit los cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto es privado y pertenece a Grúas Tre-Mart C.A.

## 📧 Soporte

Para soporte técnico o consultas sobre el sitio web, contactar a través de los canales oficiales de Grúas Tre-Mart C.A.

---

**Grúas Tre-Mart C.A.** - Más de 18 años de experiencia en asistencia vial 🚛
