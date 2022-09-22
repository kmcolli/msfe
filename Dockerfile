####
# Microservice1 dockerfile
# This Dockerfile is used in order to build a container that runs the Spring Boot application
#
# Build the image with:
#
# docker build -f docker/Dockerfile -t springboot/sample-demo .
#
# Then run the container using:
#
# docker run -i --rm -p 8081:8081 springboot/sample-demo
####
FROM node:lts-alpine as BUILD
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
 
FROM nginx:1.17
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /code
COPY --from=BUILD ./src .
EXPOSE 80:80
CMD ["nginx", "-g", "daemon off;"]
