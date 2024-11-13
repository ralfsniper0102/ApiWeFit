import { Router } from "express";
import PerfilController from "../controller/perfil.controller";

const control = new PerfilController();

const perfilRouter = Router();

/**
 * @swagger
 * /api/Perfil/CreatePerfil:
 *   post:
 *     summary: Create a new Perfil
 *     tags: [Profiles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePerfil'
 *     responses:
 *       201:
 *         description: Perfil created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
perfilRouter.post("/api/Perfil/CreatePerfil", control.create.bind(control));

/**
 * @swagger
 * /api/Perfil/GetAllProfiles:
 *   get:
 *     summary: Retrieve all perfils
 *     tags: [Profiles]
 *     responses:
 *       200:
 *         description: A list of perfils
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Perfil'
 */
perfilRouter.get("/api/Perfil/GetAllProfiles", control.getAll.bind(control));

/**
 * @swagger
 * /api/Perfil/GetProfileById/{id}:
 *   get:
 *     summary: Get a perfil by ID
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Id of the profile to retrieve
 *     responses:
 *       200:
 *         description: Successfully retrieved profile
 *       400:
 *         description: Bad request
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Internal server error
 */
perfilRouter.get("/api/Perfil/GetProfileById/:id", control.getById.bind(control));


/**
 * @swagger
 * /api/Perfil/UpdateProfile:
 *   put:
 *     summary: Update a perfil
 *     tags: [Profiles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateProfile'
 *     responses:
 *       200:
 *         description: Perfil updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Perfil not found
 *       500:
 *         description: Internal server error
 */
perfilRouter.put("/api/Perfil/UpdateProfile", control.update.bind(control));



/**
 * @swagger
 * /api/Perfil/DeleteProfile/{id}:
 *   delete:
 *     summary: Delete a perfil
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Id of the profile to delete
 *     responses:
 *       200:
 *         description: Perfil deleted successfully
 *       404:
 *         description: Perfil not found
 *       500:
 *         description: Internal server error
 */
perfilRouter.delete("/api/Perfil/DeleteProfile/:id", control.delete.bind(control));

/**
 * @swagger
 * components:
 *   schemas:
 *     Perfil:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         personalType:
 *           type: integer
 *         cnpj:
 *           type: string
 *         cpf:
 *           type: string
 *         name:
 *           type: string
 *         mobilePhone:
 *           type: string
 *         phone:
 *           type: string
 *         email:
 *           type: string
 *         cep:
 *           type: string
 *         address:
 *           type: string
 *         number:
 *           type: integer
 *         complement:
 *           type: string
 *         city:
 *           type: string
 *         state:
 *           type: string
 *         neighborhood:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 * 
 *     CreatePerfil:
 *       type: object
 *       properties:
 *         personalType:
 *           type: integer
 *         cnpj:
 *           type: string
 *         cpf:
 *           type: string
 *         name:
 *           type: string
 *         mobilePhone:
 *           type: string
 *         phone:
 *           type: string
 *         email:
 *           type: string
 *         cep:
 *           type: string
 *         address:
 *           type: string
 *         number:
 *           type: integer
 *         complement:
 *           type: string
 *         city:
 *           type: string
 *         state:
 *           type: string
 *         neighborhood:
 *           type: string
 * 
 *     UpdateProfile:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         personalType:
 *           type: integer
 *         cnpj:
 *           type: string
 *         cpf:
 *           type: string
 *         name:
 *           type: string
 *         mobilePhone:
 *           type: string
 *         phone:
 *           type: string
 *         email:
 *           type: string
 *         cep:
 *           type: string
 *         address:
 *           type: string
 *         number:
 *           type: integer
 *         complement:
 *           type: string
 *         city:
 *           type: string
 *         state:
 *           type: string
 *         neighborhood:
 *           type: string
 */




export default perfilRouter;