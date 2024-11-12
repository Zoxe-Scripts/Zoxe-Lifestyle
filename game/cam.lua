Cam = {}

local camera

function Cam.StartCamera(vehicle, withd, distance, height)
    local camCoords = GetOffsetFromEntityInWorldCoords(vehicle, withd, distance, height)
    local newCam = CreateCamera("DEFAULT_SCRIPTED_CAMERA", true)

    SetCamCoord(newCam, camCoords.x, camCoords.y, camCoords.z)
    SetCamFov(newCam, 40.0)
    SetCamRot(newCam, 0.0, 0.0, GetEntityHeading(vehicle) + 180)

    SetCamUseShallowDofMode(newCam, true)
    SetCamNearDof(newCam, 1.2)
    SetCamFarDof(newCam, 12.0)
    SetCamDofStrength(newCam, 1.0)
    SetCamDofMaxNearInFocusDistance(newCam, 1.0)
    PointCamAtEntity(newCam, vehicle, 0.0, 0.0, 0.0, true)

    if Cam.ExistCam() then
        local transitionDuration = 1000
        SetCamActiveWithInterp(newCam, camera, transitionDuration, 1, 1)
        Wait(transitionDuration)
        DestroyCam(camera, false)
    else
        SetCamActive(newCam, true)
    end

    camera = newCam

    ClearFocus()
    SetFocusPosAndVel(camCoords.x, camCoords.y, camCoords.z, 0.0, 0.0, 0.0)
    SetFocusArea(camCoords.x, camCoords.y, camCoords.z, 0.0, 0.0, 0.0)

    RenderScriptCams(true, true, 1650, 1, 0)

    CreateThread(function()
        repeat
            SetUseHiDof()
            Wait(0)
        until not Cam.ExistCam()
    end)
end

function Cam.updateCameraZoom(targetZoom, vehicle)
    local maxFov = 100.0
    local minFov = 10.0
    targetZoom = math.min(math.max(targetZoom, minFov), maxFov)
    if Cam.ExistCam() then
        SetCamFov(camera, targetZoom)
        PointCamAtEntity(camera, vehicle, 0.0, 0.0, 0.0, true)
    end
end

function Cam.DestroyCamera()
    if camera then
        RenderScriptCams(false, true, 1250, 1, 0)
        DestroyCam(camera, false)
        camera = nil
    end
end

function Cam.LoadCam(entity)
    local interiorID = GetInteriorFromEntity(entity)

    if interiorID ~= 0 then
        while not IsInteriorReady(interiorID) do Wait(100) end
        local roomKey = GetRoomKeyFromEntity(entity)
        if roomKey ~= 0 then ForceRoomForEntity(entity, interiorID, roomKey) end
    end
end

function Cam.SwitchingCamera(ped1, ped2)
    StopPlayerSwitch()
    if not IsPlayerSwitchInProgress() then
        Wait(400)
        SwitchToMultiFirstpart(ped1, 0, 1)
        Wait(4500)
        SwitchToMultiSecondpart(ped2)
    end
end

function Cam.ExistCam()
    return camera ~= nil
end

AddEventHandler("onResourceStop", function(resource)
    if cache.resource == resource and Cam.ExistCam() then
        Close()
    end
end)
