module.exports = {

    port: 8008, // not work yet

    // see https://github.com/chimurai/http-proxy-middleware
    // localhost:8000/mockdata/user/search  =>  https://www.easy-mock.com/mock/5aef20aefa30186ca1e99750/user/search
    proxy:[
        {
            path: '/mockdata',
            options: {
                target:'https://www.easy-mock.com',
                pathRewrite:{
                    '^/mockdata' : '/mock/5aef20aefa30186ca1e99750'
                },
                changeOrigin: true,
            }
        },
        {
            path: '/mysearch',
            options: {
                target:'https://www.google.com',
                pathRewrite:{
                    '^/mysearch' : ''
                },
                changeOrigin: false,
            }
        }
    ]
};