```> docker run -i -t node9 /bin/bash```

```> docker run --rm -i -t -v /home/mikael/dev/docker/node/app:/usr/src/app --name node9c node9 /bin/bash```

```> docker run --rm -i -t -v /home/mikael/dev/docker/node/app:/usr/src/app -p 5000:5000 --name node9c node9 /bin/bash```

```> npm start```

== Set up