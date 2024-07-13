const authMiddleware = (schema) => async (req, res, next) => {
    try {
        // Assuming req.body contains the data you want to validate
        const validated = await schema.parseAsync(req.body);
        req.validatedData = validated; // Store validated data in req object if needed
        next(); // Move to the next middleware or route handler
    } catch (error) {
        res.status(400).json({error: error.issues[0].message})
    }
};

module.exports = authMiddleware;
