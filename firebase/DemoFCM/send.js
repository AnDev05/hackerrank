
var admin = require("firebase-admin");

var serviceAccount = require("/home/anct/Documents/vsc_workspace/firebase/DemoFCM/adminsdk.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://testfcm-af23c.firebaseio.com"
});

//Specify the received device
var registrationToken = "<registration token goes here>";

//Set data
var payload = {
    notification: {
        title: "Account Deposit",
        body: "A deposit to your savings account has just cleared."
    },
    data: {
        account: "Savings",
        balance: "$3020.25"
    }
};

//Set option
var options = {
    priority: "high",
    timeToLive: 60 * 60 * 24
};

//Send to specific device
admin.messaging().sendToDevice(registrationToken, payload, options)
    .then(function (response) {
        console.log("Successfully sent message:", response);
    })
    .catch(function (error) {
        console.log("Error sending message:", error);
    });
