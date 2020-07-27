
const webcam = new Webcam(document.getElementById('wc'));




    async function run(){
         const img = webcam.capture();
        const MODEL_URL = 'http://127.0.0.1:8887/model.json';
        const model1 = await tf.loadLayersModel(MODEL_URL);
        const predictions = tf.tidy(() => model1.predict(img));
        alert(predictions)
        const classId = (await predictions.as1D().argMax().data())[0];
            var predictionText = "";
    switch(classId){
		case 0:
			predictionText = "I see Covid";
			break;
		case 1:
			predictionText = "I see Normal";
			break;
		case 2:
			predictionText = "I see Penumina";
			break;
	}
	document.getElementById("prediction").innerText = predictionText;

    }



function startPredicting(){
	run();
}



async function init(){
	await webcam.setup();
//	mobilenet = await loadMobilenet();
//	tf.tidy(() => mobilenet.predict(webcam.capture()));
		
}



init();
