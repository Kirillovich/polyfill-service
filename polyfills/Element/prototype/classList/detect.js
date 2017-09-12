'document' in this && "classList" in document.documentElement && (function () {
	var supported = false;
	try {
		var testElement = document.createElement("_");

		testElement.classList.add("c1", "c2");
		supported = testElement.classList.contains("c2");
	} catch (e) {

	}
	return supported;
}())
