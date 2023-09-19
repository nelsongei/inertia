"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Customers_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Customers/Create.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Customers/Create.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    countries: Object,
    currencies: Object
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
      firstname: '',
      lastname: '',
      email: '',
      currency_id: '',
      phone: '',
      website: '',
      name: '',
      country_id: '',
      state: '',
      city: '',
      bPhone: '',
      address_1: '',
      address_2: '',
      zip_code: '',
      sZip_code: '',
      sPhone: '',
      sAddress_1: '',
      sAddress_2: '',
      sCity: '',
      sState: '',
      sCountry_id: '',
      sName: ''
    });

    var submit = function submit() {
      form.post('/customers');
    };

    var __returned__ = {
      form: form,
      submit: submit,
      useForm: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Customers/Create.vue?vue&type=template&id=b47afa82":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Customers/Create.vue?vue&type=template&id=b47afa82 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Create Customer", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "flex flex-col"
};
var _hoisted_3 = {
  "class": "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
};
var _hoisted_4 = {
  "class": "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
};
var _hoisted_5 = {
  "class": "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
};
var _hoisted_6 = {
  "class": "mt-10 sm:mt-0"
};
var _hoisted_7 = {
  "class": "md:grid md:grid-cols-3 md:gap-6"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "md:col-span-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "px-4 sm:px-0 ml-3 mt-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-lg font-medium leading-6 text-blue-900"
}, "Personal Information"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mt-1 text-sm text-gray-600"
}, "Use a permanent address where you can receive mail.")])], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "mt-5 md:mt-0 md:col-span-2"
};
var _hoisted_10 = {
  "class": "shadow overflow-hidden sm:rounded-md"
};
var _hoisted_11 = {
  "class": "px-4 py-5 bg-white sm:p-6"
};
var _hoisted_12 = {
  "class": "grid grid-cols-6 gap-6"
};
var _hoisted_13 = {
  "class": "col-span-6 sm:col-span-3"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "firstname",
  "class": "block text-sm font-medium text-gray-700"
}, "First name", -1
/* HOISTED */
);

var _hoisted_15 = ["textContent"];
var _hoisted_16 = {
  "class": "col-span-6 sm:col-span-3"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "lastname",
  "class": "block text-sm font-medium text-gray-700"
}, "Last name", -1
/* HOISTED */
);

var _hoisted_18 = ["textContent"];
var _hoisted_19 = {
  "class": "col-span-6 sm:col-span-3"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email-address",
  "class": "block text-sm font-medium text-gray-700"
}, "Email address", -1
/* HOISTED */
);

var _hoisted_21 = ["textContent"];
var _hoisted_22 = {
  "class": "col-span-6 sm:col-span-3"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "phone",
  "class": "block text-sm font-medium text-gray-700"
}, "Phone No", -1
/* HOISTED */
);

var _hoisted_24 = ["textContent"];
var _hoisted_25 = {
  "class": "col-span-6 sm:col-span-3"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "currency_id",
  "class": "block text-sm font-medium text-gray-700"
}, "Currency", -1
/* HOISTED */
);

var _hoisted_27 = ["textContent", "value"];
var _hoisted_28 = ["textContent"];
var _hoisted_29 = {
  "class": "col-span-6 sm:col-span-3"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "website",
  "class": "block text-sm font-medium text-gray-700"
}, "Website", -1
/* HOISTED */
);

var _hoisted_31 = ["textContent"];

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "hidden sm:block",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "py-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "border-t border-gray-200"
})])], -1
/* HOISTED */
);

var _hoisted_33 = {
  "class": "mt-10 sm:mt-0"
};
var _hoisted_34 = {
  "class": "md:grid md:grid-cols-3 md:gap-6"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "md:col-span-1 ml-3 mt-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "px-4 sm:px-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-lg font-medium leading-6 text-blue-900"
}, "Billing Information"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mt-1 text-sm text-gray-600"
}, "Add Customer's Billing Data.")])], -1
/* HOISTED */
);

var _hoisted_36 = {
  "class": "mt-5 md:mt-0 md:col-span-2"
};
var _hoisted_37 = {
  "class": "shadow overflow-hidden sm:rounded-md"
};
var _hoisted_38 = {
  "class": "px-4 py-5 bg-white sm:p-6"
};
var _hoisted_39 = {
  "class": "grid grid-cols-6 gap-6"
};
var _hoisted_40 = {
  "class": "col-span-6 sm:col-span-3"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "name",
  "class": "block text-sm font-medium text-gray-700"
}, "Name", -1
/* HOISTED */
);

