# Preguntas sobre React, Next.js y GitHub

---

### 1. ¿Qué ventajas tiene usar React frente a trabajar solo con JavaScript puro para interfaces web?
- **Componentización**: React permite dividir la UI en componentes reutilizables.
- **Actualización eficiente**: Gracias al Virtual DOM, React actualiza solo lo necesario.
- **Mantenimiento más fácil**: El código es más ordenado y escalable.

Es muy util al poder reutilizar componentes, realmente concentra todo, lo centraliza y solo es invocarlos para usarlos, bastante util.

---

### 2. ¿Qué beneficios ofrece Next.js al trabajar sobre React?
- **Ruteo automático**: cada archivo en `/app` o `/pages` es una ruta.
- **Optimización automática**: imágenes, fuentes, bundling y caching incluidos.
- **Mejor SEO**: renderizado en servidor mejora la indexación.
- **Fullstack**: puedes crear APIs dentro del mismo proyecto.
- **Deploy sencillo**: integración directa con Vercel.  

Ofrece realmente muchos beneficios al centralizar todo en un mismo "archivo", al poder trabajar con el frontend y el backend a la vez facilita todo bastante. 
Aunque un defecto que vi es que realmente parece un sancocho, y todo esta revuelto lo cual al momento de trabajarlo me llego a confundir mucho, peor aun cuando empece a implementar a tailwind

---

### 3. ¿Qué significa que Next.js tenga un App Router y por qué se recomienda usarlo?

Segun lo que investigue:

- El App Router organiza rutas desde la carpeta `/app`.
- Usa React Server Components por defecto.
- Facilita:
  - Layouts anidados.
  - Estados de carga (`loading.js`).
  - Manejo de errores (`error.js`).
  - Data fetching con `async/await`.
- Es el futuro estándar de Next.js y mejora rendimiento y organización.  

---

### 4. ¿Qué diferencia hay entre client components y server components en Next.js?
- **Server Components**:
  - Renderizados en el servidor.
  - No incluyen JS extra en el navegador.
  - Ideales para datos estáticos o consultas a APIs.
- **Client Components** (con `"use client"`):
  - Renderizados en el navegador.
  - Necesarios para interactividad (`useState`, `useEffect`, eventos).
  - Envían más JS al cliente.   

---

### 5. ¿Por qué se usan repositorios públicos o privados en GitHub en lugar de solo carpetas locales?
Git es muy famoso y utilizado no solo en el hambito de la programacion, por lo que tengo entendido.
Esta herramienta ayuda ayuda a controlar las versiones y las ramificaciones que puede tener un proyecto, gracias a esto podemos volver atrás en el tiempo y si hubo algun error restaurarse en ese punto del proyecto.
Tambien permite el trabajo colaborativo, al permitir a varios programadores trabajando en conjunto, y subir sus avances.
El codigo no se pierde, facilita el despliegue y el testing.
Y estes mismo nos puede servir de portafolio, al dar en evidencia nuestros proyectos personales y demas.

- GitHub aporta profesionalismo, seguridad y trabajo en equipo, mientras que las carpetas locales son frágiles y limitadas.
