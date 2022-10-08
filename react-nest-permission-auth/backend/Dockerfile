FROM node:18
ARG APP_ENV=local
WORKDIR /app
COPY . .
RUN echo $APP_ENV
COPY /envs/.env.template.${APP_ENV} .env
RUN yarn install
RUN yarn run build
CMD yarn run start:prod
EXPOSE 8080
