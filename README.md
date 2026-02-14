# ReactFlow Pipeline Editor

A visual workflow editor built with ReactFlow.

## Features
- Reusable BaseNode abstraction for scalable node creation
- Dynamic TextNode variables using {{var}} syntax
- Backend integration with FastAPI for node/edge counting and DAG validation

## Run Frontend
cd frontend  
npm install  
npm start  

## Run Backend
cd backend  
python -m uvicorn main:app --reload
