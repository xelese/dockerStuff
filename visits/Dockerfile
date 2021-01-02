# Node image
# base image
FROM node:alpine

# working directory in the docker.
WORKDIR '/app'

# copy the package json if any changes were made.
COPY package.json .

# run npm install if package was modified.
RUN npm install

# copy stuff from current folder to docker work directory.
COPY . .

# run the node app.
CMD ["npm","start"]