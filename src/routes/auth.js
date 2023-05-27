import { Router } from 'express'
import { check } from 'express-validator'
import validateFields from '../middlewares/validateFields.js'
import { createUser, loginUser } from '../controllers/auth.js'

const router = Router()

router.post('/new',
  [
    check('name', 'Name is required').isString(),
    check('email', 'Email is required').isEmail(),
    check('password', 'The password must be 6 characters').isLength({ min: 6 }),
    validateFields
  ],
  createUser
)

router.post('/',
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'The password must be 6 characters').isLength({ min: 6 }),
    validateFields
  ],
  loginUser
)

export default router
