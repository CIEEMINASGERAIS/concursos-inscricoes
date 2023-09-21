/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/pages/address.js":
/*!***********************************!*\
  !*** ./frontend/pages/address.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = __webpack_require__(/*! ../utils/util.js */ "./frontend/utils/util.js"),
  isNumero = _require.isNumero,
  isComplemento = _require.isComplemento,
  isTelefone = _require.isTelefone,
  isEmail = _require.isEmail,
  changeMains = _require.changeMains,
  changeSubMainTitle = _require.changeSubMainTitle,
  removerMensagem = _require.removerMensagem,
  isCep = _require.isCep,
  isNaturalidadeNacionalidade = _require.isNaturalidadeNacionalidade,
  isUfNaturalidade = _require.isUfNaturalidade;
function initAddress() {
  return _initAddress.apply(this, arguments);
}
function _initAddress() {
  _initAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
              var response, htmlContent, address, form, formDataAddress, cep, logradouro, uf, bairro, cidade, btnCep, cepFound, endereco, numero, validate, complemento, _validate, telefone1, _validate2, telefone2, _validate3, email, _validate4;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return fetch('address');
                  case 2:
                    response = _context4.sent;
                    _context4.next = 5;
                    return response.text();
                  case 5:
                    htmlContent = _context4.sent;
                    address = document.querySelector('.screen-address');
                    address.innerHTML = htmlContent;
                    form = document.querySelector('.form-address');
                    formDataAddress = {};
                    cep = document.getElementById('cep');
                    logradouro = document.getElementById('logradouro');
                    uf = document.getElementById('uf');
                    bairro = document.getElementById('bairro');
                    cidade = document.getElementById('cidade');
                    btnCep = document.querySelector('.btn-cep');
                    if (cep) {
                      cepFound = document.querySelector('.cep-found');
                      cep.addEventListener('input', /*#__PURE__*/function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
                          var dadosCep, validate, cepSemPonto, _response, opcoes;
                          return _regeneratorRuntime().wrap(function _callee$(_context) {
                            while (1) switch (_context.prev = _context.next) {
                              case 0:
                                cepSemPonto = e.target.value.replace(/[^0-9]/g, '');
                                e.target.value = e.target.value.replace(/\D/g, '');
                                e.target.value = e.target.value.replace(/(\d{5})(\d)/, '$1-$2');
                                e.target.value = e.target.value.replace(/(-\d{3})\d+?$/, '$1');
                                _context.prev = 4;
                                _context.next = 7;
                                return fetch("http://localhost:8082/cadastrarEndereco?termo=".concat(cepSemPonto));
                              case 7:
                                _response = _context.sent;
                                if (!_response.ok) {
                                  _context.next = 16;
                                  break;
                                }
                                _context.next = 11;
                                return _response.json();
                              case 11:
                                opcoes = _context.sent;
                                endereco = opcoes;
                                dadosCep = endereco.map(function (cep) {
                                  return cep.cep;
                                });
                                _context.next = 17;
                                break;
                              case 16:
                                console.log('Erro na solicitação:', _response.statusText);
                              case 17:
                                _context.next = 22;
                                break;
                              case 19:
                                _context.prev = 19;
                                _context.t0 = _context["catch"](4);
                                console.error('Erro:', _context.t0);
                              case 22:
                                validate = isCep(e.target.value);
                                if (!(validate && dadosCep[0])) {
                                  _context.next = 28;
                                  break;
                                }
                                formDataAddress.cep = e.target.value;
                                document.getElementById("msg-cep").innerHTML = "";
                                _context.next = 31;
                                break;
                              case 28:
                                e.preventDefault();
                                document.getElementById("msg-cep").innerHTML = "<p>CEP inválido!</p>";
                                return _context.abrupt("return", formDataAddress.cep = false);
                              case 31:
                              case "end":
                                return _context.stop();
                            }
                          }, _callee, null, [[4, 19]]);
                        }));
                        return function (_x3) {
                          return _ref2.apply(this, arguments);
                        };
                      }());
                      if (btnCep) {
                        btnCep.addEventListener('click', function (e) {
                          var validateCep = false;
                          validateCep = isCep(formDataAddress.cep);
                          if (validateCep) {
                            var validate = false;
                            logradouro.value = endereco.map(function (logradouro) {
                              return logradouro.logradouro;
                            });
                            validate = isNaturalidadeNacionalidade(logradouro.value);
                            if (validate) {
                              document.getElementById("msg-logradouro").innerHTML = "";
                              formDataAddress.logradouro = logradouro.value;
                            } else {
                              document.getElementById("msg-logradouro").innerHTML = "<p>Logradouro inválido!</p>";
                              formDataAddress.logradouro = false;
                            }
                            uf.value = endereco.map(function (uf) {
                              return uf.uf;
                            });
                            validate = isUfNaturalidade(uf.value);
                            if (validate) {
                              document.getElementById("msg-uf").innerHTML = "";
                              formDataAddress.uf = uf.value;
                            } else {
                              document.getElementById("msg-uf").innerHTML = "<p>UF inválido!</p>";
                              formDataAddress.uf = false;
                            }
                            bairro.value = endereco.map(function (bairro) {
                              return bairro.bairro;
                            });
                            validate = isNaturalidadeNacionalidade(bairro.value);
                            if (validate) {
                              document.getElementById("msg-bairro").innerHTML = "";
                              formDataAddress.bairro = bairro.value;
                            } else {
                              document.getElementById("msg-bairro").innerHTML = "<p>Bairro inválido!</p>";
                              formDataAddress.bairro = false;
                            }
                            cidade.value = endereco.map(function (cidade) {
                              return cidade.cidade;
                            });
                            validate = isNaturalidadeNacionalidade(cidade.value);
                            if (validate) {
                              document.getElementById("msg-cidade").innerHTML = "";
                              formDataAddress.cidade = cidade.value;
                            } else {
                              document.getElementById("msg-cidade").innerHTML = "<p>Cidade inválido!</p>";
                              formDataAddress.cidade = false;
                            }

                            // Validação do CEP bem-sucedida, permitir que o usuário digite nos campos
                            logradouro.removeAttribute('disabled');
                            uf.removeAttribute('disabled');
                            bairro.removeAttribute('disabled');
                            cidade.removeAttribute('disabled');
                          } else {
                            // Validação do CEP falhou, desabilitar os campos
                            logradouro.setAttribute('disabled', 'true');
                            uf.setAttribute('disabled', 'true');
                            bairro.setAttribute('disabled', 'true');
                            cidade.setAttribute('disabled', 'true');
                            logradouro.value = '';
                            uf.value = '';
                            bairro.value = '';
                            cidade.value = '';
                            cepFound.style.display = 'block';
                            if (cepFound.style.display === 'block') {
                              document.addEventListener('click', function (e) {
                                var element = e.target;
                                if (element.classList.contains('button-confirm-cep')) {
                                  cepFound.style.display = 'none';
                                }
                              });
                            }
                          }
                        });
                      }
                    }
                    if (uf) {
                      uf.addEventListener('input', function (e) {
                        e.target.value = e.target.value.replace(/[^a-zA-Z]/g, '');
                      });
                    }
                    numero = document.getElementById('numero');
                    if (numero) {
                      numero.addEventListener('input', function (e) {
                        var regex = new RegExp("^[0-9\b]+$");
                        for (var i = 0; i < e.target.value.length; i++) {
                          if (!regex.test(e.target.value[i])) {
                            var subtituicao = e.target.value[i];
                            e.target.value = e.target.value.replace(subtituicao, '');
                          }
                        }
                        validate = isNumero(e.target.value);
                        if (validate) {
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-numero').innerHTML = "";
                          return formDataAddress.numero = e.target.value;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-numero').innerHTML = "<p>Valor inválido!</p>";
                          return formDataAddress.numero = false;
                        }
                      });
                      numero.addEventListener('keypress', function (e) {
                        var notAllowedChars = /^[A-Za-z!"#$%&'()*+,-./:;<=>?@[\]^_`´{|}~¨¬¢£³²¹ºª°§ \\]+$/;
                        var _char = e.key;
                        if (notAllowedChars.test(_char)) {
                          e.preventDefault();
                        }
                      });
                      numero.addEventListener('paste', function (e) {
                        var regex = new RegExp("^[0-9\b]+$");
                        setTimeout(function () {
                          if (!regex.test(e.target.value)) {
                            e.target.value = '';
                          }
                        }, 0);
                      });
                    }
                    complemento = document.getElementById('complemento');
                    if (complemento) {
                      complemento.addEventListener('input', function (e) {
                        var regex = new RegExp("^[#$%'()*+:;<=>?@[\]_{|}¨¬¢£³²¹§\\]+$");
                        for (var i = 0; i < e.target.value.length; i++) {
                          if (regex.test(e.target.value[i])) {
                            var subtituicao = e.target.value[i];
                            e.target.value = e.target.value.replace(subtituicao, '');
                          }
                        }
                        _validate = isComplemento(e.target.value);
                        if (_validate) {
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-complemento').innerHTML = "";
                          return formDataAddress.complemento = e.target.value;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-complemento').innerHTML = "<p>Valor inválido!</p>";
                          return formDataAddress.complemento = false;
                        }
                      });
                      complemento.addEventListener('keypress', function (e) {
                        var notAllowedChars = /^[#$%'()*+:;<=>?@[\]_{|}¨¬¢£³²¹§\\]+$/;
                        var _char2 = e.key;
                        if (notAllowedChars.test(_char2)) {
                          e.preventDefault();
                        }
                      });
                      complemento.addEventListener('paste', function (e) {
                        var regex = new RegExp("^[#$%'()*+:;<=>?@[\]_{|}¨¬¢£³²¹§\\]+$");
                        setTimeout(function () {
                          if (regex.test(e.target.value)) {
                            e.target.value = '';
                          }
                        }, 0);
                      });
                    }
                    telefone1 = document.getElementById('telefone1');
                    if (telefone1) {
                      telefone1.addEventListener('input', function (e) {
                        e.target.value = e.target.value.replace(/\D/g, '');
                        e.target.value = e.target.value.replace(/(\d{2})(\d)/, "($1) $2");
                        e.target.value = e.target.value.replace(/(\d)(\d{4})$/, "$1-$2");
                        _validate2 = isTelefone(e.target.value);
                        if (_validate2) {
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-telefone1').innerHTML = "";
                          return formDataAddress.telefone1 = e.target.value;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-telefone1').innerHTML = "<p>Telefone inválido!</p>";
                          return formDataAddress.telefone1 = false;
                        }
                      });
                    }
                    telefone2 = document.getElementById('telefone2');
                    if (telefone2) {
                      telefone2.addEventListener('input', function (e) {
                        e.target.value = e.target.value.replace(/\D/g, '');
                        e.target.value = e.target.value.replace(/(\d{2})(\d)/, "($1) $2");
                        e.target.value = e.target.value.replace(/(\d)(\d{4})$/, "$1-$2");
                        _validate3 = isTelefone(e.target.value);
                        if (_validate3) {
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-telefone2').innerHTML = "";
                          return formDataAddress.telefone2 = e.target.value;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-telefone2').innerHTML = "<p>Telefone inválido!</p>";
                          return formDataAddress.telefone2 = false;
                        }
                      });
                    }
                    email = document.getElementById('email');
                    if (email) {
                      email.addEventListener('input', /*#__PURE__*/function () {
                        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
                          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                            while (1) switch (_context2.prev = _context2.next) {
                              case 0:
                                _context2.next = 2;
                                return isEmail(e.target.value);
                              case 2:
                                _validate4 = _context2.sent;
                                if (!_validate4) {
                                  _context2.next = 8;
                                  break;
                                }
                                // Enviar para o HTML a mensagem de erro
                                document.getElementById('msg-email').innerHTML = "";
                                return _context2.abrupt("return", formDataAddress.email = e.target.value);
                              case 8:
                                e.preventDefault();
                                // Enviar para o HTML a mensagem de erro
                                document.getElementById('msg-email').innerHTML = "<p>Email inválido!</p>";
                                return _context2.abrupt("return", formDataAddress.email = false);
                              case 11:
                              case "end":
                                return _context2.stop();
                            }
                          }, _callee2);
                        }));
                        return function (_x4) {
                          return _ref3.apply(this, arguments);
                        };
                      }());
                    }
                    if (form) {
                      form.addEventListener('submit', /*#__PURE__*/function () {
                        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
                          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                            while (1) switch (_context3.prev = _context3.next) {
                              case 0:
                                e.preventDefault();
                                if (formDataAddress.cep && formDataAddress.logradouro && formDataAddress.numero && formDataAddress.uf && formDataAddress.bairro && formDataAddress.cidade && formDataAddress.telefone1 && formDataAddress.telefone2 && formDataAddress.email) {
                                  changeMains('.screen-school-data');
                                  changeSubMainTitle('Formulário de Dados Acadêmicos');
                                  resolve(formDataAddress);
                                  document.addEventListener('click', function (event) {
                                    var element = event.target;
                                    if (element.classList.contains('school-data')) {
                                      changeMains('.screen-school-data');
                                      changeSubMainTitle('Formulário de Dados Acadêmicos');
                                    }
                                  });
                                } else {
                                  document.getElementById('msg-fracasso-address').innerHTML = "<p>Formulário incompleto!</p>";
                                  removerMensagem('msg-fracasso-address');
                                }
                              case 2:
                              case "end":
                                return _context3.stop();
                            }
                          }, _callee3);
                        }));
                        return function (_x5) {
                          return _ref4.apply(this, arguments);
                        };
                      }());
                    } else {
                      console.log('Erro ao buscar dados do formulário');
                      reject(error);
                    }
                  case 29:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4);
            }));
            return function (_x, _x2) {
              return _ref.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _initAddress.apply(this, arguments);
}
module.exports = initAddress;

