class titleScene extends Phaser.scene{
	constructor(){
		super ({key: titleScene});
		
}
preload(){
	this.load.image('backgroundImage',assets/image/casino1.png)
}
create(){
	let background=this.add.sprite(0, 0, 'backgroundImage');
	background.setOrigin(0, 0);
	
	let titl_text=this.add.text(100, 100, 'phaser RPG');
	
}
export default titleScene;