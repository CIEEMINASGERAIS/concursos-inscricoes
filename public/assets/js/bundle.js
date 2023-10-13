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
  isUfNaturalidade = _require.isUfNaturalidade,
  emailBd = _require.emailBd;
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
              var response, htmlContent, address, form, formDataAddress, cep, logradouro, uf, bairro, cidade, btnCep, cepFound, endereco, validationAddress, numero, validate, complemento, _validate, telefone1, _validate2, telefone2, _validate3, email, validateInput, validateFocus;
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
                    logradouro.setAttribute('disabled', 'true');
                    uf.setAttribute('disabled', 'true');
                    bairro.setAttribute('disabled', 'true');
                    cidade.setAttribute('disabled', 'true');
                    if (cep) {
                      cepFound = document.querySelector('.cep-found');
                      validationAddress = function validationAddress(validateCep) {
                        if (validateCep) {
                          var validate = false;
                          var valores;
                          valores = endereco.map(function (logradouro) {
                            return logradouro.logradouro;
                          });
                          logradouro.value = valores[0];
                          validate = isNaturalidadeNacionalidade(logradouro.value);
                          if (validate) {
                            document.getElementById("msg-logradouro").innerHTML = "";
                            formDataAddress.logradouro = logradouro.value;
                          } else {
                            document.getElementById("msg-logradouro").innerHTML = "<p>Logradouro inválido!</p>";
                            formDataAddress.logradouro = false;
                          }
                          valores = endereco.map(function (uf) {
                            return uf.uf;
                          });
                          uf.value = valores[0];
                          validate = isUfNaturalidade(uf.value);
                          if (validate) {
                            document.getElementById("msg-uf").innerHTML = "";
                            formDataAddress.uf = uf.value;
                          } else {
                            document.getElementById("msg-uf").innerHTML = "<p>UF inválido!</p>";
                            formDataAddress.uf = false;
                          }
                          valores = endereco.map(function (bairro) {
                            return bairro.bairro;
                          });
                          bairro.value = valores[0];
                          validate = isNaturalidadeNacionalidade(bairro.value);
                          if (validate) {
                            document.getElementById("msg-bairro").innerHTML = "";
                            formDataAddress.bairro = bairro.value;
                          } else {
                            document.getElementById("msg-bairro").innerHTML = "<p>Bairro inválido!</p>";
                            formDataAddress.bairro = false;
                          }
                          valores = endereco.map(function (cidade) {
                            return cidade.cidade;
                          });
                          cidade.value = valores[0];
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
                      };
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
                                return fetch("http://appcadastro.cieemg.org.br/cadastrarEndereco?termo=".concat(cepSemPonto));
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
                      cep.addEventListener('keydown', function (e) {
                        if (e.key === "Enter") {
                          var validateCep = false;
                          validateCep = isCep(formDataAddress.cep);
                          validationAddress(validateCep);
                        }
                      });
                      if (btnCep) {
                        btnCep.addEventListener('click', function (e) {
                          var validateCep = false;
                          validateCep = isCep(formDataAddress.cep);
                          validationAddress(validateCep);
                        });
                      }
                    }
                    if (logradouro) {
                      logradouro.addEventListener('input', function (e) {
                        var value = e.target.value;
                        var validate = isNaturalidadeNacionalidade(value);
                        if (validate) {
                          document.getElementById("msg-logradouro").innerHTML = "";
                          formDataAddress.logradouro = value;
                        } else {
                          document.getElementById("msg-logradouro").innerHTML = "<p>Logradouro inválido!</p>";
                          formDataAddress.logradouro = false;
                        }
                      });
                    }
                    if (uf) {
                      uf.addEventListener('input', function (e) {
                        var value = e.target.value;
                        value = e.target.value.replace(/[^a-zA-Z]/g, '');
                        var validate = isNaturalidadeNacionalidade(value);
                        if (validate) {
                          document.getElementById("msg-uf").innerHTML = "";
                          formDataAddress.uf = value;
                        } else {
                          document.getElementById("msg-uf").innerHTML = "<p>UF inválido!</p>";
                          formDataAddress.uf = false;
                        }
                      });
                    }
                    if (bairro) {
                      bairro.addEventListener('input', function (e) {
                        var value = e.target.value;
                        console.log(value);
                        var validate = isNaturalidadeNacionalidade(value);
                        console.log(validate);
                        if (validate) {
                          document.getElementById("msg-bairro").innerHTML = "";
                          formDataAddress.bairro = value;
                        } else {
                          document.getElementById("msg-bairro").innerHTML = "<p>Bairro inválido!</p>";
                          formDataAddress.bairro = false;
                        }
                      });
                    }
                    if (cidade) {
                      cidade.addEventListener('input', function (e) {
                        var value = e.target.value;
                        var validate = isNaturalidadeNacionalidade(value);
                        if (validate) {
                          document.getElementById("msg-cidade").innerHTML = "";
                          formDataAddress.cidade = value;
                        } else {
                          document.getElementById("msg-cidade").innerHTML = "<p>Cidade inválido!</p>";
                          formDataAddress.cidade = false;
                        }
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
                          return formDataAddress.complemento = " ";
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
                          var telefone1SemSimbolo = e.target.value.replace(/\D/g, '');
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-telefone1').innerHTML = "";
                          return formDataAddress.telefone1 = telefone1SemSimbolo;
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
                          var telefone2SemSimbolo = e.target.value.replace(/\D/g, '');
                          // Enviar para o HTML a mensagem de erro          
                          document.getElementById('msg-telefone2').innerHTML = "";
                          return formDataAddress.telefone2 = telefone2SemSimbolo;
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
                      email.addEventListener('input', function (e) {
                        validateInput = isEmail(e.target.value);
                        if (validateInput) {
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-email').innerHTML = "";
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-email').innerHTML = "<p>Email inválido!</p>";
                          formDataAddress.email = false;
                        }
                      });
                      email.onblur = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                          while (1) switch (_context2.prev = _context2.next) {
                            case 0:
                              document.getElementById('msg-email').innerHTML = "<p style='color: black;'>Carregado...</p>";
                              formDataAddress.email = false;
                              _context2.next = 4;
                              return emailBd(email.value);
                            case 4:
                              validateFocus = _context2.sent;
                              setTimeout(function () {
                                if (validateFocus) {
                                  document.getElementById('msg-email').innerHTML = "";
                                } else {
                                  if (email.value.length !== 0) {
                                    document.getElementById('msg-email').innerHTML = "<p>Email já cadastrado!</p>";
                                  } else {
                                    document.getElementById('msg-email').innerHTML = "";
                                  }
                                }
                                if (validateFocus === true && validateInput === true) {
                                  formDataAddress.email = email.value;
                                }
                              }, 1000);
                            case 6:
                            case "end":
                              return _context2.stop();
                          }
                        }, _callee2);
                      }));
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
                        return function (_x4) {
                          return _ref4.apply(this, arguments);
                        };
                      }());
                    } else {
                      console.log('Erro ao buscar dados do formulário');
                      reject(error);
                    }
                  case 36:
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
  isComplemento = _require.isComplemento,
  age = _require.age,
  cpfInBd = _require.cpfInBd;

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
                          var validateBd;
                          return _regeneratorRuntime().wrap(function _callee$(_context) {
                            while (1) switch (_context.prev = _context.next) {
                              case 0:
                                e.target.value = e.target.value.replace(/\D/g, '');
                                e.target.value = e.target.value.replace(/(\d{3})(\d)/, '$1.$2');
                                e.target.value = e.target.value.replace(/(\d{3})(\d)/, '$1.$2');
                                e.target.value = e.target.value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
                                _validate = isCpf(e.target.value);
                                if (!_validate) {
                                  _context.next = 13;
                                  break;
                                }
                                document.getElementById('msg-cpf').innerHTML = '';
                                _context.next = 9;
                                return cpfInBd(e.target.value);
                              case 9:
                                validateBd = _context.sent;
                                if (validateBd) {
                                  formDataBasic.cpf = e.target.value;
                                  document.getElementById('msg-cpf').innerHTML = '';
                                } else {
                                  document.getElementById('msg-cpf').innerHTML = "<p>CPF já cadastrado!</p>";
                                }
                                _context.next = 16;
                                break;
                              case 13:
                                e.preventDefault();
                                // Enviar para o HTML a mensagem de erro
                                document.getElementById('msg-cpf').innerHTML = "<p>CPF inválido!</p>";
                                formDataBasic.cpf = false;
                              case 16:
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
                        // Remove tudo, exceto números
                        e.target.value = e.target.value.replace(/[^\d]/g, '');
                        _validate2 = isRg(e.target.value);
                        if (_validate2) {
                          document.getElementById('msg-rg').innerHTML = '';
                          formDataBasic.rg = e.target.value;
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
                          formDataBasic.nomemae = e.target.value;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-nome-mae').innerHTML = "<p>Favor preencher o Nome completo!</p>";
                          formDataBasic.nomemae = false;
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
                          formDataBasic.dt_nascimento = e.target.value;
                          formDataBasic.idade = age(e.target.value);
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-data-nascimento').innerHTML = "<p>Cadastro permitido a partir dos 14 anos de idade!</p>";
                          formDataBasic.dt_nascimento = false;
                          formDataBasic.idade = false;
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
                          formDataBasic.deficiencia = e.target.value;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-deficiencias').innerHTML = "<p>Opção inválida!</p>";
                          formDataBasic.deficiencia = false;
                        }
                      });
                      deficiencias.addEventListener('input', function (e) {
                        if (e.target.value != 'Selecione' && e.target.value != 'N') {
                          formDataBasic.deficiencia = false;
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
                          formDataBasic.deficiencia_descricao = '';
                        }
                      });
                    }
                    document.addEventListener('input', function (e) {
                      var element = e.target;
                      var validateDescricoes;
                      if (element.classList.contains('descricoes')) {
                        validateDescricoes = isDescricao(element.value);
                        if (validateDescricoes) {
                          formDataBasic.deficiencia = deficiencias.value;
                          formDataBasic.deficiencia_descricao = element.value;
                          document.getElementById('msg-descricao').innerHTML = "";
                        } else {
                          formDataBasic.deficiencia = false;
                          formDataBasic.deficiencia_descricao = false;
                          document.getElementById('msg-descricao').innerHTML = "<p>Favor descrever a deficiência.</p>";
                        }
                      }
                    });
                    if (formData) {
                      formData.addEventListener('submit', function (e) {
                        e.preventDefault();
                        if (formDataBasic.nome && formDataBasic.nomemae && formDataBasic.naturalidade && formDataBasic.nacionalidade && formDataBasic.estadocivil && formDataBasic.dt_nascimento && formDataBasic.sexo && formDataBasic.uf_naturalidade && formDataBasic.deficiencia && formDataBasic.rg && formDataBasic.orgaoexpedidor && formDataBasic.idade && formDataBasic.cpf

                        // No caso do nomepai e carteira de trabalho não são obrigatorios
                        ) {
                          changeMains('.screen-address');
                          changeSubMainTitle('Formulário de Endereço');
                          resolve(formDataBasic);
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
var main = function main() {
  function mainPage() {
    document.addEventListener('click', function (event) {
      var element = event.target;
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
  _createFormSchoolData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          return _context8.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
              var response, htmlContent, schoolData, formSchoolData, anoFormatura, inicio, fim, anosFormaturas, i, _i, option, semestreFormatura, semestresFormaturas, _i2, _option, mesFormatura, mesesFormaturas, _i3, _option2, periodo, periodos, _i4, _option3, horario, _i5, _option4, mostrarOpcoesAutocompleteHorario, dataFormSchool, escolas, cursos, codigoEscola, idCursoFinal, idCurso, codeFinal, mostrarOpcoesAutocompleteEscolas, mostrarOpcoesAutocompleteCursos, filtrarCursos, filtrarIdCurso, periodoFinal, callCourse, valid, alertEnd;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    filtrarIdCurso = function _filtrarIdCurso(descricaoCurso) {
                      for (var _i10 = 0; _i10 < idCurso.length; _i10++) {
                        var cursoId = {
                          descricao: idCurso[_i10].descricao,
                          idcurso: idCurso[_i10].idcurso
                        };
                        if (cursoId.descricao === descricaoCurso) {
                          return idCursoFinal = cursoId.idcurso;
                        }
                      }
                    };
                    filtrarCursos = function _filtrarCursos(data) {
                      for (var _i9 = 0; _i9 < codigoEscola.length; _i9++) {
                        var codeEscola = {
                          razaosocial: codigoEscola[_i9].razaosocial,
                          id: codigoEscola[_i9].id
                        };
                        if (codeEscola.razaosocial === data) {
                          return codeFinal = codeEscola.id;
                        }
                      }
                    };
                    mostrarOpcoesAutocompleteCursos = function _mostrarOpcoesAutocom3(opcoes) {
                      cursos.innerHTML = "";
                      var option1 = document.createElement("option");
                      option1.disabled = "disabled";
                      option1.selected = "selected";
                      option1.text = "Selecione";
                      cursos.appendChild(option1);
                      for (var _i8 = 0; _i8 < opcoes.length; _i8++) {
                        var _option7 = document.createElement("option");
                        _option7.text = opcoes[_i8].descricao;
                        _option7.value = opcoes[_i8].descricao;
                        cursos.appendChild(_option7);
                      }
                      $(cursos).selectpicker("refresh");
                    };
                    mostrarOpcoesAutocompleteEscolas = function _mostrarOpcoesAutocom2(opcoes) {
                      escolas.innerHTML = "";
                      var option1 = document.createElement("option");
                      option1.disabled = "disabled";
                      option1.selected = "selected";
                      option1.text = "Selecione";
                      escolas.appendChild(option1);
                      for (var _i7 = 0; _i7 < opcoes.length; _i7++) {
                        var _option6 = document.createElement("option");
                        _option6.text = opcoes[_i7].razaosocial;
                        _option6.value = opcoes[_i7].razaosocial;
                        escolas.appendChild(_option6);
                      }
                      $(escolas).selectpicker("refresh");
                    };
                    mostrarOpcoesAutocompleteHorario = function _mostrarOpcoesAutocom(horariosEstudos) {
                      horario.innerHTML = "";
                      var option1 = document.createElement("option");
                      option1.disabled = "disabled";
                      option1.selected = "selected";
                      option1.text = "Selecione";
                      horario.appendChild(option1);
                      for (var _i6 = 0; _i6 < horariosEstudos.length; _i6++) {
                        var _option5 = document.createElement("option");
                        _option5.text = horariosEstudos[_i6];
                        if (horariosEstudos[_i6] === "Estágio Curricular") {
                          _option5.value = "EC";
                        } else if (horariosEstudos[_i6] === "Formado") {
                          _option5.value = "F";
                        } else {
                          _option5.value = horariosEstudos[_i6];
                        }
                        horario.appendChild(_option5);
                      }
                      $(horario).selectpicker("refresh");
                    };
                    _context7.next = 7;
                    return fetch("schoolData");
                  case 7:
                    response = _context7.sent;
                    _context7.next = 10;
                    return response.text();
                  case 10:
                    htmlContent = _context7.sent;
                    schoolData = document.querySelector(".screen-school-data");
                    schoolData.innerHTML = htmlContent;
                    formSchoolData = document.querySelector(".form-school-data");
                    anoFormatura = document.getElementById("ano-formatura");
                    inicio = 1990;
                    fim = 2030;
                    anosFormaturas = [];
                    for (i = inicio; i <= fim; i++) {
                      anosFormaturas.push(i);
                    }
                    for (_i = 0; _i < anosFormaturas.length; _i++) {
                      option = document.createElement("option");
                      option.text = anosFormaturas[_i];
                      option.value = anosFormaturas[_i];
                      anoFormatura.appendChild(option);
                    }
                    semestreFormatura = document.getElementById("semestre-formatura");
                    semestresFormaturas = [1, 2, "Estágio Curricular"];
                    for (_i2 = 0; _i2 < semestresFormaturas.length; _i2++) {
                      _option = document.createElement("option");
                      _option.text = semestresFormaturas[_i2];
                      if (semestresFormaturas[_i2] === "Estágio Curricular") {
                        _option.value = 0;
                      } else {
                        _option.value = semestresFormaturas[_i2];
                      }
                      semestreFormatura.appendChild(_option);
                    }
                    mesFormatura = document.getElementById("mes-formatura");
                    mesesFormaturas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
                    for (_i3 = 0; _i3 < mesesFormaturas.length; _i3++) {
                      _option2 = document.createElement("option");
                      _option2.text = mesesFormaturas[_i3];
                      _option2.value = mesesFormaturas[_i3];
                      mesFormatura.appendChild(_option2);
                    }
                    periodo = document.getElementById("periodo");
                    periodos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "Estágio Curricular"];
                    for (_i4 = 0; _i4 < periodos.length; _i4++) {
                      _option3 = document.createElement("option");
                      _option3.text = periodos[_i4];
                      _option3.value = periodos[_i4];
                      periodo.appendChild(_option3);
                    }
                    horario = document.querySelector(".horario-estudo-search select");
                    horariosEstudos = ["Manhã", "Tarde", "Noite", "EAD", "Estágio Curricular", "Formado"];
                    for (_i5 = 0; _i5 < horariosEstudos.length; _i5++) {
                      _option4 = document.createElement("option");
                      _option4.text = horariosEstudos[_i5];
                      if (horariosEstudos[_i5] === "Estágio Curricular") {
                        _option4.value = "EC";
                      } else if (horariosEstudos[_i5] === "Formado") {
                        _option4.value = "F";
                      } else {
                        _option4.value = horariosEstudos[_i5];
                      }
                      horario.appendChild(_option4);
                    }
                    dataFormSchool = {};
                    escolas = document.querySelector(".escola-search select");
                    cursos = document.querySelector(".curso-search select");
                    codigoEscola = {};
                    idCurso = {};
                    periodoFinal = function periodoFinal() {
                      for (var _i11 = 0; _i11 < idCurso.length; _i11++) {
                        if (dataFormSchool.curso_id === idCurso[_i11].idcurso) {
                          return idCurso[_i11].duracao;
                        }
                      }
                    };
                    callCourse = /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                        var _response, opcoes;
                        return _regeneratorRuntime().wrap(function _callee$(_context) {
                          while (1) switch (_context.prev = _context.next) {
                            case 0:
                              _context.prev = 0;
                              _context.next = 3;
                              return fetch("http://appcadastro.cieemg.org.br/cadastrarCurso?termo=".concat(codeFinal));
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
                              console.log("Erro na solicitação:", _response.statusText);
                            case 13:
                              _context.next = 18;
                              break;
                            case 15:
                              _context.prev = 15;
                              _context.t0 = _context["catch"](0);
                              console.error("Erro:", _context.t0);
                            case 18:
                            case "end":
                              return _context.stop();
                          }
                        }, _callee, null, [[0, 15]]);
                      }));
                      return function callCourse() {
                        return _ref2.apply(this, arguments);
                      };
                    }(); // let 
                    $(document).ready( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                      var input, validate, opcoes;
                      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                        while (1) switch (_context4.prev = _context4.next) {
                          case 0:
                            $(".escola-search select").selectpicker();
                            input = document.querySelector(".escola-search input");
                            input.addEventListener("input", /*#__PURE__*/function () {
                              var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
                                var element, _response2, SchoolFound;
                                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                                  while (1) switch (_context2.prev = _context2.next) {
                                    case 0:
                                      element = e.target;
                                      _context2.prev = 1;
                                      _context2.next = 4;
                                      return fetch("http://appcadastro.cieemg.org.br/cadastrarEscola?termo=".concat(element.value));
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
                                      console.log("Erro na solicitação:", _response2.statusText);
                                    case 14:
                                      _context2.next = 19;
                                      break;
                                    case 16:
                                      _context2.prev = 16;
                                      _context2.t0 = _context2["catch"](1);
                                      console.error("Erro:", _context2.t0);
                                    case 19:
                                      SchoolFound = document.querySelector(".school-found");
                                      if (opcoes.length === 0) {
                                        SchoolFound.style.display = "block";
                                        if (SchoolFound.style.display === "block") {
                                          document.addEventListener("click", function (e) {
                                            var element = e.target;
                                            if (element.classList.contains("button-confirm-school")) {
                                              SchoolFound.style.display = "none";
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
                              return function (_x3) {
                                return _ref4.apply(this, arguments);
                              };
                            }());
                            $(".escola-search select").change( /*#__PURE__*/function () {
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
                              return function (_x4) {
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
                      $(".curso-search select").selectpicker();
                      $(".curso-search select").change( /*#__PURE__*/function () {
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
                        return function (_x5) {
                          return _ref6.apply(this, arguments);
                        };
                      }());
                      $(".ano-formatura-search select").selectpicker();
                      $(".ano-formatura-search select").change(function (e) {
                        var data = e.currentTarget.value;
                        var validate;
                        validate = isDateFormatura(data, inicio, fim);
                        valid = isvalid(data);
                        var horarioIncompleto;
                        if (validate) {
                          document.getElementById("msg-ano").innerHTML = "";
                          dataFormSchool.previsao_ano = data;
                          if (!valid) {
                            horarioIncompleto = ["Estágio Curricular", "Formado"];
                            mostrarOpcoesAutocompleteHorario(horarioIncompleto);
                            document.getElementById("div-periodo").style.display = "none";
                            document.getElementById("periodo").style.display = true;
                          } else {
                            document.getElementById("div-periodo").style.display = "block";
                            document.getElementById("periodo").style.display = false;
                            horarioIncompleto = [];
                            mostrarOpcoesAutocompleteHorario(horariosEstudos);
                          }
                        } else {
                          document.getElementById("msg-ano").innerHTML = "<p>Ano inválido!</p>";
                          dataFormSchool.previsao_ano = false;
                        }
                      });
                      $(".semestre-formatura-search select").selectpicker();
                      $(".semestre-formatura-search select").change(function (e) {
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
                      $(".mes-formatura-search select").selectpicker();
                      $(".mes-formatura-search select").change(function (e) {
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
                      $(".periodo-search select").selectpicker();
                      $(".periodo-search select").change(function (e) {
                        var data = e.currentTarget.value;
                        var validate = isPeriodo(data);
                        if (validate) {
                          document.getElementById("msg-periodo").innerHTML = "";
                          dataFormSchool.periodo = data;
                        } else {
                          document.getElementById("msg-periodo").innerHTML = "<p>Período inválido!</p>";
                          dataFormSchool.periodo = false;
                        }
                      });
                      $(".horario-estudo-search select").selectpicker();
                      $(".horario-estudo-search select").change(function (e) {
                        var data = e.currentTarget.value;
                        var validate = isHorario(data);
                        if (validate) {
                          document.getElementById("msg-horario").innerHTML = "";
                          dataFormSchool.horario = data;
                        } else {
                          document.getElementById("msg-horario").innerHTML = "<p>Horário de estudo inválido!</p>";
                          dataFormSchool.horario = false;
                        }
                      });
                    });
                    alertEnd = document.querySelector(".end");
                    if (formSchoolData) {
                      formSchoolData.addEventListener("submit", /*#__PURE__*/function () {
                        var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e) {
                          var today;
                          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                            while (1) switch (_context6.prev = _context6.next) {
                              case 0:
                                e.preventDefault();
                                if (dataFormSchool.escola_id && dataFormSchool.curso_id && dataFormSchool.previsao_semestre && dataFormSchool.previsao_ano && dataFormSchool.previsao_mes && dataFormSchool.horario
                                // dataFormSchool.periodo
                                ) {
                                  if (!valid) {
                                    dataFormSchool.periodo = periodoFinal();
                                  }
                                  today = new Date();
                                  dataFormSchool.ano = today.getFullYear();
                                  alertEnd.style.display = "block";
                                  resolve(dataFormSchool);
                                } else {
                                  document.getElementById("msg-fracasso-school").innerHTML = "<p>Formulário incompleto!</p>";
                                  removerMensagem("msg-fracasso-school");
                                }
                              case 2:
                              case "end":
                                return _context6.stop();
                            }
                          }, _callee6);
                        }));
                        return function (_x6) {
                          return _ref7.apply(this, arguments);
                        };
                      }());
                    } else {
                      console.log("Erro ao enviar os dados para o banco!");
                      reject(error);
                    }
                  case 43:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7);
            }));
            return function (_x, _x2) {
              return _ref.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
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
  dateTime = _require.dateTime,
  dateRegister = _require.dateRegister;
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
                    return fetch("terms-and-conditions");
                  case 2:
                    response = _context2.sent;
                    _context2.next = 5;
                    return response.text();
                  case 5:
                    contetHtml = _context2.sent;
                    termsCondtions = document.querySelector(".terms-and-conditions");
                    menuSide = document.querySelector(".nav-bar");
                    termoBox = document.querySelector(".termos-box");
                    title = document.querySelector(".sub-main-title");
                    schoolData = {};
                    termsCondtions.innerHTML = contetHtml;
                    document.addEventListener("click", /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
                        var checkbox;
                        return _regeneratorRuntime().wrap(function _callee$(_context) {
                          while (1) switch (_context.prev = _context.next) {
                            case 0:
                              element = e.target;
                              if (element.classList.contains("button-termo") || element.classList.contains("terms-and-conditions") || element.classList.contains("p-t-c") || element.classList.contains("h1-t-c") || element.classList.contains("h2-t-c") || element.classList.contains("s-t-c") || element.classList.contains("a-t-c") || element.classList.contains("check-term") || element.classList.contains("label-li") || element.classList.contains("input-li") || element.classList.contains("checkbox") || element.classList.contains("text-terms-conditions") || element.classList.contains("title-terms") || element.classList.contains("button-terms-a-d") || element.classList.contains("terms-input-label")) {
                                termsCondtions.style.display = "block";
                                menuSide.style.visibility = "hidden";
                                termoBox.style.display = "none";
                                title.style.visibility = "hidden";
                              } else {
                                termsCondtions.style.display = "none";
                                menuSide.style.visibility = "visible";
                                termoBox.style.display = "flex";
                                title.style.visibility = "visible";
                              }
                              if (element.classList.contains("button-decline")) {
                                e.preventDefault();
                              }
                              if (element.classList.contains("button-accept") || element.classList.contains("big-basic-data") || element.classList.contains("button-basic-data")) {
                                if (schoolData.termos_condicoes === 1) {
                                  schoolData.dt_cadastro = dateRegister();
                                  schoolData.dt_atualizacao = dateRegister();
                                  changeMains(".screen-basic-data1");
                                  changeSubMainTitle("Formulário de Dados Básicos");
                                  resolve(schoolData);
                                } else {
                                  e.preventDefault();
                                }
                              }
                              checkbox = document.getElementById("li-concordo");
                              if (checkbox.checked === true) {
                                schoolData.termos_condicoes = 1;
                                document.getElementById("button-accept").disabled = false;
                              } else {
                                schoolData.termos_condicoes = 0;
                                document.getElementById("button-accept").disabled = true;
                              }
                            case 6:
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
                      var isMobile = window.innerWidth <= 920; // Defina a largura máxima para considerar como dispositivo móvel

                      if (isMobile) {
                        setTimeout(function () {
                          document.getElementById("li-concordo").disabled = false;
                        }, 5000);
                      } else {
                        $(".text-terms-conditions").bind("scroll", function () {
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
                      }
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
  var label = document.createElement("label");
  label.setAttribute("for", forAttribute);
  label.innerText = text;
  return label;
};

// Cria um campo de entrada de texto para o nome e seta os atributos para colocar o parametro conforme necessário ao input
var createInput = function createInput(type, name, id, placeholder, classe) {
  var input = document.createElement("input");
  input.setAttribute("type", type);
  input.setAttribute("name", name);
  input.setAttribute("id", id);
  input.setAttribute("placeholder", placeholder);
  input.setAttribute("class", classe);
  return input;
};

// Cria o elemento <form>
var createForm = function createForm(classe) {
  var form = document.createElement("form");
  form.setAttribute("class", classe);
  return form;
};

// Cria o elemento link
var createLink = function createLink(rel, href) {
  var cssLink = document.createElement("link");
  cssLink.setAttribute("rel", rel);
  cssLink.setAttribute("href", href);
  return cssLink;
};
var createButton = function createButton(text, classe, type) {
  var button = document.createElement("button");
  button.setAttribute("class", classe);
  button.setAttribute("type", type);
  button.innerText = text;
  return button;
};
var createDiv = function createDiv(classe, text) {
  var div = document.createElement("div");
  div.setAttribute("class", classe);
  div.innerText = text;
  return div;
};
var createSelect = function createSelect(id, name) {
  var select = document.createElement("select");
  select.setAttribute("id", id);
  select.setAttribute("name", name);
  return select;
};
var createOption = function createOption(value, text, name) {
  var options = document.createElement("option");
  if (options.text === "Estágio Curricular") {
    options.value = "esc";
  } else {
    options.value = value;
  }
  options.text = text;
  options.name = name;
  return options;
};
var putOption = function putOption(list) {
  var placeholderOption = document.createElement("option");
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  placeholderOption.text = "Selecione";
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
          console.error("Erro ao carregar a página:", _context.t0);
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
  var subTitle = document.querySelector(".sub-main-title h1");
  return subTitle.innerText = text;
};
var changeMains = function changeMains(nameClass) {
  var screens = document.querySelectorAll(".screen");
  for (var i = 0; i < screens.length; i++) {
    screens[i].style.display = "none";
  }
  var screen = document.querySelector(nameClass);
  if (screen) {
    screen.style.display = "block";
  }
};

// Função com a lista de erros
var listInputValidate = function listInputValidate() {
  var listInputValidate = {
    name: "Necessário preencher o campo nome!",
    cpf: "Necessário preencher o campo CPF!",
    "nome-mae": "Necessário preencher o campo nome da mãe!",
    "nome-pai": "Necessário preencher o campo nome da pai!",
    "carteira-trabalho": "Necessário preencher o campo carteira de trabalho!",
    naturalidade: "Necessário preencher o campo naturalidade!",
    nacionalidade: "Necessário preencher o campo nacionalidade!",
    "estado-civil": "Necessário preencher o campo estado civil!",
    "data-nascimento": "Necessário preencher o campo da data de nascimento!",
    sexo: "Necessário preencher o campo sexo!",
    "uf-naturalidade": "Necessário preencher o campo uf naturalidade!",
    deficiencias: 'Necessário preencher o campo "Se possui alguma deficiência?'
  };
  return listInputValidate;
};
var isNome = function isNome(nome) {
  nome = nome.trim();
  var nomeSemEspaco = nome.replace(" ", "");
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
          return fetch("http://appcadastro.cieemg.org.br/cadastrarEscola?termo=".concat(school));
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
          console.log("Erro na solicitação:", response.statusText);
        case 13:
          _context3.next = 18;
          break;
        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](1);
          console.error("Erro:", _context3.t0);
        case 18:
          _context3.t1 = _regeneratorRuntime().keys(likeSchool);
        case 19:
          if ((_context3.t2 = _context3.t1()).done) {
            _context3.next = 27;
            break;
          }
          chave = _context3.t2.value;
          if (!(likeSchool[chave]["razaoSocial"] === school && likeSchool[chave]["id"] === idSchool)) {
            _context3.next = 25;
            break;
          }
          idSchoolVerification = likeSchool[chave]["id"];
          schoolVerification = likeSchool[chave]["razaoSocial"];
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
          return fetch("http://appcadastro.cieemg.org.br/cadastrarCurso?termo=".concat(codeCourse));
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
          console.log("Erro na solicitação:", response.statusText);
        case 13:
          _context4.next = 18;
          break;
        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](1);
          console.error("Erro:", _context4.t0);
        case 18:
          _context4.t1 = _regeneratorRuntime().keys(likeCourse);
        case 19:
          if ((_context4.t2 = _context4.t1()).done) {
            _context4.next = 27;
            break;
          }
          chave = _context4.t2.value;
          if (!(likeCourse[chave]["descricao"] === course && likeCourse[chave]["idcurso"] === idCourse)) {
            _context4.next = 25;
            break;
          }
          courseVerification = likeCourse[chave]["descricao"];
          courseIdVerification = likeCourse[chave]["idcurso"];
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
var conferirFormBasic = function conferirFormBasic(objeto) {
  for (var _chave in objeto) {
    if (objeto[_chave] === false && _chave !== 'nomepai' && _chave !== 'ctps') {
      return false;
    }
  }
  return true;
};
var conferirFormAddress = function conferirFormAddress(objeto) {
  for (var _chave2 in objeto) {
    if (objeto[_chave2] === false && _chave2 !== 'complemento') {
      return false;
    }
  }
  return true;
};
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
  var valorSemEspaco = valor.replace(" ", "");
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
  var valorSemEspaco = valor.replace(" ", "");
  if (valor.length === 0 || valor != valorSemEspaco || valorSemEspaco.length === 0) {
    return false;
  }
  valor = parseInt(valor);
  if (!valor) {
    return false;
  }
  return true;
};
var isCpf = function isCpf() {
  var cpf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var regex = new RegExp(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/);
  if (!regex.test(cpf)) {
    return false;
  }
  cpf = cpf.replace(/\.|-/g, "");
  if (!validaPrimeiroDigito(cpf)) {
    return false;
  }
  if (!validaSegundoDigito(cpf)) {
    return false;
  }
  return true;
};
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
var cpfInBd = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(cpf) {
    var cpfBd, response, opcoes;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return fetch("http://appcadastro.cieemg.org.br/verificarEstudante?termo=".concat(cpf));
        case 3:
          response = _context5.sent;
          if (!response.ok) {
            _context5.next = 11;
            break;
          }
          _context5.next = 7;
          return response.json();
        case 7:
          opcoes = _context5.sent;
          cpfBd = opcoes.map(function (cpf) {
            return cpf.cpf;
          });
          _context5.next = 12;
          break;
        case 11:
          console.log("Erro na solicitação:", response.statusText);
        case 12:
          _context5.next = 17;
          break;
        case 14:
          _context5.prev = 14;
          _context5.t0 = _context5["catch"](0);
          console.error("Erro:", _context5.t0);
        case 17:
          if (!(cpfBd.length > 0)) {
            _context5.next = 19;
            break;
          }
          return _context5.abrupt("return", false);
        case 19:
          return _context5.abrupt("return", true);
        case 20:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 14]]);
  }));
  return function cpfInBd(_x9) {
    return _ref5.apply(this, arguments);
  };
}();
var isEstadoCivil = function isEstadoCivil(estadoCivil) {
  var regex = new RegExp(/^[SCADV]$/);
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
  date = date.replace(/\-/g, "");
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
var age = function age(date) {
  date = date.replace(/\-/g, "");
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
  return idade;
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
  data = parseInt(data);
  var semestreForm = [1, 2, 0];
  var semestre;
  for (var _chave3 in semestreForm) {
    if (semestreForm[_chave3] === data) {
      semestre = semestreForm[_chave3];
      break;
    }
  }
  if (semestre === 0 || semestre === 1 || semestre === 2) {
    return true;
  }
  return false;
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
  var periodos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "Estágio Curricular"];
  var periodo;
  for (var _chave4 in periodos) {
    if (periodos[_chave4] == data) {
      periodo = periodos[_chave4];
      break;
    }
  }
  if (!periodo) {
    return false;
  }
  return true;
};
var isHorario = function isHorario(data) {
  var horariosEstudos = ["Manhã", "Tarde", "Noite", "EAD", "EC", "F"];
  var horario;
  for (var _chave5 in horariosEstudos) {
    if (horariosEstudos[_chave5] === data) {
      horario = horariosEstudos[_chave5];
      break;
    }
  }
  if (!horario) {
    return false;
  }
  return true;
};
var isSexo = function isSexo(sexo) {
  var regex1 = new RegExp(/^[FM]$/);
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
  var listUfNaturalidade = ["RO", "AC", "AM", "RR", "PA", "AP", "TO", "MA", "PI", "CE", "RN", "PB", "PE", "AL", "SE", "BA", "MG", "ES", "RJ", "SP", "PR", "SC", "RS", "MS", "MT", "GO", "DF"];
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
  descricao = descricao.trim();
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
    var msg = document.getElementById(id).innerHTML = "";
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
  telefone = telefone.replace(/[^0-9]/g, "");
  if (telefone.length === 0) {
    return false;
  }
  telefone = parseInt(telefone);
  if (!telefone) {
    return false;
  }
  return true;
};
var isEmail = function isEmail(email) {
  var regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
  if (!regex.test(email)) {
    return false;
  }
  return true;
};
var emailBd = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(_emailBd) {
    var email, response, opcoes;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return fetch("http://appcadastro.cieemg.org.br/verificarEmail?termo=".concat(_emailBd));
        case 3:
          response = _context6.sent;
          if (!response.ok) {
            _context6.next = 11;
            break;
          }
          _context6.next = 7;
          return response.json();
        case 7:
          opcoes = _context6.sent;
          email = opcoes.map(function (email) {
            return email.email;
          });
          _context6.next = 12;
          break;
        case 11:
          console.log("Erro na solicitação:", response.statusText);
        case 12:
          _context6.next = 17;
          break;
        case 14:
          _context6.prev = 14;
          _context6.t0 = _context6["catch"](0);
          console.error("Erro:", _context6.t0);
        case 17:
          if (!(email.length > 0)) {
            _context6.next = 19;
            break;
          }
          return _context6.abrupt("return", false);
        case 19:
          return _context6.abrupt("return", true);
        case 20:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 14]]);
  }));
  return function emailBd(_x10) {
    return _ref6.apply(this, arguments);
  };
}();
var isCep = function isCep(cep) {
  var regex = new RegExp(/^[0-9]{5}-[0-9]{3}$/);
  if (!regex.test(cep)) {
    return false;
  }
  cep = cep.replace(/[^0-9]/g, "");
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
    day: "2-digit",
    month: "2-digit"
  }).replace(/[/]/g, "-"), " ").concat(today.toLocaleTimeString("pt-BR", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }));
};
var dateRegister = function dateRegister() {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  var dayInMonth = today.getDate();
  if (dayInMonth < 10) {
    dayInMonth = "0" + dayInMonth;
  }
  return year + "-" + month + "-" + dayInMonth;
};
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
  dateTime: dateTime,
  dateRegister: dateRegister,
  age: age,
  emailBd: emailBd,
  cpfInBd: cpfInBd,
  conferirFormBasic: conferirFormBasic,
  conferirFormAddress: conferirFormAddress
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
var _require = __webpack_require__(/*! ../utils/util.js */ "./frontend/utils/util.js"),
  conferirFormAddress = _require.conferirFormAddress,
  conferirFormBasic = _require.conferirFormBasic,
  changeMains = _require.changeMains,
  changeSubMainTitle = _require.changeSubMainTitle;
