import { Router } from 'express'

import { sumHandler } from './handlers/sum'

const dummyRouter = Router()

/**
 * @swagger
 * /dummy/sum:
 *   get:
 *     summary: Sum two numbers
 *     description: Returns the sum of two numbers
 *     parameters:
 *       - name: a
 *         in: query
 *         required: true
 *         schema:
 *           type: number
 *       - name: b
 *         in: query
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: The sum of the two numbers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 message:
 *                   type: string
 */
dummyRouter.get('/sum', sumHandler)

export default dummyRouter
