.PHONY: build run deploy check

check:
	@revive ./...

build:
	@docker build -t gvaadmin:main-V1.0.1 .
	@echo "gvaadmin image build successful"

run:
#	@if [ $(shell docker ps -aq --filter name=gvaadmin --filter publish=8081) ]; then docker rm -f gvaadmin; fi
#	@docker run --name=gvaadmin -p 8081:8081 -v /root/go/src/gvaadmin/temp/logs:/gvaadmin/temp/logs  -v /root/go/src/gvaadmin/static:/gvaadmin/static  -v /root/go/src/gvaadmin/config:/gvaadmin/config -d --restart=always 10.10.11.1:8082/gvaadmin/gvaadmin:v1
#	@docker image prune -f
#	@echo "512cert_admin_api api service is running..."

deploy:
	@git checkout gvaadmin
	@git pull origin gvaadmin
	make build
	make run
