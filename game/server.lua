RegisterNetEvent('Zoxe_Lifestyle:Success', function(source, items)
    print(json.encode(items, { indent = true }))

    for _, itemData in ipairs(items) do
        local item = itemData.Value.name
        local quantity = itemData.Value.quantity

        Config.Success(source, item, quantity)
    end
end)
