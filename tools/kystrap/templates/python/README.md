# {{ .name | ToTitle }} Runtime Server

This is the {{ .name | ToTitle }} runtime server.

## Requirements
- Make
- Docker
- Python 3 (only for development)

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
make docker-image
```

Running the runtime container
```bash
make docker-run
```
