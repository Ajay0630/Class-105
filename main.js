Webcam.set({width: 350, height: 300, image_format: 'png', png_quality: 90});
camera = document.getElementById("camera");
Webcam.attach(camera);
function takeSnapshotRightNowOrElse(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="The_image_Taken" style="width: 350px; height: 275px;" src="'+data_uri+'">'});
    console.log("Captured Image Successfully.");
}
console.log("ml5 version:", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-rxrIQIpa/model.json", modelLoaded);
function modelLoaded(){
    console.log("Model imported successfully")
}
function check(){
    img = document.getElementById("The_image_Taken");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if (error){
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("The_object_the_person_showed").innerHTML = results[0].label;
        percentofaccuracy = results[0].confidence * 100;
        document.getElementById("I_am_this_confident_on_my_result").innerHTML = percentofaccuracy.toFixed(1) + "%";
    }
}
