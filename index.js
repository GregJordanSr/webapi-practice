// will run the server
//separation of concerns (Soc)
// single responsibility principle (SRP)
//  - each module or file has a single responsibility
const server =  require('./api/server.js');

const port = process.env.PORT || 8000;
server.listen(port, () => console.log('\n***API on ${port}\n'));