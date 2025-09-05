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
