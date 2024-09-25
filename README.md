# Réponses aux questions du CC3

## Partie 1:

### Question 1.1:

Les en-têtes de la réponse HTTP sont :
```
HTTP/1.1 200 OK
Date: Sun, 15 Sep 2024 22:14:03 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked
```

### Question 1.2:

Les en-têtes qui ont changé depuis la version précédente sont :
```
Content-Type: application/json
Content-Length: 20
```
La date a également changé mais c'est normal je ne compte pas cet en-tête là

### Question 1.3:

La réponse reçue par le client est vide car une erreur se produit

### Question 1.4:

L'erreur affichée dans la console est :
```
Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\Documents\devweb-tp5\index.html'
    at async open (node:internal/fs/promises:639:25)
    at async Object.readFile (node:internal/fs/promises:1242:14) {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'C:\\Users\\Utilisateur\\Documents\\devweb-tp5\\index.html'
}
```
Le problème vient du fait qu'on n'a pas de fichier index.html

### Question 1.5:

Voici le code requestListener() avec gestion d'erreur en async/await :
```javascript
async function requestListener(_request, response) {
    try {
        const contents = await fs.readFile("index.html", "utf8")
        response.setHeader("Content-Type", "text/html");
        response.writeHead(200);
        return response.end(contents);
    }
    catch (error) {
        response.writeHead(500);
        return response.end("index.html not found");
    }
}
```

### Question 1.6:

Ces commandes ont installé les modules cross-env et nodemon dans le package.

### Question 1.7:

Le mode développement fait redémarrer le serveur automatiquement à chaque changement alors que le mode production ne redémarre pas le serveur tout seul.

### Question 1.8:

- http://localhost:8000/index.html renvoie un code 200 et affiche Hello World.
- http://localhost:8000/random.html renvoie un code 200 et affiche un nombre compris entre 0 et 99.
- http://localhost:8000/ renvoie un code 404 et affiche 404 : NOT FOUND.
- http://localhost:8000/dont-exist renvoie un code 404 et affiche 404 : NOT FOUND.

## Partie 2:

### Question 2.1:

- https://expressjs.com/
- https://www.npmjs.com/package/http-errors
- https://www.npmjs.com/package/loglevel
- https://www.npmjs.com/package/morgan

### Question 2.2:

- Les 3 pages (http://localhost:8000/, http://localhost:8000/index.html et http://localhost:8000/random/:nb) renvoie bien un code 200 et s'affichent correctement.

### Question 2.3:

Voici toutes les nouvelles en-têtes par rapport au serveur HTTP :
```
X-Powered-By: Express
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Last-Modified: Wed, 25 Sep 2024 03:01:50 GMT
ETag: W/"10b-1922720c06c"
```

### Question 2.4:

L'événement listening se déclenche à chaque fois que le serveur (server-express.mjs) est modifié.

### Question 2.5:

C'est l'option index qui s'occupe de cette redirection.

### Question 2.6:

Avec le rafraîchissement simple on reçoit le code 304 pour nous dire que le fichier n'a pas été modifié et avec un rafraîchissement forcé on reçoit le code 200 car on ignore le cache et on retélécharge.

### Question 2.7:

En mode développement on a toujours l'erreur entière mais en mode production on a un message "Internal Server Error".