# Orgalancer - Infraestructura Dockerizada

Plataforma para freelancers con asistente virtual, construida con **Python FastAPI**, **React** y **Docker**.

## 📦 Stack Tecnológico

- **Backend**: Python 3.11 + FastAPI
- **Frontend**: React 18 + Vite
- **Base de Datos**: PostgreSQL 15
- **Contenedorización**: Docker + Docker Compose

## 🚀 Inicio Rápido

### Requisitos Previos

- Docker y Docker Compose instalados
- Git

### Pasos para Ejecutar

1. **Clonar/Acceder al repositorio**
```bash
cd ruta/del/proyecto
```

2. **Crear archivo .env** (ya está incluido, pero puedes personalizarlo)
```bash
cp .env.example .env
```

3. **Iniciar los contenedores**
```bash
docker-compose up --build
```

4. **Acceder a la aplicación**
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **API Docs (Swagger)**: http://localhost:8000/docs

## 📁 Estructura del Proyecto

```
.
├── backend/
│   ├── app/
│   │   ├── main.py           # Punto de entrada FastAPI
│   │   ├── database.py       # Configuración de base de datos
│   │   ├── models/           # Modelos ORM (SQLAlchemy)
│   │   ├── schemas/          # Esquemas Pydantic
│   │   └── routes/           # Rutas API
│   ├── requirements.txt      # Dependencias Python
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/       # Componentes React
│   │   ├── pages/            # Páginas
│   │   ├── services/         # Servicios API
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json          # Dependencias Node
│   ├── vite.config.js        # Configuración Vite
│   └── Dockerfile
├── docker-compose.yml        # Orquestación de contenedores
├── .env                      # Variables de entorno
└── README.md
```

## 🔧 Comandos Docker

```bash
# Construir y ejecutar
docker-compose up --build

# Ejecutar en background
docker-compose up -d

# Detener contenedores
docker-compose down

# Ver logs
docker-compose logs backend      # Backend
docker-compose logs frontend     # Frontend
docker-compose logs db           # Base de datos

# Acceder a shell del contenedor
docker-compose exec backend bash
docker-compose exec frontend sh
```

## 📊 Modelos de Base de Datos

- **Client**: Información de clientes (email, empresa, teléfono)
- **Project**: Proyectos con cliente, estado, tarifa, presupuesto
- **TimeEntry**: Registro de horas trabajadas por proyecto
- **Income**: Registros de ingresos
- **Invoice**: Facturas generadas

## 🤖 Características Principales

### Gestión de Datos
- ✅ CRUD de clientes
- ✅ Administración de proyectos
- ✅ Seguimiento de tiempo
- ✅ Control de ingresos
- ✅ Generación de facturas

### Asistente Virtual (Por Implementar)
- 📊 Generación automática de presupuestos
- 💡 Cálculo de tarifa horaria ideal
- 🤖 Automatización de tareas administrativas

## 📚 Endpoints API Disponibles

```
GET  /api/health                 # Estado del API
GET  /api/clients                # Listar clientes
POST /api/clients                # Crear cliente
GET  /api/projects               # Listar proyectos
POST /api/projects               # Crear proyecto
GET  /api/incomes                # Listar ingresos
POST /api/incomes                # Crear ingreso
GET  /api/invoices               # Listar facturas
POST /api/invoices               # Crear factura
```

## 🔐 Variables de Entorno

Ver [.env.example](.env.example) para todas las variables disponibles:

```
DB_USER=orgalancer_user
DB_PASSWORD=orgalancer_password_123
DB_NAME=orgalancer_db
ENVIRONMENT=development
```

## 💡 Próximos Pasos

1. Implementar rutas API completas
2. Agregar autenticación JWT
3. Desarrollar funcionalidades del asistente virtual
4. Crear UI completa en React
5. Agregar tests unitarios e integración
6. Configurar CI/CD

## 👥 Equipo

Proyecto de **Ingeniería en Informática - UBA**

| Legajo | Nombre |
|--------|--------|
| 111891 | Sofia Encina |
| 112184 | Brenda Barletta |
| 112216 | Sofia Belen Rivas |
| 104498 | Franco Martín Almada |
| 111098 | Thomas Cabovianco |
| 110641 | Candela Matelica |

## 📝 Licencia

Este proyecto es parte de la materia Gestión de Desarrollo de Sistemas Informáticos.
