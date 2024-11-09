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

RegisterNuiCallback('Zoxe_Lifestyle:Close', function(data, cb)
    ShowNui(data.name, false)
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
