import { system, world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.beforeEvents.itemUse.subscribe((ev) => {//アイテムを使った時
    const player = ev.source
    if (ev.itemStack.typeId !== "minecraft:compass") return;//アイテムがコンパスだった場合
    system.run(() => {//遅延実行
        const form = new ActionFormData();
        form.title("test");
        form.button("こんにちは！ ボタン0");
        form.show(player).then(response => {
            if (response.selection === 0) {//ボタン0が押されたら
                player.sendMessage("こんにちは！");//アイテムを使ったプレイヤーに「こんにちは！」と言う
                player.runCommand("summon tnt ~ ~ ~");//アイテムを使ったプレイヤーの位置にTNTを召喚する
            }
        })
    })
})