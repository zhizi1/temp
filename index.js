let express = require('express');
let app = express();

app.get('/say', (req, res) => {
    let {cb} = req.query; //��ȡ������callback��������cb��key
    res.send(`${cb}('Hello!')`);
});
app.listen(3000);