FROM node:latest

# Set the working directory to /app inside the container
WORKDIR /app

# Copy app files
COPY . .

# ==== BUILD =====
COPY package.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# Start the app
CMD [ "npm", "start" ]
