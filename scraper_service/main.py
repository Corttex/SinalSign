"""
Sinal Sign — Lead Hunter & Google Maps Scraper Worker (DF & Entorno)
Stack: Python 3.11+ / FastAPI / Playwright Stealth / Asyncio
Objetivo: Captar leads B2B por nicho/tema e região do DF, higienizar dados e salvar via API.
"""

from fastapi import FastAPI, BackgroundTasks, HTTPException, Header
from pydantic import BaseModel
import asyncio
import re
import os
import httpx
from typing import Optional

app = FastAPI(title="Sinal Sign Scraper Engine", version="1.0.0")

INTERNAL_API_KEY = os.getenv("INTERNAL_API_KEY", "chave_secreta_para_comunicacao_com_scraper_python")
NEXT_API_URL = os.getenv("NEXT_API_URL", "http://localhost:3000/api/leads/internal-upsert")

class ScrapeTaskRequest(BaseModel):
    themeKeyword: str  # Ex: "Clínica Odontológica", "Escritório de Advocacia", "Restaurante"
    regionDf: str      # Ex: "Águas Claras", "Asa Sul", "Taguatinga"
    maxResults: int = 30

def normalize_br_phone(raw_phone: str) -> Optional[str]:
    """Higieniza números brasileiros para o formato padrão E.164 (55619XXXXXXXX ou 55613XXXXXXX)"""
    digits = re.sub(r"\D", "", raw_phone or "")
    if not digits:
        return None
    if digits.startswith("0"):
        digits = digits[1:]
    if len(digits) in (10, 11) and not digits.startswith("55"):
        digits = f"55{digits}"
    return digits if len(digits) in (12, 13) else None

async def run_extraction_worker(theme: str, region: str, limit: int):
    """
    Executa a extração em background simulando o Playwright ou crawlers leves.
    Em produção, abre o browser chromium headless navegando na busca do Maps.
    """
    query = f"{theme} em {region} DF"
    print(f"[Scraper Worker] Iniciando bateria para: '{query}' (Limite: {limit})...")
    
    # Simulação da fila de extração pronta para ser conectada com Playwright
    # O pipeline extrai tradeName, address, phoneRaw, website, googleRating
    await asyncio.sleep(2)
    print(f"[Scraper Worker] Extração concluída para '{query}'.")

@app.post("/api/scraper/start")
async def start_scraper(
    payload: ScrapeTaskRequest,
    background_tasks: BackgroundTasks,
    x_api_key: Optional[str] = Header(None)
):
    if x_api_key != INTERNAL_API_KEY:
        raise HTTPException(status_code=403, detail="Chave interna de segurança não autorizada.")

    background_tasks.add_task(
        run_extraction_worker,
        payload.themeKeyword,
        payload.regionDf,
        payload.maxResults
    )

    return {
        "status": "QUEUED",
        "message": f"Extração iniciada para '{payload.themeKeyword}' em '{payload.regionDf}'.",
        "region": payload.regionDf,
    }

@app.get("/health")
def health_check():
    return {"status": "ok", "service": "sinalsign-scraper-engine"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8001)

