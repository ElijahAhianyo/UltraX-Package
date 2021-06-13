const {
    MessageEmbed
} = require("discord.js")
exports.run = async (client, message, args, logger) => {
    try {
        const ultrax = require('ultrax')
        const embed1 = new MessageEmbed()
            .setTitle("1st page embed");
        const embed2 = new MessageEmbed()
            .setTitle("2nd page embed");
        const embed3 = new MessageEmbed()
            .setTitle("3nd page embed");
        const embed4 = new MessageEmbed()
            .setTitle("4nd page embed");
        await ultrax.ButtonPaginatoir(message, [embed1, embed2, embed3, embed4], [{
                style: 'green',
                label: 'back',
                id: 'back' // don't change this line
            },
            {
                style: 'blupurple',
                label: 'next',
                id: 'next' // don't change this line
            }
        ]);


    } catch (error) {
        logger.error(error);
    }
}

exports.help = {
    name: "pagninator",
    description: "pagninator's a message",
    usage: "pagninator",
    example: "pagninator"
}

exports.conf = {
    aliases: ["p"], //Other names of the command.
    cooldown: 5 // % seconds of cooldown, Owners have bypass
}