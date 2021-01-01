# This is a repository which tests out docker

## **Simple_web**

This directory contains a simple node based web application That just says "die there"
Check for port mappings in docker configuration.

## **visits**

This directory contains a node.js file that counts how  many people have visited a website.
The major point of this docker compose file that it allows multiple containers to run and
communicate with each other.

## **frontend**

This directory contains a React app.
    
- The first commit focuses on creating a docker file, and a docker compose file to run the app
in production and development environments.
- Second part focuses on Travis CI integration with github.
- Third part is deployment on AWS, using travis CI.