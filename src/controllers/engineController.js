import { engine } from "../models/Engine.js";

class EngineController {
    static async listEngines(req, res) {
        try {
            const listEngines = await engine.find({});
            res.status(200).json(listEngines);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure to obtain engines` });
        }
    };

    static async registerEngine(req, res) {
        try {
            const newEngine = await engine.create(req.body);
            res.status(201).json({ message: "successfuly created gaming platform.", engine: newEngine });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to register engine` });
        }
    };

    static async listEngineById(req, res) {
        try {
            const id = req.params.id;
            const engineFound = await engine.findById(id);
            res.status(200).json(engineFound);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure to obtain engine` });
        }
    };

    static async updateEngineById(req, res) {
        try {
            const id = req.params.id;
            await engine.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: `updated engine` });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to update engine` });
        }
    };

    static async deleteEngineById(req, res) {
        try {
            const id = req.params.id;
            await engine.findByIdAndDelete(id);
            res.status(200).json({ message: `deleted engine` });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to delete engine` });
        }
    };
}

export default EngineController;