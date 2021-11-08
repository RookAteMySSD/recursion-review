// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var Result = [];
  var Document = document.body;
  var DocLoop = function(Doc) {
    var ClassList = Doc.ClassList;
    if (ClassList !== undefined && ClassList.contains(className)) {
      Result.push(Doc);
    }
    Doc.childNodes.forEach(function(child) {
      DocLoop(child);
    });
  };
  DocLoop(Document);
  return Result;
};