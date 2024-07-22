FROM node:20.15.0

WORKDIR /user/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm","start"]