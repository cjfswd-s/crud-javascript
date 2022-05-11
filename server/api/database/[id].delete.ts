export default defineEventHandler(async (event) => {
    const namespace = await import('./index')
    let id: string | number = event.context.params.id as string

    if (!(/^[0-9]*$/.test(id))) {
        event.res.statusCode = 400;
        event.res.statusMessage = `[server][delete | error] id not number`
        event.res.end()
    }

    id = Number(id)

    if (namespace.server.database[id]) {
        namespace.server.database.splice(id, 1);
        event.res.statusCode = 200;
        event.res.statusMessage = `[server][delete | success] item index ${id} deleted`
        event.res.end()
    }

    event.res.statusCode = 500;
    event.res.statusMessage = `[server][delete | error] item index ${id} not found`
    event.res.end()
})