/***/ }),

/***/ "./frontend/pages/dataBasic.js":
/*!*************************************!*\
  !*** ./frontend/pages/dataBasic.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = __webpack_require__(/*! ../utils/util.js */ "./frontend/utils/util.js"),
  isNome = _require.isNome,
  isCpf = _require.isCpf,
  isCtps = _require.isCtps,
  isNaturalidadeNacionalidade = _require.isNaturalidadeNacionalidade,
  changeMains = _require.changeMains,
  changeSubMainTitle = _require.changeSubMainTitle,
  isEstadoCivil = _require.isEstadoCivil,
  isDate = _require.isDate,
  isSexo = _require.isSexo,
  isUfNaturalidade = _require.isUfNaturalidade,
  isDeficiente = _require.isDeficiente,
  isDescricao = _require.isDescricao,
  removerMensagem = _require.removerMensagem,
  isRg = _require.isRg,
  isComplemento = _require.isComplemento;

// Função responsável por iniciar as funções e gerar o conteúdo da página
var initDataBasic = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
              var response, htmlContent, dataBasic, formData, ufNaturalidade, ufs, i, option, listDeficiencias, formDataBasic, inputNome, validate, inputCpf, _validate, rg, _validate2, orgaoExpedidor, _validate3, inputNomeMae, _validate4, inputNomePai, _validate5, ctps, _validate6, naturalidade, _validate7, nacionalidade, _validate8, estadoCivil, _validate9, dataNascimento, _validate10, sexo, _validate11, _validate12, deficiencias, descDiv, _validate13;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return fetch('formDataBasic');
                  case 2:
                    response = _context2.sent;
                    _context2.next = 5;
                    return response.text();
                  case 5:
                    htmlContent = _context2.sent;
                    dataBasic = document.querySelector('.screen-basic-data1');
                    dataBasic.innerHTML = htmlContent;
                    formData = document.querySelector('.form-data');
                    ufNaturalidade = document.getElementById('uf-naturalidade');
                    ufs = ['RO', 'AC', 'AM', 'RR', 'PA', 'AP', 'TO', 'MA', 'PI', 'CE', 'RN', 'PB', 'PE', 'AL', 'SE', 'BA', 'MG', 'ES', 'RJ', 'SP', 'PR', 'SC', 'RS', 'MS', 'MT', 'GO', 'DF'];
                    for (i = 0; i < ufs.length; i++) {
                      option = document.createElement('option');
                      ufNaturalidade.appendChild(option);
                      option.value = ufs[i];
                      option.text = ufs[i];
                      option.name = ufs[i];
                    }
                    listDeficiencias = ["N", "F", "A", "V", "ME", "MU", "TE"];
                    formDataBasic = {};
                    inputNome = document.querySelector('.name');
                    if (inputNome) {
                      inputNome.addEventListener('input', function (e) {
                        e.target.value = e.target.value.replace(/[0-9]/g, '');
                        validate = isNome(e.target.value);
                        if (validate) {
                          document.getElementById('msg-name').innerHTML = '';
                          return formDataBasic.nome = e.target.value;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-name').innerHTML = "<p>Favor preencher o Nome completo!</p>";
                          return formDataBasic.nome = false;
                        }
                      });
                    }
                    inputCpf = document.querySelector('.cpf');
                    if (inputCpf) {
                      inputCpf.addEventListener('input', /*#__PURE__*/function () {
                        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
                          return _regeneratorRuntime().wrap(function _callee$(_context) {
                            while (1) switch (_context.prev = _context.next) {
                              case 0:
                                e.target.value = e.target.value.replace(/\D/g, '');
                                e.target.value = e.target.value.replace(/(\d{3})(\d)/, '$1.$2');
                                e.target.value = e.target.value.replace(/(\d{3})(\d)/, '$1.$2');
                                e.target.value = e.target.value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
                                _context.next = 6;
                                return isCpf(e.target.value);
                              case 6:
                                _validate = _context.sent;
                                if (!_validate) {
                                  _context.next = 12;
                                  break;
                                }
                                document.getElementById('msg-cpf').innerHTML = '';
                                return _context.abrupt("return", formDataBasic.cpf = e.target.value);
                              case 12:
                                e.preventDefault();
                                // Enviar para o HTML a mensagem de erro
                                document.getElementById('msg-cpf').innerHTML = "<p>CPF inválido!</p>";
                                return _context.abrupt("return", formDataBasic.cpf = false);
                              case 15:
                              case "end":
                                return _context.stop();
                            }
                          }, _callee);
                        }));
                        return function (_x3) {
                          return _ref3.apply(this, arguments);
                        };
                      }());
                    }
                    rg = document.querySelector('.rg');
                    if (rg) {
                      rg.addEventListener('input', function (e) {
                        // Remove tudo, exceto números e pontos
                        e.target.value = e.target.value.replace(/[^\d.]/g, '');
                        // Adicione um ponto a cada três números
                        e.target.value = e.target.value.replace(/(\d{3})(?=\d)/g, '$1.');
                        _validate2 = isRg(e.target.value);
                        if (_validate2) {
                          var rgSemPonto = e.target.value.replace(/[^0-9]/g, '');
                          document.getElementById('msg-rg').innerHTML = '';
                          formDataBasic.rg = rgSemPonto;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-rg').innerHTML = "<p>RG inválido!</p>";
                          formDataBasic.rg = false;
                        }
                      });
                    }
                    orgaoExpedidor = document.querySelector('.orgao-expedidor');
                    if (orgaoExpedidor) {
                      orgaoExpedidor.addEventListener('input', function (e) {
                        _validate3 = isComplemento(e.target.value);
                        if (_validate3) {
                          document.getElementById('msg-orgao-expedidor').innerHTML = '';
                          formDataBasic.orgaoexpedidor = e.target.value;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-orgao-expedidor').innerHTML = "<p>Orgão Expedidor inválido!</p>";
                          formDataBasic.orgaoexpedidor = false;
                        }
                      });
                    }
                    inputNomeMae = document.querySelector('.nome-mae');
                    if (inputNomeMae) {
                      inputNomeMae.addEventListener('input', function (e) {
                        e.target.value = e.target.value.replace(/[0-9]/g, '');
                        _validate4 = isNome(e.target.value);
                        if (_validate4) {
                          document.getElementById('msg-nome-mae').innerHTML = '';
                          return formDataBasic.nomemae = e.target.value;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-nome-mae').innerHTML = "<p>Favor preencher o Nome completo!</p>";
                          return formDataBasic.nomemae = false;
                        }
                      });
                    }
                    inputNomePai = document.querySelector('.nome-pai');
                    if (inputNomePai) {
                      inputNomePai.addEventListener('input', function (e) {
                        e.target.value = e.target.value.replace(/[0-9]/g, '');
                        _validate5 = isNome(e.target.value);
                        if (_validate5) {
                          document.getElementById('msg-nome-pai').innerHTML = '';
                          return formDataBasic.nomepai = e.target.value;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-nome-pai').innerHTML = "<p>Favor preencher o nome completo!</p>";
                          return formDataBasic.nomepai = false;
                        }
                      });
                    }
                    ctps = document.getElementById('carteira-trabalho');
                    if (ctps) {
                      ctps.addEventListener('input', function (e) {
                        e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        _validate6 = isCtps(e.target.value);
                        if (_validate6) {
                          document.getElementById('msg-carteira-trabalho').innerHTML = '';
                          return formDataBasic.ctps = e.target.value;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-carteira-trabalho').innerHTML = "<p>CTPS inválido!</p>";
                          return formDataBasic.ctps = false;
                        }
                      });
                    }
                    naturalidade = document.getElementById('naturalidade');
                    if (naturalidade) {
                      naturalidade.addEventListener('input', function (e) {
                        e.target.value = e.target.value.replace(/[0-9]/g, '');
                        _validate7 = isNaturalidadeNacionalidade(e.target.value);
                        if (_validate7) {
                          document.getElementById('msg-naturalidade').innerHTML = '';
                          return formDataBasic.naturalidade = e.target.value;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-naturalidade').innerHTML = "<p>Naturalidade inválida!</p>";
                          return formDataBasic.naturalidade = false;
                        }
                      });
                    }
                    nacionalidade = document.getElementById('nacionalidade');
                    if (nacionalidade) {
                      nacionalidade.addEventListener('input', function (e) {
                        e.target.value = e.target.value.replace(/[0-9]/g, '');
                        _validate8 = isNaturalidadeNacionalidade(e.target.value);
                        if (_validate8) {
                          document.getElementById('msg-nacionalidade').innerHTML = '';
                          return formDataBasic.nacionalidade = e.target.value;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-nacionalidade').innerHTML = "<p>Caracteres inválidos!</p>";
                          return formDataBasic.nacionalidade = false;
                        }
                      });
                    }
                    estadoCivil = document.getElementById('estado-civil');
                    if (estadoCivil) {
                      estadoCivil.addEventListener('input', function (e) {
                        _validate9 = isEstadoCivil(e.target.value);
                        if (_validate9) {
                          document.getElementById('msg-estado-civil').innerHTML = '';
                          return formDataBasic.estadocivil = e.target.value;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-estado-civil').innerHTML = "<p>Estado civil inválido!</p>";
                          return formDataBasic.estadocivil = false;
                        }
                      });
                    }
                    dataNascimento = document.getElementById('data-nascimento');
                    if (dataNascimento) {
                      dataNascimento.addEventListener('input', function (e) {
                        e.target.value = e.target.value.replace(/[^0-9-]/g, '');
                        _validate10 = isDate(e.target.value);
                        if (_validate10) {
                          document.getElementById('msg-data-nascimento').innerHTML = '';
                          return formDataBasic.dt_nascimento = e.target.value;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-data-nascimento').innerHTML = "<p>Cadastro permitido a partir dos 14 anos de idade!</p>";
                          return formDataBasic.dt_nascimento = false;
                        }
                      });
                    }
                    sexo = document.getElementById('sexo');
                    if (sexo) {
                      sexo.addEventListener('input', function (e) {
                        _validate11 = isSexo(e.target.value);
                        if (_validate11) {
                          document.getElementById('msg-sexo').innerHTML = '';
                          return formDataBasic.sexo = e.target.value;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-sexo').innerHTML = "<p>Opção inválida!</p>";
                          return formDataBasic.sexo = false;
                        }
                      });
                    }
                    if (ufNaturalidade) {
                      ufNaturalidade.addEventListener('input', function (e) {
                        _validate12 = isUfNaturalidade(e.target.value);
                        if (_validate12) {
                          document.getElementById('msg-uf-naturalidade').innerHTML = '';
                          return formDataBasic.uf_naturalidade = e.target.value;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-uf-naturalidade').innerHTML = "<p>Opção inválida!</p>";
                          return formDataBasic.uf_naturalidade = false;
                        }
                      });
                    }
                    deficiencias = document.getElementById('deficiencias');
                    descDiv = document.querySelector('.descricao-deficiencia');
                    if (deficiencias) {
                      deficiencias.addEventListener('input', function (e) {
                        _validate13 = isDeficiente(listDeficiencias, e.target.value);
                        if (_validate13) {
                          document.getElementById('msg-deficiencias').innerHTML = '';
                          return formDataBasic.deficiencia = e.target.value;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-deficiencias').innerHTML = "<p>Opção inválida!</p>";
                          return formDataBasic.deficiencia = 'N';
                        }
                      });
                      deficiencias.addEventListener('input', function (e) {
                        if (e.target.value != 'Selecione' && e.target.value != 'N') {
                          var descricoesInputs = document.querySelectorAll('.descricoes');
                          if (descricoesInputs.length === 0) {
                            var descLabel = document.createElement('label');
                            var descInput = document.createElement('input');
                            descDiv.appendChild(descLabel);
                            descLabel.innerText = 'Descreva a deficiência';
                            descLabel.setAttribute('for', 'descricao');
                            descDiv.appendChild(descInput);
                            descInput.setAttribute('id', 'descricao');
                            descInput.setAttribute('class', 'descricoes');
                            descInput.setAttribute('name', 'descricaoDeficiencia');
                            descInput.setAttribute('maxlength', '255');
                          }
                        } else {
                          descDiv.innerHTML = '';
                          document.getElementById('msg-descricao').innerHTML = '';
                        }
                      });
                    }
                    document.addEventListener('input', function (e) {
                      var element = e.target;
                      var validate;
                      if (element.classList.contains('descricoes')) {
                        element.value = element.value.replace(/[0-9]/g, '');
                        validate = isDescricao(element.value);
                        if (validate) {
                          document.getElementById('msg-descricao').innerHTML = '';
                          return formDataBasic.deficiencia_descricao = e.target.value;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-descricao').innerHTML = "<p>Opção inválida!</p>";
                          return formDataBasic.deficiencia_descricao = false;
                        }
                      }
                    });
                    if (formData) {
                      formData.addEventListener('submit', function (e) {
                        e.preventDefault();
                        if (formDataBasic.nome && formDataBasic.cpf && formDataBasic.nomemae && formDataBasic.naturalidade && formDataBasic.nacionalidade && formDataBasic.estadocivil && formDataBasic.dt_nascimento && formDataBasic.sexo && formDataBasic.uf_naturalidade && formDataBasic.deficiencia && formDataBasic.rg && formDataBasic.orgaoexpedidor

                        // No caso do nomepai e carteira de trabalho não são obrigatorios
                        ) {
                          changeMains('.screen-address');
                          changeSubMainTitle('Formulário de Endereço');
                          resolve(formDataBasic);
                          document.addEventListener('click', function (event) {
                            var element = event.target;
                            if (element.classList.contains('address')) {
                              changeMains('.screen-address');
                              changeSubMainTitle('Formulário de Endereço');
                            }
                          });
                        } else {
                          document.getElementById('msg-fracasso').innerHTML = "<p>Formulário incompleto!</p>";
                          removerMensagem('msg-fracasso');
                        }
                      });
                    } else {
                      reject(new Error('O formulário não foi encontrado'));
                    }
                  case 44:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function (_x, _x2) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function initDataBasic() {
    return _ref.apply(this, arguments);
  };
}();
module.exports = initDataBasic;

