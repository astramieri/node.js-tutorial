const authorize = (req, res, next) => {
    const {user} = req.query;
    if (user === "john") {
        // adding a property tu req.user
        req.user = {name : "john", id: 3}
        next(); // remember to call NEXT()
    } else {
        res.status(401).send("not authorized");
    }
}

module.exports = authorize;