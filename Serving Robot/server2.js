const express = require('express');
const bodyParser = require('body-parser'); // body-parser 모듈 추가
const app = express();

app.use(bodyParser.json()); // JSON 요청 본문 파싱 설정

// 이후 다른 미들웨어와 라우트 핸들러 설정


app.listen(8082, function(){
    console.log('listening on 8082')
});

app.get('/member', function(req, res){
    res.send('학수, 기태, 태형, 판검, 미영 만세!');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/placeOrder', function (req, res) {
    const order = req.body;
    // 여기서 주문 정보(order)를 처리하고 응답을 보내는 로직을 작성합니다.
    // 예를 들어, 주문을 데이터베이스에 저장하거나 다른 처리를 수행할 수 있습니다.
    console.log('Received order:', order);

    // 성공 응답 (상황에 따라 적절하게 수정)
    res.sendStatus(200);
});

app.post('/returnToMenu', function (req, res) {
    const order = req.body;
    // 여기서 주문 정보(order)를 처리하고 응답을 보내는 로직을 작성합니다.
    // 예를 들어, 주문을 데이터베이스에 저장하거나 다른 처리를 수행할 수 있습니다.
    console.log('RETURN');

    // 성공 응답 (상황에 따라 적절하게 수정)
    res.sendStatus(200);

    // 클라이언트로 "return" 메시지를 보내기 위해 Socket.io 또는 다른 웹 소켓 라이브러리를 사용할 수 있습니다.
    // 클라이언트에게 메시지를 보내는 부분을 추가해야 합니다.
    // 이 부분은 클라이언트 측에서 "return" 메시지를 처리하도록 할 것입니다.
});