/***/ }),

/***/ "./frontend/pages/main.js":
/*!********************************!*\
  !*** ./frontend/pages/main.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ../utils/util.js */ "./frontend/utils/util.js"),
  changeSubMainTitle = _require.changeSubMainTitle,
  changeMains = _require.changeMains;
var menuSideComplete = document.querySelector('.nav-bar');
var mainSide = document.querySelector('.main-side');
var mainSideMobile = document.querySelector('.main-side-mobile');
var buttonMenu = document.querySelector('.button-menu-mobile');
var fontMenuMobile = document.querySelectorAll('.main-side ul li a');
var logo = document.querySelector('.container img');
var imageButton = document.querySelector('.button-menu-mobile button img');
var mediaQuery = window.matchMedia('(max-width:920px)');
var showMenu = document.querySelector('.show-menu-side');
var closeMenu = document.querySelector('.close-menu-side');
var menuGrande, menuPequeno;
var main = function main() {
  // showMenu.addEventListener('click', function () {
  //   // if (mainSide.style.display === 'none') {

  //   // if (mainSide.style.display === 'block') {
  //   // mainSide.style.display = 'none'
  //   // mainSideMobile.style.display = 'block'
  //   // menuSideComplete.style.width = '4rem'
  //   // buttonMenu.style.marginLeft = '4.5rem'
  //   // logo.style.width = '3.5rem'
  //   // menuSideComplete.style.gap = '3rem'
  //   // imageButton.src = 'images/menu.png'
  //   // }
  //   // else {
  //   console.log('Sucesso!')
  //   mainSide.style.display = 'block'
  //   mainSideMobile.style.display = 'none'
  //   menuSideComplete.style.width = '12rem'
  //   buttonMenu.style.marginLeft = '13rem'
  //   menuSideComplete.style.gap = '0rem'
  //   closeMenu.style.display = 'block'
  //   showMenu.style.display = 'none'
  //   imageButton.src = 'images/close.png'
  //   // }
  // })
  // }

  // document.addEventListener('click', function (event) {
  //   const element = event.target

  //   if (element.classList.contains('show-menu-side')) {
  //     if (mainSide.style.display === 'none') {
  //       // mainSide.style.display = 'none'
  //       // mainSideMobile.style.display = 'block'
  //       // menuSideComplete.style.width = '4rem'
  //       // buttonMenu.style.marginLeft = '4.5rem'
  //       // logo.style.width = '3.5rem'
  //       // menuSideComplete.style.gap = '3rem'
  //       // imageButton.src = 'images/menu.png'
  //       // menuGrande = false
  //       // }
  //       // if (!menuGrande)
  //       // else {
  //       //   mainSide.style.display = 'block'
  //       //   mainSideMobile.style.display = 'none'
  //       //   menuSideComplete.style.width = '12rem'
  //       //   buttonMenu.style.marginLeft = '13rem'
  //       //   menuSideComplete.style.gap = '0rem'
  //       //   imageButton.src = 'images/close.png'
  //       // menuPequeno = false

  //       const changeMediaQuery = mediaQuery => {
  //         if (mediaQuery.matches) {
  //           for (let i = 0; i < fontMenuMobile.length; i++) {
  //             fontMenuMobile[i].style.fontSize = '0.7rem'
  //           }

  //           logo.style.width = '11rem'
  //           mainSide.style.marginTop = '1.5rem'
  //         } else {
  //           for (let i = 0; i < fontMenuMobile.length; i++) {
  //             fontMenuMobile[i].style.fontSize = '1.2rem'
  //           }

  //           mainSide.style.display = 'block'
  //           buttonMenu.style.marginLeft = '13rem'
  //           menuSideComplete.style.width = '12rem'
  //           mainSideMobile.style.display = 'none'
  //           logo.style.width = '10rem'
  //         }
  //       }

  //       changeMediaQuery(mediaQuery)
  //       mediaQuery.addEventListener('change', changeMediaQuery)
  //     }
  //   } else {
  //     const changeMediaQueryOut = () => {
  //       if (mediaQuery.matches) {
  //         if (element.classList.contains('main')) {
  //           return
  //         } else {
  //           if (mainSide.style.display === 'block') {
  //             mainSide.style.display = 'none'
  //             mainSideMobile.style.display = 'block'
  //             menuSideComplete.style.width = '4rem'
  //             buttonMenu.style.marginLeft = '4.5rem'
  //             logo.style.width = '3.5rem'
  //             menuSideComplete.style.gap = '3rem'
  //             imageButton.src = 'images/menu.png'
  //           }
  //         }
  //       }

  //     }
  //     changeMediaQueryOut(mediaQuery)
  //   }
  // })

  function mainPage() {
    document.addEventListener('click', function (event) {
      var element = event.target;
      if (element.classList.contains('terms-conditions')) {
        changeMains('.screen-terms-conditions');
        changeSubMainTitle('Termos e condições');
      }
      // if (element.classList.contains('school-data')) {
      //   changeMains('.screen-school-data')
      //   changeSubMainTitle('Formulário de Dados Acadêmicos')
      // }
      if (element.classList.contains('button-back-address')) {
        changeMains('.screen-basic-data1');
        changeSubMainTitle('Formulário de Dados Básicos');
      }
      if (element.classList.contains('button-back-school')) {
        changeMains('.screen-address');
        changeSubMainTitle('Formulário de Endereço');
      }
    });
  }
  mainPage();
};
module.exports = main;

