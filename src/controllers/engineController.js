import NotFound from "../errors/NotFound.js";
import { engine } from "../models/index.js";

class EngineController {
    static async listEngines(req, res, next) {
        try {
            const listEngines = engine.find();
            req.result = listEngines;
            next();
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

            if(engineFound !== null){
                res.status(200).json(engineFound);
            }else {
                next(new NotFound("engine not found"));
            }
        } catch (error) {
            next(error);
        }
    };

    static async updateEngineById(req, res, next) {
        try {
            const id = req.params.id;
            const updatedEngine = await engine.findByIdAndUpdate(id, req.body);

            if(updatedEngine !== null){
                res.status(200).json({ message: `updated engine` });
            }else {
                next(new NotFound("engine not found"));
            }
        } catch (error) {
            next(error);
        }
    };

    static async deleteEngineById(req, res, next) {
        try {
            const id = req.params.id;
            const deletedEngine = await engine.findByIdAndDelete(id);

            if(deletedEngine !== null){
                res.status(200).json({ message: `deleted engine` });
            }else {
                next(new NotFound("engine not found"));
            }
        } catch (error) {
            next(error);
        }
    };
}

export default EngineController;