var _hoisted_42 = ["textContent"];
var _hoisted_43 = {
  "class": "col-span-6 sm:col-span-3"
};

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "country_id",
  "class": "block text-sm font-medium text-gray-700"
}, "Country", -1
/* HOISTED */
);

var _hoisted_45 = ["value", "textContent"];
var _hoisted_46 = ["textContent"];
var _hoisted_47 = {
  "class": "col-span-6 sm:col-span-3"
};

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "state",
  "class": "block text-sm font-medium text-gray-700"
}, "State", -1
/* HOISTED */
);

var _hoisted_49 = ["textContent"];
var _hoisted_50 = {
  "class": "col-span-6 sm:col-span-3"
};

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "city",
  "class": "block text-sm font-medium text-gray-700"
}, "City", -1
/* HOISTED */
);

var _hoisted_52 = ["textContent"];
var _hoisted_53 = {
  "class": "col-span-6 sm:col-span-3 relative w-full text-left"
};

var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "flex text-sm not-italic items-center font-medium text-gray-800 whitespace-nowrap justify-between"
}, " Address ", -1
/* HOISTED */
);

var _hoisted_55 = {
  "class": "flex flex-col mt-1"
};
var _hoisted_56 = ["textContent"];
var _hoisted_57 = {
  "class": "col-span-6 sm:col-span-3"
};

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "bPhone",
  "class": "block text-sm font-medium text-gray-700"
}, "Phone", -1
/* HOISTED */
);

var _hoisted_59 = ["textContent"];

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "zip_code",
  "class": "block text-sm font-medium text-gray-700"
}, "Zip Code", -1
/* HOISTED */
);

var _hoisted_61 = ["textContent"];

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"hidden sm:block\" aria-hidden=\"true\"><div class=\"py-5\"><div class=\"border-t border-gray-200\"></div></div></div><div class=\"flex items-center justify-start mb-6 md:justify-end md:mb-1\"><div class=\"p-1\"><button class=\"inline-flex whitespace-nowrap items-center border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 px-3 py-2 text-sm leading-4 rounded-md border-transparent border-solid border-blue-500 font-normal transition ease-in-out duration-150 text-blue-500 hover:bg-blue-200 shadow-inner focus:ring-blue-500\" type=\"button\"><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-5 w-5 -ml-0.5 mr-2 h-4 w-4\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2\"></path></svg> Copy from Billing </button></div></div>", 2);

var _hoisted_64 = {
  "class": "mt-10 sm:mt-0"
};
var _hoisted_65 = {
  "class": "md:grid md:grid-cols-3 md:gap-6"
};

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "md:col-span-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "px-4 sm:px-0 ml-3 mt-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-lg font-medium leading-6 text-blue-900"
}, "Shipping Information"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mt-1 text-sm text-gray-600"
}, "Use a permanent address where you can receive package.")])], -1
/* HOISTED */
);

var _hoisted_67 = {
  "class": "mt-5 md:mt-0 md:col-span-2"
};
var _hoisted_68 = {
  "class": "shadow overflow-hidden sm:rounded-md"
};
var _hoisted_69 = {
  "class": "px-4 py-5 bg-white sm:p-6"
};
var _hoisted_70 = {
  "class": "grid grid-cols-6 gap-6"
};
var _hoisted_71 = {
  "class": "col-span-6 sm:col-span-3"
};

var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "sName",
  "class": "block text-sm font-medium text-gray-700"
}, "Name", -1
/* HOISTED */
);

var _hoisted_73 = ["textContent"];
var _hoisted_74 = {
  "class": "col-span-6 sm:col-span-3"
};

var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "sCountry_id",
  "class": "block text-sm font-medium text-gray-700"
}, "Country", -1
/* HOISTED */
);

var _hoisted_76 = ["textContent", "value"];
var _hoisted_77 = ["textContent"];
var _hoisted_78 = {
  "class": "col-span-6 sm:col-span-3"
};

var _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "sState",
  "class": "block text-sm font-medium text-gray-700"
}, "State", -1
/* HOISTED */
);

var _hoisted_80 = ["textContent"];
var _hoisted_81 = {
  "class": "col-span-6 sm:col-span-3"
};

var _hoisted_82 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "city",
  "class": "block text-sm font-medium text-gray-700"
}, "City", -1
/* HOISTED */
);

var _hoisted_83 = ["textContent"];
var _hoisted_84 = {
  "class": "col-span-6 sm:col-span-3 relative w-full text-left"
};

