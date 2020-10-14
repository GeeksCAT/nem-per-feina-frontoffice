FROM node:12.19.0-alpine
LABEL maintainer="GeeksCAT<info@geekscat.org>"

# the name for the non-root user
ARG USR=anemperfeina
# the default group of the non-root user
ARG GRP=anemperfeina

# Create app directory
WORKDIR /usr/src/app/

RUN addgroup -S ${GRP} \
    && adduser -S -g ${GRP} ${USR} \
    && chown -R ${USR}:${GRP} /usr/src/app/

# Install tini process manager to forward signals to node
RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]

# drop root privileges
USER ${USR}

# Install app dependencies
COPY --chown=${USR}:${GRP} package.json yarn.lock ./
RUN yarn install

# Set environment variables
ENV NODE_ENV production
ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 3000

# Bundle app source and clear the cache
COPY --chown=${USR}:${GRP} . .

RUN yarn build \
    && yarn cache clean

EXPOSE 3000
CMD [ "yarn", "start" ]
