# Use the official Node.js 18 image
FROM node:16

# Set the working directory inside the container
WORKDIR ./API

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the port the API runs on
EXPOSE 5000

# Start the Node.js server
CMD ["npm", "start"]