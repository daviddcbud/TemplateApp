

angular.module(myAppName).config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.otherwise( {
        templateUrl: '/app/home/index.html',
        controller: 'HomeCtrl',
    });

    function Route(path, url, controller) {
        this.path = path;
        this.url = url;
        this.controller = controller;
    }
    function createRoutes() {
        var routes = [];
        var route = new Route('/', '/app/home/index.html', 'HomeCtrl');
        routes.push(route);
        route = new Route('/Contact', '/app/home/contact.html', '');
        routes.push(route);
        
        
        return routes;
    }


    var routes = createRoutes();
    for (var index in routes) {
        var route = routes[index];
        $routeProvider.when(route.path, {
            templateUrl: route.url,
            controller: route.controller,
        });
    }


})
