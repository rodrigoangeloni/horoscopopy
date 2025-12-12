# ✨ Horóscopo Diario Paraguay

Aplicación web moderna de horóscopos diarios para Paraguay, con diseño responsive, animaciones fluidas y funcionalidades completas de astrología.

## 🌟 Características

- **Horóscopos Diarios**: Predicciones personalizadas para los 12 signos zodiacales
- **Sistema de Favoritos**: Guarda tus signos preferidos para acceso rápido
- **Compatibilidad Zodiacal**: Analiza la compatibilidad entre signos
- **Lecturas de Tarot**: Obtén cartas diarias con interpretaciones
- **Diseño Responsive**: Experiencia perfecta en móvil, tablet y desktop
- **Animaciones Fluidas**: Efectos visuales atractivos con estrellas de fondo
- **Modo Oscuro**: Interfaz elegante con tema nocturno
- **API Integration**: Datos en tiempo real desde API externa
- **LocalStorage**: Persistencia de datos locales

## 🚀 Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Animaciones, Grid, Flexbox, Variables CSS
- **JavaScript ES6+** - Lógica de aplicación, Fetch API, LocalStorage
- **Fuentes Locales** - Cinzel, Raleway, Dancing Script (WOFF2 optimizado)
- **Responsive Design** - Mobile-first approach

## 📁 Estructura del Proyecto

```
app-horoscopo/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos completos
├── js/
│   └── app.js              # Lógica JavaScript
├── assets/
│   └── fonts/              # Fuentes locales optimizadas
├── AGENTS.md               # Documentación técnica
├── MEJORAS.md              # Historial de mejoras
└── README.md               # Este archivo
```

## 🛠️ Instalación y Uso

### Requisitos
- Python 3.x (para servidor local) o cualquier servidor web

### Ejecución Local
```bash
# Clonar el repositorio
git clone https://github.com/rodrigoangeloni/app-horoscopo.git
cd app-horoscopo

# Iniciar servidor local
python -m http.server 8000

# Abrir en navegador
# http://localhost:8000
```

### Linting y Calidad
```bash
# Validar HTML
tidy -q -e index.html

# Lint CSS
npx stylelint css/styles.css

# Lint JavaScript
npx eslint js/app.js
```

## 🎨 Características Técnicas

### Optimización de Rendimiento
- Fuentes locales en formato WOFF2 (sin dependencias externas)
- CSS crítico inline para evitar FOUC
- Animaciones optimizadas con CSS transforms
- Lazy loading de contenido

### Accesibilidad
- Estructura semántica HTML5
- Navegación por teclado
- Contraste WCAG AA
- ARIA labels donde es necesario

### Responsive Breakpoints
- **Móvil**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔮 Funcionalidades Detalladas

### Sistema de Horóscopos
- 12 signos zodiacales completos
- Predicciones diarias actualizadas
- Fuentes múltiples (API + datos locales)
- Indicadores de fuente de datos

### Compatibilidad Zodiacal
- Análisis entre cualquier par de signos
- Porcentajes de compatibilidad
- Interpretaciones detalladas
- Interfaz intuitiva de selección

### Sistema de Tarot
- Cartas diarias aleatorias
- Interpretaciones completas
- Diseño visual atractivo
- Animaciones de revelación

### Favoritos y Preferencias
- Guardar signos favoritos
- Persistencia en LocalStorage
- Acceso rápido desde interfaz principal
- Gestión simple de preferencias

## 🌐 API Integration

La aplicación se integra con:
- **Horoscope API**: Datos en tiempo real
- **Fallback local**: Datos predefinidos cuando API no está disponible
- **Manejo de errores**: Gestión robusta de fallos de conexión

## 🎯 Estado del Proyecto

✅ **Completado y Funcional**
- Todas las características implementadas
- Testing completado en múltiples dispositivos
- Optimización de rendimiento aplicada
- Documentación técnica completa

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crear una feature branch
3. Hacer commit de cambios
4. Push al branch
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.

## 👨‍💻 Créditos

**Desarrollado por Rodrigo Angeloni**

- 🌐 [Portfolio](https://rodrigoangeloni.github.io/roandev)
- 💻 [GitHub](https://github.com/rodrigoangeloni)
- 📧 Contacto: rodrigoangeloni@gmail.com

> Hecho con ❤️ para Paraguay desde Asunción

---

**Horóscopo Diario Paraguay** © 2024 - Tu destino en las estrellas ✨