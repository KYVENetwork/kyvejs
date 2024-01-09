# {{ .name | ToTitle }} Runtime Server

This is the {{ .name | ToTitle }} runtime server.

## Usage

Setup
```bash
# Install virtualenv
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

Running the runtime
```bash
python main.py
```

## Usage with Docker

Building the Docker image
```bash
docker build -t kyve/{{ .name }} .
```

Running the runtime container
```bash
docker run --rm -p 50051:50051 kyve/{{ .name }}
```
