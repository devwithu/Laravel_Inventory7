let login = require('./components/auth/login.vue').default;
let register = require('./components/auth/register.vue').default;
let forget = require('./components/auth/forget.vue').default;
let logout = require('./components/auth/logout.vue').default;

let home = require('./components/home.vue').default;

// Empoyee Component
let storeemployee = require('./components/employee/create.vue').default;
let employee = require('./components/employee/index.vue').default;
let editemployee = require('./components/employee/edit.vue').default;

// Supplier Component
let storesupplier = require('./components/supplier/create.vue').default;
let supplier = require('./components/supplier/index.vue').default;
let editsupplier = require('./components/supplier/edit.vue').default;

// Category Component
let storecategory = require('./components/category/create.vue').default;
let category = require('./components/category/index.vue').default;
let editcategory = require('./components/category/edit.vue').default;

// Product Component
let storeproduct = require('./components/product/create.vue').default;
let product = require('./components/product/index.vue').default;
let editproduct = require('./components/product/edit.vue').default;

export const routes = [
    { path: '/', component: login, name:'/'},
    { path: '/register', component: register, name:'register'},
    { path: '/forget', component: forget, name:'forget'},
    { path: '/logout', component: logout, name:'logout'},
    { path: '/home', component: home, name:'home'},

    // Employee Routes
    { path: '/store-employee', component: storeemployee, name:'store-employee'},
    { path: '/employee', component: employee, name:'employee'},
    { path: '/edit-employee/:id', component: editemployee, name:'edit-employee'},

    // Supplier Routes
    { path: '/store-supplier', component: storesupplier, name:'store-supplier'},
    { path: '/supplier', component: supplier, name:'supplier'},
    { path: '/edit-supplier/:id', component: editsupplier, name:'edit-supplier'},

    // Category Routes
    { path: '/store-category', component: storecategory, name:'store-category'},
    { path: '/category', component: category, name:'category'},
    { path: '/edit-category/:id', component: editcategory, name:'edit-category'},

    // Product Routes
    { path: '/store-product', component: storeproduct, name:'store-product'},
    { path: '/product', component: product, name:'product'},
    { path: '/edit-product/:id', component: editproduct, name:'edit-product'},

]
