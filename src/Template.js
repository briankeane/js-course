var render = function(template, obj){
  var str = template.replace(/\{\{(.*?)\}\}/g,  function(g, match) {
    return obj[match];
  });
  return str;
};

// var render = function(template, obj){
//   var str = template;
//   while (str.match(/\{\{(.*?)\}\}/)) {
//     debugger;
//     str.replace(/\{\{(.*?)\}\}/, function(i, match) {
//       return obj[match];
//     });
//     return str;
//   }
// };
