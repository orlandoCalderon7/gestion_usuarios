# Sistema de Gestión de Usuarios - Angular

Este proyecto es una aplicación web desarrollada con Angular 17 para la gestión administrativa de usuarios. Se ha diseñado siguiendo una arquitectura modular y aplicando principios de Lazy Loading para optimizar el rendimiento y la escalabilidad.

## Tecnologías Utilizadas

Framework: Angular v17.3.17
Entorno de ejecución: Node.js v22.19.0
Gestor de paquetes: npm v11.13.0
Lenguaje: TypeScript & HTML/CSS

## Ejecución del Proyecto

Para visualizar la aplicación en un entorno de desarrollo:
Clonar o descargar el proyecto.
Instalar dependencias: npm install
Iniciar el servidor: ng serve
Abrir en el navegador: `http://localhost:4200/`


## Estructura del proyecto

# Creación del Proyecto y Módulos

La aplicación se organiza en módulos de características para mantener una separación clara de responsabilidades:
AppModule: Módulo raíz que gestiona el enrutamiento principal.
UsuariosModule: Encargado de la lógica de negocio de usuarios (Lista y Registro).
AdminModule: Contiene el panel de control (Dashboard).

# Generación de Componentes

Se crearon componentes específicos para cada funcionalidad:
ListaUsuariosComponent: Visualización de datos en tablas.
FormularioUsuariosComponent: Captura de nuevos registros.
DashboardComponent: Vista administrativa general.

# Configuración de Lazy Loading

Para mejorar la carga inicial, se implementó carga perezosa en app-routing.module.ts:

## Solución de Desafios Técnicos 

# Compatibilidad de Caracteres (@)

 Se implementaron entidades HTML (&#64;) para evitar errores de compilación con el nuevo motor de control de flujo de Angular 17.

# Comunicación entre Componentes

Se configuraron exports en los módulos para permitir la integración del formulario dentro de la vista de lista.

## Build

Ejecuta `ng build` para compilar el proyecto. Los archivos de compilación se alamacenarán en el directorio `dist/`.

## Ejecucuión de Pruebas Unitarias

Ejecuta `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

