# make end from example
env:
	@cp .env.example .env

install:
	@npm install --force

# deploys
deploy-stage:
	#npm run build
	git checkout dev
	git pull origin
	git checkout main
	git pull origin
	git merge dev
	git push origin
	git checkout dev

# start services
dev:
	@npm run start:dev




# stage service
start-stage:
	@pm2 start ecosystem.config.js --only backend

start-duration:
	@pm2 start ecosystem.config.js --only duration



del-stage:
	@pm2 delete stage
