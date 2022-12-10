FROM node:16.14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the frontend code
RUN npm run build

# Expose the port on which the frontend server will run
EXPOSE 3000

# Run the frontend server
CMD ["npm", "start"]
