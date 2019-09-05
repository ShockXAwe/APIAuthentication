const User = require('../models/user')

module.exports = {
    // Sign up function that gets called in the routes area with logic below to create the signup
    signUp: async (req, res, next) => {
        console.log('UserContolller.signUp() called!');
        // Creates the area where emails and passwords will be pushed to server requesting the value of the body from the post call
        const { email, password } = req.value.body;
        // Check if email already exists
        const foundUser = await User.findOne({ email })
        if(foundUser){
            return res.status(403).json({error: 'Email is already in use'})
        }
        // If there are no users with email address create the user
        const newUser = new User({ email, password });
        await newUser.save();
        // Respond with token
        res.json({ user: 'created' });

    },
    signIn: async (req, res, next) => {
        console.log('UserContolller.signIn() called!');
        
    },
    secret: async (req, res, next) => {
        console.log('UserContolller.secret() called!');
        
    }
}