/***/ }),

/***/ "./frontend/pages/schoolData.js":
/*!**************************************!*\
  !*** ./frontend/pages/schoolData.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = __webpack_require__(/*! ../utils/util */ "./frontend/utils/util.js"),
  isDateFormatura = _require.isDateFormatura,
  isSchool = _require.isSchool,
  isCourse = _require.isCourse,
  removerMensagem = _require.removerMensagem,
  isvalid = _require.isvalid,
  isSemestre = _require.isSemestre,
  isMesFormatura = _require.isMesFormatura,
  isPeriodo = _require.isPeriodo,
  isHorario = _require.isHorario;
function createFormSchoolData() {
  return _createFormSchoolData.apply(this, arguments);
}
function _createFormSchoolData() {
  _createFormSchoolData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          return _context12.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
              var response, htmlContent, schoolData, formSchoolData, anoFormatura, inicio, fim, anosFormaturas, i, _i, option, semestreFormatura, semestresFormaturas, _i2, _option, mesFormatura, mesesFormaturas, _i3, _option2, periodo, periodos, _i4, _option3, horario, _i5, _option4, mostrarOpcoesAutocompleteHorario, dataFormSchool, escolas, cursos, codigoEscola, idCursoFinal, idCurso, codeFinal, mostrarOpcoesAutocompleteEscolas, _mostrarOpcoesAutocompleteEscolas, mostrarOpcoesAutocompleteCursos, _mostrarOpcoesAutocompleteCursos, filtrarCursos, _filtrarCursos, filtrarIdCurso, _filtrarIdCurso, callCourse, alertEnd, today;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    _filtrarIdCurso = function _filtrarIdCurso3() {
                      _filtrarIdCurso = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(descricaoCurso) {
                        var _i10, cursoId;
                        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                          while (1) switch (_context10.prev = _context10.next) {
                            case 0:
                              _i10 = 0;
                            case 1:
                              if (!(_i10 < idCurso.length)) {
                                _context10.next = 8;
                                break;
                              }
                              cursoId = {
                                descricao: idCurso[_i10].descricao,
                                idcurso: idCurso[_i10].idcurso
                              };
                              if (!(cursoId.descricao === descricaoCurso)) {
                                _context10.next = 5;
                                break;
                              }
                              return _context10.abrupt("return", idCursoFinal = cursoId.idcurso);
                            case 5:
                              _i10++;
                              _context10.next = 1;
                              break;
                            case 8:
                            case "end":
                              return _context10.stop();
                          }
                        }, _callee10);
                      }));
                      return _filtrarIdCurso.apply(this, arguments);
                    };
                    filtrarIdCurso = function _filtrarIdCurso2(_x6) {
                      return _filtrarIdCurso.apply(this, arguments);
                    };
                    _filtrarCursos = function _filtrarCursos3() {
                      _filtrarCursos = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(data) {
                        var _i9, codeEscola;
                        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                          while (1) switch (_context9.prev = _context9.next) {
                            case 0:
                              _i9 = 0;
                            case 1:
                              if (!(_i9 < codigoEscola.length)) {
                                _context9.next = 8;
                                break;
                              }
                              codeEscola = {
                                razaosocial: codigoEscola[_i9].razaosocial,
                                id: codigoEscola[_i9].id
                              };
                              if (!(codeEscola.razaosocial === data)) {
                                _context9.next = 5;
                                break;
                              }
                              return _context9.abrupt("return", codeFinal = codeEscola.id);
                            case 5:
                              _i9++;
                              _context9.next = 1;
                              break;
                            case 8:
                            case "end":
                              return _context9.stop();
                          }
                        }, _callee9);
                      }));
                      return _filtrarCursos.apply(this, arguments);
                    };
                    filtrarCursos = function _filtrarCursos2(_x5) {
                      return _filtrarCursos.apply(this, arguments);
                    };
                    _mostrarOpcoesAutocompleteCursos = function _mostrarOpcoesAutocom5() {
                      _mostrarOpcoesAutocompleteCursos = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(opcoes) {
                        var option1, _i8, _option7;
                        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                          while (1) switch (_context8.prev = _context8.next) {
                            case 0:
                              cursos.innerHTML = '';
                              option1 = document.createElement('option');
                              option1.disabled = 'disabled';
                              option1.selected = 'selected';
                              option1.text = 'Selecione';
                              cursos.appendChild(option1);
                              for (_i8 = 0; _i8 < opcoes.length; _i8++) {
                                _option7 = document.createElement('option');
                                _option7.text = opcoes[_i8].descricao;
                                _option7.value = opcoes[_i8].descricao;
                                cursos.appendChild(_option7);
                              }
                              $(cursos).selectpicker('refresh');
                            case 8:
                            case "end":
                              return _context8.stop();
                          }
                        }, _callee8);
                      }));
                      return _mostrarOpcoesAutocompleteCursos.apply(this, arguments);
                    };
                    mostrarOpcoesAutocompleteCursos = function _mostrarOpcoesAutocom4(_x4) {
                      return _mostrarOpcoesAutocompleteCursos.apply(this, arguments);
                    };
                    _mostrarOpcoesAutocompleteEscolas = function _mostrarOpcoesAutocom3() {
                      _mostrarOpcoesAutocompleteEscolas = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(opcoes) {
                        var option1, _i7, _option6;
                        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                          while (1) switch (_context7.prev = _context7.next) {
                            case 0:
                              escolas.innerHTML = '';
                              option1 = document.createElement('option');
                              option1.disabled = 'disabled';
                              option1.selected = 'selected';
                              option1.text = 'Selecione';
                              escolas.appendChild(option1);
                              for (_i7 = 0; _i7 < opcoes.length; _i7++) {
                                _option6 = document.createElement('option');
                                _option6.text = opcoes[_i7].razaosocial;
                                _option6.value = opcoes[_i7].razaosocial;
                                escolas.appendChild(_option6);
                              }
                              $(escolas).selectpicker('refresh');
                            case 8:
                            case "end":
                              return _context7.stop();
                          }
                        }, _callee7);
                      }));
                      return _mostrarOpcoesAutocompleteEscolas.apply(this, arguments);
                    };
                    mostrarOpcoesAutocompleteEscolas = function _mostrarOpcoesAutocom2(_x3) {
                      return _mostrarOpcoesAutocompleteEscolas.apply(this, arguments);
                    };
                    mostrarOpcoesAutocompleteHorario = function _mostrarOpcoesAutocom(horariosEstudos) {
                      horario.innerHTML = '';
                      var option1 = document.createElement('option');
                      option1.disabled = 'disabled';
                      option1.selected = 'selected';
                      option1.text = 'Selecione';
                      horario.appendChild(option1);
                      for (var _i6 = 0; _i6 < horariosEstudos.length; _i6++) {
                        var _option5 = document.createElement('option');
                        _option5.text = horariosEstudos[_i6];
                        _option5.value = horariosEstudos[_i6];
                        horario.appendChild(_option5);
                      }
                      $(horario).selectpicker('refresh');
                    };
                    _context11.next = 11;
                    return fetch('schoolData');
                  case 11:
                    response = _context11.sent;
                    _context11.next = 14;
                    return response.text();
                  case 14:
                    htmlContent = _context11.sent;
                    schoolData = document.querySelector('.screen-school-data');
                    schoolData.innerHTML = htmlContent;
                    formSchoolData = document.querySelector('.form-school-data');
                    anoFormatura = document.getElementById('ano-formatura');
                    inicio = 1990;
                    fim = 2030;
                    anosFormaturas = [];
                    for (i = inicio; i <= fim; i++) {
                      anosFormaturas.push(i);
                    }
                    for (_i = 0; _i < anosFormaturas.length; _i++) {
                      option = document.createElement('option');
                      option.text = anosFormaturas[_i];
                      option.value = anosFormaturas[_i];
                      anoFormatura.appendChild(option);
                    }
                    semestreFormatura = document.getElementById('semestre-formatura');
                    semestresFormaturas = [1, 2, 'Estágio Curricular'];
                    for (_i2 = 0; _i2 < semestresFormaturas.length; _i2++) {
                      _option = document.createElement('option');
                      _option.text = semestresFormaturas[_i2];
                      _option.value = semestresFormaturas[_i2];
                      semestreFormatura.appendChild(_option);
                    }
                    mesFormatura = document.getElementById('mes-formatura');
                    mesesFormaturas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
                    for (_i3 = 0; _i3 < mesesFormaturas.length; _i3++) {
                      _option2 = document.createElement('option');
                      _option2.text = mesesFormaturas[_i3];
                      _option2.value = mesesFormaturas[_i3];
                      mesFormatura.appendChild(_option2);
                    }
                    periodo = document.getElementById('periodo');
                    periodos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'Estágio Curricular'];
                    for (_i4 = 0; _i4 < periodos.length; _i4++) {
                      _option3 = document.createElement('option');
                      _option3.text = periodos[_i4];
                      _option3.value = periodos[_i4];
                      periodo.appendChild(_option3);
                    }
                    horario = document.querySelector('.horario-estudo-search select');
                    horariosEstudos = ['Manhã', 'Tarde', 'Noite', 'EAD', 'Estágio Curricular', 'Formado'];
                    for (_i5 = 0; _i5 < horariosEstudos.length; _i5++) {
                      _option4 = document.createElement('option');
                      _option4.text = horariosEstudos[_i5];
                      _option4.value = horariosEstudos[_i5];
                      horario.appendChild(_option4);
                    }
                    dataFormSchool = {};
                    escolas = document.querySelector('.escola-search select');
                    cursos = document.querySelector('.curso-search select');
                    codigoEscola = {};
                    idCurso = {};
                    callCourse = /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                        var _response, opcoes;
                        return _regeneratorRuntime().wrap(function _callee$(_context) {
                          while (1) switch (_context.prev = _context.next) {
                            case 0:
                              _context.prev = 0;
                              _context.next = 3;
                              return fetch("http://localhost:8082/cadastrarCurso?termo=".concat(codeFinal));
                            case 3:
                              _response = _context.sent;
                              if (!_response.ok) {
                                _context.next = 12;
                                break;
                              }
                              _context.next = 7;
                              return _response.json();
                            case 7:
                              opcoes = _context.sent;
                              idCurso = opcoes;
                              mostrarOpcoesAutocompleteCursos(opcoes);
                              _context.next = 13;
                              break;
                            case 12:
                              console.log('Erro na solicitação:', _response.statusText);
                            case 13:
                              _context.next = 18;
                              break;
                            case 15:
                              _context.prev = 15;
                              _context.t0 = _context["catch"](0);
                              console.error('Erro:', _context.t0);
                            case 18:
                            case "end":
                              return _context.stop();
                          }
                        }, _callee, null, [[0, 15]]);
                      }));
                      return function callCourse() {
                        return _ref2.apply(this, arguments);
                      };
                    }();
                    $(document).ready( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                      var input, validate, opcoes;
                      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                        while (1) switch (_context4.prev = _context4.next) {
                          case 0:
                            $('.escola-search select').selectpicker();
                            input = document.querySelector('.escola-search input');
                            input.addEventListener('input', /*#__PURE__*/function () {
                              var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
                                var element, _response2, SchoolFound;
                                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                                  while (1) switch (_context2.prev = _context2.next) {
                                    case 0:
                                      element = e.target;
                                      _context2.prev = 1;
                                      _context2.next = 4;
                                      return fetch("http://localhost:8082/cadastrarEscola?termo=".concat(element.value));
                                    case 4:
                                      _response2 = _context2.sent;
                                      if (!_response2.ok) {
                                        _context2.next = 13;
                                        break;
                                      }
                                      _context2.next = 8;
                                      return _response2.json();
                                    case 8:
                                      opcoes = _context2.sent;
                                      mostrarOpcoesAutocompleteEscolas(opcoes);
                                      codigoEscola = opcoes;
                                      _context2.next = 14;
                                      break;
                                    case 13:
                                      console.log('Erro na solicitação:', _response2.statusText);
                                    case 14:
                                      _context2.next = 19;
                                      break;
                                    case 16:
                                      _context2.prev = 16;
                                      _context2.t0 = _context2["catch"](1);
                                      console.error('Erro:', _context2.t0);
                                    case 19:
                                      SchoolFound = document.querySelector('.school-found');
                                      if (opcoes.length === 0) {
                                        SchoolFound.style.display = 'block';
                                        if (SchoolFound.style.display === 'block') {
                                          document.addEventListener('click', function (e) {
                                            var element = e.target;
                                            if (element.classList.contains('button-confirm-school')) {
                                              SchoolFound.style.display = 'none';
                                            }
                                          });
                                        }
                                      }
                                    case 21:
                                    case "end":
                                      return _context2.stop();
                                  }
                                }, _callee2, null, [[1, 16]]);
                              }));
                              return function (_x7) {
                                return _ref4.apply(this, arguments);
                              };
                            }());
                            $('.escola-search select').change( /*#__PURE__*/function () {
                              var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
                                var data;
                                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                                  while (1) switch (_context3.prev = _context3.next) {
                                    case 0:
                                      data = e.currentTarget.value;
                                      filtrarCursos(data);
                                      _context3.next = 4;
                                      return isSchool(data, codeFinal);
                                    case 4:
                                      validate = _context3.sent;
                                      if (validate) {
                                        document.getElementById("msg-escola").innerHTML = "";
                                        callCourse();
                                        dataFormSchool.escola_id = codeFinal;
                                      } else {
                                        document.getElementById("msg-escola").innerHTML = "<p>Escola inválida!</p>";
                                        dataFormSchool.escola_id = false;
                                      }
                                    case 6:
                                    case "end":
                                      return _context3.stop();
                                  }
                                }, _callee3);
                              }));
                              return function (_x8) {
                                return _ref5.apply(this, arguments);
                              };
                            }());
                          case 4:
                          case "end":
                            return _context4.stop();
                        }
                      }, _callee4);
                    })));
                    $(document).ready(function () {
                      $('.curso-search select').selectpicker();
                      $('.curso-search select').change( /*#__PURE__*/function () {
                        var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(e) {
                          var data, validate;
                          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                            while (1) switch (_context5.prev = _context5.next) {
                              case 0:
                                data = e.currentTarget.value;
                                filtrarIdCurso(data);
                                _context5.next = 4;
                                return isCourse(data, codeFinal, idCursoFinal);
                              case 4:
                                validate = _context5.sent;
                                if (validate) {
                                  document.getElementById("msg-curso").innerHTML = "";
                                  dataFormSchool.curso_id = idCursoFinal;
                                } else {
                                  document.getElementById("msg-curso").innerHTML = "<p>Curso inválido!</p>";
                                  dataFormSchool.curso_id = false;
                                }
                              case 6:
                              case "end":
                                return _context5.stop();
                            }
                          }, _callee5);
                        }));
                        return function (_x9) {
                          return _ref6.apply(this, arguments);
                        };
                      }());
                      $('.ano-formatura-search select').selectpicker();
                      $('.ano-formatura-search select').change(function (e) {
                        var data = e.currentTarget.value;
                        var validate;
                        var valid;
                        validate = isDateFormatura(data, inicio, fim);
                        valid = isvalid(data);
                        var horarioIncompleto;
                        if (validate) {
                          document.getElementById("msg-ano").innerHTML = "";
                          dataFormSchool.previsao_ano = data;
                          if (!valid) {
                            horarioIncompleto = ['Estágio Curricular', 'Formado'];
                            mostrarOpcoesAutocompleteHorario(horarioIncompleto);
                            document.getElementById('div-periodo').style.display = 'none';
                            document.getElementById('periodo').style.display = true;
                          } else {
                            document.getElementById('div-periodo').style.display = 'block';
                            document.getElementById('periodo').style.display = false;
                            horarioIncompleto = [];
                            mostrarOpcoesAutocompleteHorario(horariosEstudos);
                          }
                        } else {
                          document.getElementById("msg-ano").innerHTML = "<p>Ano inválido!</p>";
                          dataFormSchool.previsao_ano = false;
                        }
                      });
                      $('.semestre-formatura-search select').selectpicker();
                      $('.semestre-formatura-search select').change(function (e) {
                        var data = e.currentTarget.value;
                        var validate;
                        validate = isSemestre(data);
                        if (validate) {
                          document.getElementById("msg-semestre-formatura").innerHTML = "";
                          dataFormSchool.previsao_semestre = data;
                        } else {
                          document.getElementById("msg-semestre-formatura").innerHTML = "<p>Semestre de fomartura inválido!</p>";
                          dataFormSchool.previsao_semestre = false;
                        }
                      });
                      $('.mes-formatura-search select').selectpicker();
                      $('.mes-formatura-search select').change(function (e) {
                        var data = e.currentTarget.value;
                        var validate = isMesFormatura(data);
                        if (validate) {
                          document.getElementById("msg-mes-formatura").innerHTML = "";
                          dataFormSchool.previsao_mes = data;
                        } else {
                          document.getElementById("msg-mes-formatura").innerHTML = "<p>Mês de fomartura inválido!</p>";
                          dataFormSchool.previsao_mes = false;
                        }
                      });
                      $('.periodo-search select').selectpicker();
                      $('.periodo-search select').change(function (e) {
                        var data = e.currentTarget.value;
                        var validate = isPeriodo(data);
                        if (validate) {
                          document.getElementById("msg-periodo").innerHTML = "";
                          dataFormSchool.periodo = data;
                        } else {
                          document.getElementById("msg-periodo").innerHTML = "<p>Mês de fomartura inválido!</p>";
                          dataFormSchool.periodo = false;
                        }
                      });
                      $('.horario-estudo-search select').selectpicker();
                      $('.horario-estudo-search select').change(function (e) {
                        var data = e.currentTarget.value;
                        var validate = isHorario(data);
                        if (validate) {
                          document.getElementById("msg-periodo").innerHTML = "";
                          dataFormSchool.horario = data;
                        } else {
                          document.getElementById("msg-periodo").innerHTML = "<p>Mês de fomartura inválido!</p>";
                          dataFormSchool.horario = false;
                        }
                      });
                    });
                    alertEnd = document.querySelector('.end');
                    today = new Date();
                    if (formSchoolData) {
                      formSchoolData.addEventListener('submit', /*#__PURE__*/function () {
                        var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e) {
                          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                            while (1) switch (_context6.prev = _context6.next) {
                              case 0:
                                e.preventDefault();
                                if (dataFormSchool.escola_id && dataFormSchool.curso_id && dataFormSchool.previsao_semestre && dataFormSchool.previsao_ano && dataFormSchool.previsao_mes && dataFormSchool.horario

                                // O dataFormSchool.periodo não é obrigatório
                                ) {
                                  dataFormSchool.ano = today.getFullYear();
                                  alertEnd.style.display = 'block';
                                  resolve(dataFormSchool);
                                } else {
                                  document.getElementById("msg-fracasso-school").innerHTML = "<p>Formulário incompleto!</p>";
                                  removerMensagem('msg-fracasso-school');
                                }
                              case 2:
                              case "end":
                                return _context6.stop();
                            }
                          }, _callee6);
                        }));
                        return function (_x10) {
                          return _ref7.apply(this, arguments);
                        };
                      }());
                    } else {
                      console.log('Erro ao enviar os dados para o banco!');
                      reject(error);
                    }
                  case 47:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11);
            }));
            return function (_x, _x2) {
              return _ref.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _createFormSchoolData.apply(this, arguments);
}
module.exports = createFormSchoolData;

