FROM node:latest

# Create app directory
WORKDIR /home/node/mockserver

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# ADD ./package.json .
# ADD ./package-lock.json .

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . ./

EXPOSE 5000
CMD [ "npm", "start" ]