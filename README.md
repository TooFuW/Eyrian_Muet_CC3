# devweb-tp5
## Question 1.1:
Les en-têtes de la réponse HTTP sont :
HTTP/1.1 200 OK
Date: Sun, 15 Sep 2024 22:14:03 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked
## Question 1.2:
Les en-têtes qui ont changé depuis la version précédente sont :
Content-Type: application/json
Date: Sun, 15 Sep 2024 22:18:08 GMT
Content-Length: 20
## Question 1.3:
La réponse reçue par le client est vide car une erreur se produit
## Question 1.4:
L'erreur affichée dans la console est :
Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\Documents\devweb-tp5\index.html'
    at async open (node:internal/fs/promises:639:25)
    at async Object.readFile (node:internal/fs/promises:1242:14) {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'C:\\Users\\Utilisateur\\Documents\\devweb-tp5\\index.html'
}
Le problème vient du fait qu'on n'a pas de fichier index.html
## Question 1.5:
Voici le code requestListener() avec gestion d'erreur en async/await :
````javascript
```
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
````