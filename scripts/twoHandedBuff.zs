

import crafttweaker.api.item.IItemStack;
import crafttweaker.api.entity.Attribute;
import crafttweaker.api.entity.AttributeModifier;


// This script buffs damage of every weapon that restricts the offhand as per BetterCombat classification. Spartan weapons are excluded, since their damage values are hardcoded and edited in the config instead.

var twoHandedWeapons = ["claymore", "greatsword", "the_incinerator", "great_hammer", "greathammer", "war_hammer", "warhammer", "maul", "gebs_might", "infernal_forge", "troll_weapon", "battlestaff", "quarterstaff", "scythe", "tide_dweller", "halberd", "glaive", "pike", "trident", ] as string[];

var scythes = ["scythe", "tide_dweller"] as string[];

var polearms = ["halberd", "glaive", "pike", "trident", ] as string[];

// loop through every item
for item in game.items {

    // loop through each of the 3 arrays
    for weapon in twoHandedWeapons {
        if (weapon in (item.registryName as string)) {

            var attributeList = item.getAttributes(<equipmentslottype:mainhand>);

            for attribute in attributeList {

                // println(attribute.getCommandString());
                if (attribute.getCommandString() == "<attribute:minecraft:generic.attack_damage>") {

                    // println("Attribute minecraft generic attack damage");

                    // var modifier = 1.3;

                    // if ("scythe" in item.registryName as string) {
                    //     modifier = 1.6;
                    // }
                    // else if ("halberd" in item.registryName as string || "glaive" in item.registryName as string || "pike" in item.registryName as string || "trident" in item.registryName as string) {
                    //     modifier = 1.4;
                    // }

                    // var newDamage = attribute.getAmount() * modifier;

                    // item.addGlobalAttributeModifier(<attribute:minecraft:attack_damage>, "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "buffed_2h_damage", newDamage as int, ADDITION, [<equipmentslottype:mainhand>]);
                }
            }
        }
    }
}