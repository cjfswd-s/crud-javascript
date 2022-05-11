export default defineEventHandler(async (event) => {
    const namespace = await import('./index')
    event.res.statusCode = 200;
    event.res.statusMessage = '[server][get | success] getted items'
    return namespace.server.database
})