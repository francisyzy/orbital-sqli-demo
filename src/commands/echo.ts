import bot from "../lib/bot";
import { PrismaClient } from "@prisma/client";
import { Message } from "typegram";

const prisma = new PrismaClient();

const echo = () => {
  try {
    bot.on("message", async (ctx) => {
      const name = (ctx.message as Message.TextMessage).text;
      let result = await prisma.$queryRawUnsafe(
        `SELECT * FROM User WHERE name = '${name}';`,
      );
      if (typeof result !== "string") {
        try {
          ctx.reply(result as string);
        } catch (error) {
          ctx.reply("not string");
        }
      } else {
        ctx.reply(result);
      }
    });
  } catch (error) {
    console.log(error);
  }
  bot.action("delete", (ctx) => ctx.deleteMessage());
};

export default echo;
