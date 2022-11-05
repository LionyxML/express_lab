# a take on prisma

Since sequelize is clunky with `makemigrations` I decided to try prisma.

Install the node app with `npm install`.

Run the migrations with `npx prisma migrate dev`.

Edit the `script.ts` file to uncomment step by step.

In each step use `npx ts-node script.ts` to execute the query.

After done with all data creation/retrieving, you can use `npx prisma studio` and navigate to the provided link to have a GUI to your data.

