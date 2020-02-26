(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-toolbar></app-toolbar>\n<app-progress-loader></app-progress-loader>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/carrinho/carrinho.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/carrinho/carrinho.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <mat-icon fxFlex=\"25\" matPrefix inline=\"true\">add_shopping_cart</mat-icon>\n      Produto\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <app-produto (produtoSelecionado)=\"onProdutoSelecionado($event)\" ></app-produto>\n    <mat-card *ngFor=\"let prod of produtos\" class=\"item-shopping-cart\">\n      <div fxFlex=\"85\">\n        <mat-card-subtitle>{{prod.codigo}}</mat-card-subtitle>\n        <mat-card-title>{{prod.nome}}</mat-card-title>\n      </div>\n      <div fxFlex=\"15\">\n        <app-calculo-valores [prod]=\"prod\" (valorCalculado)=\"onProdutoCalculado($event)\"></app-calculo-valores>\n      </div>\n    </mat-card>\n    <div fxLayoutAlign=\"center\" *ngIf=\"produtos.length === 0\">\n      <img src=\"assets/icones/imagem-carrinho-empty-state.png\" alt=\"image\">\n    </div>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/cliente.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/cliente.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <mat-icon fxFlex=\"25\" matPrefix inline=\"true\">person_outline</mat-icon>\n      Cliente\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form fxFlex class=\"client-form\">\n      <mat-form-field fxFlex=\"50\">\n        <mat-icon matSuffix inline=\"true\" *ngIf=\"!selectedCliente\">search</mat-icon>\n        <input type=\"text\"\n               placeholder=\"Selecione um cliente\"\n               aria-label=\"Cliente\"\n               matInput\n               required\n               [formControl]=\"ClientesFormControl\"\n               [matAutocomplete]=\"auto\">\n        <button mat-button *ngIf=\"selectedCliente\" matSuffix mat-icon-button aria-label=\"Clear\"\n                (click)=\"ClientesFormControl.reset()\">\n          <mat-icon>close</mat-icon>\n        </button>\n        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" (optionSelected)=\"onSubmit()\">\n          <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/produto/produto.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/produto/produto.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <form fxFlex class=\"client-form\">\n      <mat-form-field fxFlex=\"50\">\n        <mat-icon matSuffix  inline=\"true\" *ngIf=\"!selectedProduto\">search</mat-icon>\n        <input type=\"text\"\n               placeholder=\"Selecione o produto\"\n               aria-label=\"Produto\"\n               matInput\n               [formControl]=\"produtoFormControl\"\n               [matAutocomplete]=\"auto\">\n        <button mat-button *ngIf=\"selectedProduto\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"produtoFormControl.reset()\">\n          <mat-icon>close</mat-icon>\n        </button>\n        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" (optionSelected)=\"onSubmit()\">\n          <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/progress-loader/progress-loader.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/progress-loader/progress-loader.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-progress-bar mode=\"indeterminate\" color=\"accent\" *ngIf=\"isLoading | async\"></mat-progress-bar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/toolbar/toolbar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/toolbar/toolbar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"#FFFFFF\">\n  <mat-toolbar-row>\n    <span> <img src=\"assets/icones/logotipo-maximatech.png\" alt=\"image\"></span>\n    <span class=\"item-spacer\"></span>\n    <button class=\"item\" mat-button [matMenuTriggerFor]=\"menuCadastro\">Cadastro</button>\n    <mat-menu #menuCadastro=\"matMenu\" xPosition=\"after\">\n      <button routerLink=\"/cadastro-cliente\" mat-menu-item>Cliente</button>\n      <button routerLink=\"/cadastro-produto\" mat-menu-item>Produto</button>\n    </mat-menu>\n\n    <button class=\"item\" mat-button [matMenuTriggerFor]=\"menuPedido\">Pedido</button>\n    <mat-menu #menuPedido=\"matMenu\" xPosition=\"after\">\n      <button routerLink=\"/novo-pedido\" mat-menu-item>Novo Pedido</button>\n      <button routerLink=\"/consulta-pedido\" mat-menu-item>Consulta Pedido</button>\n    </mat-menu>\n    <span class=\"example-spacer\"></span>\n  </mat-toolbar-row>\n</mat-toolbar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxFlex=\"100\" fxLayoutAlign=\"center center\">\n  <mat-card  fxLayout=\"column\"  fxFlex=\"50\">\n    <mat-card-title>Cadastro de clientes</mat-card-title>\n    <mat-card-subtitle></mat-card-subtitle>\n    <mat-card-content>\n      <form fxFlex=\"100\" fxLayout=\"column\" [formGroup]=\"form\">\n        <mat-form-field appearance=\"outline\" fxFlex=\"100\">\n          <mat-label>Nome</mat-label>\n          <input required formControlName=\"nome\" matInput placeholder=\"Placeholder\">\n          <mat-icon matSuffix>person_outline</mat-icon>\n          <mat-hint>Digite o nome do cliente</mat-hint>\n        </mat-form-field>\n\n        <button mat-raised-button color=\"primary\" style=\"color: #e6ebe4\" type=\"submit\" (click)=\"onSubmit()\">Cadastrar</button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cadastro-produto/cadastro-produto.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cadastro-produto/cadastro-produto.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxFlex=\"100\" fxLayoutAlign=\"center center\">\n  <mat-card  fxLayout=\"column\"  fxFlex=\"50\">\n    <mat-card-title>Cadastro de produtos</mat-card-title>\n    <mat-card-subtitle></mat-card-subtitle>\n    <mat-card-content >\n      <form fxFlex=\"100\" fxLayout=\"column\" [formGroup]=\"form\">\n        <mat-form-field appearance=\"outline\" fxFlex=\"50\">\n          <mat-label>Nome</mat-label>\n          <input required formControlName=\"nome\" matInput placeholder=\"Placeholder\">\n          <mat-icon matSuffix>store</mat-icon>\n          <mat-hint>Digite o nome do produto</mat-hint>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" fxFlex=\"50\">\n          <mat-label>Valor</mat-label>\n          <input required formControlName=\"precoUnitario\" matInput placeholder=\"Placeholder\">\n          <mat-icon matSuffix>credit_card</mat-icon>\n          <mat-hint>Digite o valor unitário do produto</mat-hint>\n        </mat-form-field>\n        <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"onSubmit()\" style=\"color: #e6ebe4\">Cadastrar</button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedido/consulta-pedido/consulta-pedido.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedido/consulta-pedido/consulta-pedido.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxFlexAlign=\"center\" fxFlex  class=\"container\">\n  <h2>Pedidos</h2>\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n    <!-- numero Column -->\n    <ng-container matColumnDef=\"numero\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> #</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.numero}} </td>\n    </ng-container>\n\n    <!-- qtdItens Column -->\n    <ng-container matColumnDef=\"qtdItens\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Quantidade</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.qtdItens}} </td>\n    </ng-container>\n\n    <!-- valorFrete Column -->\n    <ng-container matColumnDef=\"valorFrete\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Frete</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.valorFrete | currency:'BRL':true}} </td>\n    </ng-container>\n\n    <!-- valorTotal Column -->\n    <ng-container matColumnDef=\"valorTotal\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Valor Total</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.valorTotal | currency:'BRL':true}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedido/novo-pedido/novo-pedido.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedido/novo-pedido/novo-pedido.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxFlexAlign=\"stretch\" class=\"container\">\n  <div class=\"row\" fxLayout=\"column\">\n    <h2><b>Novo pedido #{{pedido.numero }}</b></h2>\n    <form>\n      <app-cliente\n        (clienteSelecionado)=\"onClienteSelecionado($event)\">\n      </app-cliente>\n\n      <div class=\"spacer\"></div>\n\n      <app-carrinho\n        (carrinhoDeCompras)=\"onCarrinhoDeComprasPreenchido($event)\">\n      </app-carrinho>\n\n      <div class=\"spacer\"></div>\n\n      <mat-card>\n        <mat-card-header>\n          <mat-card-title>\n            <mat-icon fxFlex=\"40\" matPrefix inline=\"true\"><img src=\"assets/icones/icone-total.png\" alt=\"image\">\n            </mat-icon>\n            Total\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <form>\n            <div fxFlex=\"100\" fxLayout=\"row\">\n              <div fxFlexOffset=\"1.7\" fxFlex=\"60\" fxLayout=\"row\">\n                <div fxLayout=\"column\" fxFlex=\"85\">\n                  <mat-label>Itens:</mat-label>\n                  <mat-label>Frete:</mat-label>\n                  <mat-divider [inset]=\"true\"></mat-divider>\n                  <mat-label>Total:</mat-label>\n                </div>\n                <div fxLayout=\"column\" fxLayoutAlign=\"center end\" fxFlex=\"10\">\n                  <p>{{valorItens | currency:'BRL':true}}</p>\n                  <p>{{pedido.valorFrete | currency:'BRL':true}}</p>\n                  <mat-divider [inset]=\"true\"></mat-divider>\n                  <p>{{pedido.valorTotal | currency:'BRL':true}}</p>\n                </div>\n              </div>\n              <div fxFlex=\"40\" fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <button mat-raised-button color=\"primary\" aria-label=\"finalizar\" style=\"color: #e6ebe4\"\n                        (click)=\"finalizarPedido()\" type=\"submit\">\n                  Finalizar Pedido\n                </button>\n                <button mat-raised-button (click)=\"limparCarrinho()\">\n                  Limpar carrinho\n                </button>\n                <mat-error *ngIf=\"erro\">Selecione um cliente para finalizar a compra!</mat-error>\n              </div>\n            </div>\n          </form>\n        </mat-card-content>\n      </mat-card>\n    </form>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pages_pedido_novo_pedido_novo_pedido_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pedido/novo-pedido/novo-pedido.component */ "./src/app/pages/pedido/novo-pedido/novo-pedido.component.ts");
/* harmony import */ var _pages_pedido_consulta_pedido_consulta_pedido_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pedido/consulta-pedido/consulta-pedido.component */ "./src/app/pages/pedido/consulta-pedido/consulta-pedido.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_cadastro_cadastro_cliente_cadastro_cliente_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/cadastro/cadastro-cliente/cadastro-cliente.component */ "./src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component.ts");
/* harmony import */ var _pages_cadastro_cadastro_produto_cadastro_produto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/cadastro/cadastro-produto/cadastro-produto.component */ "./src/app/pages/cadastro/cadastro-produto/cadastro-produto.component.ts");








