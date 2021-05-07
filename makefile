

ensure-dependencies:
	@echo "Ensuring docker is installed..."
	@docker info

brand:
	@echo "Creating our service-ecommerce-repository-metrics manifest file..."
	@node_modules/make-manifest/bin/make-manifest
	@cat ./manifest.json

package:
	@echo "Building our service-ecommerce-repository-metrics docker image..."
	@docker build --tag service-ecommerce-repository-metrics .
	@docker images

qa:
	@echo "Checking that our service-ecommerce-repository-metrics tests dont fail..."
	@npm run qa