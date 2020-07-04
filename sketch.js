let video;
let poseNet;
let pose;

function setup() {
	createCanvas(640, 480);
	video = createCapture(VIDEO);
	video.hide();
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function preload() { 
  img = loadImage('sample-image.png'); 
} 

function gotPoses(poses) {
	console.log(poses);
	if(poses.length > 0) {
		pose = poses[0].pose;
	}
}

function modelLoaded() {
	console.log('poseNet Ready');
}

function draw() {
	image(video, 0, 0);
	if(pose) {
	preload();
	ellipse(pose.nose.x, pose.nose.y, 64);
	}
}