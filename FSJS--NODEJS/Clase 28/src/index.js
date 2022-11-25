const app = require('./app');
require('./database');
const port = 5050;

app.listen(port, () => console.log(`Connection established on port ${port}`));