/***/ }),

/***/ "./frontend/pages/terms-and-conditions.js":
/*!************************************************!*\
  !*** ./frontend/pages/terms-and-conditions.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = __webpack_require__(/*! ../utils/util */ "./frontend/utils/util.js"),
  changeMains = _require.changeMains,
  changeSubMainTitle = _require.changeSubMainTitle,
  dateTime = _require.dateTime;
function termsAndConditions() {
  return _termsAndConditions.apply(this, arguments);
}
function _termsAndConditions() {
  _termsAndConditions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
              var response, contetHtml, termsCondtions, menuSide, termoBox, title, schoolData;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return fetch('terms-and-conditions');
                  case 2:
                    response = _context2.sent;
                    _context2.next = 5;
                    return response.text();
                  case 5:
                    contetHtml = _context2.sent;
                    termsCondtions = document.querySelector('.terms-and-conditions');
                    menuSide = document.querySelector('.nav-bar');
                    termoBox = document.querySelector('.termos-box');
                    title = document.querySelector('.sub-main-title');
                    schoolData = {};
                    termsCondtions.innerHTML = contetHtml;
                    document.addEventListener('click', /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
                        var checkbox;
                        return _regeneratorRuntime().wrap(function _callee$(_context) {
                          while (1) switch (_context.prev = _context.next) {
                            case 0:
                              element = e.target;
                              if (element.classList.contains('button-termo') || element.classList.contains('terms-and-conditions') || element.classList.contains('p-t-c') || element.classList.contains("h1-t-c") || element.classList.contains("h2-t-c") || element.classList.contains("s-t-c") || element.classList.contains("a-t-c") || element.classList.contains("check-term") || element.classList.contains("label-li") || element.classList.contains("input-li") || element.classList.contains("checkbox") || element.classList.contains("text-terms-conditions") || element.classList.contains("title-terms") || element.classList.contains("button-terms-a-d") || element.classList.contains("terms-input-label")) {
                                termsCondtions.style.display = 'block';
                                menuSide.style.visibility = 'hidden';
                                termoBox.style.display = 'none';
                                title.style.visibility = 'hidden';
                              } else {
                                termsCondtions.style.display = 'none';
                                menuSide.style.visibility = 'visible';
                                termoBox.style.display = 'flex';
                                title.style.visibility = 'visible';
                              }
                              if (element.classList.contains('button-decline')) {
                                schoolData.termos_condicoes = 0;
                              }
                              if (element.classList.contains("button-accept")) {
                                schoolData.termos_condicoes = 1;
                                schoolData.dt_aceite_termos = dateTime();
                              }
                              if (element.classList.contains('button-termo-1') || element.classList.contains('basic-data')) {
                                if (schoolData.termos_condicoes) {
                                  changeMains('.screen-basic-data1');
                                  changeSubMainTitle('Formulário de Dados Básicos');
                                  resolve(schoolData);
                                } else {
                                  e.preventDefault();
                                }
                              }
                              checkbox = document.getElementById('li-concordo');
                              if (checkbox.checked === true) {
                                document.getElementById("button-accept").disabled = false;
                              } else {
                                document.getElementById("button-accept").disabled = true;
                              }
                            case 7:
                            case "end":
                              return _context.stop();
                          }
                        }, _callee);
                      }));
                      return function (_x3) {
                        return _ref2.apply(this, arguments);
                      };
                    }());
                    $(document).ready(function () {
                      document.getElementById("li-concordo").disabled = true;
                      var a = navigator.userAgent || navigator.vendor || window.opera;
                      var isMobile = /android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile|o2|opera m(ob|in)i|palm( os)?|p(ixi|re)\/|plucker|pocket|psp|smartphone|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce; (iemobile|ppc)|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a);
                      var scrollEvent = isMobile ? 'touchmove' : 'scroll';
                      $('.text-terms-conditions').bind(scrollEvent, function () {
                        /*
                        * scrollTop -> Quanto rolou
                        * innerHeight -> Altura do interior da div
                        * scrollHeight -> Altura do conteúdo da div
                        */
                        if ($(this).scrollTop() + $(this).innerHeight() >= this.scrollHeight) {
                          document.getElementById("li-concordo").disabled = false;
                        } else {
                          document.getElementById("li-concordo").disabled = true;
                        }
                      });
                    });
                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function (_x, _x2) {
              return _ref.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _termsAndConditions.apply(this, arguments);
}
module.exports = termsAndConditions;

