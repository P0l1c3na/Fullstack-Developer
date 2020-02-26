function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-toolbar></app-toolbar>\n<app-progress-loader></app-progress-loader>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/carrinho/carrinho.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/carrinho/carrinho.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCarrinhoCarrinhoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <mat-icon fxFlex=\"25\" matPrefix inline=\"true\">add_shopping_cart</mat-icon>\n      Produto\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <app-produto (produtoSelecionado)=\"onProdutoSelecionado($event)\" ></app-produto>\n    <mat-card *ngFor=\"let prod of produtos\" class=\"item-shopping-cart\">\n      <div fxFlex=\"85\">\n        <mat-card-subtitle>{{prod.codigo}}</mat-card-subtitle>\n        <mat-card-title>{{prod.nome}}</mat-card-title>\n      </div>\n      <div fxFlex=\"15\">\n        <app-calculo-valores [prod]=\"prod\" (valorCalculado)=\"onProdutoCalculado($event)\"></app-calculo-valores>\n      </div>\n    </mat-card>\n    <div fxLayoutAlign=\"center\" *ngIf=\"produtos.length === 0\">\n      <img src=\"assets/icones/imagem-carrinho-empty-state.png\" alt=\"image\">\n    </div>\n  </mat-card-content>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/cliente.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/cliente.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsClienteClienteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <mat-icon fxFlex=\"25\" matPrefix inline=\"true\">person_outline</mat-icon>\n      Cliente\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form fxFlex class=\"client-form\">\n      <mat-form-field fxFlex=\"50\">\n        <mat-icon matSuffix inline=\"true\" *ngIf=\"!selectedCliente\">search</mat-icon>\n        <input type=\"text\"\n               placeholder=\"Selecione um cliente\"\n               aria-label=\"Cliente\"\n               matInput\n               required\n               [formControl]=\"ClientesFormControl\"\n               [matAutocomplete]=\"auto\">\n        <button mat-button *ngIf=\"selectedCliente\" matSuffix mat-icon-button aria-label=\"Clear\"\n                (click)=\"ClientesFormControl.reset()\">\n          <mat-icon>close</mat-icon>\n        </button>\n        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" (optionSelected)=\"onSubmit()\">\n          <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>\n  </mat-card-content>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/produto/produto.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/produto/produto.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProdutoProdutoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <form fxFlex class=\"client-form\">\n      <mat-form-field fxFlex=\"50\">\n        <mat-icon matSuffix  inline=\"true\" *ngIf=\"!selectedProduto\">search</mat-icon>\n        <input type=\"text\"\n               placeholder=\"Selecione o produto\"\n               aria-label=\"Produto\"\n               matInput\n               [formControl]=\"produtoFormControl\"\n               [matAutocomplete]=\"auto\">\n        <button mat-button *ngIf=\"selectedProduto\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"produtoFormControl.reset()\">\n          <mat-icon>close</mat-icon>\n        </button>\n        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" (optionSelected)=\"onSubmit()\">\n          <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/progress-loader/progress-loader.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/progress-loader/progress-loader.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProgressLoaderProgressLoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-progress-bar mode=\"indeterminate\" color=\"accent\" *ngIf=\"isLoading | async\"></mat-progress-bar>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/toolbar/toolbar.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/toolbar/toolbar.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsToolbarToolbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"#FFFFFF\">\n  <mat-toolbar-row>\n    <span> <img src=\"assets/icones/logotipo-maximatech.png\" alt=\"image\"></span>\n    <span class=\"item-spacer\"></span>\n    <button class=\"item\" mat-button [matMenuTriggerFor]=\"menuCadastro\">Cadastro</button>\n    <mat-menu #menuCadastro=\"matMenu\" xPosition=\"after\">\n      <button routerLink=\"/cadastro-cliente\" mat-menu-item>Cliente</button>\n      <button routerLink=\"/cadastro-produto\" mat-menu-item>Produto</button>\n    </mat-menu>\n\n    <button class=\"item\" mat-button [matMenuTriggerFor]=\"menuPedido\">Pedido</button>\n    <mat-menu #menuPedido=\"matMenu\" xPosition=\"after\">\n      <button routerLink=\"/novo-pedido\" mat-menu-item>Novo Pedido</button>\n      <button routerLink=\"/consulta-pedido\" mat-menu-item>Consulta Pedido</button>\n    </mat-menu>\n    <span class=\"example-spacer\"></span>\n  </mat-toolbar-row>\n</mat-toolbar>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCadastroCadastroClienteCadastroClienteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxFlex=\"100\" fxLayoutAlign=\"center center\">\n  <mat-card  fxLayout=\"column\"  fxFlex=\"50\">\n    <mat-card-title>Cadastro de clientes</mat-card-title>\n    <mat-card-subtitle></mat-card-subtitle>\n    <mat-card-content>\n      <form fxFlex=\"100\" fxLayout=\"column\" [formGroup]=\"form\">\n        <mat-form-field appearance=\"outline\" fxFlex=\"100\">\n          <mat-label>Nome</mat-label>\n          <input required formControlName=\"nome\" matInput placeholder=\"Placeholder\">\n          <mat-icon matSuffix>person_outline</mat-icon>\n          <mat-hint>Digite o nome do cliente</mat-hint>\n        </mat-form-field>\n\n        <button mat-raised-button color=\"primary\" style=\"color: #e6ebe4\" type=\"submit\" (click)=\"onSubmit()\">Cadastrar</button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cadastro-produto/cadastro-produto.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cadastro-produto/cadastro-produto.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCadastroCadastroProdutoCadastroProdutoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxFlex=\"100\" fxLayoutAlign=\"center center\">\n  <mat-card  fxLayout=\"column\"  fxFlex=\"50\">\n    <mat-card-title>Cadastro de produtos</mat-card-title>\n    <mat-card-subtitle></mat-card-subtitle>\n    <mat-card-content >\n      <form fxFlex=\"100\" fxLayout=\"column\" [formGroup]=\"form\">\n        <mat-form-field appearance=\"outline\" fxFlex=\"50\">\n          <mat-label>Nome</mat-label>\n          <input required formControlName=\"nome\" matInput placeholder=\"Placeholder\">\n          <mat-icon matSuffix>store</mat-icon>\n          <mat-hint>Digite o nome do produto</mat-hint>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" fxFlex=\"50\">\n          <mat-label>Valor</mat-label>\n          <input required formControlName=\"precoUnitario\" matInput placeholder=\"Placeholder\">\n          <mat-icon matSuffix>credit_card</mat-icon>\n          <mat-hint>Digite o valor unitário do produto</mat-hint>\n        </mat-form-field>\n        <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"onSubmit()\" style=\"color: #e6ebe4\">Cadastrar</button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedido/consulta-pedido/consulta-pedido.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedido/consulta-pedido/consulta-pedido.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPedidoConsultaPedidoConsultaPedidoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxFlexAlign=\"center\" fxFlex  class=\"container\">\n  <h2>Pedidos</h2>\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n    <!-- numero Column -->\n    <ng-container matColumnDef=\"numero\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> #</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.numero}} </td>\n    </ng-container>\n\n    <!-- qtdItens Column -->\n    <ng-container matColumnDef=\"qtdItens\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Quantidade</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.qtdItens}} </td>\n    </ng-container>\n\n    <!-- valorFrete Column -->\n    <ng-container matColumnDef=\"valorFrete\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Frete</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.valorFrete | currency:'BRL':true}} </td>\n    </ng-container>\n\n    <!-- valorTotal Column -->\n    <ng-container matColumnDef=\"valorTotal\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Valor Total</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.valorTotal | currency:'BRL':true}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedido/novo-pedido/novo-pedido.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedido/novo-pedido/novo-pedido.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPedidoNovoPedidoNovoPedidoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxFlexAlign=\"stretch\" class=\"container\">\n  <div class=\"row\" fxLayout=\"column\">\n    <h2><b>Novo pedido #{{pedido.numero }}</b></h2>\n    <form>\n      <app-cliente\n        (clienteSelecionado)=\"onClienteSelecionado($event)\">\n      </app-cliente>\n\n      <div class=\"spacer\"></div>\n\n      <app-carrinho\n        (carrinhoDeCompras)=\"onCarrinhoDeComprasPreenchido($event)\">\n      </app-carrinho>\n\n      <div class=\"spacer\"></div>\n\n      <mat-card>\n        <mat-card-header>\n          <mat-card-title>\n            <mat-icon fxFlex=\"40\" matPrefix inline=\"true\"><img src=\"assets/icones/icone-total.png\" alt=\"image\">\n            </mat-icon>\n            Total\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <form>\n            <div fxFlex=\"100\" fxLayout=\"row\">\n              <div fxFlexOffset=\"1.7\" fxFlex=\"60\" fxLayout=\"row\">\n                <div fxLayout=\"column\" fxFlex=\"85\">\n                  <mat-label>Itens:</mat-label>\n                  <mat-label>Frete:</mat-label>\n                  <mat-divider [inset]=\"true\"></mat-divider>\n                  <mat-label>Total:</mat-label>\n                </div>\n                <div fxLayout=\"column\" fxLayoutAlign=\"center end\" fxFlex=\"10\">\n                  <p>{{valorItens | currency:'BRL':true}}</p>\n                  <p>{{pedido.valorFrete | currency:'BRL':true}}</p>\n                  <mat-divider [inset]=\"true\"></mat-divider>\n                  <p>{{pedido.valorTotal | currency:'BRL':true}}</p>\n                </div>\n              </div>\n              <div fxFlex=\"40\" fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <button mat-raised-button color=\"primary\" aria-label=\"finalizar\" style=\"color: #e6ebe4\"\n                        (click)=\"finalizarPedido()\" type=\"submit\">\n                  Finalizar Pedido\n                </button>\n                <button mat-raised-button (click)=\"limparCarrinho()\">\n                  Limpar carrinho\n                </button>\n                <mat-error *ngIf=\"erro\">Selecione um cliente para finalizar a compra!</mat-error>\n              </div>\n            </div>\n          </form>\n        </mat-card-content>\n      </mat-card>\n    </form>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
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
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _pages_pedido_novo_pedido_novo_pedido_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/pedido/novo-pedido/novo-pedido.component */
    "./src/app/pages/pedido/novo-pedido/novo-pedido.component.ts");
    /* harmony import */


    var _pages_pedido_consulta_pedido_consulta_pedido_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/pedido/consulta-pedido/consulta-pedido.component */
    "./src/app/pages/pedido/consulta-pedido/consulta-pedido.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_cadastro_cadastro_cliente_cadastro_cliente_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/cadastro/cadastro-cliente/cadastro-cliente.component */
    "./src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component.ts");
    /* harmony import */


    var _pages_cadastro_cadastro_produto_cadastro_produto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/cadastro/cadastro-produto/cadastro-produto.component */
    "./src/app/pages/cadastro/cadastro-produto/cadastro-produto.component.ts");

    var appRoutes = [{
      path: 'novo-pedido',
      component: _pages_pedido_novo_pedido_novo_pedido_component__WEBPACK_IMPORTED_MODULE_3__["NovoPedidoComponent"]
    }, {
      path: 'consulta-pedido',
      component: _pages_pedido_consulta_pedido_consulta_pedido_component__WEBPACK_IMPORTED_MODULE_4__["ConsultaPedidoComponent"]
    }, {
      path: 'cadastro-cliente',
      component: _pages_cadastro_cadastro_cliente_cadastro_cliente_component__WEBPACK_IMPORTED_MODULE_6__["CadastroClienteComponent"]
    }, {
      path: 'cadastro-produto',
      component: _pages_cadastro_cadastro_produto_cadastro_produto_component__WEBPACK_IMPORTED_MODULE_7__["CadastroProdutoComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'PoCECommerceWebApp';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/toolbar/toolbar.component */
    "./src/app/components/toolbar/toolbar.component.ts");
    /* harmony import */


    var _pages_pedido_novo_pedido_novo_pedido_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pages/pedido/novo-pedido/novo-pedido.component */
    "./src/app/pages/pedido/novo-pedido/novo-pedido.component.ts");
    /* harmony import */


    var _pages_pedido_consulta_pedido_consulta_pedido_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pages/pedido/consulta-pedido/consulta-pedido.component */
    "./src/app/pages/pedido/consulta-pedido/consulta-pedido.component.ts");
    /* harmony import */


    var _pages_cadastro_cadastro_cliente_cadastro_cliente_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pages/cadastro/cadastro-cliente/cadastro-cliente.component */
    "./src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component.ts");
    /* harmony import */


    var _pages_cadastro_cadastro_produto_cadastro_produto_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pages/cadastro/cadastro-produto/cadastro-produto.component */
    "./src/app/pages/cadastro/cadastro-produto/cadastro-produto.component.ts");
    /* harmony import */


    var _components_cliente_cliente_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/cliente/cliente.component */
    "./src/app/components/cliente/cliente.component.ts");
    /* harmony import */


    var _components_produto_produto_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/produto/produto.component */
    "./src/app/components/produto/produto.component.ts");
    /* harmony import */


    var _components_progress_loader_progress_loader_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/progress-loader/progress-loader.component */
    "./src/app/components/progress-loader/progress-loader.component.ts");
    /* harmony import */


    var _services_loader_interceptor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./services/loader.interceptor */
    "./src/app/services/loader.interceptor.ts");
    /* harmony import */


    var _components_carrinho_carrinho_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/carrinho/carrinho.component */
    "./src/app/components/carrinho/carrinho.component.ts");
    /* harmony import */


    var _components_carrinho_calculo_valores_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/carrinho/calculo-valores.component */
    "./src/app/components/carrinho/calculo-valores.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/common/locales/pt */
    "./node_modules/@angular/common/locales/pt.js");
    /* harmony import */


    var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_35___default =
    /*#__PURE__*/
    __webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_35__);

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_34__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_35___default.a);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_22__["ToolbarComponent"], _pages_pedido_novo_pedido_novo_pedido_component__WEBPACK_IMPORTED_MODULE_23__["NovoPedidoComponent"], _pages_pedido_consulta_pedido_consulta_pedido_component__WEBPACK_IMPORTED_MODULE_24__["ConsultaPedidoComponent"], _pages_cadastro_cadastro_cliente_cadastro_cliente_component__WEBPACK_IMPORTED_MODULE_25__["CadastroClienteComponent"], _pages_cadastro_cadastro_produto_cadastro_produto_component__WEBPACK_IMPORTED_MODULE_26__["CadastroProdutoComponent"], _components_cliente_cliente_component__WEBPACK_IMPORTED_MODULE_27__["ClienteComponent"], _components_produto_produto_component__WEBPACK_IMPORTED_MODULE_28__["ProdutoComponent"], _components_progress_loader_progress_loader_component__WEBPACK_IMPORTED_MODULE_29__["ProgressLoaderComponent"], _components_carrinho_carrinho_component__WEBPACK_IMPORTED_MODULE_31__["CarrinhoComponent"], _components_carrinho_calculo_valores_component__WEBPACK_IMPORTED_MODULE_32__["CalculoValoresComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_33__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__["MatSortModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
        useClass: _services_loader_interceptor__WEBPACK_IMPORTED_MODULE_30__["LoaderInterceptor"],
        multi: true
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
        useValue: 'pt-BR'
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/carrinho/calculo-valores.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/carrinho/calculo-valores.component.ts ***!
    \******************************************************************/

  /*! exports provided: CalculoValoresComponent */

  /***/
  function srcAppComponentsCarrinhoCalculoValoresComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalculoValoresComponent", function () {
      return CalculoValoresComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var CalculoValoresComponent =
    /*#__PURE__*/
    function () {
      function CalculoValoresComponent(formBuilder) {
        _classCallCheck(this, CalculoValoresComponent);

        this.formBuilder = formBuilder;
        this.valorCalculado = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CalculoValoresComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            precoUnitario: [this.prod.precoUnitario],
            quantidade: [this.prod.quantidade],
            valorTotal: [this.prod.valorTotal]
          });
          this.valorCalculado.emit(this.prod);
        }
      }, {
        key: "onCalcularPrecoTotal",
        value: function onCalcularPrecoTotal(produto, event) {
          this.prod.valorTotal = produto.precoUnitario * event.target.value;
          this.prod.valorTotal = produto.valorTotal;
          this.prod.quantidade = event.target.value;

          if (this.prod.valorTotal > 0 && this.prod.precoUnitario !== this.prod.valorTotal) {
            this.valorCalculado.emit(this.prod);
          }
        }
      }]);

      return CalculoValoresComponent;
    }();

    CalculoValoresComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CalculoValoresComponent.prototype, "prod", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CalculoValoresComponent.prototype, "valorCalculado", void 0);
    CalculoValoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-calculo-valores',
      template: "\n    <form [formGroup]=\"form\" fxFlex>\n      <div fxLayout=\"column\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"end\">\n          <input color=\"warn\" name=\"quantidade\" inline=\"true\" fxFlex=\"15\" type=\"text\"\n                 [value]=\"prod.quantidade\"\n                 (input)=\"onCalcularPrecoTotal(prod, $event)\">\n          <mat-label fxFlex=\"85\" name=\"precoUnitario\">\n          X  {{prod.precoUnitario | currency:'BRL':true }}</mat-label>\n        </div>\n        <mat-label><b name=\"valorTotal\" for=\"valorTotal\"\n                      id=\"valorTotal\">{{prod.valorTotal | currency:'BRL':true}}</b></mat-label>\n      </div>\n    </form>"
    })], CalculoValoresComponent);
    /***/
  },

  /***/
  "./src/app/components/carrinho/carrinho.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/carrinho/carrinho.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCarrinhoCarrinhoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".client-form {\r\n  margin-left: 18px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\nimg{\r\n  height: 280px;\r\n}\r\n\r\n.item-shopping-cart{\r\n  margin-bottom: 20px;\r\n  margin-left: 18px;\r\n  margin-right: 18px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJyaW5oby9jYXJyaW5oby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJyaW5oby9jYXJyaW5oby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWVudC1mb3JtIHtcclxuICBtYXJnaW4tbGVmdDogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5pbWd7XHJcbiAgaGVpZ2h0OiAyODBweDtcclxufVxyXG5cclxuLml0ZW0tc2hvcHBpbmctY2FydHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMThweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/carrinho/carrinho.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/carrinho/carrinho.component.ts ***!
    \***********************************************************/

  /*! exports provided: CarrinhoComponent */

  /***/
  function srcAppComponentsCarrinhoCarrinhoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarrinhoComponent", function () {
      return CarrinhoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/shopping-cart.service */
    "./src/app/services/shopping-cart.service.ts");
    /* harmony import */


    var _models_carrinho_valores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/carrinho-valores */
    "./src/app/models/carrinho-valores.ts");

    var CarrinhoComponent =
    /*#__PURE__*/
    function () {
      function CarrinhoComponent(shoppingCartService) {
        _classCallCheck(this, CarrinhoComponent);

        this.shoppingCartService = shoppingCartService;
        this.produtos = [];
        this.valorTotal = new _models_carrinho_valores__WEBPACK_IMPORTED_MODULE_3__["CarrinhoValores"]();
        this.produtosComValorCalculado = [];
        this.carrinhoDeCompras = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CarrinhoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.shoppingCartService.getProdutos().subscribe(function (produtos) {
            _this.produtos = produtos;
          }, function (error) {
            console.log(error);
          }, function () {
            console.log('Dados carregados');
          });
          this.valorTotal.valorTotalDeItens = 0;
          this.valorTotal.quantidadeTotalDeItens = 0;
        }
      }, {
        key: "onProdutoSelecionado",
        value: function onProdutoSelecionado(evento) {
          this.shoppingCartService.addProduto(evento.produto);
          console.log(evento);
        }
      }, {
        key: "onProdutoCalculado",
        value: function onProdutoCalculado(valores) {
          if (this.produtosComValorCalculado.length === 0) {
            this.adicionarProduto(valores);
          } else {
            var valor = this.produtosComValorCalculado.find(function (x) {
              return x.codigoProduto === valores.codigo;
            });

            if (valor !== undefined) {
              var newList = this.produtosComValorCalculado.filter(function (x) {
                return x.codigoProduto !== valor.codigoProduto;
              });
              this.produtosComValorCalculado = newList;
              this.adicionarProduto(valores);
            } else {
              this.adicionarProduto(valores);
            }
          }
        }
      }, {
        key: "adicionarProduto",
        value: function adicionarProduto(valores) {
          var valorTotal = new _models_carrinho_valores__WEBPACK_IMPORTED_MODULE_3__["CarrinhoValores"]();
          valorTotal.codigoProduto = valores.codigo;
          valorTotal.valorTotalDeItens = Number(valores.valorTotal);
          valorTotal.quantidadeTotalDeItens = Number(valores.quantidade);
          this.produtosComValorCalculado.push(valorTotal);
          console.log(this.produtosComValorCalculado);
          this.carrinhoDeCompras.emit({
            carrinho: this.produtosComValorCalculado
          });
          this.shoppingCartService.setProdutosSelecionados(this.produtosComValorCalculado);
        }
      }]);

      return CarrinhoComponent;
    }();

    CarrinhoComponent.ctorParameters = function () {
      return [{
        type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarrinhoComponent.prototype, "carrinhoDeCompras", void 0);
    CarrinhoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-carrinho',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./carrinho.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/carrinho/carrinho.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./carrinho.component.css */
      "./src/app/components/carrinho/carrinho.component.css")).default]
    })], CarrinhoComponent);
    /***/
  },

  /***/
  "./src/app/components/cliente/cliente.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/cliente/cliente.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsClienteClienteComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".client-form {\r\nmargin-left: 18px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRlL2NsaWVudGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGlCQUFpQjtFQUNmLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50ZS9jbGllbnRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpZW50LWZvcm0ge1xyXG5tYXJnaW4tbGVmdDogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/cliente/cliente.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/cliente/cliente.component.ts ***!
    \*********************************************************/

  /*! exports provided: ClienteComponent */

  /***/
  function srcAppComponentsClienteClienteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClienteComponent", function () {
      return ClienteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_cliente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/cliente.service */
    "./src/app/services/cliente.service.ts");

    var ClienteComponent =
    /*#__PURE__*/
    function () {
      function ClienteComponent(clienteService) {
        _classCallCheck(this, ClienteComponent);

        this.clienteService = clienteService;
        this.ClientesFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options = [];
        this.listClientes = [];
        this.clienteSelecionado = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ClienteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.onRefresh();
          this.clientes$ = this.ClientesFormControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
            return _this2._filter(value);
          }));
        }
      }, {
        key: "_filter",
        value: function _filter(value) {
          var filterValue = value.toLowerCase();
          return this.options.filter(function (option) {
            return option.toLowerCase().indexOf(filterValue) === 0;
          });
        }
      }, {
        key: "onRefresh",
        value: function onRefresh() {
          var _this3 = this;

          this.clienteService.list().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.error(error);

            _this3.handleError();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])();
          })).subscribe(function (dados) {
            _this3.listClientes = dados;
            _this3.options = _this3.listClientes.map(function (x) {
              return x.nome;
            });
            console.log(_this3.listClientes);
          }, function (error) {
            return console.error(error);
          }, function () {
            return console.log('Obserservable completo!');
          });
        }
      }, {
        key: "handleError",
        value: function handleError() {
          console.log('erro');
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          this.selectedCliente = this.listClientes.find(function (x) {
            return x.nome === _this4.ClientesFormControl.value;
          });
          this.clienteSelecionado.emit({
            cliente: this.selectedCliente
          });
          console.log(this.selectedCliente);
        }
      }]);

      return ClienteComponent;
    }();

    ClienteComponent.ctorParameters = function () {
      return [{
        type: _services_cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ClienteComponent.prototype, "clienteSelecionado", void 0);
    ClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cliente',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cliente.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/cliente.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cliente.component.css */
      "./src/app/components/cliente/cliente.component.css")).default]
    })], ClienteComponent);
    /***/
  },

  /***/
  "./src/app/components/produto/produto.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/produto/produto.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProdutoProdutoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".client-form {\r\n  margin-left: 18px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdXRvL3Byb2R1dG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1dG8vcHJvZHV0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWVudC1mb3JtIHtcclxuICBtYXJnaW4tbGVmdDogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/produto/produto.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/produto/produto.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProdutoComponent */

  /***/
  function srcAppComponentsProdutoProdutoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProdutoComponent", function () {
      return ProdutoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_produto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/produto.service */
    "./src/app/services/produto.service.ts");

    var ProdutoComponent =
    /*#__PURE__*/
    function () {
      function ProdutoComponent(produtoService) {
        _classCallCheck(this, ProdutoComponent);

        this.produtoService = produtoService;
        this.produtoFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options = [];
        this.listProdutos = [];
        this.produtoSelecionado = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ProdutoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.onRefresh();
          this.produtos$ = this.produtoFormControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
            return _this5._filter(value);
          }));
        }
      }, {
        key: "_filter",
        value: function _filter(value) {
          var filterValue = value.toLowerCase();
          return this.options.filter(function (option) {
            return option.toLowerCase().indexOf(filterValue) === 0;
          });
        }
      }, {
        key: "onRefresh",
        value: function onRefresh() {
          var _this6 = this;

          this.produtoService.list().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.error(error);

            _this6.handleError();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])();
          })).subscribe(function (dados) {
            _this6.listProdutos = dados;
            _this6.options = _this6.listProdutos.map(function (x) {
              return x.nome;
            });
            console.log(_this6.listProdutos);
          }, function (error) {
            return console.error(error);
          }, function () {
            return console.log('Obserservable completo!');
          });
        }
      }, {
        key: "handleError",
        value: function handleError() {// this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this7 = this;

          this.selectedProduto = this.listProdutos.find(function (x) {
            return x.nome === _this7.produtoFormControl.value;
          });
          this.produtoSelecionado.emit({
            produto: this.selectedProduto
          });
          console.log(this.selectedProduto);
        }
      }]);

      return ProdutoComponent;
    }();

    ProdutoComponent.ctorParameters = function () {
      return [{
        type: _services_produto_service__WEBPACK_IMPORTED_MODULE_5__["ProdutoService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ProdutoComponent.prototype, "produtoSelecionado", void 0);
    ProdutoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-produto',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./produto.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/produto/produto.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./produto.component.css */
      "./src/app/components/produto/produto.component.css")).default]
    })], ProdutoComponent);
    /***/
  },

  /***/
  "./src/app/components/progress-loader/progress-loader.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/progress-loader/progress-loader.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProgressLoaderProgressLoaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZ3Jlc3MtbG9hZGVyL3Byb2dyZXNzLWxvYWRlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/progress-loader/progress-loader.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/progress-loader/progress-loader.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ProgressLoaderComponent */

  /***/
  function srcAppComponentsProgressLoaderProgressLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressLoaderComponent", function () {
      return ProgressLoaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/loader.service */
    "./src/app/services/loader.service.ts");

    var ProgressLoaderComponent =
    /*#__PURE__*/
    function () {
      function ProgressLoaderComponent(loaderService) {
        _classCallCheck(this, ProgressLoaderComponent);

        this.loaderService = loaderService;
        this.isLoading = this.loaderService.isLoading;
        console.log(this.isLoading);
      }

      _createClass(ProgressLoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProgressLoaderComponent;
    }();

    ProgressLoaderComponent.ctorParameters = function () {
      return [{
        type: _services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
      }];
    };

    ProgressLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-progress-loader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./progress-loader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/progress-loader/progress-loader.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./progress-loader.component.css */
      "./src/app/components/progress-loader/progress-loader.component.css")).default]
    })], ProgressLoaderComponent);
    /***/
  },

  /***/
  "./src/app/components/toolbar/toolbar.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/toolbar/toolbar.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsToolbarToolbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".item-spacer {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n}\r\n\r\n.spacer {\r\n  margin-left: 50px;\r\n  text-align: center;\r\n  font-size: 0.8em;\r\n}\r\n\r\nimg{\r\n  height: 50px;\r\n  margin-left: 50px;\r\n}\r\n\r\nmat-toolbar{\r\n  min-height:54px;\r\n  max-height:58px;\r\n  background: snow;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tc3BhY2VyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuaW1ne1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxubWF0LXRvb2xiYXJ7XHJcbiAgbWluLWhlaWdodDo1NHB4O1xyXG4gIG1heC1oZWlnaHQ6NThweDtcclxuICBiYWNrZ3JvdW5kOiBzbm93O1xyXG59XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/toolbar/toolbar.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/toolbar/toolbar.component.ts ***!
    \*********************************************************/

  /*! exports provided: ToolbarComponent */

  /***/
  function srcAppComponentsToolbarToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
      return ToolbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ToolbarComponent =
    /*#__PURE__*/
    function () {
      function ToolbarComponent() {
        _classCallCheck(this, ToolbarComponent);
      }

      _createClass(ToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToolbarComponent;
    }();

    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-toolbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toolbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/toolbar/toolbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toolbar.component.css */
      "./src/app/components/toolbar/toolbar.component.css")).default]
    })], ToolbarComponent);
    /***/
  },

  /***/
  "./src/app/models/carrinho-valores.ts":
  /*!********************************************!*\
    !*** ./src/app/models/carrinho-valores.ts ***!
    \********************************************/

  /*! exports provided: CarrinhoValores */

  /***/
  function srcAppModelsCarrinhoValoresTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarrinhoValores", function () {
      return CarrinhoValores;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CarrinhoValores = function CarrinhoValores() {
      _classCallCheck(this, CarrinhoValores);
    };
    /***/

  },

  /***/
  "./src/app/models/pedido.ts":
  /*!**********************************!*\
    !*** ./src/app/models/pedido.ts ***!
    \**********************************/

  /*! exports provided: Pedido */

  /***/
  function srcAppModelsPedidoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Pedido", function () {
      return Pedido;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Pedido = function Pedido() {
      _classCallCheck(this, Pedido);
    };
    /***/

  },

  /***/
  "./src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCadastroCadastroClienteCadastroClienteComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p{\r\n  margin-top: 10px;\r\n  margin-left:50px ;\r\n  color: lightslategrey;\r\n}\r\nmat-card{\r\n  max-width: 600px;\r\n  margin-top: 50px;\r\n  padding: 25px;\r\n}\r\nmat-form-field{\r\n  margin-top: 10px;\r\n}\r\nbutton{\r\n  margin-top: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FkYXN0cm8vY2FkYXN0cm8tY2xpZW50ZS9jYWRhc3Ryby1jbGllbnRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FkYXN0cm8vY2FkYXN0cm8tY2xpZW50ZS9jYWRhc3Ryby1jbGllbnRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6NTBweCA7XHJcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xyXG59XHJcbm1hdC1jYXJke1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: CadastroClienteComponent */

  /***/
  function srcAppPagesCadastroCadastroClienteCadastroClienteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CadastroClienteComponent", function () {
      return CadastroClienteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/cliente.service */
    "./src/app/services/cliente.service.ts");

    var CadastroClienteComponent =
    /*#__PURE__*/
    function () {
      function CadastroClienteComponent(formBuilder, clienteService) {
        _classCallCheck(this, CadastroClienteComponent);

        this.formBuilder = formBuilder;
        this.clienteService = clienteService;
      }

      _createClass(CadastroClienteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            codigo: [Math.floor(1000 + Math.random() * 9000)],
            nome: [null]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.form.value);

          if (this.form.value.nome) {
            this.clienteService.save(this.form.value).subscribe(function (value) {
              console.log('valore retoronado' + value);
            });
          }
        }
      }]);

      return CadastroClienteComponent;
    }();

    CadastroClienteComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"]
      }];
    };

    CadastroClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cadastro-cliente',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cadastro-cliente.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cadastro-cliente.component.css */
      "./src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component.css")).default]
    })], CadastroClienteComponent);
    /***/
  },

  /***/
  "./src/app/pages/cadastro/cadastro-produto/cadastro-produto.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/cadastro/cadastro-produto/cadastro-produto.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCadastroCadastroProdutoCadastroProdutoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p{\r\n  margin-top: 10px;\r\n  margin-left:50px ;\r\n  color: lightslategrey;\r\n}\r\nmat-card{\r\n  max-width: 600px;\r\n  margin-top: 50px;\r\n  padding: 25px;\r\n}\r\nmat-form-field{\r\n  margin-top: 10px;\r\n}\r\nbutton{\r\n  margin-top: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FkYXN0cm8vY2FkYXN0cm8tcHJvZHV0by9jYWRhc3Ryby1wcm9kdXRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FkYXN0cm8vY2FkYXN0cm8tcHJvZHV0by9jYWRhc3Ryby1wcm9kdXRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6NTBweCA7XHJcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xyXG59XHJcbm1hdC1jYXJke1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/cadastro/cadastro-produto/cadastro-produto.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/cadastro/cadastro-produto/cadastro-produto.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: CadastroProdutoComponent */

  /***/
  function srcAppPagesCadastroCadastroProdutoCadastroProdutoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CadastroProdutoComponent", function () {
      return CadastroProdutoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/produto.service */
    "./src/app/services/produto.service.ts");

    var CadastroProdutoComponent =
    /*#__PURE__*/
    function () {
      function CadastroProdutoComponent(formBuilder, produtoService) {
        _classCallCheck(this, CadastroProdutoComponent);

        this.formBuilder = formBuilder;
        this.produtoService = produtoService;
      }

      _createClass(CadastroProdutoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            codigo: [Math.floor(1000 + Math.random() * 9000)],
            nome: [null],
            precoUnitario: [null]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.form.value);

          if (this.form.value.nome && this.form.value.precoUnitario) {
            this.produtoService.save(this.form.value).subscribe(function (value) {
              console.log(value + 'Salvo com sucesso');
            });
          }
        }
      }]);

      return CadastroProdutoComponent;
    }();

    CadastroProdutoComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]
      }];
    };

    CadastroProdutoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cadastro-produto',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cadastro-produto.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cadastro-produto/cadastro-produto.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cadastro-produto.component.css */
      "./src/app/pages/cadastro/cadastro-produto/cadastro-produto.component.css")).default]
    })], CadastroProdutoComponent);
    /***/
  },

  /***/
  "./src/app/pages/pedido/consulta-pedido/consulta-pedido.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/pedido/consulta-pedido/consulta-pedido.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPedidoConsultaPedidoConsultaPedidoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\r\n  margin-top: 10px;\r\n  margin-left: 50px;\r\n  margin-bottom: 50px;\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n  width: 93%;\r\n}\r\n\r\nth.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n\r\nh2{\r\n  margin-top: 10px;\r\n  margin-left:50px ;\r\n  color: lightslategrey;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVkaWRvL2NvbnN1bHRhLXBlZGlkby9jb25zdWx0YS1wZWRpZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFPO1VBQVAsT0FBTztFQUNQLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGVkaWRvL2NvbnN1bHRhLXBlZGlkby9jb25zdWx0YS1wZWRpZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgZmxleDogMTtcclxuICB3aWR0aDogOTMlO1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmgye1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6NTBweCA7XHJcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xyXG59XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/pedido/consulta-pedido/consulta-pedido.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/pedido/consulta-pedido/consulta-pedido.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ConsultaPedidoComponent */

  /***/
  function srcAppPagesPedidoConsultaPedidoConsultaPedidoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsultaPedidoComponent", function () {
      return ConsultaPedidoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _services_pedido_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/pedido.service */
    "./src/app/services/pedido.service.ts");

    var ConsultaPedidoComponent =
    /*#__PURE__*/
    function () {
      function ConsultaPedidoComponent(pedidoService) {
        _classCallCheck(this, ConsultaPedidoComponent);

        this.pedidoService = pedidoService;
        this.displayedColumns = ['numero', 'qtdItens', 'valorFrete', 'valorTotal'];
      }

      _createClass(ConsultaPedidoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.pedidoService.list().subscribe(function (value) {
            var data = value;
            _this8.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            console.log(data);
          });
          this.dataSource.sort = this.sort;
        }
      }]);

      return ConsultaPedidoComponent;
    }();

    ConsultaPedidoComponent.ctorParameters = function () {
      return [{
        type: _services_pedido_service__WEBPACK_IMPORTED_MODULE_4__["PedidoService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      static: true
    })], ConsultaPedidoComponent.prototype, "sort", void 0);
    ConsultaPedidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-consulta-pedido',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./consulta-pedido.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedido/consulta-pedido/consulta-pedido.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./consulta-pedido.component.css */
      "./src/app/pages/pedido/consulta-pedido/consulta-pedido.component.css")).default]
    })], ConsultaPedidoComponent);
    /***/
  },

  /***/
  "./src/app/pages/pedido/novo-pedido/novo-pedido.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/pages/pedido/novo-pedido/novo-pedido.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPedidoNovoPedidoNovoPedidoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\r\n  margin: 25px;\r\n}\r\n.row{\r\n  margin-left: 50px;\r\n  margin-right: 50px;\r\n}\r\n.spacer{\r\n  margin-bottom: 25px;\r\n}\r\nimg{\r\n  max-height: 20px;\r\n}\r\nbutton{\r\n  margin-bottom: 20px;\r\n}\r\nmat-label{\r\n  font-size: 1.4em;\r\n  margin-bottom: 25px;\r\n  margin-top: 10px;\r\n  color: lightslategrey;\r\n}\r\np{\r\n  font-size: 1.2em;\r\n  margin-bottom: 25px;\r\n  margin-top: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVkaWRvL25vdm8tcGVkaWRvL25vdm8tcGVkaWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wZWRpZG8vbm92by1wZWRpZG8vbm92by1wZWRpZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgbWFyZ2luOiAyNXB4O1xyXG59XHJcbi5yb3d7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uc3BhY2Vye1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuaW1ne1xyXG4gIG1heC1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5tYXQtbGFiZWx7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xyXG59XHJcbnB7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/pedido/novo-pedido/novo-pedido.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/pedido/novo-pedido/novo-pedido.component.ts ***!
    \*******************************************************************/

  /*! exports provided: NovoPedidoComponent */

  /***/
  function srcAppPagesPedidoNovoPedidoNovoPedidoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NovoPedidoComponent", function () {
      return NovoPedidoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_pedido_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/pedido.service */
    "./src/app/services/pedido.service.ts");
    /* harmony import */


    var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/shopping-cart.service */
    "./src/app/services/shopping-cart.service.ts");
    /* harmony import */


    var _models_pedido__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../models/pedido */
    "./src/app/models/pedido.ts");
    /* harmony import */


    var _services_calculo_frete_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/calculo-frete.service */
    "./src/app/services/calculo-frete.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NovoPedidoComponent =
    /*#__PURE__*/
    function () {
      function NovoPedidoComponent(pedidoService, shoppingCartService, calculoFreteService, router) {
        _classCallCheck(this, NovoPedidoComponent);

        this.pedidoService = pedidoService;
        this.shoppingCartService = shoppingCartService;
        this.calculoFreteService = calculoFreteService;
        this.router = router;
        this.pedido = new _models_pedido__WEBPACK_IMPORTED_MODULE_4__["Pedido"]();
        this.produtos = [];
        this.erro = false;
      }

      _createClass(NovoPedidoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pedido.numero = Math.floor(10000000 + Math.random() * 90000000);
        }
      }, {
        key: "onClienteSelecionado",
        value: function onClienteSelecionado(clienteSelecionado) {
          console.log(clienteSelecionado.cliente);
          this.pedido.cliente = clienteSelecionado.cliente;
        }
      }, {
        key: "onCarrinhoDeComprasPreenchido",
        value: function onCarrinhoDeComprasPreenchido(produtosCarrinho) {
          this.produtos = produtosCarrinho.carrinho;
          this.calcularPrecoTotal(this.produtos);
        }
      }, {
        key: "calcularPrecoTotal",
        value: function calcularPrecoTotal(produtos) {
          var _this9 = this;

          var valorTotal = 0;
          var totalItens = 0;
          this.shoppingCartService.getProdutosSelecionados().subscribe(function (valor) {
            produtos = valor;
          });
          produtos.forEach(function (valor) {
            valorTotal += Number(valor.valorTotalDeItens);
            totalItens += Number(valor.quantidadeTotalDeItens);
          });
          this.valorItens = valorTotal;
          this.valorTotal = valorTotal;
          this.pedido.qtdItens = totalItens;
          this.pedido.valorTotal = valorTotal;
          this.calculoFreteService.calcularFrete({
            totalItens: totalItens
          }).subscribe(function (value) {
            _this9.pedido.valorFrete = Number(value);
          });
          console.log('Valor TOtal: ' + this.valorTotal);
        }
      }, {
        key: "limparCarrinho",
        value: function limparCarrinho() {
          this.shoppingCartService.limparProdutos();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          console.log('Context' + this);
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this10 = this;

          setTimeout(function () {
            _this10.calcularPrecoTotal(_this10.produtos);
          }, 0);
        }
      }, {
        key: "finalizarPedido",
        value: function finalizarPedido() {
          console.log(this.pedido);

          if (this.pedido.cliente) {
            this.pedidoService.save(this.pedido).subscribe(function (dados) {
              return console.log(dados);
            });
            this.router.navigate(['/consulta-pedido']);
          } else {
            this.erro = true;
          }
        }
      }]);

      return NovoPedidoComponent;
    }();

    NovoPedidoComponent.ctorParameters = function () {
      return [{
        type: _services_pedido_service__WEBPACK_IMPORTED_MODULE_2__["PedidoService"]
      }, {
        type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"]
      }, {
        type: _services_calculo_frete_service__WEBPACK_IMPORTED_MODULE_5__["CalculoFreteService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    NovoPedidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-novo-pedido',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./novo-pedido.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedido/novo-pedido/novo-pedido.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./novo-pedido.component.css */
      "./src/app/pages/pedido/novo-pedido/novo-pedido.component.css")).default]
    })], NovoPedidoComponent);
    /***/
  },

  /***/
  "./src/app/services/calculo-frete.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/calculo-frete.service.ts ***!
    \***************************************************/

  /*! exports provided: CalculoFreteService */

  /***/
  function srcAppServicesCalculoFreteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalculoFreteService", function () {
      return CalculoFreteService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var CalculoFreteService =
    /*#__PURE__*/
    function () {
      function CalculoFreteService(httpClient) {
        _classCallCheck(this, CalculoFreteService);

        this.httpClient = httpClient;
      }

      _createClass(CalculoFreteService, [{
        key: "calcularFrete",
        value: function calcularFrete(totalItens) {
          return this.httpClient.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].frete_api_url, "calculofrete"), totalItens);
        }
      }]);

      return CalculoFreteService;
    }();

    CalculoFreteService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CalculoFreteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CalculoFreteService);
    /***/
  },

  /***/
  "./src/app/services/cliente.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/cliente.service.ts ***!
    \*********************************************/

  /*! exports provided: ClienteService */

  /***/
  function srcAppServicesClienteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClienteService", function () {
      return ClienteService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./service-core */
    "./src/app/services/service-core.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var ClienteService =
    /*#__PURE__*/
    function (_service_core__WEBPAC) {
      _inherits(ClienteService, _service_core__WEBPAC);

      function ClienteService(httpClient) {
        var _this11;

        _classCallCheck(this, ClienteService);

        _this11 = _possibleConstructorReturn(this, _getPrototypeOf(ClienteService).call(this, httpClient, "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url, "cliente")));
        _this11.httpClient = httpClient;
        return _this11;
      }

      return ClienteService;
    }(_service_core__WEBPACK_IMPORTED_MODULE_2__["ServiceCore"]);

    ClienteService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ClienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ClienteService);
    /***/
  },

  /***/
  "./src/app/services/loader.interceptor.ts":
  /*!************************************************!*\
    !*** ./src/app/services/loader.interceptor.ts ***!
    \************************************************/

  /*! exports provided: LoaderInterceptor */

  /***/
  function srcAppServicesLoaderInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function () {
      return LoaderInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./loader.service */
    "./src/app/services/loader.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var LoaderInterceptor =
    /*#__PURE__*/
    function () {
      function LoaderInterceptor(loaderService) {
        _classCallCheck(this, LoaderInterceptor);

        this.loaderService = loaderService;
      }

      _createClass(LoaderInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this12 = this;

          this.loaderService.show();
          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            return _this12.loaderService.hide();
          }));
        }
      }]);

      return LoaderInterceptor;
    }();

    LoaderInterceptor.ctorParameters = function () {
      return [{
        type: _loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
      }];
    };

    LoaderInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoaderInterceptor);
    /***/
  },

  /***/
  "./src/app/services/loader.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/loader.service.ts ***!
    \********************************************/

  /*! exports provided: LoaderService */

  /***/
  function srcAppServicesLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
      return LoaderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LoaderService =
    /*#__PURE__*/
    function () {
      function LoaderService() {
        _classCallCheck(this, LoaderService);

        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(LoaderService, [{
        key: "show",
        value: function show() {
          this.isLoading.next(true);
        }
      }, {
        key: "hide",
        value: function hide() {
          this.isLoading.next(false);
        }
      }]);

      return LoaderService;
    }();

    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoaderService);
    /***/
  },

  /***/
  "./src/app/services/pedido.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/pedido.service.ts ***!
    \********************************************/

  /*! exports provided: PedidoService */

  /***/
  function srcAppServicesPedidoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidoService", function () {
      return PedidoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./service-core */
    "./src/app/services/service-core.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var PedidoService =
    /*#__PURE__*/
    function (_service_core__WEBPAC2) {
      _inherits(PedidoService, _service_core__WEBPAC2);

      function PedidoService(httpClient) {
        var _this13;

        _classCallCheck(this, PedidoService);

        _this13 = _possibleConstructorReturn(this, _getPrototypeOf(PedidoService).call(this, httpClient, "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url, "pedido")));
        _this13.httpClient = httpClient;
        return _this13;
      }

      return PedidoService;
    }(_service_core__WEBPACK_IMPORTED_MODULE_2__["ServiceCore"]);

    PedidoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    PedidoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PedidoService);
    /***/
  },

  /***/
  "./src/app/services/produto.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/produto.service.ts ***!
    \*********************************************/

  /*! exports provided: ProdutoService */

  /***/
  function srcAppServicesProdutoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProdutoService", function () {
      return ProdutoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _service_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./service-core */
    "./src/app/services/service-core.ts");

    var ProdutoService =
    /*#__PURE__*/
    function (_service_core__WEBPAC3) {
      _inherits(ProdutoService, _service_core__WEBPAC3);

      function ProdutoService(httpClient) {
        var _this14;

        _classCallCheck(this, ProdutoService);

        _this14 = _possibleConstructorReturn(this, _getPrototypeOf(ProdutoService).call(this, httpClient, "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url, "produto")));
        _this14.httpClient = httpClient;
        return _this14;
      }

      return ProdutoService;
    }(_service_core__WEBPACK_IMPORTED_MODULE_4__["ServiceCore"]);

    ProdutoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProdutoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProdutoService);
    /***/
  },

  /***/
  "./src/app/services/service-core.ts":
  /*!******************************************!*\
    !*** ./src/app/services/service-core.ts ***!
    \******************************************/

  /*! exports provided: ServiceCore */

  /***/
  function srcAppServicesServiceCoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceCore", function () {
      return ServiceCore;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ServiceCore =
    /*#__PURE__*/
    function () {
      function ServiceCore(httpClient, API_URL) {
        _classCallCheck(this, ServiceCore);

        this.httpClient = httpClient;
        this.API_URL = API_URL;
      }

      _createClass(ServiceCore, [{
        key: "list",
        value: function list() {
          return this.httpClient.get(this.API_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(console.log));
        }
      }, {
        key: "save",
        value: function save(record) {
          return this.httpClient.post(this.API_URL, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.httpClient.delete("".concat(this.API_URL, "/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
        }
      }, {
        key: "update",
        value: function update(id, record) {
          return this.httpClient.put("".concat(this.API_URL, "/").concat(id), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
        }
      }]);

      return ServiceCore;
    }();
    /***/

  },

  /***/
  "./src/app/services/shopping-cart.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/shopping-cart.service.ts ***!
    \***************************************************/

  /*! exports provided: ShoppingCartService */

  /***/
  function srcAppServicesShoppingCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function () {
      return ShoppingCartService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ShoppingCartService =
    /*#__PURE__*/
    function () {
      function ShoppingCartService() {
        _classCallCheck(this, ShoppingCartService);

        this.produtos = [];
        this.produtosSelecionados = [];
      }

      _createClass(ShoppingCartService, [{
        key: "addProduto",
        value: function addProduto(produto) {
          produto.quantidade = 1;
          produto.valorTotal = produto.precoUnitario;

          if (!this.produtos.find(function (x) {
            return x.codigo === produto.codigo;
          })) {
            this.produtos.push(produto);
          }
        }
      }, {
        key: "getProdutos",
        value: function getProdutos() {
          var _this15 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observador) {
            setTimeout(function () {
              observador.next(_this15.produtos);
            }, 2000);
          });
        }
      }, {
        key: "limparProdutos",
        value: function limparProdutos() {
          console.log(this.produtos);
          this.produtos = [];
          console.log(this.produtos);
        }
      }, {
        key: "getProdutosSelecionados",
        value: function getProdutosSelecionados() {
          var _this16 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observador) {
            setTimeout(function () {
              observador.next(_this16.produtosSelecionados);
            }, 2000);
          });
        }
      }, {
        key: "setProdutosSelecionados",
        value: function setProdutosSelecionados(produtosSelecionados) {
          this.produtosSelecionados = produtosSelecionados;
        }
      }]);

      return ShoppingCartService;
    }();

    ShoppingCartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ShoppingCartService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Raphael Policena\Desktop\Fullstack-Developer\PoCECommerceWebApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map