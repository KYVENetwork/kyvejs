# {{ .name | ToTitle }} Runtime Server

This is the {{ .name | ToTitle }} runtime server.

## Development

### Requirements
- Docker
- Python 3
- Make (optional)

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

### Test the runtime

Start the runtime container and the kystrap container
```bash
docker compose up --build   # --build is only needed if you changed the runtime
```
Open another terminal and run
```bash
docker exec -it $(docker ps -qf "name={{ .name |ToLower }}-kystrap") ./kystrap test -a runtime:50051
```