const appRoutes = [
    { path: 'novo-pedido', component: _pages_pedido_novo_pedido_novo_pedido_component__WEBPACK_IMPORTED_MODULE_3__["NovoPedidoComponent"] },
    { path: 'consulta-pedido', component: _pages_pedido_consulta_pedido_consulta_pedido_component__WEBPACK_IMPORTED_MODULE_4__["ConsultaPedidoComponent"] },
    { path: 'cadastro-cliente', component: _pages_cadastro_cadastro_cliente_cadastro_cliente_component__WEBPACK_IMPORTED_MODULE_6__["CadastroClienteComponent"] },
    { path: 'cadastro-produto', component: _pages_cadastro_cadastro_produto_cadastro_produto_component__WEBPACK_IMPORTED_MODULE_7__["CadastroProdutoComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'PoCECommerceWebApp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var _pages_pedido_novo_pedido_novo_pedido_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/pedido/novo-pedido/novo-pedido.component */ "./src/app/pages/pedido/novo-pedido/novo-pedido.component.ts");
/* harmony import */ var _pages_pedido_consulta_pedido_consulta_pedido_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/pedido/consulta-pedido/consulta-pedido.component */ "./src/app/pages/pedido/consulta-pedido/consulta-pedido.component.ts");
/* harmony import */ var _pages_cadastro_cadastro_cliente_cadastro_cliente_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/cadastro/cadastro-cliente/cadastro-cliente.component */ "./src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component.ts");
/* harmony import */ var _pages_cadastro_cadastro_produto_cadastro_produto_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/cadastro/cadastro-produto/cadastro-produto.component */ "./src/app/pages/cadastro/cadastro-produto/cadastro-produto.component.ts");
/* harmony import */ var _components_cliente_cliente_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/cliente/cliente.component */ "./src/app/components/cliente/cliente.component.ts");
/* harmony import */ var _components_produto_produto_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/produto/produto.component */ "./src/app/components/produto/produto.component.ts");
/* harmony import */ var _components_progress_loader_progress_loader_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/progress-loader/progress-loader.component */ "./src/app/components/progress-loader/progress-loader.component.ts");
/* harmony import */ var _services_loader_interceptor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/loader.interceptor */ "./src/app/services/loader.interceptor.ts");
/* harmony import */ var _components_carrinho_carrinho_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/carrinho/carrinho.component */ "./src/app/components/carrinho/carrinho.component.ts");
/* harmony import */ var _components_carrinho_calculo_valores_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/carrinho/calculo-valores.component */ "./src/app/components/carrinho/calculo-valores.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common/locales/pt */ "./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_35__);







































