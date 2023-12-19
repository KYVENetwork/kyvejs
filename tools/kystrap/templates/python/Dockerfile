# Use the official Python image as the base image
FROM python:3.12

# Set the working directory inside the container
WORKDIR /app

# Copy the dependencies file to the working directory
COPY requirements.txt ./

# Install the required Python packages
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Python code and protobuf files to the container
COPY main.py settings.py ./
COPY proto ./proto
COPY server ./server

# Expose the gRPC port
EXPOSE 50051

# Run the Python script
CMD ["python", "main.py"]