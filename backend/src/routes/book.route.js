import { Router } from "express";
import { enterbook, allbook, deletebook, onebook } from "../controllers/book.controller.js";

const router = Router()

router.route("/register").post(enterbook)

router.route("/").get(allbook)
router.route("/:id").get(onebook)

router.route("/:id").delete(deletebook)

export default router