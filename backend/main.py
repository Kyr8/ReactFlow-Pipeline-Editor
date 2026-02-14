from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


class PipelineData(BaseModel):
    nodes: List[Dict]
    edges: List[Dict]


def check_dag(nodes, edges):
    graph = {n["id"]: [] for n in nodes}
    indegree = {n["id"]: 0 for n in nodes}

    for e in edges:
        source = e["source"]
        target = e["target"]

        graph[source].append(target)
        indegree[target] += 1

    queue = [n for n in indegree if indegree[n] == 0]
    visited = 0

    while queue:
        curr = queue.pop()
        visited += 1

        for nxt in graph[curr]:
            indegree[nxt] -= 1
            if indegree[nxt] == 0:
                queue.append(nxt)

    return visited == len(nodes)


@app.post("/pipelines/parse")
def parse_pipeline(data: PipelineData):
    return {
        "num_nodes": len(data.nodes),
        "num_edges": len(data.edges),
        "is_dag": check_dag(data.nodes, data.edges),
    }
