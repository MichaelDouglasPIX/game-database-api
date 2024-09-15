import { engine } from "../models/Engine.js";

class EngineController {
    static async listEngines(req, res, next) {
        try {
            const listEngines = await engine.find({});
            res.status(200).json(listEngines);
        } catch (error) {
            next(error);
        }
    };

    static async registerEngine(req, res, next) {
        try {
            const newEngine = await engine.create(req.body);
            res.status(201).json({ message: "successfuly created gaming platform.", engine: newEngine });
        } catch (error) {
            next(error);
        }
    };

    static async listEngineById(req, res, next) {
        try {
            const id = req.params.id;
            const engineFound = await engine.findById(id);
            res.status(200).json(engineFound);
        } catch (error) {
            next(error);
        }
    };

    static async updateEngineById(req, res, next) {
        try {
            const id = req.params.id;
            await engine.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: `updated engine` });
        } catch (error) {
            next(error);
        }
    };

    static async deleteEngineById(req, res, next) {
        try {
            const id = req.params.id;
            await engine.findByIdAndDelete(id);
            res.status(200).json({ message: `deleted engine` });
        } catch (error) {
            next(error);
        }
    };
}

export default EngineController;