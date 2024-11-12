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

function GetTableStyle()
    for i = 1, #Config.Life do
        local ConfigStyle = Config.Life[i]
        return ConfigStyle
    end
end

function Close()
    if Cam.ExistCam() then
        Cam.DestroyCamera()
    end
    if DoesEntityExist(Ped) then
        DeleteEntity(Ped)
    end
end

RegisterNuiCallback('Zoxe_Lifestyle:GetTableStyle', function(data, cb)
    cb(Config.Life)
end)

RegisterNuiCallback('Zoxe_Lifestyle:SetTableStyle', function(data, cb)
    -- print(json.encode(data.card, { indent = true }))
    local Actions = Config.Life[data.index + 1].Action

    if DoesEntityExist(Ped) then
        DeleteEntity(Ped)
    end

    DoScreenFadeOut(1000)

    SetFocusArea(Actions.Preview.PedCoords.x, Actions.Preview.PedCoords.y, Actions.Preview.PedCoords.z, 0.0, 0.0, 0.0)
    Wait(1000)

    Action(Actions)

    Wait(1000)
    DoScreenFadeIn(1000)

    cb(true)
end)

RegisterNuiCallback('Zoxe_Lifestyle:Close', function(data, cb)
    ShowNui(data.name, false)
    Close()
    cb(true)
end)

RegisterNuiCallback('Zoxe_Lifestyle:Success', function(data, cb)
    print(json.encode(data.card, { indent = true }))
    cb(true)
end)

exports("GetLocalStateUi", function(uiName)
    return LocalPlayer.state[uiName]
end)

RegisterCommand('New', function(source, args, raw)
    local name = 'ShowUi'

    if State[name] ~= nil then
        ShowNui(name, not State[name])
    else
        print(name)
    end
end)
