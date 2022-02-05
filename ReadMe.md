# Setting Up Project

- [x] clone the project
- [ ] install and configure mysql 
- [ ] run 'npm install' in /backend/userlogin-app & /frontend/userlogin-app
- [ ] add .env for /backend/userlogin-app
- [ ] run 'npm run build' in /frontend/userlogin-app
- [ ] run 'npm start' in /backend/userlogin-app
- [ ] visit https://localhost:3000/ to view site
- [ ] add heroku remote and push to deploy 

## Sample .env
`
DB_HOST=localhost
DB_PORT=3306
DB_USER=admin
DB_PASS=admin
DB_DIALECT=mysql
DB_NAME_TEST=userdb
DB_NAME_DEVELOPMENT=userdb
DB_NAME_PRODUCTION=userdb
JWTKEY=eThWmZq4t7w!z%C&F)J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkYp3s6v9y$B&E)H@McQeThWmZq4t7w!z%C*F-JaNdRgUjXn2r5u8x/A?D(G+KbPeShVmYp3s6v9y$B&E
TOKEN_EXPIRATION=48h
BEARER=Bearer
`