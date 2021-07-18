'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">blog-angular documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"license.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>LICENSE\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter additional\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#additional-pages"' : 'data-target="#xs-additional-pages"', ">\n                            <span class=\"icon ion-ios-book\"></span>\n                            <span>Additional documentation</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"', ">\n                                    <li class=\"chapter inner\">\n                                        <a data-type=\"chapter-link\" href=\"additional-documentation/a-title.html\" data-context-id=\"additional\">\n                                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#additional-page-3cee2c3fa0cc434f3ed6c0edf4311b22"' : 'data-target="#xs-additional-page-3cee2c3fa0cc434f3ed6c0edf4311b22"', ">\n                                                <span class=\"link-name\">A TITLE</span>\n                                                <span class=\"icon ion-ios-arrow-down\"></span>\n                                            </div>\n                                        </a>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="additional-page-3cee2c3fa0cc434f3ed6c0edf4311b22"' : 'id="xs-additional-page-3cee2c3fa0cc434f3ed6c0edf4311b22"', ">\n                                            <li class=\"link for-chapter2\">\n                                                <a href=\"additional-documentation/a-title/a-1.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"additional\">A 1</a>\n                                            </li>\n                                            <li class=\"link for-chapter3\">\n                                                <a href=\"additional-documentation/a-title/a-1/a-1-1.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"additional\">A 1 1</a>\n                                            </li>\n                                            <li class=\"link for-chapter3\">\n                                                <a href=\"additional-documentation/a-title/a-1/a-1-2.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"additional\">A 1 2</a>\n                                            </li>\n                                            <li class=\"link for-chapter2\">\n                                                <a href=\"additional-documentation/a-title/a-2.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"additional\">A 2</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                    <li class=\"chapter inner\">\n                                        <a data-type=\"chapter-link\" href=\"additional-documentation/b-title.html\" data-context-id=\"additional\">\n                                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#additional-page-e009f39902f7beeb9ef5b0daf975a819"' : 'data-target="#xs-additional-page-e009f39902f7beeb9ef5b0daf975a819"', ">\n                                                <span class=\"link-name\">B TITLE</span>\n                                                <span class=\"icon ion-ios-arrow-down\"></span>\n                                            </div>\n                                        </a>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="additional-page-e009f39902f7beeb9ef5b0daf975a819"' : 'id="xs-additional-page-e009f39902f7beeb9ef5b0daf975a819"', ">\n                                            <li class=\"link for-chapter2\">\n                                                <a href=\"additional-documentation/b-title/b-1.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"additional\">B 1</a>\n                                            </li>\n                                            <li class=\"link for-chapter2\">\n                                                <a href=\"additional-documentation/b-title/b-2.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"additional\">B 2</a>\n                                            </li>\n                                            <li class=\"link for-chapter2\">\n                                                <a href=\"additional-documentation/b-title/b-3.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"additional\">B 3</a>\n                                            </li>\n                                            <li class=\"link for-chapter2\">\n                                                <a href=\"additional-documentation/b-title/b-4.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"additional\">B 4</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AboutModule.html\" data-type=\"entity-link\" >AboutModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AboutRoutingModule.html\" data-type=\"entity-link\" >AboutRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-7105f4bd2c980c8b1a3a3ca236d0f00e"' : 'data-target="#xs-components-links-module-AppModule-7105f4bd2c980c8b1a3a3ca236d0f00e"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-7105f4bd2c980c8b1a3a3ca236d0f00e"' : 'id="xs-components-links-module-AppModule-7105f4bd2c980c8b1a3a3ca236d0f00e"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ComponentsModule.html\" data-type=\"entity-link\" >ComponentsModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ComponentsModule-816fe281952267c00aca5ab923d13185"' : 'data-target="#xs-components-links-module-ComponentsModule-816fe281952267c00aca5ab923d13185"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ComponentsModule-816fe281952267c00aca5ab923d13185"' : 'id="xs-components-links-module-ComponentsModule-816fe281952267c00aca5ab923d13185"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/FooterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FooterComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/HeaderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HeaderComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/NavbarComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NavbarComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/NotFoundComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NotFoundComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#pipes-links-module-ComponentsModule-816fe281952267c00aca5ab923d13185"' : 'data-target="#xs-pipes-links-module-ComponentsModule-816fe281952267c00aca5ab923d13185"', ">\n                                            <span class=\"icon ion-md-add\"></span>\n                                            <span>Pipes</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="pipes-links-module-ComponentsModule-816fe281952267c00aca5ab923d13185"' : 'id="xs-pipes-links-module-ComponentsModule-816fe281952267c00aca5ab923d13185"', ">\n                                            <li class=\"link\">\n                                                <a href=\"pipes/DomSecurePipe.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DomSecurePipe</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"pipes/YoutubePipe.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >YoutubePipe</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ContactModule.html\" data-type=\"entity-link\" >ContactModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ContactRoutingModule.html\" data-type=\"entity-link\" >ContactRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/CoursesModule.html\" data-type=\"entity-link\" >CoursesModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/CoursesRoutingModule.html\" data-type=\"entity-link\" >CoursesRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomeModule.html\" data-type=\"entity-link\" >HomeModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomeRoutingModule.html\" data-type=\"entity-link\" >HomeRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PortfolioModule.html\" data-type=\"entity-link\" >PortfolioModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PortfolioRoutingModule.html\" data-type=\"entity-link\" >PortfolioRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PostModule.html\" data-type=\"entity-link\" >PostModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PostRoutingModule.html\" data-type=\"entity-link\" >PostRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SidebarModule.html\" data-type=\"entity-link\" >SidebarModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-SidebarModule-79b3956ebebb21f07f489c01fd1f425e"' : 'data-target="#xs-components-links-module-SidebarModule-79b3956ebebb21f07f489c01fd1f425e"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-SidebarModule-79b3956ebebb21f07f489c01fd1f425e"' : 'id="xs-components-links-module-SidebarModule-79b3956ebebb21f07f489c01fd1f425e"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/SidebarComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SidebarComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/ConfigService.html\" data-type=\"entity-link\" >ConfigService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/SharedElement.html\" data-type=\"entity-link\" >SharedElement</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));