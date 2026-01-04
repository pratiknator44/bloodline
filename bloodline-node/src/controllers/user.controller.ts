import { Request, Response } from 'express';

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: User Login
 *     description: Authenticate user with username and password
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: admin
 *               password:
 *                 type: string
 *                 example: admin
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 user:
 *                   type: object
 *       401:
 *         description: Invalid credentials
 */
export const login = (req: Request, res: Response) => {

    const { username, password } = req.body;

    // Dummy username/password verification
    if (username === 'admin' && password === 'admin') {
        return res.status(200).json({
            success: true,
            message: 'Login successful',
            user: {
                id: '1',
                username: 'admin',
                role: 'admin'
            }
        });
    }

    return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
    });
};
