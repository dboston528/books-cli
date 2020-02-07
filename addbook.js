const { MongoClient } = require('mongodb');

async function main() {
  const uri = 'mongodb://localhost:27017/bookcli';

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  try {
    await client.connect();

    await createListing(client, {
      title: 'Harry Potter',
      authors: 'J.k Rowling',
      publisher: 'Not sure'
    });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function createListing(client, newListing) {
  const result = await client
    .db('bookcli')
    .collection('books')
    .insertOne(newListing);
  console.log(`New listing created with the following id: ${result.insertId}`);
}
