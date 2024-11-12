Ped = nil

function LoadAction(Actions)
    if DoesEntityExist(Ped) then
        DeleteEntity(Ped)
    end

    DoScreenFadeOut(1000)

    SetFocusArea(Actions.Preview.PedCoords.x, Actions.Preview.PedCoords.y, Actions.Preview.PedCoords.z, 0.0, 0.0, 0.0)
    Wait(1000)

    Action(Actions)

    Wait(1000)
    DoScreenFadeIn(1000)
end

function Action(Value)
    local pedname = Value.Preview.PedName
    local coords = Value.Preview.PedCoords

    local pedModel = lib.requestModel(pedname)

    local ped = CreatePed(4, pedModel, coords.x, coords.y, coords.z, coords.w, false, true)
    SetBlockingOfNonTemporaryEvents(ped, true)

    Ped = ped

    Cam.DestroyCamera()

    Cam.LoadCam(ped)
    Cam.StartCamera(ped, -0.5, 5.0, 0.5)
end

CreateThread(function()
    ClearFocus()
end)
