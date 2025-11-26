# Angular RxJS Countries - Explorador de Países

Angular RxJS Countries es una aplicación web que permite buscar y explorar información detallada sobre países de todo el mundo. Está construida usando:

- **Angular 20**
- **RxJS**
- **TypeScript**
- **Tailwind CSS**
- **REST Countries API**

## 👾 Features

- 🔍 **Búsqueda por capital**: Busca países escribiendo el nombre de su capital.
- 📊 **Tabla de resultados**: Visualiza información de países en una tabla interactiva.
- 🌐 **Vista detallada de países**: Accede a información completa de cada país.
- ⚡ **Búsqueda con debounce**: Optimización de búsquedas con RxJS para mejorar el rendimiento.
- 🎨 **Diseño moderno**: Interfaz atractiva con gradientes y animaciones usando Tailwind CSS.
- 🚀 **Single Page Application (SPA)**: Navegación fluida sin recargar la página.
- 📱 **Responsive**: Diseño adaptable a diferentes tamaños de pantalla.

## 📒 Process

Comencé implementando la estructura base de la aplicación con Angular y configurando el routing. Luego, creé el servicio para consumir la API de REST Countries usando HttpClient y RxJS para manejar las peticiones HTTP.

Posteriormente, implementé la funcionalidad de búsqueda por capital con un componente de búsqueda que utiliza debounce para optimizar las peticiones. Después, desarrollé el componente de tabla para mostrar los resultados de manera organizada.

A continuación, agregué la página de detalle de país para mostrar información completa. Finalmente, apliqué estilos con Tailwind CSS, inspirándome en diseños modernos de aplicaciones web, y realicé ajustes de responsive design.

El proyecto demuestra el uso de RxJS para manejo de operadores como `debounceTime`, `catchError`, `map`, y `switchMap`, así como el uso de signals y effects de Angular para gestión reactiva del estado.

**NOTE**: El propósito del proyecto es demostrar el uso de Angular, RxJS y TypeScript en una aplicación real. Utiliza la API pública de REST Countries para obtener datos de países.

## 🚦 Running the Project

Para ejecutar el proyecto en tu entorno local, sigue estos pasos:

1. Clona el repositorio en tu máquina local.

```bash
git clone <repository-url>
cd angular-rxjs-countries
```

2. Ejecuta `npm install` en el directorio del proyecto para instalar las dependencias requeridas.

```bash
npm install
```

3. Ejecuta `npm start` o `ng serve` para iniciar el servidor de desarrollo.

```bash
npm start
# o
ng serve
```

4. Abre `http://localhost:4200` (o la dirección que se muestre en tu consola) en tu navegador web para ver la aplicación.

## 📹 Preview


