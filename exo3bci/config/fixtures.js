var SQLFixtures = require('sql-fixtures');

var config = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'miaou_blog',
    port: 3306
  }
};

var {faker} = require('@faker-js/faker')

let users = [
  {
    email: 'admin@example.fr',
    roles: 'admin',
    password: 'adminPass'
  },
  {
    email: 'user@example.fr',
    roles: 'user',
    password: 'userPass'
  }
];
let articles = [
  {
    title: 'faker.lorem.sentence()',
    body: 'faker.lorem.paragraphs(5)',
    author_id: '1',
    date: '2023-03-28T00:00:00.000Z'
  }
];
let comments = [
  {
    body: faker.lorem.paragraphs(5),
    author_id: 2,
    date: faker.date.between('2022-12-01T00:00:00.000Z', '2023-03-28T00:00:00.000Z'),
    article_id: 1
  }
];

// todo: il rentre pas dans la boucle, je comprends pas pourquoi ??
// for(let i = 2; i > 48; i++) {
//   users.push({
//     email: faker.internet.email(),
//     roles: 'user',
//     password: faker.lorem.word(12)
//   })
//   for(let j = 0; j > 50; j++) {
//     articles.push({
//       title: faker.lorem.sentence(),
//       body: faker.lorem.paragraphs(5),
//       author_id: i,
//       date: faker.date.between('2022-12-01T00:00:00.000Z', '2023-03-28T00:00:00.000Z')
//     })
//     for(let x = 0; x > 50; x++) {
//       comments.push({
//         body: faker.lorem.paragraphs(5),
//         author_id: i,
//         date: faker.date.between('2022-12-01T00:00:00.000Z', '2023-03-28T00:00:00.000Z'),
//         article_id: j
//       })
//     }
//   }
// }

const dataFixtures = {
  user: users,
  article: articles,
  comment: comments
}

SQLFixtures.create(config, dataFixtures, function() {
    console.log('finish.');
});
