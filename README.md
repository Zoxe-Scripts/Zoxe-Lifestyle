> [!CAUTION]
> This Lua script is distributed under the GNU General Public License (GPL).
> You are free to use and modify this script, but you must comply with the terms of the GPL.
> You cannot sell or distribute this script as your own work.
> See https://www.gnu.org/licenses/gpl-3.0.html for the full text of the GPL.

# Zoxe-Lifestyle

Simple Lifestyle For All Server

## Features

- **Multiple Lifestyle Roles**: Handle multiple lifestyle roles, each with unique attributes, actions, and items.
- **Customizable Jobs**: Users can create custom roles with specific items, actions, and character setups.
- **Preconfigured Lifestyle Examples**: Several lifestyle roles pre-configured for immediate use.

**Preview**: [Watch on Youtube](https://youtu.be/OWjQY3byRBQ)

**Documentation**: [View on Gitbook](https://zoxe-development.gitbook.io/home/)

**Contact**: [Get it on Discord](https://discord.gg/avJYpPCfuG)

Feel free to provide suggestions and report any bugs you encounter. Your feedback is invaluable as we continue to improve the script. Enjoy!

## Dependency

- **[No Dependency]**

### Framework Support

- [x] **All Framework**

<hr style="border-radius: 50%; margin: 0 25px;">

# Items Preconfigured

### Register Item In Ox Inventory

1. **Navigate to the `ox_inventory` folder**:

   - Go to the `data` directory.

2. **Open `items.lua`**:

   - Locate and open the `items.lua` file.

3. **Add the Lifestyle Items**:
   - Insert the following Lua table into `items.lua`.

Add this Lua code to the `items.lua` file to register the dispatch items:

```lua
return {
	['usbc'] = {
        label = 'USB-C Cable',
        weight = 0,
        stack = false,
    },
    ['jammer'] = {
        label = 'Jammer',
        weight = 0,
        stack = false,
    },
    ['pc'] = {
        label = 'Laptop',
        weight = 0,
        stack = false,
    },
    -- Add more items as needed...
}
```

<hr style="border-radius: 50%; margin: 0 25px;">

## Config File Details

### General Settings

```lua
Config = {}

Config.Life = {
    {
        Icon = { 'fa6', 'FaUsb' },
        Title = 'Hacker',
        Description = 'Expert in technology and cybersecurity, capable of breaching the most secure systems.',
        Image = 'https://rockstarintel.com/wp-content/uploads/2023/11/e1bf2b94c9208b6a210fa6add837641ce24d23052.webp',
        Badge = {
            Color = 'pink',
            Value = {
                { 'fa6', 'FaStar' },
                { 'fa6', 'FaStar' },
                { 'fa6', 'FaStar' }
            }
        },
        Button = {
            Icon = { 'fa6', 'FaPlay' },
            Color = 'blue',
            Value = 'Select',
        },
        Items = {
            { Icon = { 'fa6', 'FaUsb' }, Name = 'USB-C', Value = { name = 'usbc', quantity = 1 } },
            { Icon = { 'md', 'MdOutlineSignalWifiStatusbarConnectedNoInternet4' }, Name = 'Jammer', Value = { name = 'jammer', quantity = 1 } },
            { Icon = { 'fa6', 'FaLaptopCode' }, Name = 'Laptop', Value = { name = 'pc', quantity = 1 } }
        },
        Action = {
            Preview = {
                PedName = 'ig_lestercrest',
                PedCoords = vec4(1275.481323, -1710.778076, 54.756836, 116.220474),
            },
            View = 'lester_1_int'
        }
    },
    -- Add more lifestyle roles as needed...
}
```

- **Icon**: The icon used for this lifestyle role.
- **Title**: The title of the role.
- **Description**: A brief description of the lifestyle role.
- **Image**: URL for an image associated with this lifestyle.
- **Badge**: A badge displayed for this lifestyle, indicating rank or status.
- **Button**: Action button settings, such as icon and color.
- **Items**: A list of items available for this lifestyle.
- **Action**: Defines the actions (preview and view) associated with this lifestyle role.

### Life Role Example

```lua
{
    Title = 'Entrepreneur',
    Description = 'Successful businessperson with a keen eye for opportunities and exceptional leadership skills.',
    Items = {
        { Icon = { 'fa6', 'FaSuitcaseRolling' }, Name = 'Suitcase', Value = { name = 'suitcase', quantity = 1 } },
        { Icon = { 'fa6', 'FaMoneyBillTrendUp' }, Name = 'Money', Value = { name = 'money', quantity = 10000 } },
        { Icon = { 'fi', 'FiWatch' }, Name = 'Watch', Value = { name = 'watch', quantity = 3 } }
    },
    Action = {
        Preview = { PedName = 'ig_mp_agent14', PedCoords = vec4(-75.164833, -802.681335, 243.373657, 218.267715) },
        View = 'apa_pri_int'
    }
}
```

### Default Lifestyle Items

Each lifestyle has preconfigured items, such as:

- **Hacker**: USB-C, Jammer, Laptop
- **Entrepreneur**: Suitcase, Money, Watch
- **Illegal**: Pistol, Ammo, Knife
- **Driver**: Key, Turbo, Gas Can

These items are linked to specific gameplay actions and can be customized for your server.

<hr style="border-radius: 50%; margin: 0 25px;">

# All Exports & Events

<br>

- Get State ui if is Opened via `Ui Name`.
- Get the state via exports o via State Bag
- Available ("ShowUi")

```lua
---@param uiName string
---@return boolean
exports["Zoxe-Lifestyle"]:GetLocalStateUi(uiName)
```

#### Example Exports

```lua
RegisterCommand("getstate", function()
    print("ShowUi State:", exports["Zoxe-Lifestyle"]:GetLocalStateUi("ShowUi"))
end)
```

#### Example State Bag

```lua
CreateThread(function()
    while true do
        Wait(2000)
        print("ShowUi State:", LocalPlayer.state["ShowUi"])
    end
end)
```

<hr style="border-radius: 50%; margin: 0 25px;">
<br>

#### Open UI

```lua
--- Opens the UI.
exports["Zoxe-Lifestyle"]:OpenUi()
```

**Example:**

```lua
RegisterCommand("openui", function()
    exports["Zoxe-Lifestyle"]:OpenUi()
end)
```

<hr style="border-radius: 50%; margin: 0 25px;">

#### Force Close UI

```lua
--- Closes the UI.
exports["Zoxe-Lifestyle"]:ForceCloseUi()
```

**Example:**

```lua
RegisterCommand("forcecloseui", function()
    exports["Zoxe-Lifestyle"]:ForceCloseUi()
end)
```

<hr style="border-radius: 50%; margin: 0 25px;">
<br>

> [!TIP]
> This format should be clearer and more structured for users to understand how to use your script.
