//array method returns unique items
Array.prototype.unique = function() {
  var x = [];
  for (var i = 0; i < this.length; i++) {
    if (x.indexOf(this[i]) === -1) x.push(this[i]);
  }
  return x;
};
//string method converts str to array for unique char returns new str "n" char long
String.prototype.generate = function(n) {
  var t = '';
  for (var i = 0; i < this.length; i++) {
    t += this.charAt(Math.floor(Math.random() * this.length >>> 0));
  }
  return t.split("").unique().join("").substr(0, n);
};
// object of propties and functions for controling password generation
var Generator = function(low, upp, nums, sym) {
  this.low = low;
  this.upp = upp;
  this.nums = nums;
  this.sym = sym;
  this.lu = this.low + this.upp;
  this.ln = this.low + this.upp + this.nums;
  this.lns = this.low + this.upp + this.nums + this.sym;
  this.w = false;
  this.g = false;
  this.s = false;
};
Generator.prototype.clrTxtShowBtn = function() {
  document.getElementById("reveal").innerHTML = '';
  document.getElementById("copy").style.display = '';
  document.getElementById("clear").style.display = '';
};
Generator.prototype.weak = function() {
  this.clrTxtShowBtn();
  this.w = true;
  return document.getElementById("reveal").innerHTML = this.lu.generate(8);
};
Generator.prototype.good = function() {
  this.clrTxtShowBtn();
  this.g = true;
  return document.getElementById("reveal").innerHTML = this.ln.generate(10);
};
Generator.prototype.strong = function() {
  this.clrTxtShowBtn();
  this.s = true;
  var stg = document.createTextNode(this.lns.generate(16));
  return document.getElementById("reveal").appendChild(stg);
};
Generator.prototype.clear = function() {
  document.getElementById("reveal").innerHTML = '';
  document.getElementById("copy").style.display = 'none';
  document.getElementById("clear").style.display = 'none';
};
var password = new Generator(
  "abcdefghijklmnopqrstuvwxyz",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "1234567890",
  "!#$%&()*+-./:;<=>?@[\]^_{|}~"
);
// some jQuery for bootstrap tooltip
$(document).ready(function(){
// bootstrap tooltip
    $('#copy').tooltip({title: "copied", trigger: "focus", placement: "left"});
});
//clipboard Js
var btn = document.getElementById('copy');
		var clipboard = new Clipboard(copy);
		clipboard.on('success', function(e) {
			console.log(e);
		});
		clipboard.on('error', function(e) {
			console.log(e);
		});
