# Reset mobs' health to maximum

execute as @e[type=!minecraft:player] store result entity @s Health double 9999.0 run data modify entity @s Health set value 9999.0d
# say Hello!