module.exports = {
    routes: [
        {
            url: '/home',
            methods: [
                {
                    type: 'GET',
                    controller: {
                        view: './pages/home.html',
                        data: { }
                    }
                }
            ]
        },
        {
            url: '/login',
            methods: [
                {
                    type: 'GET',
                    controller: {
                        view: './pages/login.html',
                        data: { }
                    }
                },
                {
                    type: 'POST',
                    controller: './server/controllers/login-user.js'
                }
            ]
        },
        {
            url: '/register',
            methods: [
                {
                    type: 'GET',
                    controller: {
                        view: './pages/register.html',
                        data: { }
                    }
                },
                {
                    type: 'PUT',
                    controller: './server/controllers/register-user.js'
                }
            ]
        },
        {
            url: '/dashboard',
            methods: [
                {
                    type: 'GET',
                    controller: './server/controllers/get-dashboard.js'
                }
            ]
        },
        {
            url: '/profile',
            methods: [
                {
                    type: 'GET',
                    controller: {
                        view: './pages/profile.html',
                        data: { }
                    }
                },
                {
                    type: 'PUT',
                    controller: './server/controllers/update-user.js'
                }
            ]
        },
        {
            url: '/tasks',
            methods: [
                {
                    type: 'GET',
                    controller: {
                        view: './pages/tasks.html',
                        data: { }
                    }
                },
                {
                    type: 'PUT',
                    controller: './server/controllers/add-task.js'
                },
                {
                    type: 'POST',
                    controller: './server/controller/update-task.js'
                },
                {
                    type: 'DELETE',
                    controller: './server/controller/delete-task.js'
                }
            ]
        },
        {
            url: '/settings',
            methods: [
                {
                    type: 'GET',
                    controller: {
                        view: './pages/settings.html',
                        data: { }
                    }
                },
                {
                    type: 'POST',
                    controller: './server/controller/update-setting.js'
                }
            ]
        },
        {
            url: '/admin',
            methods: [
                {
                    type: 'GET',
                    controller: {
                        view: './pages/admin.html',
                        data: { }
                    }
                },
                {
                    type: 'POST',
                    controller: './server/controller/admin-update.js'
                },
                {
                    type: 'DELETE',
                    controller: './server/controller/admin-delete.js'
                }
            ]
        },
        
    ]
}