function takeData() {
  return _takeData.apply(this, arguments);
}
function _takeData() {
  _takeData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var callMain, termsConditions, formData, validateFormBasic, formAddress, validateFormAddress, formSchoolData, allData;
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
          document.addEventListener('click', function (event) {
            var element = event.target;
            validateFormBasic = false;
            validateFormBasic = conferirFormBasic(formData);
            if (validateFormBasic) {
              if (element.classList.contains('big-address') || element.classList.contains('button-address')) {
                changeMains('.screen-address');
                changeSubMainTitle('Formulário de Endereço');
              }
            } else {
              if (element.classList.contains('main')) {
                event.preventDefault();
              }
            }
          });
          _context.next = 10;
          return initAddress();
        case 10:
          formAddress = _context.sent;
          document.addEventListener('click', function (event) {
            var element = event.target;
            validateFormAddress = false;
            validateFormAddress = conferirFormAddress(formAddress);
            if (validateFormAddress && validateFormBasic) {
              if (element.classList.contains('big-school-data') || element.classList.contains('button-school-data')) {
                changeMains('.screen-school-data');
                changeSubMainTitle('Formulário de Dados Acadêmicos');
              }
            } else {
              if (element.classList.contains('main')) {
                event.preventDefault();
              }
            }
          });
          _context.next = 14;
          return createFormSchoolData();
        case 14:
          formSchoolData = _context.sent;
          _context.next = 17;
          return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, termsConditions), formData), formAddress), formSchoolData);
        case 17:
          allData = _context.sent;
          return _context.abrupt("return", allData);
        case 19:
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
          return fetch('http://appcadastro.cieemg.org.br/cadastrar', {
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
          if (response.ok) {} else {
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