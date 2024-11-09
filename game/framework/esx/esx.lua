RegisterNetEvent('esx:playerLoaded')
AddEventHandler('esx:playerLoaded', function(source)
    local identifier = ESX.GetPlayerFromId(source).identifier

    MySQL.Async.fetchAll('SELECT skin FROM users WHERE identifier = @identifier', {
        ['@identifier'] = identifier
    }, function(res)
        if res[1].skin == nil then
            TriggerClientEvent("Zoxe_Lifestyle:Open", source)
        end
    end)
end)

RegisterNetEvent('Zoxe_Lifestyle:Give', function()
    local xPlayer = ESX.GetPlayerFromId(source)

    xPlayer.addInventoryItem("money", 1)
    xPlayer.addInventoryItem("burger", 1)
    xPlayer.addInventoryItem("water", 1)
    xPlayer.addInventoryItem("lockpick", 1)
end)
