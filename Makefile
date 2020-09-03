all: webpack start_local_ic create_canister build_canister install_canister

reinstall: build_canister install_canister

build_canister:
	dfx build

create_canister:
	dfx canister create --all
	
install_canister:
	dfx canister install --all -m reinstall

get_frontend_canister_id:
	dfx canister id open_discourse_ui_assets

webpack: node_modules/.bin/webpack
node_modules/.bin/webpack:
	yarn install

start_local_ic: dfx
	dfx stop
	dfx start --background

open_frontend:
	open http://localhost:8000/?canisterId=$(shell dfx canister id open_discourse_ui_assets)

dfx: /usr/local/bin/dfx
/usr/local/bin/dfx:
	sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"