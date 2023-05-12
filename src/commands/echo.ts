import bot from "../lib/bot";
import { PrismaClient } from "@prisma/client";
import { Message } from "typegram";

const prisma = new PrismaClient();

const echo = () => {
  try {
    bot.on("message", async (ctx) => {
      try {
        const name = (ctx.message as Message.TextMessage).text;
        const query = "SELECT phone_number FROM user WHERE role = 'USER' AND name = '" + name + "'"
        ctx.reply("query: " + query)
        let result = await prisma.$queryRawUnsafe(query);
        console.log(result);
        ctx.reply(JSON.stringify(result));
      } catch (error) {
        ctx.reply(JSON.stringify(error));
      }
    });
  } catch (error) {
    console.log(error);
  }
  bot.action("delete", (ctx) => ctx.deleteMessage());
};

export default echo;
