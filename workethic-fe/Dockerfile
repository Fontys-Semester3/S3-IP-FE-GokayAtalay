FROM node:latest

# Set the working directory to /app inside the container
WORKDIR /app

# ==== BUILD =====
COPY package.json ./
RUN npm install

# Copy app files
COPY . .

EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]
