# Guía de Envío en Tiempo Real

Esta aplicación Node.js utiliza Express, Socket.io y Axios para generar guías de envío a través de la API de Envia.com y actualizar un contador en tiempo real para todos los clientes conectados.

## Requisitos Previos

- Node.js (v14+ recomendado)
- Docker y Docker Compose (opcional para contenerización)

## Instalación

1. Clonar el repositorio: `git clone https://github.com/ricardomedina98/shipping-guides-real-time.git`
2. Navegar al directorio del proyecto e instalar dependencias:
    ```bash
    cd your-repository
    npm install
    ```
## Uso
- Ejecutar la aplicación localmente:
    ```bash
    npm start
    ```
- Para usar Docker Compose:
    ```bash
    docker-compose up
    ```
- La aplicación estará disponible en `http://localhost:3000`
