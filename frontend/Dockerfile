FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# add nginx for prod environement.
FROM nginx
# allows one to expose a port from container. Won't connect to the beanstalk otherwise.
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html