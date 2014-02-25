var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('offline', this.onOffline, false);
    },
    onDeviceReady: function () {
        console.log('ready papa2');
    },
    onOffline: function () {
        console.log('offline papa');
          $.mobile.navigate("#pg-fakeAbout", {allowSamePageTransition: true, reloadPage: false, changeHash: true, transition: "none", speed: 50});
        navigator.notification.alert('no hay conexion a internet. Intenta más tarde',null,'Yo Reporto','Aceptar');
    }
};
