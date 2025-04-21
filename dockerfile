FROM node:alpine

WORKDIR /app

COPY package*.json ./

# Install app dependencies including nodemon (dev dependency works fine here)
RUN npm ci

COPY . .

# Install extra Alpine packages
RUN apk update && apk add --no-cache \
    bash \
    fontconfig \
    ttf-dejavu \
    ghostscript \
    curl \
    && rm -rf /var/cache/apk/*

# RUN npm install -g nodemon

EXPOSE 3005

# Use nodemon to run the app
CMD ["npm", "start"]
