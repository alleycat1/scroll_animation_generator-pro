var objects = [
    "bg1", "area1", 
    "image1", "image2", "image3", "image4", "image5", "image6", "image7",
    "mark1", "mark2", 
    "label1", "label2", "label3", "label4", "label5", "label6",
    "line1", "line2", "line3", "line4"
];
var layerCount = 10;
var layerDuration = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
var layerData = [
    {//0
        "bg1":{
            "left":"0%",
            "top":"0%"
        },
        "line1":{
            "left":"70%",
            "top":"60%"
        },
        "area1":{
            "left":"75%",
            "top":"60%"
        },
        "image1":{
            "left":"40%",
            "top":"110%"
        },
        "label1":{
            "left":"40%",
            "top":"100%"
        },
    },
    {//1
        "bg1":{
            "left":"0%",
            "top":"0%"
        },
        "line1":{
            "left":"70%",
            "top":"0%"
        },
        "area1":{
            "left":"75%",
            "top":"0%"
        },
        "image1":{
            "left":"40%",
            "top":"60%",
        },
        "label1":{
            "left":"40%",
            "top":"50%"
        },
        "label2":{
            "opacity":"0",
            "left":"100%",
            "top":"30%"
        },
    },
    {//2
        "bg1":{
            "left":"0%",
            "top":"0%"
        },
        "line1":{
            "left":"70%",
            "top":"0%"
        },
        "area1":{
            "left":"75%",
            "top":"0%"
        },
        "image1":{
            "left":"20%",
            "top":"10%"
        },
        "label1":{
            "left":"30%",
            "top":"-50%"
        },
        "label2":{
            "left":"45%",
            "top":"30%"
        },
        "image2":{
            "opacity":"0",
            "left":"100%",
            "top":"30%"
        },
        "label3":{
            "opacity":"0",
            "left":"130%",
            "top":"30%"
        },
    },
    {//3
        "bg1":{
            "left":"0%",
            "top":"0%"
        },
        "line1":{
            "left":"70%",
            "top":"0%"
        },
        "area1":{
            "left":"75%",
            "top":"0%"
        },
        "image1":{
            "left":"-20%",
            "top":"120%"
        },
        "label2":{
            "left":"-25%",
            "top":"80%"
        },
        "image2":{
            "left":"20%",
            "top":"10%"
        },
        "label3":{
            "left":"45%",
            "top":"30%"
        },
        "image3":{
            "opacity":"0",
            "left":"100%",
            "top":"30%"
        },
        "label4":{
            "opacity":"0",
            "left":"130%",
            "top":"30%"
        },
    },
    {//4
        "bg1":{
            "left":"0%",
            "top":"0%"
        },
        "line1":{
            "left":"70%",
            "top":"0%"
        },
        "area1":{
            "left":"75%",
            "top":"0%"
        },
        "image2":{
            "left":"-20%",
            "top":"120%"
        },
        "label3":{
            "left":"-25%",
            "top":"100%"
        },
        "image3":{
            "left":"20%",
            "top":"10%"
        },
        "label4":{
            "left":"45%",
            "top":"30%"
        },
        "image4":{
            "opacity":"0",
            "left":"100%",
            "top":"30%"
        },
        "label5":{
            "opacity":"0",
            "left":"130%",
            "top":"30%"
        },
    },
    {//5
        "bg1":{
            "left":"0%",
            "top":"0%"
        },
        "line1":{
            "left":"70%",
            "top":"0%"
        },
        "area1":{
            "left":"75%",
            "top":"0%"
        },
        "image3":{
            "left":"-20%",
            "top":"120%"
        },
        "label4":{
            "left":"-25%",
            "top":"100%"
        },
        "image4":{
            "left":"20%",
            "top":"10%"
        },
        "label5":{
            "left":"45%",
            "top":"30%"
        },
        "label6":{
            "opacity":"0",
            "left":"35%",
            "top":"100%"
        },
        "line2":{
            "opacity":"0",
            "left":"-80%",
            "top":"50%"
        },
    },
    {//6
        "bg1":{
            "left":"0%",
            "top":"-50%"
        },
        "line1":{
            "left":"70%",
            "top":"-50%"
        },
        "area1":{
            "left":"75%",
            "top":"-50%"
        },
        "image4":{
            "left":"20%",
            "top":"-40%"
        },
        "label5":{
            "left":"45%",
            "top":"-40%"
        },
        "label6":{
            "left":"35%",
            "top":"70%"
        },
        "image5":{
            "opacity":"0",
            "left":"100%",
            "top":"80%"
        },
        "line2":{
            "left":"-40%",
            "top":"50%"
        },
        "line3":{
            "left":"65%",
            "top":"-50%"
        },
        "line4":{
            "left":"65%",
            "top":"0%"
        },
        "mark1":{
            "opacity":"0",
            "left":"-50%",
            "top":"50%"
        },
        "mark2":{
            "opacity":"0",
            "left":"100%",
            "top":"80%"
        },
    },
    {//7
        "bg1":{
            "left":"0%",
            "top":"-110%"
        },
        "line1":{
            "left":"70%",
            "top":"-110%"
        },
        "area1":{
            "left":"75%",
            "top":"-110%"
        },
        "image4":{
            "left":"20%",
            "top":"-100%"
        },
        "label5":{
            "left":"45%",
            "top":"-80%"
        },
        "label6":{
            "left":"45%",
            "top":"-50%"
        },
        "image5":{
            "left":"35%",
            "top":"25%"
        },
        "line2":{
            "left":"0%",
            "top":"0%"
        },
        "line3":{
            "left":"35%",
            "top":"0%"
        },
        "line4":{
            "left":"65%",
            "top":"0%"
        },
        "mark1":{
            "left":"5%",
            "top":"50%"
        },
        "mark2":{
            "left":"15%",
            "top":"80%"
        },
        "image6":{
            "left":"100%",
            "top":"25%"
        },
    },
    {//8
        "image5":{
            "left":"-160%",
            "top":"25%"
        },
        "line2":{
            "left":"10%",
            "top":"10%"
        },
        "line3":{
            "left":"25%",
            "top":"0%"
        },
        "line4":{
            "left":"75%",
            "top":"20%"
        },
        "mark1":{
            "left":"35%",
            "top":"50%"
        },
        "mark2":{
            "left":"5%",
            "top":"80%"
        },
        "image6":{
            "left":"35%",
            "top":"25%"
        },
        "image7":{
            "left":"100%",
            "top":"25%"
        },
    },
    {//9
        "image6":{
            "left":"-160%",
            "top":"25%"
        },
        "line2":{
            "left":"0%",
            "top":"0%"
        },
        "line3":{
            "left":"35%",
            "top":"0%"
        },
        "line4":{
            "left":"65%",
            "top":"0%"
        },
        "mark1":{
            "left":"35%",
            "top":"50%"
        },
        "mark2":{
            "left":"5%",
            "top":"80%"
        },
        "image7":{
            "left":"35%",
            "top":"25%"
        },
    },
    {//9
        "image7":{
            "left":"35%",
            "top":"-100%"
        },
        "line2":{
            "left":"0%",
            "top":"-100%"
        },
        "line3":{
            "left":"35%",
            "top":"-100%"
        },
        "line4":{
            "left":"65%",
            "top":"-100%"
        },
        "mark1":{
            "left":"15%",
            "top":"-120%"
        },
        "mark2":{
            "left":"25%",
            "top":"-120%"
        },
    },
];

