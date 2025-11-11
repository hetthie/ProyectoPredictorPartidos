 Configuración Inicial (Primera vez)
Prerrequisitos
Antes de empezar, asegúrate de tener instalado:
1. Node.js (v18 o superior)
bash# Verificar si está instalado
node --version
npm --version

# Si no está instalado, descargar de: https://nodejs.org/
2. Python (v3.11 o superior)
bash# Verificar si está instalado
python --version

# Si no está instalado, descargar de: https://www.python.org/downloads/
3. UV (Gestor de paquetes Python)
bash# Verificar si está instalado
uv --version

# Si no está instalado (Windows con PowerShell)
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"

# Si no está instalado (Linux/Mac)
curl -LsSf https://astral.sh/uv/install.sh | sh
4. Git
bash# Verificar si está instalado
git --version

# Si no está instalado, descargar de: https://git-scm.com/downloads
Clonar el Proyecto
bash# Clonar el repositorio
git clone https://github.com/tu-usuario/ProyectoPredictorPartidos.git

# Entrar al directorio
cd ProyectoPredictorPartidos
Instalar Dependencias de Todos los Módulos
bash# 1. Backend
cd backend
npm install
cd ..

# 2. Frontend
cd frontend
npm install
cd ..

# 3. ML Training
cd ml-training
uv sync
cd ..

🔧 Backend (Node.js + Express)
Ubicación
bashcd backend
Inicializar el Servidor
bash# Modo desarrollo (reinicia automáticamente al hacer cambios)
npm run dev

# Modo producción
npm start
Salida esperada:
🚀 Servidor corriendo en http://localhost:3000
Cerrar el Servidor
Forma normal:
bashCtrl + C
Si el proceso quedó colgado (Windows):
bash# 1. Buscar el proceso en el puerto 3000
netstat -ano | findstr :3000

# 2. Matar el proceso (usa el PID que aparece)
taskkill /PID <número_PID> /F
Si el proceso quedó colgado (Linux/Mac):
bash# 1. Buscar el proceso
lsof -i :3000

# 2. Matar el proceso
kill -9 <PID>
Comandos Útiles
bash# Instalar una nueva dependencia
npm install nombre-paquete

# Instalar dependencia de desarrollo
npm install --save-dev nombre-paquete

# Ver lista de dependencias instaladas
npm list --depth=0

# Actualizar dependencias
npm update

# Verificar si el puerto 3000 está en uso (Windows)
netstat -ano | findstr :3000

# Matar proceso en puerto 3000 si quedó colgado (Windows)
# Primero encuentra el PID con el comando anterior, luego:
taskkill /PID <número_PID> /F
Estructura de Archivos
backend/
├── src/
│   ├── index.js           # Servidor principal
│   ├── routes/            # Definición de rutas
│   ├── controllers/       # Lógica de negocio
│   └── models/            # Modelos de datos
├── .env                   # Variables de entorno (NO subir a Git)
├── package.json           # Dependencias y scripts
└── node_modules/          # Dependencias instaladas
Variables de Entorno (.env)
envPORT=3000
NODE_ENV=development
Probar el Backend
bash# Abrir navegador en:
http://localhost:3000

# O usar curl
curl http://localhost:3000

🎨 Frontend (React + Vite)
Ubicación
bashcd frontend
Inicializar el Servidor de Desarrollo
bashnpm run dev
Salida esperada:
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
Cerrar el Servidor
Forma normal:
bashCtrl + C
Si el proceso quedó colgado (Windows):
bash# 1. Buscar el proceso en el puerto 5173
netstat -ano | findstr :5173

# 2. Matar el proceso
taskkill /PID <número_PID> /F
Si el proceso quedó colgado (Linux/Mac):
bash# 1. Buscar el proceso
lsof -i :5173

# 2. Matar el proceso
kill -9 <PID>
Comandos Útiles
bash# Instalar una nueva dependencia
npm install nombre-paquete

# Compilar para producción
npm run build

# Vista previa del build de producción
npm run preview

# Linter (si está configurado)
npm run lint
Estructura de Archivos
frontend/
├── src/
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Punto de entrada
│   ├── components/        # Componentes reutilizables
│   ├── services/          # Llamadas a la API
│   └── styles/            # Archivos CSS
├── public/                # Archivos estáticos
├── index.html             # HTML principal
├── package.json           # Dependencias y scripts
└── node_modules/          # Dependencias instaladas
Conectar con el Backend
En src/services/api.js:
javascriptconst API_URL = 'http://localhost:3000';
Probar el Frontend
bash# Abrir navegador en:
http://localhost:5173

🤖 ML Training (Python + UV)
Ubicación
bashcd ml-training
Inicializar Jupyter Notebook
bash# Opción 1: Con UV
uv run jupyter notebook

# Opción 2: Activar entorno virtual primero
source .venv/bin/activate  # Linux/Mac
.venv\Scripts\activate     # Windows

