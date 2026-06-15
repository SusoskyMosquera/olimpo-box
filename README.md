# Olimpo Box

Sitio web institucional de **Olimpo Box** — CrossFit, entrenamiento funcional y
calistenia en Villavicencio, Meta.

Sitio 100% estático (SSG), desplegado en la capa gratuita de Vercel. Conversión
directa a WhatsApp, sin bases de datos ni formularios.

## Stack

- **Astro** (Static Site Generation)
- **Tailwind CSS v4** (vía PostCSS)
- **TypeScript** (modo strict)

## Arquitectura

Los datos están desacoplados de las vistas:

```text
src/
├── components/      # Secciones y átomos de UI reutilizables
│   └── ui/          # Section, WhatsAppButton, Icon, SocialLinks
├── content/team/    # Colección de Astro (entrenadores)
├── data/            # Datos tipados: site, services, pricing, schedule,
│                    #   benefits, events, navigation, steps, gallery
├── layouts/         # Layout global (SEO, fuentes, Open Graph)
├── pages/           # index.astro + 404.astro
├── styles/          # global.css (tokens de marca)
└── utils/           # whatsapp, format
```

## Comandos

| Comando           | Acción                                    |
| ----------------- | ----------------------------------------- |
| `npm install`     | Instala dependencias                      |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`|
| `npm run build`   | Compila el sitio a `./dist/`              |
| `npm run preview` | Previsualiza el build local               |

## Mantenimiento

Para actualizar precios, horarios, equipo o eventos, editá los archivos en
`src/data/` o `src/content/`. No hace falta tocar el HTML.
