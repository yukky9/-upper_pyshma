import fastify, { FastifyInstance } from "fastify";
import fastifyStatic from "@fastify/static";
import path from "path";

const app: FastifyInstance = fastify({
    logger: true,
});

app.register(fastifyStatic, {
    root: path.join(__dirname, "build"),
    prefix: "/",
});

app.listen({ port: 3000, host: "0.0.0.0" }, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`Server listening on ${address}`);
});
