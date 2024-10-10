"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = function(fn, res) {
  return function() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
};
var __commonJS = function(cb, mod) {
  return function() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
};
var __export = function(target, all) {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = function(to, from, except, desc) {
  if (from && typeof from == "object" || typeof from == "function")
    for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++)
      key = keys[i], !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: function(k) {
        return from[k];
      }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = function(mod, isNodeMode, target) {
  return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
    mod
  );
}, __toCommonJS = function(mod) {
  return __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
};

// kolmafia-polyfill.js
var kolmafia, console, init_kolmafia_polyfill = __esm({
  "kolmafia-polyfill.js": function() {
    "use strict";
    kolmafia = require("kolmafia"), console = {
      log: kolmafia.print
    };
  }
});

// node_modules/html-entities/lib/named-references.js
var require_named_references = __commonJS({
  "node_modules/html-entities/lib/named-references.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    exports2.bodyRegExps = {
      xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
      html4: /&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
      html5: /&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g
    };
    exports2.namedReferences = {
      xml: {
        entities: {
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&apos;": "'",
          "&amp;": "&"
        },
        characters: {
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&apos;",
          "&": "&amp;"
        }
      },
      html4: {
        entities: {
          "&apos;": "'",
          "&nbsp": "\xA0",
          "&nbsp;": "\xA0",
          "&iexcl": "\xA1",
          "&iexcl;": "\xA1",
          "&cent": "\xA2",
          "&cent;": "\xA2",
          "&pound": "\xA3",
          "&pound;": "\xA3",
          "&curren": "\xA4",
          "&curren;": "\xA4",
          "&yen": "\xA5",
          "&yen;": "\xA5",
          "&brvbar": "\xA6",
          "&brvbar;": "\xA6",
          "&sect": "\xA7",
          "&sect;": "\xA7",
          "&uml": "\xA8",
          "&uml;": "\xA8",
          "&copy": "\xA9",
          "&copy;": "\xA9",
          "&ordf": "\xAA",
          "&ordf;": "\xAA",
          "&laquo": "\xAB",
          "&laquo;": "\xAB",
          "&not": "\xAC",
          "&not;": "\xAC",
          "&shy": "\xAD",
          "&shy;": "\xAD",
          "&reg": "\xAE",
          "&reg;": "\xAE",
          "&macr": "\xAF",
          "&macr;": "\xAF",
          "&deg": "\xB0",
          "&deg;": "\xB0",
          "&plusmn": "\xB1",
          "&plusmn;": "\xB1",
          "&sup2": "\xB2",
          "&sup2;": "\xB2",
          "&sup3": "\xB3",
          "&sup3;": "\xB3",
          "&acute": "\xB4",
          "&acute;": "\xB4",
          "&micro": "\xB5",
          "&micro;": "\xB5",
          "&para": "\xB6",
          "&para;": "\xB6",
          "&middot": "\xB7",
          "&middot;": "\xB7",
          "&cedil": "\xB8",
          "&cedil;": "\xB8",
          "&sup1": "\xB9",
          "&sup1;": "\xB9",
          "&ordm": "\xBA",
          "&ordm;": "\xBA",
          "&raquo": "\xBB",
          "&raquo;": "\xBB",
          "&frac14": "\xBC",
          "&frac14;": "\xBC",
          "&frac12": "\xBD",
          "&frac12;": "\xBD",
          "&frac34": "\xBE",
          "&frac34;": "\xBE",
          "&iquest": "\xBF",
          "&iquest;": "\xBF",
          "&Agrave": "\xC0",
          "&Agrave;": "\xC0",
          "&Aacute": "\xC1",
          "&Aacute;": "\xC1",
          "&Acirc": "\xC2",
          "&Acirc;": "\xC2",
          "&Atilde": "\xC3",
          "&Atilde;": "\xC3",
          "&Auml": "\xC4",
          "&Auml;": "\xC4",
          "&Aring": "\xC5",
          "&Aring;": "\xC5",
          "&AElig": "\xC6",
          "&AElig;": "\xC6",
          "&Ccedil": "\xC7",
          "&Ccedil;": "\xC7",
          "&Egrave": "\xC8",
          "&Egrave;": "\xC8",
          "&Eacute": "\xC9",
          "&Eacute;": "\xC9",
          "&Ecirc": "\xCA",
          "&Ecirc;": "\xCA",
          "&Euml": "\xCB",
          "&Euml;": "\xCB",
          "&Igrave": "\xCC",
          "&Igrave;": "\xCC",
          "&Iacute": "\xCD",
          "&Iacute;": "\xCD",
          "&Icirc": "\xCE",
          "&Icirc;": "\xCE",
          "&Iuml": "\xCF",
          "&Iuml;": "\xCF",
          "&ETH": "\xD0",
          "&ETH;": "\xD0",
          "&Ntilde": "\xD1",
          "&Ntilde;": "\xD1",
          "&Ograve": "\xD2",
          "&Ograve;": "\xD2",
          "&Oacute": "\xD3",
          "&Oacute;": "\xD3",
          "&Ocirc": "\xD4",
          "&Ocirc;": "\xD4",
          "&Otilde": "\xD5",
          "&Otilde;": "\xD5",
          "&Ouml": "\xD6",
          "&Ouml;": "\xD6",
          "&times": "\xD7",
          "&times;": "\xD7",
          "&Oslash": "\xD8",
          "&Oslash;": "\xD8",
          "&Ugrave": "\xD9",
          "&Ugrave;": "\xD9",
          "&Uacute": "\xDA",
          "&Uacute;": "\xDA",
          "&Ucirc": "\xDB",
          "&Ucirc;": "\xDB",
          "&Uuml": "\xDC",
          "&Uuml;": "\xDC",
          "&Yacute": "\xDD",
          "&Yacute;": "\xDD",
          "&THORN": "\xDE",
          "&THORN;": "\xDE",
          "&szlig": "\xDF",
          "&szlig;": "\xDF",
          "&agrave": "\xE0",
          "&agrave;": "\xE0",
          "&aacute": "\xE1",
          "&aacute;": "\xE1",
          "&acirc": "\xE2",
          "&acirc;": "\xE2",
          "&atilde": "\xE3",
          "&atilde;": "\xE3",
          "&auml": "\xE4",
          "&auml;": "\xE4",
          "&aring": "\xE5",
          "&aring;": "\xE5",
          "&aelig": "\xE6",
          "&aelig;": "\xE6",
          "&ccedil": "\xE7",
          "&ccedil;": "\xE7",
          "&egrave": "\xE8",
          "&egrave;": "\xE8",
          "&eacute": "\xE9",
          "&eacute;": "\xE9",
          "&ecirc": "\xEA",
          "&ecirc;": "\xEA",
          "&euml": "\xEB",
          "&euml;": "\xEB",
          "&igrave": "\xEC",
          "&igrave;": "\xEC",
          "&iacute": "\xED",
          "&iacute;": "\xED",
          "&icirc": "\xEE",
          "&icirc;": "\xEE",
          "&iuml": "\xEF",
          "&iuml;": "\xEF",
          "&eth": "\xF0",
          "&eth;": "\xF0",
          "&ntilde": "\xF1",
          "&ntilde;": "\xF1",
          "&ograve": "\xF2",
          "&ograve;": "\xF2",
          "&oacute": "\xF3",
          "&oacute;": "\xF3",
          "&ocirc": "\xF4",
          "&ocirc;": "\xF4",
          "&otilde": "\xF5",
          "&otilde;": "\xF5",
          "&ouml": "\xF6",
          "&ouml;": "\xF6",
          "&divide": "\xF7",
          "&divide;": "\xF7",
          "&oslash": "\xF8",
          "&oslash;": "\xF8",
          "&ugrave": "\xF9",
          "&ugrave;": "\xF9",
          "&uacute": "\xFA",
          "&uacute;": "\xFA",
          "&ucirc": "\xFB",
          "&ucirc;": "\xFB",
          "&uuml": "\xFC",
          "&uuml;": "\xFC",
          "&yacute": "\xFD",
          "&yacute;": "\xFD",
          "&thorn": "\xFE",
          "&thorn;": "\xFE",
          "&yuml": "\xFF",
          "&yuml;": "\xFF",
          "&quot": '"',
          "&quot;": '"',
          "&amp": "&",
          "&amp;": "&",
          "&lt": "<",
          "&lt;": "<",
          "&gt": ">",
          "&gt;": ">",
          "&OElig;": "\u0152",
          "&oelig;": "\u0153",
          "&Scaron;": "\u0160",
          "&scaron;": "\u0161",
          "&Yuml;": "\u0178",
          "&circ;": "\u02C6",
          "&tilde;": "\u02DC",
          "&ensp;": "\u2002",
          "&emsp;": "\u2003",
          "&thinsp;": "\u2009",
          "&zwnj;": "\u200C",
          "&zwj;": "\u200D",
          "&lrm;": "\u200E",
          "&rlm;": "\u200F",
          "&ndash;": "\u2013",
          "&mdash;": "\u2014",
          "&lsquo;": "\u2018",
          "&rsquo;": "\u2019",
          "&sbquo;": "\u201A",
          "&ldquo;": "\u201C",
          "&rdquo;": "\u201D",
          "&bdquo;": "\u201E",
          "&dagger;": "\u2020",
          "&Dagger;": "\u2021",
          "&permil;": "\u2030",
          "&lsaquo;": "\u2039",
          "&rsaquo;": "\u203A",
          "&euro;": "\u20AC",
          "&fnof;": "\u0192",
          "&Alpha;": "\u0391",
          "&Beta;": "\u0392",
          "&Gamma;": "\u0393",
          "&Delta;": "\u0394",
          "&Epsilon;": "\u0395",
          "&Zeta;": "\u0396",
          "&Eta;": "\u0397",
          "&Theta;": "\u0398",
          "&Iota;": "\u0399",
          "&Kappa;": "\u039A",
          "&Lambda;": "\u039B",
          "&Mu;": "\u039C",
          "&Nu;": "\u039D",
          "&Xi;": "\u039E",
          "&Omicron;": "\u039F",
          "&Pi;": "\u03A0",
          "&Rho;": "\u03A1",
          "&Sigma;": "\u03A3",
          "&Tau;": "\u03A4",
          "&Upsilon;": "\u03A5",
          "&Phi;": "\u03A6",
          "&Chi;": "\u03A7",
          "&Psi;": "\u03A8",
          "&Omega;": "\u03A9",
          "&alpha;": "\u03B1",
          "&beta;": "\u03B2",
          "&gamma;": "\u03B3",
          "&delta;": "\u03B4",
          "&epsilon;": "\u03B5",
          "&zeta;": "\u03B6",
          "&eta;": "\u03B7",
          "&theta;": "\u03B8",
          "&iota;": "\u03B9",
          "&kappa;": "\u03BA",
          "&lambda;": "\u03BB",
          "&mu;": "\u03BC",
          "&nu;": "\u03BD",
          "&xi;": "\u03BE",
          "&omicron;": "\u03BF",
          "&pi;": "\u03C0",
          "&rho;": "\u03C1",
          "&sigmaf;": "\u03C2",
          "&sigma;": "\u03C3",
          "&tau;": "\u03C4",
          "&upsilon;": "\u03C5",
          "&phi;": "\u03C6",
          "&chi;": "\u03C7",
          "&psi;": "\u03C8",
          "&omega;": "\u03C9",
          "&thetasym;": "\u03D1",
          "&upsih;": "\u03D2",
          "&piv;": "\u03D6",
          "&bull;": "\u2022",
          "&hellip;": "\u2026",
          "&prime;": "\u2032",
          "&Prime;": "\u2033",
          "&oline;": "\u203E",
          "&frasl;": "\u2044",
          "&weierp;": "\u2118",
          "&image;": "\u2111",
          "&real;": "\u211C",
          "&trade;": "\u2122",
          "&alefsym;": "\u2135",
          "&larr;": "\u2190",
          "&uarr;": "\u2191",
          "&rarr;": "\u2192",
          "&darr;": "\u2193",
          "&harr;": "\u2194",
          "&crarr;": "\u21B5",
          "&lArr;": "\u21D0",
          "&uArr;": "\u21D1",
          "&rArr;": "\u21D2",
          "&dArr;": "\u21D3",
          "&hArr;": "\u21D4",
          "&forall;": "\u2200",
          "&part;": "\u2202",
          "&exist;": "\u2203",
          "&empty;": "\u2205",
          "&nabla;": "\u2207",
          "&isin;": "\u2208",
          "&notin;": "\u2209",
          "&ni;": "\u220B",
          "&prod;": "\u220F",
          "&sum;": "\u2211",
          "&minus;": "\u2212",
          "&lowast;": "\u2217",
          "&radic;": "\u221A",
          "&prop;": "\u221D",
          "&infin;": "\u221E",
          "&ang;": "\u2220",
          "&and;": "\u2227",
          "&or;": "\u2228",
          "&cap;": "\u2229",
          "&cup;": "\u222A",
          "&int;": "\u222B",
          "&there4;": "\u2234",
          "&sim;": "\u223C",
          "&cong;": "\u2245",
          "&asymp;": "\u2248",
          "&ne;": "\u2260",
          "&equiv;": "\u2261",
          "&le;": "\u2264",
          "&ge;": "\u2265",
          "&sub;": "\u2282",
          "&sup;": "\u2283",
          "&nsub;": "\u2284",
          "&sube;": "\u2286",
          "&supe;": "\u2287",
          "&oplus;": "\u2295",
          "&otimes;": "\u2297",
          "&perp;": "\u22A5",
          "&sdot;": "\u22C5",
          "&lceil;": "\u2308",
          "&rceil;": "\u2309",
          "&lfloor;": "\u230A",
          "&rfloor;": "\u230B",
          "&lang;": "\u2329",
          "&rang;": "\u232A",
          "&loz;": "\u25CA",
          "&spades;": "\u2660",
          "&clubs;": "\u2663",
          "&hearts;": "\u2665",
          "&diams;": "\u2666"
        },
        characters: {
          "'": "&apos;",
          "\xA0": "&nbsp;",
          "\xA1": "&iexcl;",
          "\xA2": "&cent;",
          "\xA3": "&pound;",
          "\xA4": "&curren;",
          "\xA5": "&yen;",
          "\xA6": "&brvbar;",
          "\xA7": "&sect;",
          "\xA8": "&uml;",
          "\xA9": "&copy;",
          \u00AA: "&ordf;",
          "\xAB": "&laquo;",
          "\xAC": "&not;",
          "\xAD": "&shy;",
          "\xAE": "&reg;",
          "\xAF": "&macr;",
          "\xB0": "&deg;",
          "\xB1": "&plusmn;",
          "\xB2": "&sup2;",
          "\xB3": "&sup3;",
          "\xB4": "&acute;",
          \u00B5: "&micro;",
          "\xB6": "&para;",
          "\xB7": "&middot;",
          "\xB8": "&cedil;",
          "\xB9": "&sup1;",
          \u00BA: "&ordm;",
          "\xBB": "&raquo;",
          "\xBC": "&frac14;",
          "\xBD": "&frac12;",
          "\xBE": "&frac34;",
          "\xBF": "&iquest;",
          \u00C0: "&Agrave;",
          \u00C1: "&Aacute;",
          \u00C2: "&Acirc;",
          \u00C3: "&Atilde;",
          \u00C4: "&Auml;",
          \u00C5: "&Aring;",
          \u00C6: "&AElig;",
          \u00C7: "&Ccedil;",
          \u00C8: "&Egrave;",
          \u00C9: "&Eacute;",
          \u00CA: "&Ecirc;",
          \u00CB: "&Euml;",
          \u00CC: "&Igrave;",
          \u00CD: "&Iacute;",
          \u00CE: "&Icirc;",
          \u00CF: "&Iuml;",
          \u00D0: "&ETH;",
          \u00D1: "&Ntilde;",
          \u00D2: "&Ograve;",
          \u00D3: "&Oacute;",
          \u00D4: "&Ocirc;",
          \u00D5: "&Otilde;",
          \u00D6: "&Ouml;",
          "\xD7": "&times;",
          \u00D8: "&Oslash;",
          \u00D9: "&Ugrave;",
          \u00DA: "&Uacute;",
          \u00DB: "&Ucirc;",
          \u00DC: "&Uuml;",
          \u00DD: "&Yacute;",
          \u00DE: "&THORN;",
          \u00DF: "&szlig;",
          \u00E0: "&agrave;",
          \u00E1: "&aacute;",
          \u00E2: "&acirc;",
          \u00E3: "&atilde;",
          \u00E4: "&auml;",
          \u00E5: "&aring;",
          \u00E6: "&aelig;",
          \u00E7: "&ccedil;",
          \u00E8: "&egrave;",
          \u00E9: "&eacute;",
          \u00EA: "&ecirc;",
          \u00EB: "&euml;",
          \u00EC: "&igrave;",
          \u00ED: "&iacute;",
          \u00EE: "&icirc;",
          \u00EF: "&iuml;",
          \u00F0: "&eth;",
          \u00F1: "&ntilde;",
          \u00F2: "&ograve;",
          \u00F3: "&oacute;",
          \u00F4: "&ocirc;",
          \u00F5: "&otilde;",
          \u00F6: "&ouml;",
          "\xF7": "&divide;",
          \u00F8: "&oslash;",
          \u00F9: "&ugrave;",
          \u00FA: "&uacute;",
          \u00FB: "&ucirc;",
          \u00FC: "&uuml;",
          \u00FD: "&yacute;",
          \u00FE: "&thorn;",
          \u00FF: "&yuml;",
          '"': "&quot;",
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          \u0152: "&OElig;",
          \u0153: "&oelig;",
          \u0160: "&Scaron;",
          \u0161: "&scaron;",
          \u0178: "&Yuml;",
          "\u02C6": "&circ;",
          "\u02DC": "&tilde;",
          "\u2002": "&ensp;",
          "\u2003": "&emsp;",
          "\u2009": "&thinsp;",
          "\u200C": "&zwnj;",
          "\u200D": "&zwj;",
          "\u200E": "&lrm;",
          "\u200F": "&rlm;",
          "\u2013": "&ndash;",
          "\u2014": "&mdash;",
          "\u2018": "&lsquo;",
          "\u2019": "&rsquo;",
          "\u201A": "&sbquo;",
          "\u201C": "&ldquo;",
          "\u201D": "&rdquo;",
          "\u201E": "&bdquo;",
          "\u2020": "&dagger;",
          "\u2021": "&Dagger;",
          "\u2030": "&permil;",
          "\u2039": "&lsaquo;",
          "\u203A": "&rsaquo;",
          "\u20AC": "&euro;",
          \u0192: "&fnof;",
          \u0391: "&Alpha;",
          \u0392: "&Beta;",
          \u0393: "&Gamma;",
          \u0394: "&Delta;",
          \u0395: "&Epsilon;",
          \u0396: "&Zeta;",
          \u0397: "&Eta;",
          \u0398: "&Theta;",
          \u0399: "&Iota;",
          \u039A: "&Kappa;",
          \u039B: "&Lambda;",
          \u039C: "&Mu;",
          \u039D: "&Nu;",
          \u039E: "&Xi;",
          \u039F: "&Omicron;",
          \u03A0: "&Pi;",
          \u03A1: "&Rho;",
          \u03A3: "&Sigma;",
          \u03A4: "&Tau;",
          \u03A5: "&Upsilon;",
          \u03A6: "&Phi;",
          \u03A7: "&Chi;",
          \u03A8: "&Psi;",
          \u03A9: "&Omega;",
          \u03B1: "&alpha;",
          \u03B2: "&beta;",
          \u03B3: "&gamma;",
          \u03B4: "&delta;",
          \u03B5: "&epsilon;",
          \u03B6: "&zeta;",
          \u03B7: "&eta;",
          \u03B8: "&theta;",
          \u03B9: "&iota;",
          \u03BA: "&kappa;",
          \u03BB: "&lambda;",
          \u03BC: "&mu;",
          \u03BD: "&nu;",
          \u03BE: "&xi;",
          \u03BF: "&omicron;",
          \u03C0: "&pi;",
          \u03C1: "&rho;",
          \u03C2: "&sigmaf;",
          \u03C3: "&sigma;",
          \u03C4: "&tau;",
          \u03C5: "&upsilon;",
          \u03C6: "&phi;",
          \u03C7: "&chi;",
          \u03C8: "&psi;",
          \u03C9: "&omega;",
          \u03D1: "&thetasym;",
          \u03D2: "&upsih;",
          \u03D6: "&piv;",
          "\u2022": "&bull;",
          "\u2026": "&hellip;",
          "\u2032": "&prime;",
          "\u2033": "&Prime;",
          "\u203E": "&oline;",
          "\u2044": "&frasl;",
          "\u2118": "&weierp;",
          \u2111: "&image;",
          \u211C: "&real;",
          "\u2122": "&trade;",
          \u2135: "&alefsym;",
          "\u2190": "&larr;",
          "\u2191": "&uarr;",
          "\u2192": "&rarr;",
          "\u2193": "&darr;",
          "\u2194": "&harr;",
          "\u21B5": "&crarr;",
          "\u21D0": "&lArr;",
          "\u21D1": "&uArr;",
          "\u21D2": "&rArr;",
          "\u21D3": "&dArr;",
          "\u21D4": "&hArr;",
          "\u2200": "&forall;",
          "\u2202": "&part;",
          "\u2203": "&exist;",
          "\u2205": "&empty;",
          "\u2207": "&nabla;",
          "\u2208": "&isin;",
          "\u2209": "&notin;",
          "\u220B": "&ni;",
          "\u220F": "&prod;",
          "\u2211": "&sum;",
          "\u2212": "&minus;",
          "\u2217": "&lowast;",
          "\u221A": "&radic;",
          "\u221D": "&prop;",
          "\u221E": "&infin;",
          "\u2220": "&ang;",
          "\u2227": "&and;",
          "\u2228": "&or;",
          "\u2229": "&cap;",
          "\u222A": "&cup;",
          "\u222B": "&int;",
          "\u2234": "&there4;",
          "\u223C": "&sim;",
          "\u2245": "&cong;",
          "\u2248": "&asymp;",
          "\u2260": "&ne;",
          "\u2261": "&equiv;",
          "\u2264": "&le;",
          "\u2265": "&ge;",
          "\u2282": "&sub;",
          "\u2283": "&sup;",
          "\u2284": "&nsub;",
          "\u2286": "&sube;",
          "\u2287": "&supe;",
          "\u2295": "&oplus;",
          "\u2297": "&otimes;",
          "\u22A5": "&perp;",
          "\u22C5": "&sdot;",
          "\u2308": "&lceil;",
          "\u2309": "&rceil;",
          "\u230A": "&lfloor;",
          "\u230B": "&rfloor;",
          "\u2329": "&lang;",
          "\u232A": "&rang;",
          "\u25CA": "&loz;",
          "\u2660": "&spades;",
          "\u2663": "&clubs;",
          "\u2665": "&hearts;",
          "\u2666": "&diams;"
        }
      },
      html5: {
        entities: {
          "&AElig": "\xC6",
          "&AElig;": "\xC6",
          "&AMP": "&",
          "&AMP;": "&",
          "&Aacute": "\xC1",
          "&Aacute;": "\xC1",
          "&Abreve;": "\u0102",
          "&Acirc": "\xC2",
          "&Acirc;": "\xC2",
          "&Acy;": "\u0410",
          "&Afr;": "\uD835\uDD04",
          "&Agrave": "\xC0",
          "&Agrave;": "\xC0",
          "&Alpha;": "\u0391",
          "&Amacr;": "\u0100",
          "&And;": "\u2A53",
          "&Aogon;": "\u0104",
          "&Aopf;": "\uD835\uDD38",
          "&ApplyFunction;": "\u2061",
          "&Aring": "\xC5",
          "&Aring;": "\xC5",
          "&Ascr;": "\uD835\uDC9C",
          "&Assign;": "\u2254",
          "&Atilde": "\xC3",
          "&Atilde;": "\xC3",
          "&Auml": "\xC4",
          "&Auml;": "\xC4",
          "&Backslash;": "\u2216",
          "&Barv;": "\u2AE7",
          "&Barwed;": "\u2306",
          "&Bcy;": "\u0411",
          "&Because;": "\u2235",
          "&Bernoullis;": "\u212C",
          "&Beta;": "\u0392",
          "&Bfr;": "\uD835\uDD05",
          "&Bopf;": "\uD835\uDD39",
          "&Breve;": "\u02D8",
          "&Bscr;": "\u212C",
          "&Bumpeq;": "\u224E",
          "&CHcy;": "\u0427",
          "&COPY": "\xA9",
          "&COPY;": "\xA9",
          "&Cacute;": "\u0106",
          "&Cap;": "\u22D2",
          "&CapitalDifferentialD;": "\u2145",
          "&Cayleys;": "\u212D",
          "&Ccaron;": "\u010C",
          "&Ccedil": "\xC7",
          "&Ccedil;": "\xC7",
          "&Ccirc;": "\u0108",
          "&Cconint;": "\u2230",
          "&Cdot;": "\u010A",
          "&Cedilla;": "\xB8",
          "&CenterDot;": "\xB7",
          "&Cfr;": "\u212D",
          "&Chi;": "\u03A7",
          "&CircleDot;": "\u2299",
          "&CircleMinus;": "\u2296",
          "&CirclePlus;": "\u2295",
          "&CircleTimes;": "\u2297",
          "&ClockwiseContourIntegral;": "\u2232",
          "&CloseCurlyDoubleQuote;": "\u201D",
          "&CloseCurlyQuote;": "\u2019",
          "&Colon;": "\u2237",
          "&Colone;": "\u2A74",
          "&Congruent;": "\u2261",
          "&Conint;": "\u222F",
          "&ContourIntegral;": "\u222E",
          "&Copf;": "\u2102",
          "&Coproduct;": "\u2210",
          "&CounterClockwiseContourIntegral;": "\u2233",
          "&Cross;": "\u2A2F",
          "&Cscr;": "\uD835\uDC9E",
          "&Cup;": "\u22D3",
          "&CupCap;": "\u224D",
          "&DD;": "\u2145",
          "&DDotrahd;": "\u2911",
          "&DJcy;": "\u0402",
          "&DScy;": "\u0405",
          "&DZcy;": "\u040F",
          "&Dagger;": "\u2021",
          "&Darr;": "\u21A1",
          "&Dashv;": "\u2AE4",
          "&Dcaron;": "\u010E",
          "&Dcy;": "\u0414",
          "&Del;": "\u2207",
          "&Delta;": "\u0394",
          "&Dfr;": "\uD835\uDD07",
          "&DiacriticalAcute;": "\xB4",
          "&DiacriticalDot;": "\u02D9",
          "&DiacriticalDoubleAcute;": "\u02DD",
          "&DiacriticalGrave;": "`",
          "&DiacriticalTilde;": "\u02DC",
          "&Diamond;": "\u22C4",
          "&DifferentialD;": "\u2146",
          "&Dopf;": "\uD835\uDD3B",
          "&Dot;": "\xA8",
          "&DotDot;": "\u20DC",
          "&DotEqual;": "\u2250",
          "&DoubleContourIntegral;": "\u222F",
          "&DoubleDot;": "\xA8",
          "&DoubleDownArrow;": "\u21D3",
          "&DoubleLeftArrow;": "\u21D0",
          "&DoubleLeftRightArrow;": "\u21D4",
          "&DoubleLeftTee;": "\u2AE4",
          "&DoubleLongLeftArrow;": "\u27F8",
          "&DoubleLongLeftRightArrow;": "\u27FA",
          "&DoubleLongRightArrow;": "\u27F9",
          "&DoubleRightArrow;": "\u21D2",
          "&DoubleRightTee;": "\u22A8",
          "&DoubleUpArrow;": "\u21D1",
          "&DoubleUpDownArrow;": "\u21D5",
          "&DoubleVerticalBar;": "\u2225",
          "&DownArrow;": "\u2193",
          "&DownArrowBar;": "\u2913",
          "&DownArrowUpArrow;": "\u21F5",
          "&DownBreve;": "\u0311",
          "&DownLeftRightVector;": "\u2950",
          "&DownLeftTeeVector;": "\u295E",
          "&DownLeftVector;": "\u21BD",
          "&DownLeftVectorBar;": "\u2956",
          "&DownRightTeeVector;": "\u295F",
          "&DownRightVector;": "\u21C1",
          "&DownRightVectorBar;": "\u2957",
          "&DownTee;": "\u22A4",
          "&DownTeeArrow;": "\u21A7",
          "&Downarrow;": "\u21D3",
          "&Dscr;": "\uD835\uDC9F",
          "&Dstrok;": "\u0110",
          "&ENG;": "\u014A",
          "&ETH": "\xD0",
          "&ETH;": "\xD0",
          "&Eacute": "\xC9",
          "&Eacute;": "\xC9",
          "&Ecaron;": "\u011A",
          "&Ecirc": "\xCA",
          "&Ecirc;": "\xCA",
          "&Ecy;": "\u042D",
          "&Edot;": "\u0116",
          "&Efr;": "\uD835\uDD08",
          "&Egrave": "\xC8",
          "&Egrave;": "\xC8",
          "&Element;": "\u2208",
          "&Emacr;": "\u0112",
          "&EmptySmallSquare;": "\u25FB",
          "&EmptyVerySmallSquare;": "\u25AB",
          "&Eogon;": "\u0118",
          "&Eopf;": "\uD835\uDD3C",
          "&Epsilon;": "\u0395",
          "&Equal;": "\u2A75",
          "&EqualTilde;": "\u2242",
          "&Equilibrium;": "\u21CC",
          "&Escr;": "\u2130",
          "&Esim;": "\u2A73",
          "&Eta;": "\u0397",
          "&Euml": "\xCB",
          "&Euml;": "\xCB",
          "&Exists;": "\u2203",
          "&ExponentialE;": "\u2147",
          "&Fcy;": "\u0424",
          "&Ffr;": "\uD835\uDD09",
          "&FilledSmallSquare;": "\u25FC",
          "&FilledVerySmallSquare;": "\u25AA",
          "&Fopf;": "\uD835\uDD3D",
          "&ForAll;": "\u2200",
          "&Fouriertrf;": "\u2131",
          "&Fscr;": "\u2131",
          "&GJcy;": "\u0403",
          "&GT": ">",
          "&GT;": ">",
          "&Gamma;": "\u0393",
          "&Gammad;": "\u03DC",
          "&Gbreve;": "\u011E",
          "&Gcedil;": "\u0122",
          "&Gcirc;": "\u011C",
          "&Gcy;": "\u0413",
          "&Gdot;": "\u0120",
          "&Gfr;": "\uD835\uDD0A",
          "&Gg;": "\u22D9",
          "&Gopf;": "\uD835\uDD3E",
          "&GreaterEqual;": "\u2265",
          "&GreaterEqualLess;": "\u22DB",
          "&GreaterFullEqual;": "\u2267",
          "&GreaterGreater;": "\u2AA2",
          "&GreaterLess;": "\u2277",
          "&GreaterSlantEqual;": "\u2A7E",
          "&GreaterTilde;": "\u2273",
          "&Gscr;": "\uD835\uDCA2",
          "&Gt;": "\u226B",
          "&HARDcy;": "\u042A",
          "&Hacek;": "\u02C7",
          "&Hat;": "^",
          "&Hcirc;": "\u0124",
          "&Hfr;": "\u210C",
          "&HilbertSpace;": "\u210B",
          "&Hopf;": "\u210D",
          "&HorizontalLine;": "\u2500",
          "&Hscr;": "\u210B",
          "&Hstrok;": "\u0126",
          "&HumpDownHump;": "\u224E",
          "&HumpEqual;": "\u224F",
          "&IEcy;": "\u0415",
          "&IJlig;": "\u0132",
          "&IOcy;": "\u0401",
          "&Iacute": "\xCD",
          "&Iacute;": "\xCD",
          "&Icirc": "\xCE",
          "&Icirc;": "\xCE",
          "&Icy;": "\u0418",
          "&Idot;": "\u0130",
          "&Ifr;": "\u2111",
          "&Igrave": "\xCC",
          "&Igrave;": "\xCC",
          "&Im;": "\u2111",
          "&Imacr;": "\u012A",
          "&ImaginaryI;": "\u2148",
          "&Implies;": "\u21D2",
          "&Int;": "\u222C",
          "&Integral;": "\u222B",
          "&Intersection;": "\u22C2",
          "&InvisibleComma;": "\u2063",
          "&InvisibleTimes;": "\u2062",
          "&Iogon;": "\u012E",
          "&Iopf;": "\uD835\uDD40",
          "&Iota;": "\u0399",
          "&Iscr;": "\u2110",
          "&Itilde;": "\u0128",
          "&Iukcy;": "\u0406",
          "&Iuml": "\xCF",
          "&Iuml;": "\xCF",
          "&Jcirc;": "\u0134",
          "&Jcy;": "\u0419",
          "&Jfr;": "\uD835\uDD0D",
          "&Jopf;": "\uD835\uDD41",
          "&Jscr;": "\uD835\uDCA5",
          "&Jsercy;": "\u0408",
          "&Jukcy;": "\u0404",
          "&KHcy;": "\u0425",
          "&KJcy;": "\u040C",
          "&Kappa;": "\u039A",
          "&Kcedil;": "\u0136",
          "&Kcy;": "\u041A",
          "&Kfr;": "\uD835\uDD0E",
          "&Kopf;": "\uD835\uDD42",
          "&Kscr;": "\uD835\uDCA6",
          "&LJcy;": "\u0409",
          "&LT": "<",
          "&LT;": "<",
          "&Lacute;": "\u0139",
          "&Lambda;": "\u039B",
          "&Lang;": "\u27EA",
          "&Laplacetrf;": "\u2112",
          "&Larr;": "\u219E",
          "&Lcaron;": "\u013D",
          "&Lcedil;": "\u013B",
          "&Lcy;": "\u041B",
          "&LeftAngleBracket;": "\u27E8",
          "&LeftArrow;": "\u2190",
          "&LeftArrowBar;": "\u21E4",
          "&LeftArrowRightArrow;": "\u21C6",
          "&LeftCeiling;": "\u2308",
          "&LeftDoubleBracket;": "\u27E6",
          "&LeftDownTeeVector;": "\u2961",
          "&LeftDownVector;": "\u21C3",
          "&LeftDownVectorBar;": "\u2959",
          "&LeftFloor;": "\u230A",
          "&LeftRightArrow;": "\u2194",
          "&LeftRightVector;": "\u294E",
          "&LeftTee;": "\u22A3",
          "&LeftTeeArrow;": "\u21A4",
          "&LeftTeeVector;": "\u295A",
          "&LeftTriangle;": "\u22B2",
          "&LeftTriangleBar;": "\u29CF",
          "&LeftTriangleEqual;": "\u22B4",
          "&LeftUpDownVector;": "\u2951",
          "&LeftUpTeeVector;": "\u2960",
          "&LeftUpVector;": "\u21BF",
          "&LeftUpVectorBar;": "\u2958",
          "&LeftVector;": "\u21BC",
          "&LeftVectorBar;": "\u2952",
          "&Leftarrow;": "\u21D0",
          "&Leftrightarrow;": "\u21D4",
          "&LessEqualGreater;": "\u22DA",
          "&LessFullEqual;": "\u2266",
          "&LessGreater;": "\u2276",
          "&LessLess;": "\u2AA1",
          "&LessSlantEqual;": "\u2A7D",
          "&LessTilde;": "\u2272",
          "&Lfr;": "\uD835\uDD0F",
          "&Ll;": "\u22D8",
          "&Lleftarrow;": "\u21DA",
          "&Lmidot;": "\u013F",
          "&LongLeftArrow;": "\u27F5",
          "&LongLeftRightArrow;": "\u27F7",
          "&LongRightArrow;": "\u27F6",
          "&Longleftarrow;": "\u27F8",
          "&Longleftrightarrow;": "\u27FA",
          "&Longrightarrow;": "\u27F9",
          "&Lopf;": "\uD835\uDD43",
          "&LowerLeftArrow;": "\u2199",
          "&LowerRightArrow;": "\u2198",
          "&Lscr;": "\u2112",
          "&Lsh;": "\u21B0",
          "&Lstrok;": "\u0141",
          "&Lt;": "\u226A",
          "&Map;": "\u2905",
          "&Mcy;": "\u041C",
          "&MediumSpace;": "\u205F",
          "&Mellintrf;": "\u2133",
          "&Mfr;": "\uD835\uDD10",
          "&MinusPlus;": "\u2213",
          "&Mopf;": "\uD835\uDD44",
          "&Mscr;": "\u2133",
          "&Mu;": "\u039C",
          "&NJcy;": "\u040A",
          "&Nacute;": "\u0143",
          "&Ncaron;": "\u0147",
          "&Ncedil;": "\u0145",
          "&Ncy;": "\u041D",
          "&NegativeMediumSpace;": "\u200B",
          "&NegativeThickSpace;": "\u200B",
          "&NegativeThinSpace;": "\u200B",
          "&NegativeVeryThinSpace;": "\u200B",
          "&NestedGreaterGreater;": "\u226B",
          "&NestedLessLess;": "\u226A",
          "&NewLine;": "\n",
          "&Nfr;": "\uD835\uDD11",
          "&NoBreak;": "\u2060",
          "&NonBreakingSpace;": "\xA0",
          "&Nopf;": "\u2115",
          "&Not;": "\u2AEC",
          "&NotCongruent;": "\u2262",
          "&NotCupCap;": "\u226D",
          "&NotDoubleVerticalBar;": "\u2226",
          "&NotElement;": "\u2209",
          "&NotEqual;": "\u2260",
          "&NotEqualTilde;": "\u2242\u0338",
          "&NotExists;": "\u2204",
          "&NotGreater;": "\u226F",
          "&NotGreaterEqual;": "\u2271",
          "&NotGreaterFullEqual;": "\u2267\u0338",
          "&NotGreaterGreater;": "\u226B\u0338",
          "&NotGreaterLess;": "\u2279",
          "&NotGreaterSlantEqual;": "\u2A7E\u0338",
          "&NotGreaterTilde;": "\u2275",
          "&NotHumpDownHump;": "\u224E\u0338",
          "&NotHumpEqual;": "\u224F\u0338",
          "&NotLeftTriangle;": "\u22EA",
          "&NotLeftTriangleBar;": "\u29CF\u0338",
          "&NotLeftTriangleEqual;": "\u22EC",
          "&NotLess;": "\u226E",
          "&NotLessEqual;": "\u2270",
          "&NotLessGreater;": "\u2278",
          "&NotLessLess;": "\u226A\u0338",
          "&NotLessSlantEqual;": "\u2A7D\u0338",
          "&NotLessTilde;": "\u2274",
          "&NotNestedGreaterGreater;": "\u2AA2\u0338",
          "&NotNestedLessLess;": "\u2AA1\u0338",
          "&NotPrecedes;": "\u2280",
          "&NotPrecedesEqual;": "\u2AAF\u0338",
          "&NotPrecedesSlantEqual;": "\u22E0",
          "&NotReverseElement;": "\u220C",
          "&NotRightTriangle;": "\u22EB",
          "&NotRightTriangleBar;": "\u29D0\u0338",
          "&NotRightTriangleEqual;": "\u22ED",
          "&NotSquareSubset;": "\u228F\u0338",
          "&NotSquareSubsetEqual;": "\u22E2",
          "&NotSquareSuperset;": "\u2290\u0338",
          "&NotSquareSupersetEqual;": "\u22E3",
          "&NotSubset;": "\u2282\u20D2",
          "&NotSubsetEqual;": "\u2288",
          "&NotSucceeds;": "\u2281",
          "&NotSucceedsEqual;": "\u2AB0\u0338",
          "&NotSucceedsSlantEqual;": "\u22E1",
          "&NotSucceedsTilde;": "\u227F\u0338",
          "&NotSuperset;": "\u2283\u20D2",
          "&NotSupersetEqual;": "\u2289",
          "&NotTilde;": "\u2241",
          "&NotTildeEqual;": "\u2244",
          "&NotTildeFullEqual;": "\u2247",
          "&NotTildeTilde;": "\u2249",
          "&NotVerticalBar;": "\u2224",
          "&Nscr;": "\uD835\uDCA9",
          "&Ntilde": "\xD1",
          "&Ntilde;": "\xD1",
          "&Nu;": "\u039D",
          "&OElig;": "\u0152",
          "&Oacute": "\xD3",
          "&Oacute;": "\xD3",
          "&Ocirc": "\xD4",
          "&Ocirc;": "\xD4",
          "&Ocy;": "\u041E",
          "&Odblac;": "\u0150",
          "&Ofr;": "\uD835\uDD12",
          "&Ograve": "\xD2",
          "&Ograve;": "\xD2",
          "&Omacr;": "\u014C",
          "&Omega;": "\u03A9",
          "&Omicron;": "\u039F",
          "&Oopf;": "\uD835\uDD46",
          "&OpenCurlyDoubleQuote;": "\u201C",
          "&OpenCurlyQuote;": "\u2018",
          "&Or;": "\u2A54",
          "&Oscr;": "\uD835\uDCAA",
          "&Oslash": "\xD8",
          "&Oslash;": "\xD8",
          "&Otilde": "\xD5",
          "&Otilde;": "\xD5",
          "&Otimes;": "\u2A37",
          "&Ouml": "\xD6",
          "&Ouml;": "\xD6",
          "&OverBar;": "\u203E",
          "&OverBrace;": "\u23DE",
          "&OverBracket;": "\u23B4",
          "&OverParenthesis;": "\u23DC",
          "&PartialD;": "\u2202",
          "&Pcy;": "\u041F",
          "&Pfr;": "\uD835\uDD13",
          "&Phi;": "\u03A6",
          "&Pi;": "\u03A0",
          "&PlusMinus;": "\xB1",
          "&Poincareplane;": "\u210C",
          "&Popf;": "\u2119",
          "&Pr;": "\u2ABB",
          "&Precedes;": "\u227A",
          "&PrecedesEqual;": "\u2AAF",
          "&PrecedesSlantEqual;": "\u227C",
          "&PrecedesTilde;": "\u227E",
          "&Prime;": "\u2033",
          "&Product;": "\u220F",
          "&Proportion;": "\u2237",
          "&Proportional;": "\u221D",
          "&Pscr;": "\uD835\uDCAB",
          "&Psi;": "\u03A8",
          "&QUOT": '"',
          "&QUOT;": '"',
          "&Qfr;": "\uD835\uDD14",
          "&Qopf;": "\u211A",
          "&Qscr;": "\uD835\uDCAC",
          "&RBarr;": "\u2910",
          "&REG": "\xAE",
          "&REG;": "\xAE",
          "&Racute;": "\u0154",
          "&Rang;": "\u27EB",
          "&Rarr;": "\u21A0",
          "&Rarrtl;": "\u2916",
          "&Rcaron;": "\u0158",
          "&Rcedil;": "\u0156",
          "&Rcy;": "\u0420",
          "&Re;": "\u211C",
          "&ReverseElement;": "\u220B",
          "&ReverseEquilibrium;": "\u21CB",
          "&ReverseUpEquilibrium;": "\u296F",
          "&Rfr;": "\u211C",
          "&Rho;": "\u03A1",
          "&RightAngleBracket;": "\u27E9",
          "&RightArrow;": "\u2192",
          "&RightArrowBar;": "\u21E5",
          "&RightArrowLeftArrow;": "\u21C4",
          "&RightCeiling;": "\u2309",
          "&RightDoubleBracket;": "\u27E7",
          "&RightDownTeeVector;": "\u295D",
          "&RightDownVector;": "\u21C2",
          "&RightDownVectorBar;": "\u2955",
          "&RightFloor;": "\u230B",
          "&RightTee;": "\u22A2",
          "&RightTeeArrow;": "\u21A6",
          "&RightTeeVector;": "\u295B",
          "&RightTriangle;": "\u22B3",
          "&RightTriangleBar;": "\u29D0",
          "&RightTriangleEqual;": "\u22B5",
          "&RightUpDownVector;": "\u294F",
          "&RightUpTeeVector;": "\u295C",
          "&RightUpVector;": "\u21BE",
          "&RightUpVectorBar;": "\u2954",
          "&RightVector;": "\u21C0",
          "&RightVectorBar;": "\u2953",
          "&Rightarrow;": "\u21D2",
          "&Ropf;": "\u211D",
          "&RoundImplies;": "\u2970",
          "&Rrightarrow;": "\u21DB",
          "&Rscr;": "\u211B",
          "&Rsh;": "\u21B1",
          "&RuleDelayed;": "\u29F4",
          "&SHCHcy;": "\u0429",
          "&SHcy;": "\u0428",
          "&SOFTcy;": "\u042C",
          "&Sacute;": "\u015A",
          "&Sc;": "\u2ABC",
          "&Scaron;": "\u0160",
          "&Scedil;": "\u015E",
          "&Scirc;": "\u015C",
          "&Scy;": "\u0421",
          "&Sfr;": "\uD835\uDD16",
          "&ShortDownArrow;": "\u2193",
          "&ShortLeftArrow;": "\u2190",
          "&ShortRightArrow;": "\u2192",
          "&ShortUpArrow;": "\u2191",
          "&Sigma;": "\u03A3",
          "&SmallCircle;": "\u2218",
          "&Sopf;": "\uD835\uDD4A",
          "&Sqrt;": "\u221A",
          "&Square;": "\u25A1",
          "&SquareIntersection;": "\u2293",
          "&SquareSubset;": "\u228F",
          "&SquareSubsetEqual;": "\u2291",
          "&SquareSuperset;": "\u2290",
          "&SquareSupersetEqual;": "\u2292",
          "&SquareUnion;": "\u2294",
          "&Sscr;": "\uD835\uDCAE",
          "&Star;": "\u22C6",
          "&Sub;": "\u22D0",
          "&Subset;": "\u22D0",
          "&SubsetEqual;": "\u2286",
          "&Succeeds;": "\u227B",
          "&SucceedsEqual;": "\u2AB0",
          "&SucceedsSlantEqual;": "\u227D",
          "&SucceedsTilde;": "\u227F",
          "&SuchThat;": "\u220B",
          "&Sum;": "\u2211",
          "&Sup;": "\u22D1",
          "&Superset;": "\u2283",
          "&SupersetEqual;": "\u2287",
          "&Supset;": "\u22D1",
          "&THORN": "\xDE",
          "&THORN;": "\xDE",
          "&TRADE;": "\u2122",
          "&TSHcy;": "\u040B",
          "&TScy;": "\u0426",
          "&Tab;": "	",
          "&Tau;": "\u03A4",
          "&Tcaron;": "\u0164",
          "&Tcedil;": "\u0162",
          "&Tcy;": "\u0422",
          "&Tfr;": "\uD835\uDD17",
          "&Therefore;": "\u2234",
          "&Theta;": "\u0398",
          "&ThickSpace;": "\u205F\u200A",
          "&ThinSpace;": "\u2009",
          "&Tilde;": "\u223C",
          "&TildeEqual;": "\u2243",
          "&TildeFullEqual;": "\u2245",
          "&TildeTilde;": "\u2248",
          "&Topf;": "\uD835\uDD4B",
          "&TripleDot;": "\u20DB",
          "&Tscr;": "\uD835\uDCAF",
          "&Tstrok;": "\u0166",
          "&Uacute": "\xDA",
          "&Uacute;": "\xDA",
          "&Uarr;": "\u219F",
          "&Uarrocir;": "\u2949",
          "&Ubrcy;": "\u040E",
          "&Ubreve;": "\u016C",
          "&Ucirc": "\xDB",
          "&Ucirc;": "\xDB",
          "&Ucy;": "\u0423",
          "&Udblac;": "\u0170",
          "&Ufr;": "\uD835\uDD18",
          "&Ugrave": "\xD9",
          "&Ugrave;": "\xD9",
          "&Umacr;": "\u016A",
          "&UnderBar;": "_",
          "&UnderBrace;": "\u23DF",
          "&UnderBracket;": "\u23B5",
          "&UnderParenthesis;": "\u23DD",
          "&Union;": "\u22C3",
          "&UnionPlus;": "\u228E",
          "&Uogon;": "\u0172",
          "&Uopf;": "\uD835\uDD4C",
          "&UpArrow;": "\u2191",
          "&UpArrowBar;": "\u2912",
          "&UpArrowDownArrow;": "\u21C5",
          "&UpDownArrow;": "\u2195",
          "&UpEquilibrium;": "\u296E",
          "&UpTee;": "\u22A5",
          "&UpTeeArrow;": "\u21A5",
          "&Uparrow;": "\u21D1",
          "&Updownarrow;": "\u21D5",
          "&UpperLeftArrow;": "\u2196",
          "&UpperRightArrow;": "\u2197",
          "&Upsi;": "\u03D2",
          "&Upsilon;": "\u03A5",
          "&Uring;": "\u016E",
          "&Uscr;": "\uD835\uDCB0",
          "&Utilde;": "\u0168",
          "&Uuml": "\xDC",
          "&Uuml;": "\xDC",
          "&VDash;": "\u22AB",
          "&Vbar;": "\u2AEB",
          "&Vcy;": "\u0412",
          "&Vdash;": "\u22A9",
          "&Vdashl;": "\u2AE6",
          "&Vee;": "\u22C1",
          "&Verbar;": "\u2016",
          "&Vert;": "\u2016",
          "&VerticalBar;": "\u2223",
          "&VerticalLine;": "|",
          "&VerticalSeparator;": "\u2758",
          "&VerticalTilde;": "\u2240",
          "&VeryThinSpace;": "\u200A",
          "&Vfr;": "\uD835\uDD19",
          "&Vopf;": "\uD835\uDD4D",
          "&Vscr;": "\uD835\uDCB1",
          "&Vvdash;": "\u22AA",
          "&Wcirc;": "\u0174",
          "&Wedge;": "\u22C0",
          "&Wfr;": "\uD835\uDD1A",
          "&Wopf;": "\uD835\uDD4E",
          "&Wscr;": "\uD835\uDCB2",
          "&Xfr;": "\uD835\uDD1B",
          "&Xi;": "\u039E",
          "&Xopf;": "\uD835\uDD4F",
          "&Xscr;": "\uD835\uDCB3",
          "&YAcy;": "\u042F",
          "&YIcy;": "\u0407",
          "&YUcy;": "\u042E",
          "&Yacute": "\xDD",
          "&Yacute;": "\xDD",
          "&Ycirc;": "\u0176",
          "&Ycy;": "\u042B",
          "&Yfr;": "\uD835\uDD1C",
          "&Yopf;": "\uD835\uDD50",
          "&Yscr;": "\uD835\uDCB4",
          "&Yuml;": "\u0178",
          "&ZHcy;": "\u0416",
          "&Zacute;": "\u0179",
          "&Zcaron;": "\u017D",
          "&Zcy;": "\u0417",
          "&Zdot;": "\u017B",
          "&ZeroWidthSpace;": "\u200B",
          "&Zeta;": "\u0396",
          "&Zfr;": "\u2128",
          "&Zopf;": "\u2124",
          "&Zscr;": "\uD835\uDCB5",
          "&aacute": "\xE1",
          "&aacute;": "\xE1",
          "&abreve;": "\u0103",
          "&ac;": "\u223E",
          "&acE;": "\u223E\u0333",
          "&acd;": "\u223F",
          "&acirc": "\xE2",
          "&acirc;": "\xE2",
          "&acute": "\xB4",
          "&acute;": "\xB4",
          "&acy;": "\u0430",
          "&aelig": "\xE6",
          "&aelig;": "\xE6",
          "&af;": "\u2061",
          "&afr;": "\uD835\uDD1E",
          "&agrave": "\xE0",
          "&agrave;": "\xE0",
          "&alefsym;": "\u2135",
          "&aleph;": "\u2135",
          "&alpha;": "\u03B1",
          "&amacr;": "\u0101",
          "&amalg;": "\u2A3F",
          "&amp": "&",
          "&amp;": "&",
          "&and;": "\u2227",
          "&andand;": "\u2A55",
          "&andd;": "\u2A5C",
          "&andslope;": "\u2A58",
          "&andv;": "\u2A5A",
          "&ang;": "\u2220",
          "&ange;": "\u29A4",
          "&angle;": "\u2220",
          "&angmsd;": "\u2221",
          "&angmsdaa;": "\u29A8",
          "&angmsdab;": "\u29A9",
          "&angmsdac;": "\u29AA",
          "&angmsdad;": "\u29AB",
          "&angmsdae;": "\u29AC",
          "&angmsdaf;": "\u29AD",
          "&angmsdag;": "\u29AE",
          "&angmsdah;": "\u29AF",
          "&angrt;": "\u221F",
          "&angrtvb;": "\u22BE",
          "&angrtvbd;": "\u299D",
          "&angsph;": "\u2222",
          "&angst;": "\xC5",
          "&angzarr;": "\u237C",
          "&aogon;": "\u0105",
          "&aopf;": "\uD835\uDD52",
          "&ap;": "\u2248",
          "&apE;": "\u2A70",
          "&apacir;": "\u2A6F",
          "&ape;": "\u224A",
          "&apid;": "\u224B",
          "&apos;": "'",
          "&approx;": "\u2248",
          "&approxeq;": "\u224A",
          "&aring": "\xE5",
          "&aring;": "\xE5",
          "&ascr;": "\uD835\uDCB6",
          "&ast;": "*",
          "&asymp;": "\u2248",
          "&asympeq;": "\u224D",
          "&atilde": "\xE3",
          "&atilde;": "\xE3",
          "&auml": "\xE4",
          "&auml;": "\xE4",
          "&awconint;": "\u2233",
          "&awint;": "\u2A11",
          "&bNot;": "\u2AED",
          "&backcong;": "\u224C",
          "&backepsilon;": "\u03F6",
          "&backprime;": "\u2035",
          "&backsim;": "\u223D",
          "&backsimeq;": "\u22CD",
          "&barvee;": "\u22BD",
          "&barwed;": "\u2305",
          "&barwedge;": "\u2305",
          "&bbrk;": "\u23B5",
          "&bbrktbrk;": "\u23B6",
          "&bcong;": "\u224C",
          "&bcy;": "\u0431",
          "&bdquo;": "\u201E",
          "&becaus;": "\u2235",
          "&because;": "\u2235",
          "&bemptyv;": "\u29B0",
          "&bepsi;": "\u03F6",
          "&bernou;": "\u212C",
          "&beta;": "\u03B2",
          "&beth;": "\u2136",
          "&between;": "\u226C",
          "&bfr;": "\uD835\uDD1F",
          "&bigcap;": "\u22C2",
          "&bigcirc;": "\u25EF",
          "&bigcup;": "\u22C3",
          "&bigodot;": "\u2A00",
          "&bigoplus;": "\u2A01",
          "&bigotimes;": "\u2A02",
          "&bigsqcup;": "\u2A06",
          "&bigstar;": "\u2605",
          "&bigtriangledown;": "\u25BD",
          "&bigtriangleup;": "\u25B3",
          "&biguplus;": "\u2A04",
          "&bigvee;": "\u22C1",
          "&bigwedge;": "\u22C0",
          "&bkarow;": "\u290D",
          "&blacklozenge;": "\u29EB",
          "&blacksquare;": "\u25AA",
          "&blacktriangle;": "\u25B4",
          "&blacktriangledown;": "\u25BE",
          "&blacktriangleleft;": "\u25C2",
          "&blacktriangleright;": "\u25B8",
          "&blank;": "\u2423",
          "&blk12;": "\u2592",
          "&blk14;": "\u2591",
          "&blk34;": "\u2593",
          "&block;": "\u2588",
          "&bne;": "=\u20E5",
          "&bnequiv;": "\u2261\u20E5",
          "&bnot;": "\u2310",
          "&bopf;": "\uD835\uDD53",
          "&bot;": "\u22A5",
          "&bottom;": "\u22A5",
          "&bowtie;": "\u22C8",
          "&boxDL;": "\u2557",
          "&boxDR;": "\u2554",
          "&boxDl;": "\u2556",
          "&boxDr;": "\u2553",
          "&boxH;": "\u2550",
          "&boxHD;": "\u2566",
          "&boxHU;": "\u2569",
          "&boxHd;": "\u2564",
          "&boxHu;": "\u2567",
          "&boxUL;": "\u255D",
          "&boxUR;": "\u255A",
          "&boxUl;": "\u255C",
          "&boxUr;": "\u2559",
          "&boxV;": "\u2551",
          "&boxVH;": "\u256C",
          "&boxVL;": "\u2563",
          "&boxVR;": "\u2560",
          "&boxVh;": "\u256B",
          "&boxVl;": "\u2562",
          "&boxVr;": "\u255F",
          "&boxbox;": "\u29C9",
          "&boxdL;": "\u2555",
          "&boxdR;": "\u2552",
          "&boxdl;": "\u2510",
          "&boxdr;": "\u250C",
          "&boxh;": "\u2500",
          "&boxhD;": "\u2565",
          "&boxhU;": "\u2568",
          "&boxhd;": "\u252C",
          "&boxhu;": "\u2534",
          "&boxminus;": "\u229F",
          "&boxplus;": "\u229E",
          "&boxtimes;": "\u22A0",
          "&boxuL;": "\u255B",
          "&boxuR;": "\u2558",
          "&boxul;": "\u2518",
          "&boxur;": "\u2514",
          "&boxv;": "\u2502",
          "&boxvH;": "\u256A",
          "&boxvL;": "\u2561",
          "&boxvR;": "\u255E",
          "&boxvh;": "\u253C",
          "&boxvl;": "\u2524",
          "&boxvr;": "\u251C",
          "&bprime;": "\u2035",
          "&breve;": "\u02D8",
          "&brvbar": "\xA6",
          "&brvbar;": "\xA6",
          "&bscr;": "\uD835\uDCB7",
          "&bsemi;": "\u204F",
          "&bsim;": "\u223D",
          "&bsime;": "\u22CD",
          "&bsol;": "\\",
          "&bsolb;": "\u29C5",
          "&bsolhsub;": "\u27C8",
          "&bull;": "\u2022",
          "&bullet;": "\u2022",
          "&bump;": "\u224E",
          "&bumpE;": "\u2AAE",
          "&bumpe;": "\u224F",
          "&bumpeq;": "\u224F",
          "&cacute;": "\u0107",
          "&cap;": "\u2229",
          "&capand;": "\u2A44",
          "&capbrcup;": "\u2A49",
          "&capcap;": "\u2A4B",
          "&capcup;": "\u2A47",
          "&capdot;": "\u2A40",
          "&caps;": "\u2229\uFE00",
          "&caret;": "\u2041",
          "&caron;": "\u02C7",
          "&ccaps;": "\u2A4D",
          "&ccaron;": "\u010D",
          "&ccedil": "\xE7",
          "&ccedil;": "\xE7",
          "&ccirc;": "\u0109",
          "&ccups;": "\u2A4C",
          "&ccupssm;": "\u2A50",
          "&cdot;": "\u010B",
          "&cedil": "\xB8",
          "&cedil;": "\xB8",
          "&cemptyv;": "\u29B2",
          "&cent": "\xA2",
          "&cent;": "\xA2",
          "&centerdot;": "\xB7",
          "&cfr;": "\uD835\uDD20",
          "&chcy;": "\u0447",
          "&check;": "\u2713",
          "&checkmark;": "\u2713",
          "&chi;": "\u03C7",
          "&cir;": "\u25CB",
          "&cirE;": "\u29C3",
          "&circ;": "\u02C6",
          "&circeq;": "\u2257",
          "&circlearrowleft;": "\u21BA",
          "&circlearrowright;": "\u21BB",
          "&circledR;": "\xAE",
          "&circledS;": "\u24C8",
          "&circledast;": "\u229B",
          "&circledcirc;": "\u229A",
          "&circleddash;": "\u229D",
          "&cire;": "\u2257",
          "&cirfnint;": "\u2A10",
          "&cirmid;": "\u2AEF",
          "&cirscir;": "\u29C2",
          "&clubs;": "\u2663",
          "&clubsuit;": "\u2663",
          "&colon;": ":",
          "&colone;": "\u2254",
          "&coloneq;": "\u2254",
          "&comma;": ",",
          "&commat;": "@",
          "&comp;": "\u2201",
          "&compfn;": "\u2218",
          "&complement;": "\u2201",
          "&complexes;": "\u2102",
          "&cong;": "\u2245",
          "&congdot;": "\u2A6D",
          "&conint;": "\u222E",
          "&copf;": "\uD835\uDD54",
          "&coprod;": "\u2210",
          "&copy": "\xA9",
          "&copy;": "\xA9",
          "&copysr;": "\u2117",
          "&crarr;": "\u21B5",
          "&cross;": "\u2717",
          "&cscr;": "\uD835\uDCB8",
          "&csub;": "\u2ACF",
          "&csube;": "\u2AD1",
          "&csup;": "\u2AD0",
          "&csupe;": "\u2AD2",
          "&ctdot;": "\u22EF",
          "&cudarrl;": "\u2938",
          "&cudarrr;": "\u2935",
          "&cuepr;": "\u22DE",
          "&cuesc;": "\u22DF",
          "&cularr;": "\u21B6",
          "&cularrp;": "\u293D",
          "&cup;": "\u222A",
          "&cupbrcap;": "\u2A48",
          "&cupcap;": "\u2A46",
          "&cupcup;": "\u2A4A",
          "&cupdot;": "\u228D",
          "&cupor;": "\u2A45",
          "&cups;": "\u222A\uFE00",
          "&curarr;": "\u21B7",
          "&curarrm;": "\u293C",
          "&curlyeqprec;": "\u22DE",
          "&curlyeqsucc;": "\u22DF",
          "&curlyvee;": "\u22CE",
          "&curlywedge;": "\u22CF",
          "&curren": "\xA4",
          "&curren;": "\xA4",
          "&curvearrowleft;": "\u21B6",
          "&curvearrowright;": "\u21B7",
          "&cuvee;": "\u22CE",
          "&cuwed;": "\u22CF",
          "&cwconint;": "\u2232",
          "&cwint;": "\u2231",
          "&cylcty;": "\u232D",
          "&dArr;": "\u21D3",
          "&dHar;": "\u2965",
          "&dagger;": "\u2020",
          "&daleth;": "\u2138",
          "&darr;": "\u2193",
          "&dash;": "\u2010",
          "&dashv;": "\u22A3",
          "&dbkarow;": "\u290F",
          "&dblac;": "\u02DD",
          "&dcaron;": "\u010F",
          "&dcy;": "\u0434",
          "&dd;": "\u2146",
          "&ddagger;": "\u2021",
          "&ddarr;": "\u21CA",
          "&ddotseq;": "\u2A77",
          "&deg": "\xB0",
          "&deg;": "\xB0",
          "&delta;": "\u03B4",
          "&demptyv;": "\u29B1",
          "&dfisht;": "\u297F",
          "&dfr;": "\uD835\uDD21",
          "&dharl;": "\u21C3",
          "&dharr;": "\u21C2",
          "&diam;": "\u22C4",
          "&diamond;": "\u22C4",
          "&diamondsuit;": "\u2666",
          "&diams;": "\u2666",
          "&die;": "\xA8",
          "&digamma;": "\u03DD",
          "&disin;": "\u22F2",
          "&div;": "\xF7",
          "&divide": "\xF7",
          "&divide;": "\xF7",
          "&divideontimes;": "\u22C7",
          "&divonx;": "\u22C7",
          "&djcy;": "\u0452",
          "&dlcorn;": "\u231E",
          "&dlcrop;": "\u230D",
          "&dollar;": "$",
          "&dopf;": "\uD835\uDD55",
          "&dot;": "\u02D9",
          "&doteq;": "\u2250",
          "&doteqdot;": "\u2251",
          "&dotminus;": "\u2238",
          "&dotplus;": "\u2214",
          "&dotsquare;": "\u22A1",
          "&doublebarwedge;": "\u2306",
          "&downarrow;": "\u2193",
          "&downdownarrows;": "\u21CA",
          "&downharpoonleft;": "\u21C3",
          "&downharpoonright;": "\u21C2",
          "&drbkarow;": "\u2910",
          "&drcorn;": "\u231F",
          "&drcrop;": "\u230C",
          "&dscr;": "\uD835\uDCB9",
          "&dscy;": "\u0455",
          "&dsol;": "\u29F6",
          "&dstrok;": "\u0111",
          "&dtdot;": "\u22F1",
          "&dtri;": "\u25BF",
          "&dtrif;": "\u25BE",
          "&duarr;": "\u21F5",
          "&duhar;": "\u296F",
          "&dwangle;": "\u29A6",
          "&dzcy;": "\u045F",
          "&dzigrarr;": "\u27FF",
          "&eDDot;": "\u2A77",
          "&eDot;": "\u2251",
          "&eacute": "\xE9",
          "&eacute;": "\xE9",
          "&easter;": "\u2A6E",
          "&ecaron;": "\u011B",
          "&ecir;": "\u2256",
          "&ecirc": "\xEA",
          "&ecirc;": "\xEA",
          "&ecolon;": "\u2255",
          "&ecy;": "\u044D",
          "&edot;": "\u0117",
          "&ee;": "\u2147",
          "&efDot;": "\u2252",
          "&efr;": "\uD835\uDD22",
          "&eg;": "\u2A9A",
          "&egrave": "\xE8",
          "&egrave;": "\xE8",
          "&egs;": "\u2A96",
          "&egsdot;": "\u2A98",
          "&el;": "\u2A99",
          "&elinters;": "\u23E7",
          "&ell;": "\u2113",
          "&els;": "\u2A95",
          "&elsdot;": "\u2A97",
          "&emacr;": "\u0113",
          "&empty;": "\u2205",
          "&emptyset;": "\u2205",
          "&emptyv;": "\u2205",
          "&emsp13;": "\u2004",
          "&emsp14;": "\u2005",
          "&emsp;": "\u2003",
          "&eng;": "\u014B",
          "&ensp;": "\u2002",
          "&eogon;": "\u0119",
          "&eopf;": "\uD835\uDD56",
          "&epar;": "\u22D5",
          "&eparsl;": "\u29E3",
          "&eplus;": "\u2A71",
          "&epsi;": "\u03B5",
          "&epsilon;": "\u03B5",
          "&epsiv;": "\u03F5",
          "&eqcirc;": "\u2256",
          "&eqcolon;": "\u2255",
          "&eqsim;": "\u2242",
          "&eqslantgtr;": "\u2A96",
          "&eqslantless;": "\u2A95",
          "&equals;": "=",
          "&equest;": "\u225F",
          "&equiv;": "\u2261",
          "&equivDD;": "\u2A78",
          "&eqvparsl;": "\u29E5",
          "&erDot;": "\u2253",
          "&erarr;": "\u2971",
          "&escr;": "\u212F",
          "&esdot;": "\u2250",
          "&esim;": "\u2242",
          "&eta;": "\u03B7",
          "&eth": "\xF0",
          "&eth;": "\xF0",
          "&euml": "\xEB",
          "&euml;": "\xEB",
          "&euro;": "\u20AC",
          "&excl;": "!",
          "&exist;": "\u2203",
          "&expectation;": "\u2130",
          "&exponentiale;": "\u2147",
          "&fallingdotseq;": "\u2252",
          "&fcy;": "\u0444",
          "&female;": "\u2640",
          "&ffilig;": "\uFB03",
          "&fflig;": "\uFB00",
          "&ffllig;": "\uFB04",
          "&ffr;": "\uD835\uDD23",
          "&filig;": "\uFB01",
          "&fjlig;": "fj",
          "&flat;": "\u266D",
          "&fllig;": "\uFB02",
          "&fltns;": "\u25B1",
          "&fnof;": "\u0192",
          "&fopf;": "\uD835\uDD57",
          "&forall;": "\u2200",
          "&fork;": "\u22D4",
          "&forkv;": "\u2AD9",
          "&fpartint;": "\u2A0D",
          "&frac12": "\xBD",
          "&frac12;": "\xBD",
          "&frac13;": "\u2153",
          "&frac14": "\xBC",
          "&frac14;": "\xBC",
          "&frac15;": "\u2155",
          "&frac16;": "\u2159",
          "&frac18;": "\u215B",
          "&frac23;": "\u2154",
          "&frac25;": "\u2156",
          "&frac34": "\xBE",
          "&frac34;": "\xBE",
          "&frac35;": "\u2157",
          "&frac38;": "\u215C",
          "&frac45;": "\u2158",
          "&frac56;": "\u215A",
          "&frac58;": "\u215D",
          "&frac78;": "\u215E",
          "&frasl;": "\u2044",
          "&frown;": "\u2322",
          "&fscr;": "\uD835\uDCBB",
          "&gE;": "\u2267",
          "&gEl;": "\u2A8C",
          "&gacute;": "\u01F5",
          "&gamma;": "\u03B3",
          "&gammad;": "\u03DD",
          "&gap;": "\u2A86",
          "&gbreve;": "\u011F",
          "&gcirc;": "\u011D",
          "&gcy;": "\u0433",
          "&gdot;": "\u0121",
          "&ge;": "\u2265",
          "&gel;": "\u22DB",
          "&geq;": "\u2265",
          "&geqq;": "\u2267",
          "&geqslant;": "\u2A7E",
          "&ges;": "\u2A7E",
          "&gescc;": "\u2AA9",
          "&gesdot;": "\u2A80",
          "&gesdoto;": "\u2A82",
          "&gesdotol;": "\u2A84",
          "&gesl;": "\u22DB\uFE00",
          "&gesles;": "\u2A94",
          "&gfr;": "\uD835\uDD24",
          "&gg;": "\u226B",
          "&ggg;": "\u22D9",
          "&gimel;": "\u2137",
          "&gjcy;": "\u0453",
          "&gl;": "\u2277",
          "&glE;": "\u2A92",
          "&gla;": "\u2AA5",
          "&glj;": "\u2AA4",
          "&gnE;": "\u2269",
          "&gnap;": "\u2A8A",
          "&gnapprox;": "\u2A8A",
          "&gne;": "\u2A88",
          "&gneq;": "\u2A88",
          "&gneqq;": "\u2269",
          "&gnsim;": "\u22E7",
          "&gopf;": "\uD835\uDD58",
          "&grave;": "`",
          "&gscr;": "\u210A",
          "&gsim;": "\u2273",
          "&gsime;": "\u2A8E",
          "&gsiml;": "\u2A90",
          "&gt": ">",
          "&gt;": ">",
          "&gtcc;": "\u2AA7",
          "&gtcir;": "\u2A7A",
          "&gtdot;": "\u22D7",
          "&gtlPar;": "\u2995",
          "&gtquest;": "\u2A7C",
          "&gtrapprox;": "\u2A86",
          "&gtrarr;": "\u2978",
          "&gtrdot;": "\u22D7",
          "&gtreqless;": "\u22DB",
          "&gtreqqless;": "\u2A8C",
          "&gtrless;": "\u2277",
          "&gtrsim;": "\u2273",
          "&gvertneqq;": "\u2269\uFE00",
          "&gvnE;": "\u2269\uFE00",
          "&hArr;": "\u21D4",
          "&hairsp;": "\u200A",
          "&half;": "\xBD",
          "&hamilt;": "\u210B",
          "&hardcy;": "\u044A",
          "&harr;": "\u2194",
          "&harrcir;": "\u2948",
          "&harrw;": "\u21AD",
          "&hbar;": "\u210F",
          "&hcirc;": "\u0125",
          "&hearts;": "\u2665",
          "&heartsuit;": "\u2665",
          "&hellip;": "\u2026",
          "&hercon;": "\u22B9",
          "&hfr;": "\uD835\uDD25",
          "&hksearow;": "\u2925",
          "&hkswarow;": "\u2926",
          "&hoarr;": "\u21FF",
          "&homtht;": "\u223B",
          "&hookleftarrow;": "\u21A9",
          "&hookrightarrow;": "\u21AA",
          "&hopf;": "\uD835\uDD59",
          "&horbar;": "\u2015",
          "&hscr;": "\uD835\uDCBD",
          "&hslash;": "\u210F",
          "&hstrok;": "\u0127",
          "&hybull;": "\u2043",
          "&hyphen;": "\u2010",
          "&iacute": "\xED",
          "&iacute;": "\xED",
          "&ic;": "\u2063",
          "&icirc": "\xEE",
          "&icirc;": "\xEE",
          "&icy;": "\u0438",
          "&iecy;": "\u0435",
          "&iexcl": "\xA1",
          "&iexcl;": "\xA1",
          "&iff;": "\u21D4",
          "&ifr;": "\uD835\uDD26",
          "&igrave": "\xEC",
          "&igrave;": "\xEC",
          "&ii;": "\u2148",
          "&iiiint;": "\u2A0C",
          "&iiint;": "\u222D",
          "&iinfin;": "\u29DC",
          "&iiota;": "\u2129",
          "&ijlig;": "\u0133",
          "&imacr;": "\u012B",
          "&image;": "\u2111",
          "&imagline;": "\u2110",
          "&imagpart;": "\u2111",
          "&imath;": "\u0131",
          "&imof;": "\u22B7",
          "&imped;": "\u01B5",
          "&in;": "\u2208",
          "&incare;": "\u2105",
          "&infin;": "\u221E",
          "&infintie;": "\u29DD",
          "&inodot;": "\u0131",
          "&int;": "\u222B",
          "&intcal;": "\u22BA",
          "&integers;": "\u2124",
          "&intercal;": "\u22BA",
          "&intlarhk;": "\u2A17",
          "&intprod;": "\u2A3C",
          "&iocy;": "\u0451",
          "&iogon;": "\u012F",
          "&iopf;": "\uD835\uDD5A",
          "&iota;": "\u03B9",
          "&iprod;": "\u2A3C",
          "&iquest": "\xBF",
          "&iquest;": "\xBF",
          "&iscr;": "\uD835\uDCBE",
          "&isin;": "\u2208",
          "&isinE;": "\u22F9",
          "&isindot;": "\u22F5",
          "&isins;": "\u22F4",
          "&isinsv;": "\u22F3",
          "&isinv;": "\u2208",
          "&it;": "\u2062",
          "&itilde;": "\u0129",
          "&iukcy;": "\u0456",
          "&iuml": "\xEF",
          "&iuml;": "\xEF",
          "&jcirc;": "\u0135",
          "&jcy;": "\u0439",
          "&jfr;": "\uD835\uDD27",
          "&jmath;": "\u0237",
          "&jopf;": "\uD835\uDD5B",
          "&jscr;": "\uD835\uDCBF",
          "&jsercy;": "\u0458",
          "&jukcy;": "\u0454",
          "&kappa;": "\u03BA",
          "&kappav;": "\u03F0",
          "&kcedil;": "\u0137",
          "&kcy;": "\u043A",
          "&kfr;": "\uD835\uDD28",
          "&kgreen;": "\u0138",
          "&khcy;": "\u0445",
          "&kjcy;": "\u045C",
          "&kopf;": "\uD835\uDD5C",
          "&kscr;": "\uD835\uDCC0",
          "&lAarr;": "\u21DA",
          "&lArr;": "\u21D0",
          "&lAtail;": "\u291B",
          "&lBarr;": "\u290E",
          "&lE;": "\u2266",
          "&lEg;": "\u2A8B",
          "&lHar;": "\u2962",
          "&lacute;": "\u013A",
          "&laemptyv;": "\u29B4",
          "&lagran;": "\u2112",
          "&lambda;": "\u03BB",
          "&lang;": "\u27E8",
          "&langd;": "\u2991",
          "&langle;": "\u27E8",
          "&lap;": "\u2A85",
          "&laquo": "\xAB",
          "&laquo;": "\xAB",
          "&larr;": "\u2190",
          "&larrb;": "\u21E4",
          "&larrbfs;": "\u291F",
          "&larrfs;": "\u291D",
          "&larrhk;": "\u21A9",
          "&larrlp;": "\u21AB",
          "&larrpl;": "\u2939",
          "&larrsim;": "\u2973",
          "&larrtl;": "\u21A2",
          "&lat;": "\u2AAB",
          "&latail;": "\u2919",
          "&late;": "\u2AAD",
          "&lates;": "\u2AAD\uFE00",
          "&lbarr;": "\u290C",
          "&lbbrk;": "\u2772",
          "&lbrace;": "{",
          "&lbrack;": "[",
          "&lbrke;": "\u298B",
          "&lbrksld;": "\u298F",
          "&lbrkslu;": "\u298D",
          "&lcaron;": "\u013E",
          "&lcedil;": "\u013C",
          "&lceil;": "\u2308",
          "&lcub;": "{",
          "&lcy;": "\u043B",
          "&ldca;": "\u2936",
          "&ldquo;": "\u201C",
          "&ldquor;": "\u201E",
          "&ldrdhar;": "\u2967",
          "&ldrushar;": "\u294B",
          "&ldsh;": "\u21B2",
          "&le;": "\u2264",
          "&leftarrow;": "\u2190",
          "&leftarrowtail;": "\u21A2",
          "&leftharpoondown;": "\u21BD",
          "&leftharpoonup;": "\u21BC",
          "&leftleftarrows;": "\u21C7",
          "&leftrightarrow;": "\u2194",
          "&leftrightarrows;": "\u21C6",
          "&leftrightharpoons;": "\u21CB",
          "&leftrightsquigarrow;": "\u21AD",
          "&leftthreetimes;": "\u22CB",
          "&leg;": "\u22DA",
          "&leq;": "\u2264",
          "&leqq;": "\u2266",
          "&leqslant;": "\u2A7D",
          "&les;": "\u2A7D",
          "&lescc;": "\u2AA8",
          "&lesdot;": "\u2A7F",
          "&lesdoto;": "\u2A81",
          "&lesdotor;": "\u2A83",
          "&lesg;": "\u22DA\uFE00",
          "&lesges;": "\u2A93",
          "&lessapprox;": "\u2A85",
          "&lessdot;": "\u22D6",
          "&lesseqgtr;": "\u22DA",
          "&lesseqqgtr;": "\u2A8B",
          "&lessgtr;": "\u2276",
          "&lesssim;": "\u2272",
          "&lfisht;": "\u297C",
          "&lfloor;": "\u230A",
          "&lfr;": "\uD835\uDD29",
          "&lg;": "\u2276",
          "&lgE;": "\u2A91",
          "&lhard;": "\u21BD",
          "&lharu;": "\u21BC",
          "&lharul;": "\u296A",
          "&lhblk;": "\u2584",
          "&ljcy;": "\u0459",
          "&ll;": "\u226A",
          "&llarr;": "\u21C7",
          "&llcorner;": "\u231E",
          "&llhard;": "\u296B",
          "&lltri;": "\u25FA",
          "&lmidot;": "\u0140",
          "&lmoust;": "\u23B0",
          "&lmoustache;": "\u23B0",
          "&lnE;": "\u2268",
          "&lnap;": "\u2A89",
          "&lnapprox;": "\u2A89",
          "&lne;": "\u2A87",
          "&lneq;": "\u2A87",
          "&lneqq;": "\u2268",
          "&lnsim;": "\u22E6",
          "&loang;": "\u27EC",
          "&loarr;": "\u21FD",
          "&lobrk;": "\u27E6",
          "&longleftarrow;": "\u27F5",
          "&longleftrightarrow;": "\u27F7",
          "&longmapsto;": "\u27FC",
          "&longrightarrow;": "\u27F6",
          "&looparrowleft;": "\u21AB",
          "&looparrowright;": "\u21AC",
          "&lopar;": "\u2985",
          "&lopf;": "\uD835\uDD5D",
          "&loplus;": "\u2A2D",
          "&lotimes;": "\u2A34",
          "&lowast;": "\u2217",
          "&lowbar;": "_",
          "&loz;": "\u25CA",
          "&lozenge;": "\u25CA",
          "&lozf;": "\u29EB",
          "&lpar;": "(",
          "&lparlt;": "\u2993",
          "&lrarr;": "\u21C6",
          "&lrcorner;": "\u231F",
          "&lrhar;": "\u21CB",
          "&lrhard;": "\u296D",
          "&lrm;": "\u200E",
          "&lrtri;": "\u22BF",
          "&lsaquo;": "\u2039",
          "&lscr;": "\uD835\uDCC1",
          "&lsh;": "\u21B0",
          "&lsim;": "\u2272",
          "&lsime;": "\u2A8D",
          "&lsimg;": "\u2A8F",
          "&lsqb;": "[",
          "&lsquo;": "\u2018",
          "&lsquor;": "\u201A",
          "&lstrok;": "\u0142",
          "&lt": "<",
          "&lt;": "<",
          "&ltcc;": "\u2AA6",
          "&ltcir;": "\u2A79",
          "&ltdot;": "\u22D6",
          "&lthree;": "\u22CB",
          "&ltimes;": "\u22C9",
          "&ltlarr;": "\u2976",
          "&ltquest;": "\u2A7B",
          "&ltrPar;": "\u2996",
          "&ltri;": "\u25C3",
          "&ltrie;": "\u22B4",
          "&ltrif;": "\u25C2",
          "&lurdshar;": "\u294A",
          "&luruhar;": "\u2966",
          "&lvertneqq;": "\u2268\uFE00",
          "&lvnE;": "\u2268\uFE00",
          "&mDDot;": "\u223A",
          "&macr": "\xAF",
          "&macr;": "\xAF",
          "&male;": "\u2642",
          "&malt;": "\u2720",
          "&maltese;": "\u2720",
          "&map;": "\u21A6",
          "&mapsto;": "\u21A6",
          "&mapstodown;": "\u21A7",
          "&mapstoleft;": "\u21A4",
          "&mapstoup;": "\u21A5",
          "&marker;": "\u25AE",
          "&mcomma;": "\u2A29",
          "&mcy;": "\u043C",
          "&mdash;": "\u2014",
          "&measuredangle;": "\u2221",
          "&mfr;": "\uD835\uDD2A",
          "&mho;": "\u2127",
          "&micro": "\xB5",
          "&micro;": "\xB5",
          "&mid;": "\u2223",
          "&midast;": "*",
          "&midcir;": "\u2AF0",
          "&middot": "\xB7",
          "&middot;": "\xB7",
          "&minus;": "\u2212",
          "&minusb;": "\u229F",
          "&minusd;": "\u2238",
          "&minusdu;": "\u2A2A",
          "&mlcp;": "\u2ADB",
          "&mldr;": "\u2026",
          "&mnplus;": "\u2213",
          "&models;": "\u22A7",
          "&mopf;": "\uD835\uDD5E",
          "&mp;": "\u2213",
          "&mscr;": "\uD835\uDCC2",
          "&mstpos;": "\u223E",
          "&mu;": "\u03BC",
          "&multimap;": "\u22B8",
          "&mumap;": "\u22B8",
          "&nGg;": "\u22D9\u0338",
          "&nGt;": "\u226B\u20D2",
          "&nGtv;": "\u226B\u0338",
          "&nLeftarrow;": "\u21CD",
          "&nLeftrightarrow;": "\u21CE",
          "&nLl;": "\u22D8\u0338",
          "&nLt;": "\u226A\u20D2",
          "&nLtv;": "\u226A\u0338",
          "&nRightarrow;": "\u21CF",
          "&nVDash;": "\u22AF",
          "&nVdash;": "\u22AE",
          "&nabla;": "\u2207",
          "&nacute;": "\u0144",
          "&nang;": "\u2220\u20D2",
          "&nap;": "\u2249",
          "&napE;": "\u2A70\u0338",
          "&napid;": "\u224B\u0338",
          "&napos;": "\u0149",
          "&napprox;": "\u2249",
          "&natur;": "\u266E",
          "&natural;": "\u266E",
          "&naturals;": "\u2115",
          "&nbsp": "\xA0",
          "&nbsp;": "\xA0",
          "&nbump;": "\u224E\u0338",
          "&nbumpe;": "\u224F\u0338",
          "&ncap;": "\u2A43",
          "&ncaron;": "\u0148",
          "&ncedil;": "\u0146",
          "&ncong;": "\u2247",
          "&ncongdot;": "\u2A6D\u0338",
          "&ncup;": "\u2A42",
          "&ncy;": "\u043D",
          "&ndash;": "\u2013",
          "&ne;": "\u2260",
          "&neArr;": "\u21D7",
          "&nearhk;": "\u2924",
          "&nearr;": "\u2197",
          "&nearrow;": "\u2197",
          "&nedot;": "\u2250\u0338",
          "&nequiv;": "\u2262",
          "&nesear;": "\u2928",
          "&nesim;": "\u2242\u0338",
          "&nexist;": "\u2204",
          "&nexists;": "\u2204",
          "&nfr;": "\uD835\uDD2B",
          "&ngE;": "\u2267\u0338",
          "&nge;": "\u2271",
          "&ngeq;": "\u2271",
          "&ngeqq;": "\u2267\u0338",
          "&ngeqslant;": "\u2A7E\u0338",
          "&nges;": "\u2A7E\u0338",
          "&ngsim;": "\u2275",
          "&ngt;": "\u226F",
          "&ngtr;": "\u226F",
          "&nhArr;": "\u21CE",
          "&nharr;": "\u21AE",
          "&nhpar;": "\u2AF2",
          "&ni;": "\u220B",
          "&nis;": "\u22FC",
          "&nisd;": "\u22FA",
          "&niv;": "\u220B",
          "&njcy;": "\u045A",
          "&nlArr;": "\u21CD",
          "&nlE;": "\u2266\u0338",
          "&nlarr;": "\u219A",
          "&nldr;": "\u2025",
          "&nle;": "\u2270",
          "&nleftarrow;": "\u219A",
          "&nleftrightarrow;": "\u21AE",
          "&nleq;": "\u2270",
          "&nleqq;": "\u2266\u0338",
          "&nleqslant;": "\u2A7D\u0338",
          "&nles;": "\u2A7D\u0338",
          "&nless;": "\u226E",
          "&nlsim;": "\u2274",
          "&nlt;": "\u226E",
          "&nltri;": "\u22EA",
          "&nltrie;": "\u22EC",
          "&nmid;": "\u2224",
          "&nopf;": "\uD835\uDD5F",
          "&not": "\xAC",
          "&not;": "\xAC",
          "&notin;": "\u2209",
          "&notinE;": "\u22F9\u0338",
          "&notindot;": "\u22F5\u0338",
          "&notinva;": "\u2209",
          "&notinvb;": "\u22F7",
          "&notinvc;": "\u22F6",
          "&notni;": "\u220C",
          "&notniva;": "\u220C",
          "&notnivb;": "\u22FE",
          "&notnivc;": "\u22FD",
          "&npar;": "\u2226",
          "&nparallel;": "\u2226",
          "&nparsl;": "\u2AFD\u20E5",
          "&npart;": "\u2202\u0338",
          "&npolint;": "\u2A14",
          "&npr;": "\u2280",
          "&nprcue;": "\u22E0",
          "&npre;": "\u2AAF\u0338",
          "&nprec;": "\u2280",
          "&npreceq;": "\u2AAF\u0338",
          "&nrArr;": "\u21CF",
          "&nrarr;": "\u219B",
          "&nrarrc;": "\u2933\u0338",
          "&nrarrw;": "\u219D\u0338",
          "&nrightarrow;": "\u219B",
          "&nrtri;": "\u22EB",
          "&nrtrie;": "\u22ED",
          "&nsc;": "\u2281",
          "&nsccue;": "\u22E1",
          "&nsce;": "\u2AB0\u0338",
          "&nscr;": "\uD835\uDCC3",
          "&nshortmid;": "\u2224",
          "&nshortparallel;": "\u2226",
          "&nsim;": "\u2241",
          "&nsime;": "\u2244",
          "&nsimeq;": "\u2244",
          "&nsmid;": "\u2224",
          "&nspar;": "\u2226",
          "&nsqsube;": "\u22E2",
          "&nsqsupe;": "\u22E3",
          "&nsub;": "\u2284",
          "&nsubE;": "\u2AC5\u0338",
          "&nsube;": "\u2288",
          "&nsubset;": "\u2282\u20D2",
          "&nsubseteq;": "\u2288",
          "&nsubseteqq;": "\u2AC5\u0338",
          "&nsucc;": "\u2281",
          "&nsucceq;": "\u2AB0\u0338",
          "&nsup;": "\u2285",
          "&nsupE;": "\u2AC6\u0338",
          "&nsupe;": "\u2289",
          "&nsupset;": "\u2283\u20D2",
          "&nsupseteq;": "\u2289",
          "&nsupseteqq;": "\u2AC6\u0338",
          "&ntgl;": "\u2279",
          "&ntilde": "\xF1",
          "&ntilde;": "\xF1",
          "&ntlg;": "\u2278",
          "&ntriangleleft;": "\u22EA",
          "&ntrianglelefteq;": "\u22EC",
          "&ntriangleright;": "\u22EB",
          "&ntrianglerighteq;": "\u22ED",
          "&nu;": "\u03BD",
          "&num;": "#",
          "&numero;": "\u2116",
          "&numsp;": "\u2007",
          "&nvDash;": "\u22AD",
          "&nvHarr;": "\u2904",
          "&nvap;": "\u224D\u20D2",
          "&nvdash;": "\u22AC",
          "&nvge;": "\u2265\u20D2",
          "&nvgt;": ">\u20D2",
          "&nvinfin;": "\u29DE",
          "&nvlArr;": "\u2902",
          "&nvle;": "\u2264\u20D2",
          "&nvlt;": "<\u20D2",
          "&nvltrie;": "\u22B4\u20D2",
          "&nvrArr;": "\u2903",
          "&nvrtrie;": "\u22B5\u20D2",
          "&nvsim;": "\u223C\u20D2",
          "&nwArr;": "\u21D6",
          "&nwarhk;": "\u2923",
          "&nwarr;": "\u2196",
          "&nwarrow;": "\u2196",
          "&nwnear;": "\u2927",
          "&oS;": "\u24C8",
          "&oacute": "\xF3",
          "&oacute;": "\xF3",
          "&oast;": "\u229B",
          "&ocir;": "\u229A",
          "&ocirc": "\xF4",
          "&ocirc;": "\xF4",
          "&ocy;": "\u043E",
          "&odash;": "\u229D",
          "&odblac;": "\u0151",
          "&odiv;": "\u2A38",
          "&odot;": "\u2299",
          "&odsold;": "\u29BC",
          "&oelig;": "\u0153",
          "&ofcir;": "\u29BF",
          "&ofr;": "\uD835\uDD2C",
          "&ogon;": "\u02DB",
          "&ograve": "\xF2",
          "&ograve;": "\xF2",
          "&ogt;": "\u29C1",
          "&ohbar;": "\u29B5",
          "&ohm;": "\u03A9",
          "&oint;": "\u222E",
          "&olarr;": "\u21BA",
          "&olcir;": "\u29BE",
          "&olcross;": "\u29BB",
          "&oline;": "\u203E",
          "&olt;": "\u29C0",
          "&omacr;": "\u014D",
          "&omega;": "\u03C9",
          "&omicron;": "\u03BF",
          "&omid;": "\u29B6",
          "&ominus;": "\u2296",
          "&oopf;": "\uD835\uDD60",
          "&opar;": "\u29B7",
          "&operp;": "\u29B9",
          "&oplus;": "\u2295",
          "&or;": "\u2228",
          "&orarr;": "\u21BB",
          "&ord;": "\u2A5D",
          "&order;": "\u2134",
          "&orderof;": "\u2134",
          "&ordf": "\xAA",
          "&ordf;": "\xAA",
          "&ordm": "\xBA",
          "&ordm;": "\xBA",
          "&origof;": "\u22B6",
          "&oror;": "\u2A56",
          "&orslope;": "\u2A57",
          "&orv;": "\u2A5B",
          "&oscr;": "\u2134",
          "&oslash": "\xF8",
          "&oslash;": "\xF8",
          "&osol;": "\u2298",
          "&otilde": "\xF5",
          "&otilde;": "\xF5",
          "&otimes;": "\u2297",
          "&otimesas;": "\u2A36",
          "&ouml": "\xF6",
          "&ouml;": "\xF6",
          "&ovbar;": "\u233D",
          "&par;": "\u2225",
          "&para": "\xB6",
          "&para;": "\xB6",
          "&parallel;": "\u2225",
          "&parsim;": "\u2AF3",
          "&parsl;": "\u2AFD",
          "&part;": "\u2202",
          "&pcy;": "\u043F",
          "&percnt;": "%",
          "&period;": ".",
          "&permil;": "\u2030",
          "&perp;": "\u22A5",
          "&pertenk;": "\u2031",
          "&pfr;": "\uD835\uDD2D",
          "&phi;": "\u03C6",
          "&phiv;": "\u03D5",
          "&phmmat;": "\u2133",
          "&phone;": "\u260E",
          "&pi;": "\u03C0",
          "&pitchfork;": "\u22D4",
          "&piv;": "\u03D6",
          "&planck;": "\u210F",
          "&planckh;": "\u210E",
          "&plankv;": "\u210F",
          "&plus;": "+",
          "&plusacir;": "\u2A23",
          "&plusb;": "\u229E",
          "&pluscir;": "\u2A22",
          "&plusdo;": "\u2214",
          "&plusdu;": "\u2A25",
          "&pluse;": "\u2A72",
          "&plusmn": "\xB1",
          "&plusmn;": "\xB1",
          "&plussim;": "\u2A26",
          "&plustwo;": "\u2A27",
          "&pm;": "\xB1",
          "&pointint;": "\u2A15",
          "&popf;": "\uD835\uDD61",
          "&pound": "\xA3",
          "&pound;": "\xA3",
          "&pr;": "\u227A",
          "&prE;": "\u2AB3",
          "&prap;": "\u2AB7",
          "&prcue;": "\u227C",
          "&pre;": "\u2AAF",
          "&prec;": "\u227A",
          "&precapprox;": "\u2AB7",
          "&preccurlyeq;": "\u227C",
          "&preceq;": "\u2AAF",
          "&precnapprox;": "\u2AB9",
          "&precneqq;": "\u2AB5",
          "&precnsim;": "\u22E8",
          "&precsim;": "\u227E",
          "&prime;": "\u2032",
          "&primes;": "\u2119",
          "&prnE;": "\u2AB5",
          "&prnap;": "\u2AB9",
          "&prnsim;": "\u22E8",
          "&prod;": "\u220F",
          "&profalar;": "\u232E",
          "&profline;": "\u2312",
          "&profsurf;": "\u2313",
          "&prop;": "\u221D",
          "&propto;": "\u221D",
          "&prsim;": "\u227E",
          "&prurel;": "\u22B0",
          "&pscr;": "\uD835\uDCC5",
          "&psi;": "\u03C8",
          "&puncsp;": "\u2008",
          "&qfr;": "\uD835\uDD2E",
          "&qint;": "\u2A0C",
          "&qopf;": "\uD835\uDD62",
          "&qprime;": "\u2057",
          "&qscr;": "\uD835\uDCC6",
          "&quaternions;": "\u210D",
          "&quatint;": "\u2A16",
          "&quest;": "?",
          "&questeq;": "\u225F",
          "&quot": '"',
          "&quot;": '"',
          "&rAarr;": "\u21DB",
          "&rArr;": "\u21D2",
          "&rAtail;": "\u291C",
          "&rBarr;": "\u290F",
          "&rHar;": "\u2964",
          "&race;": "\u223D\u0331",
          "&racute;": "\u0155",
          "&radic;": "\u221A",
          "&raemptyv;": "\u29B3",
          "&rang;": "\u27E9",
          "&rangd;": "\u2992",
          "&range;": "\u29A5",
          "&rangle;": "\u27E9",
          "&raquo": "\xBB",
          "&raquo;": "\xBB",
          "&rarr;": "\u2192",
          "&rarrap;": "\u2975",
          "&rarrb;": "\u21E5",
          "&rarrbfs;": "\u2920",
          "&rarrc;": "\u2933",
          "&rarrfs;": "\u291E",
          "&rarrhk;": "\u21AA",
          "&rarrlp;": "\u21AC",
          "&rarrpl;": "\u2945",
          "&rarrsim;": "\u2974",
          "&rarrtl;": "\u21A3",
          "&rarrw;": "\u219D",
          "&ratail;": "\u291A",
          "&ratio;": "\u2236",
          "&rationals;": "\u211A",
          "&rbarr;": "\u290D",
          "&rbbrk;": "\u2773",
          "&rbrace;": "}",
          "&rbrack;": "]",
          "&rbrke;": "\u298C",
          "&rbrksld;": "\u298E",
          "&rbrkslu;": "\u2990",
          "&rcaron;": "\u0159",
          "&rcedil;": "\u0157",
          "&rceil;": "\u2309",
          "&rcub;": "}",
          "&rcy;": "\u0440",
          "&rdca;": "\u2937",
          "&rdldhar;": "\u2969",
          "&rdquo;": "\u201D",
          "&rdquor;": "\u201D",
          "&rdsh;": "\u21B3",
          "&real;": "\u211C",
          "&realine;": "\u211B",
          "&realpart;": "\u211C",
          "&reals;": "\u211D",
          "&rect;": "\u25AD",
          "&reg": "\xAE",
          "&reg;": "\xAE",
          "&rfisht;": "\u297D",
          "&rfloor;": "\u230B",
          "&rfr;": "\uD835\uDD2F",
          "&rhard;": "\u21C1",
          "&rharu;": "\u21C0",
          "&rharul;": "\u296C",
          "&rho;": "\u03C1",
          "&rhov;": "\u03F1",
          "&rightarrow;": "\u2192",
          "&rightarrowtail;": "\u21A3",
          "&rightharpoondown;": "\u21C1",
          "&rightharpoonup;": "\u21C0",
          "&rightleftarrows;": "\u21C4",
          "&rightleftharpoons;": "\u21CC",
          "&rightrightarrows;": "\u21C9",
          "&rightsquigarrow;": "\u219D",
          "&rightthreetimes;": "\u22CC",
          "&ring;": "\u02DA",
          "&risingdotseq;": "\u2253",
          "&rlarr;": "\u21C4",
          "&rlhar;": "\u21CC",
          "&rlm;": "\u200F",
          "&rmoust;": "\u23B1",
          "&rmoustache;": "\u23B1",
          "&rnmid;": "\u2AEE",
          "&roang;": "\u27ED",
          "&roarr;": "\u21FE",
          "&robrk;": "\u27E7",
          "&ropar;": "\u2986",
          "&ropf;": "\uD835\uDD63",
          "&roplus;": "\u2A2E",
          "&rotimes;": "\u2A35",
          "&rpar;": ")",
          "&rpargt;": "\u2994",
          "&rppolint;": "\u2A12",
          "&rrarr;": "\u21C9",
          "&rsaquo;": "\u203A",
          "&rscr;": "\uD835\uDCC7",
          "&rsh;": "\u21B1",
          "&rsqb;": "]",
          "&rsquo;": "\u2019",
          "&rsquor;": "\u2019",
          "&rthree;": "\u22CC",
          "&rtimes;": "\u22CA",
          "&rtri;": "\u25B9",
          "&rtrie;": "\u22B5",
          "&rtrif;": "\u25B8",
          "&rtriltri;": "\u29CE",
          "&ruluhar;": "\u2968",
          "&rx;": "\u211E",
          "&sacute;": "\u015B",
          "&sbquo;": "\u201A",
          "&sc;": "\u227B",
          "&scE;": "\u2AB4",
          "&scap;": "\u2AB8",
          "&scaron;": "\u0161",
          "&sccue;": "\u227D",
          "&sce;": "\u2AB0",
          "&scedil;": "\u015F",
          "&scirc;": "\u015D",
          "&scnE;": "\u2AB6",
          "&scnap;": "\u2ABA",
          "&scnsim;": "\u22E9",
          "&scpolint;": "\u2A13",
          "&scsim;": "\u227F",
          "&scy;": "\u0441",
          "&sdot;": "\u22C5",
          "&sdotb;": "\u22A1",
          "&sdote;": "\u2A66",
          "&seArr;": "\u21D8",
          "&searhk;": "\u2925",
          "&searr;": "\u2198",
          "&searrow;": "\u2198",
          "&sect": "\xA7",
          "&sect;": "\xA7",
          "&semi;": ";",
          "&seswar;": "\u2929",
          "&setminus;": "\u2216",
          "&setmn;": "\u2216",
          "&sext;": "\u2736",
          "&sfr;": "\uD835\uDD30",
          "&sfrown;": "\u2322",
          "&sharp;": "\u266F",
          "&shchcy;": "\u0449",
          "&shcy;": "\u0448",
          "&shortmid;": "\u2223",
          "&shortparallel;": "\u2225",
          "&shy": "\xAD",
          "&shy;": "\xAD",
          "&sigma;": "\u03C3",
          "&sigmaf;": "\u03C2",
          "&sigmav;": "\u03C2",
          "&sim;": "\u223C",
          "&simdot;": "\u2A6A",
          "&sime;": "\u2243",
          "&simeq;": "\u2243",
          "&simg;": "\u2A9E",
          "&simgE;": "\u2AA0",
          "&siml;": "\u2A9D",
          "&simlE;": "\u2A9F",
          "&simne;": "\u2246",
          "&simplus;": "\u2A24",
          "&simrarr;": "\u2972",
          "&slarr;": "\u2190",
          "&smallsetminus;": "\u2216",
          "&smashp;": "\u2A33",
          "&smeparsl;": "\u29E4",
          "&smid;": "\u2223",
          "&smile;": "\u2323",
          "&smt;": "\u2AAA",
          "&smte;": "\u2AAC",
          "&smtes;": "\u2AAC\uFE00",
          "&softcy;": "\u044C",
          "&sol;": "/",
          "&solb;": "\u29C4",
          "&solbar;": "\u233F",
          "&sopf;": "\uD835\uDD64",
          "&spades;": "\u2660",
          "&spadesuit;": "\u2660",
          "&spar;": "\u2225",
          "&sqcap;": "\u2293",
          "&sqcaps;": "\u2293\uFE00",
          "&sqcup;": "\u2294",
          "&sqcups;": "\u2294\uFE00",
          "&sqsub;": "\u228F",
          "&sqsube;": "\u2291",
          "&sqsubset;": "\u228F",
          "&sqsubseteq;": "\u2291",
          "&sqsup;": "\u2290",
          "&sqsupe;": "\u2292",
          "&sqsupset;": "\u2290",
          "&sqsupseteq;": "\u2292",
          "&squ;": "\u25A1",
          "&square;": "\u25A1",
          "&squarf;": "\u25AA",
          "&squf;": "\u25AA",
          "&srarr;": "\u2192",
          "&sscr;": "\uD835\uDCC8",
          "&ssetmn;": "\u2216",
          "&ssmile;": "\u2323",
          "&sstarf;": "\u22C6",
          "&star;": "\u2606",
          "&starf;": "\u2605",
          "&straightepsilon;": "\u03F5",
          "&straightphi;": "\u03D5",
          "&strns;": "\xAF",
          "&sub;": "\u2282",
          "&subE;": "\u2AC5",
          "&subdot;": "\u2ABD",
          "&sube;": "\u2286",
          "&subedot;": "\u2AC3",
          "&submult;": "\u2AC1",
          "&subnE;": "\u2ACB",
          "&subne;": "\u228A",
          "&subplus;": "\u2ABF",
          "&subrarr;": "\u2979",
          "&subset;": "\u2282",
          "&subseteq;": "\u2286",
          "&subseteqq;": "\u2AC5",
          "&subsetneq;": "\u228A",
          "&subsetneqq;": "\u2ACB",
          "&subsim;": "\u2AC7",
          "&subsub;": "\u2AD5",
          "&subsup;": "\u2AD3",
          "&succ;": "\u227B",
          "&succapprox;": "\u2AB8",
          "&succcurlyeq;": "\u227D",
          "&succeq;": "\u2AB0",
          "&succnapprox;": "\u2ABA",
          "&succneqq;": "\u2AB6",
          "&succnsim;": "\u22E9",
          "&succsim;": "\u227F",
          "&sum;": "\u2211",
          "&sung;": "\u266A",
          "&sup1": "\xB9",
          "&sup1;": "\xB9",
          "&sup2": "\xB2",
          "&sup2;": "\xB2",
          "&sup3": "\xB3",
          "&sup3;": "\xB3",
          "&sup;": "\u2283",
          "&supE;": "\u2AC6",
          "&supdot;": "\u2ABE",
          "&supdsub;": "\u2AD8",
          "&supe;": "\u2287",
          "&supedot;": "\u2AC4",
          "&suphsol;": "\u27C9",
          "&suphsub;": "\u2AD7",
          "&suplarr;": "\u297B",
          "&supmult;": "\u2AC2",
          "&supnE;": "\u2ACC",
          "&supne;": "\u228B",
          "&supplus;": "\u2AC0",
          "&supset;": "\u2283",
          "&supseteq;": "\u2287",
          "&supseteqq;": "\u2AC6",
          "&supsetneq;": "\u228B",
          "&supsetneqq;": "\u2ACC",
          "&supsim;": "\u2AC8",
          "&supsub;": "\u2AD4",
          "&supsup;": "\u2AD6",
          "&swArr;": "\u21D9",
          "&swarhk;": "\u2926",
          "&swarr;": "\u2199",
          "&swarrow;": "\u2199",
          "&swnwar;": "\u292A",
          "&szlig": "\xDF",
          "&szlig;": "\xDF",
          "&target;": "\u2316",
          "&tau;": "\u03C4",
          "&tbrk;": "\u23B4",
          "&tcaron;": "\u0165",
          "&tcedil;": "\u0163",
          "&tcy;": "\u0442",
          "&tdot;": "\u20DB",
          "&telrec;": "\u2315",
          "&tfr;": "\uD835\uDD31",
          "&there4;": "\u2234",
          "&therefore;": "\u2234",
          "&theta;": "\u03B8",
          "&thetasym;": "\u03D1",
          "&thetav;": "\u03D1",
          "&thickapprox;": "\u2248",
          "&thicksim;": "\u223C",
          "&thinsp;": "\u2009",
          "&thkap;": "\u2248",
          "&thksim;": "\u223C",
          "&thorn": "\xFE",
          "&thorn;": "\xFE",
          "&tilde;": "\u02DC",
          "&times": "\xD7",
          "&times;": "\xD7",
          "&timesb;": "\u22A0",
          "&timesbar;": "\u2A31",
          "&timesd;": "\u2A30",
          "&tint;": "\u222D",
          "&toea;": "\u2928",
          "&top;": "\u22A4",
          "&topbot;": "\u2336",
          "&topcir;": "\u2AF1",
          "&topf;": "\uD835\uDD65",
          "&topfork;": "\u2ADA",
          "&tosa;": "\u2929",
          "&tprime;": "\u2034",
          "&trade;": "\u2122",
          "&triangle;": "\u25B5",
          "&triangledown;": "\u25BF",
          "&triangleleft;": "\u25C3",
          "&trianglelefteq;": "\u22B4",
          "&triangleq;": "\u225C",
          "&triangleright;": "\u25B9",
          "&trianglerighteq;": "\u22B5",
          "&tridot;": "\u25EC",
          "&trie;": "\u225C",
          "&triminus;": "\u2A3A",
          "&triplus;": "\u2A39",
          "&trisb;": "\u29CD",
          "&tritime;": "\u2A3B",
          "&trpezium;": "\u23E2",
          "&tscr;": "\uD835\uDCC9",
          "&tscy;": "\u0446",
          "&tshcy;": "\u045B",
          "&tstrok;": "\u0167",
          "&twixt;": "\u226C",
          "&twoheadleftarrow;": "\u219E",
          "&twoheadrightarrow;": "\u21A0",
          "&uArr;": "\u21D1",
          "&uHar;": "\u2963",
          "&uacute": "\xFA",
          "&uacute;": "\xFA",
          "&uarr;": "\u2191",
          "&ubrcy;": "\u045E",
          "&ubreve;": "\u016D",
          "&ucirc": "\xFB",
          "&ucirc;": "\xFB",
          "&ucy;": "\u0443",
          "&udarr;": "\u21C5",
          "&udblac;": "\u0171",
          "&udhar;": "\u296E",
          "&ufisht;": "\u297E",
          "&ufr;": "\uD835\uDD32",
          "&ugrave": "\xF9",
          "&ugrave;": "\xF9",
          "&uharl;": "\u21BF",
          "&uharr;": "\u21BE",
          "&uhblk;": "\u2580",
          "&ulcorn;": "\u231C",
          "&ulcorner;": "\u231C",
          "&ulcrop;": "\u230F",
          "&ultri;": "\u25F8",
          "&umacr;": "\u016B",
          "&uml": "\xA8",
          "&uml;": "\xA8",
          "&uogon;": "\u0173",
          "&uopf;": "\uD835\uDD66",
          "&uparrow;": "\u2191",
          "&updownarrow;": "\u2195",
          "&upharpoonleft;": "\u21BF",
          "&upharpoonright;": "\u21BE",
          "&uplus;": "\u228E",
          "&upsi;": "\u03C5",
          "&upsih;": "\u03D2",
          "&upsilon;": "\u03C5",
          "&upuparrows;": "\u21C8",
          "&urcorn;": "\u231D",
          "&urcorner;": "\u231D",
          "&urcrop;": "\u230E",
          "&uring;": "\u016F",
          "&urtri;": "\u25F9",
          "&uscr;": "\uD835\uDCCA",
          "&utdot;": "\u22F0",
          "&utilde;": "\u0169",
          "&utri;": "\u25B5",
          "&utrif;": "\u25B4",
          "&uuarr;": "\u21C8",
          "&uuml": "\xFC",
          "&uuml;": "\xFC",
          "&uwangle;": "\u29A7",
          "&vArr;": "\u21D5",
          "&vBar;": "\u2AE8",
          "&vBarv;": "\u2AE9",
          "&vDash;": "\u22A8",
          "&vangrt;": "\u299C",
          "&varepsilon;": "\u03F5",
          "&varkappa;": "\u03F0",
          "&varnothing;": "\u2205",
          "&varphi;": "\u03D5",
          "&varpi;": "\u03D6",
          "&varpropto;": "\u221D",
          "&varr;": "\u2195",
          "&varrho;": "\u03F1",
          "&varsigma;": "\u03C2",
          "&varsubsetneq;": "\u228A\uFE00",
          "&varsubsetneqq;": "\u2ACB\uFE00",
          "&varsupsetneq;": "\u228B\uFE00",
          "&varsupsetneqq;": "\u2ACC\uFE00",
          "&vartheta;": "\u03D1",
          "&vartriangleleft;": "\u22B2",
          "&vartriangleright;": "\u22B3",
          "&vcy;": "\u0432",
          "&vdash;": "\u22A2",
          "&vee;": "\u2228",
          "&veebar;": "\u22BB",
          "&veeeq;": "\u225A",
          "&vellip;": "\u22EE",
          "&verbar;": "|",
          "&vert;": "|",
          "&vfr;": "\uD835\uDD33",
          "&vltri;": "\u22B2",
          "&vnsub;": "\u2282\u20D2",
          "&vnsup;": "\u2283\u20D2",
          "&vopf;": "\uD835\uDD67",
          "&vprop;": "\u221D",
          "&vrtri;": "\u22B3",
          "&vscr;": "\uD835\uDCCB",
          "&vsubnE;": "\u2ACB\uFE00",
          "&vsubne;": "\u228A\uFE00",
          "&vsupnE;": "\u2ACC\uFE00",
          "&vsupne;": "\u228B\uFE00",
          "&vzigzag;": "\u299A",
          "&wcirc;": "\u0175",
          "&wedbar;": "\u2A5F",
          "&wedge;": "\u2227",
          "&wedgeq;": "\u2259",
          "&weierp;": "\u2118",
          "&wfr;": "\uD835\uDD34",
          "&wopf;": "\uD835\uDD68",
          "&wp;": "\u2118",
          "&wr;": "\u2240",
          "&wreath;": "\u2240",
          "&wscr;": "\uD835\uDCCC",
          "&xcap;": "\u22C2",
          "&xcirc;": "\u25EF",
          "&xcup;": "\u22C3",
          "&xdtri;": "\u25BD",
          "&xfr;": "\uD835\uDD35",
          "&xhArr;": "\u27FA",
          "&xharr;": "\u27F7",
          "&xi;": "\u03BE",
          "&xlArr;": "\u27F8",
          "&xlarr;": "\u27F5",
          "&xmap;": "\u27FC",
          "&xnis;": "\u22FB",
          "&xodot;": "\u2A00",
          "&xopf;": "\uD835\uDD69",
          "&xoplus;": "\u2A01",
          "&xotime;": "\u2A02",
          "&xrArr;": "\u27F9",
          "&xrarr;": "\u27F6",
          "&xscr;": "\uD835\uDCCD",
          "&xsqcup;": "\u2A06",
          "&xuplus;": "\u2A04",
          "&xutri;": "\u25B3",
          "&xvee;": "\u22C1",
          "&xwedge;": "\u22C0",
          "&yacute": "\xFD",
          "&yacute;": "\xFD",
          "&yacy;": "\u044F",
          "&ycirc;": "\u0177",
          "&ycy;": "\u044B",
          "&yen": "\xA5",
          "&yen;": "\xA5",
          "&yfr;": "\uD835\uDD36",
          "&yicy;": "\u0457",
          "&yopf;": "\uD835\uDD6A",
          "&yscr;": "\uD835\uDCCE",
          "&yucy;": "\u044E",
          "&yuml": "\xFF",
          "&yuml;": "\xFF",
          "&zacute;": "\u017A",
          "&zcaron;": "\u017E",
          "&zcy;": "\u0437",
          "&zdot;": "\u017C",
          "&zeetrf;": "\u2128",
          "&zeta;": "\u03B6",
          "&zfr;": "\uD835\uDD37",
          "&zhcy;": "\u0436",
          "&zigrarr;": "\u21DD",
          "&zopf;": "\uD835\uDD6B",
          "&zscr;": "\uD835\uDCCF",
          "&zwj;": "\u200D",
          "&zwnj;": "\u200C"
        },
        characters: {
          \u00C6: "&AElig;",
          "&": "&amp;",
          \u00C1: "&Aacute;",
          \u0102: "&Abreve;",
          \u00C2: "&Acirc;",
          \u0410: "&Acy;",
          "\uD835\uDD04": "&Afr;",
          \u00C0: "&Agrave;",
          \u0391: "&Alpha;",
          \u0100: "&Amacr;",
          "\u2A53": "&And;",
          \u0104: "&Aogon;",
          "\uD835\uDD38": "&Aopf;",
          "\u2061": "&af;",
          \u00C5: "&angst;",
          "\uD835\uDC9C": "&Ascr;",
          "\u2254": "&coloneq;",
          \u00C3: "&Atilde;",
          \u00C4: "&Auml;",
          "\u2216": "&ssetmn;",
          "\u2AE7": "&Barv;",
          "\u2306": "&doublebarwedge;",
          \u0411: "&Bcy;",
          "\u2235": "&because;",
          \u212C: "&bernou;",
          \u0392: "&Beta;",
          "\uD835\uDD05": "&Bfr;",
          "\uD835\uDD39": "&Bopf;",
          "\u02D8": "&breve;",
          "\u224E": "&bump;",
          \u0427: "&CHcy;",
          "\xA9": "&copy;",
          \u0106: "&Cacute;",
          "\u22D2": "&Cap;",
          "\u2145": "&DD;",
          \u212D: "&Cfr;",
          \u010C: "&Ccaron;",
          \u00C7: "&Ccedil;",
          \u0108: "&Ccirc;",
          "\u2230": "&Cconint;",
          \u010A: "&Cdot;",
          "\xB8": "&cedil;",
          "\xB7": "&middot;",
          \u03A7: "&Chi;",
          "\u2299": "&odot;",
          "\u2296": "&ominus;",
          "\u2295": "&oplus;",
          "\u2297": "&otimes;",
          "\u2232": "&cwconint;",
          "\u201D": "&rdquor;",
          "\u2019": "&rsquor;",
          "\u2237": "&Proportion;",
          "\u2A74": "&Colone;",
          "\u2261": "&equiv;",
          "\u222F": "&DoubleContourIntegral;",
          "\u222E": "&oint;",
          \u2102: "&complexes;",
          "\u2210": "&coprod;",
          "\u2233": "&awconint;",
          "\u2A2F": "&Cross;",
          "\uD835\uDC9E": "&Cscr;",
          "\u22D3": "&Cup;",
          "\u224D": "&asympeq;",
          "\u2911": "&DDotrahd;",
          \u0402: "&DJcy;",
          \u0405: "&DScy;",
          \u040F: "&DZcy;",
          "\u2021": "&ddagger;",
          "\u21A1": "&Darr;",
          "\u2AE4": "&DoubleLeftTee;",
          \u010E: "&Dcaron;",
          \u0414: "&Dcy;",
          "\u2207": "&nabla;",
          \u0394: "&Delta;",
          "\uD835\uDD07": "&Dfr;",
          "\xB4": "&acute;",
          "\u02D9": "&dot;",
          "\u02DD": "&dblac;",
          "`": "&grave;",
          "\u02DC": "&tilde;",
          "\u22C4": "&diamond;",
          "\u2146": "&dd;",
          "\uD835\uDD3B": "&Dopf;",
          "\xA8": "&uml;",
          "\u20DC": "&DotDot;",
          "\u2250": "&esdot;",
          "\u21D3": "&dArr;",
          "\u21D0": "&lArr;",
          "\u21D4": "&iff;",
          "\u27F8": "&xlArr;",
          "\u27FA": "&xhArr;",
          "\u27F9": "&xrArr;",
          "\u21D2": "&rArr;",
          "\u22A8": "&vDash;",
          "\u21D1": "&uArr;",
          "\u21D5": "&vArr;",
          "\u2225": "&spar;",
          "\u2193": "&downarrow;",
          "\u2913": "&DownArrowBar;",
          "\u21F5": "&duarr;",
          "\u0311": "&DownBreve;",
          "\u2950": "&DownLeftRightVector;",
          "\u295E": "&DownLeftTeeVector;",
          "\u21BD": "&lhard;",
          "\u2956": "&DownLeftVectorBar;",
          "\u295F": "&DownRightTeeVector;",
          "\u21C1": "&rightharpoondown;",
          "\u2957": "&DownRightVectorBar;",
          "\u22A4": "&top;",
          "\u21A7": "&mapstodown;",
          "\uD835\uDC9F": "&Dscr;",
          \u0110: "&Dstrok;",
          \u014A: "&ENG;",
          \u00D0: "&ETH;",
          \u00C9: "&Eacute;",
          \u011A: "&Ecaron;",
          \u00CA: "&Ecirc;",
          \u042D: "&Ecy;",
          \u0116: "&Edot;",
          "\uD835\uDD08": "&Efr;",
          \u00C8: "&Egrave;",
          "\u2208": "&isinv;",
          \u0112: "&Emacr;",
          "\u25FB": "&EmptySmallSquare;",
          "\u25AB": "&EmptyVerySmallSquare;",
          \u0118: "&Eogon;",
          "\uD835\uDD3C": "&Eopf;",
          \u0395: "&Epsilon;",
          "\u2A75": "&Equal;",
          "\u2242": "&esim;",
          "\u21CC": "&rlhar;",
          \u2130: "&expectation;",
          "\u2A73": "&Esim;",
          \u0397: "&Eta;",
          \u00CB: "&Euml;",
          "\u2203": "&exist;",
          "\u2147": "&exponentiale;",
          \u0424: "&Fcy;",
          "\uD835\uDD09": "&Ffr;",
          "\u25FC": "&FilledSmallSquare;",
          "\u25AA": "&squf;",
          "\uD835\uDD3D": "&Fopf;",
          "\u2200": "&forall;",
          \u2131: "&Fscr;",
          \u0403: "&GJcy;",
          ">": "&gt;",
          \u0393: "&Gamma;",
          \u03DC: "&Gammad;",
          \u011E: "&Gbreve;",
          \u0122: "&Gcedil;",
          \u011C: "&Gcirc;",
          \u0413: "&Gcy;",
          \u0120: "&Gdot;",
          "\uD835\uDD0A": "&Gfr;",
          "\u22D9": "&ggg;",
          "\uD835\uDD3E": "&Gopf;",
          "\u2265": "&geq;",
          "\u22DB": "&gtreqless;",
          "\u2267": "&geqq;",
          "\u2AA2": "&GreaterGreater;",
          "\u2277": "&gtrless;",
          "\u2A7E": "&ges;",
          "\u2273": "&gtrsim;",
          "\uD835\uDCA2": "&Gscr;",
          "\u226B": "&gg;",
          \u042A: "&HARDcy;",
          "\u02C7": "&caron;",
          "^": "&Hat;",
          \u0124: "&Hcirc;",
          \u210C: "&Poincareplane;",
          \u210B: "&hamilt;",
          \u210D: "&quaternions;",
          "\u2500": "&boxh;",
          \u0126: "&Hstrok;",
          "\u224F": "&bumpeq;",
          \u0415: "&IEcy;",
          \u0132: "&IJlig;",
          \u0401: "&IOcy;",
          \u00CD: "&Iacute;",
          \u00CE: "&Icirc;",
          \u0418: "&Icy;",
          \u0130: "&Idot;",
          \u2111: "&imagpart;",
          \u00CC: "&Igrave;",
          \u012A: "&Imacr;",
          "\u2148": "&ii;",
          "\u222C": "&Int;",
          "\u222B": "&int;",
          "\u22C2": "&xcap;",
          "\u2063": "&ic;",
          "\u2062": "&it;",
          \u012E: "&Iogon;",
          "\uD835\uDD40": "&Iopf;",
          \u0399: "&Iota;",
          \u2110: "&imagline;",
          \u0128: "&Itilde;",
          \u0406: "&Iukcy;",
          \u00CF: "&Iuml;",
          \u0134: "&Jcirc;",
          \u0419: "&Jcy;",
          "\uD835\uDD0D": "&Jfr;",
          "\uD835\uDD41": "&Jopf;",
          "\uD835\uDCA5": "&Jscr;",
          \u0408: "&Jsercy;",
          \u0404: "&Jukcy;",
          \u0425: "&KHcy;",
          \u040C: "&KJcy;",
          \u039A: "&Kappa;",
          \u0136: "&Kcedil;",
          \u041A: "&Kcy;",
          "\uD835\uDD0E": "&Kfr;",
          "\uD835\uDD42": "&Kopf;",
          "\uD835\uDCA6": "&Kscr;",
          \u0409: "&LJcy;",
          "<": "&lt;",
          \u0139: "&Lacute;",
          \u039B: "&Lambda;",
          "\u27EA": "&Lang;",
          \u2112: "&lagran;",
          "\u219E": "&twoheadleftarrow;",
          \u013D: "&Lcaron;",
          \u013B: "&Lcedil;",
          \u041B: "&Lcy;",
          "\u27E8": "&langle;",
          "\u2190": "&slarr;",
          "\u21E4": "&larrb;",
          "\u21C6": "&lrarr;",
          "\u2308": "&lceil;",
          "\u27E6": "&lobrk;",
          "\u2961": "&LeftDownTeeVector;",
          "\u21C3": "&downharpoonleft;",
          "\u2959": "&LeftDownVectorBar;",
          "\u230A": "&lfloor;",
          "\u2194": "&leftrightarrow;",
          "\u294E": "&LeftRightVector;",
          "\u22A3": "&dashv;",
          "\u21A4": "&mapstoleft;",
          "\u295A": "&LeftTeeVector;",
          "\u22B2": "&vltri;",
          "\u29CF": "&LeftTriangleBar;",
          "\u22B4": "&trianglelefteq;",
          "\u2951": "&LeftUpDownVector;",
          "\u2960": "&LeftUpTeeVector;",
          "\u21BF": "&upharpoonleft;",
          "\u2958": "&LeftUpVectorBar;",
          "\u21BC": "&lharu;",
          "\u2952": "&LeftVectorBar;",
          "\u22DA": "&lesseqgtr;",
          "\u2266": "&leqq;",
          "\u2276": "&lg;",
          "\u2AA1": "&LessLess;",
          "\u2A7D": "&les;",
          "\u2272": "&lsim;",
          "\uD835\uDD0F": "&Lfr;",
          "\u22D8": "&Ll;",
          "\u21DA": "&lAarr;",
          \u013F: "&Lmidot;",
          "\u27F5": "&xlarr;",
          "\u27F7": "&xharr;",
          "\u27F6": "&xrarr;",
          "\uD835\uDD43": "&Lopf;",
          "\u2199": "&swarrow;",
          "\u2198": "&searrow;",
          "\u21B0": "&lsh;",
          \u0141: "&Lstrok;",
          "\u226A": "&ll;",
          "\u2905": "&Map;",
          \u041C: "&Mcy;",
          "\u205F": "&MediumSpace;",
          \u2133: "&phmmat;",
          "\uD835\uDD10": "&Mfr;",
          "\u2213": "&mp;",
          "\uD835\uDD44": "&Mopf;",
          \u039C: "&Mu;",
          \u040A: "&NJcy;",
          \u0143: "&Nacute;",
          \u0147: "&Ncaron;",
          \u0145: "&Ncedil;",
          \u041D: "&Ncy;",
          "\u200B": "&ZeroWidthSpace;",
          "\n": "&NewLine;",
          "\uD835\uDD11": "&Nfr;",
          "\u2060": "&NoBreak;",
          "\xA0": "&nbsp;",
          \u2115: "&naturals;",
          "\u2AEC": "&Not;",
          "\u2262": "&nequiv;",
          "\u226D": "&NotCupCap;",
          "\u2226": "&nspar;",
          "\u2209": "&notinva;",
          "\u2260": "&ne;",
          "\u2242\u0338": "&nesim;",
          "\u2204": "&nexists;",
          "\u226F": "&ngtr;",
          "\u2271": "&ngeq;",
          "\u2267\u0338": "&ngeqq;",
          "\u226B\u0338": "&nGtv;",
          "\u2279": "&ntgl;",
          "\u2A7E\u0338": "&nges;",
          "\u2275": "&ngsim;",
          "\u224E\u0338": "&nbump;",
          "\u224F\u0338": "&nbumpe;",
          "\u22EA": "&ntriangleleft;",
          "\u29CF\u0338": "&NotLeftTriangleBar;",
          "\u22EC": "&ntrianglelefteq;",
          "\u226E": "&nlt;",
          "\u2270": "&nleq;",
          "\u2278": "&ntlg;",
          "\u226A\u0338": "&nLtv;",
          "\u2A7D\u0338": "&nles;",
          "\u2274": "&nlsim;",
          "\u2AA2\u0338": "&NotNestedGreaterGreater;",
          "\u2AA1\u0338": "&NotNestedLessLess;",
          "\u2280": "&nprec;",
          "\u2AAF\u0338": "&npreceq;",
          "\u22E0": "&nprcue;",
          "\u220C": "&notniva;",
          "\u22EB": "&ntriangleright;",
          "\u29D0\u0338": "&NotRightTriangleBar;",
          "\u22ED": "&ntrianglerighteq;",
          "\u228F\u0338": "&NotSquareSubset;",
          "\u22E2": "&nsqsube;",
          "\u2290\u0338": "&NotSquareSuperset;",
          "\u22E3": "&nsqsupe;",
          "\u2282\u20D2": "&vnsub;",
          "\u2288": "&nsubseteq;",
          "\u2281": "&nsucc;",
          "\u2AB0\u0338": "&nsucceq;",
          "\u22E1": "&nsccue;",
          "\u227F\u0338": "&NotSucceedsTilde;",
          "\u2283\u20D2": "&vnsup;",
          "\u2289": "&nsupseteq;",
          "\u2241": "&nsim;",
          "\u2244": "&nsimeq;",
          "\u2247": "&ncong;",
          "\u2249": "&napprox;",
          "\u2224": "&nsmid;",
          "\uD835\uDCA9": "&Nscr;",
          \u00D1: "&Ntilde;",
          \u039D: "&Nu;",
          \u0152: "&OElig;",
          \u00D3: "&Oacute;",
          \u00D4: "&Ocirc;",
          \u041E: "&Ocy;",
          \u0150: "&Odblac;",
          "\uD835\uDD12": "&Ofr;",
          \u00D2: "&Ograve;",
          \u014C: "&Omacr;",
          \u03A9: "&ohm;",
          \u039F: "&Omicron;",
          "\uD835\uDD46": "&Oopf;",
          "\u201C": "&ldquo;",
          "\u2018": "&lsquo;",
          "\u2A54": "&Or;",
          "\uD835\uDCAA": "&Oscr;",
          \u00D8: "&Oslash;",
          \u00D5: "&Otilde;",
          "\u2A37": "&Otimes;",
          \u00D6: "&Ouml;",
          "\u203E": "&oline;",
          "\u23DE": "&OverBrace;",
          "\u23B4": "&tbrk;",
          "\u23DC": "&OverParenthesis;",
          "\u2202": "&part;",
          \u041F: "&Pcy;",
          "\uD835\uDD13": "&Pfr;",
          \u03A6: "&Phi;",
          \u03A0: "&Pi;",
          "\xB1": "&pm;",
          \u2119: "&primes;",
          "\u2ABB": "&Pr;",
          "\u227A": "&prec;",
          "\u2AAF": "&preceq;",
          "\u227C": "&preccurlyeq;",
          "\u227E": "&prsim;",
          "\u2033": "&Prime;",
          "\u220F": "&prod;",
          "\u221D": "&vprop;",
          "\uD835\uDCAB": "&Pscr;",
          \u03A8: "&Psi;",
          '"': "&quot;",
          "\uD835\uDD14": "&Qfr;",
          \u211A: "&rationals;",
          "\uD835\uDCAC": "&Qscr;",
          "\u2910": "&drbkarow;",
          "\xAE": "&reg;",
          \u0154: "&Racute;",
          "\u27EB": "&Rang;",
          "\u21A0": "&twoheadrightarrow;",
          "\u2916": "&Rarrtl;",
          \u0158: "&Rcaron;",
          \u0156: "&Rcedil;",
          \u0420: "&Rcy;",
          \u211C: "&realpart;",
          "\u220B": "&niv;",
          "\u21CB": "&lrhar;",
          "\u296F": "&duhar;",
          \u03A1: "&Rho;",
          "\u27E9": "&rangle;",
          "\u2192": "&srarr;",
          "\u21E5": "&rarrb;",
          "\u21C4": "&rlarr;",
          "\u2309": "&rceil;",
          "\u27E7": "&robrk;",
          "\u295D": "&RightDownTeeVector;",
          "\u21C2": "&downharpoonright;",
          "\u2955": "&RightDownVectorBar;",
          "\u230B": "&rfloor;",
          "\u22A2": "&vdash;",
          "\u21A6": "&mapsto;",
          "\u295B": "&RightTeeVector;",
          "\u22B3": "&vrtri;",
          "\u29D0": "&RightTriangleBar;",
          "\u22B5": "&trianglerighteq;",
          "\u294F": "&RightUpDownVector;",
          "\u295C": "&RightUpTeeVector;",
          "\u21BE": "&upharpoonright;",
          "\u2954": "&RightUpVectorBar;",
          "\u21C0": "&rightharpoonup;",
          "\u2953": "&RightVectorBar;",
          \u211D: "&reals;",
          "\u2970": "&RoundImplies;",
          "\u21DB": "&rAarr;",
          \u211B: "&realine;",
          "\u21B1": "&rsh;",
          "\u29F4": "&RuleDelayed;",
          \u0429: "&SHCHcy;",
          \u0428: "&SHcy;",
          \u042C: "&SOFTcy;",
          \u015A: "&Sacute;",
          "\u2ABC": "&Sc;",
          \u0160: "&Scaron;",
          \u015E: "&Scedil;",
          \u015C: "&Scirc;",
          \u0421: "&Scy;",
          "\uD835\uDD16": "&Sfr;",
          "\u2191": "&uparrow;",
          \u03A3: "&Sigma;",
          "\u2218": "&compfn;",
          "\uD835\uDD4A": "&Sopf;",
          "\u221A": "&radic;",
          "\u25A1": "&square;",
          "\u2293": "&sqcap;",
          "\u228F": "&sqsubset;",
          "\u2291": "&sqsubseteq;",
          "\u2290": "&sqsupset;",
          "\u2292": "&sqsupseteq;",
          "\u2294": "&sqcup;",
          "\uD835\uDCAE": "&Sscr;",
          "\u22C6": "&sstarf;",
          "\u22D0": "&Subset;",
          "\u2286": "&subseteq;",
          "\u227B": "&succ;",
          "\u2AB0": "&succeq;",
          "\u227D": "&succcurlyeq;",
          "\u227F": "&succsim;",
          "\u2211": "&sum;",
          "\u22D1": "&Supset;",
          "\u2283": "&supset;",
          "\u2287": "&supseteq;",
          \u00DE: "&THORN;",
          "\u2122": "&trade;",
          \u040B: "&TSHcy;",
          \u0426: "&TScy;",
          "	": "&Tab;",
          \u03A4: "&Tau;",
          \u0164: "&Tcaron;",
          \u0162: "&Tcedil;",
          \u0422: "&Tcy;",
          "\uD835\uDD17": "&Tfr;",
          "\u2234": "&therefore;",
          \u0398: "&Theta;",
          "\u205F\u200A": "&ThickSpace;",
          "\u2009": "&thinsp;",
          "\u223C": "&thksim;",
          "\u2243": "&simeq;",
          "\u2245": "&cong;",
          "\u2248": "&thkap;",
          "\uD835\uDD4B": "&Topf;",
          "\u20DB": "&tdot;",
          "\uD835\uDCAF": "&Tscr;",
          \u0166: "&Tstrok;",
          \u00DA: "&Uacute;",
          "\u219F": "&Uarr;",
          "\u2949": "&Uarrocir;",
          \u040E: "&Ubrcy;",
          \u016C: "&Ubreve;",
          \u00DB: "&Ucirc;",
          \u0423: "&Ucy;",
          \u0170: "&Udblac;",
          "\uD835\uDD18": "&Ufr;",
          \u00D9: "&Ugrave;",
          \u016A: "&Umacr;",
          _: "&lowbar;",
          "\u23DF": "&UnderBrace;",
          "\u23B5": "&bbrk;",
          "\u23DD": "&UnderParenthesis;",
          "\u22C3": "&xcup;",
          "\u228E": "&uplus;",
          \u0172: "&Uogon;",
          "\uD835\uDD4C": "&Uopf;",
          "\u2912": "&UpArrowBar;",
          "\u21C5": "&udarr;",
          "\u2195": "&varr;",
          "\u296E": "&udhar;",
          "\u22A5": "&perp;",
          "\u21A5": "&mapstoup;",
          "\u2196": "&nwarrow;",
          "\u2197": "&nearrow;",
          \u03D2: "&upsih;",
          \u03A5: "&Upsilon;",
          \u016E: "&Uring;",
          "\uD835\uDCB0": "&Uscr;",
          \u0168: "&Utilde;",
          \u00DC: "&Uuml;",
          "\u22AB": "&VDash;",
          "\u2AEB": "&Vbar;",
          \u0412: "&Vcy;",
          "\u22A9": "&Vdash;",
          "\u2AE6": "&Vdashl;",
          "\u22C1": "&xvee;",
          "\u2016": "&Vert;",
          "\u2223": "&smid;",
          "|": "&vert;",
          "\u2758": "&VerticalSeparator;",
          "\u2240": "&wreath;",
          "\u200A": "&hairsp;",
          "\uD835\uDD19": "&Vfr;",
          "\uD835\uDD4D": "&Vopf;",
          "\uD835\uDCB1": "&Vscr;",
          "\u22AA": "&Vvdash;",
          \u0174: "&Wcirc;",
          "\u22C0": "&xwedge;",
          "\uD835\uDD1A": "&Wfr;",
          "\uD835\uDD4E": "&Wopf;",
          "\uD835\uDCB2": "&Wscr;",
          "\uD835\uDD1B": "&Xfr;",
          \u039E: "&Xi;",
          "\uD835\uDD4F": "&Xopf;",
          "\uD835\uDCB3": "&Xscr;",
          \u042F: "&YAcy;",
          \u0407: "&YIcy;",
          \u042E: "&YUcy;",
          \u00DD: "&Yacute;",
          \u0176: "&Ycirc;",
          \u042B: "&Ycy;",
          "\uD835\uDD1C": "&Yfr;",
          "\uD835\uDD50": "&Yopf;",
          "\uD835\uDCB4": "&Yscr;",
          \u0178: "&Yuml;",
          \u0416: "&ZHcy;",
          \u0179: "&Zacute;",
          \u017D: "&Zcaron;",
          \u0417: "&Zcy;",
          \u017B: "&Zdot;",
          \u0396: "&Zeta;",
          \u2128: "&zeetrf;",
          \u2124: "&integers;",
          "\uD835\uDCB5": "&Zscr;",
          \u00E1: "&aacute;",
          \u0103: "&abreve;",
          "\u223E": "&mstpos;",
          "\u223E\u0333": "&acE;",
          "\u223F": "&acd;",
          \u00E2: "&acirc;",
          \u0430: "&acy;",
          \u00E6: "&aelig;",
          "\uD835\uDD1E": "&afr;",
          \u00E0: "&agrave;",
          \u2135: "&aleph;",
          \u03B1: "&alpha;",
          \u0101: "&amacr;",
          "\u2A3F": "&amalg;",
          "\u2227": "&wedge;",
          "\u2A55": "&andand;",
          "\u2A5C": "&andd;",
          "\u2A58": "&andslope;",
          "\u2A5A": "&andv;",
          "\u2220": "&angle;",
          "\u29A4": "&ange;",
          "\u2221": "&measuredangle;",
          "\u29A8": "&angmsdaa;",
          "\u29A9": "&angmsdab;",
          "\u29AA": "&angmsdac;",
          "\u29AB": "&angmsdad;",
          "\u29AC": "&angmsdae;",
          "\u29AD": "&angmsdaf;",
          "\u29AE": "&angmsdag;",
          "\u29AF": "&angmsdah;",
          "\u221F": "&angrt;",
          "\u22BE": "&angrtvb;",
          "\u299D": "&angrtvbd;",
          "\u2222": "&angsph;",
          "\u237C": "&angzarr;",
          \u0105: "&aogon;",
          "\uD835\uDD52": "&aopf;",
          "\u2A70": "&apE;",
          "\u2A6F": "&apacir;",
          "\u224A": "&approxeq;",
          "\u224B": "&apid;",
          "'": "&apos;",
          \u00E5: "&aring;",
          "\uD835\uDCB6": "&ascr;",
          "*": "&midast;",
          \u00E3: "&atilde;",
          \u00E4: "&auml;",
          "\u2A11": "&awint;",
          "\u2AED": "&bNot;",
          "\u224C": "&bcong;",
          "\u03F6": "&bepsi;",
          "\u2035": "&bprime;",
          "\u223D": "&bsim;",
          "\u22CD": "&bsime;",
          "\u22BD": "&barvee;",
          "\u2305": "&barwedge;",
          "\u23B6": "&bbrktbrk;",
          \u0431: "&bcy;",
          "\u201E": "&ldquor;",
          "\u29B0": "&bemptyv;",
          \u03B2: "&beta;",
          \u2136: "&beth;",
          "\u226C": "&twixt;",
          "\uD835\uDD1F": "&bfr;",
          "\u25EF": "&xcirc;",
          "\u2A00": "&xodot;",
          "\u2A01": "&xoplus;",
          "\u2A02": "&xotime;",
          "\u2A06": "&xsqcup;",
          "\u2605": "&starf;",
          "\u25BD": "&xdtri;",
          "\u25B3": "&xutri;",
          "\u2A04": "&xuplus;",
          "\u290D": "&rbarr;",
          "\u29EB": "&lozf;",
          "\u25B4": "&utrif;",
          "\u25BE": "&dtrif;",
          "\u25C2": "&ltrif;",
          "\u25B8": "&rtrif;",
          "\u2423": "&blank;",
          "\u2592": "&blk12;",
          "\u2591": "&blk14;",
          "\u2593": "&blk34;",
          "\u2588": "&block;",
          "=\u20E5": "&bne;",
          "\u2261\u20E5": "&bnequiv;",
          "\u2310": "&bnot;",
          "\uD835\uDD53": "&bopf;",
          "\u22C8": "&bowtie;",
          "\u2557": "&boxDL;",
          "\u2554": "&boxDR;",
          "\u2556": "&boxDl;",
          "\u2553": "&boxDr;",
          "\u2550": "&boxH;",
          "\u2566": "&boxHD;",
          "\u2569": "&boxHU;",
          "\u2564": "&boxHd;",
          "\u2567": "&boxHu;",
          "\u255D": "&boxUL;",
          "\u255A": "&boxUR;",
          "\u255C": "&boxUl;",
          "\u2559": "&boxUr;",
          "\u2551": "&boxV;",
          "\u256C": "&boxVH;",
          "\u2563": "&boxVL;",
          "\u2560": "&boxVR;",
          "\u256B": "&boxVh;",
          "\u2562": "&boxVl;",
          "\u255F": "&boxVr;",
          "\u29C9": "&boxbox;",
          "\u2555": "&boxdL;",
          "\u2552": "&boxdR;",
          "\u2510": "&boxdl;",
          "\u250C": "&boxdr;",
          "\u2565": "&boxhD;",
          "\u2568": "&boxhU;",
          "\u252C": "&boxhd;",
          "\u2534": "&boxhu;",
          "\u229F": "&minusb;",
          "\u229E": "&plusb;",
          "\u22A0": "&timesb;",
          "\u255B": "&boxuL;",
          "\u2558": "&boxuR;",
          "\u2518": "&boxul;",
          "\u2514": "&boxur;",
          "\u2502": "&boxv;",
          "\u256A": "&boxvH;",
          "\u2561": "&boxvL;",
          "\u255E": "&boxvR;",
          "\u253C": "&boxvh;",
          "\u2524": "&boxvl;",
          "\u251C": "&boxvr;",
          "\xA6": "&brvbar;",
          "\uD835\uDCB7": "&bscr;",
          "\u204F": "&bsemi;",
          "\\": "&bsol;",
          "\u29C5": "&bsolb;",
          "\u27C8": "&bsolhsub;",
          "\u2022": "&bullet;",
          "\u2AAE": "&bumpE;",
          \u0107: "&cacute;",
          "\u2229": "&cap;",
          "\u2A44": "&capand;",
          "\u2A49": "&capbrcup;",
          "\u2A4B": "&capcap;",
          "\u2A47": "&capcup;",
          "\u2A40": "&capdot;",
          "\u2229\uFE00": "&caps;",
          "\u2041": "&caret;",
          "\u2A4D": "&ccaps;",
          \u010D: "&ccaron;",
          \u00E7: "&ccedil;",
          \u0109: "&ccirc;",
          "\u2A4C": "&ccups;",
          "\u2A50": "&ccupssm;",
          \u010B: "&cdot;",
          "\u29B2": "&cemptyv;",
          "\xA2": "&cent;",
          "\uD835\uDD20": "&cfr;",
          \u0447: "&chcy;",
          "\u2713": "&checkmark;",
          \u03C7: "&chi;",
          "\u25CB": "&cir;",
          "\u29C3": "&cirE;",
          "\u02C6": "&circ;",
          "\u2257": "&cire;",
          "\u21BA": "&olarr;",
          "\u21BB": "&orarr;",
          "\u24C8": "&oS;",
          "\u229B": "&oast;",
          "\u229A": "&ocir;",
          "\u229D": "&odash;",
          "\u2A10": "&cirfnint;",
          "\u2AEF": "&cirmid;",
          "\u29C2": "&cirscir;",
          "\u2663": "&clubsuit;",
          ":": "&colon;",
          ",": "&comma;",
          "@": "&commat;",
          "\u2201": "&complement;",
          "\u2A6D": "&congdot;",
          "\uD835\uDD54": "&copf;",
          "\u2117": "&copysr;",
          "\u21B5": "&crarr;",
          "\u2717": "&cross;",
          "\uD835\uDCB8": "&cscr;",
          "\u2ACF": "&csub;",
          "\u2AD1": "&csube;",
          "\u2AD0": "&csup;",
          "\u2AD2": "&csupe;",
          "\u22EF": "&ctdot;",
          "\u2938": "&cudarrl;",
          "\u2935": "&cudarrr;",
          "\u22DE": "&curlyeqprec;",
          "\u22DF": "&curlyeqsucc;",
          "\u21B6": "&curvearrowleft;",
          "\u293D": "&cularrp;",
          "\u222A": "&cup;",
          "\u2A48": "&cupbrcap;",
          "\u2A46": "&cupcap;",
          "\u2A4A": "&cupcup;",
          "\u228D": "&cupdot;",
          "\u2A45": "&cupor;",
          "\u222A\uFE00": "&cups;",
          "\u21B7": "&curvearrowright;",
          "\u293C": "&curarrm;",
          "\u22CE": "&cuvee;",
          "\u22CF": "&cuwed;",
          "\xA4": "&curren;",
          "\u2231": "&cwint;",
          "\u232D": "&cylcty;",
          "\u2965": "&dHar;",
          "\u2020": "&dagger;",
          \u2138: "&daleth;",
          "\u2010": "&hyphen;",
          "\u290F": "&rBarr;",
          \u010F: "&dcaron;",
          \u0434: "&dcy;",
          "\u21CA": "&downdownarrows;",
          "\u2A77": "&eDDot;",
          "\xB0": "&deg;",
          \u03B4: "&delta;",
          "\u29B1": "&demptyv;",
          "\u297F": "&dfisht;",
          "\uD835\uDD21": "&dfr;",
          "\u2666": "&diams;",
          \u03DD: "&gammad;",
          "\u22F2": "&disin;",
          "\xF7": "&divide;",
          "\u22C7": "&divonx;",
          \u0452: "&djcy;",
          "\u231E": "&llcorner;",
          "\u230D": "&dlcrop;",
          $: "&dollar;",
          "\uD835\uDD55": "&dopf;",
          "\u2251": "&eDot;",
          "\u2238": "&minusd;",
          "\u2214": "&plusdo;",
          "\u22A1": "&sdotb;",
          "\u231F": "&lrcorner;",
          "\u230C": "&drcrop;",
          "\uD835\uDCB9": "&dscr;",
          \u0455: "&dscy;",
          "\u29F6": "&dsol;",
          \u0111: "&dstrok;",
          "\u22F1": "&dtdot;",
          "\u25BF": "&triangledown;",
          "\u29A6": "&dwangle;",
          \u045F: "&dzcy;",
          "\u27FF": "&dzigrarr;",
          \u00E9: "&eacute;",
          "\u2A6E": "&easter;",
          \u011B: "&ecaron;",
          "\u2256": "&eqcirc;",
          \u00EA: "&ecirc;",
          "\u2255": "&eqcolon;",
          \u044D: "&ecy;",
          \u0117: "&edot;",
          "\u2252": "&fallingdotseq;",
          "\uD835\uDD22": "&efr;",
          "\u2A9A": "&eg;",
          \u00E8: "&egrave;",
          "\u2A96": "&eqslantgtr;",
          "\u2A98": "&egsdot;",
          "\u2A99": "&el;",
          "\u23E7": "&elinters;",
          \u2113: "&ell;",
          "\u2A95": "&eqslantless;",
          "\u2A97": "&elsdot;",
          \u0113: "&emacr;",
          "\u2205": "&varnothing;",
          "\u2004": "&emsp13;",
          "\u2005": "&emsp14;",
          "\u2003": "&emsp;",
          \u014B: "&eng;",
          "\u2002": "&ensp;",
          \u0119: "&eogon;",
          "\uD835\uDD56": "&eopf;",
          "\u22D5": "&epar;",
          "\u29E3": "&eparsl;",
          "\u2A71": "&eplus;",
          \u03B5: "&epsilon;",
          "\u03F5": "&varepsilon;",
          "=": "&equals;",
          "\u225F": "&questeq;",
          "\u2A78": "&equivDD;",
          "\u29E5": "&eqvparsl;",
          "\u2253": "&risingdotseq;",
          "\u2971": "&erarr;",
          \u212F: "&escr;",
          \u03B7: "&eta;",
          \u00F0: "&eth;",
          \u00EB: "&euml;",
          "\u20AC": "&euro;",
          "!": "&excl;",
          \u0444: "&fcy;",
          "\u2640": "&female;",
          \uFB03: "&ffilig;",
          \uFB00: "&fflig;",
          \uFB04: "&ffllig;",
          "\uD835\uDD23": "&ffr;",
          \uFB01: "&filig;",
          fj: "&fjlig;",
          "\u266D": "&flat;",
          \uFB02: "&fllig;",
          "\u25B1": "&fltns;",
          \u0192: "&fnof;",
          "\uD835\uDD57": "&fopf;",
          "\u22D4": "&pitchfork;",
          "\u2AD9": "&forkv;",
          "\u2A0D": "&fpartint;",
          "\xBD": "&half;",
          "\u2153": "&frac13;",
          "\xBC": "&frac14;",
          "\u2155": "&frac15;",
          "\u2159": "&frac16;",
          "\u215B": "&frac18;",
          "\u2154": "&frac23;",
          "\u2156": "&frac25;",
          "\xBE": "&frac34;",
          "\u2157": "&frac35;",
          "\u215C": "&frac38;",
          "\u2158": "&frac45;",
          "\u215A": "&frac56;",
          "\u215D": "&frac58;",
          "\u215E": "&frac78;",
          "\u2044": "&frasl;",
          "\u2322": "&sfrown;",
          "\uD835\uDCBB": "&fscr;",
          "\u2A8C": "&gtreqqless;",
          \u01F5: "&gacute;",
          \u03B3: "&gamma;",
          "\u2A86": "&gtrapprox;",
          \u011F: "&gbreve;",
          \u011D: "&gcirc;",
          \u0433: "&gcy;",
          \u0121: "&gdot;",
          "\u2AA9": "&gescc;",
          "\u2A80": "&gesdot;",
          "\u2A82": "&gesdoto;",
          "\u2A84": "&gesdotol;",
          "\u22DB\uFE00": "&gesl;",
          "\u2A94": "&gesles;",
          "\uD835\uDD24": "&gfr;",
          \u2137: "&gimel;",
          \u0453: "&gjcy;",
          "\u2A92": "&glE;",
          "\u2AA5": "&gla;",
          "\u2AA4": "&glj;",
          "\u2269": "&gneqq;",
          "\u2A8A": "&gnapprox;",
          "\u2A88": "&gneq;",
          "\u22E7": "&gnsim;",
          "\uD835\uDD58": "&gopf;",
          \u210A: "&gscr;",
          "\u2A8E": "&gsime;",
          "\u2A90": "&gsiml;",
          "\u2AA7": "&gtcc;",
          "\u2A7A": "&gtcir;",
          "\u22D7": "&gtrdot;",
          "\u2995": "&gtlPar;",
          "\u2A7C": "&gtquest;",
          "\u2978": "&gtrarr;",
          "\u2269\uFE00": "&gvnE;",
          \u044A: "&hardcy;",
          "\u2948": "&harrcir;",
          "\u21AD": "&leftrightsquigarrow;",
          \u210F: "&plankv;",
          \u0125: "&hcirc;",
          "\u2665": "&heartsuit;",
          "\u2026": "&mldr;",
          "\u22B9": "&hercon;",
          "\uD835\uDD25": "&hfr;",
          "\u2925": "&searhk;",
          "\u2926": "&swarhk;",
          "\u21FF": "&hoarr;",
          "\u223B": "&homtht;",
          "\u21A9": "&larrhk;",
          "\u21AA": "&rarrhk;",
          "\uD835\uDD59": "&hopf;",
          "\u2015": "&horbar;",
          "\uD835\uDCBD": "&hscr;",
          \u0127: "&hstrok;",
          "\u2043": "&hybull;",
          \u00ED: "&iacute;",
          \u00EE: "&icirc;",
          \u0438: "&icy;",
          \u0435: "&iecy;",
          "\xA1": "&iexcl;",
          "\uD835\uDD26": "&ifr;",
          \u00EC: "&igrave;",
          "\u2A0C": "&qint;",
          "\u222D": "&tint;",
          "\u29DC": "&iinfin;",
          "\u2129": "&iiota;",
          \u0133: "&ijlig;",
          \u012B: "&imacr;",
          \u0131: "&inodot;",
          "\u22B7": "&imof;",
          \u01B5: "&imped;",
          "\u2105": "&incare;",
          "\u221E": "&infin;",
          "\u29DD": "&infintie;",
          "\u22BA": "&intercal;",
          "\u2A17": "&intlarhk;",
          "\u2A3C": "&iprod;",
          \u0451: "&iocy;",
          \u012F: "&iogon;",
          "\uD835\uDD5A": "&iopf;",
          \u03B9: "&iota;",
          "\xBF": "&iquest;",
          "\uD835\uDCBE": "&iscr;",
          "\u22F9": "&isinE;",
          "\u22F5": "&isindot;",
          "\u22F4": "&isins;",
          "\u22F3": "&isinsv;",
          \u0129: "&itilde;",
          \u0456: "&iukcy;",
          \u00EF: "&iuml;",
          \u0135: "&jcirc;",
          \u0439: "&jcy;",
          "\uD835\uDD27": "&jfr;",
          "\u0237": "&jmath;",
          "\uD835\uDD5B": "&jopf;",
          "\uD835\uDCBF": "&jscr;",
          \u0458: "&jsercy;",
          \u0454: "&jukcy;",
          \u03BA: "&kappa;",
          \u03F0: "&varkappa;",
          \u0137: "&kcedil;",
          \u043A: "&kcy;",
          "\uD835\uDD28": "&kfr;",
          \u0138: "&kgreen;",
          \u0445: "&khcy;",
          \u045C: "&kjcy;",
          "\uD835\uDD5C": "&kopf;",
          "\uD835\uDCC0": "&kscr;",
          "\u291B": "&lAtail;",
          "\u290E": "&lBarr;",
          "\u2A8B": "&lesseqqgtr;",
          "\u2962": "&lHar;",
          \u013A: "&lacute;",
          "\u29B4": "&laemptyv;",
          \u03BB: "&lambda;",
          "\u2991": "&langd;",
          "\u2A85": "&lessapprox;",
          "\xAB": "&laquo;",
          "\u291F": "&larrbfs;",
          "\u291D": "&larrfs;",
          "\u21AB": "&looparrowleft;",
          "\u2939": "&larrpl;",
          "\u2973": "&larrsim;",
          "\u21A2": "&leftarrowtail;",
          "\u2AAB": "&lat;",
          "\u2919": "&latail;",
          "\u2AAD": "&late;",
          "\u2AAD\uFE00": "&lates;",
          "\u290C": "&lbarr;",
          "\u2772": "&lbbrk;",
          "{": "&lcub;",
          "[": "&lsqb;",
          "\u298B": "&lbrke;",
          "\u298F": "&lbrksld;",
          "\u298D": "&lbrkslu;",
          \u013E: "&lcaron;",
          \u013C: "&lcedil;",
          \u043B: "&lcy;",
          "\u2936": "&ldca;",
          "\u2967": "&ldrdhar;",
          "\u294B": "&ldrushar;",
          "\u21B2": "&ldsh;",
          "\u2264": "&leq;",
          "\u21C7": "&llarr;",
          "\u22CB": "&lthree;",
          "\u2AA8": "&lescc;",
          "\u2A7F": "&lesdot;",
          "\u2A81": "&lesdoto;",
          "\u2A83": "&lesdotor;",
          "\u22DA\uFE00": "&lesg;",
          "\u2A93": "&lesges;",
          "\u22D6": "&ltdot;",
          "\u297C": "&lfisht;",
          "\uD835\uDD29": "&lfr;",
          "\u2A91": "&lgE;",
          "\u296A": "&lharul;",
          "\u2584": "&lhblk;",
          \u0459: "&ljcy;",
          "\u296B": "&llhard;",
          "\u25FA": "&lltri;",
          \u0140: "&lmidot;",
          "\u23B0": "&lmoustache;",
          "\u2268": "&lneqq;",
          "\u2A89": "&lnapprox;",
          "\u2A87": "&lneq;",
          "\u22E6": "&lnsim;",
          "\u27EC": "&loang;",
          "\u21FD": "&loarr;",
          "\u27FC": "&xmap;",
          "\u21AC": "&rarrlp;",
          "\u2985": "&lopar;",
          "\uD835\uDD5D": "&lopf;",
          "\u2A2D": "&loplus;",
          "\u2A34": "&lotimes;",
          "\u2217": "&lowast;",
          "\u25CA": "&lozenge;",
          "(": "&lpar;",
          "\u2993": "&lparlt;",
          "\u296D": "&lrhard;",
          "\u200E": "&lrm;",
          "\u22BF": "&lrtri;",
          "\u2039": "&lsaquo;",
          "\uD835\uDCC1": "&lscr;",
          "\u2A8D": "&lsime;",
          "\u2A8F": "&lsimg;",
          "\u201A": "&sbquo;",
          \u0142: "&lstrok;",
          "\u2AA6": "&ltcc;",
          "\u2A79": "&ltcir;",
          "\u22C9": "&ltimes;",
          "\u2976": "&ltlarr;",
          "\u2A7B": "&ltquest;",
          "\u2996": "&ltrPar;",
          "\u25C3": "&triangleleft;",
          "\u294A": "&lurdshar;",
          "\u2966": "&luruhar;",
          "\u2268\uFE00": "&lvnE;",
          "\u223A": "&mDDot;",
          "\xAF": "&strns;",
          "\u2642": "&male;",
          "\u2720": "&maltese;",
          "\u25AE": "&marker;",
          "\u2A29": "&mcomma;",
          \u043C: "&mcy;",
          "\u2014": "&mdash;",
          "\uD835\uDD2A": "&mfr;",
          "\u2127": "&mho;",
          \u00B5: "&micro;",
          "\u2AF0": "&midcir;",
          "\u2212": "&minus;",
          "\u2A2A": "&minusdu;",
          "\u2ADB": "&mlcp;",
          "\u22A7": "&models;",
          "\uD835\uDD5E": "&mopf;",
          "\uD835\uDCC2": "&mscr;",
          \u03BC: "&mu;",
          "\u22B8": "&mumap;",
          "\u22D9\u0338": "&nGg;",
          "\u226B\u20D2": "&nGt;",
          "\u21CD": "&nlArr;",
          "\u21CE": "&nhArr;",
          "\u22D8\u0338": "&nLl;",
          "\u226A\u20D2": "&nLt;",
          "\u21CF": "&nrArr;",
          "\u22AF": "&nVDash;",
          "\u22AE": "&nVdash;",
          \u0144: "&nacute;",
          "\u2220\u20D2": "&nang;",
          "\u2A70\u0338": "&napE;",
          "\u224B\u0338": "&napid;",
          \u0149: "&napos;",
          "\u266E": "&natural;",
          "\u2A43": "&ncap;",
          \u0148: "&ncaron;",
          \u0146: "&ncedil;",
          "\u2A6D\u0338": "&ncongdot;",
          "\u2A42": "&ncup;",
          \u043D: "&ncy;",
          "\u2013": "&ndash;",
          "\u21D7": "&neArr;",
          "\u2924": "&nearhk;",
          "\u2250\u0338": "&nedot;",
          "\u2928": "&toea;",
          "\uD835\uDD2B": "&nfr;",
          "\u21AE": "&nleftrightarrow;",
          "\u2AF2": "&nhpar;",
          "\u22FC": "&nis;",
          "\u22FA": "&nisd;",
          \u045A: "&njcy;",
          "\u2266\u0338": "&nleqq;",
          "\u219A": "&nleftarrow;",
          "\u2025": "&nldr;",
          "\uD835\uDD5F": "&nopf;",
          "\xAC": "&not;",
          "\u22F9\u0338": "&notinE;",
          "\u22F5\u0338": "&notindot;",
          "\u22F7": "&notinvb;",
          "\u22F6": "&notinvc;",
          "\u22FE": "&notnivb;",
          "\u22FD": "&notnivc;",
          "\u2AFD\u20E5": "&nparsl;",
          "\u2202\u0338": "&npart;",
          "\u2A14": "&npolint;",
          "\u219B": "&nrightarrow;",
          "\u2933\u0338": "&nrarrc;",
          "\u219D\u0338": "&nrarrw;",
          "\uD835\uDCC3": "&nscr;",
          "\u2284": "&nsub;",
          "\u2AC5\u0338": "&nsubseteqq;",
          "\u2285": "&nsup;",
          "\u2AC6\u0338": "&nsupseteqq;",
          \u00F1: "&ntilde;",
          \u03BD: "&nu;",
          "#": "&num;",
          "\u2116": "&numero;",
          "\u2007": "&numsp;",
          "\u22AD": "&nvDash;",
          "\u2904": "&nvHarr;",
          "\u224D\u20D2": "&nvap;",
          "\u22AC": "&nvdash;",
          "\u2265\u20D2": "&nvge;",
          ">\u20D2": "&nvgt;",
          "\u29DE": "&nvinfin;",
          "\u2902": "&nvlArr;",
          "\u2264\u20D2": "&nvle;",
          "<\u20D2": "&nvlt;",
          "\u22B4\u20D2": "&nvltrie;",
          "\u2903": "&nvrArr;",
          "\u22B5\u20D2": "&nvrtrie;",
          "\u223C\u20D2": "&nvsim;",
          "\u21D6": "&nwArr;",
          "\u2923": "&nwarhk;",
          "\u2927": "&nwnear;",
          \u00F3: "&oacute;",
          \u00F4: "&ocirc;",
          \u043E: "&ocy;",
          \u0151: "&odblac;",
          "\u2A38": "&odiv;",
          "\u29BC": "&odsold;",
          \u0153: "&oelig;",
          "\u29BF": "&ofcir;",
          "\uD835\uDD2C": "&ofr;",
          "\u02DB": "&ogon;",
          \u00F2: "&ograve;",
          "\u29C1": "&ogt;",
          "\u29B5": "&ohbar;",
          "\u29BE": "&olcir;",
          "\u29BB": "&olcross;",
          "\u29C0": "&olt;",
          \u014D: "&omacr;",
          \u03C9: "&omega;",
          \u03BF: "&omicron;",
          "\u29B6": "&omid;",
          "\uD835\uDD60": "&oopf;",
          "\u29B7": "&opar;",
          "\u29B9": "&operp;",
          "\u2228": "&vee;",
          "\u2A5D": "&ord;",
          \u2134: "&oscr;",
          \u00AA: "&ordf;",
          \u00BA: "&ordm;",
          "\u22B6": "&origof;",
          "\u2A56": "&oror;",
          "\u2A57": "&orslope;",
          "\u2A5B": "&orv;",
          \u00F8: "&oslash;",
          "\u2298": "&osol;",
          \u00F5: "&otilde;",
          "\u2A36": "&otimesas;",
          \u00F6: "&ouml;",
          "\u233D": "&ovbar;",
          "\xB6": "&para;",
          "\u2AF3": "&parsim;",
          "\u2AFD": "&parsl;",
          \u043F: "&pcy;",
          "%": "&percnt;",
          ".": "&period;",
          "\u2030": "&permil;",
          "\u2031": "&pertenk;",
          "\uD835\uDD2D": "&pfr;",
          \u03C6: "&phi;",
          \u03D5: "&varphi;",
          "\u260E": "&phone;",
          \u03C0: "&pi;",
          \u03D6: "&varpi;",
          \u210E: "&planckh;",
          "+": "&plus;",
          "\u2A23": "&plusacir;",
          "\u2A22": "&pluscir;",
          "\u2A25": "&plusdu;",
          "\u2A72": "&pluse;",
          "\u2A26": "&plussim;",
          "\u2A27": "&plustwo;",
          "\u2A15": "&pointint;",
          "\uD835\uDD61": "&popf;",
          "\xA3": "&pound;",
          "\u2AB3": "&prE;",
          "\u2AB7": "&precapprox;",
          "\u2AB9": "&prnap;",
          "\u2AB5": "&prnE;",
          "\u22E8": "&prnsim;",
          "\u2032": "&prime;",
          "\u232E": "&profalar;",
          "\u2312": "&profline;",
          "\u2313": "&profsurf;",
          "\u22B0": "&prurel;",
          "\uD835\uDCC5": "&pscr;",
          \u03C8: "&psi;",
          "\u2008": "&puncsp;",
          "\uD835\uDD2E": "&qfr;",
          "\uD835\uDD62": "&qopf;",
          "\u2057": "&qprime;",
          "\uD835\uDCC6": "&qscr;",
          "\u2A16": "&quatint;",
          "?": "&quest;",
          "\u291C": "&rAtail;",
          "\u2964": "&rHar;",
          "\u223D\u0331": "&race;",
          \u0155: "&racute;",
          "\u29B3": "&raemptyv;",
          "\u2992": "&rangd;",
          "\u29A5": "&range;",
          "\xBB": "&raquo;",
          "\u2975": "&rarrap;",
          "\u2920": "&rarrbfs;",
          "\u2933": "&rarrc;",
          "\u291E": "&rarrfs;",
          "\u2945": "&rarrpl;",
          "\u2974": "&rarrsim;",
          "\u21A3": "&rightarrowtail;",
          "\u219D": "&rightsquigarrow;",
          "\u291A": "&ratail;",
          "\u2236": "&ratio;",
          "\u2773": "&rbbrk;",
          "}": "&rcub;",
          "]": "&rsqb;",
          "\u298C": "&rbrke;",
          "\u298E": "&rbrksld;",
          "\u2990": "&rbrkslu;",
          \u0159: "&rcaron;",
          \u0157: "&rcedil;",
          \u0440: "&rcy;",
          "\u2937": "&rdca;",
          "\u2969": "&rdldhar;",
          "\u21B3": "&rdsh;",
          "\u25AD": "&rect;",
          "\u297D": "&rfisht;",
          "\uD835\uDD2F": "&rfr;",
          "\u296C": "&rharul;",
          \u03C1: "&rho;",
          \u03F1: "&varrho;",
          "\u21C9": "&rrarr;",
          "\u22CC": "&rthree;",
          "\u02DA": "&ring;",
          "\u200F": "&rlm;",
          "\u23B1": "&rmoustache;",
          "\u2AEE": "&rnmid;",
          "\u27ED": "&roang;",
          "\u21FE": "&roarr;",
          "\u2986": "&ropar;",
          "\uD835\uDD63": "&ropf;",
          "\u2A2E": "&roplus;",
          "\u2A35": "&rotimes;",
          ")": "&rpar;",
          "\u2994": "&rpargt;",
          "\u2A12": "&rppolint;",
          "\u203A": "&rsaquo;",
          "\uD835\uDCC7": "&rscr;",
          "\u22CA": "&rtimes;",
          "\u25B9": "&triangleright;",
          "\u29CE": "&rtriltri;",
          "\u2968": "&ruluhar;",
          "\u211E": "&rx;",
          \u015B: "&sacute;",
          "\u2AB4": "&scE;",
          "\u2AB8": "&succapprox;",
          \u0161: "&scaron;",
          \u015F: "&scedil;",
          \u015D: "&scirc;",
          "\u2AB6": "&succneqq;",
          "\u2ABA": "&succnapprox;",
          "\u22E9": "&succnsim;",
          "\u2A13": "&scpolint;",
          \u0441: "&scy;",
          "\u22C5": "&sdot;",
          "\u2A66": "&sdote;",
          "\u21D8": "&seArr;",
          "\xA7": "&sect;",
          ";": "&semi;",
          "\u2929": "&tosa;",
          "\u2736": "&sext;",
          "\uD835\uDD30": "&sfr;",
          "\u266F": "&sharp;",
          \u0449: "&shchcy;",
          \u0448: "&shcy;",
          "\xAD": "&shy;",
          \u03C3: "&sigma;",
          \u03C2: "&varsigma;",
          "\u2A6A": "&simdot;",
          "\u2A9E": "&simg;",
          "\u2AA0": "&simgE;",
          "\u2A9D": "&siml;",
          "\u2A9F": "&simlE;",
          "\u2246": "&simne;",
          "\u2A24": "&simplus;",
          "\u2972": "&simrarr;",
          "\u2A33": "&smashp;",
          "\u29E4": "&smeparsl;",
          "\u2323": "&ssmile;",
          "\u2AAA": "&smt;",
          "\u2AAC": "&smte;",
          "\u2AAC\uFE00": "&smtes;",
          \u044C: "&softcy;",
          "/": "&sol;",
          "\u29C4": "&solb;",
          "\u233F": "&solbar;",
          "\uD835\uDD64": "&sopf;",
          "\u2660": "&spadesuit;",
          "\u2293\uFE00": "&sqcaps;",
          "\u2294\uFE00": "&sqcups;",
          "\uD835\uDCC8": "&sscr;",
          "\u2606": "&star;",
          "\u2282": "&subset;",
          "\u2AC5": "&subseteqq;",
          "\u2ABD": "&subdot;",
          "\u2AC3": "&subedot;",
          "\u2AC1": "&submult;",
          "\u2ACB": "&subsetneqq;",
          "\u228A": "&subsetneq;",
          "\u2ABF": "&subplus;",
          "\u2979": "&subrarr;",
          "\u2AC7": "&subsim;",
          "\u2AD5": "&subsub;",
          "\u2AD3": "&subsup;",
          "\u266A": "&sung;",
          "\xB9": "&sup1;",
          "\xB2": "&sup2;",
          "\xB3": "&sup3;",
          "\u2AC6": "&supseteqq;",
          "\u2ABE": "&supdot;",
          "\u2AD8": "&supdsub;",
          "\u2AC4": "&supedot;",
          "\u27C9": "&suphsol;",
          "\u2AD7": "&suphsub;",
          "\u297B": "&suplarr;",
          "\u2AC2": "&supmult;",
          "\u2ACC": "&supsetneqq;",
          "\u228B": "&supsetneq;",
          "\u2AC0": "&supplus;",
          "\u2AC8": "&supsim;",
          "\u2AD4": "&supsub;",
          "\u2AD6": "&supsup;",
          "\u21D9": "&swArr;",
          "\u292A": "&swnwar;",
          \u00DF: "&szlig;",
          "\u2316": "&target;",
          \u03C4: "&tau;",
          \u0165: "&tcaron;",
          \u0163: "&tcedil;",
          \u0442: "&tcy;",
          "\u2315": "&telrec;",
          "\uD835\uDD31": "&tfr;",
          \u03B8: "&theta;",
          \u03D1: "&vartheta;",
          \u00FE: "&thorn;",
          "\xD7": "&times;",
          "\u2A31": "&timesbar;",
          "\u2A30": "&timesd;",
          "\u2336": "&topbot;",
          "\u2AF1": "&topcir;",
          "\uD835\uDD65": "&topf;",
          "\u2ADA": "&topfork;",
          "\u2034": "&tprime;",
          "\u25B5": "&utri;",
          "\u225C": "&trie;",
          "\u25EC": "&tridot;",
          "\u2A3A": "&triminus;",
          "\u2A39": "&triplus;",
          "\u29CD": "&trisb;",
          "\u2A3B": "&tritime;",
          "\u23E2": "&trpezium;",
          "\uD835\uDCC9": "&tscr;",
          \u0446: "&tscy;",
          \u045B: "&tshcy;",
          \u0167: "&tstrok;",
          "\u2963": "&uHar;",
          \u00FA: "&uacute;",
          \u045E: "&ubrcy;",
          \u016D: "&ubreve;",
          \u00FB: "&ucirc;",
          \u0443: "&ucy;",
          \u0171: "&udblac;",
          "\u297E": "&ufisht;",
          "\uD835\uDD32": "&ufr;",
          \u00F9: "&ugrave;",
          "\u2580": "&uhblk;",
          "\u231C": "&ulcorner;",
          "\u230F": "&ulcrop;",
          "\u25F8": "&ultri;",
          \u016B: "&umacr;",
          \u0173: "&uogon;",
          "\uD835\uDD66": "&uopf;",
          \u03C5: "&upsilon;",
          "\u21C8": "&uuarr;",
          "\u231D": "&urcorner;",
          "\u230E": "&urcrop;",
          \u016F: "&uring;",
          "\u25F9": "&urtri;",
          "\uD835\uDCCA": "&uscr;",
          "\u22F0": "&utdot;",
          \u0169: "&utilde;",
          \u00FC: "&uuml;",
          "\u29A7": "&uwangle;",
          "\u2AE8": "&vBar;",
          "\u2AE9": "&vBarv;",
          "\u299C": "&vangrt;",
          "\u228A\uFE00": "&vsubne;",
          "\u2ACB\uFE00": "&vsubnE;",
          "\u228B\uFE00": "&vsupne;",
          "\u2ACC\uFE00": "&vsupnE;",
          \u0432: "&vcy;",
          "\u22BB": "&veebar;",
          "\u225A": "&veeeq;",
          "\u22EE": "&vellip;",
          "\uD835\uDD33": "&vfr;",
          "\uD835\uDD67": "&vopf;",
          "\uD835\uDCCB": "&vscr;",
          "\u299A": "&vzigzag;",
          \u0175: "&wcirc;",
          "\u2A5F": "&wedbar;",
          "\u2259": "&wedgeq;",
          "\u2118": "&wp;",
          "\uD835\uDD34": "&wfr;",
          "\uD835\uDD68": "&wopf;",
          "\uD835\uDCCC": "&wscr;",
          "\uD835\uDD35": "&xfr;",
          \u03BE: "&xi;",
          "\u22FB": "&xnis;",
          "\uD835\uDD69": "&xopf;",
          "\uD835\uDCCD": "&xscr;",
          \u00FD: "&yacute;",
          \u044F: "&yacy;",
          \u0177: "&ycirc;",
          \u044B: "&ycy;",
          "\xA5": "&yen;",
          "\uD835\uDD36": "&yfr;",
          \u0457: "&yicy;",
          "\uD835\uDD6A": "&yopf;",
          "\uD835\uDCCE": "&yscr;",
          \u044E: "&yucy;",
          \u00FF: "&yuml;",
          \u017A: "&zacute;",
          \u017E: "&zcaron;",
          \u0437: "&zcy;",
          \u017C: "&zdot;",
          \u03B6: "&zeta;",
          "\uD835\uDD37": "&zfr;",
          \u0436: "&zhcy;",
          "\u21DD": "&zigrarr;",
          "\uD835\uDD6B": "&zopf;",
          "\uD835\uDCCF": "&zscr;",
          "\u200D": "&zwj;",
          "\u200C": "&zwnj;"
        }
      }
    };
  }
});

// node_modules/html-entities/lib/numeric-unicode-map.js
var require_numeric_unicode_map = __commonJS({
  "node_modules/html-entities/lib/numeric-unicode-map.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    exports2.numericUnicodeMap = {
      0: 65533,
      128: 8364,
      130: 8218,
      131: 402,
      132: 8222,
      133: 8230,
      134: 8224,
      135: 8225,
      136: 710,
      137: 8240,
      138: 352,
      139: 8249,
      140: 338,
      142: 381,
      145: 8216,
      146: 8217,
      147: 8220,
      148: 8221,
      149: 8226,
      150: 8211,
      151: 8212,
      152: 732,
      153: 8482,
      154: 353,
      155: 8250,
      156: 339,
      158: 382,
      159: 376
    };
  }
});

// node_modules/html-entities/lib/surrogate-pairs.js
var require_surrogate_pairs = __commonJS({
  "node_modules/html-entities/lib/surrogate-pairs.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    exports2.fromCodePoint = String.fromCodePoint || function(astralCodePoint) {
      return String.fromCharCode(Math.floor((astralCodePoint - 65536) / 1024) + 55296, (astralCodePoint - 65536) % 1024 + 56320);
    };
    exports2.getCodePoint = String.prototype.codePointAt ? function(input, position) {
      return input.codePointAt(position);
    } : function(input, position) {
      return (input.charCodeAt(position) - 55296) * 1024 + input.charCodeAt(position + 1) - 56320 + 65536;
    };
    exports2.highSurrogateFrom = 55296;
    exports2.highSurrogateTo = 56319;
  }
});

// node_modules/html-entities/lib/index.js
var require_lib = __commonJS({
  "node_modules/html-entities/lib/index.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    var __assign = exports2 && exports2.__assign || function() {
      return __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
        }
        return t;
      }, __assign.apply(this, arguments);
    };
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var named_references_1 = require_named_references(), numeric_unicode_map_1 = require_numeric_unicode_map(), surrogate_pairs_1 = require_surrogate_pairs(), allNamedReferences = __assign(__assign({}, named_references_1.namedReferences), {
      all: named_references_1.namedReferences.html5
    });
    function replaceUsingRegExp(macroText, macroRegExp, macroReplacer) {
      macroRegExp.lastIndex = 0;
      var replaceMatch = macroRegExp.exec(macroText), replaceResult;
      if (replaceMatch) {
        replaceResult = "";
        var replaceLastIndex = 0;
        do {
          replaceLastIndex !== replaceMatch.index && (replaceResult += macroText.substring(replaceLastIndex, replaceMatch.index));
          var replaceInput = replaceMatch[0];
          replaceResult += macroReplacer(replaceInput), replaceLastIndex = replaceMatch.index + replaceInput.length;
        } while (replaceMatch = macroRegExp.exec(macroText));
        replaceLastIndex !== macroText.length && (replaceResult += macroText.substring(replaceLastIndex));
      } else
        replaceResult = macroText;
      return replaceResult;
    }
    var encodeRegExps = {
      specialChars: /[<>'"&]/g,
      nonAscii: /[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
      nonAsciiPrintable: /[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
      nonAsciiPrintableOnly: /[\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
      extensive: /[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g
    }, defaultEncodeOptions = {
      mode: "specialChars",
      level: "all",
      numeric: "decimal"
    };
    function encode(text, _a) {
      var _b = _a === void 0 ? defaultEncodeOptions : _a, _c = _b.mode, mode = _c === void 0 ? "specialChars" : _c, _d = _b.numeric, numeric = _d === void 0 ? "decimal" : _d, _e = _b.level, level = _e === void 0 ? "all" : _e;
      if (!text)
        return "";
      var encodeRegExp = encodeRegExps[mode], references = allNamedReferences[level].characters, isHex = numeric === "hexadecimal";
      return replaceUsingRegExp(text, encodeRegExp, function(input) {
        var result = references[input];
        if (!result) {
          var code = input.length > 1 ? surrogate_pairs_1.getCodePoint(input, 0) : input.charCodeAt(0);
          result = (isHex ? "&#x" + code.toString(16) : "&#" + code) + ";";
        }
        return result;
      });
    }
    exports2.encode = encode;
    var defaultDecodeOptions = {
      scope: "body",
      level: "all"
    }, strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g, attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g, baseDecodeRegExps = {
      xml: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.xml
      },
      html4: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.html4
      },
      html5: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.html5
      }
    }, decodeRegExps = __assign(__assign({}, baseDecodeRegExps), {
      all: baseDecodeRegExps.html5
    }), fromCharCode = String.fromCharCode, outOfBoundsChar = fromCharCode(65533), defaultDecodeEntityOptions = {
      level: "all"
    };
    function getDecodedEntity(entity, references, isAttribute, isStrict) {
      var decodeResult = entity, decodeEntityLastChar = entity[entity.length - 1];
      if (isAttribute && decodeEntityLastChar === "=")
        decodeResult = entity;
      else if (isStrict && decodeEntityLastChar !== ";")
        decodeResult = entity;
      else {
        var decodeResultByReference = references[entity];
        if (decodeResultByReference)
          decodeResult = decodeResultByReference;
        else if (entity[0] === "&" && entity[1] === "#") {
          var decodeSecondChar = entity[2], decodeCode = decodeSecondChar == "x" || decodeSecondChar == "X" ? parseInt(entity.substr(3), 16) : parseInt(entity.substr(2));
          decodeResult = decodeCode >= 1114111 ? outOfBoundsChar : decodeCode > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode] || decodeCode);
        }
      }
      return decodeResult;
    }
    function decodeEntity(entity, _a) {
      var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level, level = _b === void 0 ? "all" : _b;
      return entity ? getDecodedEntity(entity, allNamedReferences[level].entities, !1, !1) : "";
    }
    exports2.decodeEntity = decodeEntity;
    function decode(text, _a) {
      var _b = _a === void 0 ? defaultDecodeOptions : _a, _c = _b.level, level = _c === void 0 ? "all" : _c, _d = _b.scope, scope = _d === void 0 ? level === "xml" ? "strict" : "body" : _d;
      if (!text)
        return "";
      var decodeRegExp = decodeRegExps[level][scope], references = allNamedReferences[level].entities, isAttribute = scope === "attribute", isStrict = scope === "strict";
      return replaceUsingRegExp(text, decodeRegExp, function(entity) {
        return getDecodedEntity(entity, references, isAttribute, isStrict);
      });
    }
    exports2.decode = decode;
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  main: function() {
    return main;
  }
});
module.exports = __toCommonJS(src_exports);
init_kolmafia_polyfill();

// node_modules/grimoire-kolmafia/dist/index.js
init_kolmafia_polyfill();

// node_modules/grimoire-kolmafia/dist/args.js
init_kolmafia_polyfill();
var import_kolmafia = require("kolmafia");
function _createForOfIteratorHelper(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
var Args = /* @__PURE__ */ function() {
  function Args2() {
    _classCallCheck(this, Args2);
  }
  return _createClass(Args2, null, [{
    key: "custom",
    value: function(spec, _parser, valueHelpName) {
      var _a, _b, raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(function(option) {
        return option[0];
      });
      if ("default" in spec && raw_options && !raw_options.includes(spec.default))
        throw "Invalid default value ".concat(spec.default);
      return _objectSpread(_objectSpread({}, spec), {}, {
        valueHelpName: valueHelpName,
        parser: function(value3) {
          var parsed_value = _parser(value3);
          return parsed_value === void 0 || parsed_value instanceof ParseError ? parsed_value : raw_options && !raw_options.includes(parsed_value) ? new ParseError("received ".concat(value3, " which was not in the allowed options")) : parsed_value;
        },
        options: (_b = spec.options) === null || _b === void 0 ? void 0 : _b.map(function(a) {
          return ["".concat(a[0]), a[1]];
        })
      });
    }
  }, {
    key: "arrayFromArg",
    value: function(spec, argFromSpec) {
      var _a, _b, _c, spec_without_default = _objectSpread({}, spec);
      "default" in spec_without_default && delete spec_without_default.default;
      var arg = argFromSpec.call(this, spec_without_default), raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(function(option) {
        return option[0];
      });
      if ("default" in spec && raw_options) {
        var _iterator3 = _createForOfIteratorHelper(spec.default), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var default_entry = _step3.value;
            if (!raw_options.includes(default_entry)) throw "Invalid default value ".concat(spec.default);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      var separator = (_b = spec.separator) !== null && _b !== void 0 ? _b : ",", arrayParser = function(value3) {
        var values = value3.split(separator);
        spec.noTrim || (values = values.map(function(v) {
          return v.trim();
        }));
        var result = values.map(function(v) {
          return arg.parser(v);
        }), error = result.find(function(v) {
          return v instanceof ParseError;
        });
        if (error) return error;
        var failure_index = result.indexOf(void 0);
        return failure_index !== -1 ? new ParseError("components expected ".concat(arg.valueHelpName, " but could not parse ").concat(values[failure_index])) : result;
      };
      return _objectSpread(_objectSpread({}, spec), {}, {
        valueHelpName: "".concat(arg.valueHelpName).concat(separator, " ").concat(arg.valueHelpName).concat(separator, " ..."),
        parser: arrayParser,
        options: (_c = spec.options) === null || _c === void 0 ? void 0 : _c.map(function(a) {
          return ["".concat(a[0]), a[1]];
        })
      });
    }
  }, {
    key: "string",
    value: function(spec) {
      return this.custom(spec, function(value3) {
        return value3;
      }, "TEXT");
    }
  }, {
    key: "strings",
    value: function(spec) {
      return this.arrayFromArg(spec, this.string);
    }
  }, {
    key: "number",
    value: function(spec) {
      return this.custom(spec, function(value3) {
        return isNaN(Number(value3)) ? void 0 : Number(value3);
      }, "NUMBER");
    }
  }, {
    key: "numbers",
    value: function(spec) {
      return this.arrayFromArg(spec, this.number);
    }
  }, {
    key: "boolean",
    value: function(spec) {
      return this.custom(spec, function(value3) {
        if (value3.toLowerCase() === "true") return !0;
        if (value3.toLowerCase() === "false") return !1;
      }, "BOOLEAN");
    }
  }, {
    key: "booleans",
    value: function(spec) {
      return this.arrayFromArg(spec, this.boolean);
    }
  }, {
    key: "flag",
    value: function(spec) {
      return this.custom(spec, function(value3) {
        if (value3.toLowerCase() === "true") return !0;
        if (value3.toLowerCase() === "false") return !1;
      }, "FLAG");
    }
  }, {
    key: "class",
    value: function(spec) {
      return this.custom(spec, function(value3) {
        var match = import_kolmafia.Class.get(value3);
        if (match.toString().toUpperCase() === value3.toString().toUpperCase() || !isNaN(Number(value3))) return match;
      }, "CLASS");
    }
  }, {
    key: "classes",
    value: function(spec) {
      return this.arrayFromArg(spec, this.class);
    }
  }, {
    key: "effect",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Effect.get, "EFFECT");
    }
  }, {
    key: "effects",
    value: function(spec) {
      return this.arrayFromArg(spec, this.effect);
    }
  }, {
    key: "familiar",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Familiar.get, "FAMILIAR");
    }
  }, {
    key: "familiars",
    value: function(spec) {
      return this.arrayFromArg(spec, this.familiar);
    }
  }, {
    key: "item",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Item.get, "ITEM");
    }
  }, {
    key: "items",
    value: function(spec) {
      return this.arrayFromArg(spec, this.item);
    }
  }, {
    key: "location",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Location.get, "LOCATION");
    }
  }, {
    key: "locations",
    value: function(spec) {
      return this.arrayFromArg(spec, this.location);
    }
  }, {
    key: "monster",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Monster.get, "MONSTER");
    }
  }, {
    key: "monsters",
    value: function(spec) {
      return this.arrayFromArg(spec, this.monster);
    }
  }, {
    key: "path",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Path.get, "PATH");
    }
  }, {
    key: "paths",
    value: function(spec) {
      return this.arrayFromArg(spec, this.path);
    }
  }, {
    key: "skill",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Skill.get, "SKILL");
    }
  }, {
    key: "skills",
    value: function(spec) {
      return this.arrayFromArg(spec, this.skill);
    }
    /**
     * Create a group of arguments that will be printed separately in the help.
     *
     * Note that keys in the group must still be globally distinct.
     *
     * @param groupName The display name for the group in help.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     */
  }, {
    key: "group",
    value: function(groupName, args2) {
      return {
        name: groupName,
        args: args2
      };
    }
    /**
     * Create a set of input arguments for a script.
     * @param scriptName Prefix for property names; often the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @param options Config options for the args and arg parser.
     * @returns An object which can hold parsed argument values. The keys of this
     *    object are identical to the keys in 'args'.
     */
  }, {
    key: "create",
    value: function(scriptName, scriptHelp, args2, options) {
      _traverse(args2, function(keySpec, key) {
        if (key === "help" || keySpec.key === "help") throw "help is a reserved argument name";
      });
      var argsWithHelp = _objectSpread(_objectSpread({}, args2), {}, {
        help: this.flag({
          help: "Show this message and exit.",
          setting: ""
        })
      }), res = _objectSpread(_objectSpread({}, _loadDefaultValues(argsWithHelp)), {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, specSymbol, argsWithHelp), scriptSymbol, scriptName), scriptHelpSymbol, scriptHelp), optionsSymbol, options != null ? options : {}));
      if (options != null && options.positionalArgs) {
        var keys = [], metadata = Args2.getMetadata(res);
        metadata.traverse(function(keySpec, key) {
          var _a;
          keys.push((_a = keySpec.key) !== null && _a !== void 0 ? _a : key);
        });
        var _iterator22 = _createForOfIteratorHelper(options.positionalArgs), _step22;
        try {
          for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
            var arg = _step22.value;
            if (!keys.includes(arg)) throw "Unknown key for positional arg: ".concat(arg);
          }
        } catch (err) {
          _iterator22.e(err);
        } finally {
          _iterator22.f();
        }
      }
      return res;
    }
    /**
     * Parse the command line input into the provided script arguments.
     * @param args An object to hold the parsed argument values, from Args.create(*).
     * @param command The command line input.
     * @param includeSettings If true, parse values from settings as well.
     */
  }, {
    key: "fill",
    value: function(args2, command) {
      var includeSettings = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, _a, metadata = Args2.getMetadata(args2), keys = /* @__PURE__ */ new Set(), flags = /* @__PURE__ */ new Set();
      if (metadata.traverse(function(keySpec, key) {
        var _a2, name = (_a2 = keySpec.key) !== null && _a2 !== void 0 ? _a2 : key;
        if (flags.has(name) || keys.has(name)) throw "Duplicate arg key ".concat(name, " is not allowed");
        keySpec.valueHelpName === "FLAG" ? flags.add(name) : keys.add(name);
      }), includeSettings && metadata.traverseAndMaybeSet(args2, function(keySpec, key) {
        var _a2, _b, setting = (_a2 = keySpec.setting) !== null && _a2 !== void 0 ? _a2 : "".concat(metadata.scriptName, "_").concat((_b = keySpec.key) !== null && _b !== void 0 ? _b : key);
        if (setting !== "") {
          var value_str = (0, import_kolmafia.getProperty)(setting);
          if (value_str !== "")
            return parseAndValidate(keySpec, "Setting ".concat(setting), value_str);
        }
      }), !(command === void 0 || command === "")) {
        var parsed = new CommandParser(command, keys, flags, (_a = metadata.options.positionalArgs) !== null && _a !== void 0 ? _a : []).parse();
        metadata.traverseAndMaybeSet(args2, function(keySpec, key) {
          var _a2, argKey = (_a2 = keySpec.key) !== null && _a2 !== void 0 ? _a2 : key, value_str = parsed.get(argKey);
          if (value_str !== void 0)
            return parseAndValidate(keySpec, "Argument ".concat(argKey), value_str);
        });
      }
    }
    /**
     * Parse command line input into a new set of script arguments.
     * @param scriptName Prefix to use in property names; typically the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param spec An object specifying the script arguments.
     * @param command The command line input.
     * @param options Config options for the args and arg parser.
     */
  }, {
    key: "parse",
    value: function(scriptName, scriptHelp, spec, command, options) {
      var args2 = this.create(scriptName, scriptHelp, spec, options);
      return this.fill(args2, command), args2;
    }
    /**
     * Print a description of the script arguments to the CLI.
     *
     * First, all top-level argument descriptions are printed in the order they
     * were defined. Afterwards, descriptions for groups of arguments are printed
     * in the order they were defined.
     *
     * @param args An object of parsed arguments, from Args.create(*).
     * @param maxOptionsToDisplay If given, do not list more than this many options for each arg.
     */
  }, {
    key: "showHelp",
    value: function(args2, maxOptionsToDisplay) {
      var _a, metadata = Args2.getMetadata(args2);
      (0, import_kolmafia.printHtml)("".concat(metadata.scriptHelp)), (0, import_kolmafia.printHtml)(""), (0, import_kolmafia.printHtml)("<b>".concat((_a = metadata.options.defaultGroupName) !== null && _a !== void 0 ? _a : "Options", ":</b>")), metadata.traverse(function(arg, key) {
        var _a2, _b, _c, _d, _e;
        if (!arg.hidden) {
          var nameText = "<font color='".concat((0, import_kolmafia.isDarkMode)() ? "yellow" : "blue", "'>").concat((_a2 = arg.key) !== null && _a2 !== void 0 ? _a2 : key, "</font>"), valueText = arg.valueHelpName === "FLAG" ? "" : "<font color='purple'>".concat(arg.valueHelpName, "</font>"), helpText = (_b = arg.help) !== null && _b !== void 0 ? _b : "", defaultText = "default" in arg ? "<font color='#888888'>[default: ".concat(arg.default, "]</font>") : "", settingText = arg.setting === "" ? "" : "<font color='#888888'>[setting: ".concat((_c = arg.setting) !== null && _c !== void 0 ? _c : "".concat(metadata.scriptName, "_").concat((_d = arg.key) !== null && _d !== void 0 ? _d : key), "]</font>");
          (0, import_kolmafia.printHtml)("&nbsp;&nbsp;".concat([nameText, valueText, "-", helpText, defaultText, settingText].join(" ")));
          var valueOptions = (_e = arg.options) !== null && _e !== void 0 ? _e : [];
          if (valueOptions.length < (maxOptionsToDisplay != null ? maxOptionsToDisplay : Number.MAX_VALUE)) {
            var _iterator3 = _createForOfIteratorHelper(valueOptions), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var option = _step3.value;
                option.length === 1 || option[1] === void 0 ? (0, import_kolmafia.printHtml)("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0])) : (0, import_kolmafia.printHtml)("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0], " - ").concat(option[1]));
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }
      }, function(group) {
        (0, import_kolmafia.printHtml)(""), (0, import_kolmafia.printHtml)("<b>".concat(group.name, ":</b>"));
      });
    }
    /**
     * Load the metadata information for a set of arguments. Only for advanced usage.
     *
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @returns A class containing metadata information.
     */
  }, {
    key: "getMetadata",
    value: function(args2) {
      return new WrappedArgMetadata(args2);
    }
  }]);
}(), ParseError = /* @__PURE__ */ _createClass(function ParseError2(message) {
  _classCallCheck(this, ParseError2), this.message = message;
}), specSymbol = Symbol("spec"), scriptSymbol = Symbol("script"), scriptHelpSymbol = Symbol("scriptHelp"), optionsSymbol = Symbol("options");
function parseAndValidate(arg, source, value3) {
  var parsed_value;
  try {
    parsed_value = arg.parser(value3);
  } catch (_a) {
    parsed_value = void 0;
  }
  if (parsed_value === void 0) throw "".concat(source, " expected ").concat(arg.valueHelpName, " but could not parse ").concat(value3);
  if (parsed_value instanceof ParseError) throw "".concat(source, " ").concat(parsed_value.message);
  return parsed_value;
}
var WrappedArgMetadata = /* @__PURE__ */ function() {
  function WrappedArgMetadata2(args2) {
    _classCallCheck(this, WrappedArgMetadata2), this.spec = args2[specSymbol], this.scriptName = args2[scriptSymbol], this.scriptHelp = args2[scriptHelpSymbol], this.options = args2[optionsSymbol];
  }
  return _createClass(WrappedArgMetadata2, [{
    key: "loadDefaultValues",
    value: function() {
      return _loadDefaultValues(this.spec);
    }
    /**
     * Traverse the spec and possibly generate a value for each argument.
     *
     * @param result The object to hold the resulting argument values, typically
     *    the result of loadDefaultValues().
     * @param setTo A function to generate an argument value from each arg spec.
     *    If this function returns undefined, then the argument value is unchanged.
     */
  }, {
    key: "traverseAndMaybeSet",
    value: function(result, setTo) {
      return _traverseAndMaybeSet(this.spec, result, setTo);
    }
    /**
     * Traverse the spec and call a method for each argument.
     *
     * @param process A function to call at each arg spec.
     */
  }, {
    key: "traverse",
    value: function(process, onGroup) {
      return _traverse(this.spec, process, onGroup);
    }
  }]);
}();
function _loadDefaultValues(spec) {
  var result = {};
  for (var k in spec) {
    var argSpec = spec[k];
    "args" in argSpec ? result[k] = _loadDefaultValues(argSpec.args) : "default" in argSpec ? result[k] = argSpec.default : result[k] = void 0;
  }
  return result;
}
function _traverseAndMaybeSet(spec, result, setTo) {
  var groups = [];
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec)
      groups.push([argSpec, k]);
    else {
      var value3 = setTo(argSpec, k);
      if (value3 === void 0) continue;
      result[k] = value3;
    }
  }
  for (var _i = 0, _groups = groups; _i < _groups.length; _i++) {
    var group_and_key = _groups[_i];
    _traverseAndMaybeSet(group_and_key[0].args, result[group_and_key[1]], setTo);
  }
}
function _traverse(spec, process, onGroup) {
  var groups = [];
  for (var k in spec) {
    var argSpec = spec[k];
    "args" in argSpec ? groups.push([argSpec, k]) : process(argSpec, k);
  }
  for (var _i2 = 0, _groups2 = groups; _i2 < _groups2.length; _i2++) {
    var group_and_key = _groups2[_i2];
    onGroup == null || onGroup(group_and_key[0], group_and_key[1]), _traverse(group_and_key[0].args, process, onGroup);
  }
}
var CommandParser = /* @__PURE__ */ function() {
  function CommandParser2(command, keys, flags, positionalArgs) {
    _classCallCheck(this, CommandParser2), this.command = command, this.index = 0, this.keys = keys, this.flags = flags, this.positionalArgs = positionalArgs, this.positionalArgsParsed = 0;
  }
  return _createClass(CommandParser2, [{
    key: "parse",
    value: function() {
      var _a, _b, _c, _d;
      this.index = 0;
      for (var result = /* @__PURE__ */ new Map(); !this.finished(); ) {
        var parsing_negative_flag = !1;
        this.peek() === "!" && (parsing_negative_flag = !0, this.consume(["!"]));
        var startIndex = this.index, key = this.parseKey();
        if (result.has(key))
          throw "Duplicate key ".concat(key, " (first set to ").concat((_a = result.get(key)) !== null && _a !== void 0 ? _a : "", ")");
        if (this.flags.has(key)) {
          if (result.set(key, parsing_negative_flag ? "false" : "true"), this.peek() === "=") throw "Flag ".concat(key, " cannot be assigned a value");
          this.finished() || this.consume([" "]), this.prevUnquotedKey = void 0;
        } else if (this.keys.has(key)) {
          this.consume(["=", " "]);
          var value3 = this.parseValue();
          ["'", '"'].includes((_b = this.prev()) !== null && _b !== void 0 ? _b : "") ? this.prevUnquotedKey = void 0 : this.prevUnquotedKey = key, this.finished() || this.consume([" "]), result.set(key, value3);
        } else if (this.positionalArgsParsed < this.positionalArgs.length && this.peek() !== "=") {
          var positionalKey = this.positionalArgs[this.positionalArgsParsed];
          this.positionalArgsParsed++, this.index = startIndex;
          var _value = this.parseValue();
          if (["'", '"'].includes((_c = this.prev()) !== null && _c !== void 0 ? _c : "") ? this.prevUnquotedKey = void 0 : this.prevUnquotedKey = key, this.finished() || this.consume([" "]), result.has(positionalKey)) throw "Cannot assign ".concat(_value, " to ").concat(positionalKey, " (positionally) since ").concat(positionalKey, " was already set to ").concat((_d = result.get(positionalKey)) !== null && _d !== void 0 ? _d : "");
          result.set(positionalKey, _value);
        } else
          throw this.prevUnquotedKey && this.peek() !== "=" ? "Unknown argument: ".concat(key, " (if this should have been parsed as part of ").concat(this.prevUnquotedKey, ", you should surround the entire value in quotes)") : "Unknown argument: ".concat(key);
      }
      return result;
    }
    /**
     * @returns True if the entire command has been parsed.
     */
  }, {
    key: "finished",
    value: function() {
      return this.index >= this.command.length;
    }
    /**
     * @returns The next character to parse, if it exists.
     */
  }, {
    key: "peek",
    value: function() {
      if (!(this.index >= this.command.length))
        return this.command.charAt(this.index);
    }
    /**
     * @returns The character just parsed, if it exists.
     */
  }, {
    key: "prev",
    value: function() {
      if (!(this.index <= 0) && !(this.index >= this.command.length + 1))
        return this.command.charAt(this.index - 1);
    }
    /**
     * Advance the internal marker over the next expected character.
     * Throws an error on unexpected characters.
     *
     * @param allowed Characters that are expected.
     */
  }, {
    key: "consume",
    value: function(allowed) {
      var _a;
      if (this.finished()) throw "Expected ".concat(allowed);
      allowed.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "") && (this.index += 1);
    }
    /**
     * Find the next occurance of one of the provided characters, or the end of
     * the string if the characters never appear again.
     *
     * @param searchValue The characters to locate.
     */
  }, {
    key: "findNext",
    value: function(searchValue) {
      var result = this.command.length, _iterator4 = _createForOfIteratorHelper(searchValue), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var value3 = _step4.value, index = this.command.indexOf(value3, this.index);
          index !== -1 && index < result && (result = index);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return result;
    }
    /**
     * Starting from the internal marker, parse a single key.
     * This also advances the internal marker.
     *
     * @returns The next key.
     */
  }, {
    key: "parseKey",
    value: function() {
      var keyEnd = this.findNext(["=", " "]), key = this.command.substring(this.index, keyEnd);
      return this.index = keyEnd, key;
    }
    /**
     * Starting from the internal marker, parse a single value.
     * This also advances the internal marker.
     *
     * Values are a single word or enclosed in matching quotes, i.e. one of:
     *    "[^"]*"
     *    '[^']*"
     *    [^'"][^ ]*
     *
     * @returns The next value.
     */
  }, {
    key: "parseValue",
    value: function() {
      var _a, _b, valueEnder = " ", quotes = ["'", '"'];
      quotes.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "") && (valueEnder = (_b = this.peek()) !== null && _b !== void 0 ? _b : "", this.consume([valueEnder]));
      var valueEnd = this.findNext([valueEnder]), value3 = this.command.substring(this.index, valueEnd);
      if (valueEnder !== " " && valueEnd === this.command.length)
        throw "No closing ".concat(valueEnder, " found for ").concat(valueEnder).concat(value3);
      return this.index = valueEnd, valueEnder !== " " && this.consume([valueEnder]), value3;
    }
  }]);
}();

// node_modules/grimoire-kolmafia/dist/combat.js
init_kolmafia_polyfill();
var import_kolmafia19 = require("kolmafia");

// node_modules/libram/dist/index.js
init_kolmafia_polyfill();

// node_modules/libram/dist/combat.js
init_kolmafia_polyfill();
var import_kolmafia6 = require("kolmafia");

// node_modules/libram/dist/lib.js
init_kolmafia_polyfill();
var import_kolmafia5 = require("kolmafia");

// node_modules/libram/dist/logger.js
init_kolmafia_polyfill();
var import_kolmafia2 = require("kolmafia");
function _classCallCheck2(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties2(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey2(o.key), o);
  }
}
function _createClass2(e, r, t) {
  return r && _defineProperties2(e.prototype, r), t && _defineProperties2(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _defineProperty2(e, r, t) {
  return (r = _toPropertyKey2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey2(t) {
  var i = _toPrimitive2(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive2(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
var LogLevels;
(function(LogLevels2) {
  LogLevels2[LogLevels2.NONE = 0] = "NONE", LogLevels2[LogLevels2.ERROR = 1] = "ERROR", LogLevels2[LogLevels2.WARNING = 2] = "WARNING", LogLevels2[LogLevels2.INFO = 3] = "INFO", LogLevels2[LogLevels2.DEBUG = 4] = "DEBUG";
})(LogLevels || (LogLevels = {}));
var defaultHandlers = _defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2({}, LogLevels.INFO, function(message) {
  (0, import_kolmafia2.printHtml)("<b>[Libram Info]</b> ".concat(message)), (0, import_kolmafia2.logprint)("[Libram] ".concat(message));
}), LogLevels.WARNING, function(message) {
  (0, import_kolmafia2.printHtml)('<span style="background: orange; color: white;"><b>[Libram Warning]</b> '.concat(message, "</span>")), (0, import_kolmafia2.logprint)("[Libram] ".concat(message));
}), LogLevels.ERROR, function(error) {
  (0, import_kolmafia2.printHtml)('<span style="background: red; color: white;"><b>[Libram Error]</b> '.concat(error.toString(), "</span>")), (0, import_kolmafia2.logprint)("[Libram] ".concat(error));
}), LogLevels.DEBUG, function(message) {
  (0, import_kolmafia2.printHtml)('<span style="background: red; color: white;"><b>[Libram Debug]</b> '.concat(message, "</span>")), (0, import_kolmafia2.logprint)("[Libram] ".concat(message));
}), Logger = /* @__PURE__ */ function() {
  function Logger2() {
    _classCallCheck2(this, Logger2), _defineProperty2(this, "handlers", defaultHandlers);
  }
  return _createClass2(Logger2, [{
    key: "level",
    get: function() {
      return Logger2.currentLevel;
    }
  }, {
    key: "setLevel",
    value: function(level) {
      Logger2.currentLevel = level;
    }
  }, {
    key: "setHandler",
    value: function(level, callback) {
      this.handlers[level] = callback;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "log",
    value: function(level, message) {
      this.level >= level && this.handlers[level](message);
    }
  }, {
    key: "info",
    value: function(message) {
      this.log(LogLevels.INFO, message);
    }
  }, {
    key: "warning",
    value: function(message) {
      this.log(LogLevels.WARNING, message);
    }
  }, {
    key: "error",
    value: function(message) {
      this.log(LogLevels.ERROR, message);
    }
  }, {
    key: "debug",
    value: function(message) {
      this.log(LogLevels.DEBUG, message);
    }
  }]);
}();
_defineProperty2(Logger, "currentLevel", LogLevels.ERROR);
var logger_default = new Logger();

// node_modules/libram/dist/property.js
init_kolmafia_polyfill();
var import_kolmafia3 = require("kolmafia");

// node_modules/libram/dist/propertyTyping.js
init_kolmafia_polyfill();

// node_modules/libram/dist/propertyTypes.js
init_kolmafia_polyfill();
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "debugTopMenuStyle", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "pingLogin", "pingStealthyTimein", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnAlwaysAdd", "svnAlwaysOverwrite", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "batWingsBatHoleEntrance", "batWingsBatratBurrow", "batWingsBeanbatChamber", "batWingsGuanoJunction", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "booPeakLit", "bootsCharged", "breakfastCompleted", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "candyCaneSwordApartmentBuilding", "candyCaneSwordBlackForest", "candyCaneSwordBowlingAlley", "candyCaneSwordCopperheadClub", "candyCaneSwordDailyDungeon", "candyCaneSwordDefiledCranny", "candyCaneSwordFunHouse", "candyCaneSwordShore", "candyCaneSwordWarFratRoom", "candyCaneSwordWarFratZetas", "candyCaneSwordWarHippyBait", "candyCaneSwordWarHippyLine", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "crimbo23ArmoryAtWar", "crimbo23BarAtWar", "crimbo23CafeAtWar", "crimbo23CottageAtWar", "crimbo23FoundryAtWar", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "errorOnAmbiguousFold", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "floristFriarAvailable", "floristFriarChecked", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasSushiMat", "hasTwinkleVision", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "implementGlitchItem", "intenseCurrents", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "ledCandleDropped", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "noncombatForcerActive", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsFloristFriar", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "pirateRealmUnlockedAnemometer", "pirateRealmUnlockedBlunderbuss", "pirateRealmUnlockedBreastplate", "pirateRealmUnlockedClipper", "pirateRealmUnlockedCrabsicle", "pirateRealmUnlockedFlag", "pirateRealmUnlockedFork", "pirateRealmUnlockedGoldRing", "pirateRealmUnlockedManOWar", "pirateRealmUnlockedPlushie", "pirateRealmUnlockedRadioRing", "pirateRealmUnlockedRhum", "pirateRealmUnlockedScurvySkillbook", "pirateRealmUnlockedShavingCream", "pirateRealmUnlockedSpyglass", "pirateRealmUnlockedTattoo", "pirateRealmUnlockedThirdCrewmate", "pirateRealmUnlockedTikiSkillbook", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pyramidBombUsed", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "replicaChateauAvailable", "replicaNeverendingPartyAlways", "replicaWitchessSetAvailable", "requireBoxServants", "requireSewerTestItems", "restUsingCampAwayTent", "restUsingChateau", "ROMOfOptimalityAvailable", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "youRobotScavenged", "_2002MrStoreCreditsCollected", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_aprilShower", "_armyToddlerCast", "_aug1Cast", "_aug2Cast", "_aug3Cast", "_aug4Cast", "_aug5Cast", "_aug6Cast", "_aug7Cast", "_aug8Cast", "_aug9Cast", "_aug10Cast", "_aug11Cast", "_aug12Cast", "_aug13Cast", "_aug14Cast", "_aug15Cast", "_aug16Cast", "_aug17Cast", "_aug18Cast", "_aug19Cast", "_aug20Cast", "_aug21Cast", "_aug22Cast", "_aug23Cast", "_aug24Cast", "_aug25Cast", "_aug26Cast", "_aug27Cast", "_aug28Cast", "_aug29Cast", "_aug30Cast", "_aug31Cast", "_augTodayCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blackMonolithUsed", "_blankoutUsed", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_candyCaneSwordBackAlley", "_candyCaneSwordHauntedBedroom", "_candyCaneSwordHauntedLibrary", "_candyCaneSwordLyle", "_candyCaneSwordMadnessBakery", "_candyCaneSwordOvergrownLot", "_candyCaneSwordOvergrownShrine", "_candyCaneSwordPalindome", "_candyCaneSwordSouthOfTheBorder", "_candyCaneSwordSpookyForest", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chibiChanged", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circadianRhythmsRecalled", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboTraining", "_crimboTree", "_cursedKegUsed", "_cursedMicrowaveUsed", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_emberingHulkFought", "_entauntaunedToday", "_envyfishEggUsed", "_epicMcTwistUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_extraGreasySliderEaten", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_frostyMugUsed", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_hodgmansBlanketDrunk", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatLost", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_leafAntEggCrafted", "_leafDayShortenerCrafted", "_leafTattooCrafted", "_leavesJumped", "_legendaryBeat", "_licenseToChillUsed", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_mapToACandyRichBlockUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_miniKiwiIntoxicatingSpiritsBought", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mulliganStewEaten", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pickleJuiceDrunk", "_pingPongGame", "_pirateBellowUsed", "_pirateForkUsed", "_pirateRealmSoldCompass", "_pirateRealmWindicleUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_punchingMirrorUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_replicaSnowconeTomeUsed", "_replicaResolutionLibramUsed", "_replicaSmithsTomeUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_saladForkUsed", "_seaJellyHarvested", "_septEmberBalanceChecked", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shadowAffinityToday", "_shadowForestLooted", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_snowballFactoryUsed", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_sotParcelReturned", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_structuralEmberUsed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_tiedUpFlamingLeafletFought", "_tiedUpFlamingMonsteraFought", "_tiedUpLeaviathanFought", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voodooSnuffUsed", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_yamBatteryUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"], numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "pingDefaultTestPings", "pingLoginCount", "pingLoginGoal", "pingLoginThreshold", "pingTestPings", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_beachTides", "_g9Effect", "8BitBonusTurns", "8BitScore", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "asolDeferredPoints", "asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableMrStore2002Credits", "availableQuarters", "availableSeptEmbers", "availableStoreCredits", "availableSwagger", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bodyguardCharge", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "bookOfFactsGummi", "bookOfFactsPinata", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "bwApronMealsEaten", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chibiAlignment", "chibiBirthday", "chibiFitness", "chibiIntelligence", "chibiLastVisit", "chibiSocialization", "chilledToTheBone", "cinchoSaltAndLime", "cinderellaMinutesToMidnight", "cinderellaScore", "cocktailSummons", "commerceGhostCombats", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "currentReplicaStoreYear", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "dartsThrown", "daycareEquipment", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilYachtzeeChoice", "encountersUntilNEPChoice", "encountersUntilSRChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "getsYouDrunkTurnsLeft", "ghostPepperTurnsLeft", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "jarlsbergPoints", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarsElbowNC", "lastFriarsHeartNC", "lastFriarsNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastShadowForgeUnlockAdventure", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "legacyPoints", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniMartinisDrunk", "moleTunnelLevel", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nextAprilBandTurn", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "pendingMapReflections", "pingpongSkill", "pirateRealmPlasticPiratesDefeated", "pirateRealmShipsDestroyed", "pirateRealmStormsEscaped", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "poolSharkCount", "poolSkill", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rockinRobinProgress", "romanCandelabraRedCasts", "romanCandelabraBlueCasts", "romanCandelabraYellowCasts", "romanCandelabraGreenCasts", "romanCandelabraPurpleCasts", "ROMOfOptimalityCost", "rumpelstiltskinKidsRescued", "rumpelstiltskinTurnsUsed", "rwbMonsterCount", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "screechCombats", "scriptMRULength", "seaodesFound", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel135", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel227", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "spookyVHSTapeMonsterTurn", "statbotUses", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "wereProfessorBite", "wereProfessorKick", "wereProfessorLiver", "wereProfessorPoints", "wereProfessorRend", "wereProfessorResearchPoints", "wereProfessorStomach", "wereProfessorTransformTurns", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_ancestralRecallCasts", "_antihangoverBonus", "_aprilBandInstruments", "_aprilBandSaxophoneUses", "_aprilBandTomUses", "_aprilBandTubaUses", "_aprilBandStaffUses", "_aprilBandPiccoloUses", "_astralDrops", "_augSkillsCast", "_automatedFutureManufactures", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_batWingsCauldronUsed", "_batWingsFreeFights", "_batWingsRestUsed", "_batWingsSwoopUsed", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_birdsSoughtToday", "_bookOfFactsWishes", "_bookOfFactsTatters", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carnivorousPottedPlantWins", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chibiAdventures", "_chipBags", "_chocolateCigarsUsed", "_chocolateCoveredPingPongBallsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_cinchUsed", "_cinchoRests", "_circadianRhythmsAdventures", "_clanFortuneConsultUses", "_clipartSummons", "_cloversPurchased", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_cookbookbatCrafting", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_dailySpecialPrice", "_dartsLeft", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_douseFoeUses", "_dreamJarDrops", "_drunkPygmyBanishes", "_edDefeats", "_edLashCount", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_extraTimeUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_greyYouAdventures", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_lawOfAveragesUsed", "_leafblowerML", "_leafLassosCrafted", "_leafMonstersFought", "_leavesBurned", "_legionJackhammerCrafting", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mapToACandyRichBlockDrops", "_mayamRests", "_mayflowerDrops", "_mayflySummons", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_mildEvilPerpetrated", "_mimicEggsDonated", "_mimicEggsObtained", "_miniKiwiDrops", "_miniMartiniDrops", "_monkeyPawWishesUsed", "_monsterHabitatsFightsLeft", "_monsterHabitatsRecalled", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_pieDrops", "_piePartsCount", "_pirateRealmGold", "_pirateRealmGrog", "_pirateRealmGrub", "_pirateRealmGuns", "_pirateRealmIslandMonstersDefeated", "_pirateRealmSailingTurns", "_pirateRealmShipSpeed", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_questPartyFairItemsOpened", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shadowBricksUsed", "_shadowRiftCombats", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_slimeVialsHarvested", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_speakeasyFreeFights", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_surprisinglySweetSlashUsed", "_surprisinglySweetStabUsed", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_tearawayPantsAdvs", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed"], monsterProperties = ["beGregariousMonster", "bodyguardChatMonster", "cameraMonster", "chateauMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "holdHandsMonster", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "monkeyPointMonster", "motifMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "rufusDesiredEntity", "rwbMonster", "screencappedMonster", "spookyPuttyMonster", "spookyVHSTapeMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_monsterHabitatsMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_prankCardMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_trickCoinMonster", "_voteMonster"], locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "lastAdventure", "nextAdventure", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "rwbLocation", "sourceOracleTarget", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation", "_lastPirateRealmIsland", "_sotParcelLocation"], stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandBufferGCLI", "commandBufferTabbedChat", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "pingDefaultTestPage", "pingLatest", "pingLoginAbort", "pingLoginCheck", "pingLoginFail", "pingLongest", "pingShortest", "pingTestPage", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "antiScientificMethod", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishedPhyla", "banishingShoutMonsters", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beastSkillsAvailable", "beastSkillsKnown", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "chibiName", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "commerceGhostItem", "counterScript", "copperheadClubHazard", "crimbo23ArmoryControl", "crimbo23BarControl", "crimbo23CafeControl", "crimbo23CottageControl", "crimbo23FoundryControl", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "doctorBagQuestItem", "dolphinItem", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "everfullDartPerks", "extraCosmeticModifiers", "familiarScript", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestBooze", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "lastSelectedFaxbot", "lastSuccessfulFaxbot", "latteIngredients", "latteModifier", "latteUnlocks", "ledCandleMode", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "mayoInMouth", "mayoMinderSetting", "merkinQuestPath", "mimicEggMonsters", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mpAutoRecoveryItems", "muffinOnOrder", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpClipper", "questESpEVE", "questESpFakeMedium", "questESpGore", "questESpJunglePun", "questESpOutOfOrder", "questESpSerum", "questESpSmokes", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11MacGuffin", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12HippyFrat", "questL12War", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questRufus", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayCounters", "retroCapeSuperhero", "retroCapeWashingInstructions", "royalty", "rufusDesiredArtifact", "rufusDesiredItems", "rufusQuestTarget", "rufusQuestType", "scriptMRUList", "seahorseName", "shadowLabyrinthGoal", "shadowRiftIngress", "shenQuestItem", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trainsetConfiguration", "trapperOre", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "walfordBucketItem", "warProgress", "watchedPreferences", "wereProfessorAdvancedResearch", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "_automatedFutureSide", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_citizenZone", "_citizenZoneMods", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_currentDartboard", "_dailySpecial", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_futuristicCollarModifier", "_futuristicHatModifier", "_futuristicShirtModifier", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatStarted", "_locketMonstersFought", "_mayamSymbolsUsed", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_pirateRealmCrewmate", "_pirateRealmCrewmate1", "_pirateRealmCrewmate2", "_pirateRealmCrewmate3", "_pirateRealmCurio", "_pirateRealmShip", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_questPirateRealm", "_roboDrinks", "_roninStoragePulls", "_savageBeastMods", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_trickOrTreatBlock", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"], numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494", "choiceAdventure1505", "choiceAdventure1528"], familiarProperties = ["commaFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar"], statProperties = ["nsChallenge1", "snojoSetting"], phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum", "_circadianRhythmsPhylum"];

// node_modules/libram/dist/propertyTyping.js
var booleanPropertiesSet = new Set(booleanProperties), numericPropertiesSet = new Set(numericProperties), numericOrStringPropertiesSet = new Set(numericOrStringProperties), stringPropertiesSet = new Set(stringProperties), locationPropertiesSet = new Set(locationProperties), monsterPropertiesSet = new Set(monsterProperties), familiarPropertiesSet = new Set(familiarProperties), statPropertiesSet = new Set(statProperties), phylumPropertiesSet = new Set(phylumProperties);
function isBooleanProperty(property) {
  return booleanPropertiesSet.has(property);
}
function isNumericProperty(property) {
  return numericPropertiesSet.has(property);
}
function isNumericOrStringProperty(property) {
  return numericOrStringPropertiesSet.has(property);
}
function isStringProperty(property) {
  return stringPropertiesSet.has(property);
}
function isLocationProperty(property) {
  return locationPropertiesSet.has(property);
}
function isMonsterProperty(property) {
  return monsterPropertiesSet.has(property);
}
function isFamiliarProperty(property) {
  return familiarPropertiesSet.has(property);
}
function isStatProperty(property) {
  return statPropertiesSet.has(property);
}
function isPhylumProperty(property) {
  return phylumPropertiesSet.has(property);
}

// node_modules/libram/dist/property.js
function ownKeys2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t), !0).forEach(function(r2) {
      _defineProperty3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck3(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties3(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey3(o.key), o);
  }
}
function _createClass3(e, r, t) {
  return r && _defineProperties3(e.prototype, r), t && _defineProperties3(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _defineProperty3(e, r, t) {
  return (r = _toPropertyKey3(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey3(t) {
  var i = _toPrimitive3(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive3(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray2(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray2(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray2(r, a) : void 0;
  }
}
function _arrayLikeToArray2(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
var createPropertyGetter = function(transform) {
  return function(property, default_) {
    var value3 = (0, import_kolmafia3.getProperty)(property);
    return default_ !== void 0 && value3 === "" ? default_ : transform(value3, property);
  };
}, createMafiaClassPropertyGetter = function(Type, toType) {
  return createPropertyGetter(function(value3) {
    if (value3 === "") return null;
    var v = toType(value3);
    return v === Type.none ? null : v;
  });
}, getString = createPropertyGetter(function(value3) {
  return value3;
}), getCommaSeparated = createPropertyGetter(function(value3) {
  return value3.split(/, ?/);
}), getBoolean = createPropertyGetter(function(value3) {
  return value3 === "true";
}), getNumber = createPropertyGetter(function(value3) {
  return Number(value3);
}), getBounty = createMafiaClassPropertyGetter(import_kolmafia3.Bounty, import_kolmafia3.toBounty), getClass = createMafiaClassPropertyGetter(import_kolmafia3.Class, import_kolmafia3.toClass), getCoinmaster = createMafiaClassPropertyGetter(import_kolmafia3.Coinmaster, import_kolmafia3.toCoinmaster), getEffect = createMafiaClassPropertyGetter(import_kolmafia3.Effect, import_kolmafia3.toEffect), getElement = createMafiaClassPropertyGetter(import_kolmafia3.Element, import_kolmafia3.toElement), getFamiliar = createMafiaClassPropertyGetter(import_kolmafia3.Familiar, import_kolmafia3.toFamiliar), getItem = createMafiaClassPropertyGetter(import_kolmafia3.Item, import_kolmafia3.toItem), getLocation = createMafiaClassPropertyGetter(import_kolmafia3.Location, import_kolmafia3.toLocation), getMonster = createMafiaClassPropertyGetter(import_kolmafia3.Monster, import_kolmafia3.toMonster), getPhylum = createMafiaClassPropertyGetter(import_kolmafia3.Phylum, import_kolmafia3.toPhylum), getServant = createMafiaClassPropertyGetter(import_kolmafia3.Servant, import_kolmafia3.toServant), getSkill = createMafiaClassPropertyGetter(import_kolmafia3.Skill, import_kolmafia3.toSkill), getSlot = createMafiaClassPropertyGetter(import_kolmafia3.Slot, import_kolmafia3.toSlot), getStat = createMafiaClassPropertyGetter(import_kolmafia3.Stat, import_kolmafia3.toStat), getThrall = createMafiaClassPropertyGetter(import_kolmafia3.Thrall, import_kolmafia3.toThrall);
function get(property, _default) {
  var value3 = getString(property);
  if (isBooleanProperty(property)) {
    var _getBoolean;
    return (_getBoolean = getBoolean(property, _default)) !== null && _getBoolean !== void 0 ? _getBoolean : !1;
  } else if (isNumericProperty(property)) {
    var _getNumber;
    return (_getNumber = getNumber(property, _default)) !== null && _getNumber !== void 0 ? _getNumber : 0;
  } else {
    if (isNumericOrStringProperty(property))
      return value3.match(/^\d+$/) ? parseInt(value3) : value3;
    if (isLocationProperty(property))
      return getLocation(property, _default);
    if (isMonsterProperty(property))
      return getMonster(property, _default);
    if (isFamiliarProperty(property))
      return getFamiliar(property, _default);
    if (isStatProperty(property))
      return getStat(property, _default);
    if (isPhylumProperty(property))
      return getPhylum(property, _default);
    if (isStringProperty(property))
      return value3;
  }
  return _default instanceof import_kolmafia3.Location ? getLocation(property, _default) : _default instanceof import_kolmafia3.Monster ? getMonster(property, _default) : _default instanceof import_kolmafia3.Familiar ? getFamiliar(property, _default) : _default instanceof import_kolmafia3.Stat ? getStat(property, _default) : _default instanceof import_kolmafia3.Phylum ? getPhylum(property, _default) : typeof _default == "boolean" ? value3 === "true" ? !0 : value3 === "false" ? !1 : _default : typeof _default == "number" ? value3 === "" ? _default : parseInt(value3) : value3 === "" ? _default === void 0 ? "" : _default : value3;
}
function _set(property, value3) {
  var stringValue = value3 === null ? "" : value3.toString();
  return (0, import_kolmafia3.setProperty)(property, stringValue), value3;
}
function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), prop = _Object$entries$_i[0], value3 = _Object$entries$_i[1];
    _set(prop, value3);
  }
}
var PropertiesManager = /* @__PURE__ */ function() {
  function PropertiesManager2() {
    _classCallCheck3(this, PropertiesManager2), _defineProperty3(this, "properties", {});
  }
  return _createClass3(PropertiesManager2, [{
    key: "storedValues",
    get: function() {
      return this.properties;
    }
    /**
     * Sets a collection of properties to the given values, storing the old values.
     *
     * @param propertiesToSet A Properties object, keyed by property name.
     */
  }, {
    key: "set",
    value: function(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), propertyName = _Object$entries2$_i[0], propertyValue = _Object$entries2$_i[1];
        propertyName in this.properties || (this.properties[propertyName] = (0, import_kolmafia3.propertyExists)(propertyName) ? get(propertyName) : PropertiesManager2.EMPTY_PREFERENCE), _set(propertyName, propertyValue);
      }
    }
    /**
     * Sets a collection of choice adventure properties to the given values, storing the old values.
     *
     * @param choicesToSet An object keyed by choice adventure number.
     */
  }, {
    key: "setChoices",
    value: function(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(function(_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2), choiceNumber = _ref6[0], choiceValue = _ref6[1];
        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
    /**
     * Sets a single choice adventure property to the given value, storing the old value.
     *
     * @param choiceToSet The number of the choice adventure to set the property for.
     * @param value The value to assign to that choice adventure.
     */
  }, {
    key: "setChoice",
    value: function(choiceToSet, value3) {
      this.setChoices(_defineProperty3({}, choiceToSet, value3));
    }
    /**
     * Resets the given properties to their original stored value. Does not delete entries from the manager.
     *
     * @param properties Collection of properties to reset.
     */
  }, {
    key: "reset",
    value: function() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++)
        properties[_key] = arguments[_key];
      for (var _i3 = 0, _properties = properties; _i3 < _properties.length; _i3++) {
        var property = _properties[_i3];
        if (property in this.properties) {
          var value3 = this.properties[property];
          value3 === PropertiesManager2.EMPTY_PREFERENCE ? (0, import_kolmafia3.removeProperty)(property) : value3 ? _set(property, value3) : _set(property, "");
        }
      }
    }
    /**
     * Iterates over all stored values, setting each property back to its original stored value. Does not delete entries from the manager.
     */
  }, {
    key: "resetAll",
    value: function() {
      setProperties(this.properties);
    }
    /**
     * Stops storing the original values of inputted properties.
     *
     * @param properties Properties for the manager to forget.
     */
  }, {
    key: "clear",
    value: function() {
      for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
        properties[_key2] = arguments[_key2];
      for (var _i4 = 0, _properties2 = properties; _i4 < _properties2.length; _i4++) {
        var property = _properties2[_i4];
        this.properties[property] && delete this.properties[property];
      }
    }
    /**
     * Clears all properties.
     */
  }, {
    key: "clearAll",
    value: function() {
      this.properties = {};
    }
    /**
     * Increases a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially raise.
     * @param value The minimum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMinimumValue",
    value: function(property, value3) {
      return get(property, 0) < value3 ? (this.set(_defineProperty3({}, property, value3)), !0) : !1;
    }
    /**
     * Decrease a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially lower.
     * @param value The maximum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMaximumValue",
    value: function(property, value3) {
      return get(property, 0) > value3 ? (this.set(_defineProperty3({}, property, value3)), !0) : !1;
    }
    /**
     * Creates a new PropertiesManager with identical stored values to this one.
     *
     * @returns A new PropertiesManager, with identical stored values to this one.
     */
  }, {
    key: "clone",
    value: function() {
      var newGuy = new PropertiesManager2();
      return newGuy.properties = this.storedValues, newGuy;
    }
    /**
     * Clamps a numeric property, modulating it up or down to fit within a specified range
     *
     * @param property The numeric property to clamp
     * @param min The lower bound for what we want the property to be allowed to be.
     * @param max The upper bound for what we want the property to be allowed to be.
     * @returns Whether we ended up changing the property or not.
     */
  }, {
    key: "clamp",
    value: function(property, min, max) {
      if (max < min) return !1;
      var start = get(property);
      return this.setMinimumValue(property, min), this.setMaximumValue(property, max), start !== get(property);
    }
    /**
     * Determines whether this PropertiesManager has identical stored values to another.
     *
     * @param other The PropertiesManager to compare to this one.
     * @returns Whether their StoredValues are identical.
     */
  }, {
    key: "equals",
    value: function(other) {
      var thisProps = Object.entries(this.storedValues), otherProps = new Map(Object.entries(other.storedValues));
      if (thisProps.length !== otherProps.size) return !1;
      for (var _i5 = 0, _thisProps = thisProps; _i5 < _thisProps.length; _i5++) {
        var _thisProps$_i = _slicedToArray(_thisProps[_i5], 2), propertyName = _thisProps$_i[0], propertyValue = _thisProps$_i[1];
        if (otherProps.get(propertyName) === propertyValue) return !1;
      }
      return !0;
    }
    /**
     * Merges a PropertiesManager onto this one, letting the input win in the event that both PropertiesManagers have a value stored.
     *
     * @param other The PropertiesManager to be merged onto this one.
     * @returns A new PropertiesManager with stored values from both its parents.
     */
  }, {
    key: "merge",
    value: function(other) {
      var newGuy = new PropertiesManager2();
      return newGuy.properties = _objectSpread2(_objectSpread2({}, this.properties), other.properties), newGuy;
    }
    /**
     * Merges an arbitrary collection of PropertiesManagers, letting the rightmost PropertiesManager win in the event of verlap.
     *
     * @param mergees The PropertiesManagers to merge together.
     * @returns A PropertiesManager that is just an amalgam of all the constituents.
     */
  }], [{
    key: "merge",
    value: function() {
      for (var _len3 = arguments.length, mergees = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)
        mergees[_key3] = arguments[_key3];
      return mergees.length === 0 ? new PropertiesManager2() : mergees.reduce(function(a, b) {
        return a.merge(b);
      });
    }
  }]);
}();
_defineProperty3(PropertiesManager, "EMPTY_PREFERENCE", Symbol("empty preference"));

// node_modules/libram/dist/template-string.js
init_kolmafia_polyfill();
var import_kolmafia4 = require("kolmafia");

// node_modules/libram/dist/utils.js
init_kolmafia_polyfill();
function _createForOfIteratorHelper2(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray3(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _slicedToArray2(r, e) {
  return _arrayWithHoles2(r) || _iterableToArrayLimit2(r, e) || _unsupportedIterableToArray3(r, e) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit2(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles2(r) {
  if (Array.isArray(r)) return r;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray3(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray3(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray3(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray3(r);
}
function _arrayLikeToArray3(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function notNull(value3) {
  return value3 !== null;
}
function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
function arrayToCountedMap(array) {
  if (!Array.isArray(array)) return array;
  var map = /* @__PURE__ */ new Map();
  return array.forEach(function(item4) {
    map.set(item4, (map.get(item4) || 0) + 1);
  }), map;
}
function countedMapToArray(map) {
  var _ref;
  return (_ref = []).concat.apply(_ref, _toConsumableArray(_toConsumableArray(map).map(function(_ref2) {
    var _ref3 = _slicedToArray2(_ref2, 2), item4 = _ref3[0], quantity = _ref3[1];
    return Array(quantity).fill(item4);
  })));
}
function countedMapToString(map) {
  return _toConsumableArray(map).map(function(_ref4) {
    var _ref5 = _slicedToArray2(_ref4, 2), item4 = _ref5[0], quantity = _ref5[1];
    return "".concat(quantity, " x ").concat(item4);
  }).join(", ");
}
function arrayContains(item4, array) {
  return array.includes(item4);
}
function setEqual(a, b) {
  var sortedA = _toConsumableArray(a).sort(), sortedB = _toConsumableArray(b).sort();
  return a.length === b.length && sortedA.every(function(item4, index) {
    return item4 === sortedB[index];
  });
}
function splitByCommasWithEscapes(str) {
  var returnValue = [], ignoreNext = !1, currentString = "", _iterator22 = _createForOfIteratorHelper2(str.split("")), _step22;
  try {
    for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
      var char = _step22.value;
      char === "\\" ? ignoreNext = !0 : (char == "," && !ignoreNext ? (returnValue.push(currentString.trim()), currentString = "") : currentString += char, ignoreNext = !1);
    }
  } catch (err) {
    _iterator22.e(err);
  } finally {
    _iterator22.f();
  }
  return returnValue.push(currentString.trim()), returnValue;
}
function arrayEquals(left, right) {
  return left.length !== right.length ? !1 : left.every(function(element, index) {
    return element === right[index];
  });
}
function undelay(delayedObject) {
  for (var _len2 = arguments.length, args2 = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
    args2[_key2 - 1] = arguments[_key2];
  return typeof delayedObject == "function" ? delayedObject.apply(void 0, args2) : delayedObject;
}
function makeByXFunction(source) {
  return function(options, alternateSource) {
    var _options$val, val = undelay(alternateSource != null ? alternateSource : source);
    return "default" in options ? (_options$val = options[val]) !== null && _options$val !== void 0 ? _options$val : options.default : options[val];
  };
}

// node_modules/libram/dist/template-string.js
var concatTemplateString = function(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
    placeholders[_key - 1] = arguments[_key];
  return literals.raw.reduce(function(acc, literal, i) {
    var _placeholders$i;
    return acc + literal + ((_placeholders$i = placeholders[i]) !== null && _placeholders$i !== void 0 ? _placeholders$i : "");
  }, "");
}, handleTypeGetError = function(Type, error) {
  var message = "".concat(error), match = message.match(RegExp("Bad ".concat(Type.name.toLowerCase(), " value: .*")));
  match ? (0, import_kolmafia4.print)("".concat(match[0], "; if you're certain that this ").concat(Type.name, " exists and is spelled correctly, please update KoLMafia"), "red") : (0, import_kolmafia4.print)(message);
}, createSingleConstant = function(Type, converter) {
  var tagFunction = function(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
      placeholders[_key2 - 1] = arguments[_key2];
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    try {
      return Type.get(input);
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0, import_kolmafia4.abort)();
  };
  return tagFunction.cls = Type, tagFunction.none = Type.none, tagFunction.get = function(name) {
    var value3 = converter(name);
    return value3 === Type.none ? null : value3;
  }, tagFunction;
}, createPluralConstant = function(Type) {
  var tagFunction = function(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)
      placeholders[_key3 - 1] = arguments[_key3];
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    if (input === "")
      return Type.all();
    try {
      return Type.get(splitByCommasWithEscapes(input));
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0, import_kolmafia4.abort)();
  };
  return tagFunction.all = function() {
    return Type.all();
  }, tagFunction;
}, $bounty = createSingleConstant(import_kolmafia4.Bounty, import_kolmafia4.toBounty), $bounties = createPluralConstant(import_kolmafia4.Bounty), $class = createSingleConstant(import_kolmafia4.Class, import_kolmafia4.toClass), $classes = createPluralConstant(import_kolmafia4.Class), $coinmaster = createSingleConstant(import_kolmafia4.Coinmaster, import_kolmafia4.toCoinmaster), $coinmasters = createPluralConstant(import_kolmafia4.Coinmaster), $effect = createSingleConstant(import_kolmafia4.Effect, import_kolmafia4.toEffect), $effects = createPluralConstant(import_kolmafia4.Effect), $element = createSingleConstant(import_kolmafia4.Element, import_kolmafia4.toElement), $elements = createPluralConstant(import_kolmafia4.Element), $familiar = createSingleConstant(import_kolmafia4.Familiar, import_kolmafia4.toFamiliar), $familiars = createPluralConstant(import_kolmafia4.Familiar), $item = createSingleConstant(import_kolmafia4.Item, import_kolmafia4.toItem), $items = createPluralConstant(import_kolmafia4.Item), $location = createSingleConstant(import_kolmafia4.Location, import_kolmafia4.toLocation), $locations = createPluralConstant(import_kolmafia4.Location), $modifier = createSingleConstant(import_kolmafia4.Modifier, import_kolmafia4.toModifier), $modifiers = createPluralConstant(import_kolmafia4.Modifier), $monster = createSingleConstant(import_kolmafia4.Monster, import_kolmafia4.toMonster), $monsters = createPluralConstant(import_kolmafia4.Monster), $path = createSingleConstant(import_kolmafia4.Path, import_kolmafia4.toPath), $paths = createPluralConstant(import_kolmafia4.Path), $phylum = createSingleConstant(import_kolmafia4.Phylum, import_kolmafia4.toPhylum), $phyla = createPluralConstant(import_kolmafia4.Phylum), $servant = createSingleConstant(import_kolmafia4.Servant, import_kolmafia4.toServant), $servants = createPluralConstant(import_kolmafia4.Servant), $skill = createSingleConstant(import_kolmafia4.Skill, import_kolmafia4.toSkill), $skills = createPluralConstant(import_kolmafia4.Skill), $slot = createSingleConstant(import_kolmafia4.Slot, import_kolmafia4.toSlot), $slots = createPluralConstant(import_kolmafia4.Slot), $stat = createSingleConstant(import_kolmafia4.Stat, import_kolmafia4.toStat), $stats = createPluralConstant(import_kolmafia4.Stat), $thrall = createSingleConstant(import_kolmafia4.Thrall, import_kolmafia4.toThrall), $thralls = createPluralConstant(import_kolmafia4.Thrall);

// node_modules/libram/dist/lib.js
var _templateObject;
var _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35;
function _defineProperties4(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey4(o.key), o);
  }
}
function _createClass4(e, r, t) {
  return r && _defineProperties4(e.prototype, r), t && _defineProperties4(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _toPropertyKey4(t) {
  var i = _toPrimitive4(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive4(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _classCallCheck4(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(t, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _inherits(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);
}
function _wrapNativeSuper(t) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = function(t2) {
    if (t2 === null || !_isNativeFunction(t2)) return t2;
    if (typeof t2 != "function") throw new TypeError("Super expression must either be null or a function");
    if (r !== void 0) {
      if (r.has(t2)) return r.get(t2);
      r.set(t2, Wrapper);
    }
    function Wrapper() {
      return _construct(t2, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t2.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t2);
  }, _wrapNativeSuper(t);
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function() {
    return !!t;
  })();
}
function _isNativeFunction(t) {
  try {
    return Function.toString.call(t).indexOf("[native code]") !== -1;
  } catch (n) {
    return typeof t == "function";
  }
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf(t);
}
function _createForOfIteratorHelper3(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray4(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _slicedToArray3(r, e) {
  return _arrayWithHoles3(r) || _iterableToArrayLimit3(r, e) || _unsupportedIterableToArray4(r, e) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray4(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray4(r, a) : void 0;
  }
}
function _arrayLikeToArray4(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit3(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles3(r) {
  if (Array.isArray(r)) return r;
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function isSong(skillOrEffect) {
  if (skillOrEffect instanceof import_kolmafia5.Effect && skillOrEffect.attributes.includes("song"))
    return !0;
  var skill = skillOrEffect instanceof import_kolmafia5.Effect ? (0, import_kolmafia5.toSkill)(skillOrEffect) : skillOrEffect;
  return skill.class === $class(_templateObject || (_templateObject = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
}
function have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  if (thing instanceof import_kolmafia5.Effect)
    return (0, import_kolmafia5.haveEffect)(thing) >= quantity;
  if (thing instanceof import_kolmafia5.Familiar)
    return (0, import_kolmafia5.haveFamiliar)(thing);
  if (thing instanceof import_kolmafia5.Item)
    return (0, import_kolmafia5.availableAmount)(thing) >= quantity;
  if (thing instanceof import_kolmafia5.Servant)
    return (0, import_kolmafia5.haveServant)(thing);
  if (thing instanceof import_kolmafia5.Skill)
    return (0, import_kolmafia5.haveSkill)(thing);
  if (thing instanceof import_kolmafia5.Thrall) {
    var thrall = (0, import_kolmafia5.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }
  return !1;
}
function haveInCampground(item4) {
  return Object.keys((0, import_kolmafia5.getCampground)()).map(function(i) {
    return import_kolmafia5.Item.get(i);
  }).includes(item4);
}
var Wanderer;
(function(Wanderer2) {
  Wanderer2.Digitize = "Digitize Monster", Wanderer2.Enamorang = "Enamorang Monster", Wanderer2.Familiar = "Familiar", Wanderer2.Holiday = "Holiday Monster", Wanderer2.Kramco = "Kramco", Wanderer2.Nemesis = "Nemesis Assassin", Wanderer2.Portscan = "portscan.edu", Wanderer2.Romantic = "Romantic Monster", Wanderer2.Vote = "Vote Monster";
})(Wanderer || (Wanderer = {}));
var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
function getKramcoWandererChance() {
  var fights = get("_sausageFights"), lastFight = get("_lastSausageMonsterTurn"), totalTurns = (0, import_kolmafia5.totalTurnsPlayed)();
  if (fights < 1)
    return lastFight === totalTurns && (0, import_kolmafia5.myTurncount)() < 1 ? 0.5 : 1;
  var turnsSinceLastFight = totalTurns - lastFight;
  return Math.min(1, (turnsSinceLastFight + 1) / (5 + fights * 3 + Math.max(0, fights - 5) ** 3));
}
function getFoldGroup(item4) {
  return Object.entries((0, import_kolmafia5.getRelated)(item4, "fold")).sort(function(_ref, _ref2) {
    var _ref3 = _slicedToArray3(_ref, 2), a = _ref3[1], _ref4 = _slicedToArray3(_ref2, 2), b = _ref4[1];
    return a - b;
  }).map(function(_ref5) {
    var _ref6 = _slicedToArray3(_ref5, 1), i = _ref6[0];
    return import_kolmafia5.Item.get(i);
  });
}
function getRange(range) {
  var _range$match$slice$ma, _range$match, _ref7 = (_range$match$slice$ma = (_range$match = range.match(/^(-?\d+)(?:-(-?\d+))?$/)) === null || _range$match === void 0 ? void 0 : _range$match.slice(1, 3).map(function(v) {
    return parseInt(v);
  })) !== null && _range$match$slice$ma !== void 0 ? _range$match$slice$ma : [0], _ref8 = _slicedToArray3(_ref7, 2), lower = _ref8[0], upper = _ref8[1];
  return [lower, Number.isNaN(upper) || upper === void 0 ? lower : upper];
}
function getAverage(range) {
  var _getRange = getRange(range), _getRange2 = _slicedToArray3(_getRange, 2), min = _getRange2[0], max = _getRange2[1];
  return (min + max) / 2;
}
function getAverageAdventures(item4) {
  return getAverage(item4.adventures);
}
function uneffect(effect) {
  return (0, import_kolmafia5.cliExecute)("uneffect ".concat(effect.name));
}
function questStep(questName) {
  var stringStep = get(questName);
  if (stringStep === "unstarted") return -1;
  if (stringStep === "started") return 0;
  if (stringStep === "finished" || stringStep === "") return 999;
  if (stringStep.substring(0, 4) !== "step")
    throw new Error("Quest state parsing error.");
  return parseInt(stringStep.substring(4), 10);
}
var EnsureError = /* @__PURE__ */ function(_Error) {
  function EnsureError2(cause, reason) {
    var _this;
    return _classCallCheck4(this, EnsureError2), _this = _callSuper(this, EnsureError2, ["Failed to ensure ".concat(cause.name, "!").concat(reason ? " ".concat(reason) : "")]), _this.name = "Ensure Error", _this;
  }
  return _inherits(EnsureError2, _Error), _createClass4(EnsureError2);
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  if ((0, import_kolmafia5.haveEffect)(ef) < turns) {
    if (ef.default === null)
      throw new EnsureError(ef, "No default action");
    if (!(0, import_kolmafia5.cliExecute)(ef.default) || (0, import_kolmafia5.haveEffect)(ef) === 0)
      throw new EnsureError(ef);
  }
}
var holidayWanderers = /* @__PURE__ */ new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
function getTodaysHolidayWanderers() {
  return (0, import_kolmafia5.holiday)().split("/").flatMap(function(holiday2) {
    var _holidayWanderers$get;
    return (_holidayWanderers$get = holidayWanderers.get(holiday2)) !== null && _holidayWanderers$get !== void 0 ? _holidayWanderers$get : [];
  });
}
var telescopeStats = /* @__PURE__ */ new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Moxie"])))]]), telescopeElements = /* @__PURE__ */ new Map([["people, all of whom appear to be on fire", $element(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap1 = /* @__PURE__ */ new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap2 = /* @__PURE__ */ new Map([["smoke rising from deeper within the maze", $element(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap3 = /* @__PURE__ */ new Map([["with lava slowly oozing out of it", $element(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["cold"])))]]);
var byStat = makeByXFunction(function() {
  return (0, import_kolmafia5.myPrimestat)().toString();
}), byClass = makeByXFunction(function() {
  return (0, import_kolmafia5.myClass)().toString();
});
function directlyUse(item4) {
  return (0, import_kolmafia5.visitUrl)("inv_use.php?which=3&whichitem=".concat(item4.id, "&pwd"));
}
function makeScalerCalcFunction(cache, pattern) {
  return function(monster) {
    var _pattern$exec$, _pattern$exec, current = cache.get(monster);
    if (current !== void 0) return (0, import_kolmafia5.monsterEval)(current);
    var result = (_pattern$exec$ = (_pattern$exec = pattern.exec(monster.attributes)) === null || _pattern$exec === void 0 ? void 0 : _pattern$exec[1]) !== null && _pattern$exec$ !== void 0 ? _pattern$exec$ : "0";
    return cache.set(monster, result), (0, import_kolmafia5.monsterEval)(result);
  };
}
var scalerRates = /* @__PURE__ */ new Map(), scalerCaps = /* @__PURE__ */ new Map(), SCALE_RATE_PATTERN = /Scale: (?:\[([^\]]*)\]|(\d*))/, SCALE_CAP_PATTERN = /Cap: (?:\[([^\]]*)\]|(\d*))/, getScalingRate = makeScalerCalcFunction(scalerRates, SCALE_RATE_PATTERN), getScalingCap = makeScalerCalcFunction(scalerCaps, SCALE_CAP_PATTERN);
var makeBulkFunction = function(action) {
  return function(items) {
    (0, import_kolmafia5.batchOpen)();
    var _iterator22 = _createForOfIteratorHelper3(items.entries()), _step22;
    try {
      for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
        var _step2$value = _slicedToArray3(_step22.value, 2), item4 = _step2$value[0], quantity = _step2$value[1];
        action(quantity, item4);
      }
    } catch (err) {
      _iterator22.e(err);
    } finally {
      _iterator22.f();
    }
    return (0, import_kolmafia5.batchClose)();
  };
}, bulkAutosell = makeBulkFunction(import_kolmafia5.autosell), bulkPutCloset = makeBulkFunction(import_kolmafia5.putCloset), bulkPutDisplay = makeBulkFunction(import_kolmafia5.putDisplay), bulkPutStash = makeBulkFunction(import_kolmafia5.putStash), bulkTakeCloset = makeBulkFunction(import_kolmafia5.takeCloset), bulkTakeDisplay = makeBulkFunction(import_kolmafia5.takeDisplay), bulkTakeShop = makeBulkFunction(import_kolmafia5.takeShop), bulkTakeStash = makeBulkFunction(import_kolmafia5.takeStash), bulkTakeStorage = makeBulkFunction(import_kolmafia5.takeStorage);

// node_modules/libram/dist/overlappingNames.js
init_kolmafia_polyfill();
var overlappingItemNames = ["spider web", "really sticky spider web", "dictionary", "NG", "Cloaca-Cola", "yo-yo", "top", "ball", "kite", "yo", "red potion", "blue potion", "bowling ball", "adder", "red button", "pile of sand", "mushroom", "deluxe mushroom"], overlappingSkillNames = ["Shoot", "Thrust-Smack", "Headbutt", "Toss", "Knife in the Dark", "Sing", "Disarm", "LIGHT", "BURN", "Extract", "Meteor Shower", "Snipe", "Bite", "Kick", "Howl", "Cleave", "Boil", "Slice", "Rainbow"];

// node_modules/libram/dist/combat.js
function _createForOfIteratorHelper4(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray5(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _toConsumableArray2(r) {
  return _arrayWithoutHoles2(r) || _iterableToArray2(r) || _unsupportedIterableToArray5(r) || _nonIterableSpread2();
}
function _nonIterableSpread2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray5(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray5(r, a) : void 0;
  }
}
function _iterableToArray2(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles2(r) {
  if (Array.isArray(r)) return _arrayLikeToArray5(r);
}
function _arrayLikeToArray5(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _defineProperty4(e, r, t) {
  return (r = _toPropertyKey5(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _defineProperties5(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey5(o.key), o);
  }
}
function _createClass5(e, r, t) {
  return r && _defineProperties5(e.prototype, r), t && _defineProperties5(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _toPropertyKey5(t) {
  var i = _toPrimitive5(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive5(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _classCallCheck5(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _callSuper2(t, o, e) {
  return o = _getPrototypeOf2(o), _possibleConstructorReturn2(t, _isNativeReflectConstruct2() ? Reflect.construct(o, e || [], _getPrototypeOf2(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn2(t, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized2(t);
}
function _assertThisInitialized2(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _inherits2(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf2(t, e);
}
function _wrapNativeSuper2(t) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper2 = function(t2) {
    if (t2 === null || !_isNativeFunction2(t2)) return t2;
    if (typeof t2 != "function") throw new TypeError("Super expression must either be null or a function");
    if (r !== void 0) {
      if (r.has(t2)) return r.get(t2);
      r.set(t2, Wrapper);
    }
    function Wrapper() {
      return _construct2(t2, arguments, _getPrototypeOf2(this).constructor);
    }
    return Wrapper.prototype = Object.create(t2.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf2(Wrapper, t2);
  }, _wrapNativeSuper2(t);
}
function _construct2(t, e, r) {
  if (_isNativeReflectConstruct2()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf2(p, r.prototype), p;
}
function _isNativeReflectConstruct2() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct2 = function() {
    return !!t;
  })();
}
function _isNativeFunction2(t) {
  try {
    return Function.toString.call(t).indexOf("[native code]") !== -1;
  } catch (n) {
    return typeof t == "function";
  }
}
function _setPrototypeOf2(t, e) {
  return _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf2(t, e);
}
function _getPrototypeOf2(t) {
  return _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf2(t);
}
var MACRO_NAME = "Script Autoattack Macro";
function getMacroId() {
  var name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : MACRO_NAME, query = '//select[@name="macroid"]/option[text()="'.concat(name, '"]/@value'), macroText = (0, import_kolmafia6.visitUrl)("account_combatmacros.php"), macroMatches = (0, import_kolmafia6.xpath)(macroText, query);
  if (macroMatches.length === 0) {
    (0, import_kolmafia6.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0, import_kolmafia6.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(name, "&macrotext=abort&action=save"));
    macroMatches = (0, import_kolmafia6.xpath)(newMacroText, query);
  }
  if (macroMatches.length === 0)
    throw (0, import_kolmafia6.xpath)(macroText, '//select[@name="macroid"]/option').length >= 100 ? new InvalidMacroError("Please delete at least one existing macro to make some space for Libram") : new InvalidMacroError("Could not find or create macro ".concat(name));
  return parseInt(macroMatches[0], 10);
}
function itemOrNameToItem(itemOrName) {
  return typeof itemOrName == "string" ? import_kolmafia6.Item.get(itemOrName) : itemOrName;
}
function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems))
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  var item4 = itemOrNameToItem(itemOrItems);
  return overlappingItemNames.includes(item4.name) ? item4.id.toFixed(0) : item4.name;
}
function itemOrItemsBallsMacroPredicate(itemOrItems) {
  return Array.isArray(itemOrItems) ? itemOrItems[0] === itemOrItems[1] ? "hastwocombatitems ".concat(itemOrItems[0]) : itemOrItems.map(itemOrItemsBallsMacroPredicate).join(" && ") : "hascombatitem ".concat(itemOrItems);
}
function skillOrNameToSkill(skillOrName) {
  return typeof skillOrName == "string" ? import_kolmafia6.Skill.get(skillOrName) : skillOrName;
}
function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) && !overlappingSkillNames.includes(skill.name) ? skill.name : skill.id;
}
var InvalidMacroError = /* @__PURE__ */ function(_Error) {
  function InvalidMacroError2() {
    return _classCallCheck5(this, InvalidMacroError2), _callSuper2(this, InvalidMacroError2, arguments);
  }
  return _inherits2(InvalidMacroError2, _Error), _createClass5(InvalidMacroError2);
}(/* @__PURE__ */ _wrapNativeSuper2(Error)), Macro = /* @__PURE__ */ function() {
  function Macro3() {
    _classCallCheck5(this, Macro3), _defineProperty4(this, "components", []), _defineProperty4(this, "name", MACRO_NAME);
  }
  return _createClass5(Macro3, [{
    key: "toString",
    value: (
      /**
       * Convert macro to string.
       *
       * @returns BALLS macro
       */
      function() {
        return (this.components.join(";") + ";").replace(/;;+/g, ";");
      }
    )
    /**
     * Gives your macro a new name to be used when saving an autoattack.
     *
     * @param name The name to be used when saving as an autoattack.
     * @returns The macro in question
     */
  }, {
    key: "rename",
    value: function(name) {
      return this.name = name, this;
    }
    /**
     * Creates a new Macro with a name other than the default name.
     *
     * @param name The name to assign this macro.
     * @returns A new Macro with the assigned name.
     */
  }, {
    key: "save",
    value: (
      /**
       * Save a macro to a Mafia property for use in a consult script.
       */
      function() {
        _set(Macro3.SAVED_MACRO_PROPERTY, this.toString());
      }
    )
    /**
     * Load a saved macro from the Mafia property.
     *
     * @returns Loaded macro text
     */
  }, {
    key: "step",
    value: (
      /**
       * Statefully add one or several steps to a macro.
       *
       * @param nextSteps The steps to add to the macro.
       * @returns {Macro} This object itself.
       */
      function() {
        for (var _ref, _this$components, _len = arguments.length, nextSteps = new Array(_len), _key = 0; _key < _len; _key++)
          nextSteps[_key] = arguments[_key];
        var nextStepsStrings = (_ref = []).concat.apply(_ref, _toConsumableArray2(nextSteps.map(function(x) {
          return x instanceof Macro3 ? x.components : [x];
        })));
        return (_this$components = this.components).push.apply(_this$components, _toConsumableArray2(nextStepsStrings.filter(Boolean))), this;
      }
    )
    /**
     * Statefully add one or several steps to a macro.
     *
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "submit",
    value: (
      /**
       * Submit the built macro to KoL. Only works inside combat.
       *
       * @returns Contents of the fight page after macro submission
       */
      function() {
        var final = this.toString();
        return (0, import_kolmafia6.visitUrl)("fight.php?action=macro&macrotext=".concat((0, import_kolmafia6.urlEncode)(final)), !0, !0);
      }
    )
    /**
     * Set this macro as a KoL native autoattack.
     */
  }, {
    key: "setAutoAttack",
    value: function() {
      var id = Macro3.cachedMacroIds.get(this.name);
      id === void 0 && (id = getMacroId(this.name), Macro3.cachedMacroIds.set(this.name, id)), !((0, import_kolmafia6.getAutoAttack)() === 99e6 + id && this.toString() === Macro3.cachedAutoAttacks.get(this.name)) && ((0, import_kolmafia6.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&name=").concat((0, import_kolmafia6.urlEncode)(this.name), "&macrotext=").concat((0, import_kolmafia6.urlEncode)(this.toString()), "&action=save"), !0, !0), (0, import_kolmafia6.visitUrl)("account.php?am=1&action=autoattack&value=".concat(99e6 + id, "&ajax=1")), Macro3.cachedAutoAttacks.set(this.name, this.toString()));
    }
    /**
     * Renames the macro, then sets it as an autoattack.
     *
     * @param name The name to save the macro under as an autoattack.
     */
  }, {
    key: "setAutoAttackAs",
    value: function(name) {
      this.name = name, this.setAutoAttack();
    }
    /**
     * Clear all cached autoattacks, and delete all stored macros server-side.
     */
  }, {
    key: "abort",
    value: (
      /**
       * Add an "abort" step to this macro.
       *
       * @returns {Macro} This object itself.
       */
      function() {
        return this.step("abort");
      }
    )
    /**
     * Create a new macro with an "abort" step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "abortWithWarning",
    value: (
      /**
       * Adds an "abort" step to this macro, with a warning message to print
       *
       * @param warning The warning message to print
       * @returns  {Macro} This object itself.
       */
      function(warning) {
        return this.step('abort "'.concat(warning, '"'));
      }
    )
    /**
     * Create a new macro with an "abort" step to this macro, with a warning message to print
     *
     * @param warning The warning message to print
     * @returns {Macro} This object itself.
     */
  }, {
    key: "runaway",
    value: (
      /**
       * Add a "runaway" step to this macro.
       *
       * @returns {Macro} This object itself.
       */
      function() {
        return this.step("runaway");
      }
    )
    /**
     * Create a new macro with an "runaway" step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "if_",
    value: (
      /**
       * Add an "if" statement to this macro.
       *
       * @param condition The BALLS condition for the if statement.
       * @param ifTrue Continuation if the condition is true.
       * @returns {Macro} This object itself.
       */
      function(condition, ifTrue) {
        return this.step("if ".concat(Macro3.makeBALLSPredicate(condition))).step(ifTrue).step("endif");
      }
    )
    /**
     * Create a new macro with an "if" statement.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "ifNot",
    value: (
      /**
       * Add an "if" statement to this macro, inverting the condition.
       *
       * @param condition The BALLS condition for the if statement.
       * @param ifTrue Continuation if the condition is true.
       * @returns {Macro} This object itself.
       */
      function(condition, ifTrue) {
        return this.if_("!".concat(Macro3.makeBALLSPredicate(condition)), ifTrue);
      }
    )
    /**
     * Create a new macro with an "if" statement, inverting the condition.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "while_",
    value: (
      /**
       * Add a "while" statement to this macro.
       *
       * @param condition The BALLS condition for the while statement.
       * @param contents Loop to repeat while the condition is true.
       * @returns {Macro} This object itself.
       */
      function(condition, contents) {
        return this.step("while ".concat(Macro3.makeBALLSPredicate(condition))).step(contents).step("endwhile");
      }
    )
    /**
     * Create a new macro with a "while" statement.
     *
     * @param condition The BALLS condition for the while statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "externalIf",
    value: (
      /**
       * Conditionally add a step to a macro based on a condition evaluated at the time of building the macro.
       *
       * @param condition The JS condition.
       * @param ifTrue Continuation to add if the condition is true.
       * @param ifFalse Optional input to turn this into an if...else statement.
       * @returns {Macro} This object itself.
       */
      function(condition, ifTrue, ifFalse) {
        return condition ? this.step(ifTrue) : ifFalse ? this.step(ifFalse) : this;
      }
    )
    /**
     * Create a new macro with a condition evaluated at the time of building the macro.
     *
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "repeat",
    value: (
      /**
       * Add a repeat step to the macro.
       *
       * @param condition The BALLS condition for the repeat statement, optional.
       * @returns {Macro} This object itself.
       */
      function(condition) {
        return condition === void 0 ? this.step("repeat") : this.step("repeat ".concat(Macro3.makeBALLSPredicate(condition)));
      }
    )
    /**
     * Add one or more skill cast steps to the macro.
     *
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "skill",
    value: function() {
      for (var _len2 = arguments.length, skills = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
        skills[_key2] = arguments[_key2];
      return this.step.apply(this, _toConsumableArray2(skills.map(function(skill2) {
        return "skill ".concat(skillBallsMacroName(skill2));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     *
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "trySkill",
    value: (
      /**
       * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
       *
       * @param skills Skills to try casting.
       * @returns {Macro} This object itself.
       */
      function() {
        for (var _len3 = arguments.length, skills = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)
          skills[_key3] = arguments[_key3];
        return this.step.apply(this, _toConsumableArray2(skills.map(function(skillOrName) {
          return skillOrNameToSkill(skillOrName);
        }).map(function(skill) {
          return Macro3.if_(Macro3.makeBALLSPredicate(skill), Macro3.skill(skill));
        })));
      }
    )
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "trySkillRepeat",
    value: (
      /**
       * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
       *
       * @param skills Skills to try repeatedly casting.
       * @returns {Macro} This object itself.
       */
      function() {
        for (var _len4 = arguments.length, skills = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++)
          skills[_key4] = arguments[_key4];
        return this.step.apply(this, _toConsumableArray2(skills.map(function(skillOrName) {
          return skillOrNameToSkill(skillOrName);
        }).map(function(skill) {
          return Macro3.if_(Macro3.makeBALLSPredicate(skill), Macro3.skill(skill).repeat(skill));
        })));
      }
    )
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "item",
    value: (
      /**
       * Add one or more item steps to the macro.
       *
       * @param items Items to use. Pass a tuple [item1, item2] to funksling.
       * @returns {Macro} This object itself.
       */
      function() {
        for (var _len5 = arguments.length, items = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++)
          items[_key5] = arguments[_key5];
        return this.step.apply(this, _toConsumableArray2(items.map(function(itemOrItems) {
          return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
        })));
      }
    )
    /**
     * Create a new macro with one or more item steps.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "tryItem",
    value: (
      /**
       * Add one or more item steps to the macro, where each step checks to see if you have the item first.
       *
       * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
       * @returns {Macro} This object itself.
       */
      function() {
        for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++)
          items[_key6] = arguments[_key6];
        return this.step.apply(this, _toConsumableArray2(items.map(function(item4) {
          return Macro3.if_(itemOrItemsBallsMacroPredicate(item4), Macro3.item(item4));
        })));
      }
    )
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "attack",
    value: (
      /**
       * Add an attack step to the macro.
       *
       * @returns {Macro} This object itself.
       */
      function() {
        return this.step("attack");
      }
    )
    /**
     * Create a new macro with an attack step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "ifHolidayWanderer",
    value: (
      /**
       * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, unmutated.
       *
       * @param macro The macro to place in the if_ statement
       * @returns This macro with supplied macro wapped in if statement matching holiday wanderers
       */
      function(macro) {
        var todaysWanderers = getTodaysHolidayWanderers();
        return todaysWanderers.length === 0 ? this : this.if_(todaysWanderers.map(function(monster) {
          return "monsterid ".concat(monster.id);
        }).join(" || "), macro);
      }
    )
    /**
     * Create a new macro starting with an ifHolidayWanderer step.
     *
     * @param macro The macro to place inside the if_ statement
     * @returns New macro with supplied macro wrapped in if statement matching holiday wanderers
     */
  }, {
    key: "ifNotHolidayWanderer",
    value: (
      /**
       * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, with the input macro appended.
       *
       * @param macro The macro to place in the if_ statement.
       * @returns This macro with supplied macro wrapped in if statement matching monsters that are not holiday wanderers
       */
      function(macro) {
        var todaysWanderers = getTodaysHolidayWanderers();
        return todaysWanderers.length === 0 ? this.step(macro) : this.if_(todaysWanderers.map(function(monster) {
          return "!monsterid ".concat(monster.id);
        }).join(" && "), macro);
      }
    )
    /**
     * Create a new macro starting with an ifNotHolidayWanderer step.
     *
     * @param macro The macro to place inside the if_ statement
     * @returns New macro with supplied macro wrapped in if statement matching monsters that are not holiday wanderers
     */
  }], [{
    key: "rename",
    value: function(name) {
      return new this().rename(name);
    }
  }, {
    key: "load",
    value: function() {
      var _this;
      return (_this = new this()).step.apply(_this, _toConsumableArray2(get(Macro3.SAVED_MACRO_PROPERTY).split(";")));
    }
    /**
     * Clear the saved macro in the Mafia property.
     */
  }, {
    key: "clearSaved",
    value: function() {
      (0, import_kolmafia6.removeProperty)(Macro3.SAVED_MACRO_PROPERTY);
    }
  }, {
    key: "step",
    value: function() {
      var _this2;
      return (_this2 = new this()).step.apply(_this2, arguments);
    }
  }, {
    key: "clearAutoAttackMacros",
    value: function() {
      var _iterator3 = _createForOfIteratorHelper4(Macro3.cachedAutoAttacks.keys()), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var _Macro$cachedMacroIds, name = _step3.value, id = (_Macro$cachedMacroIds = Macro3.cachedMacroIds.get(name)) !== null && _Macro$cachedMacroIds !== void 0 ? _Macro$cachedMacroIds : getMacroId(name);
          (0, import_kolmafia6.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&action=edit&what=Delete&confirm=1")), Macro3.cachedAutoAttacks.delete(name), Macro3.cachedMacroIds.delete(name);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "abort",
    value: function() {
      return new this().abort();
    }
  }, {
    key: "abortWithWarning",
    value: function(warning) {
      return new this().abortWithWarning(warning);
    }
  }, {
    key: "runaway",
    value: function() {
      return new this().runaway();
    }
    /**
     *
     * @param condition The BALLS condition or a type to make a condition for (Monster, Item, Skill, etc.)
     * @returns {string} The BALLS condition string
     */
  }, {
    key: "makeBALLSPredicate",
    value: function(condition) {
      if (condition instanceof import_kolmafia6.Monster)
        return "monsterid ".concat(condition.id);
      if (condition instanceof Array)
        return "(".concat(condition.map(function(entry) {
          return Macro3.makeBALLSPredicate(entry);
        }).join(" || "), ")");
      if (condition instanceof import_kolmafia6.Effect)
        return "haseffect ".concat(condition.id);
      if (condition instanceof import_kolmafia6.Skill)
        return condition.combat ? "hasskill ".concat(skillBallsMacroName(condition)) : "knowsskill ".concat(condition.id);
      if (condition instanceof import_kolmafia6.Item) {
        if (!condition.combat)
          throw new InvalidMacroError("Item ".concat(condition, " cannot be made a valid BALLS predicate (it is not combat-usable)"));
        return "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof import_kolmafia6.Location) {
        var snarfblat = condition.id;
        if (snarfblat < 1)
          throw new InvalidMacroError("Location ".concat(condition, " cannot be made a valid BALLS predicate (it has no location id)"));
        return "snarfblat ".concat(snarfblat);
      } else if (condition instanceof import_kolmafia6.Class) {
        if (condition.id > 6)
          throw new InvalidMacroError("Class ".concat(condition, " cannot be made a valid BALLS predicate (it is not a standard class)"));
        return condition.toString().replaceAll(" ", "").toLowerCase();
      } else {
        if (condition instanceof import_kolmafia6.Stat)
          return "".concat(condition.toString().toLowerCase(), "class");
        if (condition instanceof import_kolmafia6.Phylum)
          return "monsterphylum ".concat(condition);
        if (condition instanceof import_kolmafia6.Element)
          return "monsterelement ".concat(condition);
      }
      return condition;
    }
  }, {
    key: "if_",
    value: function(condition, ifTrue) {
      return new this().if_(condition, ifTrue);
    }
  }, {
    key: "ifNot",
    value: function(condition, ifTrue) {
      return new this().ifNot(condition, ifTrue);
    }
  }, {
    key: "while_",
    value: function(condition, contents) {
      return new this().while_(condition, contents);
    }
  }, {
    key: "externalIf",
    value: function(condition, ifTrue, ifFalse) {
      return new this().externalIf(condition, ifTrue, ifFalse);
    }
  }, {
    key: "skill",
    value: function() {
      var _this3;
      return (_this3 = new this()).skill.apply(_this3, arguments);
    }
  }, {
    key: "trySkill",
    value: function() {
      var _this4;
      return (_this4 = new this()).trySkill.apply(_this4, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function() {
      var _this5;
      return (_this5 = new this()).trySkillRepeat.apply(_this5, arguments);
    }
  }, {
    key: "item",
    value: function() {
      var _this6;
      return (_this6 = new this()).item.apply(_this6, arguments);
    }
  }, {
    key: "tryItem",
    value: function() {
      var _this7;
      return (_this7 = new this()).tryItem.apply(_this7, arguments);
    }
  }, {
    key: "attack",
    value: function() {
      return new this().attack();
    }
  }, {
    key: "ifHolidayWanderer",
    value: function(macro) {
      return new this().ifHolidayWanderer(macro);
    }
  }, {
    key: "ifNotHolidayWanderer",
    value: function(macro) {
      return new this().ifNotHolidayWanderer(macro);
    }
  }]);
}();
_defineProperty4(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");
_defineProperty4(Macro, "cachedMacroIds", /* @__PURE__ */ new Map());
_defineProperty4(Macro, "cachedAutoAttacks", /* @__PURE__ */ new Map());

// node_modules/libram/dist/maximize.js
init_kolmafia_polyfill();
var import_kolmafia7 = require("kolmafia");
var _templateObject2, _templateObject210, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject102, _templateObject112, _templateObject122, _templateObject132, _templateObject142, _templateObject152, _templateObject162, _templateObject172, _templateObject182, _templateObject192, _templateObject202, _templateObject212, _templateObject222, _templateObject232, _templateObject242, _templateObject252, _templateObject262, _templateObject272, _templateObject282, _templateObject292, _templateObject302, _templateObject312, _templateObject322, _templateObject332, _templateObject342, _templateObject352, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50;
function _slicedToArray4(r, e) {
  return _arrayWithHoles4(r) || _iterableToArrayLimit4(r, e) || _unsupportedIterableToArray6(r, e) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit4(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles4(r) {
  if (Array.isArray(r)) return r;
}
function _classPrivateFieldInitSpec(e, t, a) {
  _checkPrivateRedeclaration(e, t), t.set(e, a);
}
function _checkPrivateRedeclaration(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldGet(s, a) {
  return s.get(_assertClassBrand(s, a));
}
function _classPrivateFieldSet(s, a, r) {
  return s.set(_assertClassBrand(s, a), r), r;
}
function _assertClassBrand(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function _defineProperties6(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey6(o.key), o);
  }
}
function _createClass6(e, r, t) {
  return r && _defineProperties6(e.prototype, r), t && _defineProperties6(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _classCallCheck6(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _createForOfIteratorHelper5(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray6(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _taggedTemplateLiteral2(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function ownKeys3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys3(Object(t), !0).forEach(function(r2) {
      _defineProperty5(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty5(e, r, t) {
  return (r = _toPropertyKey6(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey6(t) {
  var i = _toPrimitive6(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive6(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _toConsumableArray3(r) {
  return _arrayWithoutHoles3(r) || _iterableToArray3(r) || _unsupportedIterableToArray6(r) || _nonIterableSpread3();
}
function _nonIterableSpread3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray6(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray6(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray6(r, a) : void 0;
  }
}
function _iterableToArray3(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles3(r) {
  if (Array.isArray(r)) return _arrayLikeToArray6(r);
}
function _arrayLikeToArray6(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function toMaximizerName(_ref) {
  var name = _ref.name, id = _ref.id;
  return name.includes(";") ? "\xB6".concat(id) : name;
}
function mergeMaximizeOptions(defaultOptions, addendums) {
  var _addendums$updateOnFa, _addendums$updateOnCa, _addendums$updateOnLo, _addendums$useOutfitC, _addendums$forceEquip, _addendums$preventEqu, _addendums$bonusEquip, _addendums$onlySlot, _addendums$preventSlo, _addendums$forceUpdat, _addendums$modes;
  return {
    updateOnFamiliarChange: (_addendums$updateOnFa = addendums.updateOnFamiliarChange) !== null && _addendums$updateOnFa !== void 0 ? _addendums$updateOnFa : defaultOptions.updateOnFamiliarChange,
    updateOnCanEquipChanged: (_addendums$updateOnCa = addendums.updateOnCanEquipChanged) !== null && _addendums$updateOnCa !== void 0 ? _addendums$updateOnCa : defaultOptions.updateOnCanEquipChanged,
    updateOnLocationChange: (_addendums$updateOnLo = addendums.updateOnLocationChange) !== null && _addendums$updateOnLo !== void 0 ? _addendums$updateOnLo : defaultOptions.updateOnLocationChange,
    useOutfitCaching: (_addendums$useOutfitC = addendums.useOutfitCaching) !== null && _addendums$useOutfitC !== void 0 ? _addendums$useOutfitC : defaultOptions.useOutfitCaching,
    forceEquip: [].concat(_toConsumableArray3(defaultOptions.forceEquip), _toConsumableArray3((_addendums$forceEquip = addendums.forceEquip) !== null && _addendums$forceEquip !== void 0 ? _addendums$forceEquip : [])),
    preventEquip: [].concat(_toConsumableArray3(defaultOptions.preventEquip), _toConsumableArray3((_addendums$preventEqu = addendums.preventEquip) !== null && _addendums$preventEqu !== void 0 ? _addendums$preventEqu : [])).filter(function(item4) {
      var _addendums$forceEquip2;
      return !defaultOptions.forceEquip.includes(item4) && !((_addendums$forceEquip2 = addendums.forceEquip) !== null && _addendums$forceEquip2 !== void 0 && _addendums$forceEquip2.includes(item4));
    }),
    bonusEquip: new Map([].concat(_toConsumableArray3(defaultOptions.bonusEquip), _toConsumableArray3((_addendums$bonusEquip = addendums.bonusEquip) !== null && _addendums$bonusEquip !== void 0 ? _addendums$bonusEquip : []))),
    onlySlot: (_addendums$onlySlot = addendums.onlySlot) !== null && _addendums$onlySlot !== void 0 ? _addendums$onlySlot : defaultOptions.onlySlot,
    preventSlot: [].concat(_toConsumableArray3(defaultOptions.preventSlot), _toConsumableArray3((_addendums$preventSlo = addendums.preventSlot) !== null && _addendums$preventSlo !== void 0 ? _addendums$preventSlo : [])),
    forceUpdate: (_addendums$forceUpdat = addendums.forceUpdate) !== null && _addendums$forceUpdat !== void 0 ? _addendums$forceUpdat : defaultOptions.forceUpdate,
    modes: _objectSpread3(_objectSpread3({}, defaultOptions.modes), (_addendums$modes = addendums.modes) !== null && _addendums$modes !== void 0 ? _addendums$modes : {})
  };
}
var defaultMaximizeOptions = {
  updateOnFamiliarChange: !0,
  updateOnCanEquipChanged: !0,
  updateOnLocationChange: !1,
  useOutfitCaching: !0,
  forceEquip: [],
  preventEquip: [],
  bonusEquip: /* @__PURE__ */ new Map(),
  onlySlot: [],
  preventSlot: [],
  forceUpdate: !1,
  modes: {}
};
var modeableCommands = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka", "jillcandle"], modeableItems = {
  backupcamera: $item(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral2(["backup camera"]))),
  umbrella: $item(_templateObject210 || (_templateObject210 = _taggedTemplateLiteral2(["unbreakable umbrella"]))),
  snowsuit: $item(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral2(["Snow Suit"]))),
  edpiece: $item(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral2(["The Crown of Ed the Undying"]))),
  retrocape: $item(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral2(["unwrapped knock-off retro superhero cape"]))),
  parka: $item(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral2(["Jurassic Parka"]))),
  jillcandle: $item(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral2(["LED candle"])))
}, modeableState = {
  backupcamera: function() {
    return (0, import_kolmafia7.getProperty)("backupCameraMode");
  },
  umbrella: function() {
    return (0, import_kolmafia7.getProperty)("umbrellaState");
  },
  snowsuit: function() {
    return (0, import_kolmafia7.getProperty)("snowsuit");
  },
  edpiece: function() {
    return (0, import_kolmafia7.getProperty)("edPiece");
  },
  retrocape: function() {
    return (0, import_kolmafia7.getProperty)("retroCapeSuperhero") + " " + (0, import_kolmafia7.getProperty)("retroCapeWashingInstructions");
  },
  parka: function() {
    return (0, import_kolmafia7.getProperty)("parkaMode");
  },
  jillcandle: function() {
    return (0, import_kolmafia7.getProperty)("ledCandleMode");
  }
};
function getCurrentModes() {
  var modes = {}, _iterator3 = _createForOfIteratorHelper5(modeableCommands), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var key = _step3.value;
      (0, import_kolmafia7.haveEquipped)(modeableItems[key]) && (modes[key] = modeableState[key]());
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return modes;
}
function applyModes(modes) {
  var _iterator22 = _createForOfIteratorHelper5(modeableCommands), _step22;
  try {
    for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
      var command = _step22.value;
      (0, import_kolmafia7.haveEquipped)(modeableItems[command]) && modes[command] !== void 0 && modeableState[command]() !== modes[command] && (0, import_kolmafia7.cliExecute)(command + " " + modes[command]);
    }
  } catch (err) {
    _iterator22.e(err);
  } finally {
    _iterator22.f();
  }
}
var cachedSlots = $slots(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral2(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"]))), CacheEntry = /* @__PURE__ */ _createClass6(function CacheEntry2(equipment, rider, familiar2, canEquipItemCount2, modes) {
  _classCallCheck6(this, CacheEntry2), _defineProperty5(this, "equipment", void 0), _defineProperty5(this, "rider", void 0), _defineProperty5(this, "familiar", void 0), _defineProperty5(this, "canEquipItemCount", void 0), _defineProperty5(this, "modes", void 0), this.equipment = equipment, this.rider = rider, this.familiar = familiar2, this.canEquipItemCount = canEquipItemCount2, this.modes = modes;
}), _outfitSlots = /* @__PURE__ */ new WeakMap(), _useHistory = /* @__PURE__ */ new WeakMap(), _maxSize = /* @__PURE__ */ new WeakMap(), OutfitLRUCache = /* @__PURE__ */ function() {
  function OutfitLRUCache2(maxSize) {
    _classCallCheck6(this, OutfitLRUCache2), _classPrivateFieldInitSpec(this, _outfitSlots, []), _classPrivateFieldInitSpec(this, _useHistory, []), _classPrivateFieldInitSpec(this, _maxSize, void 0), _classPrivateFieldSet(_maxSize, this, maxSize);
  }
  return _createClass6(OutfitLRUCache2, [{
    key: "checkConsistent",
    value: function() {
      if (_classPrivateFieldGet(_useHistory, this).length !== _classPrivateFieldGet(_outfitSlots, this).length || !_toConsumableArray3(_classPrivateFieldGet(_useHistory, this)).sort().every(function(value3, index) {
        return value3 === index;
      }))
        throw new Error("Outfit cache consistency failed.");
    }
  }, {
    key: "promote",
    value: function(index) {
      _classPrivateFieldSet(_useHistory, this, [index].concat(_toConsumableArray3(_classPrivateFieldGet(_useHistory, this).filter(function(i) {
        return i !== index;
      })))), this.checkConsistent();
    }
  }, {
    key: "get",
    value: function(key) {
      var index = _classPrivateFieldGet(_outfitSlots, this).indexOf(key);
      if (!(index < 0))
        return this.promote(index), "".concat(OutfitLRUCache2.OUTFIT_PREFIX, " ").concat(index);
    }
  }, {
    key: "insert",
    value: function(key) {
      var lastUseIndex = void 0;
      if (_classPrivateFieldGet(_outfitSlots, this).length >= _classPrivateFieldGet(_maxSize, this)) {
        if (lastUseIndex = _classPrivateFieldGet(_useHistory, this).pop(), lastUseIndex === void 0)
          throw new Error("Outfit cache consistency failed.");
        return _classPrivateFieldGet(_useHistory, this).splice(0, 0, lastUseIndex), _classPrivateFieldGet(_outfitSlots, this)[lastUseIndex] = key, this.checkConsistent(), "".concat(OutfitLRUCache2.OUTFIT_PREFIX, " ").concat(lastUseIndex);
      } else {
        var index = _classPrivateFieldGet(_outfitSlots, this).push(key) - 1;
        return _classPrivateFieldGet(_useHistory, this).splice(0, 0, index), this.checkConsistent(), "".concat(OutfitLRUCache2.OUTFIT_PREFIX, " ").concat(index);
      }
    }
  }, {
    key: "clear",
    value: function() {
      _classPrivateFieldSet(_outfitSlots, this, []), _classPrivateFieldSet(_useHistory, this, []);
    }
  }]);
}();
_defineProperty5(OutfitLRUCache, "OUTFIT_PREFIX", "Script Outfit");
function saveOutfit(name) {
  (0, import_kolmafia7.cliExecute)("outfit save ".concat(name));
}
var cachedObjectives = {}, outfitCache = new OutfitLRUCache(6), cachedStats = [0, 0, 0], cachedCanEquipItemCount = 0;
function canEquipItemCount() {
  var stats = $stats(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral2(["Muscle, Mysticality, Moxie"]))).map(function(stat) {
    return Math.min((0, import_kolmafia7.myBasestat)(stat), 300);
  });
  return stats.every(function(value3, index) {
    return value3 === cachedStats[index];
  }) || (cachedStats = stats, cachedCanEquipItemCount = import_kolmafia7.Item.all().filter(function(item4) {
    return (0, import_kolmafia7.canEquip)(item4);
  }).length), cachedCanEquipItemCount;
}
function checkCache(cacheKey, options) {
  var entry = cachedObjectives[cacheKey];
  return entry ? options.updateOnFamiliarChange && (0, import_kolmafia7.myFamiliar)() !== entry.familiar ? (logger_default.warning("Equipment found in maximize cache but familiar is different."), null) : options.updateOnCanEquipChanged && entry.canEquipItemCount !== canEquipItemCount() ? (logger_default.warning("Equipment found in maximize cache but equippable item list is out of date."), null) : entry : null;
}
function applyCached(entry, options) {
  var outfitName = options.useOutfitCaching ? outfitCache.get(entry) : void 0;
  if (outfitName) {
    (0, import_kolmafia7.isWearingOutfit)(outfitName) || (0, import_kolmafia7.outfit)(outfitName);
    var familiarEquip = entry.equipment.get($slot(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral2(["familiar"]))));
    familiarEquip && (0, import_kolmafia7.equip)($slot(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral2(["familiar"]))), familiarEquip);
  } else {
    var _iterator3 = _createForOfIteratorHelper5(entry.equipment), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        var _step3$value = _slicedToArray4(_step3.value, 2), slot = _step3$value[0], item4 = _step3$value[1];
        (0, import_kolmafia7.equippedItem)(slot) !== item4 && (0, import_kolmafia7.availableAmount)(item4) > 0 && (0, import_kolmafia7.equip)(slot, item4);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (verifyCached(entry) && options.useOutfitCaching) {
      var _outfitName = outfitCache.insert(entry);
      logger_default.info("Saving equipment to outfit ".concat(_outfitName, ".")), saveOutfit(_outfitName);
    }
  }
  (0, import_kolmafia7.equippedAmount)($item(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral2(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral2(["Crown of Thrones"])))) && (0, import_kolmafia7.enthroneFamiliar)(entry.rider.get($item(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral2(["Crown of Thrones"])))) || $familiar.none), (0, import_kolmafia7.equippedAmount)($item(_templateObject152 || (_templateObject152 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject162 || (_templateObject162 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) && (0, import_kolmafia7.bjornifyFamiliar)(entry.rider.get($item(_templateObject172 || (_templateObject172 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) || $familiar.none), applyModes(_objectSpread3(_objectSpread3({}, entry.modes), options.modes));
}
var slotStructure = [$slots(_templateObject182 || (_templateObject182 = _taggedTemplateLiteral2(["hat"]))), $slots(_templateObject192 || (_templateObject192 = _taggedTemplateLiteral2(["back"]))), $slots(_templateObject202 || (_templateObject202 = _taggedTemplateLiteral2(["shirt"]))), $slots(_templateObject212 || (_templateObject212 = _taggedTemplateLiteral2(["weapon, off-hand"]))), $slots(_templateObject222 || (_templateObject222 = _taggedTemplateLiteral2(["pants"]))), $slots(_templateObject232 || (_templateObject232 = _taggedTemplateLiteral2(["acc1, acc2, acc3"]))), $slots(_templateObject242 || (_templateObject242 = _taggedTemplateLiteral2(["familiar"])))];
function verifyCached(entry) {
  var warn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, success = !0, _iterator4 = _createForOfIteratorHelper5(slotStructure), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var slotGroup = _step4.value, desiredSlots = slotGroup.map(function(slot) {
        var _entry$equipment$get;
        return [slot, (_entry$equipment$get = entry.equipment.get(slot)) !== null && _entry$equipment$get !== void 0 ? _entry$equipment$get : null];
      }).filter(function(_ref2) {
        var _ref3 = _slicedToArray4(_ref2, 2), item4 = _ref3[1];
        return item4 !== null;
      }), desiredSet = desiredSlots.map(function(_ref4) {
        var _ref5 = _slicedToArray4(_ref4, 2), item4 = _ref5[1];
        return item4;
      }), equippedSet = desiredSlots.map(function(_ref6) {
        var _ref7 = _slicedToArray4(_ref6, 1), slot = _ref7[0];
        return (0, import_kolmafia7.equippedItem)(slot);
      });
      setEqual(desiredSet, equippedSet) || (warn && logger_default.warning("Failed to apply cached ".concat(desiredSet.join(", "), " in ").concat(slotGroup.join(", "), ".")), success = !1);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return (0, import_kolmafia7.equippedAmount)($item(_templateObject252 || (_templateObject252 = _taggedTemplateLiteral2(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject262 || (_templateObject262 = _taggedTemplateLiteral2(["Crown of Thrones"])))) && entry.rider.get($item(_templateObject272 || (_templateObject272 = _taggedTemplateLiteral2(["Crown of Thrones"])))) !== (0, import_kolmafia7.myEnthronedFamiliar)() && (warn && logger_default.warning("Failed to apply ".concat(entry.rider.get($item(_templateObject282 || (_templateObject282 = _taggedTemplateLiteral2(["Crown of Thrones"])))), " in ").concat($item(_templateObject292 || (_templateObject292 = _taggedTemplateLiteral2(["Crown of Thrones"]))), ".")), success = !1), (0, import_kolmafia7.equippedAmount)($item(_templateObject302 || (_templateObject302 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject312 || (_templateObject312 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) && entry.rider.get($item(_templateObject322 || (_templateObject322 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) !== (0, import_kolmafia7.myBjornedFamiliar)() && (warn && logger_default.warning("Failed to apply".concat(entry.rider.get($item(_templateObject332 || (_templateObject332 = _taggedTemplateLiteral2(["Buddy Bjorn"])))), " in ").concat($item(_templateObject342 || (_templateObject342 = _taggedTemplateLiteral2(["Buddy Bjorn"]))), ".")), success = !1), success;
}
function saveCached(cacheKey, options) {
  var equipment = /* @__PURE__ */ new Map(), rider = /* @__PURE__ */ new Map(), _iterator5 = _createForOfIteratorHelper5(cachedSlots), _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
      var _slot2 = _step5.value;
      equipment.set(_slot2, (0, import_kolmafia7.equippedItem)(_slot2));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  if ((0, import_kolmafia7.equippedAmount)($item(_templateObject352 || (_templateObject352 = _taggedTemplateLiteral2(["card sleeve"])))) > 0 && equipment.set($slot(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral2(["card-sleeve"]))), (0, import_kolmafia7.equippedItem)($slot(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral2(["card-sleeve"]))))), (0, import_kolmafia7.equippedAmount)($item(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral2(["Crown of Thrones"])))) > 0 && rider.set($item(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral2(["Crown of Thrones"]))), (0, import_kolmafia7.myEnthronedFamiliar)()), (0, import_kolmafia7.equippedAmount)($item(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) > 0 && rider.set($item(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral2(["Buddy Bjorn"]))), (0, import_kolmafia7.myBjornedFamiliar)()), options.preventSlot && options.preventSlot.length > 0) {
    var _iterator6 = _createForOfIteratorHelper5(options.preventSlot), _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
        var slot = _step6.value;
        equipment.delete(slot);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    options.preventSlot.includes($slot(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral2(["buddy-bjorn"])))) && rider.delete($item(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral2(["Buddy Bjorn"])))), options.preventSlot.includes($slot(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral2(["crown-of-thrones"])))) && rider.delete($item(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral2(["Crown of Thrones"]))));
  }
  if (options.onlySlot && options.onlySlot.length > 0) {
    var _iterator7 = _createForOfIteratorHelper5(import_kolmafia7.Slot.all()), _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
        var _slot = _step7.value;
        options.onlySlot.includes(_slot) || equipment.delete(_slot);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    options.onlySlot.includes($slot(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral2(["buddy-bjorn"])))) || rider.delete($item(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral2(["Buddy Bjorn"])))), options.onlySlot.includes($slot(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral2(["crown-of-thrones"])))) || rider.delete($item(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral2(["Crown of Thrones"]))));
  }
  var entry = new CacheEntry(equipment, rider, (0, import_kolmafia7.myFamiliar)(), canEquipItemCount(), _objectSpread3(_objectSpread3({}, getCurrentModes()), options.modes));
  if (cachedObjectives[cacheKey] = entry, options.useOutfitCaching) {
    var outfitName = outfitCache.insert(entry);
    logger_default.info("Saving equipment to outfit ".concat(outfitName, ".")), saveOutfit(outfitName);
  }
}
function maximizeCached(objectives) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, fullOptions = mergeMaximizeOptions(defaultMaximizeOptions, options), forceEquip = fullOptions.forceEquip, preventEquip = fullOptions.preventEquip, bonusEquip = fullOptions.bonusEquip, onlySlot = fullOptions.onlySlot, preventSlot = fullOptions.preventSlot, forceUpdate = fullOptions.forceUpdate, objective = _toConsumableArray3(new Set([].concat(_toConsumableArray3(objectives.sort()), _toConsumableArray3(forceEquip.map(function(item4) {
    return '"equip '.concat(toMaximizerName(item4), '"');
  }).sort()), _toConsumableArray3(preventEquip.map(function(item4) {
    return '-"equip '.concat(toMaximizerName(item4), '"');
  }).sort()), _toConsumableArray3(onlySlot.map(function(slot) {
    return "".concat(slot);
  }).sort()), _toConsumableArray3(preventSlot.map(function(slot) {
    return "-".concat(slot);
  }).sort()), _toConsumableArray3(Array.from(bonusEquip.entries()).filter(function(_ref8) {
    var _ref9 = _slicedToArray4(_ref8, 2), bonus = _ref9[1];
    return bonus !== 0;
  }).map(function(_ref10) {
    var _ref11 = _slicedToArray4(_ref10, 2), item4 = _ref11[0], bonus = _ref11[1];
    return "".concat(Math.round(bonus * 100) / 100, ' "bonus ').concat(toMaximizerName(item4), '"');
  }).sort())))).join(", "), untouchedSlots = cachedSlots.filter(function(slot) {
    return preventSlot.includes(slot) || onlySlot.length > 0 && !onlySlot.includes(slot);
  }), cacheKey = [objective].concat(_toConsumableArray3(untouchedSlots.map(function(slot) {
    return "".concat(slot, ":").concat((0, import_kolmafia7.equippedItem)(slot));
  }).sort()), [have($effect(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral2(["Offhand Remarkable"])))), options.updateOnLocationChange && (0, import_kolmafia7.myLocation)()]).join("; "), cacheEntry = checkCache(cacheKey, fullOptions);
  if (cacheEntry && !forceUpdate) {
    if (verifyCached(cacheEntry, !1)) return !0;
    if (logger_default.info("Equipment found in maximize cache, equipping..."), applyCached(cacheEntry, fullOptions), verifyCached(cacheEntry))
      return logger_default.info("Equipped cached ".concat(cacheKey)), !0;
    logger_default.warning("Maximize cache application failed, maximizing...");
  }
  var result = (0, import_kolmafia7.maximize)(objective, !1);
  return saveCached(cacheKey, fullOptions), result;
}
function mergeOptionalOptions(optionsA, optionsB) {
  for (var _len = arguments.length, keys = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++)
    keys[_key - 2] = arguments[_key];
  return keys.reduce(function(current, key) {
    return _objectSpread3(_objectSpread3({}, current), (optionsA[key] || optionsB[key]) === void 0 ? {} : _defineProperty5({}, key, optionsA[key] || optionsB[key]));
  }, {});
}
var _maximizeParameters = /* @__PURE__ */ new WeakMap(), _maximizeOptions = /* @__PURE__ */ new WeakMap(), Requirement = /* @__PURE__ */ function() {
  function Requirement2(maximizeParameters, maximizeOptions) {
    _classCallCheck6(this, Requirement2), _classPrivateFieldInitSpec(this, _maximizeParameters, void 0), _classPrivateFieldInitSpec(this, _maximizeOptions, void 0), _classPrivateFieldSet(_maximizeParameters, this, maximizeParameters), _classPrivateFieldSet(_maximizeOptions, this, maximizeOptions);
  }
  return _createClass6(Requirement2, [{
    key: "maximizeParameters",
    get: function() {
      return _classPrivateFieldGet(_maximizeParameters, this);
    }
  }, {
    key: "maximizeOptions",
    get: function() {
      return _classPrivateFieldGet(_maximizeOptions, this);
    }
    /**
     * Merges two requirements, concanating relevant arrays. Typically used in static form.
     *
     * @param other Requirement to merge with.
     * @returns A new merged Requirement
     */
  }, {
    key: "merge",
    value: function(other) {
      var _optionsA$forceEquip, _other$maximizeOption, _optionsA$preventEqui, _other$maximizeOption3, _optionsA$bonusEquip$, _optionsA$bonusEquip, _optionsB$bonusEquip$, _optionsB$bonusEquip, _optionsA$onlySlot, _optionsB$onlySlot, _optionsA$preventSlot, _optionsB$preventSlot, optionsA = this.maximizeOptions, optionsB = other.maximizeOptions, optionalBooleans = mergeOptionalOptions(optionsA, optionsB, "updateOnFamiliarChange", "updateOnCanEquipChanged", "updateOnLocationChange", "forceUpdate");
      return new Requirement2([].concat(_toConsumableArray3(this.maximizeParameters), _toConsumableArray3(other.maximizeParameters)), _objectSpread3(_objectSpread3({}, optionalBooleans), {}, {
        forceEquip: [].concat(_toConsumableArray3((_optionsA$forceEquip = optionsA.forceEquip) !== null && _optionsA$forceEquip !== void 0 ? _optionsA$forceEquip : []), _toConsumableArray3((_other$maximizeOption = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption !== void 0 ? _other$maximizeOption : [])).filter(function(x) {
          var _other$maximizeOption2;
          return !((_other$maximizeOption2 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption2 !== void 0 && _other$maximizeOption2.includes(x));
        }),
        preventEquip: [].concat(_toConsumableArray3((_optionsA$preventEqui = optionsA.preventEquip) !== null && _optionsA$preventEqui !== void 0 ? _optionsA$preventEqui : []), _toConsumableArray3((_other$maximizeOption3 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption3 !== void 0 ? _other$maximizeOption3 : [])).filter(function(x) {
          var _other$maximizeOption4;
          return !((_other$maximizeOption4 = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption4 !== void 0 && _other$maximizeOption4.includes(x));
        }),
        bonusEquip: new Map([].concat(_toConsumableArray3((_optionsA$bonusEquip$ = (_optionsA$bonusEquip = optionsA.bonusEquip) === null || _optionsA$bonusEquip === void 0 ? void 0 : _optionsA$bonusEquip.entries()) !== null && _optionsA$bonusEquip$ !== void 0 ? _optionsA$bonusEquip$ : []), _toConsumableArray3((_optionsB$bonusEquip$ = (_optionsB$bonusEquip = optionsB.bonusEquip) === null || _optionsB$bonusEquip === void 0 ? void 0 : _optionsB$bonusEquip.entries()) !== null && _optionsB$bonusEquip$ !== void 0 ? _optionsB$bonusEquip$ : []))),
        onlySlot: [].concat(_toConsumableArray3((_optionsA$onlySlot = optionsA.onlySlot) !== null && _optionsA$onlySlot !== void 0 ? _optionsA$onlySlot : []), _toConsumableArray3((_optionsB$onlySlot = optionsB.onlySlot) !== null && _optionsB$onlySlot !== void 0 ? _optionsB$onlySlot : [])),
        preventSlot: [].concat(_toConsumableArray3((_optionsA$preventSlot = optionsA.preventSlot) !== null && _optionsA$preventSlot !== void 0 ? _optionsA$preventSlot : []), _toConsumableArray3((_optionsB$preventSlot = optionsB.preventSlot) !== null && _optionsB$preventSlot !== void 0 ? _optionsB$preventSlot : []))
      }));
    }
    /**
     * Merges a set of requirements together, starting with an empty requirement.
     *
     * @param allRequirements Requirements to merge
     * @returns Merged requirements
     */
  }, {
    key: "maximize",
    value: (
      /**
       * Runs maximizeCached, using the maximizeParameters and maximizeOptions contained by this requirement.
       *
       * @returns Whether the maximize call succeeded.
       */
      function() {
        return maximizeCached(this.maximizeParameters, this.maximizeOptions);
      }
    )
    /**
     * Merges requirements, and then runs maximizeCached on the combined requirement.
     *
     * @param requirements Requirements to maximize on
     */
  }], [{
    key: "merge",
    value: function(allRequirements) {
      return allRequirements.reduce(function(x, y) {
        return x.merge(y);
      }, new Requirement2([], {}));
    }
  }, {
    key: "maximize",
    value: function() {
      for (var _len2 = arguments.length, requirements = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
        requirements[_key2] = arguments[_key2];
      Requirement2.merge(requirements).maximize();
    }
  }]);
}();

// node_modules/libram/dist/resources/2017/AsdonMartin.js
var AsdonMartin_exports = {};
__export(AsdonMartin_exports, {
  Driving: function() {
    return Driving;
  },
  drive: function() {
    return drive;
  },
  fillTo: function() {
    return fillTo;
  },
  fillWithInventoryTo: function() {
    return fillWithInventoryTo;
  },
  have: function() {
    return have2;
  },
  insertFuel: function() {
    return insertFuel;
  },
  installed: function() {
    return installed;
  },
  isFuelItem: function() {
    return isFuelItem;
  }
});
init_kolmafia_polyfill();
var import_kolmafia8 = require("kolmafia");
var _templateObject51, _templateObject211, _templateObject310, _templateObject410, _templateObject52, _templateObject62, _templateObject72, _templateObject82, _templateObject92, _templateObject103, _templateObject113, _templateObject123, _templateObject133;
function _slicedToArray5(r, e) {
  return _arrayWithHoles5(r) || _iterableToArrayLimit5(r, e) || _unsupportedIterableToArray7(r, e) || _nonIterableRest5();
}
function _nonIterableRest5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray7(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray7(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray7(r, a) : void 0;
  }
}
function _arrayLikeToArray7(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit5(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles5(r) {
  if (Array.isArray(r)) return r;
}
function _taggedTemplateLiteral3(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var PriceAge;
(function(PriceAge2) {
  PriceAge2[PriceAge2.HISTORICAL = 0] = "HISTORICAL", PriceAge2[PriceAge2.RECENT = 1] = "RECENT", PriceAge2[PriceAge2.TODAY = 2] = "TODAY";
})(PriceAge || (PriceAge = {}));
function installed() {
  return (0, import_kolmafia8.getWorkshed)() === $item(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral3(["Asdon Martin keyfob (on ring)"])));
}
function have2() {
  return installed() || have($item(_templateObject211 || (_templateObject211 = _taggedTemplateLiteral3(["Asdon Martin keyfob (on ring)"]))));
}
var fuelSkiplist = $items(_templateObject310 || (_templateObject310 = _taggedTemplateLiteral3(['cup of "tea", thermos of "whiskey", Lucky Lindy, Bee\'s Knees, Sockdollager, Ish Kabibble, Hot Socks, Phonus Balonus, Flivver, Sloppy Jalopy, glass of "milk"'])));
function priceTooOld(item4) {
  return (0, import_kolmafia8.historicalPrice)(item4) === 0 || (0, import_kolmafia8.historicalAge)(item4) >= 7;
}
function historicalPriceOrMax(item4) {
  var historical = (0, import_kolmafia8.historicalPrice)(item4);
  return historical < 0 ? 999999999 : historical;
}
function mallPriceOrMax(item4) {
  var mall = (0, import_kolmafia8.mallPrice)(item4);
  return mall < 0 ? 999999999 : mall;
}
function price(item4, priceAge) {
  switch (priceAge) {
    case PriceAge.HISTORICAL: {
      var historical = historicalPriceOrMax(item4);
      return historical === 0 ? mallPriceOrMax(item4) : historical;
    }
    case PriceAge.RECENT:
      return priceTooOld(item4) ? mallPriceOrMax(item4) : historicalPriceOrMax(item4);
    case PriceAge.TODAY:
      return mallPriceOrMax(item4);
  }
}
function inventoryItems() {
  return import_kolmafia8.Item.all().filter(isFuelItem).filter(function(item4) {
    return have(item4) && [100, (0, import_kolmafia8.autosellPrice)(item4)].includes(price(item4, PriceAge.RECENT));
  });
}
function calculateFuelUnitCost(it) {
  var priceAge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : PriceAge.RECENT, units = getAverageAdventures(it);
  return price(it, priceAge) / units;
}
function isFuelItem(it) {
  return !(0, import_kolmafia8.isNpcItem)(it) && it.fullness + it.inebriety > 0 && getAverageAdventures(it) > 0 && it.tradeable && it.discardable && !fuelSkiplist.includes(it);
}
function getBestFuels() {
  var allFuel = import_kolmafia8.Item.all().filter(isFuelItem);
  allFuel.filter(function(item4) {
    return (0, import_kolmafia8.historicalPrice)(item4) === 0;
  }).length > 100 && ((0, import_kolmafia8.mallPrices)("food"), (0, import_kolmafia8.mallPrices)("booze"));
  var keyHistorical = function(item4) {
    return calculateFuelUnitCost(item4, PriceAge.HISTORICAL);
  };
  allFuel.sort(function(x, y) {
    return keyHistorical(x) - keyHistorical(y);
  });
  var bestUnitCost = keyHistorical(allFuel[0]), firstBadIndex = allFuel.findIndex(function(item4) {
    return keyHistorical(item4) > 5 * bestUnitCost;
  }), potentialFuel = firstBadIndex > 0 ? allFuel.slice(0, firstBadIndex) : allFuel;
  potentialFuel.filter(function(item4) {
    return priceTooOld(item4);
  }).length > 100 && ((0, import_kolmafia8.mallPrices)("food"), (0, import_kolmafia8.mallPrices)("booze"));
  var key1 = function(item4) {
    return -getAverageAdventures(item4);
  }, key2 = function(item4) {
    return calculateFuelUnitCost(item4, PriceAge.RECENT);
  };
  potentialFuel.sort(function(x, y) {
    return key1(x) - key1(y);
  }), potentialFuel.sort(function(x, y) {
    return key2(x) - key2(y);
  });
  var candidates = potentialFuel.slice(0, 10), key3 = function(item4) {
    return calculateFuelUnitCost(item4, PriceAge.TODAY);
  };
  if (candidates.sort(function(x, y) {
    return key3(x) - key3(y);
  }), calculateFuelUnitCost(candidates[0], PriceAge.TODAY) > 100)
    throw new Error("Could not identify any fuel with efficiency better than 100 meat per fuel. This means something went wrong.");
  return candidates;
}
function insertFuel(it) {
  var quantity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, result = (0, import_kolmafia8.visitUrl)("campground.php?action=fuelconvertor&pwd&qty=".concat(quantity, "&iid=").concat(it.id, "&go=Convert%21"));
  return result.includes("The display updates with a");
}
function fillTo(targetUnits) {
  if (!installed()) return !1;
  for (; (0, import_kolmafia8.getFuel)() < targetUnits; ) {
    var _ref = (0, import_kolmafia8.canInteract)() ? getBestFuels() : [$item(_templateObject410 || (_templateObject410 = _taggedTemplateLiteral3(["loaf of soda bread"]))), void 0], _ref2 = _slicedToArray5(_ref, 2), bestFuel = _ref2[0], secondBest = _ref2[1], count = Math.ceil(targetUnits / getAverageAdventures(bestFuel)), ceiling = void 0;
    if (secondBest) {
      var efficiencyOfSecondBest = (0, import_kolmafia8.mallPrice)(secondBest) / getAverageAdventures(secondBest);
      ceiling = Math.ceil(efficiencyOfSecondBest * getAverageAdventures(bestFuel));
    }
    if ((0, import_kolmafia8.canInteract)() ? ceiling ? (0, import_kolmafia8.buy)(count, bestFuel, ceiling) : (0, import_kolmafia8.buy)(count, bestFuel) : (0, import_kolmafia8.retrieveItem)(count, bestFuel), !insertFuel(bestFuel, Math.min((0, import_kolmafia8.itemAmount)(bestFuel), count)))
      throw new Error("Failed to fuel Asdon Martin.");
  }
  return (0, import_kolmafia8.getFuel)() >= targetUnits;
}
function fillWithBestInventoryItem(targetUnits) {
  var options = inventoryItems().sort(function(a, b) {
    return getAverageAdventures(b) / (0, import_kolmafia8.autosellPrice)(b) - getAverageAdventures(a) / (0, import_kolmafia8.autosellPrice)(a);
  });
  if (options.length === 0) return !1;
  var best = options[0];
  if ((0, import_kolmafia8.autosellPrice)(best) / getAverageAdventures(best) > 100) return !1;
  var amountToUse = clamp(Math.ceil(targetUnits / getAverageAdventures(best)), 0, (0, import_kolmafia8.itemAmount)(best));
  return insertFuel(best, amountToUse);
}
function fillWithInventoryTo(targetUnits) {
  if (!installed()) return !1;
  for (var continueFuelingFromInventory = !0; (0, import_kolmafia8.getFuel)() < targetUnits && continueFuelingFromInventory; )
    continueFuelingFromInventory && (continueFuelingFromInventory = fillWithBestInventoryItem(targetUnits));
  return fillTo(targetUnits);
}
var Driving = {
  Obnoxiously: $effect(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral3(["Driving Obnoxiously"]))),
  Stealthily: $effect(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral3(["Driving Stealthily"]))),
  Wastefully: $effect(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral3(["Driving Wastefully"]))),
  Safely: $effect(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral3(["Driving Safely"]))),
  Recklessly: $effect(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral3(["Driving Recklessly"]))),
  Intimidatingly: $effect(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral3(["Driving Intimidatingly"]))),
  Quickly: $effect(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral3(["Driving Quickly"]))),
  Observantly: $effect(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral3(["Driving Observantly"]))),
  Waterproofly: $effect(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral3(["Driving Waterproofly"])))
};
function drive(style) {
  var turns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, preferInventory = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  if (!Object.values(Driving).includes(style) || !installed()) return !1;
  if ((0, import_kolmafia8.haveEffect)(style) >= turns) return !0;
  var fuelNeeded = 37 * Math.ceil((turns - (0, import_kolmafia8.haveEffect)(style)) / 30);
  for ((preferInventory ? fillWithInventoryTo : fillTo)(fuelNeeded); (0, import_kolmafia8.getFuel)() >= 37 && (0, import_kolmafia8.haveEffect)(style) < turns; )
    (0, import_kolmafia8.cliExecute)("asdonmartin drive ".concat(style.name.replace("Driving ", "")));
  return (0, import_kolmafia8.haveEffect)(style) >= turns;
}

// node_modules/libram/dist/resources/index.js
init_kolmafia_polyfill();

// node_modules/libram/dist/Copier.js
init_kolmafia_polyfill();
function _defineProperties7(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey7(o.key), o);
  }
}
function _createClass7(e, r, t) {
  return r && _defineProperties7(e.prototype, r), t && _defineProperties7(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _classCallCheck7(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperty6(e, r, t) {
  return (r = _toPropertyKey7(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey7(t) {
  var i = _toPrimitive7(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive7(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
var Copier = /* @__PURE__ */ _createClass7(function Copier2(couldCopy, prepare, canCopy, copiedMonster, fightCopy) {
  _classCallCheck7(this, Copier2), _defineProperty6(this, "couldCopy", void 0), _defineProperty6(this, "prepare", void 0), _defineProperty6(this, "canCopy", void 0), _defineProperty6(this, "copiedMonster", void 0), _defineProperty6(this, "fightCopy", null), this.couldCopy = couldCopy, this.prepare = prepare, this.canCopy = canCopy, this.copiedMonster = copiedMonster, fightCopy && (this.fightCopy = fightCopy);
});

// node_modules/libram/dist/modifier.js
init_kolmafia_polyfill();
var import_kolmafia9 = require("kolmafia");

// node_modules/libram/dist/modifierTypes.js
init_kolmafia_polyfill();
var stringModifiers = ["Class", "Intrinsic Effect", "Equalize", "Wiki Name", "Modifiers", "Outfit", "Stat Tuning", "Effect", "Equips On", "Familiar Effect", "Jiggle", "Equalize Muscle", "Equalize Mysticality", "Equalize Moxie", "Avatar", "Rollover Effect", "Skill", "Floor Buffed Muscle", "Floor Buffed Mysticality", "Floor Buffed Moxie", "Plumber Stat", "Recipe", "Evaluated Modifiers"], booleanModifiers = ["Softcore Only", "Single Equip", "Never Fumble", "Weakens Monster", "Free Pull", "Variable", "Nonstackable Watch", "Cold Immunity", "Hot Immunity", "Sleaze Immunity", "Spooky Immunity", "Stench Immunity", "Cold Vulnerability", "Hot Vulnerability", "Sleaze Vulnerability", "Spooky Vulnerability", "Stench Vulnerability", "Moxie Controls MP", "Moxie May Control MP", "Four Songs", "Adventure Underwater", "Underwater Familiar", "Generic", "Unarmed", "No Pull", "Lasts Until Rollover", "Attacks Can't Miss", "Pirate", "Breakable", "Drops Items", "Drops Meat", "Volleyball or Sombrero", "Extra Pickpocket", "Negative Status Resist"], numericModifiers = ["Familiar Weight", "Monster Level", "Combat Rate", "Initiative", "Experience", "Item Drop", "Meat Drop", "Damage Absorption", "Damage Reduction", "Cold Resistance", "Hot Resistance", "Sleaze Resistance", "Spooky Resistance", "Stench Resistance", "Mana Cost", "Moxie", "Moxie Percent", "Muscle", "Muscle Percent", "Mysticality", "Mysticality Percent", "Maximum HP", "Maximum HP Percent", "Maximum MP", "Maximum MP Percent", "Weapon Damage", "Ranged Damage", "Spell Damage", "Spell Damage Percent", "Cold Damage", "Hot Damage", "Sleaze Damage", "Spooky Damage", "Stench Damage", "Cold Spell Damage", "Hot Spell Damage", "Sleaze Spell Damage", "Spooky Spell Damage", "Stench Spell Damage", "Underwater Combat Rate", "Fumble", "HP Regen Min", "HP Regen Max", "MP Regen Min", "MP Regen Max", "Adventures", "Familiar Weight Percent", "Weapon Damage Percent", "Ranged Damage Percent", "Stackable Mana Cost", "Hobo Power", "Base Resting HP", "Resting HP Percent", "Bonus Resting HP", "Base Resting MP", "Resting MP Percent", "Bonus Resting MP", "Critical Hit Percent", "PvP Fights", "Volleyball", "Sombrero", "Leprechaun", "Fairy", "Meat Drop Penalty", "Hidden Familiar Weight", "Item Drop Penalty", "Initiative Penalty", "Food Drop", "Booze Drop", "Hat Drop", "Weapon Drop", "Offhand Drop", "Shirt Drop", "Pants Drop", "Accessory Drop", "Volleyball Effectiveness", "Sombrero Effectiveness", "Leprechaun Effectiveness", "Fairy Effectiveness", "Familiar Weight Cap", "Slime Resistance", "Slime Hates It", "Spell Critical Percent", "Muscle Experience", "Mysticality Experience", "Moxie Experience", "Effect Duration", "Candy Drop", "DB Combat Damage", "Sombrero Bonus", "Familiar Experience", "Sporadic Meat Drop", "Sporadic Item Drop", "Meat Bonus", "Pickpocket Chance", "Combat Mana Cost", "Muscle Experience Percent", "Mysticality Experience Percent", "Moxie Experience Percent", "Minstrel Level", "Muscle Limit", "Mysticality Limit", "Moxie Limit", "Song Duration", "Prismatic Damage", "Smithsness", "Supercold Resistance", "Reduce Enemy Defense", "Pool Skill", "Familiar Damage", "Gear Drop", "Maximum Hooch", "Water Level", "Crimbot Outfit Power", "Familiar Tuning Muscle", "Familiar Tuning Mysticality", "Familiar Tuning Moxie", "Random Monster Modifiers", "Luck", "Othello Skill", "Disco Style", "Rollover Effect Duration", "Sixgun Damage", "Fishing Skill", "Additional Song", "Sprinkle Drop", "Absorb Adventures", "Absorb Stats", "Rubee Drop", "Kruegerand Drop", "WarBear Armor Penetration", "Maximum PP", "Plumber Power", "Drippy Damage", "Drippy Resistance", "Energy", "Scrap", "Familiar Action Bonus", "Water", "Spleen Drop", "Potion Drop", "Sauce Spell Damage", "Monster Level Percent", "Food Fairy", "Booze Fairy", "Candy Fairy", "Food Fairy Effectiveness", "Booze Fairy Effectiveness", "Candy Fairy Effectiveness", "Damage Aura", "Sporadic Damage Aura", "Thorns", "Sporadic Thorns", "Stomach Capacity", "Liver Capacity", "Spleen Capacity", "Free Rests", "Leaves", "Elf Warfare Effectiveness", "Pirate Warfare Effectiveness", "MPC Drop", "Piece of Twelve Drop", "Combat Item Damage Percent"];

// node_modules/libram/dist/modifier.js
function get2(name, subject) {
  if (arrayContains(name, booleanModifiers))
    return subject === void 0 ? (0, import_kolmafia9.booleanModifier)(name) : (0, import_kolmafia9.booleanModifier)(subject, name);
  if (arrayContains(name, numericModifiers))
    return subject === void 0 ? (0, import_kolmafia9.numericModifier)(name) : (0, import_kolmafia9.numericModifier)(subject, name);
  if (arrayContains(name, stringModifiers))
    return subject === void 0 ? (0, import_kolmafia9.stringModifier)(name) : (0, import_kolmafia9.stringModifier)(subject, name);
}

// node_modules/libram/dist/resources/2016/SourceTerminal.js
var SourceTerminal_exports = {};
__export(SourceTerminal_exports, {
  Buffs: function() {
    return Buffs;
  },
  Digitize: function() {
    return Digitize;
  },
  Items: function() {
    return Items;
  },
  RolloverBuffs: function() {
    return RolloverBuffs;
  },
  Skills: function() {
    return Skills;
  },
  canDigitize: function() {
    return canDigitize;
  },
  couldDigitize: function() {
    return couldDigitize;
  },
  duplicateUsesRemaining: function() {
    return duplicateUsesRemaining;
  },
  educate: function() {
    return educate;
  },
  enhance: function() {
    return enhance;
  },
  enhanceBuffDuration: function() {
    return enhanceBuffDuration;
  },
  enhanceUsesRemaining: function() {
    return enhanceUsesRemaining;
  },
  enquiry: function() {
    return enquiry;
  },
  enquiryBuffDuration: function() {
    return enquiryBuffDuration;
  },
  extrude: function() {
    return extrude;
  },
  getChips: function() {
    return getChips;
  },
  getDigitizeMonster: function() {
    return getDigitizeMonster;
  },
  getDigitizeMonsterCount: function() {
    return getDigitizeMonsterCount;
  },
  getDigitizeUses: function() {
    return getDigitizeUses;
  },
  getDigitizeUsesRemaining: function() {
    return getDigitizeUsesRemaining;
  },
  getDuplicateUses: function() {
    return getDuplicateUses;
  },
  getEnhanceUses: function() {
    return getEnhanceUses;
  },
  getMaximumDigitizeUses: function() {
    return getMaximumDigitizeUses;
  },
  getPortscanUses: function() {
    return getPortscanUses;
  },
  getSkills: function() {
    return getSkills;
  },
  have: function() {
    return have3;
  },
  isCurrentSkill: function() {
    return isCurrentSkill;
  },
  maximumDuplicateUses: function() {
    return maximumDuplicateUses;
  },
  maximumEnhanceUses: function() {
    return maximumEnhanceUses;
  },
  prepareDigitize: function() {
    return prepareDigitize;
  }
});
init_kolmafia_polyfill();
var import_kolmafia10 = require("kolmafia");
var _templateObject53, _templateObject213, _templateObject311, _templateObject411, _templateObject54, _templateObject63, _templateObject73, _templateObject83, _templateObject93, _templateObject104, _templateObject114, _templateObject124, _templateObject134, _templateObject143, _templateObject153, _templateObject163, _templateObject173, _templateObject183, _templateObject193, _templateObject203, _templateObject214, _templateObject223, _templateObject233, _templateObject243, _templateObject253, _templateObject263, _templateObject273;
function _createForOfIteratorHelper6(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray8(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray8(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray8(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray8(r, a) : void 0;
  }
}
function _arrayLikeToArray8(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _taggedTemplateLiteral4(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var item = $item(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral4(["Source terminal"])));
function have3() {
  return haveInCampground(item);
}
var Buffs = {
  Items: $effect(_templateObject213 || (_templateObject213 = _taggedTemplateLiteral4(["items.enh"]))),
  Meat: $effect(_templateObject311 || (_templateObject311 = _taggedTemplateLiteral4(["meat.enh"]))),
  Init: $effect(_templateObject411 || (_templateObject411 = _taggedTemplateLiteral4(["init.enh"]))),
  Critical: $effect(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral4(["critical.enh"]))),
  Damage: $effect(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral4(["damage.enh"]))),
  Substats: $effect(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral4(["substats.enh"])))
};
function enhance(buff) {
  return Object.values(Buffs).includes(buff) ? (0, import_kolmafia10.cliExecute)("terminal enhance ".concat(buff.name)) : !1;
}
var RolloverBuffs = {
  /** +5 Familiar Weight */
  Familiar: $effect(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral4(["familiar.enq"]))),
  /** +25 ML */
  Monsters: $effect(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral4(["monsters.enq"]))),
  /** +5 Prismatic Resistance */
  Protect: $effect(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral4(["protect.enq"]))),
  /** +100% Muscle, +100% Mysticality, +100% Moxie */
  Stats: $effect(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral4(["stats.enq"])))
};
function enquiry(rolloverBuff) {
  return Object.values(RolloverBuffs).includes(rolloverBuff) ? (0, import_kolmafia10.cliExecute)("terminal enquiry ".concat(rolloverBuff.name)) : !1;
}
var Skills = {
  /** Collect Source essence from enemies once per combat */
  Extract: $skill(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral4(["Extract"]))),
  /** Stagger and create a wandering monster 1-3 times per day */
  Digitize: $skill(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral4(["Digitize"]))),
  /** Stagger and deal 25% of enemy HP in damage once per combat */
  Compress: $skill(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral4(["Compress"]))),
  /** Double monster's HP, attack, defence, attacks per round and item drops once per fight and once per day (five in The Source) */
  Duplicate: $skill(_templateObject153 || (_templateObject153 = _taggedTemplateLiteral4(["Duplicate"]))),
  /** Causes government agent/Source Agent wanderer next turn once per combat and three times per day */
  Portscan: $skill(_templateObject163 || (_templateObject163 = _taggedTemplateLiteral4(["Portscan"]))),
  /** Increase Max MP by 100% and recover 1000 MP once per combat with a 30 turn cooldown */
  Turbo: $skill(_templateObject173 || (_templateObject173 = _taggedTemplateLiteral4(["Turbo"])))
};
function educate(skills) {
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  if (arrayEquals(skillsArray, getSkills())) return !0;
  var _iterator3 = _createForOfIteratorHelper6(skillsArray), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var skill = _step3.value;
      if (!Object.values(Skills).includes(skill)) return !1;
      (0, import_kolmafia10.cliExecute)("terminal educate ".concat(skill.name.toLowerCase(), ".edu"));
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return !0;
}
function getSkills() {
  return ["sourceTerminalEducate1", "sourceTerminalEducate2"].map(function(p) {
    return get(p);
  }).filter(Boolean).map(function(s) {
    return import_kolmafia10.Skill.get(s.slice(0, -4));
  });
}
function isCurrentSkill(skills) {
  var currentSkills = getSkills(), skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  return skillsArray.every(function(skill) {
    return currentSkills.includes(skill);
  });
}
var Items = /* @__PURE__ */ new Map([[$item(_templateObject183 || (_templateObject183 = _taggedTemplateLiteral4(["browser cookie"]))), "food.ext"], [$item(_templateObject193 || (_templateObject193 = _taggedTemplateLiteral4(["hacked gibson"]))), "booze.ext"], [$item(_templateObject203 || (_templateObject203 = _taggedTemplateLiteral4(["Source shades"]))), "goggles.ext"], [$item(_templateObject214 || (_templateObject214 = _taggedTemplateLiteral4(["Source terminal GRAM chip"]))), "gram.ext"], [$item(_templateObject223 || (_templateObject223 = _taggedTemplateLiteral4(["Source terminal PRAM chip"]))), "pram.ext"], [$item(_templateObject233 || (_templateObject233 = _taggedTemplateLiteral4(["Source terminal SPAM chip"]))), "spam.ext"], [$item(_templateObject243 || (_templateObject243 = _taggedTemplateLiteral4(["Source terminal CRAM chip"]))), "cram.ext"], [$item(_templateObject253 || (_templateObject253 = _taggedTemplateLiteral4(["Source terminal DRAM chip"]))), "dram.ext"], [$item(_templateObject263 || (_templateObject263 = _taggedTemplateLiteral4(["Source terminal TRAM chip"]))), "tram.ext"], [$item(_templateObject273 || (_templateObject273 = _taggedTemplateLiteral4(["software bug"]))), "familiar.ext"]]);
function extrude(item4) {
  var fileName = Items.get(item4);
  return fileName ? (0, import_kolmafia10.cliExecute)("terminal extrude ".concat(fileName)) : !1;
}
function getChips() {
  return get("sourceTerminalChips").split(",");
}
function getDigitizeUses() {
  return get("_sourceTerminalDigitizeUses");
}
function getDigitizeMonster() {
  return get("_sourceTerminalDigitizeMonster");
}
function getDigitizeMonsterCount() {
  return get("_sourceTerminalDigitizeMonsterCount");
}
function getMaximumDigitizeUses() {
  var chips = getChips();
  return 1 + (chips.includes("TRAM") ? 1 : 0) + (chips.includes("TRIGRAM") ? 1 : 0);
}
function getDigitizeUsesRemaining() {
  return getMaximumDigitizeUses() - getDigitizeUses();
}
function couldDigitize() {
  return getDigitizeUses() < getMaximumDigitizeUses();
}
function prepareDigitize() {
  return isCurrentSkill(Skills.Digitize) ? !0 : educate(Skills.Digitize);
}
function canDigitize() {
  return couldDigitize() && getSkills().includes(Skills.Digitize);
}
var Digitize = new Copier(function() {
  return couldDigitize();
}, function() {
  return prepareDigitize();
}, function() {
  return canDigitize();
}, function() {
  return getDigitizeMonster();
});
function getDuplicateUses() {
  return get("_sourceTerminalDuplicateUses");
}
function getEnhanceUses() {
  return get("_sourceTerminalEnhanceUses");
}
function getPortscanUses() {
  return get("_sourceTerminalPortscanUses");
}
function maximumDuplicateUses() {
  return (0, import_kolmafia10.myPath)() === import_kolmafia10.Path.get("The Source") ? 5 : 1;
}
function duplicateUsesRemaining() {
  return maximumDuplicateUses() - getDuplicateUses();
}
function maximumEnhanceUses() {
  return 1 + getChips().filter(function(chip) {
    return ["CRAM", "SCRAM"].includes(chip);
  }).length;
}
function enhanceUsesRemaining() {
  return maximumEnhanceUses() - getEnhanceUses();
}
function enhanceBuffDuration() {
  return 25 + get("sourceTerminalPram") * 5 + (getChips().includes("INGRAM") ? 25 : 0);
}
function enquiryBuffDuration() {
  return 50 + 10 * get("sourceTerminalGram") + (getChips().includes("DIAGRAM") ? 50 : 0);
}

// node_modules/libram/dist/resources/2018/LatteLoversMembersMug.js
var LatteLoversMembersMug_exports = {};
__export(LatteLoversMembersMug_exports, {
  currentIngredients: function() {
    return currentIngredients;
  },
  fill: function() {
    return fill;
  },
  have: function() {
    return have4;
  },
  ingredientsUnlocked: function() {
    return ingredientsUnlocked;
  },
  locationOf: function() {
    return locationOf;
  },
  modifierOf: function() {
    return modifierOf;
  },
  refillsRemaining: function() {
    return refillsRemaining;
  },
  sniffedMonster: function() {
    return sniffedMonster;
  }
});
init_kolmafia_polyfill();
var import_kolmafia12 = require("kolmafia");

// node_modules/libram/dist/counter.js
var counter_exports = {};
__export(counter_exports, {
  exists: function() {
    return exists;
  },
  get: function() {
    return get3;
  },
  set: function() {
    return set;
  }
});
init_kolmafia_polyfill();
var import_kolmafia11 = require("kolmafia");
function get3(counter) {
  var value3 = (0, import_kolmafia11.getCounter)(counter);
  return value3 === -1 ? (0, import_kolmafia11.getCounters)(counter, -1, -1).trim() === "" ? 1 / 0 : -1 : value3;
}
function exists(counter) {
  return (0, import_kolmafia11.getCounter)(counter) !== -1 || (0, import_kolmafia11.getCounters)(counter, -1, -1).trim() !== "";
}
function set(counter, duration) {
  return (0, import_kolmafia11.cliExecute)("counters add ".concat(duration, " ").concat(counter)), get3(counter) !== null;
}

// node_modules/libram/dist/resources/2018/LatteLoversMembersMug.js
var _templateObject55, _templateObject215, _templateObject313, _templateObject412, _templateObject56, _templateObject64, _templateObject74, _templateObject84, _templateObject94, _templateObject105, _templateObject115, _templateObject125, _templateObject135, _templateObject144, _templateObject154, _templateObject164, _templateObject174, _templateObject184, _templateObject194, _templateObject204, _templateObject216, _templateObject224, _templateObject234, _templateObject244, _templateObject254, _templateObject264, _templateObject274, _templateObject283, _templateObject293, _templateObject303, _templateObject314, _templateObject323, _templateObject333, _templateObject343, _templateObject353, _templateObject362, _templateObject372, _templateObject382, _templateObject392, _templateObject402, _templateObject413, _templateObject422, _templateObject432, _templateObject442, _templateObject452, _templateObject462, _templateObject472, _templateObject482, _templateObject492, _templateObject502, _templateObject512, _templateObject522, _templateObject532;
function _taggedTemplateLiteral5(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function have4() {
  return have($item(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral5(["latte lovers member's mug"]))));
}
function sniffedMonster() {
  return exists("Latte Monster") ? get("_latteMonster") : null;
}
function refillsRemaining() {
  return clamp(3 - get("_latteRefillsUsed"), 0, 3);
}
var INGREDIENTS = {
  ancient: {
    modifier: {
      "Spooky Damage": 50
    },
    location: $location(_templateObject215 || (_templateObject215 = _taggedTemplateLiteral5(["The Mouldering Mansion"])))
  },
  asp: {
    modifier: {
      "Weapon Damage": 25
    },
    location: $location(_templateObject313 || (_templateObject313 = _taggedTemplateLiteral5(["The Middle Chamber"])))
  },
  basil: {
    modifier: {
      "HP Regen Min": 5,
      "HP Regen Max": 5
    },
    location: $location(_templateObject412 || (_templateObject412 = _taggedTemplateLiteral5(["The Overgrown Lot"])))
  },
  belgian: {
    modifier: {
      "Moxie Percent": 20,
      "Mysticality Percent": 20,
      "Muscle Percent": 20
    },
    location: $location(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral5(["Whitey's Grove"])))
  },
  chalk: {
    modifier: {
      "Cold Damage": 25
    },
    location: $location(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral5(["The Haunted Billiards Room"])))
  },
  "bug-thistle": {
    modifier: {
      Mysticality: 20
    },
    location: $location(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral5(["The Bugbear Pen"])))
  },
  butternut: {
    modifier: {
      "Spell Damage": 10
    },
    location: $location(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral5(["Madness Bakery"])))
  },
  cajun: {
    modifier: {
      "Meat Drop": 40
    },
    location: $location(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral5(["The Black Forest"])))
  },
  carrot: {
    modifier: {
      "Item Drop": 20
    },
    location: $location(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral5(["The Dire Warren"])))
  },
  carrrdamom: {
    modifier: {
      "MP Regen Min": 4,
      "MP Regen Max": 6
    },
    location: $location(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral5(["Barrrney's Barrr"])))
  },
  chili: {
    modifier: {
      "Hot Resistance": 3
    },
    location: $location(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral5(["The Haunted Kitchen"])))
  },
  clove: {
    modifier: {
      "Stench Resistance": 3
    },
    location: $location(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral5(["The Sleazy Back Alley"])))
  },
  coal: {
    modifier: {
      "Hot Damage": 25
    },
    location: $location(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral5(["The Haunted Boiler Room"])))
  },
  cocoa: {
    modifier: {
      "Cold Resistance": 3
    },
    location: $location(_templateObject154 || (_templateObject154 = _taggedTemplateLiteral5(["The Icy Peak"])))
  },
  diet: {
    modifier: {
      Initiative: 50
    },
    location: $location(_templateObject164 || (_templateObject164 = _taggedTemplateLiteral5(["Battlefield (No Uniform)"])))
  },
  dwarf: {
    modifier: {
      Muscle: 30
    },
    location: $location(_templateObject174 || (_templateObject174 = _taggedTemplateLiteral5(["Itznotyerzitz Mine"])))
  },
  dyspepsi: {
    modifier: {
      Initiative: 25
    },
    location: $location(_templateObject184 || (_templateObject184 = _taggedTemplateLiteral5(["Battlefield (Dyspepsi Uniform)"])))
  },
  filth: {
    modifier: {
      "Damage Reduction": 20
    },
    location: $location(_templateObject194 || (_templateObject194 = _taggedTemplateLiteral5(["The Feeding Chamber"])))
  },
  grass: {
    modifier: {
      Experience: 3
    },
    location: $location(_templateObject204 || (_templateObject204 = _taggedTemplateLiteral5(["The Hidden Park"])))
  },
  fungus: {
    modifier: {
      "Maximum MP": 30
    },
    location: $location(_templateObject216 || (_templateObject216 = _taggedTemplateLiteral5(["The Fungal Nethers"])))
  },
  mold: {
    modifier: {
      "Spooky Damage": 20
    },
    location: $location(_templateObject224 || (_templateObject224 = _taggedTemplateLiteral5(["The Unquiet Garves"])))
  },
  greek: {
    modifier: {
      "Sleaze Damage": 25
    },
    location: $location(_templateObject234 || (_templateObject234 = _taggedTemplateLiteral5(["Wartime Frat House"])))
  },
  grobold: {
    modifier: {
      "Sleaze Damage": 25
    },
    location: $location(_templateObject244 || (_templateObject244 = _taggedTemplateLiteral5(["The Old Rubee Mine"])))
  },
  guarna: {
    modifier: {
      Adventures: 4
    },
    location: $location(_templateObject254 || (_templateObject254 = _taggedTemplateLiteral5(["The Bat Hole Entrance"])))
  },
  gunpowder: {
    modifier: {
      "Weapon Damage": 50
    },
    location: $location(_templateObject264 || (_templateObject264 = _taggedTemplateLiteral5(["1st Floor, Shiawase-Mitsuhama Building"])))
  },
  healing: {
    modifier: {
      "HP Regen Min": 10,
      "HP Regen Max": 20
    },
    location: $location(_templateObject274 || (_templateObject274 = _taggedTemplateLiteral5(["The Daily Dungeon"])))
  },
  hellion: {
    modifier: {
      "PvP Fights": 6
    },
    location: $location(_templateObject283 || (_templateObject283 = _taggedTemplateLiteral5(["The Dark Neck of the Woods"])))
  },
  hobo: {
    modifier: {
      "Damage Absorption": 50
    },
    location: $location(_templateObject293 || (_templateObject293 = _taggedTemplateLiteral5(["Hobopolis Town Square"])))
  },
  greasy: {
    modifier: {
      "Muscle Percent": 50
    },
    location: $location(_templateObject303 || (_templateObject303 = _taggedTemplateLiteral5(["Cobb's Knob Barracks"])))
  },
  wing: {
    modifier: {
      "Combat Rate": 10
    },
    location: $location(_templateObject314 || (_templateObject314 = _taggedTemplateLiteral5(["The Dark Heart of the Woods"])))
  },
  ink: {
    modifier: {
      "Combat Rate": -10
    },
    location: $location(_templateObject323 || (_templateObject323 = _taggedTemplateLiteral5(["The Haunted Library"])))
  },
  kombucha: {
    modifier: {
      "Stench Damage": 25
    },
    location: $location(_templateObject333 || (_templateObject333 = _taggedTemplateLiteral5(["Wartime Hippy Camp"])))
  },
  lihc: {
    modifier: {
      "Spooky Damage": 25
    },
    location: $location(_templateObject343 || (_templateObject343 = _taggedTemplateLiteral5(["The Defiled Niche"])))
  },
  lizard: {
    modifier: {
      "MP Regen Min": 5,
      "MP Regen Max": 15
    },
    location: $location(_templateObject353 || (_templateObject353 = _taggedTemplateLiteral5(["The Arid, Extra-Dry Desert"])))
  },
  macaroni: {
    modifier: {
      "Maximum HP": 20
    },
    location: $location(_templateObject362 || (_templateObject362 = _taggedTemplateLiteral5(["The Haunted Pantry"])))
  },
  mega: {
    modifier: {
      "Moxie Percent": 50
    },
    location: $location(_templateObject372 || (_templateObject372 = _taggedTemplateLiteral5(["Cobb's Knob Laboratory"])))
  },
  oil: {
    modifier: {
      "Sleaze Damage": 20
    },
    location: $location(_templateObject382 || (_templateObject382 = _taggedTemplateLiteral5(["The Old Landfill"])))
  },
  msg: {
    modifier: {
      "Critical Hit Percent": 15
    },
    location: $location(_templateObject392 || (_templateObject392 = _taggedTemplateLiteral5(["The Briniest Deepests"])))
  },
  norwhal: {
    modifier: {
      "Maximum HP Percent": 200
    },
    location: $location(_templateObject402 || (_templateObject402 = _taggedTemplateLiteral5(["The Ice Hole"])))
  },
  paint: {
    modifier: {
      "Prismatic Damage": 5
    },
    location: $location(_templateObject413 || (_templateObject413 = _taggedTemplateLiteral5(["The Haunted Gallery"])))
  },
  paradise: {
    modifier: {
      Moxie: 20,
      Muscle: 20,
      Mysticality: 20
    },
    location: $location(_templateObject422 || (_templateObject422 = _taggedTemplateLiteral5(["The Stately Pleasure Dome"])))
  },
  rawhide: {
    modifier: {
      "Familiar Weight": 5
    },
    location: $location(_templateObject432 || (_templateObject432 = _taggedTemplateLiteral5(["The Spooky Forest"])))
  },
  rock: {
    modifier: {
      "Critical Hit Percent": 10
    },
    location: $location(_templateObject442 || (_templateObject442 = _taggedTemplateLiteral5(["The Brinier Deepers"])))
  },
  salt: {
    modifier: {
      "Critical Hit Percent": 5
    },
    location: $location(_templateObject452 || (_templateObject452 = _taggedTemplateLiteral5(["The Briny Deeps"])))
  },
  sandalwood: {
    modifier: {
      Moxie: 5,
      Muscle: 5,
      Mysticality: 5
    },
    location: $location(_templateObject462 || (_templateObject462 = _taggedTemplateLiteral5(["Noob Cave"])))
  },
  sausage: {
    modifier: {
      "Mysticality Percent": 50
    },
    location: $location(_templateObject472 || (_templateObject472 = _taggedTemplateLiteral5(["Cobb's Knob Kitchens"])))
  },
  space: {
    modifier: {
      Moxie: 10,
      Muscle: 10,
      Mysticality: 10
    },
    location: $location(_templateObject482 || (_templateObject482 = _taggedTemplateLiteral5(["The Hole in the Sky"])))
  },
  squash: {
    modifier: {
      "Spell Damage": 10
    },
    location: $location(_templateObject492 || (_templateObject492 = _taggedTemplateLiteral5(["The Copperhead Club"])))
  },
  teeth: {
    modifier: {
      "Spooky Damage": 25,
      "Weapon Damage": 25
    },
    location: $location(_templateObject502 || (_templateObject502 = _taggedTemplateLiteral5(["The VERY Unquiet Garves"])))
  },
  vitamin: {
    modifier: {
      "Familiar Experience": 3
    },
    location: $location(_templateObject512 || (_templateObject512 = _taggedTemplateLiteral5(["The Dark Elbow of the Woods"])))
  },
  flour: {
    modifier: {
      "Sleaze Resistance": 3
    },
    location: $location(_templateObject522 || (_templateObject522 = _taggedTemplateLiteral5(["The Road to the White Citadel"])))
  },
  squamous: {
    modifier: {
      "Spooky Resistance": 3
    },
    location: $location(_templateObject532 || (_templateObject532 = _taggedTemplateLiteral5(["The Caliginous Abyss"])))
  },
  pumpkin: {
    modifier: {
      "Mysticality Experience": 1,
      "Spell Damage": 5,
      "Mysticality Percent": 5
    },
    location: null
  },
  cinnamon: {
    modifier: {
      "Moxie Experience": 1,
      "Pickpocket Rate": 5,
      "Moxie Percent": 5
    },
    location: null
  },
  vanilla: {
    modifier: {
      "Muscle Experience": 1,
      "Weapon Damage Percent": 5,
      "Muscle Percent": 5
    },
    location: null
  }
};
function ingredientsUnlocked() {
  return get("latteUnlocks").split(",");
}
function fill() {
  if (refillsRemaining() <= 0) return !1;
  for (var _len = arguments.length, ingredients = new Array(_len), _key = 0; _key < _len; _key++)
    ingredients[_key] = arguments[_key];
  return new Set(ingredients).size < 3 || ingredients.some(function(i) {
    return !ingredientsUnlocked().includes(i);
  }) ? !1 : (0, import_kolmafia12.cliExecute)("latte refill ".concat(ingredients.join(" ")));
}
function modifierOf(ingredient) {
  return INGREDIENTS[ingredient].modifier;
}
function locationOf(ingredient) {
  return INGREDIENTS[ingredient].location;
}
function currentIngredients() {
  return (0, import_kolmafia12.getProperty)("latteIngredients").split(",");
}

// node_modules/libram/dist/resources/2018/SongBoom.js
var SongBoom_exports = {};
__export(SongBoom_exports, {
  dropProgress: function() {
    return dropProgress;
  },
  have: function() {
    return have5;
  },
  setSong: function() {
    return setSong;
  },
  song: function() {
    return song;
  },
  songBoomSongs: function() {
    return songBoomSongs;
  },
  songChangesLeft: function() {
    return songChangesLeft;
  }
});
init_kolmafia_polyfill();
var import_kolmafia13 = require("kolmafia");
var _templateObject57;
function _taggedTemplateLiteral6(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var item2 = $item(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral6(["SongBoom\u2122 BoomBox"])));
function have5() {
  return have(item2);
}
var keywords = {
  "Eye of the Giger": "spooky",
  "Food Vibrations": "food",
  "Remainin' Alive": "dr",
  "These Fists Were Made for Punchin'": "damage",
  "Total Eclipse of Your Meat": "meat"
}, songBoomSongs = new Set(Object.keys(keywords));
function song() {
  var stored = get("boomBoxSong");
  return songBoomSongs.has(stored) ? stored : null;
}
function songChangesLeft() {
  return get("_boomBoxSongsLeft");
}
function setSong(newSong) {
  if (song() !== newSong) {
    if (songChangesLeft() === 0) throw new Error("Out of song changes!");
    return (0, import_kolmafia13.cliExecute)("boombox ".concat(newSong ? keywords[newSong] : "none")), !0;
  } else
    return !1;
}
function dropProgress() {
  return get("_boomBoxFights");
}

// node_modules/libram/dist/resources/2019/Snapper.js
var Snapper_exports = {};
__export(Snapper_exports, {
  getProgress: function() {
    return getProgress;
  },
  getTrackedPhylum: function() {
    return getTrackedPhylum;
  },
  have: function() {
    return have6;
  },
  itemPhylum: function() {
    return itemPhylum;
  },
  phylumItem: function() {
    return phylumItem;
  },
  trackPhylum: function() {
    return trackPhylum;
  }
});
init_kolmafia_polyfill();
var import_kolmafia14 = require("kolmafia");
function _slicedToArray6(r, e) {
  return _arrayWithHoles6(r) || _iterableToArrayLimit6(r, e) || _unsupportedIterableToArray9(r, e) || _nonIterableRest6();
}
function _nonIterableRest6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit6(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles6(r) {
  if (Array.isArray(r)) return r;
}
function _toConsumableArray4(r) {
  return _arrayWithoutHoles4(r) || _iterableToArray4(r) || _unsupportedIterableToArray9(r) || _nonIterableSpread4();
}
function _nonIterableSpread4() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray9(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray9(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray9(r, a) : void 0;
  }
}
function _iterableToArray4(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles4(r) {
  if (Array.isArray(r)) return _arrayLikeToArray9(r);
}
function _arrayLikeToArray9(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var familiar = import_kolmafia14.Familiar.get("Red-Nosed Snapper"), phylumItem = /* @__PURE__ */ new Map([[import_kolmafia14.Phylum.get("beast"), import_kolmafia14.Item.get("patch of extra-warm fur")], [import_kolmafia14.Phylum.get("bug"), import_kolmafia14.Item.get("a bug's lymph")], [import_kolmafia14.Phylum.get("constellation"), import_kolmafia14.Item.get("micronova")], [import_kolmafia14.Phylum.get("construct"), import_kolmafia14.Item.get("industrial lubricant")], [import_kolmafia14.Phylum.get("demon"), import_kolmafia14.Item.get("infernal snowball")], [import_kolmafia14.Phylum.get("dude"), import_kolmafia14.Item.get("human musk")], [import_kolmafia14.Phylum.get("elemental"), import_kolmafia14.Item.get("livid energy")], [import_kolmafia14.Phylum.get("elf"), import_kolmafia14.Item.get("peppermint syrup")], [import_kolmafia14.Phylum.get("fish"), import_kolmafia14.Item.get("fish sauce")], [import_kolmafia14.Phylum.get("goblin"), import_kolmafia14.Item.get("guffin")], [import_kolmafia14.Phylum.get("hippy"), import_kolmafia14.Item.get("organic potpourri")], [import_kolmafia14.Phylum.get("hobo"), import_kolmafia14.Item.get("beggin' cologne")], [import_kolmafia14.Phylum.get("horror"), import_kolmafia14.Item.get("powdered madness")], [import_kolmafia14.Phylum.get("humanoid"), import_kolmafia14.Item.get("vial of humanoid growth hormone")], [import_kolmafia14.Phylum.get("mer-kin"), import_kolmafia14.Item.get("Mer-kin eyedrops")], [import_kolmafia14.Phylum.get("orc"), import_kolmafia14.Item.get("boot flask")], [import_kolmafia14.Phylum.get("penguin"), import_kolmafia14.Item.get("envelope full of Meat")], [import_kolmafia14.Phylum.get("pirate"), import_kolmafia14.Item.get("Shantix\u2122")], [import_kolmafia14.Phylum.get("plant"), import_kolmafia14.Item.get("goodberry")], [import_kolmafia14.Phylum.get("slime"), import_kolmafia14.Item.get("extra-strength goo")], [import_kolmafia14.Phylum.get("undead"), import_kolmafia14.Item.get("unfinished pleasure")], [import_kolmafia14.Phylum.get("weird"), import_kolmafia14.Item.get("non-Euclidean angle")]]), itemPhylum = new Map(_toConsumableArray4(phylumItem).map(function(_ref) {
  var _ref2 = _slicedToArray6(_ref, 2), phylum = _ref2[0], item4 = _ref2[1];
  return [item4, phylum];
}));
function have6() {
  return (0, import_kolmafia14.haveFamiliar)(familiar);
}
function getTrackedPhylum() {
  return get("redSnapperPhylum");
}
function trackPhylum(phylum) {
  var currentFamiliar = (0, import_kolmafia14.myFamiliar)();
  try {
    (0, import_kolmafia14.useFamiliar)(familiar), (0, import_kolmafia14.cliExecute)("snapper ".concat(phylum));
  } finally {
    (0, import_kolmafia14.useFamiliar)(currentFamiliar);
  }
}
function getProgress() {
  return get("redSnapperProgress");
}

// node_modules/libram/dist/resources/2020/Cartography.js
var Cartography_exports = {};
__export(Cartography_exports, {
  have: function() {
    return have7;
  },
  mapMonster: function() {
    return mapMonster;
  }
});
init_kolmafia_polyfill();
var import_kolmafia15 = require("kolmafia");
var _templateObject58, _templateObject217;
function _taggedTemplateLiteral7(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var passive = $skill(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral7(["Comprehensive Cartography"])));
function have7() {
  return have(passive);
}
function mapMonster(location, monster) {
  if (!have7() || get("_monstersMapped") >= 3 || !(0, import_kolmafia15.canAdventure)(location) || ((0, import_kolmafia15.useSkill)($skill(_templateObject217 || (_templateObject217 = _taggedTemplateLiteral7(["Map the Monsters"])))), !get("mappingMonsters"))) return !1;
  for (var turns = (0, import_kolmafia15.myTurncount)(); (0, import_kolmafia15.currentRound)() < 1; ) {
    if ((0, import_kolmafia15.myTurncount)() > turns)
      throw new Error("Map the Monsters unsuccessful?");
    if ((0, import_kolmafia15.visitUrl)((0, import_kolmafia15.toUrl)(location)), (0, import_kolmafia15.handlingChoice)() && (0, import_kolmafia15.lastChoice)() === 1435)
      return (0, import_kolmafia15.runChoice)(1, "heyscriptswhatsupwinkwink=".concat(monster.id)), !0;
    (0, import_kolmafia15.runChoice)(-1, !1);
  }
  return !1;
}

// node_modules/libram/dist/resources/2022/AutumnAton.js
var AutumnAton_exports = {};
__export(AutumnAton_exports, {
  available: function() {
    return available;
  },
  availableLocations: function() {
    return availableLocations;
  },
  currentUpgrades: function() {
    return currentUpgrades;
  },
  currentlyIn: function() {
    return currentlyIn;
  },
  getUniques: function() {
    return getUniques;
  },
  have: function() {
    return have8;
  },
  legs: function() {
    return legs;
  },
  possibleUpgrades: function() {
    return possibleUpgrades;
  },
  seasonalItems: function() {
    return seasonalItems;
  },
  sendTo: function() {
    return sendTo;
  },
  turnsForQuest: function() {
    return turnsForQuest;
  },
  turnsLeft: function() {
    return turnsLeft;
  },
  upgrade: function() {
    return upgrade;
  },
  visualAcuity: function() {
    return visualAcuity;
  },
  zoneItems: function() {
    return zoneItems;
  }
});
init_kolmafia_polyfill();
var import_kolmafia16 = require("kolmafia");
var _templateObject59, _templateObject218, _templateObject315, _templateObject414, _templateObject510, _templateObject65, _templateObject75, _templateObject85, _templateObject95;
function _taggedTemplateLiteral8(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var item3 = import_kolmafia16.Item.get("autumn-aton");
function available() {
  return (0, import_kolmafia16.availableAmount)(item3) > 0;
}
function have8() {
  return get("hasAutumnaton") || available();
}
function checkLocations(html) {
  return (0, import_kolmafia16.xpath)(html, '//select[@name="heythereprogrammer"]//option[position()>1]/text()').map(function(name) {
    return (0, import_kolmafia16.toLocation)(name);
  });
}
function currentlyIn() {
  return get("autumnatonQuestLocation");
}
function sendTo(target) {
  var upgrade2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  if (!available()) return null;
  var pageHtml = directlyUse(item3);
  upgrade2 && (0, import_kolmafia16.availableChoiceOptions)()[1] && (0, import_kolmafia16.runChoice)(1);
  var locationsAvailable = checkLocations(pageHtml), location = target instanceof import_kolmafia16.Location ? target : Array.isArray(target) ? target.find(function(l) {
    return locationsAvailable.includes(l);
  }) : target(locationsAvailable);
  return !location || !locationsAvailable.includes(location) ? null : ((0, import_kolmafia16.handlingChoice)() || directlyUse(item3), (0, import_kolmafia16.runChoice)(2, "heythereprogrammer=".concat(location.id)), (0, import_kolmafia16.handlingChoice)() && (0, import_kolmafia16.visitUrl)("main.php"), location);
}
function upgrade() {
  directlyUse(item3);
  var canUpgrade = (0, import_kolmafia16.availableChoiceOptions)()[1] !== void 0;
  return canUpgrade && (0, import_kolmafia16.runChoice)(1), (0, import_kolmafia16.visitUrl)("main.php"), canUpgrade;
}
function availableLocations() {
  if (!available()) return [];
  var pageHtml = directlyUse(item3);
  return (0, import_kolmafia16.visitUrl)("main.php"), checkLocations(pageHtml);
}
var possibleUpgrades = ["leftarm1", "leftleg1", "rightarm1", "rightleg1", "base_blackhat", "cowcatcher", "periscope", "radardish", "dualexhaust"];
function currentUpgrades() {
  return get("autumnatonUpgrades").split(",");
}
function turnsLeft() {
  return get("autumnatonQuestTurn") - (0, import_kolmafia16.totalTurnsPlayed)();
}
function legs() {
  return currentUpgrades().filter(function(u) {
    return u.includes("leg");
  }).length;
}
function turnsForQuest() {
  return 11 * Math.max(1, get("_autumnatonQuests") - legs());
}
function visualAcuity() {
  var visualUpgrades = ["periscope", "radardish"];
  return 1 + currentUpgrades().filter(function(u) {
    return visualUpgrades.includes(u);
  }).length;
}
function zoneItems() {
  return 3 + currentUpgrades().filter(function(u) {
    return u.includes("arm");
  }).length;
}
function seasonalItems() {
  return currentUpgrades().includes("cowcatcher") ? 2 : 1;
}
var difficulties = ["low", "mid", "high"], UNIQUES = {
  outdoor: {
    low: {
      index: 4,
      item: $item(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral8(["autumn leaf"])))
    },
    mid: {
      index: 2,
      item: $item(_templateObject218 || (_templateObject218 = _taggedTemplateLiteral8(["autumn debris shield"])))
    },
    high: {
      index: 6,
      item: $item(_templateObject315 || (_templateObject315 = _taggedTemplateLiteral8(["autumn leaf pendant"])))
    }
  },
  indoor: {
    low: {
      index: 0,
      item: $item(_templateObject414 || (_templateObject414 = _taggedTemplateLiteral8(["AutumnFest ale"])))
    },
    mid: {
      index: 3,
      item: $item(_templateObject510 || (_templateObject510 = _taggedTemplateLiteral8(["autumn-spice donut"])))
    },
    high: {
      index: 7,
      item: $item(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral8(["autumn breeze"])))
    }
  },
  underground: {
    low: {
      index: 1,
      item: $item(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral8(["autumn sweater-weather sweater"])))
    },
    mid: {
      index: 5,
      item: $item(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral8(["autumn dollar"])))
    },
    high: {
      index: 8,
      item: $item(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral8(["autumn years wisdom"])))
    }
  }
};
function getUniques(location) {
  var env = location.environment, difficulty = location.difficultyLevel;
  if (arrayContains(env, ["outdoor", "indoor", "underground"]) && arrayContains(difficulty, difficulties)) {
    var _UNIQUES$env$difficul = UNIQUES[env][difficulty], index = _UNIQUES$env$difficul.index, _item = _UNIQUES$env$difficul.item;
    return {
      upgrade: possibleUpgrades[index],
      item: _item
    };
  }
  return null;
}

// node_modules/libram/dist/resources/2024/AprilingBandHelmet.js
var AprilingBandHelmet_exports = {};
__export(AprilingBandHelmet_exports, {
  INSTRUMENTS: function() {
    return INSTRUMENTS;
  },
  INSTRUMENT_ITEMS: function() {
    return INSTRUMENT_ITEMS;
  },
  MARCHING_SONGS: function() {
    return MARCHING_SONGS;
  },
  MARCHING_SONG_EFFECTS: function() {
    return MARCHING_SONG_EFFECTS;
  },
  canChangeSong: function() {
    return canChangeSong;
  },
  canJoinSection: function() {
    return canJoinSection;
  },
  canPlay: function() {
    return canPlay;
  },
  changeSong: function() {
    return changeSong;
  },
  conduct: function() {
    return conduct;
  },
  have: function() {
    return have9;
  },
  joinSection: function() {
    return joinSection;
  },
  play: function() {
    return play;
  }
});
init_kolmafia_polyfill();
var import_kolmafia17 = require("kolmafia");
var _templateObject60;
function _slicedToArray7(r, e) {
  return _arrayWithHoles7(r) || _iterableToArrayLimit7(r, e) || _unsupportedIterableToArray10(r, e) || _nonIterableRest7();
}
function _nonIterableRest7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray10(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray10(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray10(r, a) : void 0;
  }
}
function _arrayLikeToArray10(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit7(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles7(r) {
  if (Array.isArray(r)) return r;
}
function _taggedTemplateLiteral9(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var helmet = $item(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral9(["Apriling band helmet"])));
function have9() {
  return have(helmet);
}
var MARCHING_SONGS = Object.freeze(["Apriling Band Patrol Beat", "Apriling Band Battle Cadence", "Apriling Band Celebration Bop"]), MARCHING_SONG_EFFECTS = Object.freeze(MARCHING_SONGS.map(function(song2) {
  return (0, import_kolmafia17.toEffect)(song2);
})), INSTRUMENTS = Object.freeze(["Apriling band saxophone", "Apriling band quad tom", "Apriling band tuba", "Apriling band staff", "Apriling band piccolo"]), INSTRUMENT_ITEMS = Object.freeze(INSTRUMENTS.map(function(instrument) {
  return (0, import_kolmafia17.toItem)(instrument);
})), visitConduct = function() {
  return (0, import_kolmafia17.visitUrl)("inventory.php?pwd&action=apriling");
};
function canJoinSection() {
  return have9() && get("_aprilBandInstruments") < 2;
}
function makeConductFunction(mafiaClass, canDo, set2, offset) {
  return function(input) {
    if (!canDo()) return !1;
    var _ref = typeof input == "string" ? [input, mafiaClass.get(input)] : [input.name, input], _ref2 = _slicedToArray7(_ref, 2), name = _ref2[0], instance = _ref2[1];
    if (have(instance)) return !0;
    var key = set2.indexOf(name);
    return key === -1 ? !1 : (visitConduct(), (0, import_kolmafia17.runChoice)(key + offset), (0, import_kolmafia17.runChoice)(9), have(instance));
  };
}
var joinSection = makeConductFunction(import_kolmafia17.Item, canJoinSection, INSTRUMENTS, 4);
function canChangeSong() {
  return have9() && get("nextAprilBandTurn") <= (0, import_kolmafia17.totalTurnsPlayed)();
}
var changeSong = makeConductFunction(import_kolmafia17.Effect, canChangeSong, MARCHING_SONGS, 1);
function conduct(result) {
  return result instanceof import_kolmafia17.Item || arrayContains(result, INSTRUMENTS) ? joinSection(result) : changeSong(result);
}
function play(instrument) {
  var acquire = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, item4 = instrument instanceof import_kolmafia17.Item ? instrument : import_kolmafia17.Item.get(instrument);
  if (!canPlay(instrument, acquire)) return !1;
  acquire && !have(item4) && joinSection(item4);
  var currentUsesRemaining = item4.dailyusesleft;
  return (0, import_kolmafia17.visitUrl)("inventory.php?pwd=".concat((0, import_kolmafia17.myHash)(), "&iid=").concat(item4.id, "&action=aprilplay"), !1), item4.dailyusesleft !== currentUsesRemaining;
}
function canPlay(instrument) {
  var acquire = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (!have9()) return !1;
  var item4 = instrument instanceof import_kolmafia17.Item ? instrument : import_kolmafia17.Item.get(instrument);
  return !(!have(item4) && (!acquire || !canJoinSection()) || item4.dailyusesleft <= 0);
}

// node_modules/libram/dist/Clan.js
init_kolmafia_polyfill();
var import_html_entities = __toESM(require_lib(), 1), import_kolmafia18 = require("kolmafia");
function _toConsumableArray5(r) {
  return _arrayWithoutHoles5(r) || _iterableToArray5(r) || _unsupportedIterableToArray11(r) || _nonIterableSpread5();
}
function _nonIterableSpread5() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray5(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles5(r) {
  if (Array.isArray(r)) return _arrayLikeToArray11(r);
}
function _createForOfIteratorHelper7(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray11(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _slicedToArray8(r, e) {
  return _arrayWithHoles8(r) || _iterableToArrayLimit8(r, e) || _unsupportedIterableToArray11(r, e) || _nonIterableRest8();
}
function _nonIterableRest8() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray11(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray11(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray11(r, a) : void 0;
  }
}
function _arrayLikeToArray11(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit8(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles8(r) {
  if (Array.isArray(r)) return r;
}
function _classCallCheck8(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties8(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey8(o.key), o);
  }
}
function _createClass8(e, r, t) {
  return r && _defineProperties8(e.prototype, r), t && _defineProperties8(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _defineProperty7(e, r, t) {
  return (r = _toPropertyKey8(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey8(t) {
  var i = _toPrimitive8(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive8(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _wrapRegExp() {
  _wrapRegExp = function(e2, r2) {
    return new BabelRegExp(e2, void 0, r2);
  };
  var e = RegExp.prototype, r = /* @__PURE__ */ new WeakMap();
  function BabelRegExp(e2, t, p) {
    var o = RegExp(e2, t);
    return r.set(o, p || r.get(e2)), _setPrototypeOf3(o, BabelRegExp.prototype);
  }
  function buildGroups(e2, t) {
    var p = r.get(t);
    return Object.keys(p).reduce(function(r2, t2) {
      var o = p[t2];
      if (typeof o == "number") r2[t2] = e2[o];
      else {
        for (var i = 0; e2[o[i]] === void 0 && i + 1 < o.length; ) i++;
        r2[t2] = e2[o[i]];
      }
      return r2;
    }, /* @__PURE__ */ Object.create(null));
  }
  return _inherits3(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function(r2) {
    var t = e.exec.call(this, r2);
    if (t) {
      t.groups = buildGroups(t, this);
      var p = t.indices;
      p && (p.groups = buildGroups(p, this));
    }
    return t;
  }, BabelRegExp.prototype[Symbol.replace] = function(t, p) {
    if (typeof p == "string") {
      var o = r.get(this);
      return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)>/g, function(e2, r2) {
        var t2 = o[r2];
        return "$" + (Array.isArray(t2) ? t2.join("$") : t2);
      }));
    }
    if (typeof p == "function") {
      var i = this;
      return e[Symbol.replace].call(this, t, function() {
        var e2 = arguments;
        return typeof e2[e2.length - 1] != "object" && (e2 = [].slice.call(e2)).push(buildGroups(e2, i)), p.apply(this, e2);
      });
    }
    return e[Symbol.replace].call(this, t, p);
  }, _wrapRegExp.apply(this, arguments);
}
function _inherits3(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf3(t, e);
}
function _setPrototypeOf3(t, e) {
  return _setPrototypeOf3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf3(t, e);
}
var clanIdCache = {}, toPlayerId = function(player) {
  return typeof player == "string" ? (0, import_kolmafia18.getPlayerId)(player) : player;
}, LOG_FAX_PATTERN = /* @__PURE__ */ _wrapRegExp(/(\d{2}\/\d{2}\/\d{2}, \d{2}:\d{2}(?:AM|PM): )<a [^>]+>([^<]+)<\/a>(?: faxed in a (.*?))<br>/, {
  monster: 3
}), WHITELIST_DEGREE_PATTERN = /* @__PURE__ */ _wrapRegExp(/(.*?) \(\xB0(\d+)\)/, {
  name: 1,
  degree: 2
}), Clan = /* @__PURE__ */ function() {
  function Clan2(id, name) {
    _classCallCheck8(this, Clan2), _defineProperty7(this, "id", void 0), _defineProperty7(this, "name", void 0), this.id = id, this.name = name;
  }
  return _createClass8(Clan2, [{
    key: "_check",
    value: function() {
      if (this.id !== (0, import_kolmafia18.getClanId)())
        throw new Error("You are no longer a member of this clan");
    }
    /**
     * Join clan
     *
     * @returns Joined clan
     */
  }, {
    key: "join",
    value: function() {
      return Clan2.join(this.id);
    }
    /**
     * Check that this clan is the player's current clan
     *
     * @returns Whether this is the current clan
     */
  }, {
    key: "check",
    value: function() {
      return (0, import_kolmafia18.visitUrl)("clan_hall.php").includes("<b>".concat(this.name, "</b>"));
    }
    /**
     * Determine the monster that is currently in the current clan's fax machine if any
     *
     * @returns The current fax monster
     */
  }, {
    key: "getCurrentFax",
    value: function() {
      this._check();
      var logs = (0, import_kolmafia18.visitUrl)("clan_log.php"), lastFax = logs.match(LOG_FAX_PATTERN);
      if (!lastFax) return null;
      var _lastFax = _slicedToArray8(lastFax, 4), monsterName = _lastFax[3];
      return monsterName ? import_kolmafia18.Monster.get(monsterName) : null;
    }
    /**
     * List available ranks (name, degree and id) from the current clan
     *
     * @returns List of ranks
     */
  }, {
    key: "getRanks",
    value: function() {
      this._check();
      var page = (0, import_kolmafia18.visitUrl)("clan_whitelist.php");
      return (0, import_kolmafia18.xpath)(page, '//select[@name="level"]//option').map(function(option) {
        var validHtml = "<select>".concat(option, "</select>"), match = (0, import_kolmafia18.xpath)(validHtml, "//text()")[0].match(WHITELIST_DEGREE_PATTERN), id = (0, import_kolmafia18.xpath)(validHtml, "//@value")[0];
        if (!match || !id) return null;
        var _match = _slicedToArray8(match, 3), encodedName = _match[1], degree = _match[2];
        return {
          name: (0, import_html_entities.decode)(encodedName),
          degree: Number.parseInt(degree),
          id: Number.parseInt(id)
        };
      }).filter(notNull);
    }
    /**
     * Add a player to the current clan's whitelist.
     * If the player is already in the whitelist this will change their rank or title.
     *
     * @param player Player id or name
     * @param rankName Rank to give the player. If not provided they will be given the lowest rank
     * @param title Title to give the player. If not provided, will be blank
     * @returns Success
     */
  }, {
    key: "addPlayerToWhitelist",
    value: function(player, rankName) {
      var title = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
      this._check();
      var playerId = toPlayerId(player), ranks = this.getRanks(), rank = rankName ? ranks.find(function(r) {
        return r.name === rankName;
      }) : ranks.sort(function(a, b) {
        return a.degree - b.degree;
      })[0];
      if (!rank) return !1;
      var result = (0, import_kolmafia18.visitUrl)("clan_whitelist.php?action=add&pwd&addwho=".concat(playerId, "&level=").concat(rank.id, "&title=").concat(title));
      return result.includes("added to whitelist.") || result.includes("That player is already on the whitelist");
    }
    /**
     * Remove a player from the current clan's whitelist
     *
     * @param player Player id or name
     * @returns Success
     */
  }, {
    key: "removePlayerFromWhitelist",
    value: function(player) {
      this._check();
      var playerId = toPlayerId(player), result = (0, import_kolmafia18.visitUrl)("clan_whitelist.php?action=updatewl&pwd&who=".concat(playerId, "&remove=Remove"));
      return result.includes("Whitelist updated.");
    }
    /**
     * Return the amount of meat in the current clan's coffer
     *
     * @returns Amount of meat
     */
  }, {
    key: "getMeatInCoffer",
    value: function() {
      this._check();
      var page = (0, import_kolmafia18.visitUrl)("clan_stash.php"), _ref = page.match(/Your <b>Clan Coffer<\/b> contains ([\d,]+) Meat./) || ["0", "0"], _ref2 = _slicedToArray8(_ref, 2), meat = _ref2[1];
      return parseNumber(meat);
    }
    /**
     * Add the given amount of meat to the current clan's coffer.
     *
     * @param amount Amount of meat to put in coffer
     * @returns Success
     */
  }, {
    key: "putMeatInCoffer",
    value: function(amount) {
      this._check();
      var result = (0, import_kolmafia18.visitUrl)("clan_stash.php?pwd&action=contribute&howmuch=".concat(amount));
      return result.includes("You contributed");
    }
  }, {
    key: "take",
    value: function(items) {
      this._check();
      var map = arrayToCountedMap(items);
      return map.forEach(function(quantity, item4) {
        var needed = Math.max(0, quantity - (0, import_kolmafia18.availableAmount)(item4));
        if (needed === 0)
          return map.set(item4, 0);
        var foldGroup = getFoldGroup(item4), _iterator3 = _createForOfIteratorHelper7(foldGroup), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            for (var foldable = _step3.value, quantityToFold = Math.min(needed, (0, import_kolmafia18.availableAmount)(foldable)), _i2 = 0; _i2 < quantityToFold; _i2++)
              (0, import_kolmafia18.cliExecute)("fold ".concat(item4.name)), needed--;
            return map.set(item4, needed);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        (0, import_kolmafia18.refreshStash)();
        for (var _i = 0, _arr = [item4].concat(_toConsumableArray5(foldGroup)); _i < _arr.length; _i++) {
          var matchingItem = _arr[_i], quantityToTake = Math.min(needed, (0, import_kolmafia18.stashAmount)(matchingItem));
          if (quantityToTake !== 0) {
            if (!(0, import_kolmafia18.takeStash)(quantityToTake, matchingItem)) return;
            if (matchingItem === item4)
              needed -= quantityToTake;
            else
              for (var i = 0; i < quantityToTake; i++)
                (0, import_kolmafia18.cliExecute)("fold ".concat(matchingItem.name)), needed--;
          }
        }
      }), Array.isArray(items) ? countedMapToArray(map) : map;
    }
  }, {
    key: "put",
    value: function(items) {
      this._check();
      var map = arrayToCountedMap(items);
      if (!this.check()) throw new Error("Wanted to return ".concat(countedMapToString(map), " to ").concat(this.name, " but KoLmafia's clan data is out of sync"));
      return map.forEach(function(quantity, item4) {
        (0, import_kolmafia18.retrieveItem)(quantity, item4);
        var returned = Math.min(quantity, (0, import_kolmafia18.availableAmount)(item4));
        (0, import_kolmafia18.putStash)(returned, item4), map.set(item4, quantity - returned);
      }), Array.isArray(items) ? countedMapToArray(map) : map;
    }
  }, {
    key: "withStash",
    value: function(items, callback) {
      var _this = this;
      this._check();
      var map = arrayToCountedMap(items);
      return Clan2._withStash(function() {
        return _this.take(map);
      }, function(borrowed) {
        return _this.put(borrowed);
      }, callback);
    }
  }], [{
    key: "_join",
    value: function(id) {
      var result = (0, import_kolmafia18.visitUrl)("showclan.php?recruiter=1&whichclan=".concat(id, "&pwd&whichclan=").concat(id, "&action=joinclan&apply=Apply+to+this+Clan&confirm=on"));
      if (!result.includes("clanhalltop.gif"))
        throw new Error("Could not join clan");
      return Clan2.get();
    }
  }, {
    key: "_withStash",
    value: function(borrowFn, returnFn, callback) {
      var borrowed = borrowFn(), map = arrayToCountedMap(borrowed);
      try {
        return callback(borrowed);
      } finally {
        if (map.size > 0) {
          var returned = arrayToCountedMap(returnFn(borrowed));
          map.forEach(function(quantity, item4) {
            var remaining = quantity - (returned.get(item4) || 0);
            remaining > 0 ? map.set(item4, remaining) : map.delete(item4);
          }), map.size > 0 && logger_default.error("Failed to return <b>".concat(countedMapToString(map), "</b> to <b>").concat(this.name, "</b> stash"));
        }
      }
    }
    /**
     * Join a clan
     *
     * @param clanIdOrName Clan id or name
     * @returns Instance of joined clan
     */
  }, {
    key: "join",
    value: function(clanIdOrName) {
      var clanId;
      if (typeof clanIdOrName == "string") {
        var clanName = clanIdOrName.toLowerCase();
        if (clanName === (0, import_kolmafia18.getClanName)().toLowerCase())
          return Clan2.get();
        if (!(clanName in clanIdCache)) {
          var clan = Clan2.getWhitelisted().find(function(c) {
            return c.name.toLowerCase() === clanName;
          });
          if (!clan)
            throw new Error("Player is not whitelisted to clan");
          clanIdCache[clanName] = clan.id;
        }
        clanId = clanIdCache[clanName];
      } else if (clanId = clanIdOrName, clanId === (0, import_kolmafia18.getClanId)())
        return Clan2.get();
      return Clan2._join(clanId);
    }
    /**
     * Execute callback as a member of a clan and then restore prior membership
     *
     * @param clanIdOrName Clan id or name
     * @param callback Actions to carry out while member of specified can
     * @returns Return value from callback
     */
  }, {
    key: "with",
    value: function(clanIdOrName, callback) {
      var startingClan = Clan2.get(), clan = Clan2.join(clanIdOrName);
      try {
        return callback(clan);
      } finally {
        startingClan.join();
      }
    }
  }, {
    key: "withStash",
    value: function(clanIdOrName, items, callback) {
      return Clan2._withStash(function() {
        return Clan2.with(clanIdOrName, function(clan) {
          return clan.take(items);
        });
      }, function(borrowed) {
        return Clan2.with(clanIdOrName, function(clan) {
          return clan.put(borrowed);
        });
      }, callback);
    }
    /**
     * Get the player's current clan
     *
     * @returns Player's clan
     */
  }, {
    key: "get",
    value: function() {
      return new Clan2((0, import_kolmafia18.getClanId)(), (0, import_kolmafia18.getClanName)());
    }
    /**
     * Get list of clans to which the player is whitelisted
     *
     * @returns List of clans
     */
  }, {
    key: "getWhitelisted",
    value: function() {
      var page = (0, import_kolmafia18.visitUrl)("clan_signup.php");
      return (0, import_kolmafia18.xpath)(page, '//select[@name="whichclan"]//option').map(function(option) {
        var validHtml = "<select>".concat(option, "</select>"), id = Number.parseInt((0, import_kolmafia18.xpath)(validHtml, "//@value")[0]), name = (0, import_html_entities.decode)((0, import_kolmafia18.xpath)(validHtml, "//text()")[0]);
        return new Clan2(id, name);
      });
    }
  }]);
}();

// node_modules/grimoire-kolmafia/dist/combat.js
function _callSuper3(t, o, e) {
  return o = _getPrototypeOf3(o), _possibleConstructorReturn3(t, _isNativeReflectConstruct3() ? Reflect.construct(o, e || [], _getPrototypeOf3(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn3(t, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized3(t);
}
function _assertThisInitialized3(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _isNativeReflectConstruct3() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct3 = function() {
    return !!t;
  })();
}
function _getPrototypeOf3(t) {
  return _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf3(t);
}
function _inherits4(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf4(t, e);
}
function _setPrototypeOf4(t, e) {
  return _setPrototypeOf4 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf4(t, e);
}
function _toConsumableArray6(r) {
  return _arrayWithoutHoles6(r) || _iterableToArray6(r) || _unsupportedIterableToArray12(r) || _nonIterableSpread6();
}
function _nonIterableSpread6() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray6(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles6(r) {
  if (Array.isArray(r)) return _arrayLikeToArray12(r);
}
function _createForOfIteratorHelper8(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray12(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray12(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray12(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray12(r, a) : void 0;
  }
}
function _arrayLikeToArray12(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _classCallCheck9(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties9(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey9(o.key), o);
  }
}
function _createClass9(e, r, t) {
  return r && _defineProperties9(e.prototype, r), t && _defineProperties9(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _toPropertyKey9(t) {
  var i = _toPrimitive9(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive9(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
var CombatStrategy = /* @__PURE__ */ function() {
  function CombatStrategy2() {
    _classCallCheck9(this, CombatStrategy2), this.macros = /* @__PURE__ */ new Map(), this.autoattacks = /* @__PURE__ */ new Map(), this.actions = /* @__PURE__ */ new Map(), this.ccs_entries = /* @__PURE__ */ new Map();
  }
  return _createClass9(CombatStrategy2, [{
    key: "macro",
    value: function(_macro, monsters, prepend) {
      var _a, _b;
      if (monsters === void 0)
        this.default_macro === void 0 && (this.default_macro = []), prepend ? this.default_macro.unshift(_macro) : this.default_macro.push(_macro);
      else {
        monsters instanceof import_kolmafia19.Monster && (monsters = [monsters]);
        var _iterator3 = _createForOfIteratorHelper8(monsters), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var monster = _step3.value;
            this.macros.has(monster) || this.macros.set(monster, []), prepend ? (_a = this.macros.get(monster)) === null || _a === void 0 || _a.unshift(_macro) : (_b = this.macros.get(monster)) === null || _b === void 0 || _b.push(_macro);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return this;
    }
    /**
     * Add a macro to perform as an autoattack for this monster. If multiple
     * macros are given for the same monster, they are concatinated.
     *
     * @param macro The macro to perform as autoattack.
     * @param monsters Which monsters to use the macro on. If not given, add the
     *  macro as a general macro.
     * @param prepend If true, add the macro before all previous autoattack
     *    macros for the same monster. If false, add after all previous macros.
     * @returns this
     */
  }, {
    key: "autoattack",
    value: function(macro, monsters, prepend) {
      var _a, _b;
      if (monsters === void 0)
        this.default_autoattack === void 0 && (this.default_autoattack = []), prepend ? this.default_autoattack.unshift(macro) : this.default_autoattack.push(macro);
      else {
        monsters instanceof import_kolmafia19.Monster && (monsters = [monsters]);
        var _iterator22 = _createForOfIteratorHelper8(monsters), _step22;
        try {
          for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
            var monster = _step22.value;
            this.autoattacks.has(monster) || this.autoattacks.set(monster, []), prepend ? (_a = this.autoattacks.get(monster)) === null || _a === void 0 || _a.unshift(macro) : (_b = this.autoattacks.get(monster)) === null || _b === void 0 || _b.push(macro);
          }
        } catch (err) {
          _iterator22.e(err);
        } finally {
          _iterator22.f();
        }
      }
      return this;
    }
    /**
     * Add a macro to perform at the start of combat.
     * @param macro The macro to perform.
     * @param prepend If true, add the macro before all previous starting
     *    macros. If false, add after all previous starting macros.
     * @returns this
     */
  }, {
    key: "startingMacro",
    value: function(macro, prepend) {
      return this.starting_macro === void 0 && (this.starting_macro = []), prepend ? this.starting_macro.unshift(macro) : this.starting_macro.push(macro), this;
    }
    /**
     * Add an action to perform for this monster. Only one action can be set for
     * each monster; any previous actions are overwritten.
     *
     * @param action The action to perform.
     * @param monsters Which monsters to use the action on. If not given, set the
     *  action as the general action for all monsters.
     * @returns this
     */
  }, {
    key: "action",
    value: function(_action, monsters) {
      if (monsters === void 0)
        this.default_action = _action;
      else if (monsters instanceof import_kolmafia19.Monster)
        this.actions.set(monsters, _action);
      else {
        var _iterator3 = _createForOfIteratorHelper8(monsters), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var monster = _step3.value;
            this.actions.set(monster, _action);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return this;
    }
    /**
     * Add a separate entry in the grimoire-generated CCS file for the specified
     * monster. If multiple entries are given for the same monster, they are
     * concatinated.
     *
     * This should typically be only used rarely, on monsters for which KoL does
     * not support macros in combat (e.g. rampaging adding machine).
     *
     * @param entry The entry to add for the given monster.
     * @param monsters Which monsters to add the entry to.
     * @param prepend If true, add the entry before all previous entries. If
     *   false, add after all previous entries.
     */
  }, {
    key: "ccs",
    value: function(entry, monsters, prepend) {
      var _a, _b;
      monsters instanceof import_kolmafia19.Monster && (monsters = [monsters]);
      var _iterator4 = _createForOfIteratorHelper8(monsters), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var monster = _step4.value;
          this.ccs_entries.has(monster) || this.ccs_entries.set(monster, []), prepend ? (_a = this.ccs_entries.get(monster)) === null || _a === void 0 || _a.unshift(entry) : (_b = this.ccs_entries.get(monster)) === null || _b === void 0 || _b.push(entry);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return this;
    }
    /**
     * Check if the provided action was requested for any monsters, or for the
     * general action.
     */
  }, {
    key: "can",
    value: function(action) {
      return action === this.default_action ? !0 : Array.from(this.actions.values()).includes(action);
    }
    /**
     * Return the general action (if it exists).
     */
  }, {
    key: "getDefaultAction",
    value: function() {
      return this.default_action;
    }
    /**
     * Return all monsters where the provided action was requested.
     */
  }, {
    key: "where",
    value: function(action) {
      var _this = this;
      return Array.from(this.actions.keys()).filter(function(key) {
        return _this.actions.get(key) === action;
      });
    }
    /**
     * Return the requested action (if it exists) for the provided monster.
     */
  }, {
    key: "currentStrategy",
    value: function(monster) {
      var _a;
      return (_a = this.actions.get(monster)) !== null && _a !== void 0 ? _a : this.default_action;
    }
    /**
     * Perform a deep copy of this combat strategy.
     */
  }, {
    key: "clone",
    value: function() {
      var result = new CombatStrategy2();
      this.starting_macro && (result.starting_macro = _toConsumableArray6(this.starting_macro)), this.default_macro && (result.default_macro = _toConsumableArray6(this.default_macro));
      var _iterator5 = _createForOfIteratorHelper8(this.macros), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          var pair = _step5.value;
          result.macros.set(pair[0], _toConsumableArray6(pair[1]));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      this.default_autoattack && (result.default_autoattack = _toConsumableArray6(this.default_autoattack));
      var _iterator6 = _createForOfIteratorHelper8(this.autoattacks), _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          var _pair = _step6.value;
          result.autoattacks.set(_pair[0], _toConsumableArray6(_pair[1]));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      result.default_action = this.default_action;
      var _iterator7 = _createForOfIteratorHelper8(this.actions), _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
          var _pair2 = _step7.value;
          result.actions.set(_pair2[0], _pair2[1]);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      var _iterator8 = _createForOfIteratorHelper8(this.ccs_entries), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          var _pair3 = _step8.value;
          result.ccs_entries.set(_pair3[0], _toConsumableArray6(_pair3[1]));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      return result;
    }
    /**
     * Compile this combat strategy into a complete macro.
     *
     * @param resources The resources to use to fulfil actions.
     * @param defaults Macros to perform for each action without a resource.
     * @param location The adventuring location, if known.
     * @returns The compiled macro.
     */
  }, {
    key: "compile",
    value: function(resources, defaults, location) {
      var _a, _b, result = new Macro();
      this.starting_macro && result.step.apply(result, _toConsumableArray6(this.starting_macro.map(function(macro2) {
        return undelay(macro2);
      })));
      var monster_macros = new CompressedMacro();
      this.macros.forEach(function(value3, key) {
        var _Macro;
        monster_macros.add(key, (_Macro = new Macro()).step.apply(_Macro, _toConsumableArray6(value3.map(function(macro2) {
          return undelay(macro2);
        }))));
      }), result.step(monster_macros.compile()), this.default_macro && result.step.apply(result, _toConsumableArray6(this.default_macro.map(function(macro2) {
        return undelay(macro2);
      })));
      var monster_actions = new CompressedMacro();
      if (this.actions.forEach(function(action, key) {
        var _a2, _b2, macro2 = (_a2 = resources.getMacro(action)) !== null && _a2 !== void 0 ? _a2 : (_b2 = defaults == null ? void 0 : defaults[action]) === null || _b2 === void 0 ? void 0 : _b2.call(defaults, key);
        macro2 && monster_actions.add(key, new Macro().step(macro2));
      }), result.step(monster_actions.compile()), this.default_action) {
        var macro = (_a = resources.getMacro(this.default_action)) !== null && _a !== void 0 ? _a : (_b = defaults == null ? void 0 : defaults[this.default_action]) === null || _b === void 0 ? void 0 : _b.call(defaults, location);
        macro && result.step(macro);
      }
      return result;
    }
    /**
     * Compile the autoattack of this combat strategy into a complete macro.
     *
     * @returns The compiled autoattack macro.
     */
  }, {
    key: "compileAutoattack",
    value: function() {
      var result = new Macro(), monster_macros = new CompressedMacro();
      return this.autoattacks.forEach(function(value3, key) {
        var _Macro2;
        monster_macros.add(key, (_Macro2 = new Macro()).step.apply(_Macro2, _toConsumableArray6(value3.map(function(macro) {
          return undelay(macro);
        }))));
      }), result.step(monster_macros.compile()), this.default_autoattack && result.step.apply(result, _toConsumableArray6(this.default_autoattack.map(function(macro) {
        return undelay(macro);
      }))), result;
    }
    /**
     * Compile the CCS entries of this combat strategy into a single array.
     *
     * @returns The lines of a CCS file, not including the [default] macro.
     */
  }, {
    key: "compileCcs",
    value: function() {
      var result = [], _iterator9 = _createForOfIteratorHelper8(this.ccs_entries), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          var ccs_entry = _step9.value;
          result.push.apply(result, ["[".concat(ccs_entry[0].name, "]")].concat(_toConsumableArray6(ccs_entry[1])));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      return result;
    }
    /**
     * For advanced users, this method will generate a fluent API for requesting
     * actions. That is, it allows you to do
     *   combat.banish(monster1).kill(monster2)
     * instead of
     *   combat.action("banish", monster1).action("kill", monster2)
     *
     * Example usage:
     *   const myActions = ["kill", "banish"] as const;
     *   class MyCombatStrategy extends CombatStrategy.withActions(myActions) {}
     *
     *   const foo: MyCombatStrategy = new MyCombatStrategy();
     *   const bar: MyCombatStrategy = foo.banish($monster`crate`).kill($monster`tumbleweed`);
     */
  }], [{
    key: "withActions",
    value: function(actions) {
      var CombatStrategyWithActions = /* @__PURE__ */ function(_this) {
        function CombatStrategyWithActions2() {
          return _classCallCheck9(this, CombatStrategyWithActions2), _callSuper3(this, CombatStrategyWithActions2, arguments);
        }
        return _inherits4(CombatStrategyWithActions2, _this), _createClass9(CombatStrategyWithActions2);
      }(this), proto = CombatStrategyWithActions.prototype, _iterator10 = _createForOfIteratorHelper8(actions), _step10;
      try {
        var _loop = function() {
          var action = _step10.value;
          proto[action] = function(monsters) {
            return this.action(action, monsters);
          };
        };
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; )
          _loop();
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      return CombatStrategyWithActions;
    }
  }]);
}(), CompressedMacro = /* @__PURE__ */ function() {
  function CompressedMacro2() {
    _classCallCheck9(this, CompressedMacro2), this.components = /* @__PURE__ */ new Map();
  }
  return _createClass9(CompressedMacro2, [{
    key: "add",
    value: function(monster, macro) {
      var _a, macro_text = macro.toString();
      macro_text.length !== 0 && (this.components.has(macro_text) ? (_a = this.components.get(macro_text)) === null || _a === void 0 || _a.push(monster) : this.components.set(macro_text, [monster]));
    }
    /**
     * Compile the compressed form of the macro.
     */
  }, {
    key: "compile",
    value: function() {
      var result = new Macro();
      return this.components.forEach(function(monsters, macro) {
        var condition = monsters.map(function(mon) {
          return "monsterid ".concat(mon.id);
        }).join(" || ");
        result.if_(condition, macro);
      }), result;
    }
  }]);
}(), CombatResources = /* @__PURE__ */ function() {
  function CombatResources2() {
    _classCallCheck9(this, CombatResources2), this.resources = /* @__PURE__ */ new Map();
  }
  return _createClass9(CombatResources2, [{
    key: "provide",
    value: function(action, resource) {
      resource !== void 0 && this.resources.set(action, resource);
    }
    /**
     * Return true if the provided action has a resource provided.
     */
  }, {
    key: "has",
    value: function(action) {
      return this.resources.has(action);
    }
    /**
     * Return all provided combat resources.
     */
  }, {
    key: "all",
    value: function() {
      return Array.from(this.resources.values());
    }
    /**
     * Get the macro provided by the resource for this action, or undefined if
     * no resource was provided.
     */
  }, {
    key: "getMacro",
    value: function(action) {
      var resource = this.resources.get(action);
      if (resource !== void 0)
        return resource.do instanceof import_kolmafia19.Item ? new Macro().item(resource.do) : resource.do instanceof import_kolmafia19.Skill ? new Macro().skill(resource.do) : undelay(resource.do);
    }
  }]);
}();

// node_modules/grimoire-kolmafia/dist/engine.js
init_kolmafia_polyfill();
var import_kolmafia21 = require("kolmafia");

// node_modules/grimoire-kolmafia/dist/outfit.js
init_kolmafia_polyfill();
var import_kolmafia20 = require("kolmafia");
var _templateObject61, _templateObject219, _templateObject316, _templateObject415, _templateObject511, _templateObject66, _templateObject76, _templateObject86, _templateObject96, _templateObject106, _templateObject116, _templateObject126, _templateObject136, _templateObject145, _templateObject155, _templateObject165, _templateObject175, _templateObject185, _templateObject195, _templateObject205, _templateObject2110, _templateObject225, _templateObject235, _templateObject245, _templateObject255, _templateObject265, _templateObject275, _templateObject284, _templateObject294, _templateObject304, _templateObject317, _templateObject324, _templateObject334, _templateObject344, _templateObject354, _templateObject363, _templateObject373, _templateObject383, _templateObject393, _templateObject403, _templateObject416, _templateObject423, _templateObject433, _templateObject443, _templateObject453, _templateObject463, _templateObject473, _templateObject483, _templateObject493, _templateObject503, _templateObject513, _templateObject523, _templateObject533, _templateObject542, _templateObject552, _templateObject562, _templateObject572, _templateObject582, _templateObject592, _templateObject602, _templateObject612;
function ownKeys4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys4(Object(t), !0).forEach(function(r2) {
      _defineProperty8(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty8(e, r, t) {
  return (r = _toPropertyKey10(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _slicedToArray9(r, e) {
  return _arrayWithHoles9(r) || _iterableToArrayLimit9(r, e) || _unsupportedIterableToArray13(r, e) || _nonIterableRest9();
}
function _nonIterableRest9() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit9(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles9(r) {
  if (Array.isArray(r)) return r;
}
function _createForOfIteratorHelper9(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray13(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _taggedTemplateLiteral10(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function _toConsumableArray7(r) {
  return _arrayWithoutHoles7(r) || _iterableToArray7(r) || _unsupportedIterableToArray13(r) || _nonIterableSpread7();
}
function _nonIterableSpread7() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray13(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray13(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray13(r, a) : void 0;
  }
}
function _iterableToArray7(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles7(r) {
  if (Array.isArray(r)) return _arrayLikeToArray13(r);
}
function _arrayLikeToArray13(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _classCallCheck10(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties10(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey10(o.key), o);
  }
}
function _createClass10(e, r, t) {
  return r && _defineProperties10(e.prototype, r), t && _defineProperties10(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _toPropertyKey10(t) {
  var i = _toPrimitive10(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive10(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
var FORCE_REFRESH_REQUIREMENT = new Requirement([], {
  forceUpdate: !0
}), outfitSlots = ["hat", "back", "weapon", "offhand", "shirt", "pants", "acc1", "acc2", "acc3", "famequip"];
var weaponHands = function(i) {
  return i ? (0, import_kolmafia20.weaponHands)(i) : 0;
}, modeableCommands2 = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka", "jillcandle"], Outfit = /* @__PURE__ */ function() {
  function Outfit2() {
    _classCallCheck10(this, Outfit2), this.equips = /* @__PURE__ */ new Map(), this.riders = /* @__PURE__ */ new Map(), this.modes = {}, this.skipDefaults = !1, this.modifier = [], this.avoid = [], this.bonuses = /* @__PURE__ */ new Map(), this.postActions = [], this.preActions = [];
  }
  return _createClass10(Outfit2, [{
    key: "equippedAmount",
    value: (
      /**
       * Check how many of an item is equipped on the outfit.
       */
      function(item4) {
        return _toConsumableArray7(this.equips.values()).filter(function(i) {
          return i === item4;
        }).length;
      }
    )
  }, {
    key: "isAvailable",
    value: function(item4) {
      var _a;
      return !(!((_a = this.avoid) === null || _a === void 0) && _a.includes(item4) || !have(item4, this.equippedAmount(item4) + 1) || (0, import_kolmafia20.booleanModifier)(item4, "Single Equip") && this.equippedAmount(item4) > 0);
    }
    /**
     * Check whether an item is equipped on the outfit, optionally in a specific slot.
     */
  }, {
    key: "haveEquipped",
    value: function(item4, slot) {
      return slot === void 0 ? this.equippedAmount(item4) > 0 : this.equips.get(slot) === item4;
    }
  }, {
    key: "equipItemNone",
    value: function(item4, slot) {
      return item4 !== $item.none ? !1 : slot === void 0 ? !0 : this.equips.has(slot) ? !1 : (this.equips.set(slot, item4), !0);
    }
  }, {
    key: "equipNonAccessory",
    value: function(item4, slot) {
      if ($slots(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral10(["acc1, acc2, acc3"]))).includes((0, import_kolmafia20.toSlot)(item4)) || slot !== void 0 && slot !== (0, import_kolmafia20.toSlot)(item4) || this.equips.has((0, import_kolmafia20.toSlot)(item4))) return !1;
      switch ((0, import_kolmafia20.toSlot)(item4)) {
        case $slot(_templateObject219 || (_templateObject219 = _taggedTemplateLiteral10(["off-hand"]))):
          if (this.equips.has($slot(_templateObject316 || (_templateObject316 = _taggedTemplateLiteral10(["weapon"])))) && weaponHands(this.equips.get($slot(_templateObject415 || (_templateObject415 = _taggedTemplateLiteral10(["weapon"]))))) !== 1)
            return !1;
          break;
        case $slot(_templateObject511 || (_templateObject511 = _taggedTemplateLiteral10(["familiar"]))):
          if (this.familiar !== void 0 && !(0, import_kolmafia20.canEquip)(this.familiar, item4)) return !1;
      }
      return (0, import_kolmafia20.toSlot)(item4) !== $slot(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral10(["familiar"]))) && !(0, import_kolmafia20.canEquip)(item4) ? !1 : (this.equips.set((0, import_kolmafia20.toSlot)(item4), item4), !0);
    }
  }, {
    key: "equipAccessory",
    value: function(item4, slot) {
      var _this = this;
      if (![void 0].concat(_toConsumableArray7($slots(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral10(["acc1, acc2, acc3"]))))).includes(slot) || (0, import_kolmafia20.toSlot)(item4) !== $slot(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral10(["acc1"]))) || !(0, import_kolmafia20.canEquip)(item4)) return !1;
      if (slot === void 0) {
        var empty = $slots(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral10(["acc1, acc2, acc3"]))).find(function(s) {
          return !_this.equips.has(s);
        });
        if (empty === void 0) return !1;
        this.equips.set(empty, item4);
      } else {
        if (this.equips.has(slot)) return !1;
        this.equips.set(slot, item4);
      }
      return !0;
    }
  }, {
    key: "equipUsingDualWield",
    value: function(item4, slot) {
      return ![void 0, $slot(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral10(["off-hand"])))].includes(slot) || (0, import_kolmafia20.toSlot)(item4) !== $slot(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral10(["weapon"]))) || this.equips.has($slot(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral10(["weapon"])))) && weaponHands(this.equips.get($slot(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral10(["weapon"]))))) !== 1 || this.equips.has($slot(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral10(["off-hand"])))) || !have($skill(_templateObject155 || (_templateObject155 = _taggedTemplateLiteral10(["Double-Fisted Skull Smashing"])))) || weaponHands(item4) !== 1 || !(0, import_kolmafia20.canEquip)(item4) ? !1 : (this.equips.set($slot(_templateObject165 || (_templateObject165 = _taggedTemplateLiteral10(["off-hand"]))), item4), !0);
    }
  }, {
    key: "getHoldingFamiliar",
    value: function(item4) {
      switch ((0, import_kolmafia20.toSlot)(item4)) {
        case $slot(_templateObject175 || (_templateObject175 = _taggedTemplateLiteral10(["weapon"]))):
          return $familiar(_templateObject185 || (_templateObject185 = _taggedTemplateLiteral10(["Disembodied Hand"])));
        case $slot(_templateObject195 || (_templateObject195 = _taggedTemplateLiteral10(["off-hand"]))):
          return $familiar(_templateObject205 || (_templateObject205 = _taggedTemplateLiteral10(["Left-Hand Man"])));
        default:
          return;
      }
    }
    /**
     * Returns the bonus value associated with a given item.
     *
     * @param item The item to check the bonus of.
     * @returns The bonus assigned to that item.
     */
  }, {
    key: "getBonus",
    value: function(item4) {
      var _a;
      return (_a = this.bonuses.get(item4)) !== null && _a !== void 0 ? _a : 0;
    }
    /**
     * Applies a value to any existing bonus this item has, using a rule assigned by the `reducer` parameter
     *
     * @param item The item to try to apply a bonus to.
     * @param value The value to try to apply.
     * @param reducer Function that combines new and current bonus
     * @returns The total assigned bonus to that item.
     */
  }, {
    key: "applyBonus",
    value: function(item4, value3, reducer) {
      var previous = this.getBonus(item4);
      return this.setBonus(item4, reducer(value3, previous));
    }
    /**
     * Sets the bonus value of an item equal to a given value, overriding any current bonus assigned.
     *
     * @param item The item to try to apply a bonus to.
     * @param value The value to try to apply.
     * @returns The total assigned bonus to that item.
     */
  }, {
    key: "setBonus",
    value: function(item4, value3) {
      return this.bonuses.set(item4, value3), value3;
    }
    /**
     * Adds a value to any existing bonus this item has
     *
     * @param item The item to try to add a bonus to.
     * @param value The value to try to add.
     * @returns The total assigned bonus to that item.
     */
  }, {
    key: "addBonus",
    value: function(item4, value3) {
      return this.applyBonus(item4, value3, function(a, b) {
        return a + b;
      });
    }
    /**
     * Apply the given items' bonuses to the outfit, using a rule given by the reducer
     *
     * @param items A map containing items and their bonuses
     * @param reducer A way of combining new bonuses with existing bonuses
     */
  }, {
    key: "applyBonuses",
    value: function(items, reducer) {
      var _iterator3 = _createForOfIteratorHelper9(items), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var _step$value = _slicedToArray9(_step3.value, 2), item4 = _step$value[0], value3 = _step$value[1];
          this.applyBonus(item4, value3, reducer);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    /**
     * Sets the bonuses of the given items, overriding existing bonuses
     *
     * @param items Map containing items and bonuses
     */
  }, {
    key: "setBonuses",
    value: function(items) {
      this.applyBonuses(items, function(a) {
        return a;
      });
    }
    /**
     * Adds the bonuses of the given items to any existing bonuses they ahave
     *
     * @param items Map containing items and bonuses
     */
  }, {
    key: "addBonuses",
    value: function(items) {
      this.applyBonuses(items, function(a, b) {
        return a + b;
      });
    }
  }, {
    key: "equipUsingFamiliar",
    value: function(item4, slot) {
      if (![void 0, $slot(_templateObject2110 || (_templateObject2110 = _taggedTemplateLiteral10(["familiar"])))].includes(slot) || this.equips.has($slot(_templateObject225 || (_templateObject225 = _taggedTemplateLiteral10(["familiar"])))) || (0, import_kolmafia20.booleanModifier)(item4, "Single Equip")) return !1;
      var familiar2 = this.getHoldingFamiliar(item4);
      return familiar2 === void 0 || !this.equip(familiar2) ? !1 : (this.equips.set($slot(_templateObject235 || (_templateObject235 = _taggedTemplateLiteral10(["familiar"]))), item4), !0);
    }
  }, {
    key: "equipItem",
    value: function(item4, slot) {
      return this.haveEquipped(item4, slot) || this.equipItemNone(item4, slot) || this.isAvailable(item4) && (this.equipNonAccessory(item4, slot) || this.equipAccessory(item4, slot) || this.equipUsingDualWield(item4, slot) || this.equipUsingFamiliar(item4, slot));
    }
  }, {
    key: "equipFamiliar",
    value: function(familiar2) {
      if (familiar2 === this.familiar) return !0;
      if (this.familiar !== void 0 || familiar2 !== $familiar.none && (!have(familiar2) || Array.from(this.riders.values()).includes(familiar2)))
        return !1;
      var item4 = this.equips.get($slot(_templateObject245 || (_templateObject245 = _taggedTemplateLiteral10(["familiar"]))));
      return item4 !== void 0 && item4 !== $item.none && !(0, import_kolmafia20.canEquip)(familiar2, item4) ? !1 : (this.familiar = familiar2, !0);
    }
  }, {
    key: "equipSpec",
    value: function(spec) {
      for (var _this$avoid, _a, _b, _c, _d, _e, _f, succeeded = !0, _i = 0, _outfitSlots2 = outfitSlots; _i < _outfitSlots2.length; _i++) {
        var slotName = _outfitSlots2[_i], slot = (_a = (/* @__PURE__ */ new Map([["famequip", $slot(_templateObject255 || (_templateObject255 = _taggedTemplateLiteral10(["familiar"])))], ["offhand", $slot(_templateObject265 || (_templateObject265 = _taggedTemplateLiteral10(["off-hand"])))]])).get(slotName)) !== null && _a !== void 0 ? _a : (0, import_kolmafia20.toSlot)(slotName), itemOrItems = spec[slotName];
        itemOrItems !== void 0 && !this.equip(itemOrItems, slot) && (succeeded = !1);
      }
      var _iterator22 = _createForOfIteratorHelper9((_b = spec == null ? void 0 : spec.equip) !== null && _b !== void 0 ? _b : []), _step22;
      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
          var item4 = _step22.value;
          this.equip(item4) || (succeeded = !1);
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }
      if ((spec == null ? void 0 : spec.familiar) !== void 0 && (this.equip(spec.familiar) || (succeeded = !1)), (_this$avoid = this.avoid).push.apply(_this$avoid, _toConsumableArray7((_c = spec == null ? void 0 : spec.avoid) !== null && _c !== void 0 ? _c : [])), this.skipDefaults = this.skipDefaults || ((_d = spec.skipDefaults) !== null && _d !== void 0 ? _d : !1), spec.modifier) {
        var _this$modifier;
        Array.isArray(spec.modifier) ? (_this$modifier = this.modifier).push.apply(_this$modifier, _toConsumableArray7(spec.modifier)) : this.modifier.push(spec.modifier);
      }
      return spec.modes && (this.setModes(spec.modes) || (succeeded = !1)), spec.riders && (spec.riders["buddy-bjorn"] && !this.bjornify(spec.riders["buddy-bjorn"]) && (succeeded = !1), spec.riders["crown-of-thrones"] && !this.enthrone(spec.riders["crown-of-thrones"]) && (succeeded = !1)), spec.bonuses && this.addBonuses(spec.bonuses), this.beforeDress.apply(this, _toConsumableArray7((_e = spec.beforeDress) !== null && _e !== void 0 ? _e : [])), this.afterDress.apply(this, _toConsumableArray7((_f = spec.afterDress) !== null && _f !== void 0 ? _f : [])), succeeded;
    }
    /**
     * Equip the first thing that can be equipped to the outfit.
     *
     * @param things The things to equip.
     * @param slot The slot to equip them.
     * @returns True if one of the things is equipped, and false otherwise.
     */
  }, {
    key: "equipFirst",
    value: function(things, slot) {
      var _this = this;
      return things.length === 0 ? !0 : things.some(function(val) {
        return _this.equip(val, slot);
      });
    }
    /**
     * Equip a thing to the outfit.
     *
     * If no slot is given, then the thing will be equipped wherever possible
     * (possibly using dual-wielding, any of the accessory slots, or as
     * familiar equipment). If it is impossible to add this thing anywhere to
     * the outfit, this function will return false.
     *
     * If a slot is given, the item will be equipped only in that slot. If the
     * slot is filled with a different item, this function will return false.
     *
     * If the thing is already equipped in the provided slot, or if no slot is
     * given and the thing is already equipped in any slot, this function will
     * return true and not change the outfit.
     *
     * @param thing The thing or things to equip.
     * @param slot The slot to equip them.
     * @returns True if the thing was sucessfully equipped, and false otherwise.
     */
  }, {
    key: "equip",
    value: function(thing, slot) {
      var _this = this;
      return Array.isArray(thing) ? slot !== void 0 ? this.equipFirst(thing, slot) : thing.every(function(val) {
        return _this.equip(val);
      }) : thing instanceof import_kolmafia20.Item ? this.equipItem(thing, slot) : thing instanceof import_kolmafia20.Familiar ? this.equipFamiliar(thing) : thing instanceof Outfit2 ? this.equipSpec(thing.spec()) : this.equipSpec(thing);
    }
  }, {
    key: "equipRider",
    value: (
      /**
       * Add a rider to the outfit.
       *
       * This function does *not* equip the corresponding item; it must be equipped separately.
       *
       * If a familiar is already specified as the rider that is different from the provided target, this function will return false and not change the rider.
       * @param target The familiar to use as the rider, or a ranked list of familiars to try to use as the rider.
       * @returns True if we successfully set the slot to a valid rider.
       */
      function(target, slot) {
        var _this = this;
        var current = this.riders.get(slot), targets = Array.isArray(target) ? target : [target];
        if (current)
          return targets.includes(current);
        var otherRiders = _toConsumableArray7(this.riders.entries()).filter(function(_ref) {
          var _ref2 = _slicedToArray9(_ref, 1), key = _ref2[0];
          return slot !== key;
        }).map(function(_ref3) {
          var _ref4 = _slicedToArray9(_ref3, 2), value3 = _ref4[1];
          return value3;
        }), fam = targets.find(function(f) {
          return have(f) && _this.familiar !== f && !otherRiders.includes(f);
        });
        return fam ? (this.riders.set(slot, fam), !0) : !1;
      }
    )
    /**
     * Add a bjornified familiar to the outfit.
     *
     * This function does *not* equip the buddy bjorn itself; it must be equipped separately.
     *
     * If a familiar is already specified for the buddy bjorn that is different from the provided target, this function will return false and not change the buddy bjorn.
     * @param target The familiar to bjornify, or a ranked list of familiars to try to bjornify.
     * @returns True if we successfully set the bjorn to a valid target.
     */
  }, {
    key: "bjornify",
    value: function(target) {
      return this.equipRider(target, $slot(_templateObject275 || (_templateObject275 = _taggedTemplateLiteral10(["buddy-bjorn"]))));
    }
    /**
     * Add anenthroned familiar to the outfit.
     *
     * This function does *not* equip the crown of thrones itself; it must be equipped separately.
     *
     * If a familiar is already specified for the crown of thrones that is different from the provided target, this function will return false and not change the crown of thrones.
     * @param target The familiar to enthrone, or a ranked list of familiars to try to enthrone.
     * @returns True if we successfully set the enthrone to a valid target.
     */
  }, {
    key: "enthrone",
    value: function(target) {
      return this.equipRider(target, $slot(_templateObject284 || (_templateObject284 = _taggedTemplateLiteral10(["crown-of-thrones"]))));
    }
    /**
     * Set the provided modes for items that may be equipped in the outfit.
     *
     * This function does *not* equip items for the set modes; they must be
     * equipped separately.
     *
     * If a mode is already set for an item that is different from the provided
     * mode, this function will return false and not change the mode for that
     * item. (But other modes might still be changed if they are compatible.)
     *
     * Note that the superhero and instuctions of a retrocape can be set
     * independently (`undefined` is treated as "don't care").
     *
     * @param modes Modes to set in this outfit.
     * @returns True if all modes were sucessfully set, and false otherwise.
     */
  }, {
    key: "setModes",
    value: function(modes) {
      for (var _a, _b, compatible = !0, _i2 = 0, _modeableCommands = modeableCommands2; _i2 < _modeableCommands.length; _i2++) {
        var mode = _modeableCommands[_i2];
        mode !== "retrocape" && this.modes[mode] && modes[mode] && this.modes[mode] !== modes[mode] && (compatible = !1);
      }
      return this.modes.retrocape && modes.retrocape && (this.modes.retrocape[0] && modes.retrocape[0] && this.modes.retrocape[0] !== modes.retrocape[0] && (compatible = !1), this.modes.retrocape[1] && modes.retrocape[1] && this.modes.retrocape[1] !== modes.retrocape[1] && (compatible = !1), this.modes.retrocape[0] = (_a = this.modes.retrocape[0]) !== null && _a !== void 0 ? _a : modes.retrocape[0], this.modes.retrocape[1] = (_b = this.modes.retrocape[1]) !== null && _b !== void 0 ? _b : modes.retrocape[1]), this.modes = _objectSpread4(_objectSpread4({}, modes), this.modes), compatible;
    }
    /**
     * Check if it is possible to equip a thing to this outfit using .equip().
     *
     * This does not change the current outfit.
     *
     * @param thing The thing to equip.
     * @param slot The slot to equip them.
     * @returns True if this thing can be equipped.
     */
  }, {
    key: "canEquip",
    value: function(thing, slot) {
      var outfit2 = this.clone();
      return outfit2.equip(thing, slot);
    }
    /**
     * Check if it is possible to equip a thing to this outfit using .equip(); if it is, do so.
     *
     * This does change the current outfit.
     * @param thing The thing to equip.
     * @param slot The slot to equip them.
     * @returns True if this thing was successfully equipped.
     */
  }, {
    key: "tryEquip",
    value: function(thing, slot) {
      return this.canEquip(thing, slot) && this.equip(thing, slot);
    }
  }, {
    key: "afterDress",
    value: function() {
      var _this$postActions;
      (_this$postActions = this.postActions).push.apply(_this$postActions, arguments);
    }
  }, {
    key: "beforeDress",
    value: function() {
      var _this$preActions;
      (_this$preActions = this.preActions).push.apply(_this$preActions, arguments);
    }
    /**
     * Equip this outfit.
     */
  }, {
    key: "_dress",
    value: function(refreshed) {
      var _this = this;
      this.familiar && (0, import_kolmafia20.useFamiliar)(this.familiar);
      var targetEquipment = Array.from(this.equips.values()), usedSlots = /* @__PURE__ */ new Set(), nonaccessorySlots = $slots(_templateObject294 || (_templateObject294 = _taggedTemplateLiteral10(["weapon, off-hand, hat, back, shirt, pants, familiar"]))), bjorn = this.riders.get($slot(_templateObject304 || (_templateObject304 = _taggedTemplateLiteral10(["buddy-bjorn"]))));
      bjorn && (this.equips.get($slot(_templateObject317 || (_templateObject317 = _taggedTemplateLiteral10(["back"])))) === $item(_templateObject324 || (_templateObject324 = _taggedTemplateLiteral10(["Buddy Bjorn"]))) || this.getBonus($item(_templateObject334 || (_templateObject334 = _taggedTemplateLiteral10(["Buddy Bjorn"]))))) && (usedSlots.add($slot(_templateObject344 || (_templateObject344 = _taggedTemplateLiteral10(["buddy-bjorn"])))), usedSlots.add($slot(_templateObject354 || (_templateObject354 = _taggedTemplateLiteral10(["crown-of-thrones"])))));
      var crown = this.riders.get($slot(_templateObject363 || (_templateObject363 = _taggedTemplateLiteral10(["crown-of-thrones"]))));
      crown && (this.equips.get($slot(_templateObject373 || (_templateObject373 = _taggedTemplateLiteral10(["hat"])))) === $item(_templateObject383 || (_templateObject383 = _taggedTemplateLiteral10(["Crown of Thrones"]))) || this.getBonus($item(_templateObject393 || (_templateObject393 = _taggedTemplateLiteral10(["Crown of Thrones"]))))) && (usedSlots.add($slot(_templateObject403 || (_templateObject403 = _taggedTemplateLiteral10(["buddy-bjorn"])))), usedSlots.add($slot(_templateObject416 || (_templateObject416 = _taggedTemplateLiteral10(["crown-of-thrones"])))));
      var _iterator3 = _createForOfIteratorHelper9(nonaccessorySlots), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var slot = _step3.value;
          (targetEquipment.includes((0, import_kolmafia20.equippedItem)(slot)) && this.equips.get(slot) !== (0, import_kolmafia20.equippedItem)(slot) || this.avoid.includes((0, import_kolmafia20.equippedItem)(slot)) || slot === $slot(_templateObject493 || (_templateObject493 = _taggedTemplateLiteral10(["weapon"]))) && weaponHands((0, import_kolmafia20.equippedItem)(slot)) !== 1 && this.equips.has($slot(_templateObject503 || (_templateObject503 = _taggedTemplateLiteral10(["offhand"])))) && !this.equips.has($slot(_templateObject513 || (_templateObject513 = _taggedTemplateLiteral10(["weapon"]))))) && (0, import_kolmafia20.equip)(slot, $item.none);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = _createForOfIteratorHelper9(nonaccessorySlots), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var _slot = _step4.value, equipment = this.equips.get(_slot);
          equipment && ((0, import_kolmafia20.equip)(_slot, equipment), usedSlots.add(_slot));
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      var accessorySlots = $slots(_templateObject423 || (_templateObject423 = _taggedTemplateLiteral10(["acc1, acc2, acc3"]))), accessoryEquips = accessorySlots.map(function(slot2) {
        return _this.equips.get(slot2);
      }).filter(function(item4) {
        return item4 !== void 0;
      }), missingAccessories = [], _iterator5 = _createForOfIteratorHelper9(accessoryEquips), _step5;
      try {
        var _loop = function() {
          var accessory2 = _step5.value, alreadyEquipped = accessorySlots.find(function(slot2) {
            return !usedSlots.has(slot2) && (0, import_kolmafia20.equippedItem)(slot2) === accessory2;
          });
          alreadyEquipped ? usedSlots.add(alreadyEquipped) : missingAccessories.push(accessory2);
        };
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; )
          _loop();
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      for (var _i3 = 0, _missingAccessories = missingAccessories; _i3 < _missingAccessories.length; _i3++) {
        var accessory = _missingAccessories[_i3], unusedSlot = accessorySlots.find(function(slot2) {
          return !usedSlots.has(slot2);
        });
        if (unusedSlot === void 0)
          throw "No accessory slots remaining";
        (0, import_kolmafia20.equip)(unusedSlot, accessory), usedSlots.add(unusedSlot);
      }
      var modes = convertToLibramModes(this.modes);
      if (this.modifier.length > 0 || _toConsumableArray7(this.bonuses).filter(function(_ref5) {
        var _ref6 = _slicedToArray9(_ref5, 2), value3 = _ref6[1];
        return value3;
      }).length > 0) {
        var allRequirements = [new Requirement(this.modifier, {
          preventSlot: _toConsumableArray7(usedSlots),
          preventEquip: this.avoid,
          modes: modes,
          bonusEquip: this.bonuses
        })];
        if (refreshed && allRequirements.push(FORCE_REFRESH_REQUIREMENT), !Requirement.merge(allRequirements).maximize()) {
          if (refreshed)
            throw new Error("Failed to maximize properly!");
          (0, import_kolmafia20.cliExecute)("refresh inventory"), this._dress(!0);
          return;
        }
        (0, import_kolmafia20.logprint)("Maximize: ".concat(this.modifier));
      }
      if (applyModes(modes), bjorn && (0, import_kolmafia20.haveEquipped)($item(_templateObject433 || (_templateObject433 = _taggedTemplateLiteral10(["Buddy Bjorn"])))) && ((0, import_kolmafia20.myEnthronedFamiliar)() === bjorn && (0, import_kolmafia20.enthroneFamiliar)($familiar.none), (0, import_kolmafia20.myBjornedFamiliar)() !== bjorn && (0, import_kolmafia20.bjornifyFamiliar)(bjorn)), crown && (0, import_kolmafia20.haveEquipped)($item(_templateObject443 || (_templateObject443 = _taggedTemplateLiteral10(["Crown of Thrones"])))) && ((0, import_kolmafia20.myBjornedFamiliar)() === crown && (0, import_kolmafia20.bjornifyFamiliar)($familiar.none), (0, import_kolmafia20.myEnthronedFamiliar)() !== crown && (0, import_kolmafia20.enthroneFamiliar)(crown)), this.familiar !== void 0 && (0, import_kolmafia20.myFamiliar)() !== this.familiar) throw "Failed to fully dress (expected: familiar ".concat(this.familiar, ")");
      var _iterator6 = _createForOfIteratorHelper9(nonaccessorySlots), _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          var _slot2 = _step6.value;
          if (this.equips.has(_slot2) && (0, import_kolmafia20.equippedItem)(_slot2) !== this.equips.get(_slot2))
            throw "Failed to fully dress (expected: ".concat(_slot2, " ").concat(this.equips.get(_slot2), ")");
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      var _iterator7 = _createForOfIteratorHelper9(accessoryEquips), _step7;
      try {
        var _loop2 = function() {
          var accessory2 = _step7.value;
          if ((0, import_kolmafia20.equippedAmount)(accessory2) < accessoryEquips.filter(function(acc) {
            return acc === accessory2;
          }).length)
            throw "Failed to fully dress (expected: acc ".concat(accessory2, ")");
        };
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; )
          _loop2();
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      for (var _i4 = 0, _arr = [[$slot(_templateObject453 || (_templateObject453 = _taggedTemplateLiteral10(["buddy-bjorn"]))), $item(_templateObject463 || (_templateObject463 = _taggedTemplateLiteral10(["Buddy Bjorn"]))), import_kolmafia20.myBjornedFamiliar], [$slot(_templateObject473 || (_templateObject473 = _taggedTemplateLiteral10(["crown-of-thrones"]))), $item(_templateObject483 || (_templateObject483 = _taggedTemplateLiteral10(["Crown of Thrones"]))), import_kolmafia20.myEnthronedFamiliar]]; _i4 < _arr.length; _i4++) {
        var _arr$_i = _slicedToArray9(_arr[_i4], 3), rider = _arr$_i[0], throne = _arr$_i[1], checkingFunction = _arr$_i[2], wanted = this.riders.get(rider);
        if (_toConsumableArray7(this.equips.values()).includes(throne) && wanted && checkingFunction() !== wanted)
          throw "Failed to fully dress: (expected ".concat(rider, " ").concat(wanted, ")");
      }
    }
  }, {
    key: "dress",
    value: function() {
      var _iterator8 = _createForOfIteratorHelper9(this.preActions), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          var action = _step8.value;
          action();
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      this._dress(!1);
      var _iterator9 = _createForOfIteratorHelper9(this.postActions), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          var _action = _step9.value;
          _action();
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
    /**
     * Build an Outfit identical to this outfit.
     */
  }, {
    key: "clone",
    value: function() {
      var result = new Outfit2();
      return result.equips = new Map(this.equips), result.skipDefaults = this.skipDefaults, result.familiar = this.familiar, result.modifier = _toConsumableArray7(this.modifier), result.avoid = _toConsumableArray7(this.avoid), result.modes = _objectSpread4({}, this.modes), result.riders = new Map(this.riders), result.bonuses = new Map(this.bonuses), result.beforeDress.apply(result, _toConsumableArray7(this.preActions)), result.afterDress.apply(result, _toConsumableArray7(this.postActions)), result;
    }
    /**
     * Build an OutfitSpec identical to this outfit.
     */
  }, {
    key: "spec",
    value: function() {
      var _a, result = {
        modifier: _toConsumableArray7(this.modifier),
        avoid: _toConsumableArray7(this.avoid),
        skipDefaults: this.skipDefaults,
        modes: _objectSpread4({}, this.modes),
        bonuses: new Map(this.bonuses)
      };
      this.familiar && (result.familiar = this.familiar);
      for (var _i5 = 0, _outfitSlots2 = outfitSlots; _i5 < _outfitSlots2.length; _i5++) {
        var slotName = _outfitSlots2[_i5], entry = this.equips.get((_a = (/* @__PURE__ */ new Map([["famequip", $slot(_templateObject523 || (_templateObject523 = _taggedTemplateLiteral10(["familiar"])))], ["offhand", $slot(_templateObject533 || (_templateObject533 = _taggedTemplateLiteral10(["off-hand"])))]])).get(slotName)) !== null && _a !== void 0 ? _a : (0, import_kolmafia20.toSlot)(slotName));
        entry && (result[slotName] = entry);
      }
      var riders = {}, buddyRider = this.riders.get($slot(_templateObject542 || (_templateObject542 = _taggedTemplateLiteral10(["buddy-bjorn"]))));
      buddyRider !== void 0 && (riders["buddy-bjorn"] = buddyRider);
      var throneRider = this.riders.get($slot(_templateObject552 || (_templateObject552 = _taggedTemplateLiteral10(["crown-of-thrones"]))));
      return throneRider !== void 0 && (riders["crown-of-thrones"] = throneRider), (buddyRider !== void 0 || throneRider !== void 0) && (result.riders = riders), this.preActions.length && (result.beforeDress = this.preActions), this.postActions.length && (result.afterDress = this.postActions), result;
    }
  }], [{
    key: "current",
    value: function() {
      var _a, outfit2 = new Outfit2(), familiar2 = (0, import_kolmafia20.myFamiliar)();
      if (outfit2.equip(familiar2))
        throw "Failed to create outfit from current state (expected: familiar ".concat(familiar2, ")");
      for (var _i6 = 0, _outfitSlots3 = outfitSlots; _i6 < _outfitSlots3.length; _i6++) {
        var slotName = _outfitSlots3[_i6], slot = (_a = (/* @__PURE__ */ new Map([["famequip", $slot(_templateObject562 || (_templateObject562 = _taggedTemplateLiteral10(["familiar"])))], ["offhand", $slot(_templateObject572 || (_templateObject572 = _taggedTemplateLiteral10(["off-hand"])))]])).get(slotName)) !== null && _a !== void 0 ? _a : (0, import_kolmafia20.toSlot)(slotName), item4 = (0, import_kolmafia20.equippedItem)(slot);
        if (!outfit2.equip(item4, slot))
          throw "Failed to create outfit from current state (expected: ".concat(slot, " ").concat(item4, ")");
      }
      return (0, import_kolmafia20.haveEquipped)($item(_templateObject582 || (_templateObject582 = _taggedTemplateLiteral10(["Crown of Thrones"])))) && outfit2.riders.set($slot(_templateObject592 || (_templateObject592 = _taggedTemplateLiteral10(["crown-of-thrones"]))), (0, import_kolmafia20.myEnthronedFamiliar)()), (0, import_kolmafia20.haveEquipped)($item(_templateObject602 || (_templateObject602 = _taggedTemplateLiteral10(["Buddy Bjorn"])))) && outfit2.riders.set($slot(_templateObject612 || (_templateObject612 = _taggedTemplateLiteral10(["buddy-bjorn"]))), (0, import_kolmafia20.myBjornedFamiliar)()), outfit2.setModes(getCurrentModes2()), outfit2;
    }
  }, {
    key: "from",
    value: function(spec) {
      var error = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, _a, outfit2 = new Outfit2();
      if (spec instanceof Requirement) {
        var result = {};
        result.modifier = spec.maximizeParameters, !((_a = spec.maximizeOptions.forceEquip) === null || _a === void 0) && _a.length && (result.equip = spec.maximizeOptions.forceEquip), result.avoid = spec.maximizeOptions.preventEquip, result.bonuses = spec.maximizeOptions.bonusEquip, spec.maximizeOptions.modes && (result.modes = convertFromLibramModes(spec.maximizeOptions.modes));
        var cleanedResult = Object.fromEntries(_toConsumableArray7(Object.entries(result)).filter(function(_ref7) {
          var _ref8 = _slicedToArray9(_ref7, 2), v = _ref8[1];
          return v !== void 0;
        }));
        return Outfit2.from(cleanedResult);
      }
      var success = outfit2.equip(spec);
      if (!success && error) throw error;
      return success ? outfit2 : null;
    }
  }]);
}();
function convertToLibramModes(modes) {
  var _a;
  return {
    backupcamera: modes.backupcamera,
    umbrella: modes.umbrella,
    snowsuit: modes.snowsuit,
    edpiece: modes.edpiece,
    retrocape: (_a = modes.retrocape) === null || _a === void 0 ? void 0 : _a.filter(function(s) {
      return s !== void 0;
    }).join(" "),
    parka: modes.parka,
    jillcandle: modes.jillcandle
  };
}
function convertFromLibramModes(modes) {
  return modes.retrocape ? _objectSpread4(_objectSpread4({}, modes), {}, {
    retrocape: modes.retrocape.split(" ")
  }) : modes;
}
function getCurrentModes2() {
  return {
    backupcamera: getMode("backupCameraMode", ["ml", "meat", "init"]),
    umbrella: getMode("umbrellaState", ["broken", "forward-facing", "bucket style", "pitchfork style", "constantly twirling", "cocoon"]),
    snowsuit: getMode("snowsuit", ["eyebrows", "smirk", "nose", "goatee", "hat"]),
    edpiece: getMode("edPiece", ["bear", "owl", "puma", "hyena", "mouse", "weasel", "fish"]),
    retrocape: [getMode("retroCapeSuperhero", ["vampire", "heck", "robot"]), getMode("retroCapeWashingInstructions", ["hold", "thrill", "kiss", "kill"])],
    parka: getMode("parkaMode", ["kachungasaur", "dilophosaur", "ghostasaurus", "spikolodon", "pterodactyl"]),
    jillcandle: getMode("jillcandle", ["disco", "ultraviolet", "reading", "red"])
  };
}
function getMode(property, options) {
  var val = get(property, "");
  return options.find(function(s) {
    return s === val;
  });
}

// node_modules/grimoire-kolmafia/dist/engine.js
var _templateObject67, _templateObject220;
function _taggedTemplateLiteral11(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function _toConsumableArray8(r) {
  return _arrayWithoutHoles8(r) || _iterableToArray8(r) || _unsupportedIterableToArray14(r) || _nonIterableSpread8();
}
function _nonIterableSpread8() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray8(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles8(r) {
  if (Array.isArray(r)) return _arrayLikeToArray14(r);
}
function _slicedToArray10(r, e) {
  return _arrayWithHoles10(r) || _iterableToArrayLimit10(r, e) || _unsupportedIterableToArray14(r, e) || _nonIterableRest10();
}
function _nonIterableRest10() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit10(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles10(r) {
  if (Array.isArray(r)) return r;
}
function _createForOfIteratorHelper10(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray14(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray14(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray14(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray14(r, a) : void 0;
  }
}
function _arrayLikeToArray14(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function ownKeys5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys5(Object(t), !0).forEach(function(r2) {
      _defineProperty9(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys5(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty9(e, r, t) {
  return (r = _toPropertyKey11(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _defineProperties11(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey11(o.key), o);
  }
}
function _createClass11(e, r, t) {
  return r && _defineProperties11(e.prototype, r), t && _defineProperties11(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _toPropertyKey11(t) {
  var i = _toPrimitive11(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive11(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _classCallCheck11(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
var grimoireCCS = "grimoire_macro", Engine = /* @__PURE__ */ function() {
  function Engine3(tasks, options) {
    var _this = this;
    _classCallCheck11(this, Engine3), this.attempts = {}, this.propertyManager = new PropertiesManager(), this.tasks_by_name = /* @__PURE__ */ new Map(), this.cachedCcsContents = "", this.options = options != null ? options : {}, this.tasks = tasks.map(function(task2) {
      return _objectSpread5(_objectSpread5({}, _this.options.default_task_options), task2);
    });
    var _iterator3 = _createForOfIteratorHelper10(this.tasks), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        var task = _step3.value;
        this.tasks_by_name.set(task.name, task);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    this.initPropertiesManager(this.propertyManager);
  }
  return _createClass11(Engine3, [{
    key: "getNextTask",
    value: function() {
      var _this = this;
      return this.tasks.find(function(task) {
        return _this.available(task);
      });
    }
    /**
     * Continually get the next task and execute it.
     * @param actions If given, only perform up to this many tasks.
     */
  }, {
    key: "run",
    value: function(actions) {
      for (var i = 0; i < (actions != null ? actions : 1 / 0); i++) {
        var task = this.getNextTask();
        if (!task) return;
        this.execute(task);
      }
    }
    /**
     * Close the engine and reset all properties.
     * After this has been called, this object should not be used.
     */
  }, {
    key: "destruct",
    value: function() {
      this.propertyManager.resetAll(), (0, import_kolmafia21.setAutoAttack)(0);
    }
    /**
     * Check if the given task is available at this moment.
     * @returns true if all dependencies are complete and the task is ready.
     *  Note that dependencies are not checked transitively. That is, if
     *  A depends on B which depends on C, then A is ready if B is complete
     *  (regardless of if C is complete or not).
     */
  }, {
    key: "available",
    value: function(task) {
      var _a, _b;
      if (((_a = task.limit) === null || _a === void 0 ? void 0 : _a.skip) !== void 0 && this.attempts[task.name] >= task.limit.skip) return !1;
      var _iterator22 = _createForOfIteratorHelper10((_b = task.after) !== null && _b !== void 0 ? _b : []), _step22;
      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
          var after = _step22.value, after_task = this.tasks_by_name.get(after);
          if (after_task === void 0) throw "Unknown task dependency ".concat(after, " on ").concat(task.name);
          if (!after_task.completed()) return !1;
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }
      return !(task.ready && !task.ready() || task.completed());
    }
    /**
     * Perform all steps to execute the provided task.
     * This is the main entry point for the Engine.
     * @param task The current executing task.
     */
  }, {
    key: "execute",
    value: function(task) {
      var _a, _b, _c, _d, _e;
      (0, import_kolmafia21.print)(""), (0, import_kolmafia21.print)("Executing ".concat(task.name), "blue");
      var postcondition = (_b = (_a = task.limit) === null || _a === void 0 ? void 0 : _a.guard) === null || _b === void 0 ? void 0 : _b.call(_a);
      this.acquireItems(task), this.acquireEffects(task);
      var task_combat = (_d = (_c = task.combat) === null || _c === void 0 ? void 0 : _c.clone()) !== null && _d !== void 0 ? _d : new CombatStrategy(), outfit2 = this.createOutfit(task), task_resources = new CombatResources();
      this.customize(task, outfit2, task_combat, task_resources), this.dress(task, outfit2), this.setCombat(task, task_combat, task_resources), this.setChoices(task, this.propertyManager);
      var _iterator3 = _createForOfIteratorHelper10(task_resources.all()), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var resource = _step3.value;
          (_e = resource.prepare) === null || _e === void 0 || _e.call(resource);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      for (this.prepare(task), this.do(task); this.shouldRepeatAdv(task); )
        _set("lastEncounter", ""), this.do(task);
      this.post(task), this.markAttempt(task), this.checkLimits(task, postcondition);
    }
    /**
     * Acquire all items for the task.
     * @param task The current executing task.
     */
  }, {
    key: "acquireItems",
    value: function(task) {
      var _a, acquire = undelay(task.acquire), _iterator4 = _createForOfIteratorHelper10(acquire || []), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var to_get = _step4.value, num_needed = (_a = to_get.num) !== null && _a !== void 0 ? _a : 1, num_have = (0, import_kolmafia21.itemAmount)(to_get.item) + (0, import_kolmafia21.equippedAmount)(to_get.item);
          if (!(num_needed <= num_have) && !(to_get.useful !== void 0 && !to_get.useful()) && (to_get.get ? to_get.get() : to_get.price !== void 0 ? (0, import_kolmafia21.buy)(to_get.item, num_needed - num_have, to_get.price) : Object.keys((0, import_kolmafia21.getRelated)(to_get.item, "fold")).length > 0 ? (0, import_kolmafia21.cliExecute)("fold ".concat(to_get.item)) : (0, import_kolmafia21.retrieveItem)(to_get.item, num_needed), (0, import_kolmafia21.itemAmount)(to_get.item) + (0, import_kolmafia21.equippedAmount)(to_get.item) < num_needed && !to_get.optional))
            throw "Task ".concat(task.name, " was unable to acquire ").concat(num_needed, " ").concat(to_get.item);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    /**
     * Acquire all effects for the task.
     * @param task The current executing task.
     */
  }, {
    key: "acquireEffects",
    value: function(task) {
      var _a, effects = (_a = undelay(task.effects)) !== null && _a !== void 0 ? _a : [], songs = effects.filter(function(effect2) {
        return isSong(effect2);
      });
      if (songs.length > maxSongs()) throw "Too many AT songs";
      for (var extraSongs = Object.keys((0, import_kolmafia21.myEffects)()).map(function(effectName) {
        return (0, import_kolmafia21.toEffect)(effectName);
      }).filter(function(effect2) {
        return isSong(effect2) && !songs.includes(effect2);
      }); songs.length + extraSongs.length > maxSongs(); ) {
        var toRemove = extraSongs.pop();
        if (toRemove === void 0)
          break;
        uneffect(toRemove);
      }
      var _iterator5 = _createForOfIteratorHelper10(effects), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          var effect = _step5.value;
          ensureEffect(effect);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
    /**
     * Create an outfit for the task with all required equipment.
     * @param task The current executing task.
     */
  }, {
    key: "createOutfit",
    value: function(task) {
      var spec = undelay(task.outfit);
      if (spec instanceof Outfit) return spec.clone();
      var outfit2 = new Outfit();
      if (spec !== void 0 && !outfit2.equip(spec) && !this.options.allow_partial_outfits)
        throw "Unable to equip all items for ".concat(task.name);
      return outfit2;
    }
    /**
     * Equip the outfit for the task.
     * @param task The current executing task.
     * @param outfit The outfit for the task, possibly augmented by the engine.
     */
  }, {
    key: "dress",
    value: function(task, outfit2) {
      task.do instanceof import_kolmafia21.Location && (0, import_kolmafia21.setLocation)(task.do), outfit2.dress();
    }
    /* eslint-disable @typescript-eslint/no-unused-vars */
    /**
     * Perform any engine-specific customization for the outfit and combat plan.
     *
     * This is a natural method to override in order to:
     *   * Enable the use of any resources in the outfit or combat (e.g., allocate banishers).
     *   * Equip a default outfit.
     *   * Determine additional monster macros at a global level (e.g., use flyers).
     * @param task The current executing task.
     * @param outfit The outfit for the task.
     * @param combat The combat strategy so far for the task.
     * @param resources The combat resources assigned so far for the task.
     */
  }, {
    key: "customize",
    value: function(task, outfit2, combat, resources) {
    }
    /* eslint-enable @typescript-eslint/no-unused-vars */
    /**
     * Set the choice settings for the task.
     * @param task The current executing task.
     * @param manager The property manager to use.
     */
  }, {
    key: "setChoices",
    value: function(task, manager) {
      for (var _a, _i = 0, _Object$entries = Object.entries(undelay((_a = task.choices) !== null && _a !== void 0 ? _a : {})); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray10(_Object$entries[_i], 2), key = _Object$entries$_i[0], value3 = _Object$entries$_i[1];
        value3 !== void 0 && manager.setChoice(parseInt(key), value3);
      }
    }
    /**
     * Save the combat macro for this task.
     * @param task The current executing task.
     * @param task_combat The completed combat strategy far for the task.
     * @param task_resources The combat resources assigned for the task.
     */
  }, {
    key: "setCombat",
    value: function(task, task_combat, task_resources) {
      var _a, macro = task_combat.compile(task_resources, (_a = this.options) === null || _a === void 0 ? void 0 : _a.combat_defaults, task.do instanceof import_kolmafia21.Location ? task.do : void 0);
      if (macro.save(), !this.options.ccs) {
        var otherCCSEntries = task_combat.compileCcs(), ccsContents = ["[default]", '"'.concat(macro.toString(), '"')].concat(_toConsumableArray8(otherCCSEntries)).join("\n");
        (0, import_kolmafia21.logprint)("CCS: ".concat(ccsContents.replace("\n", "\\n "))), ccsContents !== this.cachedCcsContents && ((0, import_kolmafia21.writeCcs)(ccsContents, grimoireCCS), (0, import_kolmafia21.cliExecute)("ccs ".concat(grimoireCCS)), this.cachedCcsContents = ccsContents);
      }
      var autoattack = task_combat.compileAutoattack();
      autoattack.toString().length > 1 ? ((0, import_kolmafia21.logprint)("Autoattack macro: ".concat(autoattack.toString())), autoattack.setAutoAttack()) : (0, import_kolmafia21.setAutoAttack)(0);
    }
    /**
     * Do any task-specific preparation.
     * @param task The current executing task.
     */
  }, {
    key: "prepare",
    value: function(task) {
      var _a;
      (_a = task.prepare) === null || _a === void 0 || _a.call(task);
    }
    /**
     * Actually perform the task.
     * @param task The current executing task.
     */
  }, {
    key: "do",
    value: function(task) {
      var result = typeof task.do == "function" ? task.do() : task.do;
      for (result instanceof import_kolmafia21.Location && (0, import_kolmafia21.adv1)(result, -1, ""), (0, import_kolmafia21.runCombat)(); (0, import_kolmafia21.inMultiFight)(); ) (0, import_kolmafia21.runCombat)();
      (0, import_kolmafia21.choiceFollowsFight)() && (0, import_kolmafia21.runChoice)(-1);
    }
    /**
     * Check if the task.do should be immediately repeated without any prep.
     *
     * By default, this is only used to repeat a task if we hit one of:
     *   1. Halloweener dog noncombats,
     *   2. June cleaver noncombats,
     *   3. Lil' Doctor™ bag noncombat, or
     *   4. Turtle taming noncombats.
     * @param task The current executing task.
     * @returns True if the task should be immediately repeated.
     */
  }, {
    key: "shouldRepeatAdv",
    value: function(task) {
      return task.do instanceof import_kolmafia21.Location && lastEncounterWasWanderingNC();
    }
    /**
     * Do any task-specific wrapup activities.
     * @param task The current executing task.
     */
  }, {
    key: "post",
    value: function(task) {
      var _a;
      (_a = task.post) === null || _a === void 0 || _a.call(task);
    }
    /**
     * Mark that an attempt was made on the current task.
     * @param task The current executing task.
     */
  }, {
    key: "markAttempt",
    value: function(task) {
      task.name in this.attempts || (this.attempts[task.name] = 0), this.attempts[task.name]++;
    }
    /**
     * Check if the task has passed any of its internal limits.
     * @param task The task to check.
     * @throws An error if any of the internal limits have been passed.
     */
  }, {
    key: "checkLimits",
    value: function(task, postcondition) {
      var _a;
      if (task.limit) {
        var failureMessage = task.limit.message ? " ".concat(task.limit.message) : "";
        if (!task.completed()) {
          if (task.limit.tries && this.attempts[task.name] >= task.limit.tries) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.tries, " attempts. Please check what went wrong.").concat(failureMessage);
          if (task.limit.soft && this.attempts[task.name] >= task.limit.soft) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.soft, " attempts. Please check what went wrong (you may just be unlucky).").concat(failureMessage);
          if (task.limit.turns && task.do instanceof import_kolmafia21.Location && task.do.turnsSpent >= task.limit.turns) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.turns, " turns. Please check what went wrong.").concat(failureMessage);
          if (task.limit.unready && (!((_a = task.ready) === null || _a === void 0) && _a.call(task))) throw "Task ".concat(task.name, " is still ready, but it should not be. Please check what went wrong.").concat(failureMessage);
          if (task.limit.completed) throw "Task ".concat(task.name, " is not completed, but it should be. Please check what went wrong.").concat(failureMessage);
        }
        if (postcondition && !postcondition())
          throw "Task ".concat(task.name, " failed its guard. Please check what went wrong.").concat(failureMessage);
      }
    }
  }, {
    key: "getDefaultSettings",
    value: function() {
      return this.constructor.defaultSettings;
    }
    /**
     * Initialize properties for the script.
     * @param manager The properties manager to use.
     */
  }, {
    key: "initPropertiesManager",
    value: function(manager) {
      var _a;
      manager.set(this.getDefaultSettings()), this.options.ccs !== "" && (this.options.ccs === void 0 && (0, import_kolmafia21.readCcs)(grimoireCCS) === "" && (0, import_kolmafia21.writeCcs)("[ default ]\nabort", grimoireCCS), manager.set({
        customCombatScript: (_a = this.options.ccs) !== null && _a !== void 0 ? _a : grimoireCCS
      }));
    }
  }]);
}();
Engine.defaultSettings = {
  logPreferenceChange: !0,
  logPreferenceChangeFilter: _toConsumableArray8(new Set([].concat(_toConsumableArray8(get("logPreferenceChangeFilter").split(",")), ["libram_savedMacro", "maximizerMRUList", "testudinalTeachings", "_lastCombatStarted"]))).sort().filter(function(a) {
    return a;
  }).join(","),
  battleAction: "custom combat script",
  autoSatisfyWithMall: !0,
  autoSatisfyWithNPCs: !0,
  autoSatisfyWithCoinmasters: !0,
  autoSatisfyWithStash: !1,
  dontStopForCounters: !0,
  maximizerFoldables: !0,
  hpAutoRecovery: "-0.05",
  hpAutoRecoveryTarget: "0.0",
  mpAutoRecovery: "-0.05",
  mpAutoRecoveryTarget: "0.0",
  afterAdventureScript: "",
  betweenBattleScript: "",
  choiceAdventureScript: "",
  familiarScript: "",
  currentMood: "apathetic",
  autoTuxedo: !0,
  autoPinkyRing: !0,
  autoGarish: !0,
  allowNonMoodBurning: !1,
  allowSummonBurning: !0,
  libramSkillsSoftcore: "none"
};
function maxSongs() {
  return have($skill(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral11(["Mariachi Memory"])))) ? 4 : 3;
}
var wanderingNCs = /* @__PURE__ */ new Set([
  // Halloweener dog noncombats
  "Wooof! Wooooooof!",
  "Playing Fetch*",
  // June cleaver noncombats
  "Aunts not Ants",
  "Bath Time",
  "Beware of Aligator",
  "Delicious Sprouts",
  "Hypnotic Master",
  "Lost and Found",
  "Poetic Justice",
  "Summer Days",
  "Teacher's Pet",
  // Lil' Doctor™ bag noncombat
  "A Pound of Cure",
  // Turtle taming noncombats
  "Nantucket Snapper",
  "Blue Monday",
  "Capital!",
  "Training Day",
  "Boxed In",
  "Duel Nature",
  "Slow Food",
  "A Rolling Turtle Gathers No Moss",
  "Slow Road to Hell",
  "C'mere, Little Fella",
  "The Real Victims",
  "Like That Time in Tortuga",
  "Cleansing your Palette",
  "Harem Scarum",
  "Turtle in peril",
  "No Man, No Hole",
  "Slow and Steady Wins the Brawl",
  "Stormy Weather",
  "Turtles of the Universe",
  "O Turtle Were Art Thou",
  "Allow 6-8 Weeks For Delivery",
  "Kick the Can",
  "Turtles All The Way Around",
  "More eXtreme Than Usual",
  "Jewel in the Rough",
  "The worst kind of drowning",
  "Even Tamer Than Usual",
  "Never Break the Chain",
  "Close, but Yes Cigar",
  "Armchair Quarterback",
  "This Turtle Rocks!",
  "Really Sticking Her Neck Out",
  "It Came from Beneath the Sewer? Great!",
  "Don't Be Alarmed, Now",
  "Puttin' it on Wax",
  "More Like... Hurtle",
  "Musk! Musk! Musk!",
  "Silent Strolling"
]), zoneSpecificNCs = /* @__PURE__ */ new Map([
  ["The Horror...", $locations(_templateObject220 || (_templateObject220 = _taggedTemplateLiteral11(["Frat House"])))]
  // Duplicate choice name
]);
function lastEncounterWasWanderingNC() {
  var _a, _b, last = get("lastEncounter");
  if (zoneSpecificNCs.has(last)) {
    var zones = (_a = zoneSpecificNCs.get(last)) !== null && _a !== void 0 ? _a : [];
    return zones.includes((_b = get("lastAdventure")) !== null && _b !== void 0 ? _b : $location.none);
  } else
    return wanderingNCs.has(last);
}

// node_modules/grimoire-kolmafia/dist/route.js
init_kolmafia_polyfill();
function ownKeys6(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread6(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys6(Object(t), !0).forEach(function(r2) {
      _defineProperty10(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys6(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty10(e, r, t) {
  return (r = _toPropertyKey12(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey12(t) {
  var i = _toPrimitive12(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive12(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _createForOfIteratorHelper11(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray15(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray15(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray15(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray15(r, a) : void 0;
  }
}
function _arrayLikeToArray15(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function getTasks(quests) {
  var implicitAfter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, _a, _b, result = [], _iterator3 = _createForOfIteratorHelper11(quests), _step3;
  try {
    var _loop = function() {
      var quest = _step3.value, questCompleted = quest.completed, questReady = quest.ready, _iterator32 = _createForOfIteratorHelper11(quest.tasks), _step32;
      try {
        var _loop22 = function() {
          var task2 = _step32.value, renamedTask = _objectSpread6({}, task2);
          if (renamedTask.name = "".concat(quest.name, "/").concat(task2.name), renamedTask.after = (_a = task2.after) === null || _a === void 0 ? void 0 : _a.map(function(after2) {
            return after2.includes("/") ? after2 : "".concat(quest.name, "/").concat(after2);
          }), implicitAfter && task2.after === void 0 && result.length > 0 && (renamedTask.after = [result[result.length - 1].name]), questCompleted !== void 0) {
            var taskCompleted = task2.completed;
            renamedTask.completed = function() {
              return questCompleted() || taskCompleted();
            };
          }
          var taskReady = renamedTask.ready;
          questReady !== void 0 && taskReady !== void 0 ? renamedTask.ready = function() {
            return questReady() && taskReady();
          } : questReady !== void 0 && (renamedTask.ready = function() {
            return questReady();
          }), result.push(renamedTask);
        };
        for (_iterator32.s(); !(_step32 = _iterator32.n()).done; )
          _loop22();
      } catch (err) {
        _iterator32.e(err);
      } finally {
        _iterator32.f();
      }
    };
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; )
      _loop();
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  for (var names = /* @__PURE__ */ new Set(), _i = 0, _result = result; _i < _result.length; _i++) {
    var task = _result[_i];
    names.add(task.name);
  }
  for (var _i2 = 0, _result2 = result; _i2 < _result2.length; _i2++) {
    var _task = _result2[_i2], _iterator22 = _createForOfIteratorHelper11((_b = _task.after) !== null && _b !== void 0 ? _b : []), _step22;
    try {
      for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
        var after = _step22.value;
        if (!names.has(after))
          throw "Unknown task dependency ".concat(after, " of ").concat(_task.name);
      }
    } catch (err) {
      _iterator22.e(err);
    } finally {
      _iterator22.f();
    }
  }
  return result;
}

// node_modules/grimoire-kolmafia/dist/task.js
init_kolmafia_polyfill();

// node_modules/grimoire-kolmafia/dist/limit.js
init_kolmafia_polyfill();
function _classCallCheck12(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties12(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey13(o.key), o);
  }
}
function _createClass12(e, r, t) {
  return r && _defineProperties12(e.prototype, r), t && _defineProperties12(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _toPropertyKey13(t) {
  var i = _toPrimitive13(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive13(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
var Guards = /* @__PURE__ */ function() {
  function Guards2() {
    _classCallCheck12(this, Guards2);
  }
  return _createClass12(Guards2, null, [{
    key: "create",
    value: (
      /**
       * A guard that computes a value before the task executes which is available
       * for the condition checker.
       * @param before
       * @param after
       */
      function(before, after) {
        return function() {
          var old = before();
          return function() {
            return after(old);
          };
        };
      }
    )
    /**
     * A guard that asserts a condition holds after the task executes.
     * @param condition A condition that should return true if the task
     *    sucessfully executed.
     */
  }, {
    key: "after",
    value: function(condition) {
      return function() {
        return condition;
      };
    }
    /**
     * A guard that asserts the provided property changed.
     * @param property The property to check.
     */
  }, {
    key: "changed",
    value: function(property) {
      return this.create(function() {
        return get(property);
      }, function(old) {
        return get(property) !== old;
      });
    }
  }]);
}();

// src/index.ts
var import_kolmafia54 = require("kolmafia");

// src/lib/cognac.ts
init_kolmafia_polyfill();
var import_kolmafia22 = require("kolmafia");

// src/prefs/properties.ts
var properties_exports = {};
__export(properties_exports, {
  ASDON: function() {
    return ASDON;
  },
  CLAN: function() {
    return CLAN;
  },
  CLUB_POPULARITY: function() {
    return CLUB_POPULARITY;
  },
  CURRENT_PLAYERS: function() {
    return CURRENT_PLAYERS;
  },
  FREE_RUN: function() {
    return FREE_RUN;
  },
  HEAP_ATTEMPTS: function() {
    return HEAP_ATTEMPTS;
  },
  LAST_STENCH_CHECK: function() {
    return LAST_STENCH_CHECK;
  },
  LIFETIME_TURNS_SPENT: function() {
    return LIFETIME_TURNS_SPENT;
  },
  RESULTS_DAY: function() {
    return RESULTS_DAY;
  },
  SKIP_GARBO: function() {
    return SKIP_GARBO;
  },
  TURNS_SPENT: function() {
    return TURNS_SPENT;
  }
});
init_kolmafia_polyfill();
var SCRIPT_PREFIX = "moustache", prefix = function(prop) {
  return "".concat(SCRIPT_PREFIX, "_").concat(prop);
}, daily = function(prop) {
  return "_".concat(prefix(prop));
}, CLAN = prefix("clan"), ASDON = prefix("useAsdon"), SKIP_GARBO = prefix("skipGarbo"), FREE_RUN = prefix("freeRun"), RESULTS_DAY = prefix("resultsDay"), TURNS_SPENT = prefix("turnsSpentToday"), LIFETIME_TURNS_SPENT = prefix("turnsLifetime"), CLUB_POPULARITY = prefix("clubPopularity"), HEAP_ATTEMPTS = daily("heapAttempts"), LAST_STENCH_CHECK = daily("heapAttemptsAtLastStenchCheck"), CURRENT_PLAYERS = daily("currentPlayers");

// src/lib/cognac.ts
var initialTurns = (0, import_kolmafia22.totalTurnsPlayed)();
function save() {
  _set(TURNS_SPENT, get(TURNS_SPENT, 0) + (0, import_kolmafia22.totalTurnsPlayed)() - initialTurns), _set(LIFETIME_TURNS_SPENT, get(LIFETIME_TURNS_SPENT, 0) + (0, import_kolmafia22.totalTurnsPlayed)() - initialTurns);
}
function printSession() {
  (0, import_kolmafia22.print)("Moustache summary:"), (0, import_kolmafia22.print)(""), (0, import_kolmafia22.print)("You've spent ".concat(get(TURNS_SPENT), " turns moustache-hunting this run!"));
}
function printLifetime() {
  (0, import_kolmafia22.print)(""), (0, import_kolmafia22.print)("Moustache lifetime summary:"), (0, import_kolmafia22.print)(""), (0, import_kolmafia22.print)("You've spent ".concat(get(LIFETIME_TURNS_SPENT, 0), " turns moustache-hunting!"), "green");
}

// src/lib/engine.ts
init_kolmafia_polyfill();
var import_kolmafia23 = require("kolmafia");
var _templateObject68, _templateObject221;
function ownKeys7(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread7(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys7(Object(t), !0).forEach(function(r2) {
      _defineProperty11(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys7(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _taggedTemplateLiteral12(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function _classCallCheck13(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties13(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey14(o.key), o);
  }
}
function _createClass13(e, r, t) {
  return r && _defineProperties13(e.prototype, r), t && _defineProperties13(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _callSuper4(t, o, e) {
  return o = _getPrototypeOf4(o), _possibleConstructorReturn4(t, _isNativeReflectConstruct4() ? Reflect.construct(o, e || [], _getPrototypeOf4(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn4(t, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized4(t);
}
function _assertThisInitialized4(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _isNativeReflectConstruct4() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct4 = function() {
    return !!t;
  })();
}
function _superPropGet(t, e, o, r) {
  var p = _get(_getPrototypeOf4(1 & r ? t.prototype : t), e, o);
  return 2 & r && typeof p == "function" ? function(t2) {
    return p.apply(o, t2);
  } : p;
}
function _get() {
  return _get = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && (t = _getPrototypeOf4(t)) !== null; ) ;
  return t;
}
function _getPrototypeOf4(t) {
  return _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf4(t);
}
function _inherits5(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf5(t, e);
}
function _setPrototypeOf5(t, e) {
  return _setPrototypeOf5 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf5(t, e);
}
function _defineProperty11(e, r, t) {
  return (r = _toPropertyKey14(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey14(t) {
  var i = _toPrimitive14(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive14(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
var Engine2 = /* @__PURE__ */ function(_BaseEngine) {
  function Engine3(tasks) {
    return _classCallCheck13(this, Engine3), _callSuper4(this, Engine3, [tasks]);
  }
  return _inherits5(Engine3, _BaseEngine), _createClass13(Engine3, [{
    key: "execute",
    value: function(task) {
      if (_superPropGet(Engine3, "execute", this, 3)([task]), get("lastEncounter") !== "Poetic Justice" && (0, import_kolmafia23.haveEffect)($effect(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral12(["Beaten Up"])))))
        throw "Combat lost";
      uneffect($effect(_templateObject221 || (_templateObject221 = _taggedTemplateLiteral12(["Beaten Up"]))));
    }
  }]);
}(Engine);
_defineProperty11(Engine2, "defaultSettings", _objectSpread7(_objectSpread7({}, Engine.defaultSettings), {}, {
  choiceAdventureScript: "scripts/cognac/choice.ash",
  hpAutoRecovery: "0.5",
  hpAutoRecoveryTarget: "1.0",
  choiceAdventure1467: "3",
  choiceAdventure1468: "1",
  choiceAdventure1469: "3",
  choiceAdventure1470: "2",
  choiceAdventure1471: "1",
  choiceAdventure1472: "1",
  choiceAdventure1473: "1",
  choiceAdventure1474: "2",
  choiceAdventure1475: "1",
  afterAdventureScript: get("afterAdventureScript", "")
}));

// src/prefs/prefs.ts
init_kolmafia_polyfill();
var import_kolmafia24 = require("kolmafia");
function showPreferences() {
  (0, import_kolmafia24.print)("Preferences for moustacherider", "blue"), (0, import_kolmafia24.print)(""), Object.values(properties_exports).map(prettyPrint);
}
function prettyPrint(prop) {
  var propVal = get(prop), color = "black";
  propVal || (color = "gray"), (0, import_kolmafia24.print)("".concat(prop, ": ").concat(propVal), color);
}
function resetDailyPreference(trackingPreference) {
  var today = (0, import_kolmafia24.todayToString)();
  return get(trackingPreference, "") !== today ? (_set(trackingPreference, today), !0) : !1;
}
function maybeResetDailyPreferences() {
  resetDailyPreference(RESULTS_DAY) && _set(TURNS_SPENT, 0);
}
function checkClan() {
  if (!get(CLAN))
    throw "Please set moustacherider clan pref. See `moustacherider config`";
}

// src/quests/pld/pld.ts
init_kolmafia_polyfill();
var import_kolmafia31 = require("kolmafia");

// src/quests/shared/asdon.ts
init_kolmafia_polyfill();
var _templateObject69, _templateObject226, _templateObject318, _templateObject417;
function _taggedTemplateLiteral13(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var DriveStealthily = {
  name: "Drive Stealthily",
  completed: function() {
    return !AsdonMartin_exports.installed() || have($effect(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral13(["Driving Stealthily"]))));
  },
  do: function() {
    AsdonMartin_exports.drive($effect(_templateObject226 || (_templateObject226 = _taggedTemplateLiteral13(["Driving Stealthily"]))));
  }
}, DriveObnoxiously = {
  name: "Drive Obnoxiously",
  completed: function() {
    return !AsdonMartin_exports.installed() || have($effect(_templateObject318 || (_templateObject318 = _taggedTemplateLiteral13(["Driving Obnoxiously"]))));
  },
  do: function() {
    AsdonMartin_exports.drive($effect(_templateObject417 || (_templateObject417 = _taggedTemplateLiteral13(["Driving Obnoxiously"]))));
  }
};

// src/quests/pld/tasks/explore.ts
init_kolmafia_polyfill();
var import_kolmafia29 = require("kolmafia");

// src/lib/combat.ts
init_kolmafia_polyfill();
var import_kolmafia27 = require("kolmafia");

// src/lib/freeRun.ts
init_kolmafia_polyfill();
var import_kolmafia26 = require("kolmafia");

// src/lib/drunk.ts
init_kolmafia_polyfill();
var import_kolmafia25 = require("kolmafia");
function drunk() {
  return (0, import_kolmafia25.myInebriety)() > (0, import_kolmafia25.inebrietyLimit)();
}

// src/lib/freeRun.ts
var _templateObject70, _templateObject227, _templateObject319, _templateObject418, _templateObject514, _templateObject610;
function _taggedTemplateLiteral14(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function freeRunItemAvailable() {
  return (0, import_kolmafia26.itemAmount)($item(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral14(["Louder Than Bomb"])))) + (0, import_kolmafia26.itemAmount)($item(_templateObject227 || (_templateObject227 = _taggedTemplateLiteral14(["divine champagne popper"])))) + (0, import_kolmafia26.itemAmount)($item(_templateObject319 || (_templateObject319 = _taggedTemplateLiteral14(["tennis ball"])))) > 0 || (0, import_kolmafia26.itemAmount)($item(_templateObject418 || (_templateObject418 = _taggedTemplateLiteral14(["green smoke bomb"])))) > 3 || (0, import_kolmafia26.itemAmount)($item(_templateObject514 || (_templateObject514 = _taggedTemplateLiteral14(["tattered scrap of paper"])))) > 10 || (0, import_kolmafia26.itemAmount)($item(_templateObject610 || (_templateObject610 = _taggedTemplateLiteral14(["GOTO"])))) > 20;
}
function shouldUseFreeRunItem() {
  return !drunk() && get(FREE_RUN, !1);
}

// src/lib/combat.ts
var _templateObject71, _templateObject228, _templateObject320, _templateObject419, _templateObject515, _templateObject611, _templateObject77, _templateObject87, _templateObject97, _templateObject107, _templateObject117, _templateObject127, _templateObject137, _templateObject146, _templateObject156, _templateObject166, _templateObject176, _templateObject186, _templateObject196, _templateObject206, _templateObject2111, _templateObject229, _templateObject236, _templateObject246, _templateObject256, _templateObject266, _templateObject276, _templateObject285, _templateObject295, _templateObject305, _templateObject3110, _templateObject325, _templateObject335, _templateObject345, _templateObject355, _templateObject364, _templateObject374;
function _taggedTemplateLiteral15(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function _classCallCheck14(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties14(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey15(o.key), o);
  }
}
function _createClass14(e, r, t) {
  return r && _defineProperties14(e.prototype, r), t && _defineProperties14(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _toPropertyKey15(t) {
  var i = _toPrimitive15(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive15(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _callSuper5(t, o, e) {
  return o = _getPrototypeOf5(o), _possibleConstructorReturn5(t, _isNativeReflectConstruct5() ? Reflect.construct(o, e || [], _getPrototypeOf5(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn5(t, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized5(t);
}
function _assertThisInitialized5(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _isNativeReflectConstruct5() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct5 = function() {
    return !!t;
  })();
}
function _getPrototypeOf5(t) {
  return _getPrototypeOf5 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf5(t);
}
function _inherits6(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf6(t, e);
}
function _setPrototypeOf6(t, e) {
  return _setPrototypeOf6 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf6(t, e);
}
var drunk2 = function() {
  return (0, import_kolmafia27.myInebriety)() > (0, import_kolmafia27.inebrietyLimit)();
}, Macro2 = /* @__PURE__ */ function(_LibramMacro) {
  function Macro3() {
    return _classCallCheck14(this, Macro3), _callSuper5(this, Macro3, arguments);
  }
  return _inherits6(Macro3, _LibramMacro), _createClass14(Macro3, [{
    key: "pickpocket",
    value: function() {
      return this.step("pickpocket");
    }
  }, {
    key: "tryItemsTogether",
    value: function(itemOrItems) {
      return have($skill(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral15(["Ambidextrous Funkslinging"])))) ? this.tryItem(itemOrItems) : Array.isArray(itemOrItems) ? this.tryItem(itemOrItems[0]).tryItem(itemOrItems[1]) : this.tryItem(itemOrItems);
    }
  }, {
    key: "itemWhileHave",
    value: function(item4) {
      return this.externalIf((0, import_kolmafia27.itemAmount)(item4) % 2 === 1 && (0, import_kolmafia27.itemAmount)(item4) < 60, Macro3.item(item4)).while_("hascombatitem ".concat(item4), Macro3.tryItemsTogether([item4, item4]));
    }
  }, {
    key: "maybeFreeRunItems",
    value: function() {
      return this.externalIf(shouldUseFreeRunItem(), Macro3.tryItemsTogether([$item(_templateObject228 || (_templateObject228 = _taggedTemplateLiteral15(["Louder Than Bomb"]))), $item(_templateObject320 || (_templateObject320 = _taggedTemplateLiteral15(["tennis ball"])))]).tryItem($item(_templateObject419 || (_templateObject419 = _taggedTemplateLiteral15(["divine champagne popper"])))).itemWhileHave($item(_templateObject515 || (_templateObject515 = _taggedTemplateLiteral15(["green smoke bomb"])))).itemWhileHave($item(_templateObject611 || (_templateObject611 = _taggedTemplateLiteral15(["tattered scrap of paper"])))).itemWhileHave($item(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral15(["GOTO"])))));
    }
  }, {
    key: "tryDelevelStun",
    value: function() {
      return this.trySkill($skill(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral15(["Curse of Weaksauce"])))).trySkill($skill(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral15(["Micrometeorite"])))).tryItemsTogether([$item(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral15(["Time-Spinner"]))), $item(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral15(["HOA citation pad"])))]).tryItemsTogether([$item(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral15(["Rain-Doh blue balls"]))), $item(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral15(["Rain-Doh indigo cup"])))]).tryItemsTogether([$item(_templateObject146 || (_templateObject146 = _taggedTemplateLiteral15(["train whistle"]))), $item(_templateObject156 || (_templateObject156 = _taggedTemplateLiteral15(["little red book"])))]).if_($monster(_templateObject166 || (_templateObject166 = _taggedTemplateLiteral15(["Normal hobo"]))), Macro3.tryItem($item(_templateObject176 || (_templateObject176 = _taggedTemplateLiteral15(["El Vibrato restraints"]))))).if_($monster(_templateObject186 || (_templateObject186 = _taggedTemplateLiteral15(["Stench hobo"]))), Macro3.tryItem($item(_templateObject196 || (_templateObject196 = _taggedTemplateLiteral15(["El Vibrato restraints"]))))).if_($monster(_templateObject206 || (_templateObject206 = _taggedTemplateLiteral15(["Sleaze hobo"]))), Macro3.tryItem($item(_templateObject2111 || (_templateObject2111 = _taggedTemplateLiteral15(["El Vibrato restraints"])))));
    }
  }, {
    key: "tryFreeRun",
    value: function() {
      return this.externalIf(
        !drunk2(),
        // Only delevel if we have a chance of dying, to speed up combat
        Macro3.tryItemsTogether([$item(_templateObject229 || (_templateObject229 = _taggedTemplateLiteral15(["Rain-Doh blue balls"]))), $item(_templateObject236 || (_templateObject236 = _taggedTemplateLiteral15(["Rain-Doh indigo cup"])))]).trySkill($skill(_templateObject246 || (_templateObject246 = _taggedTemplateLiteral15(["Extract"])))).tryItem($item(_templateObject256 || (_templateObject256 = _taggedTemplateLiteral15(["porquoise-handled sixgun"])))).trySkill($skill(_templateObject266 || (_templateObject266 = _taggedTemplateLiteral15(["Bowl a Curveball"])))).trySkill($skill(_templateObject276 || (_templateObject276 = _taggedTemplateLiteral15(["Asdon Martin: Spring-Loaded Front Bumper"])))).maybeFreeRunItems()
      ).runaway().repeat();
    }
  }, {
    key: "trySingAlong",
    value: function() {
      return !SongBoom_exports.have() || SongBoom_exports.song() !== "Total Eclipse of Your Meat" ? this : this.trySkill($skill(_templateObject285 || (_templateObject285 = _taggedTemplateLiteral15(["Sing Along"]))));
    }
  }, {
    key: "stasis",
    value: function() {
      return this.externalIf(!drunk2(), Macro3.trySkill($skill(_templateObject295 || (_templateObject295 = _taggedTemplateLiteral15(["Curse of Weaksauce"])))).trySkill($skill(_templateObject305 || (_templateObject305 = _taggedTemplateLiteral15(["Micrometeorite"])))).tryItemsTogether([$item(_templateObject3110 || (_templateObject3110 = _taggedTemplateLiteral15(["Time-Spinner"]))), $item(_templateObject325 || (_templateObject325 = _taggedTemplateLiteral15(["HOA citation pad"])))]).trySkill($skill(_templateObject335 || (_templateObject335 = _taggedTemplateLiteral15(["Extract"])))));
    }
  }, {
    key: "attackKill",
    value: function() {
      return this.stasis().tryItem($item(_templateObject345 || (_templateObject345 = _taggedTemplateLiteral15(["porquoise-handled sixgun"])))).trySingAlong().attack().repeat();
    }
  }, {
    key: "mortarShell",
    value: function() {
      return this.stasis().tryItem($item(_templateObject355 || (_templateObject355 = _taggedTemplateLiteral15(["porquoise-handled sixgun"])))).trySingAlong().trySkill($skill(_templateObject364 || (_templateObject364 = _taggedTemplateLiteral15(["Stuffed Mortar Shell"])))).tryItem($item(_templateObject374 || (_templateObject374 = _taggedTemplateLiteral15(["seal tooth"])))).attack().repeat();
    }
  }], [{
    key: "pickpocket",
    value: function() {
      return new Macro3().pickpocket();
    }
  }, {
    key: "tryItemsTogether",
    value: function(itemOrItems) {
      return new Macro3().tryItemsTogether(itemOrItems);
    }
  }, {
    key: "itemWhileHave",
    value: function(item4) {
      return new Macro3().itemWhileHave(item4);
    }
  }, {
    key: "freeRunItems",
    value: function() {
      return new Macro3().maybeFreeRunItems();
    }
  }, {
    key: "tryDelevelStun",
    value: function() {
      return new Macro3().tryDelevelStun();
    }
  }, {
    key: "tryFreeRun",
    value: function() {
      return new Macro3().tryFreeRun();
    }
  }, {
    key: "trySingAlong",
    value: function() {
      return new Macro3().trySingAlong();
    }
  }, {
    key: "stasis",
    value: function() {
      return new Macro3().stasis();
    }
  }, {
    key: "attackKill",
    value: function() {
      return new Macro3().attackKill();
    }
  }, {
    key: "mortarShell",
    value: function() {
      return new Macro3().mortarShell();
    }
  }]);
}(Macro);

// src/lib/preparepluscom.ts
init_kolmafia_polyfill();
var import_kolmafia28 = require("kolmafia");
var _templateObject78;
function _taggedTemplateLiteral16(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function _createForOfIteratorHelper12(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray16(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray16(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray16(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray16(r, a) : void 0;
  }
}
function _arrayLikeToArray16(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var EFFECTIVE_PC_VALUE = 100, itemInfo = [], _iterator = _createForOfIteratorHelper12($items(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral16([""])))), _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done; )
    item4 = _step.value, effect = (0, import_kolmafia28.effectModifier)(item4, "Effect"), modifier = get2("Combat Rate", effect), !(modifier <= 0) && (duration = (0, import_kolmafia28.numericModifier)(item4, "Effect Duration"), duration !== 0 && item4.tradeable && (price2 = (0, import_kolmafia28.mallPrice)(item4), !(price2 / duration > EFFECTIVE_PC_VALUE) && itemInfo.push({
      item: item4,
      modifier: modifier,
      duration: duration,
      price: price2
    })));
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var item4, effect, modifier, duration, price2, byValue = function(a, b) {
  var valA = value(a), valB = value(b);
  return valA < valB ? 1 : valA > valB ? -1 : 0;
};
itemInfo.sort(byValue);
function value(info) {
  return info.duration * info.modifier / info.price;
}
function capCombat() {
  for (var itemBought = !1, i = 0; i < itemInfo.length; i++) {
    var info = itemInfo[i], item4 = info.item;
    if ((0, import_kolmafia28.combatRateModifier)() >= 35)
      break;
    if (!(0, import_kolmafia28.haveEffect)(import_kolmafia28.Effect.get(get2("Effect", item4)))) {
      var maxPrice = Math.min(EFFECTIVE_PC_VALUE * info.duration * info.modifier / 5, 1e4);
      if (info.price < maxPrice && have(item4)) {
        if (!(0, import_kolmafia28.use)(item4, 1))
          throw "Failed to use item";
        continue;
      }
      var bought = (0, import_kolmafia28.buy)(item4, 1, maxPrice);
      if (bought > 1)
        throw "Bought too many items.";
      if (bought === 0)
        break;
      if (!(0, import_kolmafia28.use)(item4, 1))
        throw "Failed to use item";
      itemBought = !0, info.price = (0, import_kolmafia28.mallPrice)(item4);
    }
  }
  itemBought && itemInfo.sort(byValue);
}

// src/lib/raidlog.ts
init_kolmafia_polyfill();
function extractInt(regex, text) {
  var group = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  if (!regex.global) throw "Regexes must be global.";
  for (var result = 0, match; (match = regex.exec(text)) !== null; )
    match[group] === "a" ? result += 1 : result += parseInt(match[group], 10);
  return result;
}
function between(text, start, end) {
  var startIndex = text.indexOf(start);
  if (startIndex === -1) return "";
  var endIndex = text.indexOf(end, startIndex + start.length);
  return endIndex === -1 ? "" : text.slice(startIndex + start.length, endIndex);
}
function clubPopularityFromRaidlog(page) {
  var raidLog = between(page, "<b>Hobopolis", "<b>Loot Distribution:"), positives = extractInt(/(diverted some cold|bamboozled|flimflammed).*?\((\d*) turns?\)/g, raidLog, 2), steams = extractInt(/diverted some steam.*?\((\d*) turns?\)/g, raidLog), nosepicks = Math.min(extractInt(/danced like a superstar.*?\((\d*) turns?\)/g, raidLog) - 1, 0), result = positives - steams - nosepicks;
  return result;
}

// src/quests/pld/tasks/explore.ts
var _templateObject79, _templateObject230;
function ownKeys8(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread8(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys8(Object(t), !0).forEach(function(r2) {
      _defineProperty12(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys8(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _taggedTemplateLiteral17(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function _classCallCheck15(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties15(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey16(o.key), o);
  }
}
function _createClass15(e, r, t) {
  return r && _defineProperties15(e.prototype, r), t && _defineProperties15(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _defineProperty12(e, r, t) {
  return (r = _toPropertyKey16(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey16(t) {
  var i = _toPrimitive16(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive16(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
var Explore = /* @__PURE__ */ function() {
  function Explore3() {
    var _this = this;
    _classCallCheck15(this, Explore3), _defineProperty12(this, "clubAdventures", 0), _defineProperty12(this, "doneWithPLD", !1), _defineProperty12(this, "baseTask", {
      do: function() {
        return $location(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral17(["The Purple Light District"])));
      },
      post: function() {
        ["Van, Damn", "This Van's a' Rockin'"].includes((0, import_kolmafia29.getProperty)("lastEncounter")) && (_this.doneWithPLD = !0, (0, import_kolmafia29.print)("Chester waits. He waits. He waits. He waits. He waits.", "purple")), _this.clubAdventures = clubPopularityFromRaidlog((0, import_kolmafia29.visitUrl)("clan_raidlogs.php"));
      },
      prepare: function() {
        capCombat();
      },
      completed: function() {
        return _this.doneWithPLD;
      },
      combat: new CombatStrategy().autoattack(Macro2.attackKill())
    });
  }
  return _createClass15(Explore3, [{
    key: "getTasks",
    value: function() {
      var _this = this;
      return [{
        name: "Conduct Apriling Band Battle Cadence",
        ready: function() {
          return AprilingBandHelmet_exports.canChangeSong();
        },
        completed: function() {
          return have($effect(_templateObject230 || (_templateObject230 = _taggedTemplateLiteral17(["Apriling Band Battle Cadence"]))));
        },
        do: function() {
          return AprilingBandHelmet_exports.changeSong("Apriling Band Battle Cadence");
        }
      }, _objectSpread8(_objectSpread8({}, this.baseTask), {}, {
        ready: function() {
          return _this.clubAdventures <= 21;
        },
        name: "Purple it up (flimflammable)",
        choices: {
          219: 1,
          // The Furtivity of My City: fight sleaze hobo
          223: 3,
          // Getting Clubbed: flimflam if crowded, get inside otherwise
          224: 2,
          // Exclusive!: Pick several fights
          205: 2
          // Van, Damn: don't fight Chester
        }
      }), _objectSpread8(_objectSpread8({}, this.baseTask), {}, {
        ready: function() {
          return _this.clubAdventures > 21;
        },
        name: "Purple it up (let's you and him fight)",
        choices: {
          219: 1,
          // The Furtivity of My City: fight sleaze hobo
          223: 1,
          // Getting Clubbed: flimflam if crowded, get inside otherwise
          224: 2,
          // Exclusive!: Pick several fights
          205: 2
          // Van, Damn: don't fight Chester
        }
      })];
    }
  }]);
}();

// src/quests/pld/tasks/snapper.ts
init_kolmafia_polyfill();
var import_kolmafia30 = require("kolmafia");
var _templateObject80, _templateObject231, _templateObject321;
function _taggedTemplateLiteral18(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var snapper = $familiar(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral18(["Red-Nosed Snapper"]))), Snapper = {
  name: "Setup",
  completed: function() {
    return !have(snapper) || (0, import_kolmafia30.myFamiliar)() === $familiar(_templateObject231 || (_templateObject231 = _taggedTemplateLiteral18(["Red-Nosed Snapper"])));
  },
  do: function() {
    Snapper_exports.trackPhylum($phylum(_templateObject321 || (_templateObject321 = _taggedTemplateLiteral18(["Hobo"])))), (0, import_kolmafia30.useFamiliar)(snapper);
  }
};

// src/quests/pld/pld.ts
function _toConsumableArray9(r) {
  return _arrayWithoutHoles9(r) || _iterableToArray9(r) || _unsupportedIterableToArray17(r) || _nonIterableSpread9();
}
function _nonIterableSpread9() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray17(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray17(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray17(r, a) : void 0;
  }
}
function _iterableToArray9(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles9(r) {
  if (Array.isArray(r)) return _arrayLikeToArray17(r);
}
function _arrayLikeToArray17(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var explore = new Explore(), PLD = {
  name: "Purple Light District",
  completed: function() {
    return (0, import_kolmafia31.myAdventures)() < 1 || explore.doneWithPLD;
  },
  tasks: [DriveObnoxiously, Snapper].concat(_toConsumableArray9(explore.getTasks()))
};

// src/quests/prologue/prologue.ts
init_kolmafia_polyfill();

// src/quests/prologue/tasks/asdon.ts
init_kolmafia_polyfill();
var import_kolmafia32 = require("kolmafia");
var _templateObject81, _templateObject237, _templateObject326, _templateObject420;
function _taggedTemplateLiteral19(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var installAsdon = {
  name: "Install Asdon",
  completed: function() {
    return get("_workshedItemUsed") || AsdonInstalled();
  },
  do: function() {
    AsdonMartin_exports.installed() || !have($item(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral19(["Asdon Martin keyfob (on ring)"])))) || get(ASDON) && (0, import_kolmafia32.use)($item(_templateObject237 || (_templateObject237 = _taggedTemplateLiteral19(["Asdon Martin keyfob (on ring)"]))));
  }
}, fuelAsdon = {
  name: "Fuel Asdon",
  ready: function() {
    return (0, import_kolmafia32.getFuel)() < 50;
  },
  completed: function() {
    return !AsdonMartin_exports.installed() || have($item(_templateObject326 || (_templateObject326 = _taggedTemplateLiteral19(["Asdon Martin keyfob (on ring)"]))));
  },
  do: function() {
    AsdonMartin_exports.fillTo(50);
  }
};
function AsdonInstalled() {
  return !get(ASDON) || AsdonMartin_exports.installed() ? !0 : !have($item(_templateObject420 || (_templateObject420 = _taggedTemplateLiteral19(["Asdon Martin keyfob (on ring)"]))));
}

// src/quests/prologue/tasks/autumnaton.ts
init_kolmafia_polyfill();
var _templateObject88, _templateObject238;
function _taggedTemplateLiteral20(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var deployFalle = {
  name: "Deploy fall-e",
  completed: function() {
    return !AutumnAton_exports.available();
  },
  do: function() {
    AutumnAton_exports.sendTo($location(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral20(["The Haunted Conservatory"])))) || AutumnAton_exports.sendTo($location(_templateObject238 || (_templateObject238 = _taggedTemplateLiteral20(["The Haunted Pantry"]))));
  }
};

// src/quests/prologue/tasks/latte.ts
init_kolmafia_polyfill();
var import_kolmafia33 = require("kolmafia");
var _templateObject89;
function _taggedTemplateLiteral21(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function currentlyHasInk() {
  var ingredients = get("latteIngredients").toLowerCase().split(",");
  return ingredients.includes("ink") || ingredients.includes("inky");
}
var latteRefreshed = !1, refreshLatte = {
  name: "Refresh Latte",
  completed: function() {
    return latteRefreshed;
  },
  do: function() {
    (0, import_kolmafia33.visitUrl)("main.php?latte=1"), latteRefreshed = !0;
  }
}, refillLatte = {
  name: "Refill Latte",
  ready: function() {
    return have($item(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral21(["latte lovers member's mug"]))));
  },
  completed: function() {
    return currentlyHasInk() || LatteLoversMembersMug_exports.refillsRemaining() === 0 ? !0 : LatteLoversMembersMug_exports.ingredientsUnlocked().includes("ink") ? !1 : !get("_latteBanishUsed") || get("_latteRefillsUsed") >= 2;
  },
  do: function() {
    var preferred = ["ink", "rawhide", "cajun", "carrot", "cinnamon", "pumpkin", "vanilla"], unlocked = LatteLoversMembersMug_exports.ingredientsUnlocked(), plan = preferred.filter(function(ingredient) {
      return unlocked.includes(ingredient);
    });
    LatteLoversMembersMug_exports.fill(plan[0], plan[1], plan[2]);
  }
};

// src/quests/prologue/tasks/pantsgiving.ts
init_kolmafia_polyfill();
var import_kolmafia34 = require("kolmafia");
var _templateObject90, _templateObject239;
function _taggedTemplateLiteral22(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var lastPantsgivingFullness = get("_pantsgivingFullness"), pantsgiving = {
  name: "Pantsgiving",
  completed: function() {
    return get("_pantsgivingFullness") <= lastPantsgivingFullness;
  },
  do: function() {
    (0, import_kolmafia34.retrieveItem)($item(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral22(["Special Seasoning"])))), (0, import_kolmafia34.eat)($item(_templateObject239 || (_templateObject239 = _taggedTemplateLiteral22(["meteoreo"])))), lastPantsgivingFullness = get("_pantsgivingFullness");
  }
};

// src/quests/prologue/tasks/sourceterminal.ts
init_kolmafia_polyfill();
var _templateObject91, _templateObject240;
function _taggedTemplateLiteral23(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var setExtract = {
  name: "Set Extract",
  completed: function() {
    return !SourceTerminal_exports.have() || SourceTerminal_exports.getSkills().some(function(s) {
      return s === $skill(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral23(["Extract"])));
    });
  },
  do: function() {
    SourceTerminal_exports.educate($skill(_templateObject240 || (_templateObject240 = _taggedTemplateLiteral23(["Extract"]))));
  }
};

// src/quests/prologue/prologue.ts
var Prologue = {
  name: "Prologue",
  tasks: [installAsdon, fuelAsdon, deployFalle, refreshLatte, refillLatte, setExtract, pantsgiving]
};

// src/quests/sewers/sewers.ts
init_kolmafia_polyfill();
var import_kolmafia41 = require("kolmafia");

// src/quests/sewers/tasks/acquire.ts
init_kolmafia_polyfill();
var import_kolmafia35 = require("kolmafia");
var _templateObject98, _templateObject241, _templateObject327, _templateObject421, _templateObject516, _templateObject613, _templateObject710, _templateObject810, _templateObject99, _templateObject108, _templateObject118, _templateObject128;
function _taggedTemplateLiteral24(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var skipDumplings = !1, skipOozo = !1, skipOiliness = !1, skipGatorskin = !1, AcquireTasks = [{
  name: "Mmm, dumpling",
  completed: function() {
    return have($item(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral24(["unfortunate dumplings"])))) || skipDumplings;
  },
  do: function() {
    (0, import_kolmafia35.buy)($item(_templateObject241 || (_templateObject241 = _taggedTemplateLiteral24(["unfortunate dumplings"]))), 1, 2e4), skipDumplings = !have($item(_templateObject327 || (_templateObject327 = _taggedTemplateLiteral24(["unfortunate dumplings"]))));
  }
}, {
  name: "Mmm, oozo",
  completed: function() {
    return have($item(_templateObject421 || (_templateObject421 = _taggedTemplateLiteral24(["bottle of Ooze-O"])))) || skipOozo;
  },
  do: function() {
    (0, import_kolmafia35.buy)($item(_templateObject516 || (_templateObject516 = _taggedTemplateLiteral24(["bottle of Ooze-O"]))), 1, 2e4), skipOozo = !have($item(_templateObject613 || (_templateObject613 = _taggedTemplateLiteral24(["bottle of Ooze-O"]))));
  }
}, {
  name: "Get oil of oiliness",
  completed: function() {
    return have($item(_templateObject710 || (_templateObject710 = _taggedTemplateLiteral24(["oil of oiliness"])))) || skipOiliness;
  },
  do: function() {
    (0, import_kolmafia35.buy)($item(_templateObject810 || (_templateObject810 = _taggedTemplateLiteral24(["oil of oiliness"]))), 1, 1e4), skipOiliness = !have($item(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral24(["oil of oiliness"]))));
  }
}, {
  name: "Get gatorkskin umbrella",
  completed: function() {
    return have($item(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral24(["gatorskin umbrella"])))) || skipGatorskin;
  },
  do: function() {
    (0, import_kolmafia35.buy)($item(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral24(["gatorskin umbrella"]))), 1, 1e4), skipGatorskin = !have($item(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral24(["gatorskin umbrella"]))));
  }
}];

// src/quests/sewers/tasks/cage.ts
init_kolmafia_polyfill();
var import_kolmafia36 = require("kolmafia");
var cagebait = "ASSBot", caged = !1, cage = function() {
  (0, import_kolmafia36.chatPrivate)(cagebait, "cage ".concat(get(CLAN))), (0, import_kolmafia36.wait)(60);
}, CageTasks = [{
  name: "Catch ASSBot",
  completed: function() {
    return caged;
  },
  do: function() {
    caged = !0, cage();
  }
}];

// src/quests/sewers/tasks/explore.ts
init_kolmafia_polyfill();

// src/lib/effects.ts
init_kolmafia_polyfill();
var import_kolmafia38 = require("kolmafia");

// src/lib/familiar.ts
init_kolmafia_polyfill();
var import_kolmafia37 = require("kolmafia");
var _templateObject100, _templateObject247, _templateObject328, _templateObject424, _templateObject517, _templateObject614, _templateObject711, _templateObject811, _templateObject910, _templateObject109, _templateObject119, _templateObject129, _templateObject138, _templateObject147, _templateObject157, _templateObject167, _templateObject177, _templateObject187, _templateObject197, _templateObject207, _templateObject2112, _templateObject2210, _templateObject2310, _templateObject248, _templateObject257;
function _taggedTemplateLiteral25(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function selectBestFamiliar() {
  if ((0, import_kolmafia37.myFamiliar)() === $familiar(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral25(["Stooper"]))) && (0, import_kolmafia37.myInebriety)() === (0, import_kolmafia37.inebrietyLimit)() || (0, import_kolmafia37.myInebriety)() === (0, import_kolmafia37.inebrietyLimit)() + 1)
    return $familiar(_templateObject247 || (_templateObject247 = _taggedTemplateLiteral25(["Stooper"])));
  var availableBanderboots = freeRunsFamiliar();
  return availableBanderboots !== $familiar(_templateObject328 || (_templateObject328 = _taggedTemplateLiteral25(["none"]))) ? availableBanderboots : noncombatFamiliar();
}
function noncombatFamiliar() {
  return have($familiar(_templateObject424 || (_templateObject424 = _taggedTemplateLiteral25(["Left-Hand Man"])))) && (have($item(_templateObject517 || (_templateObject517 = _taggedTemplateLiteral25(["rusted-out shootin' iron"])))) || have($item(_templateObject614 || (_templateObject614 = _taggedTemplateLiteral25(["iFlail"]))))) && have($item(_templateObject711 || (_templateObject711 = _taggedTemplateLiteral25(["unbreakable umbrella"])))) ? $familiar(_templateObject811 || (_templateObject811 = _taggedTemplateLiteral25(["Left-Hand Man"]))) : have($familiar(_templateObject910 || (_templateObject910 = _taggedTemplateLiteral25(["Disembodied Hand"])))) && (have($item(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral25(["fish hatchet"])))) || have($item(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral25(["bass clarinet"])))) || have($item(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral25(["rusted-out shootin' iron"])))) || have($item(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral25(["iFlail"]))))) ? $familiar(_templateObject147 || (_templateObject147 = _taggedTemplateLiteral25(["Disembodied Hand"]))) : have($familiar(_templateObject157 || (_templateObject157 = _taggedTemplateLiteral25(["Disgeist"])))) ? $familiar(_templateObject167 || (_templateObject167 = _taggedTemplateLiteral25(["Disgeist"]))) : $familiar(_templateObject177 || (_templateObject177 = _taggedTemplateLiteral25(["none"])));
}
function freeRunsFamiliar() {
  var pickRunsFamiliar = function() {
    return have($familiar(_templateObject187 || (_templateObject187 = _taggedTemplateLiteral25(["Pair of Stomping Boots"])))) ? $familiar(_templateObject197 || (_templateObject197 = _taggedTemplateLiteral25(["Pair of Stomping Boots"]))) : have($familiar(_templateObject207 || (_templateObject207 = _taggedTemplateLiteral25(["Frumious Bandersnatch"])))) ? $familiar(_templateObject2112 || (_templateObject2112 = _taggedTemplateLiteral25(["Frumious Bandersnatch"]))) : $familiar(_templateObject2210 || (_templateObject2210 = _taggedTemplateLiteral25(["none"])));
  }, chosenFam = pickRunsFamiliar();
  if (chosenFam === $familiar(_templateObject2310 || (_templateObject2310 = _taggedTemplateLiteral25(["none"]))))
    return $familiar(_templateObject248 || (_templateObject248 = _taggedTemplateLiteral25(["none"])));
  var baseWeight = (0, import_kolmafia37.familiarWeight)(chosenFam), bonus_weight = (0, import_kolmafia37.numericModifier)("Familiar Weight"), familiar_total_runs = Math.floor((baseWeight + bonus_weight) / 5), available_runs = Math.max(familiar_total_runs - get("_banderRunaways", 0), 0);
  return available_runs === 0 ? $familiar(_templateObject257 || (_templateObject257 = _taggedTemplateLiteral25(["none"]))) : chosenFam;
}

// src/lib/effects.ts
var _templateObject101, _templateObject249, _templateObject329, _templateObject425, _templateObject518, _templateObject615, _templateObject712, _templateObject812;
var _templateObject1010;
function _taggedTemplateLiteral26(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function filterHave(effects) {
  return effects.filter(function(effect) {
    return have((0, import_kolmafia38.toSkill)(effect));
  });
}
function basicEffects() {
  var buffs = [$effect(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral26(["Leash of Linguini"]))), $effect(_templateObject249 || (_templateObject249 = _taggedTemplateLiteral26(["Empathy"]))), $effect(_templateObject329 || (_templateObject329 = _taggedTemplateLiteral26(["Blood Bond"]))), $effect(_templateObject425 || (_templateObject425 = _taggedTemplateLiteral26(["Springy Fusilli"]))), $effect(_templateObject518 || (_templateObject518 = _taggedTemplateLiteral26(["Cletus's Canticle of Celerity"])))];
  return selectBestFamiliar() === $familiar(_templateObject615 || (_templateObject615 = _taggedTemplateLiteral26(["Frumious Bandersnatch"]))) && buffs.push($effect(_templateObject712 || (_templateObject712 = _taggedTemplateLiteral26(["Ode to Booze"])))), filterHave(buffs);
}
function noncombatEffects() {
  return filterHave($effects(_templateObject812 || (_templateObject812 = _taggedTemplateLiteral26(["The Sonata of Sneakiness, Smooth Movements"]))));
}
function resistanceEffects() {
  return filterHave($effects(_templateObject1010 || (_templateObject1010 = _taggedTemplateLiteral26(["Elemental Saucesphere, Astral Shell"]))));
}

// src/lib/equipment.ts
init_kolmafia_polyfill();
var import_kolmafia39 = require("kolmafia");
var _templateObject110, _templateObject250, _templateObject330, _templateObject426, _templateObject519, _templateObject616, _templateObject713, _templateObject813, _templateObject911, _templateObject1011, _templateObject1110;
function _taggedTemplateLiteral27(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function appendWineglass(equips) {
  if (!have($item(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral27(["Drunkula's wineglass"])))))
    throw "You are overdrunk, but don't have a wineglass!";
  equips.push($item(_templateObject250 || (_templateObject250 = _taggedTemplateLiteral27(["Drunkula's wineglass"]))));
}
function getEquipment(equips) {
  var equipment = equips.filter(function(it) {
    return have(it);
  });
  return (0, import_kolmafia39.myInebriety)() > (0, import_kolmafia39.inebrietyLimit)() && appendWineglass(equipment), equipment;
}
function getDefaultEquipment() {
  var defaultEquipment2 = [$item(_templateObject330 || (_templateObject330 = _taggedTemplateLiteral27(["June cleaver"]))), $item(_templateObject426 || (_templateObject426 = _taggedTemplateLiteral27(["tiny stillsuit"])))];
  freeRunItemAvailable() && shouldUseFreeRunItem() || (defaultEquipment2.push($item(_templateObject519 || (_templateObject519 = _taggedTemplateLiteral27(["mafia thumb ring"])))), have($item(_templateObject616 || (_templateObject616 = _taggedTemplateLiteral27(["Greatest American Pants"])))) ? defaultEquipment2.push($item(_templateObject713 || (_templateObject713 = _taggedTemplateLiteral27(["Greatest American Pants"])))) : have($item(_templateObject813 || (_templateObject813 = _taggedTemplateLiteral27(["navel ring of navel gazing"])))) && defaultEquipment2.push($item(_templateObject911 || (_templateObject911 = _taggedTemplateLiteral27(["navel ring of navel gazing"])))));
  var pants = defaultEquipment2.find(function(item4) {
    return (0, import_kolmafia39.toSlot)(item4) === $slot(_templateObject1011 || (_templateObject1011 = _taggedTemplateLiteral27(["pants"])));
  });
  return (!pants || !have(pants)) && get("_pantsgivingCount") < 500 && defaultEquipment2.push($item(_templateObject1110 || (_templateObject1110 = _taggedTemplateLiteral27(["Pantsgiving"])))), getEquipment(defaultEquipment2);
}

// src/lib/preparenoncom.ts
init_kolmafia_polyfill();
var import_kolmafia40 = require("kolmafia");
var _templateObject111;
function _taggedTemplateLiteral28(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function _createForOfIteratorHelper13(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray18(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray18(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray18(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray18(r, a) : void 0;
  }
}
function _arrayLikeToArray18(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var EFFECTIVE_NC_VALUE = 100, itemInfo2 = [], _iterator2 = _createForOfIteratorHelper13($items(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral28([""])))), _step2;
try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done; )
    item4 = _step2.value, effect = (0, import_kolmafia40.effectModifier)(item4, "Effect"), modifier = -1 * get2("Combat Rate", effect), !(modifier <= 0) && (duration = (0, import_kolmafia40.numericModifier)(item4, "Effect Duration"), duration !== 0 && item4.tradeable && (price2 = (0, import_kolmafia40.mallPrice)(item4), !(price2 / duration > EFFECTIVE_NC_VALUE) && itemInfo2.push({
      item: item4,
      modifier: modifier,
      duration: duration,
      price: price2
    })));
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
var item4, effect, modifier, duration, price2, byValue2 = function(a, b) {
  var valA = value2(a), valB = value2(b);
  return valA < valB ? 1 : valA > valB ? -1 : 0;
};
itemInfo2.sort(byValue2);
function value2(info) {
  return info.duration * info.modifier / info.price;
}
function capNonCombat() {
  for (var itemBought = !1, i = 0; i < itemInfo2.length; i++) {
    var info = itemInfo2[i], item4 = info.item;
    if ((0, import_kolmafia40.combatRateModifier)() <= -35)
      break;
    if (!(0, import_kolmafia40.haveEffect)(import_kolmafia40.Effect.get(get2("Effect", item4)))) {
      var maxPrice = Math.min(EFFECTIVE_NC_VALUE * info.duration * info.modifier / 5, 1e4);
      if (info.price < maxPrice && have(item4)) {
        if (!(0, import_kolmafia40.use)(item4, 1))
          throw "Failed to use item";
        continue;
      }
      var bought = (0, import_kolmafia40.buy)(item4, 1, maxPrice);
      if (bought > 1)
        throw "Bought too many items.";
      if (bought === 0)
        break;
      if (!(0, import_kolmafia40.use)(item4, 1))
        throw "Failed to use item";
      itemBought = !0, info.price = (0, import_kolmafia40.mallPrice)(item4);
    }
  }
  itemBought && itemInfo2.sort(byValue2);
}

// src/quests/sewers/tasks/explore.ts
var _templateObject120, _templateObject251, _templateObject331, _templateObject427, _templateObject520, _templateObject617, _templateObject714;
function _toConsumableArray10(r) {
  return _arrayWithoutHoles10(r) || _iterableToArray10(r) || _unsupportedIterableToArray19(r) || _nonIterableSpread10();
}
function _nonIterableSpread10() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray19(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray19(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray19(r, a) : void 0;
  }
}
function _iterableToArray10(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles10(r) {
  if (Array.isArray(r)) return _arrayLikeToArray19(r);
}
function _arrayLikeToArray19(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _taggedTemplateLiteral29(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var tryFreeRunThenAttack = Macro2.trySkill($skill(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral29(["Bowl a Curveball"])))).trySkill($skill(_templateObject251 || (_templateObject251 = _taggedTemplateLiteral29(["Asdon Martin: Spring-Loaded Front Bumper"])))).externalIf(get(FREE_RUN, !1), Macro2.freeRunItems()).attack().repeat(), ExploreTasks = [{
  name: "Explore sewer",
  completed: function() {
    return !1;
  },
  prepare: function() {
    capNonCombat();
  },
  do: function() {
    return $location(_templateObject331 || (_templateObject331 = _taggedTemplateLiteral29(["A Maze of Sewer Tunnels"])));
  },
  effects: function() {
    return [].concat(_toConsumableArray10(basicEffects()), _toConsumableArray10(noncombatEffects()));
  },
  combat: new CombatStrategy().autoattack(tryFreeRunThenAttack),
  outfit: function() {
    return {
      equip: getEquipment([$item(_templateObject427 || (_templateObject427 = _taggedTemplateLiteral29(["gatorskin umbrella"]))), $item(_templateObject520 || (_templateObject520 = _taggedTemplateLiteral29(["hobo code binder"])))].concat(_toConsumableArray10(get(FREE_RUN, !1) ? [] : [$item(_templateObject617 || (_templateObject617 = _taggedTemplateLiteral29(["mafia thumb ring"])))]))),
      modifier: "-combat",
      bonuses: /* @__PURE__ */ new Map([[$item(_templateObject714 || (_templateObject714 = _taggedTemplateLiteral29(["mafia thumb ring"]))), 200]]),
      familiar: selectBestFamiliar()
    };
  },
  choices: {
    197: 1,
    198: 1,
    199: 1,
    211: 1,
    212: 1
  }
}];

// src/quests/sewers/sewers.ts
function _toConsumableArray11(r) {
  return _arrayWithoutHoles11(r) || _iterableToArray11(r) || _unsupportedIterableToArray20(r) || _nonIterableSpread11();
}
function _nonIterableSpread11() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray20(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray20(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray20(r, a) : void 0;
  }
}
function _iterableToArray11(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles11(r) {
  if (Array.isArray(r)) return _arrayLikeToArray20(r);
}
function _arrayLikeToArray20(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var complete = !1;
function Sewers(nocage) {
  return {
    name: "Sewers",
    completed: function() {
      return complete || (complete = !!(0, import_kolmafia41.visitUrl)("clan_hobopolis.php?place=3&pwd", !1).match(/Richard's Redoubt/)), complete;
    },
    tasks: [DriveStealthily].concat(_toConsumableArray11(nocage ? [] : CageTasks), _toConsumableArray11(AcquireTasks), _toConsumableArray11(ExploreTasks))
  };
}

// src/quests/spookyraven/spookyraven.ts
init_kolmafia_polyfill();
var import_kolmafia44 = require("kolmafia");

// src/quests/spookyraven/tasks/billards.ts
init_kolmafia_polyfill();
var _templateObject121, _templateObject258, _templateObject336, _templateObject428;
function _toConsumableArray12(r) {
  return _arrayWithoutHoles12(r) || _iterableToArray12(r) || _unsupportedIterableToArray21(r) || _nonIterableSpread12();
}
function _nonIterableSpread12() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray21(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray21(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray21(r, a) : void 0;
  }
}
function _iterableToArray12(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles12(r) {
  if (Array.isArray(r)) return _arrayLikeToArray21(r);
}
function _arrayLikeToArray21(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _taggedTemplateLiteral30(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function billiardsTask() {
  return {
    name: "Haunted Billiards Room",
    ready: function() {
      return have($item(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral30(["Spookyraven billiards room key"]))));
    },
    completed: function() {
      return have($item(_templateObject258 || (_templateObject258 = _taggedTemplateLiteral30(["[7302]Spookyraven library key"]))));
    },
    effects: function() {
      return [].concat(_toConsumableArray12(noncombatEffects()), _toConsumableArray12($effects(_templateObject336 || (_templateObject336 = _taggedTemplateLiteral30(["Chalky Hand, Influence of Sphere"])))));
    },
    outfit: function() {
      return {
        equip: getDefaultEquipment(),
        modifier: "-combat",
        familiar: selectBestFamiliar()
      };
    },
    choices: {
      900: 2,
      // Lights Out
      875: 1,
      // Hustle the ghost
      1436: 2
      // Maps: go straight to hustle
    },
    combat: new CombatStrategy().autoattack(Macro2.runaway().repeat()),
    do: $location(_templateObject428 || (_templateObject428 = _taggedTemplateLiteral30(["The Haunted Billiards Room"])))
  };
}

// src/quests/spookyraven/tasks/epilogue.ts
init_kolmafia_polyfill();
var import_kolmafia42 = require("kolmafia");
var _templateObject130;
function _taggedTemplateLiteral31(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function epilogueTask() {
  return {
    name: "Give Lady Spookyraven Her Necklace",
    ready: function() {
      return have($item(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral31(["Lady Spookyraven's necklace"]))));
    },
    completed: function() {
      return get("questM20Necklace") === "finished";
    },
    effects: basicEffects,
    do: function() {
      (0, import_kolmafia42.visitUrl)("place.php?whichplace=manor1&action=manor1_ladys");
    },
    limit: {
      guard: Guards.changed("questM20Necklace")
    }
  };
}

// src/quests/spookyraven/tasks/library.ts
init_kolmafia_polyfill();
var import_kolmafia43 = require("kolmafia");

// src/quests/wander/shared/combat.ts
init_kolmafia_polyfill();
var _templateObject131, _templateObject259, _templateObject337, _templateObject429, _templateObject521, _templateObject618, _templateObject715, _templateObject814, _templateObject912, _templateObject1012, _templateObject1111;
function _toConsumableArray13(r) {
  return _arrayWithoutHoles13(r) || _iterableToArray13(r) || _unsupportedIterableToArray22(r) || _nonIterableSpread13();
}
function _nonIterableSpread13() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray22(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray22(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray22(r, a) : void 0;
  }
}
function _iterableToArray13(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles13(r) {
  if (Array.isArray(r)) return _arrayLikeToArray22(r);
}
function _arrayLikeToArray22(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _taggedTemplateLiteral32(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function killMacro() {
  return Macro.trySkill($skill(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral32(["Micrometeorite"])))).trySkill($skill(_templateObject259 || (_templateObject259 = _taggedTemplateLiteral32(["Curse of Weaksauce"])))).attack().repeat();
}
function kill() {
  return new CombatStrategy().autoattack(Macro.trySkill.apply(Macro, _toConsumableArray13($skills(_templateObject337 || (_templateObject337 = _taggedTemplateLiteral32(["Micrometeorite, Curse of Weaksauce"]))))).attack().repeat());
}
function defaultEquipment() {
  var sweatNeeded = Math.max(0, 75 - get("_sweatOutSomeBoozeUsed") - get("sweat"));
  return {
    weapon: $item(_templateObject429 || (_templateObject429 = _taggedTemplateLiteral32(["June cleaver"]))),
    "off-hand": $item(_templateObject521 || (_templateObject521 = _taggedTemplateLiteral32(["cursed magnifying glass"]))),
    pants: sweatNeeded > 0 && have($item(_templateObject618 || (_templateObject618 = _taggedTemplateLiteral32(["designer sweatpants"])))) ? $item(_templateObject715 || (_templateObject715 = _taggedTemplateLiteral32(["designer sweatpants"]))) : $item(_templateObject814 || (_templateObject814 = _taggedTemplateLiteral32(["Pantsgiving"]))),
    acc1: $item(_templateObject912 || (_templateObject912 = _taggedTemplateLiteral32(["lucky gold ring"]))),
    acc2: $item(_templateObject1012 || (_templateObject1012 = _taggedTemplateLiteral32(["Mr. Cheeng's spectacles"]))),
    acc3: $item(_templateObject1111 || (_templateObject1111 = _taggedTemplateLiteral32(["Mr. Screege's spectacles"])))
  };
}

// src/quests/spookyraven/tasks/library.ts
var _templateObject139, _templateObject260, _templateObject338, _templateObject430, _templateObject524, _templateObject619, _templateObject716, _templateObject815, _templateObject913, _templateObject1013, _templateObject1112, _templateObject1210, _templateObject1310, _templateObject148, _templateObject158, _templateObject168, _templateObject178, _templateObject188;
function ownKeys9(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread9(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys9(Object(t), !0).forEach(function(r2) {
      _defineProperty13(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys9(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty13(e, r, t) {
  return (r = _toPropertyKey17(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey17(t) {
  var i = _toPrimitive17(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive17(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _taggedTemplateLiteral33(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function libraryTask() {
  return {
    name: "Spit Acid in Library",
    ready: function() {
      return have($item(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral33(["Jurassic Parka"])))) && have($item(_templateObject260 || (_templateObject260 = _taggedTemplateLiteral33(["[7302]Spookyraven library key"])))) && questStep("questM20Necklace") < 4 && get("writingDesksDefeated") < 5;
    },
    completed: function() {
      return have($effect(_templateObject338 || (_templateObject338 = _taggedTemplateLiteral33(["Everything Looks Yellow"]))));
    },
    effects: basicEffects,
    outfit: function() {
      return {
        equip: getEquipment(Object.values(_objectSpread9(_objectSpread9({}, defaultEquipment()), {}, {
          shirt: $item(_templateObject430 || (_templateObject430 = _taggedTemplateLiteral33(["Jurassic Parka"]))),
          "off-hand": $item(_templateObject524 || (_templateObject524 = _taggedTemplateLiteral33(["latte lovers member's mug"]))),
          pants: $item(_templateObject619 || (_templateObject619 = _taggedTemplateLiteral33(["Greatest American Pants"])))
        }))),
        familiar: $familiar(_templateObject716 || (_templateObject716 = _taggedTemplateLiteral33(["none"])))
      };
    },
    choices: {
      894: 1,
      // Lights Out
      888: 4,
      // Take a Look (Rise)
      889: 5,
      // Take a Look (Fall)
      163: 4
      // Melvil Dewey
    },
    prepare: function() {
      return (0, import_kolmafia43.cliExecute)("parka acid");
    },
    combat: new CombatStrategy().autoattack(function() {
      return Macro2.if_("monstername writing desk", Macro2.externalIf(have($skill(_templateObject815 || (_templateObject815 = _taggedTemplateLiteral33(["Transcendent Olfaction"])))) && get("olfactedMonster") !== $monster(_templateObject913 || (_templateObject913 = _taggedTemplateLiteral33(["writing desk"]))) && get("_olfactionsUsed") < 3, Macro2.skill($skill(_templateObject1013 || (_templateObject1013 = _taggedTemplateLiteral33(["Transcendent Olfaction"]))))).externalIf(have($skill(_templateObject1112 || (_templateObject1112 = _taggedTemplateLiteral33(["Gallapagosian Mating Call"])))) && get("_gallapagosMonster") !== $monster(_templateObject1210 || (_templateObject1210 = _taggedTemplateLiteral33(["writing desk"]))), Macro2.skill($skill(_templateObject1310 || (_templateObject1310 = _taggedTemplateLiteral33(["Gallapagosian Mating Call"]))))).skill($skill(_templateObject148 || (_templateObject148 = _taggedTemplateLiteral33(["Spit jurassic acid"]))))).trySkill($skill(_templateObject158 || (_templateObject158 = _taggedTemplateLiteral33(["Throw Latte on Opponent"])))).runaway().repeat();
    }),
    do: function() {
      Cartography_exports.have() && get("_monstersMapped") < 3 ? Cartography_exports.mapMonster($location(_templateObject168 || (_templateObject168 = _taggedTemplateLiteral33(["The Haunted Library"]))), $monster(_templateObject178 || (_templateObject178 = _taggedTemplateLiteral33(["writing desk"])))) : (0, import_kolmafia43.adv1)($location(_templateObject188 || (_templateObject188 = _taggedTemplateLiteral33(["The Haunted Library"]))), -1, ""), (0, import_kolmafia43.visitUrl)("main.php?latte=1");
    },
    limit: {
      soft: 15
    }
  };
}

// src/quests/spookyraven/spookyraven.ts
var Spookyraven = {
  name: "Spookyraven",
  completed: function() {
    return (0, import_kolmafia44.myInebriety)() > (0, import_kolmafia44.inebrietyLimit)();
  },
  tasks: [billiardsTask(), libraryTask(), epilogueTask()]
};

// src/quests/townsquare/townsquare.ts
init_kolmafia_polyfill();
var import_kolmafia48 = require("kolmafia");

// src/quests/townsquare/tasks/explore.ts
init_kolmafia_polyfill();
var import_kolmafia45 = require("kolmafia");
var _templateObject140, _templateObject261, _templateObject339, _templateObject431, _templateObject525, _templateObject620, _templateObject717, _templateObject816, _templateObject914, _templateObject1014, _templateObject1113, _templateObject1211;
function ownKeys10(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread10(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys10(Object(t), !0).forEach(function(r2) {
      _defineProperty14(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys10(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck16(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties16(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey18(o.key), o);
  }
}
function _createClass16(e, r, t) {
  return r && _defineProperties16(e.prototype, r), t && _defineProperties16(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _defineProperty14(e, r, t) {
  return (r = _toPropertyKey18(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey18(t) {
  var i = _toPrimitive18(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive18(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _taggedTemplateLiteral34(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var elementMap = {
  hot: $effects(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral34(["Spirit of Cayenne"]))),
  cold: $effects(_templateObject261 || (_templateObject261 = _taggedTemplateLiteral34(["Spirit of Peppermint"]))),
  stench: $effects(_templateObject339 || (_templateObject339 = _taggedTemplateLiteral34(["Spirit of Garlic"]))),
  spooky: $effects(_templateObject431 || (_templateObject431 = _taggedTemplateLiteral34(["Spirit of Wormwood"]))),
  sleaze: $effects(_templateObject525 || (_templateObject525 = _taggedTemplateLiteral34(["Spirit of Bacon Grease"]))),
  normal: []
}, Explore2 = /* @__PURE__ */ function() {
  function Explore3(parts) {
    var _this = this;
    _classCallCheck16(this, Explore3), _defineProperty14(this, "parts", void 0), _defineProperty14(this, "targetElement", "normal"), _defineProperty14(this, "nextFightPrepped", !1), _defineProperty14(this, "baseTask", {
      do: function() {
        return _this.nextFightPrepped = !1, $location(_templateObject620 || (_templateObject620 = _taggedTemplateLiteral34(["Hobopolis Town Square"])));
      },
      post: function() {
        return _this.parts[_this.targetElement]++;
      },
      choices: {
        200: 0,
        225: 3,
        230: 2,
        272: 2
      }
    }), this.parts = parts;
  }
  return _createClass16(Explore3, [{
    key: "getTasks",
    value: function() {
      var _this = this;
      return [{
        name: "Prep hobo fight",
        completed: function() {
          return _this.nextFightPrepped;
        },
        do: function() {
          _this.targetElement = Object.keys(_this.parts).find(function(elem) {
            return _this.parts[elem] < 1;
          });
          var targetMp = (0, import_kolmafia45.mpCost)($skill(_templateObject717 || (_templateObject717 = _taggedTemplateLiteral34(["Curse of Weaksauce"])))) + (0, import_kolmafia45.mpCost)($skill(_templateObject816 || (_templateObject816 = _taggedTemplateLiteral34(["Stuffed Mortar Shell"]))));
          (0, import_kolmafia45.myMp)() < targetMp && (0, import_kolmafia45.restoreMp)(targetMp), _this.nextFightPrepped = !0;
        }
      }, _objectSpread10(_objectSpread10({}, this.baseTask), {}, {
        name: "Hobo combat physical",
        completed: function() {
          return _this.targetElement !== "normal";
        },
        combat: new CombatStrategy().autoattack(Macro2.attackKill()),
        effects: [$effect(_templateObject914 || (_templateObject914 = _taggedTemplateLiteral34(["Carol of the Bulls"])))],
        outfit: {
          equip: [$item(_templateObject1014 || (_templateObject1014 = _taggedTemplateLiteral34(["Fourth of May Cosplay Saber"]))), $item(_templateObject1113 || (_templateObject1113 = _taggedTemplateLiteral34(["mafia thumb ring"])))]
        }
      }), _objectSpread10(_objectSpread10({}, this.baseTask), {}, {
        name: "Hobo combat elemental",
        completed: function() {
          return _this.targetElement === "normal";
        },
        effects: function() {
          return elementMap[_this.targetElement];
        },
        combat: new CombatStrategy().autoattack(Macro2.mortarShell()),
        outfit: {
          equip: [$item(_templateObject1211 || (_templateObject1211 = _taggedTemplateLiteral34(["mafia thumb ring"])))]
        }
      })];
    }
  }]);
}();

// src/quests/townsquare/tasks/scobo.ts
init_kolmafia_polyfill();
var import_kolmafia46 = require("kolmafia");
function _slicedToArray11(r, e) {
  return _arrayWithHoles11(r) || _iterableToArrayLimit11(r, e) || _unsupportedIterableToArray23(r, e) || _nonIterableRest11();
}
function _nonIterableRest11() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray23(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray23(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray23(r, a) : void 0;
  }
}
function _arrayLikeToArray23(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit11(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles11(r) {
  if (Array.isArray(r)) return r;
}
function _classCallCheck17(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties17(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey19(o.key), o);
  }
}
function _createClass17(e, r, t) {
  return r && _defineProperties17(e.prototype, r), t && _defineProperties17(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _defineProperty15(e, r, t) {
  return (r = _toPropertyKey19(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey19(t) {
  var i = _toPrimitive19(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive19(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
var talkToRichard = !0, Scobo = /* @__PURE__ */ function() {
  function Scobo2(parts) {
    _classCallCheck17(this, Scobo2), _defineProperty15(this, "parts", void 0), this.parts = parts;
  }
  return _createClass17(Scobo2, [{
    key: "processScoboParts",
    value: function(parts, html) {
      var extractMatch = function(re) {
        var matches = html.match(re);
        return matches ? parseInt(matches[1]) : 0;
      }, matchRegistry = {
        hot: /Richard has[^\d]+(\d+)[<b>\\/\s]+pairs? of charred/,
        cold: /Richard has[^\d]+(\d+)[<b>\\/\s]+pairs? of frozen/,
        stench: /Richard has[^\d]+(\d+)[<b>\\/\s]+pile/,
        spooky: /Richard has[^\d]+(\d+)[<b>\\/\s]+creepy/,
        sleaze: /Richard has[^\d]+(\d+)[<b>\\/\s]+hobo crotch/,
        normal: /Richard has[^\d]+(\d+)[<b>\\/\s]+hobo skin/
      };
      Object.entries(matchRegistry).map(function(_ref) {
        var _ref2 = _slicedToArray11(_ref, 2), key = _ref2[0], value3 = _ref2[1];
        return parts[key] = extractMatch(value3);
      });
    }
  }, {
    key: "getTasks",
    value: function() {
      var _this = this;
      return [{
        name: "Scobos",
        completed: function() {
          return Object.values(_this.parts).some(function(count) {
            return count < 1;
          });
        },
        do: function() {
          var html = (0, import_kolmafia46.visitUrl)("clan_hobopolis.php?preaction=simulacrum&place=3&qty=1");
          _this.processScoboParts(_this.parts, html);
        }
      }, {
        name: "Talk to Richard",
        completed: function() {
          return !talkToRichard;
        },
        do: function() {
          var html = (0, import_kolmafia46.visitUrl)("clan_hobopolis.php?place=3&action=talkrichard&whichtalk=3&pwd", !1);
          _this.processScoboParts(_this.parts, html), talkToRichard = !1;
        }
      }];
    }
  }]);
}();

// src/quests/townsquare/tasks/snapper.ts
init_kolmafia_polyfill();
var import_kolmafia47 = require("kolmafia");
var _templateObject141, _templateObject267, _templateObject340;
function _taggedTemplateLiteral35(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var snapper2 = $familiar(_templateObject141 || (_templateObject141 = _taggedTemplateLiteral35(["Red-Nosed Snapper"]))), Snapper2 = {
  name: "Setup",
  completed: function() {
    return !have(snapper2) || (0, import_kolmafia47.myFamiliar)() === $familiar(_templateObject267 || (_templateObject267 = _taggedTemplateLiteral35(["Red-Nosed Snapper"])));
  },
  do: function() {
    Snapper_exports.trackPhylum($phylum(_templateObject340 || (_templateObject340 = _taggedTemplateLiteral35(["Hobo"])))), (0, import_kolmafia47.useFamiliar)(snapper2);
  }
};

// src/quests/townsquare/townsquare.ts
function _toConsumableArray14(r) {
  return _arrayWithoutHoles14(r) || _iterableToArray14(r) || _unsupportedIterableToArray24(r) || _nonIterableSpread14();
}
function _nonIterableSpread14() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray24(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray24(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray24(r, a) : void 0;
  }
}
function _iterableToArray14(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles14(r) {
  if (Array.isArray(r)) return _arrayLikeToArray24(r);
}
function _arrayLikeToArray24(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var scoboParts = {
  hot: 0,
  cold: 0,
  stench: 0,
  spooky: 0,
  sleaze: 0,
  normal: 0
}, scobo = new Scobo(scoboParts), explore2 = new Explore2(scoboParts), skipTownSquare = !1, TownSquare = {
  name: "Town Square",
  completed: function() {
    return skipTownSquare || (skipTownSquare = !!(0, import_kolmafia48.visitUrl)("clan_hobopolis.php?place=8&pwd", !1).match(/The Purple Light District/), skipTownSquare && (0, import_kolmafia48.print)("Town Square is sufficiently finished to open the PLD.", "purple")), skipTownSquare;
  },
  tasks: [DriveStealthily, Snapper2].concat(_toConsumableArray14(scobo.getTasks()), _toConsumableArray14(explore2.getTasks()))
};

// src/quests/wander/wander.ts
init_kolmafia_polyfill();
var import_kolmafia53 = require("kolmafia");

// src/quests/wander/tasks/digitized.ts
init_kolmafia_polyfill();
var import_kolmafia50 = require("kolmafia");

// src/quests/wander/shared/effects.ts
init_kolmafia_polyfill();

// src/quests/wander/shared/location.ts
init_kolmafia_polyfill();
var import_kolmafia49 = require("kolmafia");
var _templateObject149, _templateObject268, _templateObject341, _templateObject434;
function _taggedTemplateLiteral36(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function getLocation2() {
  return !have($item(_templateObject149 || (_templateObject149 = _taggedTemplateLiteral36(["Spookyraven billiards room key"])))) && (0, import_kolmafia49.canAdventure)($location(_templateObject268 || (_templateObject268 = _taggedTemplateLiteral36(["The Haunted Kitchen"])))) ? $location(_templateObject341 || (_templateObject341 = _taggedTemplateLiteral36(["The Haunted Kitchen"]))) : $location(_templateObject434 || (_templateObject434 = _taggedTemplateLiteral36(["Noob Cave"])));
}

// src/quests/wander/shared/effects.ts
var _templateObject150;
function _taggedTemplateLiteral37(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function _toConsumableArray15(r) {
  return _arrayWithoutHoles15(r) || _iterableToArray15(r) || _unsupportedIterableToArray25(r) || _nonIterableSpread15();
}
function _nonIterableSpread15() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray25(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray25(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray25(r, a) : void 0;
  }
}
function _iterableToArray15(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles15(r) {
  if (Array.isArray(r)) return _arrayLikeToArray25(r);
}
function _arrayLikeToArray25(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function getEffects() {
  return [].concat(_toConsumableArray15(basicEffects()), _toConsumableArray15(getLocation2() === $location(_templateObject150 || (_templateObject150 = _taggedTemplateLiteral37(["The Haunted Kitchen"]))) ? resistanceEffects() : []));
}

// src/quests/wander/tasks/digitized.ts
var _templateObject151, _templateObject269, _templateObject346, _templateObject435, _templateObject526;
function _toConsumableArray16(r) {
  return _arrayWithoutHoles16(r) || _iterableToArray16(r) || _unsupportedIterableToArray26(r) || _nonIterableSpread16();
}
function _nonIterableSpread16() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray26(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray26(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray26(r, a) : void 0;
  }
}
function _iterableToArray16(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles16(r) {
  if (Array.isArray(r)) return _arrayLikeToArray26(r);
}
function _arrayLikeToArray26(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _taggedTemplateLiteral38(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function shouldRedigitize() {
  var digitizesLeft = SourceTerminal_exports.getDigitizeUsesRemaining(), monsterCount = SourceTerminal_exports.getDigitizeMonsterCount() + 1, digitizeAdventuresUsed = monsterCount * (monsterCount + 1) * 5 - 3;
  return SourceTerminal_exports.have() && SourceTerminal_exports.canDigitize() && (0, import_kolmafia50.myAdventures)() / 0.96 < digitizesLeft * digitizeAdventuresUsed;
}
function meatBuffEffects() {
  var monster = SourceTerminal_exports.getDigitizeMonster(), result = getEffects();
  return monster === $monster(_templateObject151 || (_templateObject151 = _taggedTemplateLiteral38(["Knob Goblin Embezzler"]))) && result.push.apply(result, _toConsumableArray16($effects(_templateObject269 || (_templateObject269 = _taggedTemplateLiteral38(["Polka of Plenty, Disco Leer"]))))), result;
}
function DigitizedTask() {
  return {
    name: "Digitze",
    ready: function() {
      return SourceTerminal_exports.have() && SourceTerminal_exports.getDigitizeMonster() !== null;
    },
    completed: function() {
      return counter_exports.get("Digitize Monster") > 0;
    },
    effects: meatBuffEffects,
    outfit: function() {
      return SourceTerminal_exports.getDigitizeMonster() === $monster(_templateObject346 || (_templateObject346 = _taggedTemplateLiteral38(["Knob Goblin Embezzler"]))) ? {
        objective: "Meat Drop"
      } : {
        equip: getEquipment(Object.values(defaultEquipment()))
      };
    },
    combat: new CombatStrategy().autoattack(function() {
      return Macro.externalIf(shouldRedigitize(), Macro.skill($skill(_templateObject435 || (_templateObject435 = _taggedTemplateLiteral38(["Digitize"]))))).step(killMacro());
    }),
    prepare: function() {
      shouldRedigitize() && SourceTerminal_exports.educate($skill(_templateObject526 || (_templateObject526 = _taggedTemplateLiteral38(["Digitize"]))));
    },
    do: getLocation2
  };
}

// src/quests/wander/tasks/magnifyingglass.ts
init_kolmafia_polyfill();
var _templateObject159, _templateObject270;
function ownKeys11(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread11(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys11(Object(t), !0).forEach(function(r2) {
      _defineProperty16(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys11(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty16(e, r, t) {
  return (r = _toPropertyKey20(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey20(t) {
  var i = _toPrimitive20(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive20(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _taggedTemplateLiteral39(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function MagnifyingGlass() {
  return {
    name: "Magnifying Glass",
    ready: function() {
      return have($item(_templateObject159 || (_templateObject159 = _taggedTemplateLiteral39(["cursed magnifying glass"])))) && get("cursedMagnifyingGlassCount") === 13;
    },
    completed: function() {
      return get("_voidFreeFights") >= 5;
    },
    effects: getEffects,
    outfit: function() {
      return {
        equip: getEquipment(Object.values(_objectSpread11(_objectSpread11({}, defaultEquipment()), {}, {
          "off-hand": $item(_templateObject270 || (_templateObject270 = _taggedTemplateLiteral39(["cursed magnifying glass"])))
        }))),
        modifier: "-combat"
      };
    },
    combat: kill(),
    do: getLocation2
  };
}

// src/quests/wander/tasks/sausage.ts
init_kolmafia_polyfill();
var import_kolmafia51 = require("kolmafia");
var _templateObject160, _templateObject271;
function ownKeys12(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread12(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys12(Object(t), !0).forEach(function(r2) {
      _defineProperty17(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys12(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty17(e, r, t) {
  return (r = _toPropertyKey21(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey21(t) {
  var i = _toPrimitive21(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive21(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _taggedTemplateLiteral40(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function SausageTask() {
  return {
    name: "Sausage Goblin",
    ready: function() {
      return have($item(_templateObject160 || (_templateObject160 = _taggedTemplateLiteral40(["Kramco Sausage-o-Matic\u2122"])))) && (0, import_kolmafia51.myInebriety)() <= (0, import_kolmafia51.inebrietyLimit)();
    },
    completed: function() {
      return getKramcoWandererChance() < 1;
    },
    effects: getEffects,
    outfit: function() {
      return {
        equip: getEquipment(Object.values(_objectSpread12(_objectSpread12({}, defaultEquipment()), {}, {
          "off-hand": $item(_templateObject271 || (_templateObject271 = _taggedTemplateLiteral40(["Kramco Sausage-o-Matic\u2122"])))
        }))),
        modifier: "-combat"
      };
    },
    combat: kill(),
    do: getLocation2
  };
}

// src/quests/wander/tasks/voter.ts
init_kolmafia_polyfill();
var import_kolmafia52 = require("kolmafia");
var _templateObject161, _templateObject277;
function ownKeys13(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread13(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys13(Object(t), !0).forEach(function(r2) {
      _defineProperty18(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys13(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty18(e, r, t) {
  return (r = _toPropertyKey22(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey22(t) {
  var i = _toPrimitive22(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive22(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _taggedTemplateLiteral41(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function VoterTask() {
  return {
    name: "Voter",
    ready: function() {
      return have($item(_templateObject161 || (_templateObject161 = _taggedTemplateLiteral41(['"I Voted!" sticker']))));
    },
    completed: function() {
      return get("_voteFreeFights") >= 3 || (0, import_kolmafia52.totalTurnsPlayed)() % 11 !== 1 || get("lastVoteMonsterTurn") >= (0, import_kolmafia52.totalTurnsPlayed)();
    },
    effects: getEffects(),
    outfit: function() {
      return {
        equip: getEquipment(Object.values(_objectSpread13(_objectSpread13({}, defaultEquipment()), {}, {
          acc3: $item(_templateObject277 || (_templateObject277 = _taggedTemplateLiteral41(['"I Voted!" sticker'])))
        }))),
        modifier: "-combat"
      };
    },
    combat: kill(),
    do: getLocation2
  };
}

// src/quests/wander/wander.ts
var Wander = {
  name: "Wander",
  completed: function() {
    return (0, import_kolmafia53.myInebriety)() > (0, import_kolmafia53.inebrietyLimit)();
  },
  tasks: [VoterTask(), DigitizedTask(), SausageTask(), MagnifyingGlass()]
};

// src/index.ts
var args = Args.create("Cognac", "Farming perscription strength alcohol since 2023.", {
  config: Args.flag({
    help: "Show script configuration, and exit.",
    default: !1
  }),
  stats: Args.flag({
    help: "Show lifetime achievement awards in the field of cognac.",
    default: !1
  }),
  nocage: Args.flag({
    help: "Do not fetch cagebait.",
    default: !1
  })
});
function main(command) {
  if (Args.fill(args, command), args.help) {
    Args.showHelp(args);
    return;
  }
  if (args.config) {
    showPreferences();
    return;
  }
  if (args.stats) {
    printLifetime();
    return;
  }
  checkClan(), maybeResetDailyPreferences();
  var cognacTasks = getTasks([
    Prologue,
    Wander,
    Spookyraven,
    Sewers(args.nocage),
    TownSquare,
    PLD
    // Cognac,
  ]), engine = new Engine2(cognacTasks), startingClan = (0, import_kolmafia54.getClanId)(), meatToCloset = (0, import_kolmafia54.myMeat)() > 1e6 ? (0, import_kolmafia54.myMeat)() - 1e6 : 0;
  try {
    var clan = get(CLAN);
    meatToCloset > 0 && (0, import_kolmafia54.cliExecute)("closet put ".concat(meatToCloset, " meat")), startingClan.toString(10) !== clan && Clan.join(clan), engine.run();
  } finally {
    engine.destruct(), _set(HEAP_ATTEMPTS, 0), _set(LAST_STENCH_CHECK, 0), Clan.join(startingClan), meatToCloset > 0 && (0, import_kolmafia54.cliExecute)("closet take ".concat(meatToCloset, " meat")), save(), printSession();
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main
});
