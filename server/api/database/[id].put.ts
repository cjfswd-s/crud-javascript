export default defineEventHandler(async (event) => {
    const namespace = await import('./index')
    const body = await useBody(event)
    let id: string | number = event.context.params.id as string

    if (!(/^[0-9]*$/.test(id))) {
        event.res.statusCode = 400;
        event.res.statusMessage = `[server][put | error] id not number`
        return
    }

    id = Number(id)

    if (!(Object.keys(body).sort().join("|") === ["title", "message"].sort().join("|"))) {
        event.res.statusCode = 400;
        event.res.statusMessage = `[server][put | error] body ${body} no match schema { title: any, message: any }`
        event.res.end()
    }
    
    if (namespace.server.database[id]) {
        const { title, message } = body
        if (title != '') namespace.server.database[id].title = title
        if (message != '') namespace.server.database[id].message = message
        event.res.statusCode = 200;
        event.res.statusMessage = `[server][put | success] item index ${id} updated`
        return
    }

    event.res.statusCode = 500;
    event.res.statusMessage = `[server][put | error] item index ${id} not found`
    return
})