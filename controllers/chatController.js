const chat =  [] 

const chatController = {
    allChats: (req,res) =>{
        res.json({ response: chat})
    },
    newChat: (req,res) => {
        const {emisor, mensaje} = req.body
        const newMessage = { emisor , mensaje}
        chat.push (newMessage)
        res.json ({response: chat})
    }
}
module.exports=chatController