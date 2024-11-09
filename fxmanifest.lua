fx_version 'cerulean'
game 'gta5'
lua54 'yes'

client_scripts {
    'game/framework/*.lua',
    'game/client.lua',
}

shared_script {
    -- '@es_extended/imports.lua',
    '@ox_lib/init.lua',
    'game/shared.lua'
}

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'game/server.lua',
}

dependencies {
    'ox_target',
    'ox_lib',
    'ox_inventory'
}

ui_page 'web/build/index.html'

files {
    'web/build/index.html',
    'web/build/**/*',
    'locales/*.json'
}
