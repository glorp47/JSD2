Function.prototype.myBind = function(context) {
  var fn = this;
  return function() {
    fn.apply(context);
  };
};

function Cat (name) {
  this.name = name;
}

var cat = new Cat("Gizmo");

Cat.prototype.catName = function() {
  console.log(this.name);
};

setTimeout(cat.catName.myBind(cat), 1000);
