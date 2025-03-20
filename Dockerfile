FROM oven/bun:1
WORKDIR /usr/src/app

COPY . .
USER bun

RUN "bun install --frozen-lockfile --production"
RUN "bun run build"

ENTRYPOINT [ "bun",  "run", "start" ]