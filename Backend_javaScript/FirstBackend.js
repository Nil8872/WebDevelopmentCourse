const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS Grid Template Area property</title>
      <style>
          #container {
              display: grid;
              grid-gap: 1rem;
              grid-template-areas:
                  'navbar navbar navbar navbar'
                  'sec sec sec aside'
                  'footer footer footer footer';
          }
  
          #navbar {
              grid-area: navbar;
              text-align:unset;
          }
  
          #section {
              grid-area: sec;
              text-align: justify;
          }
          
          #aside {
              grid-area: aside;
              text-align: justify;
          }
  
          footer {
              grid-area: footer;
              text-align: center;
  
          }
  
          .item {
              border: 4px solid black;
              background-color: bisque;
          }
      </style>
  </head>
  
  <body>
      <div id="container">
          <div id="navbar" class="item">
              file selection home template
          </div>
          <div id="section" class="item">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptatibus repellat, assumenda pariatur
                  fuga quam reprehenderit quas, nihil non sunt cum nemo nulla minima nesciunt. Labore repudiandae a
                  blanditiis iste repellendus cumque quidem praesentium, eos similique aut! Rerum molestias facilis dicta,
                  autem minima dolorem provident facere ratione vel. Dolorem quisquam nulla ducimus voluptatibus ea
                  architecto molestias sed blanditiis distinctio veritatis qui aperiam officiis corrupti reprehenderit
                  numquam modi, beatae, aliquam aut assumenda voluptas cum? Inventore totam illum perferendis quis, id,
                  possimus voluptatibus repellendus animi nobis sunt ipsum quidem accusamus! Natus nisi similique aut
                   reprehenderit doloribus accusantium dolores modi voluptatem </p>
          </div>
          <div id="aside" class="item">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quasi, aspernatur necessitatibus
                  iusto ducimus commodi possimus modi, distinctio ut itaque illum magnam sequi quisquam dolorem. Maxime
                  amet optio aliquam, quibusdam ea beatae ex hic delectus commodi rerum, quis quasi. Neque, deleniti
                  distinctio odio natus voluptatibus tenetur non repudiandae delectus sint libero, exercitationem ipsa
                  atque voluptatum dolorem necessitatibus! Omnis quia laudantium quo eligendi autem explicabo, sint iure
                    facilis numquam amet, molestias similique unde non eveniet omnis praesentium
              </p>
          </div>
          <footer class="item">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequuntur saepe cumque!</p>
          </footer>
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});