const logArbitre = (req, res, next) => {
    console.log(`[${new Date().toDateString()}] =>  ${req.method} ${req.url} `)
    next();
}
export default logArbitre;