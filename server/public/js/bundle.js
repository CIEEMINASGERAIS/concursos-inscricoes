/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./web/src/pages/address.js":
/*!**********************************!*\
  !*** ./web/src/pages/address.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = __webpack_require__(/*! ../utils/util.js */ "./web/src/utils/util.js"),
  isNumero = _require.isNumero,
  isComplemento = _require.isComplemento,
  isTelefone = _require.isTelefone,
  isEmail = _require.isEmail,
  changeMains = _require.changeMains,
  changeSubMainTitle = _require.changeSubMainTitle,
  removerMensagem = _require.removerMensagem,
  isCep = _require.isCep;
function initAddress() {
  return _initAddress.apply(this, arguments);
}
function _initAddress() {
  _initAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
              var response, htmlContent, address, form, formDataAddress, cep, logradouro, uf, bairro, cidade, numero, validate, complemento, _validate, telefone1, _validate2, telefone2, _validate3, email, _validate4;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return fetch('address');
                  case 2:
                    response = _context3.sent;
                    _context3.next = 5;
                    return response.text();
                  case 5:
                    htmlContent = _context3.sent;
                    address = document.querySelector('.screen-address');
                    address.innerHTML = htmlContent;
                    form = document.querySelector('.form-address');
                    formDataAddress = {};
                    cep = document.getElementById('cep');
                    logradouro = document.getElementById('logradouro');
                    uf = document.getElementById('uf');
                    bairro = document.getElementById('bairro');
                    cidade = document.getElementById('cidade');
                    if (cep) {
                      cep.addEventListener('input', /*#__PURE__*/function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
                          var endereco, dadosCep, validate, cepSemPonto, _response, opcoes, cepFound;
                          return _regeneratorRuntime().wrap(function _callee$(_context) {
                            while (1) switch (_context.prev = _context.next) {
                              case 0:
                                cepSemPonto = e.target.value.replace(/[^0-9]/g, '');
                                e.target.value = e.target.value.replace(/\D/g, '');
                                e.target.value = e.target.value.replace(/(\d{5})(\d)/, '$1-$2');
                                e.target.value = e.target.value.replace(/(-\d{3})\d+?$/, '$1');
                                _context.prev = 4;
                                _context.next = 7;
                                return fetch("http://localhost:8080/cadastrarEndereco?termo=".concat(cepSemPonto));
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
                                cepFound = document.querySelector('.cep-found');
                                if (!validate) {
                                  _context.next = 30;
                                  break;
                                }
                                formDataAddress.cep = e.target.value;
                                if (e.target.value.length === 9 && !dadosCep[0]) {
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
                                document.getElementById("msg-cep").innerHTML = "";
                                _context.next = 33;
                                break;
                              case 30:
                                e.preventDefault();
                                document.getElementById("msg-cep").innerHTML = "<p>CEP inválido!</p>";
                                return _context.abrupt("return", formDataAddress.cep = false);
                              case 33:
                              case "end":
                                return _context.stop();
                            }
                          }, _callee, null, [[4, 19]]);
                        }));
                        return function (_x3) {
                          return _ref2.apply(this, arguments);
                        };
                      }());
                    }

                    // logradouro.value = endereco.map(logradouro => logradouro.logradouro)
                    // validate = isNaturalidadeNacionalidade(logradouro.value)
                    // if (validate) {
                    //   document.getElementById("msg-logradouro").innerHTML = ""
                    //   formDataAddress.logradouro = logradouro.value
                    // } else {
                    //   document.getElementById("msg-logradouro").innerHTML =
                    //     "<p>Logradouro inválido!</p>"
                    //   formDataAddress.logradouro = false
                    // }
                    // uf.value = endereco.map(uf => uf.uf)
                    // validate = (isUfNaturalidade(uf.value))
                    // if (validate) {
                    //   document.getElementById("msg-uf").innerHTML = ""
                    //   formDataAddress.uf = uf.value
                    // } else {
                    //   document.getElementById("msg-uf").innerHTML =
                    //     "<p>UF inválido!</p>"
                    //   formDataAddress.uf = false
                    // }
                    // bairro.value = endereco.map(bairro => bairro.bairro)
                    // validate = (isNaturalidadeNacionalidade(bairro.value))
                    // if (validate) {
                    //   document.getElementById("msg-bairro").innerHTML = ""
                    //   formDataAddress.bairro = bairro.value
                    // } else {
                    //   document.getElementById("msg-bairro").innerHTML =
                    //     "<p>Bairro inválido!</p>"
                    //   formDataAddress.bairro = false
                    // }
                    // cidade.value = endereco.map(cidade => cidade.cidade)
                    // validate = (isNaturalidadeNacionalidade(cidade.value))
                    // if (validate) {
                    //   document.getElementById("msg-cidade").innerHTML = ""
                    //   formDataAddress.cidade = cidade.value
                    // } else {
                    //   document.getElementById("msg-cidade").innerHTML =
                    //     "<p>Cidade inválido!</p>"
                    //   formDataAddress.cidade = false
                    // }

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
                      email.addEventListener('input', function (e) {
                        _validate4 = isEmail(e.target.value);
                        if (_validate4) {
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-email').innerHTML = "";
                          return formDataAddress.email = e.target.value;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-email').innerHTML = "<p>Email inválido!</p>";
                          return formDataAddress.email = false;
                        }
                      });
                    }
                    if (form) {
                      form.addEventListener('submit', /*#__PURE__*/function () {
                        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
                          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                            while (1) switch (_context2.prev = _context2.next) {
                              case 0:
                                e.preventDefault();
                                if (
                                // formDataAddress.cep && formDataAddress.logradouro && formDataAddress.numero && formDataAddress.uf
                                // && formDataAddress.bairro && formDataAddress.cidade && formDataAddress.telefone1 && formDataAddress.telefone2
                                // && formDataAddress.email

                                formDataAddress.cep) {
                                  changeMains('.screen-school-data');
                                  changeSubMainTitle('Formulário de Dados Acadêmicos');
                                  console.log(formDataAddress);
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
                                return _context2.stop();
                            }
                          }, _callee2);
                        }));
                        return function (_x4) {
                          return _ref3.apply(this, arguments);
                        };
                      }());
                    } else {
                      console.log('Erro ao buscar dados do formulário');
                      reject(error);
                    }
                  case 28:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function (_x, _x2) {
              return _ref.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _initAddress.apply(this, arguments);
}
module.exports = initAddress;

