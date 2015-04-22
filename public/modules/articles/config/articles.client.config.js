'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Budgets', 'articles', 'dropdown', '/articles(/create)?');
		Menus.addSubMenuItem('topbar', 'articles', 'List Budgets', 'articles');
		Menus.addSubMenuItem('topbar', 'articles', 'New Budget', 'articles/create');
	}
]);