var _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "flex text-sm not-italic items-center font-medium text-gray-800 whitespace-nowrap justify-between"
}, " Address ", -1
/* HOISTED */
);

var _hoisted_86 = {
  "class": "flex flex-col mt-1"
};
var _hoisted_87 = ["textContent"];
var _hoisted_88 = {
  "class": "col-span-6 sm:col-span-3"
};

var _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "SPhone",
  "class": "block text-sm font-medium text-gray-700"
}, "Phone", -1
/* HOISTED */
);

var _hoisted_90 = ["textContent"];

var _hoisted_91 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "sZip_code",
  "class": "block text-sm font-medium text-gray-700"
}, "Zip Code", -1
/* HOISTED */
);

var _hoisted_92 = ["textContent"];

var _hoisted_93 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "px-4 py-3 bg-gray-50 text-right sm:px-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
}, " Save ")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.submit && $setup.submit.apply($setup, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.firstname = $event;
    }),
    type: "text",
    name: "firstname",
    id: "firstname",
    autocomplete: "given-name",
    "class": "border border-gray-400 p-2 w-full rounded-lg"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.firstname]]), $setup.form.errors.firstname ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.firstname),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_15)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.lastname = $event;
    }),
    name: "lastname",
    id: "lastname",
    autocomplete: "lastname",
    "class": "border border-gray-400 p-2 w-full rounded-lg"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.lastname]]), $setup.form.errors.lastname ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.lastname),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_18)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "email-address",
    id: "email-address",
    autocomplete: "email",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.form.email = $event;
    }),
    "class": "border border-gray-400 p-2 w-full rounded-lg"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.email]]), $setup.form.errors.email ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.email),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_21)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "phone",
    id: "phone",
    autocomplete: "email",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.form.phone = $event;
    }),
    "class": "border border-gray-400 p-2 w-full rounded-lg"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.phone]]), $setup.form.errors.phone ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.phone),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_24)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.form.currency_id = $event;
    }),
    id: "currency_id",
    name: "currency_id",
    autocomplete: "country-name",
    "class": "border border-gray-400 p-2 w-full rounded-lg"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.currencies, function (currency) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: currency.id,
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(currency.name + ' ' + currency.code),
      value: currency.id
    }, null, 8
    /* PROPS */
    , _hoisted_27);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.form.currency_id]]), $setup.form.errors.currency_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.currency_id),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_28)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "website",
    id: "website",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.form.website = $event;
    }),
    autocomplete: "address-level2",
    "class": "border border-gray-400 p-2 w-full rounded-lg"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.website]]), $setup.form.errors.website ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.website),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_31)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])])]), _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "first-name",
    id: "name",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.form.name = $event;
    }),
    autocomplete: "given-name",
    "class": "border border-gray-400 p-2 w-full rounded-lg"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.name]]), $setup.form.errors.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.name),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_42)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.form.country_id = $event;
    }),
    id: "country_id",
    name: "country_id",
    autocomplete: "country_id",
    "class": "border border-gray-400 p-2 w-full rounded-lg"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.countries, function (country) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: country.id,
      value: country.id,
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(country.name + ' ' + country.code)
    }, null, 8
    /* PROPS */
    , _hoisted_45);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.form.country_id]]), $setup.form.errors.country_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.country_id),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_46)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [_hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "state",
    id: "state",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.form.state = $event;
    }),
    autocomplete: "family-name",
    "class": "border border-gray-400 p-2 w-full rounded-lg"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.state]]), $setup.form.errors.state ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.state),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_49)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "city",
    id: "city",
    autocomplete: "email",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $setup.form.city = $event;
    }),
    "class": "border border-gray-400 p-2 w-full rounded-lg"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.city]]), $setup.form.errors.city ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.city),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_52)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [_hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $setup.form.address_1 = $event;
    }),
    placeholder: "Street 1",
    type: "text",
    name: "address_1",
    "class": "border border-gray-400 p-2 w-full rounded-lg box-border w-full px-3 py-2 text-sm not-italic font-normal leading-snug text-left text-black placeholder-gray-400 bg-white border border-gray-200 border-solid rounded outline-none focus:ring-primary-400 focus:border-primary-400"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.address_1]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    placeholder: "Street 2",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $setup.form.address_2 = $event;
    }),
    type: "text",
    "class": "border border-gray-400 p-2 w-full rounded-lg mt-3 box-border w-full px-3 py-2 text-sm not-italic font-normal leading-snug text-left text-black placeholder-gray-400 bg-white border border-gray-200 border-solid rounded outline-none focus:ring-primary-400 focus:border-primary-400 mt-3",
    name: "address_2"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.address_2]])]), $setup.form.errors.address_1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.address_1),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_56)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [_hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $setup.form.bPhone = $event;
    }),
    type: "text",
    name: "bPhone",
    id: "bPhone",
    autocomplete: "address-level2",
    "class": "border border-gray-400 p-2 w-full rounded-lg"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.bPhone]]), $setup.form.errors.bPhone ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.bPhone),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_59)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "region",
    id: "zip_code",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $setup.form.zip_code = $event;
    }),
    autocomplete: "address-level1",
    "class": "border border-gray-400 p-2 w-full rounded-lg"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.zip_code]]), $setup.form.errors.zip_code ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.zip_code),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_61)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])])]), _hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [_hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [_hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "first-name",
    id: "sName",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $setup.form.sName = $event;
    }),
    autocomplete: "given-name",
    "class": "border border-gray-400 p-2 w-full rounded-lg"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.sName]]), $setup.form.errors.sName ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.sName),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_73)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [_hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $setup.form.sCountry_id = $event;
    }),
    id: "sCountry_id",
    name: "sCountry_id",
    autocomplete: "sCountry_id",
    "class": "border border-gray-400 p-2 w-full rounded-lg"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.countries, function (country) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: country.id,
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(country.name + ' ' + country.code),
      value: country.id
    }, null, 8
    /* PROPS */
    , _hoisted_76);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.form.sCountry_id]]), $setup.form.errors.sCountry_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.sCountry_id),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_77)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [_hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "sState",
    id: "sState",
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $setup.form.sState = $event;
    }),
    autocomplete: "family-name",
    "class": "border border-gray-400 p-2 w-full rounded-lg"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.sState]]), $setup.form.errors.sState ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.sState),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_80)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [_hoisted_82, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "city",
    id: "sCity",
    autocomplete: "sCity",
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return $setup.form.sCity = $event;
    }),
    "class": "border border-gray-400 p-2 w-full rounded-lg"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.sCity]]), $setup.form.errors.sCity ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.sCity),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_83)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [_hoisted_85, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $setup.form.sAddress_1 = $event;
    }),
    placeholder: "Street 1",
    type: "text",
    name: "sAddress_1",
    "class": "border border-gray-400 p-2 w-full rounded-lg box-border w-full px-3 py-2 text-sm not-italic font-normal leading-snug text-left text-black placeholder-gray-400 bg-white border border-gray-200 border-solid rounded outline-none focus:ring-primary-400 focus:border-primary-400"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.sAddress_1]]), $setup.form.errors.sAddress_1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.sAddress_1),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_87)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    placeholder: "Street 2",
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return $setup.form.sAddress_2 = $event;
    }),
    type: "text",
    "class": "border border-gray-400 p-2 w-full rounded-lg mt-3 box-border w-full px-3 py-2 text-sm not-italic font-normal leading-snug text-left text-black placeholder-gray-400 bg-white border border-gray-200 border-solid rounded outline-none focus:ring-primary-400 focus:border-primary-400 mt-3",
    name: "sAddress_2"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.sAddress_2]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, [_hoisted_89, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return $setup.form.sPhone = $event;
    }),
    type: "text",
    name: "bPhone",
    id: "sPhone",
    autocomplete: "address-level2",
    "class": "border border-gray-400 p-2 w-full rounded-lg"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.sPhone]]), $setup.form.errors.sPhone ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.sPhone),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_90)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_91, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "region",
    id: "sZip_code",
    "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
      return $setup.form.sZip_code = $event;
    }),
    autocomplete: "address-level1",
    "class": "border border-gray-400 p-2 w-full rounded-lg"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.sZip_code]]), $setup.form.errors.sZip_code ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.sZip_code),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_92)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), _hoisted_93])])])])], 32
  /* HYDRATE_EVENTS */
  )])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/Customers/Create.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Customers/Create.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_b47afa82__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=b47afa82 */ "./resources/js/Pages/Customers/Create.vue?vue&type=template&id=b47afa82");
/* harmony import */ var _Create_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Customers/Create.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _opt_lampp_htdocs_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_opt_lampp_htdocs_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_b47afa82__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Customers/Create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Customers/Create.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Customers/Create.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Customers/Create.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Customers/Create.vue?vue&type=template&id=b47afa82":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Customers/Create.vue?vue&type=template&id=b47afa82 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_b47afa82__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_b47afa82__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=b47afa82 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Customers/Create.vue?vue&type=template&id=b47afa82");


/***/ })

}]);