Object(_angular_common__WEBPACK_IMPORTED_MODULE_34__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_35___default.a);
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_22__["ToolbarComponent"],
            _pages_pedido_novo_pedido_novo_pedido_component__WEBPACK_IMPORTED_MODULE_23__["NovoPedidoComponent"],
            _pages_pedido_consulta_pedido_consulta_pedido_component__WEBPACK_IMPORTED_MODULE_24__["ConsultaPedidoComponent"],
            _pages_cadastro_cadastro_cliente_cadastro_cliente_component__WEBPACK_IMPORTED_MODULE_25__["CadastroClienteComponent"],
            _pages_cadastro_cadastro_produto_cadastro_produto_component__WEBPACK_IMPORTED_MODULE_26__["CadastroProdutoComponent"],
            _components_cliente_cliente_component__WEBPACK_IMPORTED_MODULE_27__["ClienteComponent"],
            _components_produto_produto_component__WEBPACK_IMPORTED_MODULE_28__["ProdutoComponent"],
            _components_progress_loader_progress_loader_component__WEBPACK_IMPORTED_MODULE_29__["ProgressLoaderComponent"],
            _components_carrinho_carrinho_component__WEBPACK_IMPORTED_MODULE_31__["CarrinhoComponent"],
            _components_carrinho_calculo_valores_component__WEBPACK_IMPORTED_MODULE_32__["CalculoValoresComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_33__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__["MatSortModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _services_loader_interceptor__WEBPACK_IMPORTED_MODULE_30__["LoaderInterceptor"], multi: true },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-BR' }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/carrinho/calculo-valores.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/carrinho/calculo-valores.component.ts ***!
  \******************************************************************/
