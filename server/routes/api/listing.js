const express = require('express')
const router = express.Router()
const listController = require('../../controllers/listController');

router.post('/', listController.create);



// router.post('/logout', (req, res) => {
//     if (req.user) {
//         req.logout()
//         res.send({ msg: 'logging out' })
//     } else {
//         res.send({ msg: 'no user to log out' })
//     }
// })

// router.post(
//     '/login',
//     function (req, res, next) {
//         console.log('routes/user.js, login, req.body: ');
//         // console.log(req.body)
//         next()
//     },
//     passport.authenticate('local'),
//     (req, res) => {
//         console.log('logged in', req.user);
//         var userInfo = {
//             username: req.user.username,
//             id: req.user._id
//         };
//                 // var userId = {id: req.user.id}
//         res.send(userInfo) //.send(userId);
//     }
// )



module.exports = router;