"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import logo from './logo.svg';
const react_1 = __importDefault(require("react"));
require("./App.css");
const Calendar_1 = __importDefault(require("./Calendar"));
// import { makeStyles } from '@material-ui/core/styles';
// import style
// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//   },
//   container: {
//     maxHeight: 440,
//   },
// });
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(Calendar_1.default, null)));
}
exports.default = App;
