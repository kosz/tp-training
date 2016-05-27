const form = {
  saveForm: function() {

  },
  validateForm: function() {

  }
};

const list = {
  getList: function() {

  }
};

let myObject = {
  otherBehaviour: () => {

  }
};

myObject = Object.assign(myObject, list, form);

console.log(myObject);

