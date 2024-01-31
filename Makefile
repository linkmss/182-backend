# make end from example
env:
	@cp .env.example .env

install:
	@npm install --force

# start services
dev:
	@npm run start:dev

# migrate prisma
migrate:
	@npx prisma migrate dev --name "init"
# make seed
seed:
	@npx prisma db seed