/***/ }),

/***/ "./web/src/pages/dataBasic.js":
/*!************************************!*\
  !*** ./web/src/pages/dataBasic.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = __webpack_require__(/*! ../utils/util.js */ "./web/src/utils/util.js"),
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
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
              var response, htmlContent, dataBasic, formData, ufNaturalidade, ufs, i, option, listDeficiencias, formDataBasic, inputNome, validate, inputCpf, _validate, rg, _validate2, orgaoExpedidor, _validate3, inputNomeMae, _validate4, inputNomePai, _validate5, ctps, _validate6, naturalidade, _validate7, nacionalidade, _validate8, estadoCivil, _validate9, dataNascimento, _validate10, sexo, _validate11, _validate12, deficiencias, descDiv, _validate13;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch('formDataBasic');
                  case 2:
                    response = _context.sent;
                    _context.next = 5;
                    return response.text();
                  case 5:
                    htmlContent = _context.sent;
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
                      inputCpf.addEventListener('input', function (e) {
                        e.target.value = e.target.value.replace(/\D/g, '');
                        e.target.value = e.target.value.replace(/(\d{3})(\d)/, '$1.$2');
                        e.target.value = e.target.value.replace(/(\d{3})(\d)/, '$1.$2');
                        e.target.value = e.target.value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
                        _validate = isCpf(e.target.value);
                        console.log(_validate);
                        if (_validate) {
                          document.getElementById('msg-cpf').innerHTML = '';
                          return formDataBasic.cpf = e.target.value;
                        } else {
                          e.preventDefault();
                          // Enviar para o HTML a mensagem de erro
                          document.getElementById('msg-cpf').innerHTML = "<p>CPF inválido!</p>";
                          return formDataBasic.cpf = false;
                        }
                      });
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
                        console.log(_validate8);
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
                        console.log(e.target.value);
                        _validate9 = isEstadoCivil(e.target.value);
                        console.log(_validate9);
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
                        if (
                        // formDataBasic.nome && formDataBasic.cpf && formDataBasic.nomemae && formDataBasic.naturalidade && formDataBasic.nacionalidade && formDataBasic.estadocivil
                        // && formDataBasic.dt_nascimento && formDataBasic.sexo && formDataBasic.uf_naturalidade && formDataBasic.deficiencia && formDataBasic.rg

                        formDataBasic.nome && formDataBasic.cpf

                        // formDataBasic.orgaoexpedidor && formDataBasic.rg
                        //  && formDataBasic.nomepai && formDataBasic.ctps
                        // No caso do nomepai, carteira de trabalho e orgao expedidor não são obrigatorios
                        ) {
                          console.log('Sucesso!');
                          console.log(formDataBasic);
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
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x, _x2) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function initDataBasic() {
    return _ref.apply(this, arguments);
  };
}();
module.exports = initDataBasic;

