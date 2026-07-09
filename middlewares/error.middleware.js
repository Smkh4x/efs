const errMidlleare = async (err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || "err db"
    })
}
export default errMidlleare;