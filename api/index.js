// A big shoutout and thank you to Hong Ly for teaching me how to do this
// His YouTube channel: https://www.youtube.com/channel/UCjJHir6dFiHSOe5EayRoSMw
// His GitHub: https://github.com/lyhd

const express = require('express');

const app = express();

app.use(express.json());

app.use('/auth', require('./routes/auth'));

app.listen(5000, () => {
    console.log('Listening on port 5000');
})