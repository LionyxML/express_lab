## Basic express + sequelize app


### Install
Install package deps:
`$ npm install`

Run migrations:
`$ npm run migrate`

Start the app:
`$ npm run start`


Get the example route:
`$ curl http://localhost:3000/api/`

You should get:
``` 
{
  "message": "welcome to the Users API!"
}
```

Post something, example:
`$ curl -X POST http://localhost:3000/api/user -H "Content-Type: application/json" -d '{"fistName":"rahul","lastName":"mj","email":"rmj@rmj.net"}'`

And get all users registered with:
`
$ curl http://localhost:3000/api/user
`

