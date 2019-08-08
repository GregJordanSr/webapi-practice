// will run the server
//separation of concerns (Soc)
// single responsibility principle (SRP)
//  - each module or file has a single responsibility
const server =  require('./api/server');

server.listen(port, () => console.log('\n***Server is running on http://localhost:8000\n'));