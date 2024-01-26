"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const Table_1 = __importDefault(require("@material-ui/core/Table"));
const TableBody_1 = __importDefault(require("@material-ui/core/TableBody"));
const TableCell_1 = __importDefault(require("@material-ui/core/TableCell"));
const TableContainer_1 = __importDefault(require("@material-ui/core/TableContainer"));
const TableHead_1 = __importDefault(require("@material-ui/core/TableHead"));
const TableRow_1 = __importDefault(require("@material-ui/core/TableRow"));
const Paper_1 = __importDefault(require("@material-ui/core/Paper"));
const StyledTableCell = (0, styles_1.withStyles)((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell_1.default);
const StyledTableRow = (0, styles_1.withStyles)((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow_1.default);
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const useStyles = (0, styles_1.makeStyles)({
    table: {
        minWidth: 700,
    },
});
function CustomizedTables() {
    const classes = useStyles();
    return (react_1.default.createElement(TableContainer_1.default, { component: Paper_1.default },
        react_1.default.createElement(Table_1.default, { className: classes.table, "aria-label": "customized table" },
            react_1.default.createElement(TableHead_1.default, null,
                react_1.default.createElement(TableRow_1.default, null,
                    react_1.default.createElement(StyledTableCell, null, "Dessert (100g serving)"),
                    react_1.default.createElement(StyledTableCell, { align: "right" }, "Calories"),
                    react_1.default.createElement(StyledTableCell, { align: "right" }, "Fat\u00A0(g)"),
                    react_1.default.createElement(StyledTableCell, { align: "right" }, "Carbs\u00A0(g)"),
                    react_1.default.createElement(StyledTableCell, { align: "right" }, "Protein\u00A0(g)"))),
            react_1.default.createElement(TableBody_1.default, null, rows.map((row) => (react_1.default.createElement(StyledTableRow, { key: row.name },
                react_1.default.createElement(StyledTableCell, { component: "th", scope: "row" }, row.name),
                react_1.default.createElement(StyledTableCell, { align: "right" }, row.calories),
                react_1.default.createElement(StyledTableCell, { align: "right" }, row.fat),
                react_1.default.createElement(StyledTableCell, { align: "right" }, row.carbs),
                react_1.default.createElement(StyledTableCell, { align: "right" }, row.protein))))))));
}
exports.default = CustomizedTables;