/*! exports provided: CalculoValoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculoValoresComponent", function() { return CalculoValoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let CalculoValoresComponent = class CalculoValoresComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.valorCalculado = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            precoUnitario: [this.prod.precoUnitario],
            quantidade: [this.prod.quantidade],
            valorTotal: [this.prod.valorTotal]
        });
        this.valorCalculado.emit(this.prod);
    }
    onCalcularPrecoTotal(produto, event) {
        this.prod.valorTotal = produto.precoUnitario * event.target.value;
        this.prod.valorTotal = produto.valorTotal;
        this.prod.quantidade = event.target.value;
        if (this.prod.valorTotal > 0 && this.prod.precoUnitario !== this.prod.valorTotal) {
            this.valorCalculado.emit(this.prod);
        }
    }
};
CalculoValoresComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CalculoValoresComponent.prototype, "prod", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CalculoValoresComponent.prototype, "valorCalculado", void 0);
CalculoValoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calculo-valores',
        template: `
    <form [formGroup]="form" fxFlex>
      <div fxLayout="column">
        <div fxLayout="row" fxLayoutAlign="end">
          <input color="warn" name="quantidade" inline="true" fxFlex="15" type="text"
                 [value]="prod.quantidade"
                 (input)="onCalcularPrecoTotal(prod, $event)">
          <mat-label fxFlex="85" name="precoUnitario">
          X  {{prod.precoUnitario | currency:'BRL':true }}</mat-label>
        </div>
        <mat-label><b name="valorTotal" for="valorTotal"
                      id="valorTotal">{{prod.valorTotal | currency:'BRL':true}}</b></mat-label>
      </div>
    </form>`
    })
], CalculoValoresComponent);



/***/ }),

/***/ "./src/app/components/carrinho/carrinho.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/carrinho/carrinho.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".client-form {\r\n  margin-left: 18px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\nimg{\r\n  height: 280px;\r\n}\r\n\r\n.item-shopping-cart{\r\n  margin-bottom: 20px;\r\n  margin-left: 18px;\r\n  margin-right: 18px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJyaW5oby9jYXJyaW5oby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJyaW5oby9jYXJyaW5oby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWVudC1mb3JtIHtcclxuICBtYXJnaW4tbGVmdDogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5pbWd7XHJcbiAgaGVpZ2h0OiAyODBweDtcclxufVxyXG5cclxuLml0ZW0tc2hvcHBpbmctY2FydHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMThweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/carrinho/carrinho.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/carrinho/carrinho.component.ts ***!
  \***********************************************************/
/*! exports provided: CarrinhoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoComponent", function() { return CarrinhoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _models_carrinho_valores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/carrinho-valores */ "./src/app/models/carrinho-valores.ts");




let CarrinhoComponent = class CarrinhoComponent {
    constructor(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
        this.produtos = [];
        this.valorTotal = new _models_carrinho_valores__WEBPACK_IMPORTED_MODULE_3__["CarrinhoValores"]();
        this.produtosComValorCalculado = [];
        this.carrinhoDeCompras = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.shoppingCartService.getProdutos().subscribe(produtos => {
            this.produtos = produtos;
        }, error => {
            console.log(error);
        }, () => {
            console.log('Dados carregados');
        });
        this.valorTotal.valorTotalDeItens = 0;
        this.valorTotal.quantidadeTotalDeItens = 0;
    }
    onProdutoSelecionado(evento) {
        this.shoppingCartService.addProduto(evento.produto);
        console.log(evento);
    }
    onProdutoCalculado(valores) {
        if (this.produtosComValorCalculado.length === 0) {
            this.adicionarProduto(valores);
        }
        else {
            const valor = this.produtosComValorCalculado.find(x => x.codigoProduto === valores.codigo);
            if (valor !== undefined) {
                const newList = this.produtosComValorCalculado.filter(x => x.codigoProduto !== valor.codigoProduto);
                this.produtosComValorCalculado = newList;
                this.adicionarProduto(valores);
            }
            else {
                this.adicionarProduto(valores);
            }
        }
    }
    adicionarProduto(valores) {
        const valorTotal = new _models_carrinho_valores__WEBPACK_IMPORTED_MODULE_3__["CarrinhoValores"]();
        valorTotal.codigoProduto = valores.codigo;
        valorTotal.valorTotalDeItens = Number(valores.valorTotal);
        valorTotal.quantidadeTotalDeItens = Number(valores.quantidade);
        this.produtosComValorCalculado.push(valorTotal);
        console.log(this.produtosComValorCalculado);
        this.carrinhoDeCompras.emit({ carrinho: this.produtosComValorCalculado });
        this.shoppingCartService.setProdutosSelecionados(this.produtosComValorCalculado);
    }
};
CarrinhoComponent.ctorParameters = () => [
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CarrinhoComponent.prototype, "carrinhoDeCompras", void 0);
CarrinhoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carrinho',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carrinho.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/carrinho/carrinho.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carrinho.component.css */ "./src/app/components/carrinho/carrinho.component.css")).default]
    })
], CarrinhoComponent);



/***/ }),

/***/ "./src/app/components/cliente/cliente.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/cliente/cliente.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".client-form {\r\nmargin-left: 18px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRlL2NsaWVudGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGlCQUFpQjtFQUNmLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50ZS9jbGllbnRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpZW50LWZvcm0ge1xyXG5tYXJnaW4tbGVmdDogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/cliente/cliente.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/cliente/cliente.component.ts ***!
  \*********************************************************/
/*! exports provided: ClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteComponent", function() { return ClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_cliente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cliente.service */ "./src/app/services/cliente.service.ts");






