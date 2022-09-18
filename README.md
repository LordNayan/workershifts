Worker-Shift Project

To run project locally :- 

1) Run npm i

2) Create a .env on your root folder and add the below variable.

DATABASE_URL=mysql://USERNAME:PASSWORD@localhost:PORT/DBNAME

***Replace USERNAME, PASSWORD, PORT and DBNAME according to your local mysql config***

3) Run npx prisma generate

4) Run npx prisma migrate dev

5) Run npm start

6) Visit swagger docs to test apis - [Swagger]http://localhost:3000/planner/docs/
   OR
   Import postman json file - https://www.getpostman.com/collections/2b824d52a67cc3692c28

Some Additional Info :-

Shitfs Enum Used :-

0-8 = Morning
8-16 = MidDay
16-24 = Evening