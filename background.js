browser.contextMenus.create({
	id: "look-up-menu-id",
	title: "Look Up",
	contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
	switch (info.menuItemId) {
		case "look-up-menu-id":
			var creating = browser.tabs.create({
				url: "https://en.oxforddictionaries.com/definition/%s".replace("%s", info.selectionText)
			});
			break;
	}
})