let ClienteComponent = class ClienteComponent {
    constructor(clienteService) {
        this.clienteService = clienteService;
        this.ClientesFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options = [];
        this.listClientes = [];
        this.clienteSelecionado = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.onRefresh();
        this.clientes$ = this.ClientesFormControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
    onRefresh() {
        this.clienteService.list().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            console.error(error);
            this.handleError();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])();
        })).subscribe(dados => {
            this.listClientes = dados;
            this.options = this.listClientes.map(x => x.nome);
            console.log(this.listClientes);
        }, error => console.error(error), () => console.log('Obserservable completo!'));
    }
    handleError() {
        console.log('erro');
    }
    onSubmit() {
        this.selectedCliente = this.listClientes.find(x => x.nome === this.ClientesFormControl.value);
        this.clienteSelecionado.emit({ cliente: this.selectedCliente });
        console.log(this.selectedCliente);
    }
};
ClienteComponent.ctorParameters = () => [
    { type: _services_cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ClienteComponent.prototype, "clienteSelecionado", void 0);
ClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cliente',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cliente.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/cliente.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cliente.component.css */ "./src/app/components/cliente/cliente.component.css")).default]
    })
], ClienteComponent);



/***/ }),

/***/ "./src/app/components/produto/produto.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/produto/produto.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".client-form {\r\n  margin-left: 18px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdXRvL3Byb2R1dG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1dG8vcHJvZHV0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWVudC1mb3JtIHtcclxuICBtYXJnaW4tbGVmdDogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/produto/produto.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/produto/produto.component.ts ***!
  \*********************************************************/
/*! exports provided: ProdutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoComponent", function() { return ProdutoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_produto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/produto.service */ "./src/app/services/produto.service.ts");






let ProdutoComponent = class ProdutoComponent {
    constructor(produtoService) {
        this.produtoService = produtoService;
        this.produtoFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options = [];
        this.listProdutos = [];
        this.produtoSelecionado = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.onRefresh();
        this.produtos$ = this.produtoFormControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
    onRefresh() {
        this.produtoService.list().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            console.error(error);
            this.handleError();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])();
        })).subscribe(dados => {
            this.listProdutos = dados;
            this.options = this.listProdutos.map(x => x.nome);
            console.log(this.listProdutos);
        }, error => console.error(error), () => console.log('Obserservable completo!'));
    }
    handleError() {
        // this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
    }
    onSubmit() {
        this.selectedProduto = this.listProdutos.find(x => x.nome === this.produtoFormControl.value);
        this.produtoSelecionado.emit({ produto: this.selectedProduto });
        console.log(this.selectedProduto);
    }
};
ProdutoComponent.ctorParameters = () => [
    { type: _services_produto_service__WEBPACK_IMPORTED_MODULE_5__["ProdutoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProdutoComponent.prototype, "produtoSelecionado", void 0);
ProdutoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-produto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./produto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/produto/produto.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./produto.component.css */ "./src/app/components/produto/produto.component.css")).default]
    })
], ProdutoComponent);



/***/ }),

/***/ "./src/app/components/progress-loader/progress-loader.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/progress-loader/progress-loader.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZ3Jlc3MtbG9hZGVyL3Byb2dyZXNzLWxvYWRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/progress-loader/progress-loader.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/progress-loader/progress-loader.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProgressLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressLoaderComponent", function() { return ProgressLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/loader.service */ "./src/app/services/loader.service.ts");



let ProgressLoaderComponent = class ProgressLoaderComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.isLoading = this.loaderService.isLoading;
        console.log(this.isLoading);
    }
    ngOnInit() {
    }
};
ProgressLoaderComponent.ctorParameters = () => [
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
];
ProgressLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-progress-loader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./progress-loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/progress-loader/progress-loader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./progress-loader.component.css */ "./src/app/components/progress-loader/progress-loader.component.css")).default]
    })
], ProgressLoaderComponent);



/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-spacer {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n}\r\n\r\n.spacer {\r\n  margin-left: 50px;\r\n  text-align: center;\r\n  font-size: 0.8em;\r\n}\r\n\r\nimg{\r\n  height: 50px;\r\n  margin-left: 50px;\r\n}\r\n\r\nmat-toolbar{\r\n  min-height:54px;\r\n  max-height:58px;\r\n  background: snow;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tc3BhY2VyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuaW1ne1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxubWF0LXRvb2xiYXJ7XHJcbiAgbWluLWhlaWdodDo1NHB4O1xyXG4gIG1heC1oZWlnaHQ6NThweDtcclxuICBiYWNrZ3JvdW5kOiBzbm93O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToolbarComponent = class ToolbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toolbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/toolbar/toolbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toolbar.component.css */ "./src/app/components/toolbar/toolbar.component.css")).default]
    })
], ToolbarComponent);



/***/ }),

/***/ "./src/app/models/carrinho-valores.ts":
/*!********************************************!*\
  !*** ./src/app/models/carrinho-valores.ts ***!
  \********************************************/
