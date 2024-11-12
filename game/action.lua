Ped = nil

function Action(Value)
    local pedname = Value.Preview.PedName
    local coords = Value.Preview.PedCoords

    local pedModel = lib.requestModel(pedname)

    local ped = CreatePed(4, pedModel, coords.x, coords.y, coords.z, coords.w, false, true)
    SetBlockingOfNonTemporaryEvents(ped, true)

    Ped = ped

    Cam.LoadCam(ped)
    Cam.StartCamera(ped, -0.5, 5.0, 0.5)
end

CreateThread(function()
    ClearFocus()
end)
