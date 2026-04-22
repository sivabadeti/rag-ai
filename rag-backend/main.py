from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import chromadb
import re

app = FastAPI()

# =========================
# ✅ CORS (frontend)
# =========================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================
# 🔹 Initialize Chroma
# =========================
client = chromadb.Client()

# 🔥 IMPORTANT: reset collection (run once, then comment this line)
try:
    client.delete_collection("rag_collection")
except:
    pass

collection = client.create_collection(name="rag_collection")


# =========================
# 🟢 LOAD DATA (data.txt)
# =========================
def load_data():
    with open("data.txt", "r", encoding="utf-8") as f:
        return f.read()


# =========================
# 🟢 BETTER CHUNKING (by meaning)
# =========================
def split_text(text):
    sentences = re.split(r'(?<=[.!?])\s+', text.strip())

    chunks = []
    chunk = ""

    for sentence in sentences:
        if len(chunk) + len(sentence) < 300:
            chunk += " " + sentence
        else:
            chunks.append(chunk.strip())
            chunk = sentence

    if chunk:
        chunks.append(chunk.strip())

    return chunks


# =========================
# 🟢 PREPARE DATA
# =========================
raw_text = load_data()
data_chunks = split_text(raw_text)


# =========================
# 🟢 INSERT INTO CHROMA
# =========================
def insert_data():
    for i, chunk in enumerate(data_chunks):
        collection.add(
            documents=[chunk],
            ids=[str(i)]
        )

insert_data()


# =========================
# 🔍 SEARCH (STRICT + CLEAN)
# =========================
def search(query):
    results = collection.query(
        query_texts=[query],
        n_results=3   # get top matches
    )

    docs = results["documents"][0]
    distances = results["distances"][0]

    # pair + sort
    pairs = list(zip(docs, distances))
    pairs.sort(key=lambda x: x[1])  # lower = better

    # 🔥 stricter filtering
    filtered = [
        doc for doc, dist in pairs
        if dist < 1.2   # tune this (1.0–1.5)
    ]

    if not filtered:
        return None

    return filtered[0]  # best match only


# =========================
# 🤖 ANSWER (no LLM)
# =========================
def generate_answer(context):
    return context.strip()


# =========================
# 🌐 ROUTES
# =========================
@app.get("/")
def home():
    return {"message": "Chroma RAG API (data.txt based)"}


@app.get("/ask")
def ask(query: str):
    context = search(query)

    if context is None:
        return {
            "query": query,
            "answer": "I don't have enough information about that."
        }

    return {
        "query": query,
        "retrieved_context": context,
        "answer": generate_answer(context)
    }


@app.get("/data")
def debug_data():
    return {"sample_chunks": data_chunks[:5]}