/*! exports provided: CarrinhoValores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoValores", function() { return CarrinhoValores; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CarrinhoValores {
}


/***/ }),

/***/ "./src/app/models/pedido.ts":
/*!**********************************!*\
  !*** ./src/app/models/pedido.ts ***!
  \**********************************/
/*! exports provided: Pedido */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pedido", function() { return Pedido; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Pedido {
}


/***/ }),

/***/ "./src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p{\r\n  margin-top: 10px;\r\n  margin-left:50px ;\r\n  color: lightslategrey;\r\n}\r\nmat-card{\r\n  max-width: 600px;\r\n  margin-top: 50px;\r\n  padding: 25px;\r\n}\r\nmat-form-field{\r\n  margin-top: 10px;\r\n}\r\nbutton{\r\n  margin-top: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FkYXN0cm8vY2FkYXN0cm8tY2xpZW50ZS9jYWRhc3Ryby1jbGllbnRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FkYXN0cm8vY2FkYXN0cm8tY2xpZW50ZS9jYWRhc3Ryby1jbGllbnRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6NTBweCA7XHJcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xyXG59XHJcbm1hdC1jYXJke1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CadastroClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroClienteComponent", function() { return CadastroClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/cliente.service */ "./src/app/services/cliente.service.ts");




let CadastroClienteComponent = class CadastroClienteComponent {
    constructor(formBuilder, clienteService) {
        this.formBuilder = formBuilder;
        this.clienteService = clienteService;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            codigo: [Math.floor(1000 + Math.random() * 9000)],
            nome: [null]
        });
    }
    onSubmit() {
        console.log(this.form.value);
        if (this.form.value.nome) {
            this.clienteService.save(this.form.value).subscribe(value => {
                console.log('valore retoronado' + value);
            });
        }
    }
};
CadastroClienteComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"] }
];
CadastroClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cadastro-cliente',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cadastro-cliente.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cadastro-cliente.component.css */ "./src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component.css")).default]
    })
], CadastroClienteComponent);



/***/ }),

/***/ "./src/app/pages/cadastro/cadastro-produto/cadastro-produto.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro-produto/cadastro-produto.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p{\r\n  margin-top: 10px;\r\n  margin-left:50px ;\r\n  color: lightslategrey;\r\n}\r\nmat-card{\r\n  max-width: 600px;\r\n  margin-top: 50px;\r\n  padding: 25px;\r\n}\r\nmat-form-field{\r\n  margin-top: 10px;\r\n}\r\nbutton{\r\n  margin-top: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FkYXN0cm8vY2FkYXN0cm8tcHJvZHV0by9jYWRhc3Ryby1wcm9kdXRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FkYXN0cm8vY2FkYXN0cm8tcHJvZHV0by9jYWRhc3Ryby1wcm9kdXRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6NTBweCA7XHJcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xyXG59XHJcbm1hdC1jYXJke1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/cadastro/cadastro-produto/cadastro-produto.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro-produto/cadastro-produto.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CadastroProdutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroProdutoComponent", function() { return CadastroProdutoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/produto.service */ "./src/app/services/produto.service.ts");




let CadastroProdutoComponent = class CadastroProdutoComponent {
    constructor(formBuilder, produtoService) {
        this.formBuilder = formBuilder;
        this.produtoService = produtoService;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            codigo: [Math.floor(1000 + Math.random() * 9000)],
            nome: [null],
            precoUnitario: [null]
        });
    }
    onSubmit() {
        console.log(this.form.value);
        if (this.form.value.nome && this.form.value.precoUnitario) {
            this.produtoService.save(this.form.value).subscribe(value => {
                console.log(value + 'Salvo com sucesso');
            });
        }
    }
};
CadastroProdutoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"] }
];
CadastroProdutoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cadastro-produto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cadastro-produto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cadastro-produto/cadastro-produto.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cadastro-produto.component.css */ "./src/app/pages/cadastro/cadastro-produto/cadastro-produto.component.css")).default]
    })
], CadastroProdutoComponent);



/***/ }),

/***/ "./src/app/pages/pedido/consulta-pedido/consulta-pedido.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/pedido/consulta-pedido/consulta-pedido.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  margin-top: 10px;\r\n  margin-left: 50px;\r\n  margin-bottom: 50px;\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n  width: 93%;\r\n}\r\n\r\nth.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n\r\nh2{\r\n  margin-top: 10px;\r\n  margin-left:50px ;\r\n  color: lightslategrey;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVkaWRvL2NvbnN1bHRhLXBlZGlkby9jb25zdWx0YS1wZWRpZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFPO1VBQVAsT0FBTztFQUNQLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGVkaWRvL2NvbnN1bHRhLXBlZGlkby9jb25zdWx0YS1wZWRpZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgZmxleDogMTtcclxuICB3aWR0aDogOTMlO1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmgye1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6NTBweCA7XHJcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/pedido/consulta-pedido/consulta-pedido.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/pedido/consulta-pedido/consulta-pedido.component.ts ***!
  \***************************************************************************/
