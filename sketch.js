let video;
let poseNet;

function setup() {
	createCanvas(640, 480);
	video = createCapture(VIDEO);
	video.hide();
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}


function gotPoses(poses) {
	console.log('poseNet Ready');
}

function modelLoaded() {
	console.log('poseNet Ready');
}

function draw() {
	image(video, 0, 0);
}