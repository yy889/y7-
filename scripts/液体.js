function newLiquid(name) {
	exports[name] = (() => {
		let myLiquid = extend(Liquid, name, {});
		return myLiquid;
	})();
}
newLiquid("液氢")