FROM node:latest

# Set the working directory to /app inside the container
WORKDIR /workethic-fe

# Copy app files
COPY . .

# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# Build the app
RUN npm run build

# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production

# Start the app
CMD [ "npx", "start" ]
