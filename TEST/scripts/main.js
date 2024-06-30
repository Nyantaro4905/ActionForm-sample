import { system, world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.beforeEvents.itemUse.subscribe((ev) => {
    const player = ev.source
    if (ev.itemStack.typeId !== "minecraft:compass") return;
    system.run(() => {
        const form = new ActionFormData();
        form.title("test");
        form.button("こんにちは！");
        form.show(player).then(response => {
            if (response.selection === 0) {
                player.sendMessage("こんにちは！");
                player.runCommand("summon tnt ~ ~ ~");
            }
        })
    })
})