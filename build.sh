#! /bin/bash
echo "Start build docker image..."
sudo docker image build -t my-sample-docker:latest .

echo "Running docker container from image..."
sudo docker run -it -d -p 7777:7777 my-sample-docker:latest

