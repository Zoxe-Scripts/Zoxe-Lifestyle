LocalPlayer = { state = { ShowUi = false } }

local State = LocalPlayer.state

function ShowNui(action, state)
    SetNuiFocus(state, state)
    SendNUIMessage({ action = action, data = state })

    if State[action] ~= nil then
        State[action] = state
    end
end

function SendNui(action, data)
    SendNUIMessage({ action = action, data = data })
end

function Close()
    if Cam.ExistCam() then
        Cam.DestroyCamera()
    end
    if DoesEntityExist(Ped) then
        DeleteEntity(Ped)
    end
    ClearFocus()
end

function Open()
    local name = 'ShowUi'

    if State[name] ~= nil then
        ShowNui(name, not State[name])
    else
        print(name)
    end
end

RegisterNuiCallback('Zoxe_Lifestyle:GetTableStyle', function(data, cb)
    cb(Config.Life)
end)

RegisterNuiCallback('Zoxe_Lifestyle:SetTableStyle', function(data, cb)
    print(json.encode(data.card, { indent = true }))

    local Actions = Config.Life[data.index + 1].Action
    LoadAction(Actions)

    cb(true)
end)

RegisterNuiCallback('Zoxe_Lifestyle:Success', function(data, cb)
    print(json.encode(data.card, { indent = true }))

    local Actions = Config.Life[data.index + 1].Action
    Cutscene(Actions.View)

    local Items = Config.Life[data.index + 1].Items
    TriggerServerEvent('Zoxe_Lifestyle:Success', cache.serverId, Items)

    cb(true)
end)

RegisterNuiCallback('Zoxe_Lifestyle:Close', function(data, cb)
    ShowNui(data.name, false)
    Close()
    cb(true)
end)

RegisterNetEvent('Zoxe_Lifestyle:Open', function()
    Open()
end)

RegisterNetEvent('Zoxe_Lifestyle:Close', function()
    Open()
    Close()
end)

exports("GetLocalStateUi", function(uiName)
    return LocalPlayer.state[uiName]
end)

exports('OpenUi', Open)
exports('ForceCloseUi', Close)

RegisterCommand('Zoxe_Lifestyle', function(source, args, raw)
    Open()
end)
