⚽ Predictor de Partidos de Fútbol
📋 Descripción del Proyecto
Sistema de predicción de resultados de partidos de fútbol utilizando Machine Learning. El proyecto combina un modelo de predicción entrenado con datos históricos, una API REST para servir las predicciones, y una interfaz web interactiva para los usuarios.
🎯 Objetivo
Predecir resultados de partidos de fútbol (victoria local, empate, victoria visitante) basándose en datos históricos de equipos, estadísticas de jugadores, forma reciente, y otros factores relevantes.
🏗️ Arquitectura del Proyecto
El proyecto está dividido en tres módulos independientes:
1. ML Training (Python)

Entrenamiento y evaluación de modelos de Machine Learning
Análisis exploratorio de datos
Generación de modelos entrenados (.pkl)
Notebooks de Jupyter para experimentación

2. Backend (Node.js + Express)

API REST para servir predicciones
Integración con modelos ML mediante Python
Gestión de datos de equipos y partidos
Endpoints para consultas históricas

3. Frontend (React + Vite)

Interfaz web interactiva
Formularios para seleccionar equipos y partidos
Visualización de predicciones y estadísticas
Dashboard de resultados históricos

📁 Estructura General del Proyecto
ProyectoPredictorPartidos/
│
├── README.md                    ← Este archivo
├── GUIA_DESARROLLO.md           ← Guía de comandos y setup
├── .gitignore                   ← Archivos ignorados por Git
│
├── ml-training/                 ← Proyecto Python (ML)
│   ├── pyproject.toml          ← Configuración UV
│   ├── .venv/                  ← Entorno virtual (no en Git)
│   ├── notebooks/              ← Jupyter notebooks
│   ├── data/                   ← Datasets
│   ├── models/                 ← Modelos entrenados
│   └── src/                    ← Scripts de entrenamiento
│
├── backend/                     ← Proyecto Node.js (API)
│   ├── package.json            ← Dependencias Node
│   ├── .env                    ← Variables de entorno (no en Git)
│   ├── node_modules/           ← Dependencias (no en Git)
│   ├── src/
│   │   ├── index.js           ← Servidor principal
│   │   ├── routes/            ← Rutas de la API
│   │   ├── controllers/       ← Lógica de negocio
│   │   ├── models/            ← Modelos de datos
│   │   └── python/            ← Scripts Python para predicciones
│   └── tests/                  ← Tests unitarios
│
└── frontend/                    ← Proyecto React (UI)
    ├── package.json            ← Dependencias Node
    ├── node_modules/           ← Dependencias (no en Git)
    ├── index.html              ← HTML principal
    ├── vite.config.js          ← Configuración Vite
    ├── public/                 ← Archivos estáticos
    └── src/
        ├── App.jsx            ← Componente principal
        ├── components/        ← Componentes React
        ├── services/          ← Llamadas a la API
        └── styles/            ← Estilos CSS
🛠️ Tecnologías Utilizadas
Machine Learning

Python 3.11+
UV - Gestor de paquetes Python moderno
Pandas - Manipulación de datos
Scikit-learn - Modelos de ML
Jupyter - Notebooks interactivos
Matplotlib/Seaborn - Visualización de datos

Backend

Node.js 18+
Express - Framework web
CORS - Manejo de peticiones cross-origin
dotenv - Variables de entorno
child_process - Ejecución de scripts Python

Frontend

React 18 - Librería UI
Vite - Build tool y dev server
Axios - Cliente HTTP
Tailwind CSS - Estilos (opcional)
Recharts - Gráficos y visualizaciones

🚀 Flujo de Trabajo

Entrenamiento del Modelo (ml-training)

Recolectar y limpiar datos históricos
Entrenar modelos de clasificación
Evaluar y seleccionar el mejor modelo
Exportar modelo entrenado


API de Predicción (backend)

Cargar modelo entrenado
Recibir datos del partido a predecir
Ejecutar predicción
Devolver resultado con probabilidades


Interfaz de Usuario (frontend)

Usuario selecciona equipos y parámetros
Enviar petición al backend
Mostrar predicción y estadísticas
Visualizar datos históricos



📊 Datos del Proyecto
Entrada del Modelo

Estadísticas de equipos (goles, victorias, derrotas)
Forma reciente (últimos 5-10 partidos)
Enfrentamientos directos históricos
Localía (local/visitante)
Lesiones y suspensiones (opcional)

Salida del Modelo

Probabilidad de victoria local
Probabilidad de empate
Probabilidad de victoria visitante
Predicción final (clase más probable)

👥 Contribución
Para contribuir al proyecto:

Clonar el repositorio
Crear una rama para tu feature: git checkout -b feature/nueva-funcionalidad
Hacer commits descriptivos: git commit -m "feat: descripción"
Push a la rama: git push origin feature/nueva-funcionalidad
Crear un Pull Request

📝 Convenciones de Commits

feat: Nueva funcionalidad
fix: Corrección de bugs
docs: Cambios en documentación
style: Cambios de formato (no afectan código)
refactor: Refactorización de código
test: Añadir o modificar tests
chore: Tareas de mantenimiento

📄 Licencia
[Definir licencia del proyecto]
📧 Contacto
[Información de contacto del equipo]

Versión: 1.0.0
Última actualización: Noviembre 2025