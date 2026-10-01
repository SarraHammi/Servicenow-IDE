import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '246405a2ecb54ff4b17a7037b9326b13'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'cf34004fb99f44a5b5536696027ee0a0'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '97b53806dbca4fb180d26de520e17e92'
                    }
                    'lodash.snakecase@4.1.1/index.js': {
                        table: 'sys_module'
                        id: '9a9f7552b55f4b799990aaf2a64cc383'
                    }
                    'lodash.snakecase@4.1.1/package.json': {
                        table: 'sys_module'
                        id: '45f23d96cecb489a90420163dbc59ff4'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '1dff9d9b98fd43cabfab4e1e82828025'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '886000007c35436e9b5af3036c862843'
                    }
                }
            }
        }
    }
}
