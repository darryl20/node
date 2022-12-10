FROM node:16.14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the port on which the backend server will run
EXPOSE 3001

# Run the backend server
CMD ["npm", "start"]
