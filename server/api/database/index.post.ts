export default defineEventHandler(async (event) => {
    const namespace = await import('./index')
    const body = await useBody(event)

    if (!(Object.keys(body).sort().join("|") === ["title", "message"].sort().join("|"))) {
        event.res.statusCode = 400;
        event.res.statusMessage = `[server][post | error] body ${body} no match schema { title: any, message: any }`
        event.res.end()
    }

    namespace.server.database.push(body)
    event.res.statusCode = 200;
    event.res.statusMessage = `[server][post | success] saved item ${body}`
    event.res.end()
})