# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install -g nodemon

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the server will listen on
EXPOSE 4000

# Start the server
#CMD ["npm", "run", "dev"]
CMD ["nodemon", "index.js"]
