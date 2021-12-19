    
     var data = [
        {
            imgUrl:"https://static.thcdn.com/images/small/webp//productimg/original/13280761-1244901837402433.jpg",
            prodetails:"Sunday Riley The Big Glow Deluxe Good Genes Kit - $309 Value",
            saleoff:"Sunday Riley Gift ",
            star: "★★★★★335",
            MSRP: "MSRP:",
            strikedOffPrice:" $189.00",
            price:"$35.00",
            quick:"QUICK BUY"
        }, {
            imgUrl:"https://static.thcdn.com/images/small/webp//productimg/original/13280763-1044900046578932.jpg",
            prodetails:"Sunday Riley Morning Buzz Brightening Duo - $150 Value",
            saleoff:"Sunday Riley Gift ",
            star: "★★★★★145",
            MSRP: "MSRP:",
            strikedOffPrice:" $190.00",
            price:"$35.00",
            quick:"QUICK BUY"
        },{
            imgUrl:"https://static.thcdn.com/images/small/webp//productimg/original/11719722-1134871560028310.jpg",
            prodetails:"Lancer Skincare Omega Hydrating Oil with Ferment Complex (1 fl. oz.)",
            saleoff:"Sunday Riley Gift ",
            star: "★★★★★67",
            MSRP: "MSRP:",
            strikedOffPrice:" $209.00",
            price:"$135.00",
            quick:"QUICK BUY"
        },
        {
            imgUrl:"https://static.thcdn.com/images/small/webp//productimg/original/12898514-1494918159467819.jpg",
            prodetails:"SENTÉ Dermal Repair Cream (1.7 fl. oz.)",
            saleoff:"Sunday Riley Gift ",
            star: "★★★★★348",
            MSRP: "MSRP:",
            strikedOffPrice:" $180.00",
            price:"$35.00",
            quick:"QUICK BUY"
    
        }
       
    ];
    data.map(function(elem){
            var div1 = document.createElement("div");
            div1.setAttribute("id", "div1")
    
            var div2 = document.createElement("div")
            div2.setAttribute("id" ,"div2");
                
            var div4=document.createElement("div")
            div4.setAttribute("id" , "div4")
    
            var img1 = document.createElement("img")
            img1.setAttribute("id","img1")
            img1.setAttribute("src" , elem.imgUrl)
            
           var div3  = document.createElement("div");
           div3.setAttribute("id" , "div3")
    
    
            var h2 = document.createElement("p")
            h2.textContent = elem.prodetails;
                
            var ptext = document.createElement("p")
            ptext.textContent = elem.saleoff;
    
            var div5  = document.createElement("div");
           div5.setAttribute("id" , "div5")
           div5.textContent = elem.star;
    
           var div6  = document.createElement("div");
           div6.setAttribute("id" , "div6")
    
           var pm = document.createElement("p");
           pm.textContent = elem.MSRP;
    
           var ps = document.createElement("p");
           ps.textContent = elem.strikedOffPrice;
           ps.setAttribute("id" , "ps")
    
           var div7= document.createElement("h3")
           div7.setAttribute("id","hh");
           div7.textContent = elem.price;
            var div8 = document.createElement("div")
            div8.setAttribute("id" ,"div8")
            var btn1= document.createElement("button")
            btn1.setAttribute("id", "btn1")
            btn1.textContent =elem.quick
    
           div8.append(btn1)
            div6.append(pm,ps)
            div3.append(ptext)
            div4.append(h2);
            div2.append(img1);
            div1.append(div2,div4,div3,div5,div6,div7,div8)
    
            document.querySelector(".main").append(div1)
    
    
        })
    
    
    
    
    
    
    
    // fifth Pert
    
    
    var data1 = [
        {
            imgUrl:"https://static.thcdn.com/images/small/webp//productimg/original/11290635-2054892767941057.jpg",
            prodetails:"SkinCeuticals Triple Lipid Restore 242 (1.6 fl. oz.)",
            saleoff:"Sunday Riley Gift ",
            star: "★★★★★34",
            MSRP: "MSRP:",
            strikedOffPrice:"$100.00",
            price:"$35.00",
            quick:"QUICK BUY"
        }, {
            imgUrl:"https://static.thcdn.com/images/small/webp//productimg/original/12902892-1954869141433701.jpg",
            prodetails:"Sunday Riley Morning Buzz Brightening Duo - $150 Value",
            saleoff:"Sunday Riley Gift ",
            star: "★★★★★567",
            MSRP: "MSRP:",
            strikedOffPrice:"$100.00",
            price:"$35.00",
            quick:"QUICK BUY"
        },{
            imgUrl:"https://static.thcdn.com/images/small/webp//productimg/original/11719722-1134871560028310.jpg",
            prodetails:"iS Clinical Youth Intensive Creme (1.7 oz.).",
            saleoff:"Sunday Riley Gift ",
            star: "★★★★★752",
            MSRP: "MSRP:",
            strikedOffPrice:"$150.00",
            price:"$135.00",
            quick:"QUICK BUY"
        },
        {
            imgUrl:"https://static.thcdn.com/images/small/webp//productimg/1600/1600/11833559-2544781056254810.jpg",
            prodetails:"SENTÉ Dermal Repair Cream (1.7 fl. oz.)",
            saleoff:"Sunday Riley Gift ",
            star: "★★★★★87",
            MSRP: "MSRP:",
            strikedOffPrice:"$100.00",
            price:"$35.00",
            quick:"QUICK BUY"
    
        }
       
    
    ];
        data1.map(function(elem){
            var sdiv1 = document.createElement("div");
            sdiv1.setAttribute("id", "sdiv1")
    
            var sdiv2 = document.createElement("div")
            sdiv2.setAttribute("id" ,"sdiv2");
                
            var sdiv4=document.createElement("div")
            sdiv4.setAttribute("id" , "sdiv4")
    
            var img = document.createElement("img")
            img.setAttribute("src" , elem.imgUrl)
            
           var sdiv3  = document.createElement("div");
           sdiv3.setAttribute("id" , "sdiv3")
    
    
            var h2 = document.createElement("p")
            h2.textContent = elem.prodetails;
                
            var ptext = document.createElement("p")
            ptext.textContent = elem.saleoff;
    
            var sdiv5  = document.createElement("div");
           sdiv5.setAttribute("id" , "sdiv5")
           sdiv5.textContent = elem.star;
    
           var sdiv6  = document.createElement("div");
           sdiv6.setAttribute("id" , "div6")
    
           var pm = document.createElement("p");
           pm.textContent = elem.MSRP;
    
           var ps = document.createElement("p");
           ps.textContent = elem.strikedOffPrice;
           ps.setAttribute("id" , "ps")
    
           var div7= document.createElement("h3")
           div7.textContent = elem.price;
            var sdiv8 = document.createElement("div")
            sdiv8.setAttribute("id" ,"div8")
            var btn2= document.createElement("button")
            btn2.setAttribute("id" ,"btn2")
    
            btn2.textContent =elem.quick
    
           sdiv8.append(btn2)
            sdiv6.append(pm,ps)
            sdiv3.append(ptext)
            sdiv4.append(h2);
            sdiv2.append(img);
            sdiv1.append(sdiv2,sdiv4,sdiv3,sdiv5,sdiv6,div7,sdiv8)
    
            document.querySelector(".smain").append(sdiv1)
    
    
        })
    
    
    
        // sixth part
    
    
    
        var ndata = [
        {
            imgUrl:"https://static.thcdn.com/images/small/webp//productimg/original/11290635-2054892767941057.jpg",
            prodetails:"SkinCeuticals Triple Lipid Restore 242 (1.6 fl. oz.)",
            saleoff:"Sunday Riley Gift ",
            star: "★★★★★234",
            MSRP: "MSRP:",
            strikedOffPrice:"$100.00",
            price:"$35.00",
            quick:"QUICK BUY"
        }, {
            imgUrl:"https://static.thcdn.com/images/small/webp//productimg/original/12902892-1954869141433701.jpg",
            prodetails:"Sunday Riley Morning Buzz Brightening Duo - $150 Value",
            saleoff:"Sunday Riley Gift ",
            star: "★★★★★108",
            MSRP: "MSRP:",
            strikedOffPrice:"$100.00",
            price:"$35.00",
            quick:"QUICK BUY"
        },{
            imgUrl:"https://static.thcdn.com/images/small/webp//productimg/original/11719722-1134871560028310.jpg",
            prodetails:"iS Clinical Youth Intensive Creme (1.7 oz.).",
            saleoff:"Sunday Riley Gift ",
            star: "★★★★★68",
            MSRP: "MSRP:",
            strikedOffPrice:"$150.00",
            price:"$135.00",
            quick:"QUICK BUY"
        },
        {
            imgUrl:"https://static.thcdn.com/images/small/webp//productimg/1600/1600/11833559-2544781056254810.jpg",
            prodetails:"SENTÉ Dermal Repair Cream (1.7 fl. oz.)",
            saleoff:"Sunday Riley Gift ",
            star: "★★★★★156",
            MSRP: "MSRP:",
            strikedOffPrice:"$100.00",
            price:"$35.00",
            quick:"QUICK BUY"
    
        }
        
    
    ];
    ndata.map(function(elem){
            var ndiv1 = document.createElement("div");
            ndiv1.setAttribute("id", "ndiv1")
    
            var ndiv2 = document.createElement("div")
            ndiv2.setAttribute("id" ,"ndiv2");
                
            var ndiv4=document.createElement("div")
            ndiv4.setAttribute("id" , "ndiv4")
    
            var img = document.createElement("img")
            img.setAttribute("src" , elem.imgUrl)
            
           var ndiv3  = document.createElement("div");
           ndiv3.setAttribute("id" , "ndiv3")
    
    
            var h2 = document.createElement("p")
            h2.textContent = elem.prodetails;
                
            var ptext = document.createElement("p")
            ptext.textContent = elem.saleoff;
    
            var ndiv5  = document.createElement("div");
           ndiv5.setAttribute("id" , "ndiv5")
           ndiv5.textContent = elem.star;
    
           var ndiv6  = document.createElement("div");
           ndiv6.setAttribute("id" , "ndiv6")
    
           var pm = document.createElement("p");
           pm.textContent = elem.MSRP;
    
           var ps = document.createElement("p");
           ps.textContent = elem.strikedOffPrice;
           ps.setAttribute("id" , "ps")
    
           var div7= document.createElement("h3")
           div7.textContent = elem.price;
            var ndiv8 = document.createElement("div")
            ndiv8.setAttribute("id" ,"ndiv8")
            var btn3= document.createElement("button")
            btn3.setAttribute("id","btn3")
            btn3.textContent =elem.quick
    
           ndiv8.append(btn3)
            ndiv6.append(pm,ps)
            ndiv3.append(ptext)
            ndiv4.append(h2);
            ndiv2.append(img);
            ndiv1.append(ndiv2,ndiv4,ndiv3,ndiv5,ndiv6,div7,ndiv8)
    
            document.querySelector(".nmain").append(ndiv1)
    
    
        })
    
    