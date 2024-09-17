"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const controller_nino_1 = require("./controllers/controller_nino");
const controller_user_1 = require("./controllers/controller_user");
const authorization_ToknMiddl_1 = require("./middleware/authorization_ToknMiddl");
const error_1 = require("./middleware/error");
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const objectNinoRoute = (0, express_1.Router)();
const userRoutes = (0, express_1.Router)();
objectNinoRoute.post('/create_informacion_nino', authorization_ToknMiddl_1.authenticateToken, controller_nino_1.createNino);
objectNinoRoute.get('/get_informacion_nino', authorization_ToknMiddl_1.authenticateToken, controller_nino_1.getNino);
objectNinoRoute.delete('/delete_informacion_nino/:id', authorization_ToknMiddl_1.authenticateToken, controller_nino_1.deleteNino);
objectNinoRoute.put('/update_informacion_nino/:id', authorization_ToknMiddl_1.authenticateToken, controller_nino_1.updateNino);
userRoutes.post('/api/login', controller_user_1.generateToken);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(error_1.errorHandler);
app.use(objectNinoRoute);
app.use(userRoutes);
app.listen(port, () => {
    return console.log(`Example app listening on port ${port}`);
});
