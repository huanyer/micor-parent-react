(function(global) {
  const systemJSPrototype = global.System.constructor.prototype;
  const originalImport = systemJSPrototype.import;

  systemJSPrototype.import = function() {
    return originalImport.apply(this, arguments).then(function(ns) {
      return ns.__useDefault ? ns.default : ns;
    });
  };
})(typeof window.self !== "undefined" ? window.self : global);
