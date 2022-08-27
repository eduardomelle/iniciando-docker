FROM node:14.17.0-slim

WORKDIR /home/node/app

USER node

CMD ["tail", "-f", "/dev/null"]