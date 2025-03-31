import api_controller from "../controller/api_controller.js";
import { Router } from "express";

const router = Router();

router.route("/convert/hiragana").post(api_controller.convertToHiragana);
router.route("/convert/katakana").post(api_controller.convertToKatakana);

export default router;