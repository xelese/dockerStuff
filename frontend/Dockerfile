FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# add nginx for prod environement.
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html