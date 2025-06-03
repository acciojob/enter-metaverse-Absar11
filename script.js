//your JS code here. If required.
document.getElementById("enterBtn").addEventListener("click", () => {
	const h1 = document.createElement("h1");
	h1.textContent = "Entered Metaverse";
	document.getElementById("status").replaceWith(h1);
})
