# Each from statement is a block of instruction
# -------- BUILD PHASE -----------
FROM node:alpine as builder
WORKDIR '/app'
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# --------  RUN PHASE  -----------
# add nginx for prod environement.
FROM nginx
# allows one to expose a port from container. Won't connect to the beanstalk otherwise.
EXPOSE 80
# we are trying to copy stuff from the BUILD phase
# NOTE: will fail for aws
COPY --from=builder /app/build /usr/share/nginx/html
# use this for production
#COPY --from=0 /app/build /usr/share/nginx/html