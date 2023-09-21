FROM node:18

EXPOSE 4000

RUN npm install i npm@latest -g

COPY package.json package-lock*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start:server"]