"use strict";(self.webpackChunkFoodieCrush=self.webpackChunkFoodieCrush||[]).push([[201],{5201:(k,p,n)=>{n.r(p),n.d(p,{RegisterModule:()=>M});var g=n(9808),m=n(7656),a=n(2382),h=n(5226),f=n.n(h),e=n(1223),T=n(8827);let v=(()=>{class o{constructor(){this.nombreApellidoPattern="([a-zA-Z]+) ([a-zA-Z]+)",this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",this.passwordPattern="^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$"}camposIguales(r,t){return s=>{var l,u,d,c;return(null===(l=s.get(r))||void 0===l?void 0:l.value)!==(null===(u=s.get(t))||void 0===u?void 0:u.value)?(null===(d=s.get(t))||void 0===d||d.setErrors({noIguales:!0}),{noIguales:!0}):(null===(c=s.get(t))||void 0===c||c.setErrors(null),null)}}}return o.\u0275fac=function(r){return new(r||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var A=n(4004),b=n(2340),x=n(520);let Z=(()=>{class o{constructor(r){this.httpClient=r,this.urlBase=b.N.urlBase}validate(r){return this.checkEmail(r.value).pipe((0,A.U)(s=>null!=s.email?{emailTomado:!0}:null))}checkEmail(r){return this.httpClient.get(`${this.urlBase}/user/${r}`)}}return o.\u0275fac=function(r){return new(r||o)(e.LFG(x.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var N=n(6583),U=n(1970);function C(o,i){if(1&o&&(e.TgZ(0,"span",33),e._uU(1),e.qZA()),2&o){const r=e.oxw();e.xp6(1),e.hij(" ",r.nameErrorMsg," ")}}function q(o,i){if(1&o&&(e.TgZ(0,"span",33),e._uU(1),e.qZA()),2&o){const r=e.oxw();e.xp6(1),e.hij(" ",r.emailErrorMsg," ")}}function F(o,i){if(1&o&&(e.TgZ(0,"span",33),e._uU(1),e.qZA()),2&o){const r=e.oxw();e.xp6(1),e.hij(" ",r.userNameErrorMsg," ")}}function w(o,i){if(1&o&&(e.TgZ(0,"span",33),e._uU(1),e.qZA()),2&o){const r=e.oxw();e.xp6(1),e.hij(" ",r.passwordErrorMsg," ")}}function E(o,i){1&o&&(e.TgZ(0,"span",33),e._uU(1," Las contrase\xf1as deben de ser iguales. "),e.qZA())}function y(o,i){1&o&&(e.TgZ(0,"span",33),e._UZ(1,"br"),e._uU(2," Debes aceptar los t\xe9rminos y condiciones "),e.qZA())}const I=[{path:"",component:(()=>{class o{constructor(r,t,s,l,u){this.fb=r,this.accessService=t,this.validatorService=s,this.emailValidator=l,this.router=u,this.user={fullName:"",username:"",email:"",password:""},this.miFormulario=this.fb.group({fullName:["",[a.kI.required,a.kI.pattern(this.validatorService.nombreApellidoPattern)]],email:["",[a.kI.required,a.kI.pattern(this.validatorService.emailPattern)],[this.emailValidator]],username:["",[a.kI.required,a.kI.min(5)]],password:["",[a.kI.required,a.kI.pattern(this.validatorService.passwordPattern)]],password2:["",[a.kI.required]],condiciones:[!1,a.kI.requiredTrue]},{validators:[this.validatorService.camposIguales("password","password2")]})}get emailErrorMsg(){var r;const t=null===(r=this.miFormulario.get("email"))||void 0===r?void 0:r.errors;return t.required?"El email es obligatorio":t.pattern?"El valor ingresado no tiene formato de correo":t.emailTomado?"Este email ya est\xe1 registrado en el sistema":""}get userNameErrorMsg(){var r;const t=null===(r=this.miFormulario.get("username"))||void 0===r?void 0:r.errors;return t.required?"El nombre de usuario es obligatorio":t.min?"Debe tener como m\xednimo 5 caracteres":""}get nameErrorMsg(){var r;const t=null===(r=this.miFormulario.get("fullName"))||void 0===r?void 0:r.errors;return t.required?"Este campo es obligatorio":t.pattern?"Debe introducir un nombre y un apellido":""}get passwordErrorMsg(){var r;const t=null===(r=this.miFormulario.get("password"))||void 0===r?void 0:r.errors;return t.required?"Este campo es obligatorio":t.pattern?"M\xednimo 6 caracteres, una letra y un n\xfamero":""}ngOnInit(){this.miFormulario.reset({fullName:"",email:"",username:"",password:"",condiciones:!1})}campoNoValido(r){var t,s;return(null===(t=this.miFormulario.get(r))||void 0===t?void 0:t.invalid)&&(null===(s=this.miFormulario.get(r))||void 0===s?void 0:s.touched)}register(){this.accessService.register(this.miFormulario.value).subscribe({next:t=>{localStorage.setItem("token",t.access_token),this.accessService.getUsuario(),this.miFormulario.reset({fullName:"",email:"",username:"",password:"",condiciones:!1}),f().fire({title:"Ya forma parte de la familia FoodieCrush",icon:"success",confirmButtonText:"Acceder"}).then(s=>{s.isConfirmed&&this.router.navigateByUrl("publicar")})},error:t=>{f().fire("Error",t.error.mensaje,"error")}})}}return o.\u0275fac=function(r){return new(r||o)(e.Y36(a.qu),e.Y36(T.v),e.Y36(v),e.Y36(Z),e.Y36(m.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-register"]],decls:59,vars:8,consts:[[1,"row"],[1,"col-lg-6"],[1,"m-3"],[1,"card"],[1,"card-header","colorYellowP","m-2"],[1,"card-heading","text-center"],[1,"card-body"],[1,"mb-2"],[1,"text-muted","text-sm","mb-1","d-none","d-md-block","d-sm-block"],[3,"formGroup","ngSubmit"],[1,"form-floating","mb-3"],["formControlName","fullName","id","floatingName","type","text","placeholder","Nombre del usuario",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["for","floatingName"],["id","floatingInput","formControlName","email","type","email","placeholder","name@example.com",1,"form-control"],["for","floatingInput"],["id","floatingUser","type","text","placeholder","nombre de usuario","formControlName","username",1,"form-control"],["for","floatingUser"],["id","floatingPassword","type","password","placeholder","Password","formControlName","password",1,"form-control"],["for","floatingPassword"],["id","floatingPassword","type","password","placeholder","Confirmar la contrase\xf1a","formControlName","password2",1,"form-control"],[1,"form-check","mb-3"],["type","checkbox","formControlName","condiciones","id","flexCheckDefault",1,"form-check-input"],["for","flexCheckDefault",1,"form-check-label"],["href","#"],[1,"form-group"],["type","submit","type","submit",1,"btn","colorPurpleP",3,"disabled"],[1,"card-footer","colorYellowP","m-2"],[1,"text-sm","text-muted"],["routerLink","/login"],[1,"col-lg-6","text-center","m-auto","pb-2","d-none","d-md-block","d-sm-block"],["src","assets/img/pagRegister.jpg","alt","Manos de mujer echando harina a un bol",1,"img-thumbnail","img-responsive","imgLogin"],["ubicacion","Registro"],[1,"form-text","text-danger"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e._uU(6,"Foodie Crush Register"),e.qZA(),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"h5",7),e._uU(9," \xdanete a nuestra comunidad "),e.qZA(),e.TgZ(10,"p",8),e._uU(11,"Podr\xe1s publicar tus recetas para que todo el mundo pueda disfrutarla en sus casas. \xa1No esperes m\xe1s!"),e.qZA(),e.TgZ(12,"form",9),e.NdJ("ngSubmit",function(){return t.register()}),e.TgZ(13,"div",10),e._UZ(14,"input",11),e.YNc(15,C,2,1,"span",12),e.TgZ(16,"label",13),e._uU(17,"Nombre"),e.qZA(),e.qZA(),e.TgZ(18,"div",10),e._UZ(19,"input",14),e.YNc(20,q,2,1,"span",12),e.TgZ(21,"label",15),e._uU(22,"Direcci\xf3n correo electr\xf3nico"),e.qZA(),e.qZA(),e.TgZ(23,"div",10),e._UZ(24,"input",16),e.YNc(25,F,2,1,"span",12),e.TgZ(26,"label",17),e._uU(27,"Nombre de usuario"),e.qZA(),e.qZA(),e.TgZ(28,"div",10),e._UZ(29,"input",18),e.YNc(30,w,2,1,"span",12),e.TgZ(31,"label",19),e._uU(32,"Contrase\xf1a"),e.qZA(),e.qZA(),e.TgZ(33,"div",10),e._UZ(34,"input",20),e.YNc(35,E,2,0,"span",12),e.TgZ(36,"label",19),e._uU(37,"Confirmar contrase\xf1a"),e.qZA(),e.qZA(),e.TgZ(38,"div",21),e._UZ(39,"input",22),e.TgZ(40,"label",23),e._uU(41,"Estoy de acuerdo con los "),e.TgZ(42,"a",24),e._uU(43,"T\xe9rminos y Condiciones"),e.qZA(),e._uU(44,"."),e.qZA(),e.YNc(45,y,3,0,"span",12),e.qZA(),e.TgZ(46,"div",25),e.TgZ(47,"button",26),e._uU(48,"Registrarse"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(49,"div",27),e.TgZ(50,"div",28),e._uU(51,"\xbfYa tienes una cuenta? "),e.TgZ(52,"a",29),e._uU(53,"Entra aqu\xed"),e.qZA(),e._uU(54,"."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(55,"div",30),e._UZ(56,"img",31),e.qZA(),e.qZA(),e._UZ(57,"app-scroll-to-top",32),e._UZ(58,"app-font-size")),2&r&&(e.xp6(12),e.Q6J("formGroup",t.miFormulario),e.xp6(3),e.Q6J("ngIf",t.campoNoValido("fullName")),e.xp6(5),e.Q6J("ngIf",t.campoNoValido("email")),e.xp6(5),e.Q6J("ngIf",t.campoNoValido("username")),e.xp6(5),e.Q6J("ngIf",t.campoNoValido("password")),e.xp6(5),e.Q6J("ngIf",t.campoNoValido("password2")),e.xp6(10),e.Q6J("ngIf",t.campoNoValido("condiciones")),e.xp6(2),e.Q6J("disabled",t.miFormulario.invalid))},directives:[a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,g.O5,a.Wl,m.yS,N.H,U.G],styles:["@media screen and (min-width: 481px) and (max-width: 810px){.imgLogin[_ngcontent-%COMP%]{width:35%}}@media screen and (min-width: 811px) and (max-width: 2100px){.imgLogin[_ngcontent-%COMP%]{width:60%}}"]}),o})()}];let R=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.Bz.forChild(I)],m.Bz]}),o})();var S=n(4466);let M=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[Z,v],imports:[[g.ez,R,a.UX,S.m]]}),o})()}}]);