# Web application with Node.js and Express

#### docker

```> docker run -i -t node9 /bin/sh```

```> docker run --rm -i -t -v /home/mikael/dev/docker/node/app:/usr/src/app --name node9c node9 /bin/sh```

```> docker run --rm -i -t -v /home/mikael/dev/docker/node/app:/usr/src/app -p 5000:5000 --name node9c node9 /bin/sh```

```> npm start```


#### bower

Install bower globally in order to use it on the command line. Due to a bug, "--allow-root" needs to be added to every bower command

```> npm install bower -g```

```> bower init --allow-root```

#### wiredep & nodemon

Install wiredep to automatically inject bower dependencies into our index.html.

Install nodemon to restart the server automatically.