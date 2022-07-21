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
                  explicabo omnis soluta, voluptates commodi quos numquam, quibusdam, dicta eos tenetur suscipit aliquam
                  illum! Id possimus consectetur itaque quia quisquam quis? Laborum vero incidunt accusamus officiis
                  excepturi nam id quam vel reiciendis perferendis! Nulla hic sapiente voluptates impedit provident
                  eveniet expedita, commodi laborum ab odit iusto, sint sequi placeat quo sunt excepturi. Delectus
                  repellendus praesentium provident distinctio consectetur mollitia quas! Nisi, a pariatur voluptas modi
                  ipsum, eaque, delectus saepe amet excepturi nemo consequuntur doloremque tenetur. Officiis ipsam
                  numquam, suscipit natus expedita autem voluptatibus accusamus obcaecati facilis. Ducimus aspernatur
                  eveniet temporibus, maxime accusantium rerum cumque? Aliquam voluptatibus libero ut repellat deleniti,
                  minima atque modi similique harum molestiae quos officia omnis sint vero in. Facilis necessitatibus
                  molestias architecto voluptates non quas dolorum, quae porro impedit maxime nulla a ullam est blanditiis
                  quod rem ipsa corrupti odio. Consequatur quibusdam eius dolorem beatae laudantium quidem voluptas
                  excepturi hic sapiente reprehenderit doloribus accusantium dolores modi voluptatem </p>
          </div>
          <div id="aside" class="item">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quasi, aspernatur necessitatibus
                  iusto ducimus commodi possimus modi, distinctio ut itaque illum magnam sequi quisquam dolorem. Maxime
                  amet optio aliquam, quibusdam ea beatae ex hic delectus commodi rerum, quis quasi. Neque, deleniti
                  distinctio odio natus voluptatibus tenetur non repudiandae delectus sint libero, exercitationem ipsa
                  atque voluptatum dolorem necessitatibus! Omnis quia laudantium quo eligendi autem explicabo, sint iure
                  sequi iste consequatur illum. Nam, odit! Modi, minus! Cum, minima nesciunt? Voluptatibus modi ut ipsa
                  sunt? Laborum quae modi velit, ipsam cumque delectus voluptate ad necessitatibus molestias ullam
                  deserunt itaque eius suscipit sapiente repellat. Perspiciatis ut nihil quis tempora sequi vitae
                  aspernatur, suscipit ipsum eligendi facilis perferendis, saepe nesciunt necessitatibus dolorum omnis
                  quia voluptate consequatur repudiandae dignissimos laboriosam modi dolore eos facere iure. Soluta veniam
                  iste voluptate repellat. Facilis dolore saepe possimus. Fugiat quaerat sint dolorem dolores iste!
                  Corrupti nostrum reiciendis fugit earum tempora iste rerum! Sed eveniet ratione voluptatum debitis
                  suscipit sint dignissimos reprehenderit mollitia odio porro rerum, consequatur fuga facere nihil ut,
                  labore eos accusamus obcaecati nostrum repudiandae distinctio voluptas. Eum provident sed laboriosam
                  eius laborum nisi reiciendis, similique totam non blanditiis velit ullam quo minima est voluptates,
                  atque dolorum maxime incidunt nostrum facere officiis repudiandae. At dolores rem ipsum dolorum
                  voluptates recusandae magni deserunt praesentium aut, accusantium cupiditate amet ea, id aliquam natus
                  repudiandae. Repellendus iure laborum fuga libero expedita doloremque ab consectetur perferendis alias
                  harum, recusandae, facilis numquam amet, molestias similique unde non eveniet omnis praesentium
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