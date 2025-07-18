       const canvas = document.querySelector("canvas")
        const ctx = canvas.getContext("2d")
        const grass = new Image()
        grass.src="data:image/jpeg;base64,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"
        const stone = new Image()
        stone.src = "https://www.theappguruz.com/app/uploads/2015/06/give-shadow.png"
        const brick = new Image()
        const balanceboard = document.getElementById("balanceboard")
        let balance = 100
        let farmerCost = 75
        brick.src = "https://img.itch.zone/aW1hZ2UvMTYxNzE2Mi8xMTAzMjk5My5wbmc=/347x500/jQ%2BtLq.png"
        const farmer = new Image()
        farmer.src = "data:image/jpeg;base64,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"
        const rands = []
        for(let i = 0; i < 300; i++){
          rands.push([])
          for(let j = 0; j < 500;j++){
            rands[i].push(Math.ceil(Math.random()*50))
          }
        }
        const camera = {
          x: 0,
          y: 0,
        }
          function update(){
            requestAnimationFrame(update)
            balanceboard.innerHTML="Balance: $"+balance
            ctx.clearRect(0,0,canvas.width,canvas.height)
            for(let i = Math.ceil(camera.y/50); i < Math.ceil(camera.y/50)+50; i++){
            for(let j = Math.ceil(camera.x/50); j < Math.ceil(camera.x/50)+70; j++){
              if(rands[i][j]&&rands[i][j]<35){
          ctx.drawImage(grass,50*j-camera.x,50*i-camera.y,50,50)
              }
              else if(rands[i][j]&&rands[i][j]<50){
                ctx.drawImage(brick,50*j-camera.x,50*i-camera.y,50,50)
              }
              else{
                ctx.drawImage(stone,50*j-camera.x,50*i-camera.y,50,50)
              }
            }
        }
          }
        update()
        window.addEventListener("keydown",keydownHandler,false)
        function keydownHandler(e){
          if(e.key==="w"&&camera.y>0){
            camera.y-=50
          }
          else if(e.key==="a"&&camera.x>0){
            camera.x-=50
          }
          else if(e.key==="s"&&camera.y<12500){
            camera.y+=50
        }
        else if(e.key==="d"&&camera.x<21500){
          camera.x+=50 
        }
      }
      const unitMap = []
      for(let i = 0; i < 300; i++){
        unitMap.push([])
        for(let j = 0; j < 500; j++){
          unitMap[i].push(" ")
        }
      }
      function hireFarmer(){
        if(balance >= farmerCost){
          balance -= farmerCost
          farmerCost *= 1.25
          farmerCost = Math.ceil(farmerCost)
          for(let i = Math.ceil(camera.y/50); i < Math.ceil(camera.y/50)+50; i++){
            for(let j = Math.ceil(camera.x/50); j < Math.ceil(camera.x/50)+70;j++){
              if(typeof unitMap[i][j] !== "object"){
                unitMap[i][j]= {
                  speed: 4
                }
                break
              }
            }
          }
        }
      }