/***/ }),

/***/ "./web/src/pages/main.js":
/*!*******************************!*\
  !*** ./web/src/pages/main.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ../utils/util.js */ "./web/src/utils/util.js"),
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
var main = function main() {
  document.addEventListener('click', function (event) {
    var element = event.target;
    if (element.classList.contains('show-menu-side')) {
      if (mainSide.style.display === 'block') {
        mainSide.style.display = 'none';
        mainSideMobile.style.display = 'block';
        menuSideComplete.style.width = '4rem';
        buttonMenu.style.marginLeft = '4.5rem';
        logo.style.width = '3.5rem';
        menuSideComplete.style.gap = '3rem';
        imageButton.src = './web/src/assets/images/menu.png';
      } else {
        mainSide.style.display = 'block';
        mainSideMobile.style.display = 'none';
        menuSideComplete.style.width = '12rem';
        buttonMenu.style.marginLeft = '13rem';
        menuSideComplete.style.gap = '0rem';
        imageButton.src = './web/src/assets/images/close.png';
        var changeMediaQuery = function changeMediaQuery(mediaQuery) {
          if (mediaQuery.matches) {
            for (var i = 0; i < fontMenuMobile.length; i++) {
              fontMenuMobile[i].style.fontSize = '0.7rem';
            }
            logo.style.width = '11rem';
            mainSide.style.marginTop = '1.5rem';
          } else {
            for (var _i = 0; _i < fontMenuMobile.length; _i++) {
              fontMenuMobile[_i].style.fontSize = '1.2rem';
            }
            mainSide.style.display = 'block';
            buttonMenu.style.marginLeft = '13rem';
            menuSideComplete.style.width = '12rem';
            mainSideMobile.style.display = 'none';
            logo.style.width = '10rem';
          }
        };
        changeMediaQuery(mediaQuery);
        mediaQuery.addEventListener('change', changeMediaQuery);
      }
    } else {
      var changeMediaQueryOut = function changeMediaQueryOut() {
        if (mediaQuery.matches) {
          if (element.classList.contains('main')) {
            return;
          } else {
            if (mainSide.style.display === 'block') {
              mainSide.style.display = 'none';
              mainSideMobile.style.display = 'block';
              menuSideComplete.style.width = '4rem';
              buttonMenu.style.marginLeft = '4.5rem';
              logo.style.width = '3.5rem';
              menuSideComplete.style.gap = '3rem';
              imageButton.src = './web/src/assets/images/menu.png';
            }
          }
        }
      };
      changeMediaQueryOut(mediaQuery);
    }
  });
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

/***/ "./web/src/pages/schoolData.js":
/*!*************************************!*\
  !*** ./web/src/pages/schoolData.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = __webpack_require__(/*! ../utils/util */ "./web/src/utils/util.js"),
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
                              return fetch("http://localhost:8080/cadastrarCurso?termo=".concat(codeFinal));
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
                                      return fetch("http://localhost:8080/cadastrarEscola?termo=".concat(element.value));
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
                                      console.log(validate);
                                      if (validate) {
                                        document.getElementById("msg-escola").innerHTML = "";
                                        callCourse();
                                        dataFormSchool.escola_id = codeFinal;
                                      } else {
                                        document.getElementById("msg-escola").innerHTML = "<p>Escola inválida!</p>";
                                        dataFormSchool.escola_id = false;
                                      }
                                    case 7:
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
                        console.log(validate);
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
                        console.log(validate);
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
                        console.log(validate);
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

                                // && dataFormSchool.periodo
                                ) {
                                  dataFormSchool.ano = today.getFullYear();
                                  console.log(dataFormSchool);
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

/***/ "./web/src/pages/terms-and-conditions.js":
/*!***********************************************!*\
  !*** ./web/src/pages/terms-and-conditions.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = __webpack_require__(/*! ../utils/util */ "./web/src/utils/util.js"),
  changeMains = _require.changeMains,
  changeSubMainTitle = _require.changeSubMainTitle,
  dateTime = _require.dateTime;