/*! exports provided: ConsultaPedidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaPedidoComponent", function() { return ConsultaPedidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _services_pedido_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/pedido.service */ "./src/app/services/pedido.service.ts");





let ConsultaPedidoComponent = class ConsultaPedidoComponent {
    constructor(pedidoService) {
        this.pedidoService = pedidoService;
        this.displayedColumns = ['numero', 'qtdItens', 'valorFrete', 'valorTotal'];
    }
    ngOnInit() {
        this.pedidoService.list().subscribe(value => {
            const data = value;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            console.log(data);
        });
        this.dataSource.sort = this.sort;
    }
};
ConsultaPedidoComponent.ctorParameters = () => [
    { type: _services_pedido_service__WEBPACK_IMPORTED_MODULE_4__["PedidoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], ConsultaPedidoComponent.prototype, "sort", void 0);
ConsultaPedidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consulta-pedido',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./consulta-pedido.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedido/consulta-pedido/consulta-pedido.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./consulta-pedido.component.css */ "./src/app/pages/pedido/consulta-pedido/consulta-pedido.component.css")).default]
    })
], ConsultaPedidoComponent);



/***/ }),

/***/ "./src/app/pages/pedido/novo-pedido/novo-pedido.component.css":
/*!********************************************************************!*\
  !*** ./src/app/pages/pedido/novo-pedido/novo-pedido.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n  margin: 25px;\r\n}\r\n.row{\r\n  margin-left: 50px;\r\n  margin-right: 50px;\r\n}\r\n.spacer{\r\n  margin-bottom: 25px;\r\n}\r\nimg{\r\n  max-height: 20px;\r\n}\r\nbutton{\r\n  margin-bottom: 20px;\r\n}\r\nmat-label{\r\n  font-size: 1.4em;\r\n  margin-bottom: 25px;\r\n  margin-top: 10px;\r\n  color: lightslategrey;\r\n}\r\np{\r\n  font-size: 1.2em;\r\n  margin-bottom: 25px;\r\n  margin-top: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVkaWRvL25vdm8tcGVkaWRvL25vdm8tcGVkaWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wZWRpZG8vbm92by1wZWRpZG8vbm92by1wZWRpZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgbWFyZ2luOiAyNXB4O1xyXG59XHJcbi5yb3d7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uc3BhY2Vye1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuaW1ne1xyXG4gIG1heC1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5tYXQtbGFiZWx7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xyXG59XHJcbnB7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/pedido/novo-pedido/novo-pedido.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/pedido/novo-pedido/novo-pedido.component.ts ***!
  \*******************************************************************/
/*! exports provided: NovoPedidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoPedidoComponent", function() { return NovoPedidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_pedido_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/pedido.service */ "./src/app/services/pedido.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _models_pedido__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/pedido */ "./src/app/models/pedido.ts");
/* harmony import */ var _services_calculo_frete_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/calculo-frete.service */ "./src/app/services/calculo-frete.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let NovoPedidoComponent = class NovoPedidoComponent {
    constructor(pedidoService, shoppingCartService, calculoFreteService, router) {
        this.pedidoService = pedidoService;
        this.shoppingCartService = shoppingCartService;
        this.calculoFreteService = calculoFreteService;
        this.router = router;
        this.pedido = new _models_pedido__WEBPACK_IMPORTED_MODULE_4__["Pedido"]();
        this.produtos = [];
        this.erro = false;
    }
    ngOnInit() {
        this.pedido.numero = Math.floor(10000000 + Math.random() * 90000000);
    }
    onClienteSelecionado(clienteSelecionado) {
        console.log(clienteSelecionado.cliente);
        this.pedido.cliente = clienteSelecionado.cliente;
    }
    onCarrinhoDeComprasPreenchido(produtosCarrinho) {
        this.produtos = produtosCarrinho.carrinho;
        this.calcularPrecoTotal(this.produtos);
    }
    calcularPrecoTotal(produtos) {
        let valorTotal = 0;
        let totalItens = 0;
        this.shoppingCartService.getProdutosSelecionados().subscribe(valor => {
            produtos = valor;
        });
        produtos.forEach(valor => {
            valorTotal += Number(valor.valorTotalDeItens);
            totalItens += Number(valor.quantidadeTotalDeItens);
        });
        this.valorItens = valorTotal;
        this.valorTotal = valorTotal;
        this.pedido.qtdItens = totalItens;
        this.pedido.valorTotal = valorTotal;
        this.calculoFreteService.calcularFrete({ totalItens }).subscribe(value => {
            this.pedido.valorFrete = Number(value);
        });
        console.log('Valor TOtal: ' + this.valorTotal);
    }
    limparCarrinho() {
        this.shoppingCartService.limparProdutos();
    }
    ngOnChanges() {
        console.log('Context' + this);
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this.calcularPrecoTotal(this.produtos);
        }, 0);
    }
    finalizarPedido() {
        console.log(this.pedido);
        if (this.pedido.cliente) {
            this.pedidoService.save(this.pedido).subscribe(dados => console.log(dados));
            this.router.navigate(['/consulta-pedido']);
        }
        else {
            this.erro = true;
        }
    }
};
NovoPedidoComponent.ctorParameters = () => [
    { type: _services_pedido_service__WEBPACK_IMPORTED_MODULE_2__["PedidoService"] },
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"] },
    { type: _services_calculo_frete_service__WEBPACK_IMPORTED_MODULE_5__["CalculoFreteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
NovoPedidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-novo-pedido',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./novo-pedido.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedido/novo-pedido/novo-pedido.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./novo-pedido.component.css */ "./src/app/pages/pedido/novo-pedido/novo-pedido.component.css")).default]
    })
], NovoPedidoComponent);



