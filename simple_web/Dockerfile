# Specify the base image
# Alpine (usually means the most stripped down version) is
# a 5MB image that really does not have anything.
# FIX 1: look for a different image.
# FIX 2: build by adding more commands.
# FROM alpine
FROM node:alpine

# add and use things in work dir instead of root folder.
WORKDIR /usr/app

# copy the package from current folder to docker.
COPY ./package.json ./

# install an npm tree.
RUN npm install

# copy all changes from current folder to docker.
COPY ./ ./

# Default command.
CMD ["npm", "start"]