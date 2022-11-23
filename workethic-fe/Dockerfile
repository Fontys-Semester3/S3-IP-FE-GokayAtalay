FROM node:latest

# Set the working directory to /app inside the container
WORKDIR /app

# ==== BUILD =====
COPY package.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# Copy app files
COPY . .

# Start the app
CMD [ "npm", "start" ]