/***/ }),

/***/ "./frontend/utils/util.js":
/*!********************************!*\
  !*** ./frontend/utils/util.js ***!
  \********************************/
/***/ ((module) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// Cria o elemento label para o nome, seta os atributos e preenche a label
var createLabel = function createLabel(forAttribute, text) {
  var label = document.createElement('label');
  label.setAttribute('for', forAttribute);
  label.innerText = text;
  return label;
};

// Cria um campo de entrada de texto para o nome e seta os atributos para colocar o parametro conforme necessário ao input
var createInput = function createInput(type, name, id, placeholder, classe) {
  var input = document.createElement('input');
  input.setAttribute('type', type);
  input.setAttribute('name', name);
  input.setAttribute('id', id);
  input.setAttribute('placeholder', placeholder);
  input.setAttribute('class', classe);
  return input;
};

// Cria o elemento <form>
var createForm = function createForm(classe) {
  var form = document.createElement('form');
  form.setAttribute('class', classe);
  return form;
};

// Cria o elemento link
var createLink = function createLink(rel, href) {
  var cssLink = document.createElement('link');
  cssLink.setAttribute('rel', rel);
  cssLink.setAttribute('href', href);
  return cssLink;
};
var createButton = function createButton(text, classe, type) {
  var button = document.createElement('button');
  button.setAttribute('class', classe);
  button.setAttribute('type', type);
  button.innerText = text;
  return button;
};
var createDiv = function createDiv(classe, text) {
  var div = document.createElement('div');
  div.setAttribute('class', classe);
  div.innerText = text;
  return div;
};
var createSelect = function createSelect(id, name) {
  var select = document.createElement('select');
  select.setAttribute('id', id);
  select.setAttribute('name', name);
  return select;
};
var createOption = function createOption(value, text, name) {
  var options = document.createElement('option');
  if (options.text === 'Estágio Curricular') {
    options.value = 'esc';
  } else {
    options.value = value;
  }
  options.text = text;
  options.name = name;
  return options;
};
var putOption = function putOption(list) {
  var placeholderOption = document.createElement('option');
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  placeholderOption.text = 'Selecione';
  var options = [placeholderOption];
  for (var i = 0; i < list.length; i++) {
    var option = createOption(list[i], list[i], list[i]);
    options.push(option);
  }
  return options;
};
var carregarPaginaHtml = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
    var resposta, conteudoHtml;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch(url);
        case 3:
          resposta = _context.sent;
          _context.next = 6;
          return resposta.text();
        case 6:
          conteudoHtml = _context.sent;
          return _context.abrupt("return", conteudoHtml);
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error('Erro ao carregar a página:', _context.t0);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function carregarPaginaHtml(_x) {
    return _ref.apply(this, arguments);
  };
}();
var adicionarPaginaHtml = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, elemento) {
    var conteudoHtml;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return carregarPaginaHtml(url);
        case 2:
          conteudoHtml = _context2.sent;
          return _context2.abrupt("return", elemento.innerHTML = conteudoHtml);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function adicionarPaginaHtml(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var changeSubMainTitle = function changeSubMainTitle(text) {
  var subTitle = document.querySelector('.sub-main-title h1');
  return subTitle.innerText = text;
};
var changeMains = function changeMains(nameClass) {
  var screens = document.querySelectorAll('.screen');
  for (var i = 0; i < screens.length; i++) {
    screens[i].style.display = 'none';
  }
  var screen = document.querySelector(nameClass);
  if (screen) {
    screen.style.display = 'block';
  }
};

// Função com a lista de erros
var listInputValidate = function listInputValidate() {
  var listInputValidate = {
    name: 'Necessário preencher o campo nome!',
    cpf: 'Necessário preencher o campo CPF!',
    'nome-mae': 'Necessário preencher o campo nome da mãe!',
    'nome-pai': 'Necessário preencher o campo nome da pai!',
    'carteira-trabalho': 'Necessário preencher o campo carteira de trabalho!',
    naturalidade: 'Necessário preencher o campo naturalidade!',
    nacionalidade: 'Necessário preencher o campo nacionalidade!',
    'estado-civil': 'Necessário preencher o campo estado civil!',
    'data-nascimento': 'Necessário preencher o campo da data de nascimento!',
    sexo: 'Necessário preencher o campo sexo!',
    'uf-naturalidade': 'Necessário preencher o campo uf naturalidade!',
    deficiencias: 'Necessário preencher o campo "Se possui alguma deficiência?'
  };
  return listInputValidate;
};
var isNome = function isNome(nome) {
  nome = nome.trim();
  var nomeSemEspaco = nome.replace(' ', '');
  if (nome.length === 0 || nomeSemEspaco === nome || nomeSemEspaco.length === 0 || nomeSemEspaco.length < 3
  // Depois tem que fazer uma regra para o numero de letras em cada nome
  ) {
    return false;
  }
  var regex = new RegExp("^[0-9]+$");
  if (regex.test(nome)) {
    return false;
  }
  nome = parseInt(nome);
  if (nome) {
    return false;
  }
  return true;
};
var isSchool = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(school, idSchool) {
    var likeSchool, schoolVerification, idSchoolVerification, response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          likeSchool = {};
          _context3.prev = 1;
          _context3.next = 4;
          return fetch("http://localhost:8082/cadastrarEscola?termo=".concat(school));
        case 4:
          response = _context3.sent;
          if (!response.ok) {
            _context3.next = 12;
            break;
          }
          _context3.next = 8;
          return response.json();
        case 8:
          likeSchool = _context3.sent;
          likeSchool = likeSchool.map(function (school) {
            return {
              razaoSocial: school.razaosocial,
              id: school.id
            };
          });
          _context3.next = 13;
          break;
        case 12:
          console.log('Erro na solicitação:', response.statusText);
        case 13:
          _context3.next = 18;
          break;
        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](1);
          console.error('Erro:', _context3.t0);
        case 18:
          _context3.t1 = _regeneratorRuntime().keys(likeSchool);
        case 19:
          if ((_context3.t2 = _context3.t1()).done) {
            _context3.next = 27;
            break;
          }
          chave = _context3.t2.value;
          if (!(likeSchool[chave]['razaoSocial'] === school && likeSchool[chave]['id'] === idSchool)) {
            _context3.next = 25;
            break;
          }
          idSchoolVerification = likeSchool[chave]['id'];
          schoolVerification = likeSchool[chave]['razaoSocial'];
          return _context3.abrupt("break", 27);
        case 25:
          _context3.next = 19;
          break;
        case 27:
          if (!(schoolVerification !== school)) {
            _context3.next = 29;
            break;
          }
          return _context3.abrupt("return", false);
        case 29:
          if (!(idSchool !== idSchoolVerification)) {
            _context3.next = 31;
            break;
          }
          return _context3.abrupt("return", false);
        case 31:
          if (!(school.length === 0)) {
            _context3.next = 33;
            break;
          }
          return _context3.abrupt("return", false);
        case 33:
          return _context3.abrupt("return", true);
        case 34:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 15]]);
  }));
  return function isSchool(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
var isCourse = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(course, codeCourse, idCourse) {
    var likeCourse, courseVerification, courseIdVerification, response;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          likeCourse = {};
          _context4.prev = 1;
          _context4.next = 4;
          return fetch("http://localhost:8082/cadastrarCurso?termo=".concat(codeCourse));
        case 4:
          response = _context4.sent;
          if (!response.ok) {
            _context4.next = 12;
            break;
          }
          _context4.next = 8;
          return response.json();
        case 8:
          likeCourse = _context4.sent;
          likeCourse = likeCourse.map(function (course) {
            return {
              descricao: course.descricao,
              idcurso: course.idcurso
            };
          });
          _context4.next = 13;
          break;
        case 12:
          console.log('Erro na solicitação:', response.statusText);
        case 13:
          _context4.next = 18;
          break;
        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](1);
          console.error('Erro:', _context4.t0);
        case 18:
          _context4.t1 = _regeneratorRuntime().keys(likeCourse);
        case 19:
          if ((_context4.t2 = _context4.t1()).done) {
            _context4.next = 27;
            break;
          }
          chave = _context4.t2.value;
          if (!(likeCourse[chave]['descricao'] === course && likeCourse[chave]['idcurso'] === idCourse)) {
            _context4.next = 25;
            break;
          }
          courseVerification = likeCourse[chave]['descricao'];
          courseIdVerification = likeCourse[chave]['idcurso'];
          return _context4.abrupt("break", 27);
        case 25:
          _context4.next = 19;
          break;
        case 27:
          if (!(courseVerification !== course)) {
            _context4.next = 29;
            break;
          }
          return _context4.abrupt("return", false);
        case 29:
          if (!(courseIdVerification !== idCourse)) {
            _context4.next = 31;
            break;
          }
          return _context4.abrupt("return", false);
        case 31:
          if (!(course.length === 0)) {
            _context4.next = 33;
            break;
          }
          return _context4.abrupt("return", false);
        case 33:
          return _context4.abrupt("return", true);
        case 34:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 15]]);
  }));
  return function isCourse(_x6, _x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var isNaturalidadeNacionalidade = function isNaturalidadeNacionalidade(naturalidadeNacionalidade) {
  naturalidadeNacionalidade = naturalidadeNacionalidade.trim();
  if (naturalidadeNacionalidade.length === 0) {
    return false;
  }
  var regex = new RegExp(/^[0-9]+$/);
  if (regex.test(naturalidadeNacionalidade)) {
    return false;
  }
  naturalidadeNacionalidade = parseInt(naturalidadeNacionalidade);
  if (naturalidadeNacionalidade) {
    return false;
  }
  return true;
};
var isCtps = function isCtps(valor) {
  valor = valor.trim();
  var regex = new RegExp(/^[0-9]+$/);
  if (!regex.test(valor)) {
    return false;
  }
  var valorSemEspaco = valor.replace(' ', '');
  if (valor.length === 0 || valor != valorSemEspaco || valorSemEspaco.length === 0 || valorSemEspaco.length < 7) {
    return false;
  }
  valor = parseInt(valor);
  if (!valor) {
    return false;
  }
  return true;
};
var isRg = function isRg(valor) {
  valor = valor.trim();
  valor = valor.replace(/[^0-9]/g, '');
  var valorSemEspaco = valor.replace(' ', '');
  if (valor.length === 0 || valor != valorSemEspaco || valorSemEspaco.length === 0) {
    return false;
  }
  valor = parseInt(valor);
  if (!valor) {
    return false;
  }
  return true;
};
var isCpf = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var cpf,
      cpfBd,
      response,
      opcoes,
      regex,
      _args5 = arguments;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          cpf = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : 0;
          _context5.prev = 1;
          _context5.next = 4;
          return fetch("http://localhost:8082/verificarEstudante?termo=".concat(cpf));
        case 4:
          response = _context5.sent;
          if (!response.ok) {
            _context5.next = 12;
            break;
          }
          _context5.next = 8;
          return response.json();
        case 8:
          opcoes = _context5.sent;
          cpfBd = opcoes.map(function (cpf) {
            return cpf.cpf;
          });
          _context5.next = 13;
          break;
        case 12:
          console.log('Erro na solicitação:', response.statusText);
        case 13:
          _context5.next = 18;
          break;
        case 15:
          _context5.prev = 15;
          _context5.t0 = _context5["catch"](1);
          console.error('Erro:', _context5.t0);
        case 18:
          if (!(cpfBd[0] === cpf)) {
            _context5.next = 20;
            break;
          }
          return _context5.abrupt("return", false);
        case 20:
          regex = new RegExp(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/);
          if (regex.test(cpf)) {
            _context5.next = 23;
            break;
          }
          return _context5.abrupt("return", false);
        case 23:
          cpf = cpf.replace(/\.|-/g, '');
          if (validaPrimeiroDigito(cpf)) {
            _context5.next = 26;
            break;
          }
          return _context5.abrupt("return", false);
        case 26:
          if (validaSegundoDigito(cpf)) {
            _context5.next = 28;
            break;
          }
          return _context5.abrupt("return", false);
        case 28:
          return _context5.abrupt("return", true);
        case 29:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 15]]);
  }));
  return function isCpf() {
    return _ref5.apply(this, arguments);
  };
}();
var validaPrimeiroDigito = function validaPrimeiroDigito(cpf) {
  var soma = 0;
  for (var i = 0; i < cpf.length - 2; i++) {
    soma += cpf[i] * (cpf.length - 1 - i);
  }
  soma = soma * 10 % 11;
  if (soma === 10 || soma === 11) {
    soma = 0;
  }
  if (soma != cpf[9]) {
    return false;
  }
  return true;
};
var validaSegundoDigito = function validaSegundoDigito(cpf) {
  var soma = 0;
  for (var i = 0; i < cpf.length - 1; i++) {
    soma += cpf[i] * (cpf.length - i);
  }
  soma = soma * 10 % 11;
  if (soma === 10 || soma === 11) {
    soma = 0;
  }
  if (soma != cpf[10]) {
    return false;
  }
  return true;
};
var isEstadoCivil = function isEstadoCivil(estadoCivil) {
  var regex = new RegExp(/^[scadv]$/);
  if (!regex.test(estadoCivil)) {
    return false;
  }
  estadoCivil = parseInt(estadoCivil);
  if (estadoCivil) {
    return false;
  }
  return true;
};
var isDate = function isDate(date) {
  date = date.replace(/\-/g, '');
  var yearFilter = date.substring(0, 4);
  var monthFilter = date.substring(4, 6);
  var dayFilter = date.substring(6, 8);
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var dayInMonth = today.getDate();
  var idade = year - yearFilter;
  if (month < monthFilter || month == monthFilter && dayInMonth < dayFilter) {
    idade--;
  }
  if (idade < 14) {
    return false;
  }
  return true;
};
var isDateFormatura = function isDateFormatura(date, inicio, fim) {
  var regex = new RegExp(/^(19[9][0-9]|20[0-2][0-9]|2030)$/);
  if (!regex.test(date)) {
    return false;
  }
  if (date.length != 4) {
    return false;
  }
  date = parseInt(date);
  if (date < inicio || date > fim) {
    return false;
  }
  return true;
};
var isvalid = function isvalid(date) {
  if (date.length != 4) {
    return false;
  }
  date = parseInt(date);
  var today = new Date();
  var year = today.getFullYear();
  var anoValido = date - year;
  if (!date || anoValido < 0) {
    return false;
  }
  return true;
};
var isSemestre = function isSemestre(data) {
  var semestresFormaturas = [1, 2, 'Estágio Curricular'];
  var semestre;
  for (chave in semestresFormaturas) {
    if (semestresFormaturas[chave] == data) {
      semestre = semestresFormaturas[chave];
      break;
    }
  }
  if (!semestre) {
    return false;
  }
  return true;
};
var isMesFormatura = function isMesFormatura(data) {
  data = parseInt(data);
  if (!data) {
    return false;
  }
  var regex = new RegExp(/^(1|2|3|4|5|6|7|8|9|10|11|12)$/);
  if (!regex.test(data)) {
    return false;
  }
  if (data < 1 || data > 12) {
    return false;
  }
  return true;
};
var isPeriodo = function isPeriodo(data) {
  var periodos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'Estágio Curricular'];
  var periodo;
  for (chave in periodos) {
    if (periodos[chave] == data) {
      periodo = periodos[chave];
      break;
    }
  }
  if (!periodo) {
    return false;
  }
  return true;
};
var isHorario = function isHorario(data) {
  var horariosEstudos = ['Manhã', 'Tarde', 'Noite', 'EAD', 'Estágio Curricular', 'Formado'];
  var horario;
  for (var _chave in horariosEstudos) {
    if (horariosEstudos[_chave] === data) {
      horario = horariosEstudos[_chave];
      break;
    }
  }
  if (!horario) {
    return false;
  }
  return true;
};
var isSexo = function isSexo(sexo) {
  var regex1 = new RegExp(/^[fm]$/);
  if (!regex1.test(sexo)) {
    return false;
  }
  sexo = parseInt(sexo);
  if (sexo) {
    return false;
  }
  return true;
};
var isUfNaturalidade = function isUfNaturalidade(ufNaturalidade) {
  var listUfNaturalidade = ['RO', 'AC', 'AM', 'RR', 'PA', 'AP', 'TO', 'MA', 'PI', 'CE', 'RN', 'PB', 'PE', 'AL', 'SE', 'BA', 'MG', 'ES', 'RJ', 'SP', 'PR', 'SC', 'RS', 'MS', 'MT', 'GO', 'DF'];
  var state;
  for (var i = 0; i < listUfNaturalidade.length; i++) {
    if (listUfNaturalidade[i] === ufNaturalidade) {
      state = listUfNaturalidade[i];
    }
  }
  if (state != ufNaturalidade || ufNaturalidade.length === 0 || ufNaturalidade.length != 2) {
    return false;
  }
  ufNaturalidade = parseInt(ufNaturalidade);
  if (ufNaturalidade) {
    return false;
  }
  return true;
};
var isDeficiente = function isDeficiente(listDeficiencias, deficiencia) {
  var value;
  for (var i = 0; i < listDeficiencias.length; i++) {
    if (deficiencia === listDeficiencias[i]) {
      value = listDeficiencias[i];
    }
  }
  if (value !== deficiencia) {
    return false;
  }
  var regex = new RegExp(/^(N|F|A|V|ME|MU|TE)$/);
  if (!regex.test(deficiencia)) {
    return false;
  }
  deficiencia = parseInt(deficiencia);
  if (deficiencia) {
    return false;
  }
  return true;
};
var isDescricao = function isDescricao(descricao) {
  var regex = new RegExp(/^[0-9]+$/);
  if (regex.test(descricao)) {
    return false;
  }
  if (descricao.length === 0) {
    return false;
  }
  return true;
};
var removerMensagem = function removerMensagem(id) {
  setTimeout(function () {
    var msg = document.getElementById(id).innerHTML = '';
  }, 3000);
};
var isNumero = function isNumero(numero) {
  var regex = new RegExp(/^\d+$/);
  if (!regex.test(numero)) {
    return false;
  }
  if (numero.length === 0) {
    return false;
  }
  numero = parseInt(numero);
  if (!numero) {
    return false;
  }
  return true;
};
var isComplemento = function isComplemento(complemento) {
  if (complemento.length === 0) {
    return false;
  }
  return true;
};
var isTelefone = function isTelefone(telefone) {
  var regex = new RegExp(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/);
  if (!regex.test(telefone)) {
    return false;
  }
  telefone = telefone.replace(/[^0-9]/g, '');
  if (telefone.length === 0) {
    return false;
  }
  telefone = parseInt(telefone);
  if (!telefone) {
    return false;
  }
  return true;
};
var isEmail = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(email) {
    var regex, emailBd, response, opcoes;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
          if (regex.test(email)) {
            _context6.next = 3;
            break;
          }
          return _context6.abrupt("return", false);
        case 3:
          _context6.prev = 3;
          _context6.next = 6;
          return fetch("http://localhost:8082/verificarEmail?termo=".concat(email));
        case 6:
          response = _context6.sent;
          if (!response.ok) {
            _context6.next = 14;
            break;
          }
          _context6.next = 10;
          return response.json();
        case 10:
          opcoes = _context6.sent;
          emailBd = opcoes.map(function (email) {
            return email.email;
          });
          _context6.next = 15;
          break;
        case 14:
          console.log('Erro na solicitação:', response.statusText);
        case 15:
          _context6.next = 20;
          break;
        case 17:
          _context6.prev = 17;
          _context6.t0 = _context6["catch"](3);
          console.error('Erro:', _context6.t0);
        case 20:
          if (!(emailBd[0] === email)) {
            _context6.next = 22;
            break;
          }
          return _context6.abrupt("return", false);
        case 22:
          return _context6.abrupt("return", true);
        case 23:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[3, 17]]);
  }));
  return function isEmail(_x9) {
    return _ref6.apply(this, arguments);
  };
}();
var isCep = function isCep(cep) {
  var regex = new RegExp(/^[0-9]{5}-[0-9]{3}$/);
  if (!regex.test(cep)) {
    return false;
  }
  cep = cep.replace(/[^0-9]/g, '');
  if (cep.length === 0 && cep.length !== 8) {
    return false;
  }
  cep = parseInt(cep);
  if (!cep) {
    return false;
  }
  return true;
};
var dateTime = function dateTime() {
  var today = new Date();
  return "".concat(today.toLocaleDateString({
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).replace(/[/]/g, '-'), " ").concat(today.toLocaleTimeString('pt-BR', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }));
};

