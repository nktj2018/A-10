module.exports=class Aaa_Controller extends Controller{
	setting(){
		this.layout="default";

		//call component
		this.components={
			Aaaa:true,
			Bbbb:{
				aaa:"1234",
				bbb:"5678",
			},
			Cccc:true,
		};

		//call model
		this.models={
			Model001:true,
			Model002:{
				name:"buteneko",
				type:"cat",
			},
		};

		//call validation
		this.validations={
			Validation001:true,
			Validation002:{
				name:"yamada",
				type:"human",
			},
		};

		super.setting();
	}
	ccc(){

	}
	ddd(id,id2=null){
		this.render=false;

		var str="";
		str+=this.Aaaa.text_method()+"<br>";
		str+=this.Bbbb.text_method()+"<br>";
		str+=this.Model001.text_method()+"<br>";
		str+=this.Model002.text_method()+"<br>";
		str+=this.Validation001.text_method()+"<br>";
		str+=this.Validation002.text_method()+"<br>";

		return str;

	}
};