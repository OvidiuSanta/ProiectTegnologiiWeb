FROM node:14

WORKDIR /arise-cms
COPY package.json .
RUN npm install
COPY . .
EXPOSE 6868
CMD npm start
