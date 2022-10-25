const express = require('express')
const router = express.Router()

let header = () =>{
  return `<header>
  <a href="/" class="logo">Way Home</a>
  <div class="sign">
      <a href="/signin" class="sign-in"><div>로그인</div></a>
      <a href="/signup" class="sign-up"><div>회원가입</div></a>
  </div>
</header>`
}
// function router(req, res){
//   let header = 
//   `<header>
//   <a href="/" class="logo">Way Home</a>
//   <div class="sign">
//   <a href="/signin" class="sign-in"><div>로그인</div></a>
//   <a href="/signup" class="sign-up"><div>회원가입</div></a>
//   </div>
//   </header>`
//   return header
//   }
router.get('/', (req, res)=>{
  res.send(header())
})
module.exports = router

