const express = require ('express')
const router = express.Router()
const chatController = require ('../controllers/chatController')

router.route('/chat')
.get(chatController.allChats)
.post(chatController.newChat)

module.exports=router