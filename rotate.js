/**
 * Created by Alex on 20/10/2015.
 */
body = document.getElementsByTagName("body")[0]
var para = document.createElement("span");
var node = document.createTextNode("This is a test to practice bower");
para.appendChild(node);
body.appendChild(para);