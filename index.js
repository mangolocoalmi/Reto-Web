const app = require("./app");
const puerto = 3000

app.listen(puerto, () => {
    console.log(`Server listo en http://localhost:${puerto}`);
});