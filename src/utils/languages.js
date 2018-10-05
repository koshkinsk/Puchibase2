import {objectMap, resolveObj} from "./utils";
const langConf = require("../../translations/languages.json");


const languages = objectMap(langConf, (lang, val) => {
  let dict;
  try {
    dict = require(`../../translations/ui/${lang}.json`);
  } catch (e) {
    dict = {};
  }
  return {
    dict: dict,
    meta: val
  }
});


export function t(key, empty=false) {
  let language = localStorage.language || "en-US";
  const ret = resolveObj(languages[language].dict, key) || resolveObj(languages["en-US"].dict, key);
  if (ret) {
    return ret;
  } else if (empty) {
    return "";
  } else {
    console.error("Missing Translations: " + key.join("."));
    return key[key.length - 1].toUpperCase();
  }
}
