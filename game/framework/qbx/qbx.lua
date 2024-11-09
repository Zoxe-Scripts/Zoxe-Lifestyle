AddEventHandler('QBCore:Client:OnPlayerLoaded', function()
    local Player = exports.qbx_core:GetPlayer(source)
    local identifier = Player.PlayerData.citizenid

    MySQL.Async.fetchAll('SELECT skin FROM players WHERE citizenid = @citizenid', {
        ['@citizenid'] = identifier
    }, function(res)
        if res[1].skin == nil then
            TriggerClientEvent("Zoxe_Lifestyle:Open", source)
        end
    end)
end)