jupyter notebook
Salida esperada:
[I] Jupyter Notebook 7.x.x is running at:
[I] http://localhost:8888/tree
Cerrar Jupyter Notebook
Forma normal:
bashCtrl + C
# Luego confirmar con: y + Enter
Si Jupyter no responde:
bash# Forzar cierre con Ctrl + C dos veces seguidas
Ctrl + C
Ctrl + C
Si el proceso quedó colgado (Windows):
bash# 1. Buscar procesos de Jupyter
tasklist | findstr jupyter

# 2. Matar el proceso
taskkill /IM jupyter-notebook.exe /F
Si el proceso quedó colgado (Linux/Mac):
bash# 1. Buscar procesos de Jupyter
ps aux | grep jupyter

# 2. Matar el proceso
kill -9 <PID>
Comandos Útiles de UV
bash# Agregar una nueva dependencia
uv add nombre-paquete

# Agregar dependencia de desarrollo
uv add --dev nombre-paquete

# Remover dependencia
uv remove nombre-paquete

# Sincronizar dependencias (instalar desde pyproject.toml)
uv sync

# Ejecutar un script Python
uv run python script.py

# Actualizar UV
uv self update

# Ver versión de UV
uv --version
Activar/Desactivar Entorno Virtual
bash# Activar (Linux/Mac)
source .venv/bin/activate

# Activar (Windows)
.venv\Scripts\activate

# Desactivar (cualquier sistema)
deactivate
Estructura de Archivos
ml-training/
├── notebooks/             # Jupyter notebooks
│   ├── exploracion.ipynb
│   └── entrenamiento.ipynb
├── data/                  # Datasets
│   ├── raw/              # Datos crudos
│   └── processed/        # Datos procesados
├── models/               # Modelos entrenados (.pkl)
├── src/                  # Scripts Python
│   ├── train.py
│   ├── predict.py
│   └── utils.py
├── .venv/                # Entorno virtual (NO subir a Git)
├── pyproject.toml        # Dependencias Python
└── uv.lock               # Lock file de dependencias
Entrenar un Modelo
bash# Con UV
uv run python src/train.py

# O con entorno activado
python src/train.py
Dependencias Comunes
bash# Instalar paquetes típicos de ML
uv add pandas numpy scikit-learn matplotlib seaborn jupyter

🔄 Workflow de Git
Comandos Básicos
bash# Ver estado actual
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "descripción del cambio"

# Subir cambios a GitHub
git push

# Descargar cambios del repositorio
git pull

# Ver historial de commits
git log --oneline

# Ver diferencias antes de commit
git diff
Trabajar con Ramas
bash# Crear nueva rama
git checkout -b feature/nueva-funcionalidad

# Cambiar de rama
git checkout nombre-rama

# Ver todas las ramas
git branch -a

# Fusionar rama (estando en main)
git merge feature/nueva-funcionalidad

# Eliminar rama local
git branch -d nombre-rama

🐛 Solución de Problemas Comunes
Backend
Error: Puerto 3000 ocupado
bash# Windows
netstat -ano | findstr :3000
taskkill /PID <número> /F

# Linux/Mac
lsof -i :3000
kill -9 <PID>
Error: Module not found
bash# Reinstalar dependencias
rm -rf node_modules
npm install
Frontend
Error: VITE no reconocido
bash# Verificar que instalaste las dependencias
npm install

# Si persiste, instalar Vite globalmente
npm install -g vite
ML Training
Error: uv no encontrado
bash# Reinstalar UV
# Windows
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"

# Linux/Mac
curl -LsSf https://astral.sh/uv/install.sh | sh
Error: Jupyter not found
bash# Instalar Jupyter
uv add jupyter

# O con pip
pip install jupyter

📝 Checklist de Desarrollo
Antes de hacer commit:

 El código funciona sin errores
 Los cambios están probados
 No hay console.log() innecesarios
 El .gitignore está actualizado
 Las variables sensibles están en .env
 El commit message es descriptivo

Antes de hacer push:

 Hiciste git pull primero
 Resolviste conflictos (si los hay)
 Los tests pasan (si existen)
 La documentación está actualizada


🚀 Comandos Rápidos
Iniciar todo el proyecto
bash# Terminal 1: Backend
cd backend && npm run dev

# Terminal 2: Frontend
cd frontend && npm run dev

# Terminal 3: ML Training (opcional)
cd ml-training && uv run jupyter notebook
Detener todo
En cada terminal presiona:
bashCtrl + C
Reiniciar rápido después de cambios
bash# Si hiciste cambios en backend
cd backend
Ctrl + C          # Detener
npm run dev       # Reiniciar

# Si hiciste cambios en frontend
cd frontend
Ctrl + C          # Detener
npm run dev       # Reiniciar
Verificar qué servicios están corriendo
Windows:
bash# Ver todos los puertos en uso
netstat -ano | findstr "3000 5173 8888"
Linux/Mac:
bash# Ver procesos en puertos específicos
lsof -i :3000  # Backend
lsof -i :5173  # Frontend
lsof -i :8888  # Jupyter

📞 Ayuda Adicional
Si tienes problemas:

Verifica que todos los prerrequisitos están instalados
Consulta la documentación oficial de cada herramienta
Revisa los issues en GitHub del proyecto
Contacta al equipo de desarrollo


Última actualización: Noviembre 2025