FROM node:18
ARG APP_ENV=local
WORKDIR /app
COPY . .
RUN echo $APP_ENV
COPY /envs/.env.template.${APP_ENV} .env
RUN yarn install
RUN yarn run build
EXPOSE 5173
CMD yarn run dev
