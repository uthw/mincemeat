// structure for this file basically taken from enigmaitca. once i get time to add my own code i will. the copied stuff starts with the atum mobs if i recall

onEvent("server.datapack.high_priority", (event) => {
  let bosses = [
    {
      name: "wilden_stalker",
      entity: "ars_nouveau:wilden_stalker",
      weight: 3,
      size: {
        width: 1,
        height: 2,
      },
      enchant_chance: 0.35,
      rarity_offset: 275,
      enchantment_levels: [20, 15, 50, 30],
      effects: [
        {
          effect: "minecraft:fire_resistance",
          chance: 1.0,
        },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 4,
          },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 5.5,
          },
        },
        
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: {
            min: 0.25,
            max: 0.5,
          },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "wilden_guardian",
      entity: "ars_nouveau:wilden_guardian",
      weight: 3,
      size: {
        width: 1,
        height: 2,
      },
      enchant_chance: 0.35,
      rarity_offset: 275,
      enchantment_levels: [20, 15, 50, 30],
      effects: [
        {
          effect: "minecraft:fire_resistance",
          chance: 1.0,
        },
        {
          effect: "minecraft:resistance",
          chance: 1.0,
        },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 4,
          },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: {
            min: 3.8,
            max: 5.3,
          },
        },
        
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: {
            min: 0.25,
            max: 0.5,
          },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "blaze",
      entity: "minecraft:blaze",
      weight: 2,
      size: {
        width: 1,
        height: 2,
      },
      enchant_chance: 0.35,
      rarity_offset: 275,
      enchantment_levels: [20, 15, 50, 30],
      effects: [
        {
          effect: "mod_lavacow:immolation",
          chance: 1.0,
        },
        {
          effect: "minecraft:regeneration",
          chance: 1.0,
        },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: {
            min: 3,
            max: 8,
          },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: {
            min: 1.5,
            max: 2.5,
          },
        },
        
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: {
            min: 0.25,
            max: 0.5,
          },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "basalz",
      entity: "thermal:basalz",
      weight: 3,
      size: {
        width: 1,
        height: 2,
      },
      enchant_chance: 0.35,
      rarity_offset: 275,
      enchantment_levels: [20, 15, 50, 30],
      effects: [
        {
          effect: "ars_nouveau:shield",
          chance: 1.0,
        },
        {
          effect: "minecraft:regeneration",
          chance: 1.0,
        },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 4,
          },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: {
            min: 1.5,
            max: 3,
          },
        },
        
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: {
            min: 0.25,
            max: 0.5,
          },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "blitz",
      entity: "thermal:blitz",
      weight: 3,
      size: {
        width: 1,
        height: 2,
      },
      enchant_chance: 0.35,
      rarity_offset: 275,
      enchantment_levels: [20, 15, 50, 30],
      effects: [
        {
          effect: "ars_nouveau:shield",
          chance: 1.0,
        },
        {
          effect: "minecraft:regeneration",
          chance: 1.0,
        },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 4,
          },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: {
            min: 1.5,
            max: 3,
          },
        },
        
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: {
            min: 0.25,
            max: 0.5,
          },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "blizz",
      entity: "thermal:blizz",
      weight: 3,
      size: {
        width: 1,
        height: 2,
      },
      enchant_chance: 0.35,
      rarity_offset: 275,
      enchantment_levels: [20, 15, 50, 30],
      effects: [
        {
          effect: "ars_nouveau:shield",
          chance: 1.0,
        },
        {
          effect: "minecraft:regeneration",
          chance: 1.0,
        },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 4,
          },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: {
            min: 1.5,
            max: 3,
          },
        },
        
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: {
            min: 0.25,
            max: 0.5,
          },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "wither_skeleton",
      entity: "minecraft:wither_skeleton",
      weight: 3,
      size: {
        width: 1,
        height: 2,
      },
      enchant_chance: 0.35,
      rarity_offset: 275,
      enchantment_levels: [40, 30, 100, 60],
      effects: [
        {
          effect: "minecraft:resistance",
          chance: 1.0,
        },
        {
          effect: "mod_lavacow:immolation",
          chance: 1.0,
        },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: {
            min: 3,
            max: 8,
          },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: {
            min: 1.5,
            max: 3,
          },
        },
        
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: {
            min: 0.25,
            max: 0.5,
          },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "mimic",
      entity: "artifacts:mimic",
      weight: 1,
      size: { width: 1, height: 3 },
      enchant_chance: 0.95,
      rarity_offset: 880,
      enchantment_levels: [50, 30, 120, 40],
      effects: [{ effect: "minecraft:regeneration", chance: 1.0 }],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: { min: 3, max: 8 },
        },
        {
          attribute: "minecraft:generic.movement_speed",
          operation: "MULTIPLY_BASE",
          value: { min: 0.1, max: 0.2 },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: { min: 2, max: 4.6 },
        },
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: { min: 0.75, max: 1 },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "crimson_mosquito",
      entity: "alexsmobs:crimson_mosquito",
      weight: 1,
      size: { width: 1, height: 3 },
      enchant_chance: 0.95,
      rarity_offset: 880,
      enchantment_levels: [50, 30, 120, 40],
      effects: [{ effect: "minecraft:regeneration", chance: 1.0 }],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: { min: 3, max: 8 },
        },
        {
          attribute: "minecraft:generic.movement_speed",
          operation: "MULTIPLY_BASE",
          value: { min: 0.1, max: 0.2 },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: { min: 2, max: 4.6 },
        },
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: { min: 0.75, max: 1 },
        },
      ],
      valid_gear_sets: ["#standard", "#flying_bugs"],
    },
    {
      name: "tarantula_hawk",
      entity: "alexsmobs:tarantula_hawk",
      weight: 1,
      size: { width: 1, height: 3 },
      enchant_chance: 0.95,
      rarity_offset: 880,
      enchantment_levels: [50, 30, 120, 40],
      effects: [{ effect: "minecraft:regeneration", chance: 1.0 }],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: { min: 3, max: 8 },
        },
        {
          attribute: "minecraft:generic.movement_speed",
          operation: "MULTIPLY_BASE",
          value: { min: 0.1, max: 0.2 },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: { min: 2, max: 4.6 },
        },
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: { min: 0.75, max: 1 },
        },
      ],
      valid_gear_sets: ["#standard", "#flying_bugs"],
    },
    {
      name: "dropbear",
      entity: "alexsmobs:dropbear",
      weight: 5,
      size: { width: 1, height: 2 },
      enchant_chance: 0.55,
      rarity_offset: 500,
      enchantment_levels: [20, 15, 50, 30],
      effects: [{ effect: "minecraft:fire_resistance", chance: 1.0 }],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: { min: 3, max: 7 },
        },
        {
          attribute: "minecraft:generic.movement_speed",
          operation: "MULTIPLY_BASE",
          value: { min: 0.07, max: 0.12 },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: { min: 4, max: 5.8 },
        },
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: { min: 0.65, max: 1 },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "barbarian",
      entity: "atum:barbarian",
      weight: 5,
      size: { width: 1, height: 2 },
      enchant_chance: 0.55,
      rarity_offset: 500,
      enchantment_levels: [20, 15, 50, 30],
      effects: [
        { effect: "minecraft:fire_resistance", chance: 1.0 },
        { effect: "minecraft:strength", chance: 1.0 },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: { min: 7, max: 15 },
        },
        {
          attribute: "minecraft:generic.movement_speed",
          operation: "MULTIPLY_BASE",
          value: { min: 0.07, max: 0.12 },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: { min: 4, max: 10 },
        },
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: { min: 0.65, max: 1 },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "mummy",
      entity: "atum:mummy",
      weight: 3,
      size: { width: 1, height: 3 },
      enchant_chance: 0.35,
      rarity_offset: 400,
      enchantment_levels: [40, 30, 60, 30],
      effects: [
        { effect: "ars_nouveau:shield", chance: 1.0 },
        { effect: "minecraft:regeneration", chance: 1.0 },
        { effect: "minecraft:strength", chance: 1.0 },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: { min: 7, max: 10 },
        },
        {
          attribute: "minecraft:generic.movement_speed",
          operation: "MULTIPLY_BASE",
          value: { min: 0.08, max: 0.17 },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: { min: 2, max: 16 },
        },
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: { min: 1, max: 1 },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "sergeant",
      entity: "atum:sergeant",
      weight: 5,
      size: { width: 1, height: 2 },
      enchant_chance: 0.55,
      rarity_offset: 500,
      enchantment_levels: [20, 15, 50, 30],
      effects: [
        { effect: "minecraft:fire_resistance", chance: 1.0 },
        { effect: "minecraft:strength", chance: 1.0 },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: { min: 3, max: 7 },
        },
        {
          attribute: "minecraft:generic.movement_speed",
          operation: "MULTIPLY_BASE",
          value: { min: 0.07, max: 0.12 },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: { min: 4, max: 5.8 },
        },
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: { min: 0.65, max: 1 },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "forsaken",
      entity: "atum:forsaken",
      weight: 5,
      size: { width: 1, height: 2 },
      enchant_chance: 0.55,
      rarity_offset: 525,
      enchantment_levels: [40, 30, 90, 35],
      effects: [{ effect: "minecraft:fire_resistance", chance: 1.0 }],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: { min: 3, max: 6 },
        },
        {
          attribute: "minecraft:generic.movement_speed",
          operation: "MULTIPLY_BASE",
          value: { min: 0.05, max: 0.15 },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: { min: 2.5, max: 5 },
        },
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: { min: 0.35, max: 0.85 },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "vindicator",
      entity: "minecraft:vindicator",
      weight: 3,
      size: { width: 1, height: 2 },
      enchant_chance: 0.55,
      rarity_offset: 525,
      enchantment_levels: [40, 30, 90, 35],
      effects: [{ effect: "minecraft:fire_resistance", chance: 1.0 }],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: { min: 6, max: 10 },
        },
        {
          attribute: "minecraft:generic.movement_speed",
          operation: "MULTIPLY_BASE",
          value: { min: 0.05, max: 0.15 },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: { min: 2.5, max: 5 },
        },
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: { min: 0.35, max: 0.85 },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "evoker",
      entity: "minecraft:evoker",
      weight: 3,
      size: { width: 1, height: 3 },
      enchant_chance: 0.35,
      rarity_offset: 400,
      enchantment_levels: [40, 30, 60, 30],
      effects: [
        { effect: "ars_nouveau:shield", chance: 1.0 },
        { effect: "minecraft:regeneration", chance: 1.0 },
        { effect: "minecraft:strength", chance: 1.0 },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: { min: 6, max: 7 },
        },
        {
          attribute: "minecraft:generic.movement_speed",
          operation: "MULTIPLY_BASE",
          value: { min: 0.08, max: 0.17 },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: { min: 2, max: 16 },
        },
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: { min: 1, max: 1 },
        },
      ],
      valid_gear_sets: ["#standard"],
    },

    // end of unoriginal entries
    {
      name: "avaton",
      entity: "mod_lavacow:avaton",
      weight: 3,
      size: {
        width: 1,
        height: 1,
      },
      enchant_chance: 0.35,
      rarity_offset: 275,
      enchantment_levels: [20, 15, 50, 30],
      effects: [
        {
          effect: "upgrade_aquatic:repellence",
          chance: 1.0,
        },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: {
            min: 1.5,
            max: 3,
          },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 3.5,
          },
        },
        
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: {
            min: 0.25,
            max: 0.5,
          },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "banshee",
      entity: "mod_lavacow:banshee",
      weight: 3,
      size: {
        width: 1,
        height: 1,
      },
      enchant_chance: 0.35,
      rarity_offset: 275,
      enchantment_levels: [20, 15, 50, 30],
      effects: [
        {
          effect: "upgrade_aquatic:repellence",
          chance: 1.0,
        },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: {
            min: 1.5,
            max: 3,
          },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 3.5,
          },
        },
        
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: {
            min: 0.25,
            max: 0.5,
          },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "beelzebub",
      entity: "mod_lavacow:beelzebub",
      weight: 3,
      size: {
        width: 1,
        height: 1,
      },
      enchant_chance: 0.35,
      rarity_offset: 275,
      enchantment_levels: [20, 15, 50, 30],
      effects: [
        {
          effect: "upgrade_aquatic:repellence",
          chance: 1.0,
        },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 4,
          },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 3.5,
          },
        },
        
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: {
            min: 0.25,
            max: 0.5,
          },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "osvermis",
      entity: "mod_lavacow:osvermis",
      weight: 4,
      size: {
        width: 1,
        height: 2,
      },
      enchant_chance: 0.35,
      rarity_offset: 275,
      enchantment_levels: [20, 15, 50, 30],
      effects: [
        {
          effect: "atmospheric:spitting",
          chance: 1.0,
        },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 5.5,
          },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 3.5,
          },
        },
        
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: {
            min: 0.25,
            max: 0.5,
          },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "foglet",
      entity: "mod_lavacow:foglet",
      weight: 3,
      size: {
        width: 1,
        height: 2,
      },
      enchant_chance: 0.35,
      rarity_offset: 275,
      enchantment_levels: [20, 15, 50, 30],
      effects: [
        {
          effect: "minecraft:fire_resistance",
          chance: 1.0,
        },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: {
            min: 3,
            max: 5,
          },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: {
            min: 3,
            max: 4.8,
          },
        },
        
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: {
            min: 0.25,
            max: 0.5,
          },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "frigid",
      entity: "mod_lavacow:frigid",
      weight: 3,
      size: {
        width: 1,
        height: 2,
      },
      enchant_chance: 0.35,
      rarity_offset: 275,
      enchantment_levels: [20, 15, 50, 30],
      effects: [
        {
          effect: "minecraft:fire_resistance",
          chance: 1.0,
        },
        {
          effect: "atmospheric:repellence",
          chance: 0.8,
        },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 4,
          },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 5.5,
          },
        },
        
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: {
            min: 0.25,
            max: 0.5,
          },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "mummy",
      entity: "mod_lavacow:mummy",
      weight: 3,
      size: {
        width: 1,
        height: 2,
      },
      enchant_chance: 0.35,
      rarity_offset: 275,
      enchantment_levels: [20, 15, 50, 30],
      effects: [
        {
          effect: "minecraft:fire_resistance",
          chance: 1.0,
        },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 4,
          },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 5.5,
          },
        },
        
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: {
            min: 0.25,
            max: 0.5,
          },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "mycosis",
      entity: "mod_lavacow:mycosis",
      weight: 3,
      size: {
        width: 1,
        height: 2,
      },
      enchant_chance: 0.35,
      rarity_offset: 275,
      enchantment_levels: [20, 15, 50, 30],
      effects: [
        {
          effect: "mod_lavacow:thorned",
          chance: 1.0,
        },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 4,
          },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 5.5,
          },
        },
        
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: {
            min: 0.25,
            max: 0.5,
          },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "unburied",
      entity: "mod_lavacow:unburied",
      weight: 3,
      size: {
        width: 1,
        height: 2,
      },
      enchant_chance: 0.35,
      rarity_offset: 275,
      enchantment_levels: [20, 15, 50, 30],
      effects: [
        {
          effect: "ars_nouveau:",
          chance: 1.0,
        },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 4,
          },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 5.5,
          },
        },
        
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: {
            min: 0.25,
            max: 0.5,
          },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "wendigo",
      entity: "mod_lavacow:wendigo",
      weight: 3,
      size: {
        width: 1,
        height: 2,
      },
      enchant_chance: 0.35,
      rarity_offset: 275,
      enchantment_levels: [20, 15, 50, 30],
      effects: [
        {
          effect: "abundance:supportive",
          chance: 1.0,
        },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 4,
          },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 5.5,
          },
        },
        
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: {
            min: 0.25,
            max: 0.5,
          },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "zombie_brute",
      entity: "eidolon:zombie_brute",
      weight: 3,
      size: {
        width: 1,
        height: 2,
      },
      enchant_chance: 0.35,
      rarity_offset: 275,
      enchantment_levels: [20, 15, 50, 30],
      effects: [
        {
          effect: "minecraft:fire_resistance",
          chance: 1.0,
        },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 5,
          },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 4.5,
          },
        },
        
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: {
            min: 0.25,
            max: 0.5,
          },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
    {
      name: "eidolon_wraith",
      entity: "eidolon:wraith",
      weight: 3,
      size: {
        width: 1,
        height: 2,
      },
      enchant_chance: 0.35,
      rarity_offset: 275,
      enchantment_levels: [20, 15, 50, 30],
      effects: [
        {
          effect: "minecraft:fire_resistance",
          chance: 1.0,
        },
      ],
      attribute_modifiers: [
        {
          attribute: "minecraft:generic.max_health",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 4,
          },
        },
        {
          attribute: "minecraft:generic.attack_damage",
          operation: "MULTIPLY_BASE",
          value: {
            min: 2,
            max: 4.5,
          },
        },
        
        {
          attribute: "minecraft:generic.knockback_resistance",
          operation: "ADDITION",
          value: {
            min: 0.25,
            max: 0.5,
          },
        },
      ],
      valid_gear_sets: ["#standard"],
    },
  ];

  bosses.forEach((boss) => {
    event.addJson(`apotheosis:bosses/${boss.name}.json`, boss);
  });
});
