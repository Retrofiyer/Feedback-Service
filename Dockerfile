# Build Stage
FROM node:20 AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Final Stage
FROM node:20

WORKDIR /usr/src/app

COPY --from=build /usr/src/app /usr/src/app

CMD ["npm", "start"]