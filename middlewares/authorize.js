const authorize = (...roles) => {
    return (req, res, next) => {

        if (!req.authUser) return res.status(401).json({ message: "not authenticated" })
        if (!roles.includes(req.authUser.role)) {
            return res.status(403).json({
                message: "not authorazed"
            })
        }
        next()
    }
}
export default authorize