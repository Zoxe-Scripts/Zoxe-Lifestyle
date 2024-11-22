function Cutscene(value)
    CreateThread(function()
        if IsCutsceneActive() then
            StopCutsceneImmediately()
        else
            RequestCutscene(value, 8)
            local timeout = GetGameTimer() + 10000
            while not HasCutsceneLoaded() and GetGameTimer() < timeout do
                Wait(0)
            end

            if HasCutsceneLoaded() then
                StartCutscene(value)
                Wait(100)
                if IsCutsceneActive() then
                    local coords = GetWorldCoordFromScreenCoord(0.5, 0.5)
                    NewLoadSceneStartSphere(coords.x, coords.y, coords.z, 1000, 0)
                end
            end
        end
    end)
end