// value="s"
// value="c"
// value="a"
// value="d"
// value="v"

// formData.addEventListener('submit', async (e) => {

// const listaDeInput = document.querySelectorAll('.input-form-validate')

// // Laço de repetição para ler os campos
// for (let contador = 0; contador < listaDeInput.length; contador++){

//   // Receber o campo completo
//   const inputField = listaDeInput[contador]
//   console.log(inputField)

//   // Recuperar o nome do primeiro seletor dentro do atributo class
//   const nameInput = inputField.classList[0]
//   console.log(nameInput)

//   // Receber o valor do campo
//   const valueInputValidate = document.getElementById(nameInput).value

//   console.log(valueInputValidate)

//   // Verificar se o campo está vazio
//   if (valueInputValidate === '' || valueInputValidate === "Selecione") {
//     // Bloquear a atualização da página
//     e.preventDefault()

//     const listInputValidate = html.listInputValidate()
//     console.log(listInputValidate)

//     // Verificar se existe o campo lista de erros
//     if (listInputValidate.hasOwnProperty(nameInput)) {
//       console.log(`msg-${nameInput}`)
//       // Enviar para o HTML a mensagem de erro
//       document.getElementById(`msg-${nameInput}`).innerHTML = "<p style='color: #f00;'>"+listInputValidate[nameInput]+ "</p>"
//     } else {
//       // Enviar para o HTML a mensagem de erro
//       document.getElementById('msg').innerHTML = "<p style='color: #f00;'>Erro: Necessário preencher todos os campos obrigatórios!</p>"
//     }

