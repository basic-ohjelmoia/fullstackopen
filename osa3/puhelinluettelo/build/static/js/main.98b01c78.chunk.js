(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(44)},21:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),l=n.n(r),s=(n(21),n(11)),u=n(12),i=n(14),c=n(13),m=n(15),f=n(2),h=n.n(f),d=function(e){var t=e.person,n=e.selectForRemoval;return o.a.createElement("tr",null,o.a.createElement("td",null,t.name),o.a.createElement("td",null,t.number," ",o.a.createElement("button",{onClick:n},"Remove")))},g="/api/people",p={getAll:function(){return h.a.get(g).then(function(e){return e.data})},create:function(e){return h.a.post(g,e).then(function(e){return e.data})},update:function(e,t){return h.a.put("".concat(g,"/").concat(e),t).then(function(e){return e.data})},remove:function(e,t){return console.log(e,t),h.a.delete("".concat(g,"/").concat(e),t).then(function(e){return e.data})}},v=(n(42),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).handleNameChange=function(e){console.log(e.target.value),n.setState({newName:e.target.value})},n.handleNumberChange=function(e){console.log(e.target.value),n.setState({newNumber:e.target.value})},n.handleFilterChange=function(e){console.log(e.target.value),n.setState({filter:e.target.value})},n.addName=function(e){e.preventDefault();var t={name:n.state.newName,number:n.state.newNumber},a=n.state.persons.map(function(e){return e.name}).includes(t.name);console.log(a);a?n.state.persons:n.state.persons.concat(t);console.log("name obj",t),p.create(t).then(function(e){n.setState({message:"Luotiin "+e.name+"!",persons:n.state.persons.concat(e),newName:"",newNumber:""})}),setTimeout(function(){n.setState({message:null})},3e3)},n.selectForRemoval=function(e){return function(){var t=n.state.persons.find(function(t){return t.id===e});window.confirm("Poistetaanko "+n.state.persons.find(function(t){return t.id===e}).name+"?")?p.remove(e,t).then(function(t){console.log(t),console.log("invidual id: ",e),console.log(n.state.persons),n.setState({message:"Poistettiin "+n.state.persons.filter(function(t){return t.id===e})[0].name+"!",persons:n.state.persons.filter(function(t){return t.id!==e}),removeable:"",newName:"",newNumber:""}),setTimeout(function(){n.setState({message:null})},3e3)}):(n.setState({message:n.state.persons.filter(function(t){return t.id===e})[0].name+" j\xe4tettiin puhelinluetteloon!"}),setTimeout(function(){n.setState({message:null})},3e3))}},n.state={persons:[],newName:"",newNumber:"",filter:"",message:null},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this;p.getAll().then(function(t){e.setState({persons:t})})}},{key:"render",value:function(){var e=this,t=this.state.filter.length<1?this.state.persons:this.state.persons.filter(function(t){return t.name.toString().toLowerCase().includes(e.state.filter.toString().toLowerCase())});return o.a.createElement("div",null,o.a.createElement("h2",null,"Puhelinluettelo"),o.a.createElement(function(){return null===e.state.message?null:o.a.createElement("div",{className:"error"},e.state.message)},null),o.a.createElement("div",null,"rajaa n\xe4ytett\xe4v\xe4: ",o.a.createElement("input",{value:this.state.filter,onChange:this.handleFilterChange})),o.a.createElement("h2",null,"Lis\xe4\xe4 uusi"),o.a.createElement("form",{onSubmit:this.addName},o.a.createElement("div",null,"nimi: ",o.a.createElement("input",{value:this.state.newName,onChange:this.handleNameChange})),o.a.createElement("div",null,"numero: ",o.a.createElement("input",{value:this.state.newNumber,onChange:this.handleNumberChange})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"lis\xe4\xe4"))),o.a.createElement("h2",null,"Numerot"),o.a.createElement("table",null,o.a.createElement("tbody",null,t.map(function(t,n){return o.a.createElement(d,{key:n,person:t,selectForRemoval:e.selectForRemoval(t.id)})}))),o.a.createElement("hr",null),o.a.createElement("div",null,"debug: ",this.state.newName))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.98b01c78.chunk.js.map