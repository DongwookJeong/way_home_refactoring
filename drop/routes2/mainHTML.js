const { application } = require('express')
const express = require('express')
const router = express.Router()
const app = express()
const header = require(`../headerHTML`)

let main = () => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./mainPage.css">
    <title>Document</title>
  </head>
  <body>
    <div id="root">
      ${header}
      <main>
        <div id="pageSector">
          <a href="http://localhost:7777/abandonment" id="selectPage">
            <img src="main/pngegg (3).png" alt="" id="mainImg">
            <div id="abandonment">유기 동물</div>
          </a>
          <a href="http://localhost:7777/missing" id="selectPage">
            <img src="main/pngegg (3).png" alt="" id="mainImg">
            <div id="missing">실종 동물</div>
          </a>
        </div>
        <div id="introduce">
          저희 사이트는 아프고 안타까운 동물들을 보호하고<br>
          새로운 인연을 맺어주기 위해 만들어졌으며<br>
          잃어버린 소중한 반려동물을 찾기위해 만들어졌습니다.<br>
        </div>
      </main>
    </div>
  </body>
  </html>`
}
router.get('/', (req, res)=>{res.send(main())
  
  
})
module.exports = router