/***/ }),

/***/ "./src/app/services/calculo-frete.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/calculo-frete.service.ts ***!
  \***************************************************/
/*! exports provided: CalculoFreteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculoFreteService", function() { return CalculoFreteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let CalculoFreteService = class CalculoFreteService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    calcularFrete(totalItens) {
        return this.httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].frete_api_url}calculofrete`, totalItens);
    }
};
CalculoFreteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CalculoFreteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CalculoFreteService);



/***/ }),

/***/ "./src/app/services/cliente.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/cliente.service.ts ***!
  \*********************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-core */ "./src/app/services/service-core.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





let ClienteService = class ClienteService extends _service_core__WEBPACK_IMPORTED_MODULE_2__["ServiceCore"] {
    constructor(httpClient) {
        super(httpClient, `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url}cliente`);
        this.httpClient = httpClient;
    }
};
ClienteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ClienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClienteService);



/***/ }),

/***/ "./src/app/services/loader.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/services/loader.interceptor.ts ***!
  \************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let LoaderInterceptor = class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    intercept(req, next) {
        this.loaderService.show();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.loaderService.hide()));
    }
};
LoaderInterceptor.ctorParameters = () => [
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
];
LoaderInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoaderInterceptor);



/***/ }),

/***/ "./src/app/services/loader.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LoaderService = class LoaderService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    show() {
        this.isLoading.next(true);
    }
    hide() {
        this.isLoading.next(false);
    }
};
LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoaderService);



/***/ }),

/***/ "./src/app/services/pedido.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/pedido.service.ts ***!
  \********************************************/
/*! exports provided: PedidoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoService", function() { return PedidoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-core */ "./src/app/services/service-core.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





let PedidoService = class PedidoService extends _service_core__WEBPACK_IMPORTED_MODULE_2__["ServiceCore"] {
    constructor(httpClient) {
        super(httpClient, `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url}pedido`);
        this.httpClient = httpClient;
    }
};
PedidoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PedidoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PedidoService);



/***/ }),

/***/ "./src/app/services/produto.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/produto.service.ts ***!
  \*********************************************/
/*! exports provided: ProdutoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoService", function() { return ProdutoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service-core */ "./src/app/services/service-core.ts");





let ProdutoService = class ProdutoService extends _service_core__WEBPACK_IMPORTED_MODULE_4__["ServiceCore"] {
    constructor(httpClient) {
        super(httpClient, `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url}produto`);
        this.httpClient = httpClient;
    }
};
ProdutoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProdutoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProdutoService);



/***/ }),

/***/ "./src/app/services/service-core.ts":
/*!******************************************!*\
  !*** ./src/app/services/service-core.ts ***!
  \******************************************/
/*! exports provided: ServiceCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCore", function() { return ServiceCore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


class ServiceCore {
    constructor(httpClient, API_URL) {
        this.httpClient = httpClient;
        this.API_URL = API_URL;
    }
    list() {
        return this.httpClient.get(this.API_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(console.log));
    }
    save(record) {
        return this.httpClient.post(this.API_URL, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
    delete(id) {
        return this.httpClient.delete(`${this.API_URL}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
    update(id, record) {
        return this.httpClient.put(`${this.API_URL}/${id}`, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
}


/***/ }),

/***/ "./src/app/services/shopping-cart.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/shopping-cart.service.ts ***!
  \***************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ShoppingCartService = class ShoppingCartService {
    constructor() {
        this.produtos = [];
        this.produtosSelecionados = [];
    }
    addProduto(produto) {
        produto.quantidade = 1;
        produto.valorTotal = produto.precoUnitario;
        if (!this.produtos.find(x => x.codigo === produto.codigo)) {
            this.produtos.push(produto);
        }
    }
    getProdutos() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observador => {
            setTimeout(() => {
                observador.next(this.produtos);
            }, 2000);
        });
    }
    limparProdutos() {
        console.log(this.produtos);
        this.produtos = [];
        console.log(this.produtos);
    }
    getProdutosSelecionados() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observador => {
            setTimeout(() => {
                observador.next(this.produtosSelecionados);
            }, 2000);
        });
    }
    setProdutosSelecionados(produtosSelecionados) {
        this.produtosSelecionados = produtosSelecionados;
    }
};
ShoppingCartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ShoppingCartService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    api_url: 'http://localhost:8080/PoCECommerce/api/',
    frete_api_url: 'http://localhost:8080/PoCCalculoFrete/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Raphael Policena\Desktop\Fullstack-Developer\PoCECommerceWebApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map