function generateCss(){
    var motionCount = 2 * (layerCount - 1);
    for(var i=0; i<layerCount-1; i++)
    {
        for(var objName in layerData[i])
        {
            if(layerData[i+1][objName])
            {
                var motionName1 = objName + "_" + i + "_" + (i+1);
                console.log("@keyframes " + motionName1 + "{");
                console.log("  from {left:" + layerData[i][objName].left + "; top:" + layerData[i][objName].top + "; opacity: 0.8;}");
                console.log("  to {left:" + layerData[i+1][objName].left + "; top:" + layerData[i+1][objName].top + "; opacity: 1;}");
                console.log("}\n");
                console.log("div." + motionName1 + "{");
                console.log("  position: absolute;");
                console.log("  visibility:visible;");
                console.log("  animation-duration: " + layerDuration[i] + "s;");
                console.log("  animation-iteration-count: 1;");
                console.log("  animation-direction: alternate;");
                console.log("  animation-fill-mode: forwards;");
                console.log("  width:100%; height:100%;");
                console.log("  opacity: 1;");
                console.log("  animation-name:" + motionName1 + ";");
                console.log("  left:" + layerData[i+1][objName].left + "; top:" + layerData[i+1][objName].top + ";");
                console.log("}\n");
            }
        }
        for(var objName in layerData[i+1])
        {
            if(layerData[i][objName])
            {
                var motionName2 = objName + "_" + (i+1) + "_" + i;
                console.log("@keyframes " + motionName2 + "{");
                console.log("  from {left:" + layerData[i+1][objName].left + "; top:" + layerData[i+1][objName].top + "; opacity: 0.8;}");
                console.log("  to {left:" + layerData[i][objName].left + "; top:" + layerData[i][objName].top + "; opacity: 1;}");                    
                console.log("}\n");
                console.log("div." + motionName2 + "{");
                console.log("  position: absolute;");
                console.log("  visibility:visible;");
                console.log("  opacity:1;");
                console.log("  animation-duration: " + layerDuration[i] + "s;");
                console.log("  animation-iteration-count: 1;");
                console.log("  animation-direction: alternate;");
                console.log("  animation-fill-mode: forwards;");
                console.log("  width:100%; height:100%;");
                console.log("  animation-name:" + motionName2 + ";");
                console.log("  left:" + layerData[i][objName].left + "; top:" + layerData[i][objName].top + ";");
                console.log("}\n");
            }
        }
    }
}

generateCss();
