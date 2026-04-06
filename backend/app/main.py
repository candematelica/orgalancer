from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Orgalancer API",
    description="Plataforma para freelancers con asistente virtual",
    version="1.0.0"
)

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check endpoint
@app.get("/api/health")
def health_check():
    return {"status": "ok", "message": "Orgalancer API is running"}

# Root endpoint
@app.get("/")
def root():
    return {"message": "Welcome to Orgalancer API"}