//     return
//   } else {
//     document.getElementById(`msg-${nameInput}`).innerHTML = "<p style='color: #f00;'></p>"
//       if (nameInput === 'deficiencias') {
//         e.preventDefault()

//         html.changeMains('.screen-address')
//         html.changeSubMainTitle('Formulário de Endereço')
//       }
//     }
// }

// formDataBasic.cpf = e.target.cpf.value
// formDataBasic.rg = e.target.registroGeral.value
// formDataBasic.orgaoexpedidor = e.target.orgaoExpedidor.value
// formDataBasic.ctps = e.target.carteiraDeTrabalho.value
// formDataBasic.nomepai = e.target.nomeDoPai.value
// formDataBasic.nomemae = e.target.nomeDaMae.value
// formDataBasic.sexo = e.target.sexos.value
// formDataBasic.estadocivil = e.target.estadoCivil.value
// formDataBasic.dt_nascimento = e.target.dataDeNascimento.value
// formDataBasic.naturalidade = e.target.naturalidade.value
// formDataBasic.uf_naturalidade = e.target.ufNaturalidade.value
// formDataBasic.nacionalidade = e.target.nacionalidade.value
// formDataBasic.deficiencia_descricao = e.target.deficiencias.value

// formDataBasic.telefone = 4578556933
// formDataBasic.senha = ''
// formDataBasic.periodoano = ''
// formDataBasic.previsaoformatura = ''
// formDataBasic.dt_cadastro = ''
// formDataBasic.idade = ''
// formDataBasic.estagiario_ativo = ''
// formDataBasic.dt_atualizacao = ''
// formDataBasic.ano = ''
// formDataBasic.deficiencia_descricao = ''
// formDataBasic.candidato_selecionado = ''
// formDataBasic.anoingresso = ''
// formDataBasic.semestreingresso = ''
// formDataBasic.cpf_pai = ''
// formDataBasic.cpf_mae = ''
// formDataBasic.notificacao = ''
// formDataBasic.dt_alteracao_notificacao = ''
// formDataBasic.codigo = ''
// formDataBasic.dt_expiracao_codigo = ''
// formDataBasic.url_anexo_curriculo = ''
// formDataBasic.nome_arquivo_curriculo = ''
// formDataBasic.primeiro_acesso = ''
// formDataBasic.termos_condicoes = ''
// formDataBasic.dt_aceite_termos = ''

// resolve(formDataBasic)
// console.log(formDataBasic)
// })

module.exports = {
  isCpf: isCpf,
  isNome: isNome,
  listInputValidate: listInputValidate,
  changeMains: changeMains,
  changeSubMainTitle: changeSubMainTitle,
  adicionarPaginaHtml: adicionarPaginaHtml,
  carregarPaginaHtml: carregarPaginaHtml,
  putOption: putOption,
  createOption: createOption,
  createSelect: createSelect,
  createDiv: createDiv,
  createButton: createButton,
  createLink: createLink,
  createForm: createForm,
  createInput: createInput,
  createLabel: createLabel,
  isCtps: isCtps,
  isNaturalidadeNacionalidade: isNaturalidadeNacionalidade,
  isEstadoCivil: isEstadoCivil,
  isDate: isDate,
  isSexo: isSexo,
  isUfNaturalidade: isUfNaturalidade,
  isDeficiente: isDeficiente,
  isDescricao: isDescricao,
  removerMensagem: removerMensagem,
  isNumero: isNumero,
  isComplemento: isComplemento,
  isTelefone: isTelefone,
  isEmail: isEmail,
  isCep: isCep,
  isDateFormatura: isDateFormatura,
  isSchool: isSchool,
  isCourse: isCourse,
  isvalid: isvalid,
  isSemestre: isSemestre,
  isMesFormatura: isMesFormatura,
  isPeriodo: isPeriodo,
  isHorario: isHorario,
  isRg: isRg,
  dateTime: dateTime
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./frontend/pages/app.js ***!
  \*******************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var main = __webpack_require__(/*! ./main.js */ "./frontend/pages/main.js");
var termsAndConditions = __webpack_require__(/*! ./terms-and-conditions.js */ "./frontend/pages/terms-and-conditions.js");
var initAddress = __webpack_require__(/*! ./address.js */ "./frontend/pages/address.js");
var initDataBasic = __webpack_require__(/*! ./dataBasic.js */ "./frontend/pages/dataBasic.js");
var createFormSchoolData = __webpack_require__(/*! ./schoolData.js */ "./frontend/pages/schoolData.js");
function takeData() {
  return _takeData.apply(this, arguments);
}
function _takeData() {
  _takeData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var callMain, termsConditions, formData, formAddress, formSchoolData, allData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          callMain = main();
          _context.next = 3;
          return termsAndConditions();
        case 3:
          termsConditions = _context.sent;
          _context.next = 6;
          return initDataBasic();
        case 6:
          formData = _context.sent;
          _context.next = 9;
          return initAddress();
        case 9:
          formAddress = _context.sent;
          _context.next = 12;
          return createFormSchoolData();
        case 12:
          formSchoolData = _context.sent;
          _context.next = 15;
          return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, termsConditions), formData), formAddress), formSchoolData);
        case 15:
          allData = _context.sent;
          console.log(allData);
          return _context.abrupt("return", allData);
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _takeData.apply(this, arguments);
}
function sendData() {
  return _sendData.apply(this, arguments);
}
function _sendData() {
  _sendData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var data, response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return takeData();
        case 2:
          data = _context2.sent;
          _context2.prev = 3;
          _context2.next = 6;
          return fetch('http://localhost:8082/cadastrar', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            error: false,
            mensagem: 'Usuário cadastrado com sucesso',
            body: JSON.stringify(data)
          });
        case 6:
          response = _context2.sent;
          if (response.ok) {
            console.log('Dados enviados com sucesso!');
          } else {
            console.log(response.status);
          }
          _context2.next = 13;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](3);
          console.log('Erro: ', _context2.t0);
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 10]]);
  }));
  return _sendData.apply(this, arguments);
}
sendData();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map