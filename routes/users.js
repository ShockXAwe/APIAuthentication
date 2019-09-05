const router = require('express-promise-router')();
const { validateBody, schemas } = require('../helpers/routeHelpers');
const UsersController = require('../controllers/users')

// Creates routes which then call UserController on the user.js in the controllers folder
router.route('/signup')
    .post(validateBody(schemas.authSchema), UsersController.signUp);

router.route('/signin')
    .post(validateBody(schemas.authSchema), UsersController.signIn);

router.route('/secret')
    .get(UsersController.secret);

module.exports = router;


