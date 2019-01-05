const ytdl = require('ytdl-core');

module.exports.run = async (bot,message,args) => {

    const streamOptions = {seek: 0, volume: 1};
    let voiceChannelID = "507370948798709766";

    console.log("Starting voice commmand");

    if (voiceChannelID != null) {
        if (message.guild.channels.get(voiceChannelID)){
            let vc = message.guild.channels.get(voiceChannelID);
            console.log("Next step, connection");

            vc.join().thn(connection => {
                console.log("[VOICE CHANNEL] joined countdown channel");
                const stream = ytdl('https://www.youtube.com/watch?v=nyC0c6t7Vq0');
                const dispatcher = connection.playStreeam(stream, streamOptions);

                dispatcher.on("end", end => {
                    console.log("[VOICE CHANNEL] left countdown channel.");
                    vc.leave();
                });
            }).catch(err => {
                console.log(err);
            })
        }
    }

}



module.exports.help = {
    name: "count"
}


