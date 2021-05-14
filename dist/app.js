"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateApp = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var config_1 = require("./config");
var db_1 = require("./lib/db");
var CreateApp = /** @class */ (function () {
    function CreateApp() {
        this.apiPath = {
            homeRoute: '/',
            products: '/api/products',
            categories: '/api/categories/'
        };
        this.app = express_1.default();
        this.port = config_1.config.port;
        this.db = new db_1.MongoDB();
        //Middlewares
        this.middlewares();
        //rutas de mi app
        this.routes();
    }
    CreateApp.prototype.middlewares = function () {
        //CORS
        this.app.use(cors_1.default());
        //read and bodyparser
        this.app.use(express_1.default.json());
    };
    CreateApp.prototype.routes = function () {
        // this.app.use(this.apiPath.products, );
        // this.app.use(this.apiPath.categories, );
    };
    CreateApp.prototype.listenPort = function () {
        this.app.listen(this.port, function (err) {
            if (err) {
                console.error("Error: ", err);
                return err;
            }
        });
    };
    return CreateApp;
}());
exports.CreateApp = CreateApp;