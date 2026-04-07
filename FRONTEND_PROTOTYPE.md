# Orgalancer Frontend - Prototipo Completo

Prototipo funcional del frontend de Orgalancer con React, Vite y componentes reutilizables.

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── Layout.jsx        # Layout principal con Sidebar
│   │   ├── Navbar.jsx        # Barra superior
│   │   ├── Sidebar.jsx       # Menú lateral
│   │   ├── Button.jsx        # Botón personalizable
│   │   ├── Input.jsx         # Input reutilizable
│   │   ├── Modal.jsx         # Modal para formularios
│   │   ├── Table.jsx         # Tabla de datos
│   │   ├── Card.jsx          # Tarjeta de estadísticas
│   │   └── *.css             # Estilos de componentes
│   │
│   ├── pages/                # Páginas de la aplicación
│   │   ├── Dashboard.jsx     # Dashboard principal
│   │   ├── Clients.jsx       # Gestión de clientes
│   │   ├── Projects.jsx      # Gestión de proyectos
│   │   ├── TimeTracking.jsx  # Registro de tiempo
│   │   ├── Income.jsx        # Control de ingresos
│   │   ├── Invoices.jsx      # Gestión de facturas
│   │   └── CRUD.css          # Estilos comunes
│   │
│   ├── services/             # Servicios API
│   │   ├── api.js            # Cliente Axios
│   │   └── index.js          # Funciones API
│   │
│   ├── App.jsx               # Componente principal con rutas
│   ├── App.css               # Estilos globales
│   ├── main.jsx              # Punto de entrada
│   │
│   └── index.html            # HTML principal
│
├── Dockerfile                # Configuración Docker
├── vite.config.js            # Configuración Vite
├── package.json              # Dependencias
└── README.md                 # Este archivo
```

## 🎨 Características del Prototipo

### ✅ Dashboard
- Estadísticas de ingresos, proyectos, horas y clientes
- Proyectos recientes con barra de progreso
- Acciones rápidas para crear datos
- Diseño responsive y moderno

### ✅ Páginas CRUD Completas

#### 👥 Clientes
- Listar clientes en tabla
- Crear nuevo cliente con formulario modal
- Editar información de clientes
- Eliminar clientes

#### 📋 Proyectos
- Gestión completa de proyectos
- Estados (In Progress, Completed, On Hold)
- Tarifa horaria y presupuesto
- CRUD completo

#### ⏱️ Tiempo Trabajado
- Registro de horas por proyecto
- Cálculo automático de horas totales
- Descripción de tareas
- Edición y eliminación de registros

#### 💰 Ingresos
- Registro de ingresos con monto y fecha
- Cálculo automático del total
- Descripción de origen de ingresos
- CRUD funcional

#### 📄 Facturas
- Gestión de facturas por cliente
- Estados (Draft, Pending, Paid)
- Números de factura únicos
- Opción de descarga (mockup)

### ✅ Componentes Reutilizables

- **Button**: Múltiples variantes (primary, secondary, danger, success)
- **Input**: Campos de texto, email, date, etc.
- **Modal**: Formularios dentro de modales
- **Table**: Tablas con acciones
- **Card**: Tarjetas de estadísticas
- **Layout**: Sistema de sidebar + navbar

### ✅ Diseño UI/UX

- Gradiente moderno (Indigo + Rosa)
- Paleta de colores profesional
- Responsive en móviles
- Animaciones suaves
- Iconos emoji para mejor UI
- Estados visuales claros

## 🚀 Cómo Ejecutar

### Con Docker Compose
```bash
cd ..
docker-compose up --build
```

Accede a: http://localhost:5173

### Sin Docker (Desarrollo local)
```bash
npm install
npm run dev
```

## 💾 Datos Mock

El prototipo incluye datos de ejemplo en memoria:
- 3 clientes de prueba
- 3 proyectos activos
- 3 registros de tiempo
- 3 registros de ingresos
- 3 facturas

Todos los datos son locales y se pierden al refrescar la página.

## 🔧 Dependencias Principales

- **React 18.2**: Framework UI
- **React Router 6.20**: Enrutamiento
- **Axios**: Cliente HTTP para API
- **Vite**: Build tool ultrarrápido

## 📚 Componentes Disponibles

### Layout
```jsx
<Layout>
  <YourContent />
</Layout>
```

### Button
```jsx
<Button variant="primary" size="md" onClick={handler}>
  Crear
</Button>
```

### Input
```jsx
<Input
  label="Email"
  type="email"
  placeholder="correo@ejemplo.com"
  value={value}
  onChange={handleChange}
  required
/>
```

### Modal
```jsx
<Modal
  isOpen={isOpen}
  title="Crear Registro"
  onClose={closeHandler}
  onSave={saveHandler}
>
  {/* Form content */}
</Modal>
```

### Table
```jsx
<Table
  columns={[
    { key: 'name', label: 'Nombre' },
    { key: 'email', label: 'Email' }
  ]}
  data={data}
  actions={(row) => <Button>Editar</Button>}
/>
```

### Card
```jsx
<Card
  title="Ingresos"
  value="$5,000"
  icon="💰"
  color="green"
  trend={{ positive: true, text: "+10%" }}
/>
```

## 🎯 Próximos Pasos

1. **Integrar con API Backend**
   - Conectar endpoints en `services/index.js`
   - Reemplazar datos mock con llamadas API

2. **Implementar Autenticación**
   - Login / Logout
   - JWT tokens
   - Protección de rutas

3. **Agregar Validación de Formularios**
   - Validación en cliente
   - Mensajes de error
   - Feedback visual

4. **Mejorar UX**
   - Paginación en tablas
   - Búsqueda y filtros
   - Exportación a PDF/Excel

5. **Asistente Virtual**
   - Componente chat
   - Integración con IA
   - Sugerencias inteligentes

## 🎨 Tema de Colores

- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#ec4899` (Rosa)
- **Success**: `#10b981` (Verde)
- **Danger**: `#ef4444` (Rojo)
- **Warning**: `#f59e0b` (Ámbar)
- **Dark**: `#1f2937` (Gris oscuro)

## 📱 Responsive

El prototipo es totalmente responsive:
- Desktop (1920px+)
- Tablet (768px - 1919px)
- Mobile (< 768px)

## 📝 Licencia

Proyecto educativo - Ingeniería en Informática UBA
