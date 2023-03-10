Ext.define('Admin.view.category.CategoriesModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.searchcategories',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Memory',
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Date',
        'Ext.data.field.Boolean',
        'Ext.data.reader.Json'
    ],

    stores: {
        allResults: {
            type: 'searchcategories'
        },

        usersResults: {
            type: 'searchusers'
        },
        
        inboxResults: {
            type: 'inbox'
        }
    }
});
