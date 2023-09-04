# Reset mobs' health to maximum if any players have died (deathCount score increased by 1)
# say Hello from tick.mcfunction!

execute as @a[scores={deaths=1..}] run function health_reset:reset_health

# reset
execute if entity @e[type=minecraft:player,scores={deaths=1}] run scoreboard players set @a deaths 0