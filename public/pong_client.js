/*var websocket;
var serverUrl = "ws://localhost:8080/";

var WebSocketClass = window.WebSocket;
if (WebSocketClass) {
    websocket = new WebSocketClass(serverUrl);

    websocket.onopen = function () {
    console.log("Conexão aberta");
};

websocket.onclose = function() {
    console.log("Conexão fechada");
};

websocket.onerror = function() {
    console.log("Erro na conexão");
};

websocket.onmessage = function(message) {
    console.log(message.data);
    };
}

function sendMessage(message) {
    if (websocket.readyState == websocket.OPEN) {
    websocket.send(message);
    }
}*/