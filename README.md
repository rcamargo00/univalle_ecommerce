## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (gestor de paquetes de Node.js)
- [MongoDB](https://www.mongodb.com/) (base de datos NoSQL)

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1. **Clona el repositorio:**

    ```bash
    git clone https://github.com/Joel30/univalle_ecommerce.git
    cd backen-ecommerce
    ```

2. **Instala las dependencias:**

    ```bash
    npm install
    ```

3. **Configura las variables de entorno:**

    - Crea un archivo `.env` en la raíz del proyecto.
    - Copia el contenido del archivo `.env.example` proporcionado en el repositorio.
    - Reemplaza los valores de las variables según tu configuración local. Por ejemplo:

    ```env
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/ecommerce
    JWT_SECRET=tu_clave_secreta
    JWT_REFRESH_SECRET=your_jwt_refresh_secret
    DB_TYPE=mongodb
    ```

4. **Inicia el servidor:**

    ```bash
    npm start
    ```

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework web para Node.js.
- **MongoDB**: Base de datos NoSQL para almacenar la información de la aplicación.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB y Node.js.
- **JWT (JSON Web Tokens)**: Para la autenticación y autorización de usuarios.
- **dotenv**: Para manejar variables de entorno.
