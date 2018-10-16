FROM node

# Create app directory
WORKDIR /usr/app

# Install app dependencies
COPY package*.json .
RUN npm i --verbose

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]