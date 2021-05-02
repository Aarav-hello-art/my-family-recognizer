Webcam.set({
    width : 300,
    height : 300,
    image_format : "jpeg",
    jpeg_quality : 90
    })
    
    Webcam.attach('#camera')
    
    function click_image(){
        Webcam.snap(
            function (image) {
                document.getElementById("snapshot").innerHTML = `<img id="captured_img" src=${image}>`
            }
        )
    }
    
    console.log("ml5 version = "+ml5.version)
    
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Tbj4Lk07g/",model_loaded)

    function model_loaded() {
       console.log("Your model is ready") 
    }