/**
 * Created by mysticprg on 15. 1. 18.
 */

define(['app', 'Service/serverURL'], function (app) {
	app.factory('User', function ($resource, serverURL) {

		return $resource(
			serverURL + 'user/:id',
			{},
			{
				join: {
					method: 'POST'
				},
				unjoin: {
					method: 'DELETE'
				},
				modify: {
					method: 'PUT'
				},
				query: {
					method: 'GET',
					isArray: true
				},
				get: {
					method: 'GET'
				}
			}
		);

	});
});