function termsAndConditions() {
  return _termsAndConditions.apply(this, arguments);
}
function _termsAndConditions() {
  _termsAndConditions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
              var response, contetHtml, termsCondtions, menuSide, menuTop, termoBox, title, schoolData;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return fetch('terms-and-conditions');
                  case 2:
                    response = _context3.sent;
                    _context3.next = 5;
                    return response.text();
                  case 5:
                    contetHtml = _context3.sent;
                    termsCondtions = document.querySelector('.terms-and-conditions');
                    menuSide = document.querySelector('.nav-bar');
                    menuTop = document.querySelector('.top-menu');
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
                                menuTop.style.visibility = 'hidden';
                                termoBox.style.display = 'none';
                                title.style.visibility = 'hidden';
                              } else {
                                termsCondtions.style.display = 'none';
                                menuSide.style.visibility = 'visible';
                                menuTop.style.visibility = 'visible';
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
                                // if (schoolData.termos_condicoes) {
                                changeMains('.screen-basic-data1');
                                changeSubMainTitle('Formulário de Dados Básicos');
                                console.log(dateTime());
                                // resolve(schoolData)
                                // } else {
                                //     e.preventDefault()
                                // }
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
                    $(document).ready( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while (1) switch (_context2.prev = _context2.next) {
                          case 0:
                            document.getElementById("li-concordo").disabled = true;
                            $('.text-terms-conditions').bind('scroll', function () {
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
                          case 2:
                          case "end":
                            return _context2.stop();
                        }
                      }, _callee2);
                    })));
                  case 15:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function (_x, _x2) {
              return _ref.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _termsAndConditions.apply(this, arguments);
}
module.exports = termsAndConditions;

/***/ }),

/***/ "./web/src/utils/util.js":
/*!*******************************!*\
  !*** ./web/src/utils/util.js ***!
  \*******************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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

  // console.log(regex.test(nome))

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
          return fetch("http://localhost:8080/cadastrarEscola?termo=".concat(school));
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
          console.log(schoolVerification, idSchoolVerification);
          if (!(schoolVerification !== school)) {
            _context3.next = 30;
            break;
          }
          return _context3.abrupt("return", false);
        case 30:
          if (!(idSchool !== idSchoolVerification)) {
            _context3.next = 32;
            break;
          }
          return _context3.abrupt("return", false);
        case 32:
          if (!(school.length === 0)) {
            _context3.next = 34;
            break;
          }
          return _context3.abrupt("return", false);
        case 34:
          return _context3.abrupt("return", true);
        case 35:
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
          return fetch("http://localhost:8080/cadastrarCurso?termo=".concat(codeCourse));
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
var isCpf = function isCpf() {
  var cpf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var regex = new RegExp(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/);
  if (!regex.test(cpf)) {
    return false;
  }
  cpf = cpf.replace(/\.|-/g, '');
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
    console.log(idade--);
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
  console.log(horario);
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
var isEmail = function isEmail(email) {
  var regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
  if (!regex.test(email)) {
    return false;
  }
  return true;
};
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
/*!****************!*\
  !*** ./app.js ***!
  \****************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var main = __webpack_require__(/*! ./web/src/pages/main.js */ "./web/src/pages/main.js");
var termsAndConditions = __webpack_require__(/*! ./web/src/pages/terms-and-conditions.js */ "./web/src/pages/terms-and-conditions.js");
var initAddress = __webpack_require__(/*! ./web/src/pages/address.js */ "./web/src/pages/address.js");
var initDataBasic = __webpack_require__(/*! ./web/src/pages/dataBasic.js */ "./web/src/pages/dataBasic.js");
var createFormSchoolData = __webpack_require__(/*! ./web/src/pages/schoolData.js */ "./web/src/pages/schoolData.js");
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
          termsConditions = termsAndConditions(); // Preciso colocar o await no termsConditions
          _context.next = 4;
          return initDataBasic();
        case 4:
          formData = _context.sent;
          _context.next = 7;
          return initAddress();
        case 7:
          formAddress = _context.sent;
          _context.next = 10;
          return createFormSchoolData();
        case 10:
          formSchoolData = _context.sent;
          _context.next = 13;
          return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, termsConditions), formData), formAddress), formSchoolData);
        case 13:
          allData = _context.sent;
          console.log(allData);
          // return allData
        case 15:
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
          return fetch('http://localhost:8080/cadastrar', {
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
takeData();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map