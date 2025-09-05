# clientes-frontend

## 📋 **README.md para FRONTEND (Angular)**


# 🎨 Clientes Frontend - Angular 18

Aplicación frontend desarrollada en Angular 18 para consumo de la API de gestión de clientes.

## 📦 Tecnologías Utilizadas

- **Angular 18**
- **Angular Material 18**
- **TypeScript 5.5**
- **RxJS 7.8**
- **CSS3**

## 🎨 Características

- ✅ Búsqueda de clientes por identificación
- ✅ Interfaz responsive con Angular Material
- ✅ Manejo de estados (loading, error, éxito)
- ✅ Auto-limpieza después de 5 segundos
- ✅ Notificaciones SnackBar
- ✅ Diseño moderno con tema Azure/Blue

## 🏗️ Estructura del Proyecto
src/
├── app/
│ ├── components/
│ │ ├── cliente-search/ # Componente búsqueda
│ │ └── cliente-details/ # Componente detalles
│ ├── services/
│ │ └── cliente.service.ts # Servicio API
│ ├── interfaces/
│ │ └── cliente.interface.ts
│ ├── app.component.ts
│ └── app.config.ts


## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js 18+
- Angular CLI 18+
- API Backend ejecutándose

### Pasos:
1. **Clonar repositorio**   
   git clone https://github.com/edrigolu/clientes-frontend.git
   
   cd clientes-frontend
   
2. Instalar dependencias

   npm install

3. Configurar API URL en src/app/services/cliente.service.ts
   
typescript

private apiUrl = 'https://localhost:7277/api/clientes';

4. Ejecutar aplicacion
   ng serve --o

5. Abrir navegador
   
http://localhost:4200

🎯 Funcionalidades
Búsqueda de Clientes

Campo de búsqueda por identificación

Validación de entrada

Spinner de carga durante peticiones

Manejo de errores (404 Not Found)


