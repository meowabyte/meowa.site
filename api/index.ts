import { AutoRouter, cors } from "itty-router";

const { preflight, corsify } = cors({
    allowMethods: "GET",
    maxAge: 86400
})

const router = AutoRouter({
    before: [preflight],
    finally: [corsify],
    catch: () => new Response(null, { status: 500 }),
    missing: () => new Response(null, { status: 404 }),
    base: "/api"
})

router.all("/", () => Response.json({ error: "There is no API for now..." }, { status: 404 }))

export default { ...router };