# Use an official Node.js runtime as a base image
FROM node:14-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json .

# Install dependencies
RUN npm install

# Update Browserslist by updating the browserslist package
RUN npm install browserslist@latest
RUN npm install -D tailwindcss postcss autoprefixer
RUN npx tailwindcss init -p

# Copy the rest of the application code to the working directory
COPY . .

#COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Build the Vue.js project
RUN npm run build

FROM nginx:1.25.3-alpine3.18 as production-stage
COPY --from=build /app/dist /usr/share/nginx/html
# Expose the port that the application will run on
EXPOSE 80

# Command to run the application
#CMD ["npm", "run", "preview", "--", "--port", "5173"]
CMD ["nginx", "-g", "daemon off;"]